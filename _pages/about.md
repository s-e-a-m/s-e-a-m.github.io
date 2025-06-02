---
permalink: /about/
title: "About"
---

_Sustained Electro-Acoustic Music_ is a project inspired by [Alvise Vidolin and Nicola Bernardini](https://www.academia.edu/16348988/Sustainable_live_electro-acoustic_music).

## SEAM meaning

> **seam** \| siːm \|  
> noun  
> 1. a line where two pieces of fabric are sewn together in a garment or other article.
>
> * a line where the edges of two pieces of wood, wallpaper, or another material touch each other: the task involved clamping the panels into position and arc welding a seam to join them.
> * a long thin indentation or scar: the track cleaves a seam through corn.
>   1. an underground layer of a mineral such as coal or gold: the buried forests became seams of coal.
> * a supply of something valuable: Sunderland have a rich seam of experienced players.
> * a trace or presence of something: there is a seam of despondency in Stipe's words.    
>
> verb 1. join with a seam: it can be used for seaming garments. 2. \(usually as adjective seamed\) make a long, narrow indentation in: men in middle age have seamed faces.

## Contributors:

{% if site.data.authors %}
  <ul>
    {% for author_hash_pair in site.data.authors %}
      {% assign author_key = author_hash_pair[0] %} 
      {% assign author_data = author_hash_pair[1] %}

      {% assign author_website_url = nil %}
      {% for link in author_data.links %}
        {% if link.label == "Website" %}
          {% assign author_website_url = link.url %}
          {% break %}
        {% endif %}
      {% endfor %}

      <li>
        {% if author_website_url %}
          <a href="{{ author_website_url }}">{{ author_data.name }}</a>
        {% else %}
          {{ author_data.name }} 
        {% endif %}
      </li>
    {% endfor %}
  </ul>
{% else %}
  <p>Informazioni sui contributor non disponibili.</p>
{% endif %}