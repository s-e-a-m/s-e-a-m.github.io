# _plugins/graph_data_generator.rb
require 'json'
require 'fileutils'
require 'nokogiri' # Per analizzare l'HTML e trovare i link
require 'uri'      # Per manipolare e risolvere gli URL

module Jekyll
  class GraphDataGenerator < Generator
    safe true        # Impostare a false solo se si è sicuri e si conoscono i rischi
    priority :lowest # Esegui dopo che tutti i documenti sono stati processati

    # Funzione di utilità per normalizzare gli URL/path
    # L'obiettivo è ottenere un path relativo alla root del sito che Jekyll usa internamente
    # (es. /pagina/, /blog/mio-post/), tenendo conto del baseurl.
    def normalize_path(path_str, site_baseurl)
      return nil if path_str.nil? || path_str.empty?

      normalized = path_str.strip

      # Se è un URL completo, prendi solo il path
      if normalized.start_with?('http://', 'https://')
        begin
          uri = URI(normalized)
          normalized = uri.path
        rescue URI::InvalidURIError
          return nil # Non è un URL valido, probabilmente non interno
        end
      end

      # Assicura che inizi con / se non è già un path assoluto del sito
      normalized = '/' + normalized unless normalized.start_with?('/')

      # Rimuovi baseurl se presente all'inizio del path
      if !site_baseurl.empty? && normalized.start_with?(site_baseurl)
        normalized = normalized.slice(site_baseurl.length..-1)
        # Ri-assicura che inizi con / dopo aver tolto baseurl
        normalized = '/' + normalized unless normalized.start_with?('/')
      end

      # Gestisci index.html -> /
      normalized = normalized.gsub(/\/index\.html$/, '/')

      # Aggiungi trailing slash se non è un file (non ha estensione nell'ultimo segmento) e non finisce già con /
      # e non è un'ancora
      unless normalized.end_with?('/') || normalized.split('/').last.to_s.include?('.') || normalized.include?('#')
        normalized += '/'
      end

      # Rimuovi doppi slash (tranne che per http:// o https:// all'inizio, anche se li abbiamo già tolti)
      normalized = normalized.gsub(/(?<!:)\/\//, '/')

      normalized
    end

    def generate(site)
      puts "DEBUG PLUGIN: GraphDataGenerator sta eseguendo!"

      nodes = []
      edges = []
      # Mappa per tenere traccia dei documenti processati e dei loro URL normalizzati come ID
      # Chiave: URL normalizzato (ID nodo), Valore: { title: "Titolo", url_originale: "..." }
      processed_docs_map = {}

      # Configurazione baseurl (importante per risolvere URL relativi)
      # Assicurati che baseurl inizi con / se non è vuoto, e non finisca con /
      baseurl = site.config['baseurl'].to_s
      baseurl = '/' + baseurl unless baseurl.empty? || baseurl.start_with?('/')
      baseurl = baseurl.chomp('/') unless baseurl == '/' # Non rimuovere se baseurl è solo '/'

      # URL completo del sito per risolvere URI relativi
      site_full_url = site.config['url'].to_s + baseurl
      site_full_url += '/' unless site_full_url.end_with?('/')


      # 1. PRIMA PASSATA: Raccogli tutti i documenti (pagine e post) e crea i nodi
      #    Questo ci permette di sapere quali URL sono validi target interni.
      all_documents = site.pages + site.posts.docs

      all_documents.each do |doc|
        # Salta documenti senza titolo o URL, o quelli che vogliamo escludere
        next if doc.data['title'].nil? || doc.data['title'].empty?
        next if doc.url.nil? || doc.url.empty?
        next if doc.data['exclude_from_graph'] == true # Permette di escludere pagine via front matter
        # Escludi file specifici o cartelle che non dovrebbero essere nodi
        next if doc.url.start_with?('/assets/') || doc.path.include?('_plugins') || doc.path.include?('_sass')
        next if doc.url == '/graph-data.json' # Evita di processare il file JSON stesso

        # Normalizza l'URL del documento per usarlo come ID univoco del nodo
        # Questo URL è già relativo alla root del sito e tiene conto del baseurl se Jekyll lo ha applicato
        node_id = normalize_path(doc.url, "") # Passa baseurl vuoto perché doc.url è già "baseurl-aware"

        next if node_id.nil? # Se la normalizzazione fallisce

        # Determina se è un nodo principale (dalla navigazione)
        is_main_node = false
        if site.data['navigation'] && site.data['navigation']['main']
          site.data['navigation']['main'].each do |item|
            nav_item_url_normalized = normalize_path(item['url'], baseurl) # Normalizza anche l'URL della nav
            if nav_item_url_normalized && node_id == nav_item_url_normalized
              is_main_node = true
              break
            end
          end
        end
        
        # Evita di aggiungere nodi duplicati se per qualche motivo doc.url non fosse univoco dopo la normalizzazione
        unless processed_docs_map.key?(node_id)
            nodes << {
              id: node_id,
              label: doc.data['title'],
              title: doc.data['title'], # Tooltip in Vis.js
              group: is_main_node ? 1 : 2,
              value: is_main_node ? 25 : 12, # Dimensione del nodo
              url: baseurl + node_id # URL completo relativo al dominio per la navigazione JS
                                      # (node_id è già relativo alla root, baseurl lo prefissa se necessario)
            }
            processed_docs_map[node_id] = { title: doc.data['title'], original_url: doc.url }
        end
      end
      puts "DEBUG PLUGIN: Creati #{nodes.size} nodi."

      # 2. SECONDA PASSATA: Estrai i link dall'HTML renderizzato e crea gli archi
      puts "DEBUG PLUGIN: Inizio Passata 2 - Estrazione Archi dai documenti HTML renderizzati."
      all_documents.each do |doc|
        # Salta documenti che non sono stati inclusi come nodi
        from_node_id = normalize_path(doc.url, "") # doc.url è già "baseurl-aware"
        next if from_node_id.nil? || !processed_docs_map.key?(from_node_id)

        # doc.output è l'HTML finale renderizzato del documento
        next if doc.output.nil? || doc.output.empty?
        
        html_doc = Nokogiri::HTML(doc.output)
        
        # Trova tutti i tag <a> con un attributo href
        html_doc.css('a[href]').each do |link_tag|
          href = link_tag['href']
          
          # Ignora link vuoti, ancore sulla stessa pagina, mailto, tel, e link esterni completi
          next if href.nil? || href.empty? || href.start_with?('#', 'mailto:', 'tel:')
          next if href.match?(%r{^(?:[a-z]+:)?//}) # Regex per link esterni (http, https, ftp, //)

          begin
            # Costruisci l'URL base del documento corrente per risolvere link relativi
            # doc.url è già relativo alla root e include il baseurl se jekyll lo ha preposto
            current_doc_base_for_join = URI.join(site_full_url, doc.url).to_s
            
            # Risolvi l'href relativo al documento corrente per ottenere un URI assoluto
            absolute_target_uri = URI.join(current_doc_base_for_join, href)

            # Normalizza il path dell'URI target per il confronto
            # Il path risultante da absolute_target_uri.path sarà relativo al dominio
            # quindi dobbiamo normalizzarlo rispetto al baseurl del sito
            to_node_id_candidate = normalize_path(absolute_target_uri.path, baseurl)

            # Verifica se il link normalizzato punta a un documento processato e non è un self-link
            if to_node_id_candidate && processed_docs_map.key?(to_node_id_candidate) && to_node_id_candidate != from_node_id
              # Aggiungi arco solo se non esiste già
              unless edges.any? { |e| e[:from] == from_node_id && e[:to] == to_node_id_candidate }
                edges << { from: from_node_id, to: to_node_id_candidate, arrows: 'to' }
                # puts "DEBUG PLUGIN: Aggiunto arco: #{from_node_id} -> #{to_node_id_candidate}"
              end
            # else
              # if to_node_id_candidate
              #   puts "DEBUG PLUGIN: Link scartato o destinazione non nel grafo: #{from_node_id} -> #{to_node_id_candidate} (da href: '#{href}')"
              # end
            end
          rescue URI::InvalidURIError, ArgumentError => e
            # puts "DEBUG PLUGIN: Ignorato link non valido '#{href}' in '#{doc.url}'. Errore: #{e.message}"
            next
          end
        end
      end
      puts "DEBUG PLUGIN: Fine Passata 2 - Creati #{edges.size} archi."

      graph_data = { nodes: nodes, edges: edges }

      # Scrittura nella cartella sorgente per il fetch JS e per ispezione facile
      # Jekyll copierà automaticamente i file da assets/ a _site/assets/
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

      # Non è strettamente necessario scrivere anche in _site/assets/js qui,
      # perché Jekyll dovrebbe copiare source/assets/js/graph-data.json in _site/assets/js/graph-data.json
      # Se non lo fa, potrebbe essere necessario aggiungere il file a site.static_files o
      # verificare le impostazioni 'include'/'exclude' in _config.yml.
    end # fine metodo generate
  end # fine classe GraphDataGenerator
end # fine modulo Jekyll