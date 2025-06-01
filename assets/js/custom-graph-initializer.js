---

---

document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('graph-container');
    if (!container) {
        console.error('Graph container not found!');
        return;
    }

    fetch('{{ "/assets/js/graph-data.json" | relative_url }}') // Carica i dati generati da Jekyll
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(graphData => {
            if (!graphData.nodes || graphData.nodes.length === 0) {
                console.warn('No graph data (nodes) to display.');
                container.innerHTML = '<p style="text-align:center; padding-top:50px;">Nessun dato da visualizzare nel grafo.</p>';
                return;
            }

            const options = {
                nodes: {
                    shape: 'dot', // o 'ellipse', 'circle', 'box', 'text', 'image', 'circularImage', 'diamond', 'star', 'triangle', 'triangleDown', 'hexagon', 'square' and 'icon'
                    font: {
                        size: 14,
                        face: 'arial', // Dovrebbe corrispondere ai font del tuo tema o essere leggibile
                        color: '#333'
                    },
                    borderWidth: 2,
                    shadow: true
                },
                edges: {
                    width: 1,
                    smooth: { // Per linee curve
                        type: 'continuous' // o 'dynamic', 'discrete', 'diagonalCross', 'straightCross', 'curvedCW', 'curvedCCW'
                    },
                    arrows: {
                      to: { enabled: true, scaleFactor: 0.5 } // Frecce per gli archi direzionali
                    }
                },
                physics: { // Simulazione fisica per il layout
                    enabled: true,
                    solver: 'barnesHut', // 'barnesHut', 'repulsion', 'hierarchicalRepulsion', 'forceAtlas2Based'
                    barnesHut: {
                        gravitationalConstant: -8000,
                        centralGravity: 0.3,
                        springLength: 150,
                        springConstant: 0.04,
                        damping: 0.09,
                        avoidOverlap: 0.1
                    },
                    stabilization: { // Per stabilizzare il grafo all'inizio
                        iterations: 1000
                    }
                },
                interaction: {
                    hover: true,
                    tooltipDelay: 200,
                    navigationButtons: true, // Pulsanti di zoom/fit
                    keyboard: true
                },
                groups: { // Stili per gruppi di nodi
                    1: { color: { background: '#FF6347', border: '#FF4500' }, shape: 'ellipse' }, // Nodi principali (Tomato)
                    2: { color: { background: '#87CEEB', border: '#4682B4' }, shape: 'dot' }   // Nodi secondari (SkyBlue)
                }
            };

            const network = new vis.Network(container, graphData, options);

            // Gestione click sui nodi per navigare
            network.on("click", function (params) {
                if (params.nodes.length > 0) {
                    const nodeId = params.nodes[0];
                    const node = graphData.nodes.find(n => n.id === nodeId);
                    if (node && node.url) {
                        window.location.href = node.url;
                    }
                }
            });

             // Stabilizza il grafo dopo un po' per evitare movimenti continui
            network.on("stabilizationIterationsDone", function () {
                network.setOptions( { physics: false } );
            });


        })
        .catch(error => {
            console.error('Error fetching or parsing graph data:', error);
            container.innerHTML = '<p style="text-align:center; padding-top:50px; color:red;">Errore nel caricamento dei dati del grafo.</p>';
        });
});