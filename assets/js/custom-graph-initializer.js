---
# Front matter per abilitare il processing Liquid (per relative_url)
---
document.addEventListener('DOMContentLoaded', function () {
    const visContainer = document.getElementById('graph-container');
    const tooltipElement = document.getElementById('graphNodeTooltip');
    const tooltipTitleElement = document.getElementById('tooltipNodeTitle');
    const tooltipExcerptElement = document.getElementById('tooltipNodeExcerpt');

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
                    let x = event.clientX - visRect.left + 15;
                    let y = event.clientY - visRect.top + 15;
                    const tooltipRect = tooltipElement.getBoundingClientRect(); 
                    if (x + tooltipRect.width > visRect.width) {
                        x = event.clientX - visRect.left - tooltipRect.width - 15;
                    }
                    if (y + tooltipRect.height > visRect.height) {
                        y = event.clientY - visRect.top - tooltipRect.height - 15;
                    }
                    if (x < 0) x = 15;
                    if (y < 0) y = 15;
                    tooltipElement.style.left = x + 'px';
                    tooltipElement.style.top = y + 'px';
                }
            });

            network.on("selectNode", function (params) {
                if (params.nodes.length > 0) {
                    const nodeId = params.nodes[0];
                    const nodeData = network.body.data.nodes.get(nodeId); 
                    if (nodeData && nodeData.url) {
                        window.location.href = nodeData.url;
                    } else {
                        console.warn("Nodo selezionato non ha un URL:", nodeData);
                    }
                }
            });

        })
        .catch(error => {
            console.error('Error fetching or parsing graph data:', error);
            if (visContainer) {
                visContainer.innerHTML = `<p style="text-align:center; padding-top:50px; color:red;">Errore: ${error.message}</p>`;
            }
        });
});