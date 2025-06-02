# _plugins/graph_data_generator.rb
require 'json'
require 'fileutils'
require 'nokogiri'
require 'uri'

module Jekyll
  class GraphDataGenerator < Generator
    safe true
    priority :lowest

    def normalize_path(path_str, site_baseurl)
      # ... (la funzione normalize_path rimane identica a prima) ...
      return nil if path_str.nil? || path_str.empty?
      normalized = path_str.strip
      if normalized.start_with?('http://', 'https://')
        begin
          uri = URI(normalized)
          normalized = uri.path
        rescue URI::InvalidURIError
          return nil
        end
      end
      normalized = '/' + normalized unless normalized.start_with?('/')
      if !site_baseurl.empty? && normalized.start_with?(site_baseurl)
        normalized = normalized.slice(site_baseurl.length..-1)
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
      puts "DEBUG PLUGIN: GraphDataGenerator sta eseguendo!"

      nodes = []
      edges = []
      processed_docs_map = {}

      baseurl = site.config['baseurl'].to_s
      baseurl = '/' + baseurl unless baseurl.empty? || baseurl.start_with?('/')
      baseurl = baseurl.chomp('/') unless baseurl == '/'
      site_full_url = (site.config['url'].to_s || "") + baseurl # Rimosso trailing slash qui, URI.join lo gestisce
      site_full_url += '/' unless site_full_url.end_with?('/')


      # --- NUOVA PARTE: NODO CENTRALE PER LA MAPPA/HOMEPAGE ---
      map_node_id = "/" # L'ID per il nodo della mappa sarà la root del sito
      # Assicurati che baseurl + map_node_id sia l'URL effettivo della tua homepage
      # Se baseurl è "", allora map_node_id_full sarà "/"
      # Se baseurl è "/progetto", allora map_node_id_full sarà "/progetto/"
      map_node_id_full_url = baseurl + map_node_id 
      map_node_id_full_url += '/' unless map_node_id_full_url.end_with?('/')


      nodes << {
        id: map_node_id_full_url, # ID univoco, trattiamolo come la homepage
        label: "S-E-A-M",  # O "Homepage", "Panoramica"
        title: "Nodo centrale della mappa del sito",
        group: 0, # Un gruppo speciale per il nodo centrale
        value: 35, # Dimensione più grande per il nodo centrale
        url: map_node_id_full_url, # Link a se stesso o alla root
        # physics: false # Opzionale: per rendere il nodo centrale fisso
      }
      processed_docs_map[map_node_id_full_url] = { title: "Mappa del Sito", original_url: map_node_id } # Aggiungi alla mappa dei documenti processati
      puts "DEBUG PLUGIN: Creato nodo centrale MAPPA con ID: #{map_node_id_full_url}"
      # --- FINE NUOVA PARTE ---

      all_documents = site.pages + site.posts.docs

      all_documents.each do |doc|
        next if doc.data['title'].nil? || doc.data['title'].empty?
        next if doc.url.nil? || doc.url.empty?
        next if doc.data['exclude_from_graph'] == true
        next if doc.url.start_with?('/assets/') || doc.path.include?('_plugins') || doc.path.include?('_sass')
        next if doc.url == '/graph-data.json'
        
        # L'URL del documento come Jekyll lo vede (include baseurl se configurato)
        # doc_url_as_is = doc.url # es. /mioblog/pagina/
        # Dobbiamo normalizzarlo per consistenza, specialmente per il baseurl
        # node_id = normalize_path(doc.url, baseurl) # La nostra funzione si aspetta un path relativo al dominio
                                                  # e baseurl per sapere cosa togliere.
                                                  # doc.url è già "baseurl-aware" quindi passiamo "" per baseurl a normalize_path
        node_id = normalize_path(doc.url, "")


        next if node_id.nil?
        # Evita di sovrascrivere il nodo "Mappa" se un documento ha URL "/"
        next if node_id == map_node_id_full_url && doc.data['title'] != "Mappa del Sito" 

        is_main_node = false
        if site.data['navigation'] && site.data['navigation']['main']
          site.data['navigation']['main'].each do |item|
            nav_item_url_normalized = normalize_path(item['url'], baseurl)
            if nav_item_url_normalized && node_id == nav_item_url_normalized
              is_main_node = true
              # --- NUOVA PARTE: CREA ARCO DAL NODO MAPPA AL NODO DI NAVIGAZIONE ---
              if processed_docs_map.key?(map_node_id_full_url) # Assicura che il nodo mappa esista
                edges << { from: map_node_id_full_url, to: node_id, arrows: 'to', length: 200 } # Aggiungi una lunghezza preferita
                puts "DEBUG PLUGIN: Aggiunto arco da MAPPA a NODO NAV: #{map_node_id_full_url} -> #{node_id}"
              end
              # --- FINE NUOVA PARTE ---
              break
            end
          end
        end
        
        unless processed_docs_map.key?(node_id)
            nodes << {
              id: node_id,
              label: doc.data['title'],
              title: doc.data['title'],
              group: is_main_node ? 1 : 2,
              value: is_main_node ? 25 : 12,
              url: baseurl + node_id 
            }
            processed_docs_map[node_id] = { title: doc.data['title'], original_url: doc.url }
        end
      end
      puts "DEBUG PLUGIN: Creati #{nodes.size} nodi totali (incluso il nodo Mappa)."

      # SECONDA PASSATA: Estrai i link HTML e crea gli archi (tra i nodi NON-Mappa)
      puts "DEBUG PLUGIN: Inizio Passata 2 - Estrazione Archi dai documenti HTML renderizzati (escluso nodo Mappa)."
      all_documents.each do |doc|
        from_node_id = normalize_path(doc.url, "")
        next if from_node_id.nil? || !processed_docs_map.key?(from_node_id)
        next if from_node_id == map_node_id_full_url # Non processare il contenuto del "nodo mappa" per i link in uscita
        next if doc.output.nil? || doc.output.empty?
        
        html_doc = Nokogiri::HTML(doc.output)
        html_doc.css('a[href]').each do |link_tag|
          href = link_tag['href']
          next if href.nil? || href.empty? || href.start_with?('#', 'mailto:', 'tel:')
          next if href.match?(%r{^(?:[a-z]+:)?//})

          begin
            current_doc_base_for_join = URI.join(site_full_url, doc.url).to_s
            absolute_target_uri = URI.join(current_doc_base_for_join, href)
            to_node_id_candidate = normalize_path(absolute_target_uri.path, baseurl)

            if to_node_id_candidate && processed_docs_map.key?(to_node_id_candidate) && to_node_id_candidate != from_node_id
              unless edges.any? { |e| e[:from] == from_node_id && e[:to] == to_node_id_candidate }
                edges << { from: from_node_id, to: to_node_id_candidate, arrows: 'to' }
              end
            end
          rescue URI::InvalidURIError, ArgumentError => e
            next
          end
        end
      end
      # Rimuovi eventuali archi duplicati (se la logica `unless edges.any?` non fosse perfetta)
      edges.uniq!
      puts "DEBUG PLUGIN: Fine Passata 2 - Creati #{edges.size} archi totali."

      graph_data = { nodes: nodes, edges: edges }

      source_output_dir = File.join(site.source, 'assets', 'js')
      FileUtils.mkdir_p(source_output_dir) unless File.directory?(source_output_dir)
      source_output_path = File.join(source_output_dir, 'graph-data.json')
      
      begin
        File.open(source_output_path, 'w') do |f|
          f.write(JSON.pretty_generate(graph_data))
        end
        puts "DEBUG PLUGIN: graph-data.json scritto con successo in SORGENTE a #{source_output_path}"
      rescue StandardError => e
        puts "ERRORE PLUGIN: Impossibile scrivere graph-data.json in SORGENTE. Errore: #{e.message}"
        puts e.backtrace.join("\n")
      end
    end
  end
end