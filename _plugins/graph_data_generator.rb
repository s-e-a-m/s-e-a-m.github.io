# _plugins/graph_data_generator.rb
require 'json'
require 'fileutils'
require 'nokogiri'
require 'uri'

module Jekyll
  # Variabile a livello di modulo per passare dati tra il Generator e l'Hook
  # Non è elegantissimo ma funziona per questo caso d'uso semplice.
  # Per soluzioni più complesse, si potrebbero usare variabili di istanza di site.
  $graph_data_for_edges = {
    nodes: [],
    edges: [],
    processed_jekyll_docs: {}, # mappa node_id -> {title, original_url}
    registered_author_sites: {}, # mappa url_esterno -> {name}
    baseurl_for_paths: "/",
    site_full_url: "",
    map_node_id: "/"
  }

  class GraphDataGenerator < Generator
    safe true
    priority :lowest # Esegui dopo la lettura iniziale dei dati

    def normalize_jekyll_path(path_str, site_baseurl_for_stripping)
      # ... (funzione normalize_jekyll_path rimane IDENTICA a prima) ...
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

      # Resetta i dati globali ad ogni build
      $graph_data_for_edges[:nodes] = []
      $graph_data_for_edges[:edges] = [] # Gli archi verranno popolati nell'hook post_render
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

      # --- NODO CENTRALE MAPPA ---
      $graph_data_for_edges[:map_node_id] = normalize_jekyll_path("/", "") # Sarà "/"
      map_node_url_for_click = $graph_data_for_edges[:baseurl_for_paths] == "/" ? "/" : $graph_data_for_edges[:baseurl_for_paths]
      
      $graph_data_for_edges[:nodes] << { 
        id: $graph_data_for_edges[:map_node_id], 
        label: "Mappa del Sito", 
        title: "Nodo centrale", 
        group: 0, value: 35, 
        url: map_node_url_for_click 
      }
      $graph_data_for_edges[:processed_jekyll_docs][$graph_data_for_edges[:map_node_id]] = { title: "Mappa del Sito", original_url: "/" }
      puts "DEBUG PLUGIN (Generator): Creato nodo centrale MAPPA con ID: '#{$graph_data_for_edges[:map_node_id]}'"

      # --- REGISTRA SITI AUTORI ---
      if site.data['authors']
        site.data['authors'].each do |author_key, author_data|
          # ... (logica per registrare in $graph_data_for_edges[:registered_author_sites] come prima) ...
          author_website_url = nil
          author_data['links']&.each do |link|
            if link['label'] == "Website" && link['url'] && !link['url'].strip.empty?
              author_website_url = link['url'].strip
              break
            end
          end
          if author_website_url
            $graph_data_for_edges[:registered_author_sites][author_website_url] = { name: author_data['name'] }
            # puts "DEBUG PLUGIN (Generator): Registrato potenziale sito autore: #{author_data['name']} (URL: #{author_website_url})"
          end
        end
      end
      puts "DEBUG PLUGIN (Generator): Registrati #{$graph_data_for_edges[:registered_author_sites].size} potenziali siti autori."

      # --- PRIMA PASSATA: NODI da Contenuti Jekyll Locali ---
      all_documents = site.pages + site.posts.docs
      all_documents.each do |doc|
        next if doc.data['title'].nil? || doc.data['title'].empty?
        node_id = normalize_jekyll_path(doc.url, "")
        next if node_id.nil?
        next if node_id == $graph_data_for_edges[:map_node_id] && doc.data['title'] != "Mappa del Sito"
        next if $graph_data_for_edges[:processed_jekyll_docs].key?(node_id)
        next if doc.data['exclude_from_graph'] == true
        next if node_id.start_with?('/assets/') || doc.path.include?('_plugins') || doc.path.include?('_sass') || node_id == '/graph-data.json'

        is_main_node = false
        if site.data['navigation'] && site.data['navigation']['main']
          site.data['navigation']['main'].each do |item|
            nav_item_url_normalized = normalize_jekyll_path(item['url'], $graph_data_for_edges[:baseurl_for_paths])
            if nav_item_url_normalized && node_id == nav_item_url_normalized
              is_main_node = true
              # L'arco dalla mappa ai nodi di navigazione verrà creato nell'hook post_render ora
              # per assicurare che tutti i nodi (inclusi quelli degli autori se linkati) esistano prima.
              break
            end
          end
        end
        
        $graph_data_for_edges[:nodes] << { id: node_id, label: doc.data['title'], title: doc.data['title'], group: is_main_node ? 1 : 2, value: is_main_node ? 25 : 12, url: doc.url }
        $graph_data_for_edges[:processed_jekyll_docs][node_id] = { title: doc.data['title'], original_url: doc.url }
      end
      puts "DEBUG PLUGIN (Generator): Creati #{$graph_data_for_edges[:processed_jekyll_docs].reject{|k,v| k == $graph_data_for_edges[:map_node_id]}.size} nodi da contenuti Jekyll (esclusa Mappa)."
      puts "DEBUG PLUGIN (Generator): Fine Fase 1. Nodi pronti per l'estrazione archi."
    end # fine metodo generate
  end # fine classe GraphDataGenerator

  # --- HOOK PER ESTRARRE ARCHI DOPO CHE TUTTO IL SITO È STATO RENDERIZZATO ---
  Jekyll::Hooks.register :site, :post_render do |site|
    puts "DEBUG PLUGIN (Hook :post_render): Inizio Estrazione Archi."
    
    # Accedi ai dati preparati dal Generator
    nodes_list = $graph_data_for_edges[:nodes]
    edges_list = $graph_data_for_edges[:edges] # Inizia vuoto, lo popoliamo qui
    processed_jekyll_docs = $graph_data_for_edges[:processed_jekyll_docs]
    registered_author_sites = $graph_data_for_edges[:registered_author_sites]
    baseurl_for_paths = $graph_data_for_edges[:baseurl_for_paths]
    site_full_url = $graph_data_for_edges[:site_full_url]
    map_node_id = $graph_data_for_edges[:map_node_id]

    # Helper function (duplicata o resa accessibile)
    # Per semplicità la ridefinisco qui, in un plugin reale potresti metterla in un modulo condiviso.
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

    # Archi dal nodo MAPPA ai nodi di NAVIGAZIONE INTERNI (ora che tutti i nodi sono definiti)
    if site.data['navigation'] && site.data['navigation']['main']
        site.data['navigation']['main'].each do |item|
            nav_item_url_normalized = normalize_hook_path.call(item['url'], baseurl_for_paths)
            if nav_item_url_normalized && processed_jekyll_docs.key?(nav_item_url_normalized) && nav_item_url_normalized != map_node_id
                 unless edges_list.any? { |e| e[:from] == map_node_id && e[:to] == nav_item_url_normalized }
                    edges_list << { from: map_node_id, to: nav_item_url_normalized, arrows: 'to', length: 200 }
                    puts "DEBUG PLUGIN (Hook :post_render): Aggiunto arco da MAPPA a NODO NAV INTERNO: #{map_node_id} -> #{nav_item_url_normalized}"
                 end
            end
        end
    end


    all_documents = site.pages + site.posts.docs
    all_documents.each do |doc_source|
      source_node_id = normalize_hook_path.call(doc_source.url, "") # doc_source.url ha già baseurl
      
      next if source_node_id.nil? || !processed_jekyll_docs.key?(source_node_id)
      next if source_node_id == map_node_id
      # Ora doc_source.output DOVREBBE essere l'HTML finale completo
      next if doc_source.output.nil? || doc_source.output.empty?
      
      puts "DEBUG PLUGIN (Hook :post_render - Analisi HTML): Processo output di '#{doc_source.data['title']}' (#{source_node_id})"
      
      html_doc = Nokogiri::HTML(doc_source.output)
      link_count_in_doc = 0
      html_doc.css('a[href]').each do |link_tag|
        link_count_in_doc += 1
        href = link_tag['href'].strip 
        raw_link_text = link_tag.text.strip

        puts "DEBUG PLUGIN (Hook :post_render - Link Trovato): In '#{doc_source.data['title']}', Testo: '#{raw_link_text}', href: '#{href}'"
        
        next if href.nil? || href.empty? || href.start_with?('#', 'mailto:', 'tel:', 'javascript:')
        target_node_id_for_edge = nil

        if href.match?(%r{^(?:[a-z]+:)?//}) 
          # puts "DEBUG PLUGIN (Hook :post_render - Link Esterno Check): Controllo se '#{href}' è un sito autore registrato."
          if registered_author_sites.key?(href)
            # puts "DEBUG PLUGIN (Hook :post_render - Link Esterno): CORRISPONDENZA TROVATA con sito autore: '#{href}'"
            target_node_id_for_edge = href 
            unless nodes_list.any? { |n| n[:id] == target_node_id_for_edge }
              author_details = registered_author_sites[target_node_id_for_edge]
              nodes_list << { id: target_node_id_for_edge, label: author_details[:name], title: "Sito di #{author_details[:name]}", group: 3, value: 20, url: target_node_id_for_edge, is_external_site_node: true }
              puts "DEBUG PLUGIN (Hook :post_render): Aggiunto nodo per sito autore ESTERNO (via link): #{author_details[:name]} (ID: #{target_node_id_for_edge})"
            end
          else
            # puts "DEBUG PLUGIN (Hook :post_render - Link Esterno): NESSUNA CORRISPONDENZA con siti autori per '#{href}'."
            next 
          end
        else 
          begin
            source_doc_full_uri_base_for_join = URI.join(site_full_url, doc_source.url)
            absolute_target_uri = URI.join(source_doc_full_uri_base_for_join, href)
            target_node_id_for_edge = normalize_hook_path.call(absolute_target_uri.path, baseurl_for_paths)
            # puts "DEBUG PLUGIN (Hook :post_render - Link Interno): Processo href: '#{href}'. ID Candidato: '#{target_node_id_for_edge}'"
          rescue URI::InvalidURIError, ArgumentError => e
            # puts "DEBUG PLUGIN (Hook :post_render - Link Interno): Ignorato link interno non valido '#{href}'. Errore: #{e.message}"
            next
          end
        end

        if target_node_id_for_edge
          target_is_jekyll_node = processed_jekyll_docs.key?(target_node_id_for_edge)
          target_is_added_author_site_node = nodes_list.any? { |n| n[:id] == target_node_id_for_edge && n.key?(:is_external_site_node) && n[:is_external_site_node] == true }

          if (target_is_jekyll_node || target_is_added_author_site_node) && target_node_id_for_edge != source_node_id
            unless edges_list.any? { |e| e[:from] == source_node_id && e[:to] == target_node_id_for_edge }
              edges_list << { from: source_node_id, to: target_node_id_for_edge, arrows: 'to' }
              puts "DEBUG PLUGIN (Hook :post_render - Arco Aggiunto): Da '#{source_node_id}' (#{doc_source.data['title']}) -> A '#{target_node_id_for_edge}'"
            end
          end
        end
      end # fine loop link_tag
      if link_count_in_doc == 0
         puts "DEBUG PLUGIN (Hook :post_render - No Links): Nessun tag <a> con href trovato in '#{doc_source.data['title']}' (#{source_node_id})"
      end
    end # fine loop all_documents

    edges_list.uniq! # Rimuovi duplicati dagli archi finali
    $graph_data_for_edges[:edges] = edges_list # Aggiorna la variabile globale con gli archi trovati

    puts "DEBUG PLUGIN (Hook :post_render): Fine Estrazione Archi - Creati #{$graph_data_for_edges[:edges].size} archi totali."
    puts "DEBUG PLUGIN (Hook :post_render): Totale nodi finali: #{$graph_data_for_edges[:nodes].size}"

    # Scrittura finale del JSON
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
  end # fine hook post_render
end # fine modulo Jekyll