---
# Front matter per abilitare il processing Liquid (per relative_url)
---
window.addEventListener('message', function(event) {
  // Per sicurezza, potresti voler controllare event.origin se sai da dove provengono i messaggi
  // if (event.origin !== 'http://127.0.0.1:4000') return; // Esempio

  if (typeof event.data === 'string' && event.data.startsWith('[Iframe Log]')) {
    console.log('(Received from Iframe) ' + event.data);
  }
});
document.addEventListener('DOMContentLoaded', function () {
    const visContainer = document.getElementById('graph-container');
    const tooltipElement = document.getElementById('graphNodeTooltip');
    const tooltipTitleElement = document.getElementById('tooltipNodeTitle');
    const tooltipExcerptElement = document.getElementById('tooltipNodeExcerpt');

    const bodyElement = document.body; 
    const nodeContentPane = document.getElementById('node-content-pane');
    const nodeContentTarget = document.getElementById('node-content-target');
    const closeContentPaneBtn = document.getElementById('closeContentPaneBtn');
    // const graphContainerWrapper = document.getElementById('graph-container-wrapper'); // Già definito nel tuo HTML, potrebbe servire per il resize
    // Nota: graphContainerWrapper non è usato in questa prima fase del JS, ma tienilo a mente.

    if (!nodeContentPane || !nodeContentTarget || !closeContentPaneBtn) {
        console.warn("Elementi per il pannello contenuto nodo non trovati. La funzionalità di split view non sarà completa.");
    }
    
    if (!visContainer) {
        console.error('Graph container #graph-container not found! Il grafo non può essere inizializzato.');
        return;
    }
    if (!tooltipElement || !tooltipTitleElement || !tooltipExcerptElement) {
        console.warn('Uno o più elementi del tooltip personalizzato non sono stati trovati. Il tooltip non funzionerà.');
    }

    function populateGraphLegend(visOptions) {
        const legendContainer = document.getElementById('graphLegend');
        if (!legendContainer || !visOptions.groups) {
            // console.warn("Contenitore legenda o opzioni groups non trovati. Legenda non generata.");
            return;
        }
        const legendUl = legendContainer.querySelector('ul');
        if (!legendUl) {
            // console.warn("Elemento <ul> per la legenda non trovato.");
            return;
        }
        legendUl.innerHTML = ''; 

        const groupDescriptions = {
            0: "S-E-A-M",
            1: "Pagina Principale", // Es. da navigation.yml
            2: "Contenuto Standard",   // Es. post, altre pagine
            3: "Sito Autore Esterno"
        };

        let legendHasItems = false;
        for (const groupId in visOptions.groups) {
            if (visOptions.groups.hasOwnProperty(groupId)) {
                const groupConfig = visOptions.groups[groupId];
                const groupColor = (groupConfig.color && groupConfig.color.background) ? groupConfig.color.background : '#cccccc';
                const description = groupDescriptions[groupId] || `Gruppo ${groupId}`;

                const listItem = document.createElement('li');
                listItem.innerHTML = `<span class="legend-color-swatch" style="background-color: ${groupColor};"></span> ${description}`;
                legendUl.appendChild(listItem);
                legendHasItems = true;
            }
        }
        if (legendHasItems && legendContainer) {
            legendContainer.style.display = 'block'; 
        }
    }

    fetch('{{ "/assets/js/graph-data.json" | relative_url }}')
        .then(response => {
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.status} ${response.statusText} per ${response.url}`);
            }
            return response.json();
        })
        .then(graphData => {
            if (!graphData.nodes || graphData.nodes.length === 0) {
                console.warn('Nessun dato (nodi) da visualizzare nel grafo.');
                if(visContainer) visContainer.innerHTML = '<p style="text-align:center; padding-top:50px; color: #ccc;">Nessun dato disponibile per il grafo.</p>';
                return;
            }

            graphData.nodes.forEach(node => {
                node.originalLabel = node.label; 
                node.label = ''; 
            });

            const options = {
                nodes: {
                    shape: 'dot',
                    font: { 
                        size: 16,
                        face: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                        color: '#FFFFFF',
                        strokeWidth: 3,
                        strokeColor: '#252a34' 
                    },
                    borderWidth: 0, // <--- NESSUN BORDO VISIBILE DI DEFAULT
                    borderWidthSelected: 1, // Bordo sottile quando selezionato (o 0 se non vuoi neanche quello)
                    shadow: {
                        enabled: true,
                        color: 'rgba(0,0,0,0.4)',
                        size: 7,
                        x: 3,
                        y: 3
                    },
                },
                edges: {
                    width: 1.5,
                    color: {
                        color: '#5A677D',
                        highlight: '#8A9BB3',
                        hover: '#8A9BB3',
                        opacity: 0.5
                    },
                    arrows: {
                        to: { 
                            enabled: false, // <--- FRECCE RIMOSSE
                             scaleFactor: 0.01, // Irrilevante se enabled: false, ma lo lascio se vuoi riabilitarle piccole
                            // type: 'arrow'    // Irrilevante
                        }
                    },
                    smooth: {
                        enabled: true,
                        type: "continuous",
                        roundness: 0.5
                    }
                },
                physics: {
                    enabled: true, 
                    solver: 'forceAtlas2Based',
                    forceAtlas2Based: {
                        gravitationalConstant: -45,
                        centralGravity: 0.003,
                        springLength: 150,
                        springConstant: 0.05,
                        damping: 0.2, 
                        avoidOverlap: 0.6
                    },
                    stabilization: {
                        enabled: true,
                        iterations: 400,
                        fit: true
                    }
                },
                interaction: {
                    hover: true, 
                    dragNodes: true,
                    dragView: true,
                    zoomView: true,
                    tooltipDelay: 100, 
                    navigationButtons: false, 
                    keyboard: true
                },
                groups: {
                    0: { // Mappa del Sito
                        color: { background: '#FFD700', border: '#FFD700', highlight: { background: '#FFFACD', border: '#FFEC8B'}, hover: { background: '#FFFACD', border: '#FFEC8B'} },
                        shape: 'star',
                        font: { size: 18, color: '#1A1A1A', face: 'Georgia', strokeWidth: 0 },
                        // borderWidth: 0, // Eredita dal globale
                    },
                    1: { // Pagina Principale
                        color: { background: '#6495ED', border: '#6495ED', highlight: { background: '#A7C7F5', border: '#8FAFE6'}, hover: { background: '#A7C7F5', border: '#8FAFE6'} },
                        shape: 'ellipse',
                        font: { size: 17, color: '#FFFFFF', strokeWidth: 3, strokeColor: '#252a34' },
                    },
                    2: { // Contenuto Standard
                        color: { background: '#90EE90', border: '#90EE90', highlight: { background: '#B3F5B3', border: '#A2F0A2'}, hover: { background: '#B3F5B3', border: '#A2F0A2'}  },
                    },
                    3: { // Sito Autore Esterno
                        color: { background: '#DDA0DD', border: '#DDA0DD', highlight: { background: '#E7B7E7', border: '#E7B7E7'}, hover: { background: '#E7B7E7', border: '#E7B7E7'} },
                        shape: 'hexagon',
                        font: { color: '#1A1A1A', strokeWidth: 0 },
                    }
                }
            };

            populateGraphLegend(options); // Chiama per generare la legenda

            const network = new vis.Network(visContainer, graphData, options);

            let hoveredNodeId = null; 

            function displayNodeInPanel(nodeData) {
                if (!nodeContentPane || !nodeContentTarget) {
                    console.error("Pannello contenuto o target non trovato per displayNodeInPanel");
                    return;
                }

                if (nodeData && nodeData.url) {
                   // Usa un iframe per caricare l'URL del nodo
                    let iframeSrc = nodeData.url;
                    if (iframeSrc.includes('?')) {
                        iframeSrc += '&iframe=true';
                    } else {
                        iframeSrc += '?iframe=true';
                    }
                    nodeContentTarget.innerHTML = `<iframe src="${iframeSrc}" style="width:100%; height:100%; border:none;"></iframe>`;                    
                    // Attiva la modalità split view
                    bodyElement.classList.add('view-mode--split');
                    
                    // Adatta il grafo dopo la transizione CSS
                    setTimeout(() => {
                        if (network && typeof network.fit === 'function') {
                            network.fit(); 
                        }
                    }, 450);
                } else {
                    // Se non c'è URL, potresti mostrare un messaggio o solo l'excerpt
                    let contentHTML = `<h1>${nodeData.originalLabel || 'Dettagli Nodo'}</h1>`;
                    contentHTML += `<p>${nodeData.excerpt || 'Nessuna descrizione o URL disponibile.'}</p>`;
                    nodeContentTarget.innerHTML = contentHTML;
                    // Non attivare la split view se non c'è contenuto principale da mostrare,
                    // o gestiscilo come preferisci.
                    bodyElement.classList.remove('view-mode--split'); // Esempio: chiudi se non c'è URL
                    setTimeout(() => { if (network && typeof network.fit === 'function') network.fit(); }, 450);
                }
            }                    
 

            network.on("hoverNode", function (params) {
                hoveredNodeId = params.node;
                const nodeData = network.body.data.nodes.get(hoveredNodeId);
                if (nodeData) {
                    if (nodeData.originalLabel) {
                        network.body.data.nodes.update({id: hoveredNodeId, label: nodeData.originalLabel});
                    }
                    if (tooltipElement && tooltipTitleElement && tooltipExcerptElement) {
                        tooltipTitleElement.textContent = nodeData.originalLabel || "N/D";
                        let excerptText = "Nessuna descrizione.";
                        if (nodeData.is_external_site_node) {
                            excerptText = nodeData.excerpt || `Sito esterno di ${nodeData.originalLabel}.`;
                        } else if (nodeData.excerpt) {
                            excerptText = nodeData.excerpt;
                        }
                        tooltipExcerptElement.textContent = excerptText;
                        tooltipElement.classList.add('is-visible');
                    }
                }
            });

            network.on("blurNode", function (params) {
                hoveredNodeId = null; 
                network.body.data.nodes.update({id: params.node, label: ''});
                if (tooltipElement) {
                    tooltipElement.classList.remove('is-visible');
                }
            });
                    
        visContainer.addEventListener('mousemove', function(event) {
            if (hoveredNodeId && tooltipElement && tooltipElement.classList.contains('is-visible')) {
                const visRect = visContainer.getBoundingClientRect();

                // Calcola x, y RELATIVE ALL'INTERNO del visContainer
                let x_relative_to_visContainer = event.clientX - visRect.left + 15;
                let y_relative_to_visContainer = event.clientY - visRect.top + 15;

                const tooltipCurrentRect = tooltipElement.getBoundingClientRect(); // Meglio prenderla prima degli aggiustamenti

                // Logica di aggiustamento per non uscire dai bordi del visContainer
                if (x_relative_to_visContainer + tooltipCurrentRect.width > visRect.width) {
                    x_relative_to_visContainer = event.clientX - visRect.left - tooltipCurrentRect.width - 15;
                }
                if (y_relative_to_visContainer + tooltipCurrentRect.height > visRect.height) {
                    y_relative_to_visContainer = event.clientY - visRect.top - tooltipCurrentRect.height - 15;
                }
                // Assicurati che non vada troppo a sinistra/sopra *all'interno* del visContainer
                if (x_relative_to_visContainer < 0 && !(event.clientX - visRect.left - tooltipCurrentRect.width - 15 < 0) ) { 
                    // Se non è già stato spostato a sinistra del cursore perché troppo a destra
                    x_relative_to_visContainer = 15;
                }
                if (y_relative_to_visContainer < 0 && !(event.clientY - visRect.top - tooltipCurrentRect.height - 15 < 0) ) {
                    y_relative_to_visContainer = 15;
                }


                // --- MODIFICA CRUCIALE QUI ---
                // Ora converti queste coordinate relative a visContainer in coordinate 
                // assolute rispetto al viewport (che per un tooltip figlio del body è ciò che serve)
                let final_tooltip_left = visRect.left + x_relative_to_visContainer;
                let final_tooltip_top = visRect.top + y_relative_to_visContainer;
                
                // Se il body scrolla (improbabile nel tuo caso con overflow:hidden, ma per sicurezza):
                // final_tooltip_left += window.scrollX;
                // final_tooltip_top += window.scrollY;


                tooltipElement.style.left = final_tooltip_left + 'px';
                tooltipElement.style.top = final_tooltip_top + 'px';
            }
        });

            network.on("selectNode", function (params) {
                if (params.nodes.length > 0) {
                    const nodeId = params.nodes[0];
                    // Assicurati che 'network' sia accessibile qui. Sì, lo è perché siamo nello stesso scope.
                    const nodeData = network.body.data.nodes.get(nodeId); 
                    
                    if (nodeData) {
                        displayNodeInPanel(nodeData); // NUOVA LOGICA
                    } else {
                        console.warn("Dati del nodo selezionato non trovati:", nodeId);
                        // Potresti voler nascondere il pannello se i dati non ci sono
                        bodyElement.classList.remove('view-mode--split');
                        setTimeout(() => {
                             if (network && typeof network.fit === 'function') {
                                network.fit();
                            }
                        }, 450);
                    }
                }
            });
            if (closeContentPaneBtn) { // Assicurati che il bottone esista prima di aggiungere un listener
                closeContentPaneBtn.addEventListener('click', function() {
                    bodyElement.classList.remove('view-mode--split');
                    if (nodeContentTarget) {            
                        nodeContentTarget.innerHTML = ''; // Svuota il contenuto
                    }
                    // Adatta il grafo dopo la transizione CSS
                    setTimeout(() => {
                         if (network && typeof network.fit === 'function') {
                            network.fit(); 
                        }
                    }, 450); 
                });
            } else {
                console.warn("#closeContentPaneBtn non trovato nel DOM."); // Aggiungi un warning se non lo trova
            }

        })
        .catch(error => {
            console.error('Error fetching or parsing graph data:', error);
            if (visContainer) {
                visContainer.innerHTML = `<p style="text-align:center; padding-top:50px; color:red;">Errore: ${error.message}</p>`;
            }
        });
});