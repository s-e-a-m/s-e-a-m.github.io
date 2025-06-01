require 'json'
require 'fileutils' # Assicurati che sia qui se usi FileUtils

module Jekyll # <--- APRE module
  class GraphDataGenerator < Generator # <--- APRE class
    safe true
    priority :low

    def generate(site) # <--- APRE def (metodo)
      puts "DEBUG PLUGIN: GraphDataGenerator sta eseguendo!" # Messaggio di debug

      nodes = []
      edges = []

      # 1. Nodi dalle pagine di navigazione principale
      main_nav_pages = site.data['navigation']&.[]('main') || []
      main_nav_urls = main_nav_pages.map { |item| item['url'] }

      all_documents = site.pages + site.posts.docs

      all_documents.each_with_index do |doc, id| # <--- APRE do (blocco each_with_index)
        next if doc.data['title'].nil? || doc.url.nil?
        next if doc.url == '/assets/js/graph-data.json' # Evita di processare il file JSON stesso

        is_main_node = main_nav_urls.include?(doc.url)

        nodes << {
          id: doc.url,
          label: doc.data['title'],
          title: doc.data['title'], # Tooltip
          group: is_main_node ? 1 : 2,
          value: is_main_node ? 20 : 10,
          url: site.config['baseurl'].to_s + doc.url # Assicurati che baseurl sia una stringa
        }

        # Futura logica per gli archi...
      end # <--- CHIUDE do (blocco each_with_index)

      graph_data = { nodes: nodes, edges: edges }

      # Scrittura nella cartella di output del sito (_site)
      output_dir_site = File.join(site.dest, 'assets', 'js')
      FileUtils.mkdir_p(output_dir_site) unless File.directory?(output_dir_site)
      output_path_site = File.join(output_dir_site, 'graph-data.json')
      File.open(output_path_site, 'w') do |f| # <--- APRE do (blocco File.open)
        f.write(JSON.pretty_generate(graph_data))
      end # <--- CHIUDE do (blocco File.open)

      # Scrittura anche nella cartella sorgente per debug
      source_output_dir = File.join(site.source, 'assets', 'js')
      FileUtils.mkdir_p(source_output_dir) unless File.directory?(source_output_dir)
      source_output_path = File.join(source_output_dir, 'graph-data.json')
      File.open(source_output_path, 'w') do |f| # <--- APRE do (blocco File.open)
        f.write(JSON.pretty_generate(graph_data))
        puts "DEBUG PLUGIN: graph-data.json scritto in #{source_output_path}"
      end # <--- CHIUDE do (blocco File.open)

      # Aggiungi il file generato in _site/assets/js/graph-data.json agli static_files
      # Questo aiuta Jekyll a "vederlo" correttamente dopo la generazione.
      # Nota: site.dest è già la cartella _site, quindi il percorso relativo a site.dest
      # per la directory del file è 'assets/js'
      # e il nome del file è 'graph-data.json'.
      # Il primo `site.source` qui sotto è corretto per il costruttore di StaticFile.
      # Il secondo `site.dest` è il percorso base di output.
      # Il terzo argomento è la directory *relativa a site.dest* dove si trova il file.
      # Il quarto è il nome del file.
      # Questa riga è complicata, assicurati che la logica di scrittura sopra funzioni prima.
      # Potrebbe essere che la scrittura diretta in site.dest sia sufficiente.
      # Per ora, concentriamoci sulla scrittura corretta.
      # static_file_entry = Jekyll::StaticFile.new(site, site.source, File.join('assets', 'js'), 'graph-data.json')
      # site.static_files << static_file_entry unless site.static_files.include?(static_file_entry)

    end # <--- CHIUDE def (metodo generate)
  end # <--- CHIUDE class GraphDataGenerator
end # <--- CHIUDE module Jekyll