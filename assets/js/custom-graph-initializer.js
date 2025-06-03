---
# Front matter per abilitare il processing Liquid (per relative_url)
---
document.addEventListener('DOMContentLoaded', function () {
    console.log("Graph Initializer: DOMContentLoaded");
    const visContainer = document.getElementById('graph-container');
    console.log("Graph Initializer: visContainer element:", visContainer); 

    if (!visContainer) {
        // Non è un errore se la pagina non ha un #graph-container (es. un layout speciale senza grafo)
        // console.log('Graph container #graph-container not found on this page. Graph not initialized.');
        return; 
    }

    const tooltipElement = document.getElementById('graphNodeTooltip');
    const tooltipTitleElement = document.getElementById('tooltipNodeTitle');
    const tooltipExcerptElement = document.getElementById('tooltipNodeExcerpt');

    if (!tooltipElement || !tooltipTitleElement || !tooltipExcerptElement) {
        console.warn('Uno o più elementi del tooltip non sono stati trovati.');
    }

    function populateGraphLegend(visOptions) {
        const legendContainer = document.getElementById('graphLegend');
        if (!legendContainer || !visOptions.groups) return;
        const legendUl = legendContainer.querySelector('ul');
        if (!legendUl) return;
        legendUl.innerHTML = '';
        const groupDescriptions = { 0: "S-E-A-M", 1: "Pagina Principale", 2: "Contenuto Standard", 3: "Sito Autore Esterno" };
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
        if (legendHasItems && legendContainer) legendContainer.style.display = 'block';
    }

    fetch('{{ "/assets/js/graph-data.json" | relative_url }}')
        .then(response => {
            if (!response.ok) throw new Error(`Network response was not ok: ${response.status} ${response.statusText} for ${response.url}`);
            return response.json();
        })
        .then(graphData => {
            if (!graphData.nodes || graphData.nodes.length === 0) {
                if(visContainer) visContainer.innerHTML = '<p style="text-align:center; padding-top:50px; color: #ccc;">Nessun dato disponibile per il grafo.</p>';
                return;
            }
            graphData.nodes.forEach(node => { node.originalLabel = node.label; node.label = ''; });

            const options = { /* ... Le tue opzioni Vis.js (identiche a prima) ... */ 
                nodes: { shape: 'dot', font: { size: 16, face: '"Helvetica Neue", Helvetica, Arial, sans-serif', color: '#FFFFFF', strokeWidth: 3, strokeColor: '#252a34' }, borderWidth: 0, borderWidthSelected: 1, shadow: { enabled: true, color: 'rgba(0,0,0,0.4)', size: 7, x: 3, y: 3 } },
                edges: { width: 1.5, color: { color: '#5A677D', highlight: '#8A9BB3', hover: '#8A9BB3', opacity: 0.5 }, arrows: { to: { enabled: false, scaleFactor: 0.01 } }, smooth: { enabled: true, type: "continuous", roundness: 0.5 } },
                physics: { enabled: true, solver: 'forceAtlas2Based', forceAtlas2Based: { gravitationalConstant: -45, centralGravity: 0.003, springLength: 150, springConstant: 0.05, damping: 0.2, avoidOverlap: 0.6 }, stabilization: { enabled: true, iterations: 400, fit: true } },
                interaction: { hover: true, dragNodes: true, dragView: true, zoomView: true, zoomSpeed: 0.1, tooltipDelay: 100, navigationButtons: false, keyboard: true },
                groups: {
                    0: { // Mappa del Sito (S-E-A-M) - Il più importante, magari un grigio scuro o un accento
                        color: { 
                            background: '#404040', // Grigio scuro
                            border: '#202020',     // Bordo ancora più scuro
                            highlight: { background: '#606060', border: '#303030' }, // Evidenziazione più chiara
                            hover: { background: '#505050', border: '#282828' }      // Hover simile
                        },
                        shape: 'star', // Mantieni la forma se ti piace
                        font: { size: 18, color: '#FFFFFF', face: 'Georgia', strokeWidth: 0 }, // Testo bianco su scuro
                        value: 35 // Mantieni il valore per la dimensione se lo usi
                    },
                    1: { // Pagina Principale (es. da navigation.yml)
                        color: { 
                            background: '#666666', // Grigio medio-scuro
                            border: '#444444',
                            highlight: { background: '#888888', border: '#555555' },
                            hover: { background: '#777777', border: '#4B4B4B' }
                        },
                        shape: 'ellipse', // Mantieni
                        font: { size: 17, color: '#FFFFFF', strokeWidth: 2, strokeColor: '#333333' }, // Testo bianco, contorno scuro
                        value: 25
                    },
                    2: { // Contenuto Standard
                        color: { 
                            background: '#999999', // Grigio medio
                            border: '#777777',
                            highlight: { background: '#BBBBBB', border: '#888888' },
                            hover: { background: '#AAAAAA', border: '#808080' }
                        },
                        // shape: 'dot', // Eredita dal default dei nodi o specifica
                        font: { color: '#000000', strokeWidth: 0 }, // Testo nero su grigio medio/chiaro
                        value: 12
                    },
                    3: { // Sito Autore Esterno
                        color: { 
                            background: '#CCCCCC', // Grigio chiaro
                            border: '#AAAAAA',
                            highlight: { background: '#EEEEEE', border: '#BBBBBB' },
                            hover: { background: '#DDDDDD', border: '#B0B0B0' }
                        },
                        shape: 'hexagon', // Mantieni
                        font: { color: '#000000', strokeWidth: 0 }, // Testo nero su grigio chiaro
                        value: 20
                    }
                    // Aggiungi altri gruppi se necessario con altre sfumature di grigio
                }
            };
            populateGraphLegend(options);
            
            // Rendi 'network' accessibile globalmente se lo script di resize deve chiamare network.fit()
            window.network = new vis.Network(visContainer, graphData, options); 
            let hoveredNodeId = null;

            network.on("hoverNode", function (params) {
                hoveredNodeId = params.node;
                const nodeData = network.body.data.nodes.get(hoveredNodeId);
                if (nodeData) {
                    if (nodeData.originalLabel) network.body.data.nodes.update({id: hoveredNodeId, label: nodeData.originalLabel});
                    if (tooltipElement && tooltipTitleElement && tooltipExcerptElement) {
                        tooltipTitleElement.textContent = nodeData.originalLabel || "N/D";
                        let excerptText = "Nessuna descrizione.";
                        if (nodeData.is_external_site_node) excerptText = nodeData.excerpt || `Sito esterno di ${nodeData.originalLabel}.`;
                        else if (nodeData.excerpt) excerptText = nodeData.excerpt;
                        else if (nodeData.url) excerptText = "Clicca il nodo per visitare la pagina.";
                        tooltipExcerptElement.textContent = excerptText;
                        tooltipElement.classList.add('is-visible');
                    }
                }
            });

            network.on("blurNode", function (params) {
                hoveredNodeId = null;
                if (params.node) {
                    const nodeData = network.body.data.nodes.get(params.node);
                    if (nodeData) network.body.data.nodes.update({id: params.node, label: ''});
                }
                if (tooltipElement) tooltipElement.classList.remove('is-visible');
            });
            
            visContainer.addEventListener('mousemove', function(event) {
                if (hoveredNodeId && tooltipElement && tooltipElement.classList.contains('is-visible')) {
                    const visRect = visContainer.getBoundingClientRect();
                    let x_rel = event.clientX - visRect.left + 15;
                    let y_rel = event.clientY - visRect.top + 15;
                    const tooltipRect = tooltipElement.getBoundingClientRect();

                    if (x_rel + tooltipRect.width > visRect.width) x_rel = event.clientX - visRect.left - tooltipRect.width - 15;
                    if (y_rel + tooltipRect.height > visRect.height) y_rel = event.clientY - visRect.top - tooltipRect.height - 15;
                    if (x_rel < 0) x_rel = 5;
                    if (y_rel < 0) y_rel = 5;
                    
                    tooltipElement.style.left = x_rel + 'px';
                    tooltipElement.style.top = y_rel + 'px';
                }
            });

            network.on("selectNode", function (params) {
                if (params.nodes.length > 0) {
                    const nodeId = params.nodes[0];
                    const nodeData = network.body.data.nodes.get(nodeId); 
                    if (nodeData && nodeData.url) {
                        window.location.href = nodeData.url;
                    } else if (nodeData) {
                        console.warn("Nodo selezionato non ha un URL:", nodeData.originalLabel || nodeId);
                    }
                }
            });
        setTimeout(() => {
            if (window.network) {
                console.log("Attempting network.fit() inside setTimeout");
                try {
                    window.network.fit(); // Prova a forzare un ridimensionamento dopo un breve ritardo
                } catch (e) {
                console.error("Error during network.fit() in setTimeout:", e);
                    }
                }
        }, 200);

        })
        .catch(error => {
            console.error('Error fetching or parsing graph data:', error);
            if (visContainer) visContainer.innerHTML = `<p style="text-align:center; padding-top:50px; color:red;">Errore: ${error.message}</p>`;
        });
});