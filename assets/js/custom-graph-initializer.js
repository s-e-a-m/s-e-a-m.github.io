---
# Front matter per abilitare il processing Liquid (per relative_url)
---
document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('graph-container');
    if (!container) {
        console.error('Graph container #graph-container not found!');
        return;
    }

    fetch('{{ "/assets/js/graph-data.json" | relative_url }}')
        .then(response => {
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.status} ${response.statusText}`);
            }
            return response.json();
        })
        .then(graphData => {
            if (!graphData.nodes || graphData.nodes.length === 0) {
                console.warn('No graph data (nodes) to display.');
                container.innerHTML = '<p style="text-align:center; padding-top:50px; color: #ccc;">Nessun dato da visualizzare nel grafo.</p>';
                return;
            }

            // Pre-elabora i nodi per nascondere le etichette inizialmente
            // e salvare l'etichetta originale per mostrarla al hover
            graphData.nodes.forEach(node => {
                node.originalLabel = node.label; // Salva l'etichetta originale
                node.label = ''; // Imposta l'etichetta a stringa vuota per nasconderla
                // Assicurati che il tooltip (title) mostri l'etichetta originale se l'etichetta è nascosta
                if (!node.title) { // Se non c'è già un title esplicito
                    node.title = node.originalLabel;
                }
            });

            const options = {
                nodes: {
                    shape: 'dot',
                    font: { // Queste opzioni si applicheranno quando l'etichetta diventa visibile
                        size: 16, // Dimensione quando visibile
                        face: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                        color: '#FFFFFF', // Colore testo etichetta (bianco per contrasto su sfondo scuro)
                        strokeWidth: 3,   // Bordo attorno al testo per leggibilità
                        strokeColor: '#252a34' // Colore del bordo testo (uguale allo sfondo pagina per effetto "cutout")
                    },
                    borderWidth: 2,       // Spessore del bordo del nodo
                    borderWidthSelected: 3,
                    shadow: {
                        enabled: true,
                        color: 'rgba(0,0,0,0.4)',
                        size: 7,
                        x: 3,
                        y: 3
                    },
                    // I colori specifici (background e border) saranno gestiti dai gruppi
                },
                edges: {
                    width: 1.5, // Leggermente più spessi
                    color: {
                        color: '#5A677D', // Grigio-blu per gli archi
                        highlight: '#8A9BB3',
                        hover: '#8A9BB3',
                        opacity: 0.5 // Leggermente meno opachi
                    },
                    arrows: {
                        to: {
                            enabled: false, // LASCIALO TRUE PER QUESTO TEST
                            scaleFactor: .01, // Rendi le frecce ENORMI
                            type: 'box' // Cambia il tipo di freccia (altri tipi: 'circle', 'diamond', 'vee', 'bar')
                        }
                    },
                    smooth: {
                        enabled: true,
                        type: "continuous", // Mantiene gli archi curvi
                        roundness: 0.5
                    }
                },
                physics: { // Mantieni le impostazioni di fisica che preferisci
                    enabled: true, // Manteniamo la fisica attiva per l'effetto fluttuante
                    solver: 'forceAtlas2Based',
                    forceAtlas2Based: {
                        gravitationalConstant: -45,
                        centralGravity: 0.003,
                        springLength: 150,
                        springConstant: 0.05,
                        damping: 0.2, // Basso damping per più fluttuazione
                        avoidOverlap: 0.6
                    },
                    stabilization: {
                        enabled: true,
                        iterations: 400,
                        fit: true
                    }
                },
                interaction: {
                    hover: true, // FONDAMENTALE per gli eventi hover
                    dragNodes: true,
                    dragView: true,
                    zoomView: true,
                    tooltipDelay: 100, // Riduci il delay per il tooltip (che ora mostra il nome)
                    navigationButtons: false,
                    keyboard: true
                },
                groups: {
                    0: { // NODO CENTRALE MAPPA
                        // Il colore del bordo sarà uguale a quello di background se non specificato diversamente qui
                        color: { 
                            background: '#4CAF50', // Verde
                            border: '#4CAF50',     // <--- BORDO DELLO STESSO COLORE
                            highlight: { background: '#66BB6A', border: '#66BB6A'}, 
                            hover: { background: '#66BB6A', border: '#66BB6A'} 
                        },
                        shape: 'star',
                        font: { size: 18, color: '#ffffff', face: 'Georgia', strokeWidth: 4, strokeColor: '#252a34' },
                        borderWidth: 3,
                    },
                    1: { // Nodi Principali (dalla navigazione)
                        color: { 
                            background: '#5DA5DA', // Blu
                            border: '#5DA5DA',     // <--- BORDO DELLO STESSO COLORE
                            highlight: { background: '#82C0E6', border: '#82C0E6'}, 
                            hover: { background: '#82C0E6', border: '#82C0E6'} 
                        },
                        shape: 'ellipse',
                        font: { size: 17, strokeWidth: 3, strokeColor: '#252a34' } // Eredita colore testo da nodes.font
                    },
                    2: { // Nodi Normali (altre pagine/post)
                        color: { 
                            background: '#F15A24', // Arancione
                            border: '#F15A24',     // <--- BORDO DELLO STESSO COLORE
                            highlight: { background: '#F58C6B', border: '#F58C6B'}, 
                            hover: { background: '#F58C6B', border: '#F58C6B'}  
                        },
                    }
                }
            };

            const network = new vis.Network(container, graphData, options);

            // Evento per mostrare l'etichetta al HOVER sul nodo
            network.on("hoverNode", function (params) {
                const nodeId = params.node;
                // network.body.data.nodes è il DataSet che contiene i nodi
                // Per aggiornare un nodo, passiamo un oggetto con il suo id e le proprietà da cambiare
                const nodeData = network.body.data.nodes.get(nodeId);
                if (nodeData && nodeData.originalLabel) {
                    network.body.data.nodes.update({id: nodeId, label: nodeData.originalLabel});
                }
            });

            // Evento per nascondere l'etichetta quando il mouse LASCIA il nodo
            network.on("blurNode", function (params) {
                const nodeId = params.node;
                network.body.data.nodes.update({id: nodeId, label: ''}); // Reimposta a stringa vuota
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

            // Non fermare la fisica se vuoi un effetto fluttuante continuo
            // network.on("stabilizationIterationsDone", function () {
            //   network.setOptions( { physics: { enabled: false } } );
            // });

        })
        .catch(error => {
            console.error('Error fetching or parsing graph data:', error);
            container.innerHTML = `<p style="text-align:center; padding-top:50px; color:red;">Errore nel caricamento dei dati del grafo: ${error.message}</p>`;
        });
});