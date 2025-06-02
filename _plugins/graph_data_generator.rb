# _plugins/graph_data_generator.rb
require 'json'
require 'fileutils'
require 'nokogiri'
require 'uri'

# Definisci e inizializza la variabile a livello di modulo
$graph_data_for_edges = {} # INIZIALIZZA QUI COME HASH VUOTO

module Jekyll
  class GraphDataGenerator < Generator
    safe true
    priority :lowest

    def normalize_jekyll_path(path_str, site_baseurl_for_stripping)
      return nil if path_str.nil? || path_str.empty?
      normalized = path_str.strip
      normalized = '/' + normalized unless normalized.start_with?('/')
      if !site_baseurl_for_stripping.empty? && site_baseurl_for_stripping != "/" && normalized.start_with?(site_baseurl_for_stripping)
        normalized = normalized.slice(site_baseurl_for_stripping.length..-1)
        normalized = '/' + normalized unless normalized.start_with?('/')
      end
      normalized = normalized.gsub(/\/index\.html$/, '/')
      unless normalized.end_with?('/') || normalized.split('/').last.to_s.include?('.') || normalized.include?('#')
        normalized += '/'
      end
      normalized = normalized.gsub(/(?<!:)\/\//, '/')
      normalized
    end

    def generate(site)
      puts "DEBUG PLUGIN (Generator): Inizio Fase 1 - Creazione Nodi."

      # Resetta/Inizializza i dati globali ad ogni build
      $graph_data_for_edges[:nodes] = []
      $graph_data_for_edges[:edges] = [] 
      $graph_data_for_edges[:processed_jekyll_docs] = {}
      $graph_data_for_edges[:registered_author_sites] = {}
      
      raw_baseurl = site.config['baseurl'].to_s
      $graph_data_for_edges[:baseurl_for_paths] = if raw_baseurl.empty? || raw_baseurl == "/"
                                                    "/"
                                                  else
                                                    ('/' + raw_baseurl.gsub(%r{^/+|/+$}, '')).chomp('/')
                                                  end
      $graph_data_for_edges[:baseurl_for_paths] = "/" if $graph_data_for_edges[:baseurl_for_paths].empty?

      site_domain_url = site.config['url'].to_s.chomp('/')
      $graph_data_for_edges[:site_full_url] = site_domain_url + ($graph_data_for_edges[:baseurl_for_paths] == "/" ? "" : $graph_data_for_edges[:baseurl_for_paths])
      $graph_data_for_edges[:site_full_url] += '/' unless $graph_data_for_edges[:site_full_url].end_with?('/')

      $graph_data_for_edges[:map_node_id] = normalize_jekyll_path("/", "")
      map_node_url_for_click = $graph_data_for_edges[:baseurl_for_paths] == "/" ? "/" : $graph_data_for_edges[:baseurl_for_paths]
      
      # Usa direttamente le chiavi della variabile globale per popolare
      $graph_data_for_edges[:nodes] << { 
        id: $graph_data_for_edges[:map_node_id], 
        label: "S-E-A-M", 
        originalLabel: "S-E-A-M",
        excerpt: "Questo è il punto di partenza per esplorare il sito.",
        group: 0, value: 35, 
        url: map_node_url_for_click 
      }
      $graph_data_for_edges[:processed_jekyll_docs][$graph_data_for_edges[:map_node_id]] = { 
        title: "S-E-A-M", 
        original_url: "/", 
        excerpt: $graph_data_for_edges[:nodes].last[:excerpt] 
      }
      puts "DEBUG PLUGIN (Generator): Creato nodo centrale MAPPA con ID: '#{$graph_data_for_edges[:map_node_id]}'"

      if site.data['authors']
        site.data['authors'].each do |author_key, author_data|
          author_website_url = nil
          author_data['links']&.each do |link|
            if link['label'] == "Website" && link['url'] && !link['url'].strip.empty?
              author_website_url = link['url'].strip
              break
            end
          end
          if author_website_url
            $graph_data_for_edges[:registered_author_sites][author_website_url] = { 
              name: author_data['name'], 
              bio: author_data['bio'] || "Visita il sito di #{author_data['name']}."
            }
          end
        end
      end
      puts "DEBUG PLUGIN (Generator): Registrati #{$graph_data_for_edges[:registered_author_sites].size} potenziali siti autori."

      all_documents = site.pages + site.posts.docs
      all_documents.each do |doc|
        next if doc.data['title'].nil? || doc.data['title'].empty?
        node_id = normalize_jekyll_path(doc.url, "")
        next if node_id.nil?
        next if node_id == $graph_data_for_edges[:map_node_id] && doc.data['title'] != "S-E-A-M" 
        next if $graph_data_for_edges[:processed_jekyll_docs].key?(node_id) 
        next if doc.data['exclude_from_graph'] == true
        next if node_id.start_with?('/assets/') || doc.path.include?('_plugins') || doc.path.include?('_sass') || node_id == '/graph-data.json'

        doc_excerpt = ""
        if doc.data['excerpt'] && doc.data['excerpt'].is_a?(Jekyll::Excerpt) && !doc.data['excerpt'].output.nil?
          doc_excerpt = Nokogiri::HTML(doc.data['excerpt'].output.to_s).text.strip.gsub(/\s+/, ' ')
        elsif doc.data['excerpt'].is_a?(String) && !doc.data['excerpt'].empty?
           doc_excerpt = Nokogiri::HTML(doc.data['excerpt']).text.strip.gsub(/\s+/, ' ')
        elsif !doc.content.nil? && !doc.content.empty?
          begin
            rendered_content = site.liquid_renderer.file(doc.path).parse(doc.content).render!(site.site_payload, {registers:{site:site, page:doc.data}})
            plain_content = Nokogiri::HTML(rendered_content).text.strip.gsub(/\s+/, ' ')
            doc_excerpt = plain_content.split[0...30].join(' ') 
            doc_excerpt += '...' if plain_content.split.size > 30
          rescue StandardError => e # In caso di errore nel rendering Liquid del contenuto per l'excerpt
            # puts "WARN PLUGIN: Errore nel renderizzare il contenuto per l'excerpt di '#{doc.path}': #{e.message}"
            doc_excerpt = "Contenuto non processabile per l'excerpt."
          end
        else
          doc_excerpt = "Nessuna descrizione disponibile."
        end
        
        is_main_node = false
        if site.data['navigation'] && site.data['navigation']['main']
          site.data['navigation']['main'].each do |item|
            nav_item_url_normalized = normalize_jekyll_path(item['url'], $graph_data_for_edges[:baseurl_for_paths]) 
            if nav_item_url_normalized && node_id == nav_item_url_normalized
              is_main_node = true
              break
            end
          end
        end
        
        $graph_data_for_edges[:nodes] << { 
          id: node_id, 
          label: doc.data['title'], 
          originalLabel: doc.data['title'],
          excerpt: doc_excerpt, 
          group: is_main_node ? 1 : 2, 
          value: is_main_node ? 25 : 12, 
          url: doc.url 
        }
        $graph_data_for_edges[:processed_jekyll_docs][node_id] = { title: doc.data['title'], original_url: doc.url, excerpt: doc_excerpt }
      end
      puts "DEBUG PLUGIN (Generator): Creati #{$graph_data_for_edges[:processed_jekyll_docs].reject{|k,v| k == $graph_data_for_edges[:map_node_id]}.size} nodi da contenuti Jekyll."
      puts "DEBUG PLUGIN (Generator): Fine Fase 1. Nodi e dati pronti per l'hook :post_render."
    end 
  end 

  Jekyll::Hooks.register :site, :post_render do |site|
    puts "DEBUG PLUGIN (Hook :post_render): Inizio Estrazione Archi."
    
    # Non c'è bisogno di ridefinire le variabili locali se usiamo direttamente $graph_data_for_edges
    # nodes_list = $graph_data_for_edges[:nodes] # Questo è un riferimento, quindi le modifiche a nodes_list modificano $graph_data_for_edges[:nodes]
    # edges_list = $graph_data_for_edges[:edges] 

    normalize_hook_path = lambda do |path_str, site_baseurl_for_stripping| 
      return nil if path_str.nil? || path_str.empty?
      normalized = path_str.strip
      normalized = '/' + normalized unless normalized.start_with?('/')
      if !site_baseurl_for_stripping.empty? && site_baseurl_for_stripping != "/" && normalized.start_with?(site_baseurl_for_stripping)
        normalized = normalized.slice(site_baseurl_for_stripping.length..-1)
        normalized = '/' + normalized unless normalized.start_with?('/')
      end
      normalized = normalized.gsub(/\/index\.html$/, '/')
      unless normalized.end_with?('/') || normalized.split('/').last.to_s.include?('.') || normalized.include?('#')
        normalized += '/'
      end
      normalized.gsub(/(?<!:)\/\//, '/')
    end

    if site.data['navigation'] && site.data['navigation']['main']
        site.data['navigation']['main'].each do |item|
            nav_item_url_normalized = normalize_hook_path.call(item['url'], $graph_data_for_edges[:baseurl_for_paths])
            if nav_item_url_normalized && $graph_data_for_edges[:processed_jekyll_docs].key?(nav_item_url_normalized) && nav_item_url_normalized != $graph_data_for_edges[:map_node_id]
                 unless $graph_data_for_edges[:edges].any? { |e| e[:from] == $graph_data_for_edges[:map_node_id] && e[:to] == nav_item_url_normalized }
                    $graph_data_for_edges[:edges] << { from: $graph_data_for_edges[:map_node_id], to: nav_item_url_normalized, arrows: 'to', length: 200 }
                 end
            end
        end
    end

    all_documents = site.pages + site.posts.docs 
    all_documents.each do |doc_source|
      source_node_id = normalize_hook_path.call(doc_source.url, "")
      
      next if source_node_id.nil? || !$graph_data_for_edges[:processed_jekyll_docs].key?(source_node_id)
      next if source_node_id == $graph_data_for_edges[:map_node_id]
      next if doc_source.output.nil? || doc_source.output.empty? 
      
      # puts "DEBUG PLUGIN (Hook :post_render - Analisi HTML): Processo output di '#{doc_source.data['title']}' (#{source_node_id})"
      
      html_doc = Nokogiri::HTML(doc_source.output)
      link_count_in_doc = 0
      html_doc.css('a[href]').each do |link_tag|
        link_count_in_doc += 1
        href = link_tag['href'].strip 
        raw_link_text = link_tag.text.strip

        # puts "DEBUG PLUGIN (Hook :post_render - Link Trovato): In '#{doc_source.data['title']}', Testo: '#{raw_link_text}', href: '#{href}'"
        
        next if href.nil? || href.empty? || href.start_with?('#', 'mailto:', 'tel:', 'javascript:')
        target_node_id_for_edge = nil

        if href.match?(%r{^(?:[a-z]+:)?//}) 
          if $graph_data_for_edges[:registered_author_sites].key?(href)
            target_node_id_for_edge = href 
            
            unless $graph_data_for_edges[:nodes].any? { |n| n[:id] == target_node_id_for_edge }
              author_details = $graph_data_for_edges[:registered_author_sites][target_node_id_for_edge]
              $graph_data_for_edges[:nodes] << { 
                id: target_node_id_for_edge, 
                label: author_details[:name], 
                originalLabel: author_details[:name],
                excerpt: author_details[:bio], 
                group: 3, value: 20, 
                url: target_node_id_for_edge, 
                is_external_site_node: true 
              }
              # puts "DEBUG PLUGIN (Hook :post_render): Aggiunto nodo per sito autore ESTERNO (via link): #{author_details[:name]} (ID: #{target_node_id_for_edge})"
            end
          else
            next 
          end
        else 
          begin
            source_doc_full_uri_base_for_join = URI.join($graph_data_for_edges[:site_full_url], doc_source.url)
            absolute_target_uri = URI.join(source_doc_full_uri_base_for_join, href)
            target_node_id_for_edge = normalize_hook_path.call(absolute_target_uri.path, $graph_data_for_edges[:baseurl_for_paths])
          rescue URI::InvalidURIError, ArgumentError => e
            next
          end
        end

        if target_node_id_for_edge
          target_is_jekyll_node = $graph_data_for_edges[:processed_jekyll_docs].key?(target_node_id_for_edge)
          target_is_added_author_site_node = $graph_data_for_edges[:nodes].any? { |n| n[:id] == target_node_id_for_edge && n.key?(:is_external_site_node) && n[:is_external_site_node] == true }

          if (target_is_jekyll_node || target_is_added_author_site_node) && target_node_id_for_edge != source_node_id
            unless $graph_data_for_edges[:edges].any? { |e| e[:from] == source_node_id && e[:to] == target_node_id_for_edge }
              $graph_data_for_edges[:edges] << { from: source_node_id, to: target_node_id_for_edge, arrows: 'to' }
            end
          end
        end
      end 
      # if link_count_in_doc == 0
      #    puts "DEBUG PLUGIN (Hook :post_render - No Links): Nessun tag <a> con href trovato in '#{doc_source.data['title']}' (#{source_node_id})"
      # end
    end 

    $graph_data_for_edges[:edges].uniq!

    puts "DEBUG PLUGIN (Hook :post_render): Fine Estrazione Archi - Creati #{$graph_data_for_edges[:edges].size} archi totali."
    puts "DEBUG PLUGIN (Hook :post_render): Totale nodi finali: #{$graph_data_for_edges[:nodes].size}"

    final_graph_data = { nodes: $graph_data_for_edges[:nodes], edges: $graph_data_for_edges[:edges] }
    source_output_dir = File.join(site.source, 'assets', 'js')
    FileUtils.mkdir_p(source_output_dir) unless File.directory?(source_output_dir)
    source_output_path = File.join(source_output_dir, 'graph-data.json')
    
    begin
      File.open(source_output_path, 'w') do |f|
        f.write(JSON.pretty_generate(final_graph_data))
      end
      puts "DEBUG PLUGIN (Hook :post_render): graph-data.json scritto con successo in SORGENTE a #{source_output_path}"
    rescue StandardError => e
      puts "ERRORE PLUGIN (Hook :post_render): Impossibile scrivere graph-data.json. Errore: #{e.message}"
    end
  end 
end