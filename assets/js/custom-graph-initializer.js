---
# Front matter per abilitare Liquid
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

            const options = {
                nodes: {
                    shape: 'dot', // Mantiene i nodi come punti, la dimensione è data da 'value'
                    // size: 15, // Dimensione di default se 'value' non è specificato
                    font: {
                        size: 15,
                        face: '"Helvetica Neue", Helvetica, Arial, sans-serif', // Font più leggibile
                        color: '#e0e0e0', // Colore testo etichetta nodo (chiaro per sfondo scuro)
                        strokeWidth: 0, // Nessun bordo attorno al testo
                        // strokeColor: '#222' // Colore bordo testo (se strokeWidth > 0)
                    },
                    borderWidth: 2,
                    borderWidthSelected: 3,
                    shadow: {
                        enabled: true,
                        color: 'rgba(0,0,0,0.3)',
                        size: 5,
                        x: 2,
                        y: 2
                    },
                    // color: {} // Definito dai gruppi sotto
                },
                edges: {
                    width: 1,
                    color: {
                        color: '#4A5568', // Grigio scuro per gli archi (Tailwind gray-600)
                        highlight: '#718096', // Grigio più chiaro per highlight (Tailwind gray-500)
                        hover: '#718096',
                        opacity: 0.6
                    },
                    arrows: {
                        to: {
                            enabled: true,
                            scaleFactor: 0.6,
                            type: 'arrow'
                        }
                    },
                    smooth: {
                        enabled: true,
                        type: "continuous", // 'dynamic' o 'continuous' per un look più organico
                        roundness: 0.5
                    }
                },
                physics: {
                    enabled: true,
                    solver: 'forceAtlas2Based', // Spesso dà buoni risultati per grafi di conoscenza
                    forceAtlas2Based: {
                        gravitationalConstant: -35, // Più basso, meno compatto
                        centralGravity: 0.005,     // Tira leggermente verso il centro
                        springLength: 100,
                        springConstant: 0.18,
                        damping: 0.6,              // Quanto velocemente si stabilizza
                        avoidOverlap: 0.7          // Evita che i nodi si sovrappongano molto
                    },
                    // barnesHut: { // Alternativa a forceAtlas2Based
                    //   gravitationalConstant: -8000,
                    //   centralGravity: 0.3,
                    //   springLength: 120,
                    //   springConstant: 0.05,
                    //   damping: 0.09,
                    //   avoidOverlap: 0.1
                    // },
                    stabilization: {
                        enabled: true,
                        iterations: 1000, // Prova a farlo stabilizzare
                        fit: true
                    }
                },
                interaction: {
                    hover: true,          // Abilita hover su nodi/archi
                    dragNodes: true,      // Permetti di trascinare i nodi
                    dragView: true,       // Permetti di trascinare la vista (pan)
                    zoomView: true,       // Permetti lo zoom
                    tooltipDelay: 200,
                    navigationButtons: true, // Mostra i pulsanti di navigazione +/-/fit
                    keyboard: true        // Abilita navigazione da tastiera
                },
                groups: {
                    1: { // Nodi Principali (dalla navigazione)
                        color: { background: '#5DA5DA', border: '#4A89C1', highlight: { background: '#82C0E6', border: '#5DA5DA'}, hover: { background: '#82C0E6', border: '#5DA5DA'} },
                        shape: 'ellipse', // Forma diversa per i principali
                        // font: { size: 16, color: '#ffffff' } // Font leggermente più grande e bianco
                    },
                    2: { // Nodi Normali
                        color: { background: '#F15A24', border: '#D43D0C', highlight: { background: '#F58C6B', border: '#F15A24'}, hover: { background: '#F58C6B', border: '#F15A24'}  },
                        // shape: 'dot' // Default
                    }
                }
            };

            const network = new vis.Network(container, graphData, options);

            network.on("selectNode", function (params) {
                if (params.nodes.length > 0) {
                    const nodeId = params.nodes[0];
                    // Cerca il nodo nei dati originali per ottenere l'URL
                    const nodeData = graphData.nodes.find(n => n.id === nodeId);
                    if (nodeData && nodeData.url) {
                        // Se il nodo ha un URL, naviga a quell'URL
                        // Potresti voler aprire in una nuova scheda: window.open(nodeData.url, '_blank');
                        window.location.href = nodeData.url;
                    }
                }
            });

            // Dopo un certo numero di iterazioni di stabilizzazione, ferma la simulazione fisica
            // per evitare che il grafo si muova all'infinito e risparmiare CPU.
            // network.on("stabilizationIterationsDone", function () {
            //   console.log("Graph stabilization complete, stopping physics.");
            //   network.setOptions( { physics: false } );
            // });

            // Alternativa: ferma la fisica dopo un timeout se la stabilizzazione non è sufficiente
            // setTimeout(() => {
            //    if (network.physics.options.enabled) {
            //        console.log("Stopping physics after timeout.");
            //        network.setOptions({ physics: false });
            //    }
            // }, 15000); // Ferma dopo 15 secondi


        })
        .catch(error => {
            console.error('Error fetching or parsing graph data:', error);
            container.innerHTML = `<p style="text-align:center; padding-top:50px; color:red;">Errore nel caricamento dei dati del grafo: ${error.message}</p>`;
        });
});