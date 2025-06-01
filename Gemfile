source "https://rubygems.org"

# Commenta o rimuovi la gemma github-pages
# gem "github-pages", group: :jekyll_plugins

# Aggiungi Jekyll direttamente
gem "jekyll", "~> 4.3.3" # Specifichiamo l'ultima patch di 4.3 per stabilità

# Aggiungi il tema Minimal Mistakes come gemma
gem "minimal-mistakes-jekyll"

gem "tzinfo-data"
gem "wdm", "~> 0.1.1" if Gem.win_platform?

# I tuoi plugin esistenti
group :jekyll_plugins do
  gem "jekyll-paginate"
  gem "jekyll-paginate-multiple"
  gem "jekyll-sitemap"
  gem "jekyll-gist"
  gem "jekyll-feed", "~> 0.17.0" # Aggiorniamo un po' jekyll-feed
  gem "jemoji"
  gem "jekyll-include-cache"
  gem "jekyll-algolia"
  gem "jekyll-seo-tag"
  # Rimuoviamo jekyll-commonmark-ghpages per ora, causa conflitti
  # gem "jekyll-commonmark-ghpages"
  # Manteniamo jekyll-remote-theme per ora nel Gemfile, ma lo commenteremo nel _config.yml
  gem "jekyll-remote-theme"
end

# Gemme per il processore Markdown (kramdown è il default per MM)
gem "kramdown", "~> 2.3" # O l'ultima versione compatibile
gem "kramdown-parser-gfm", "~> 1.1"