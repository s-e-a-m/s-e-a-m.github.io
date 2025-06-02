---
# Front matter vuoto
---
document.addEventListener('DOMContentLoaded', function () {
  const openMenuBtn = document.getElementById('openMenuBtn');
  const closeMenuBtn = document.getElementById('closeMenuBtn');
  const sidePanel = document.getElementById('sidePanel');
  const graphContainerWrapper = document.getElementById('graph-container-wrapper'); // Contenitore del grafo

  if (openMenuBtn && sidePanel) {
    openMenuBtn.addEventListener('click', (event) => {
      event.stopPropagation(); // Impedisce che questo click venga catturato dal listener sul document (Metodo 2)
      sidePanel.classList.add('is-open');
    });
  }

  if (closeMenuBtn && sidePanel) {
    closeMenuBtn.addEventListener('click', (event) => {
      event.stopPropagation(); // Impedisce che questo click venga catturato dal listener sul document
      sidePanel.classList.remove('is-open');
    });
  }

  // NUOVA PARTE: Chiudi il menu se si clicca sul contenitore del grafo
  if (graphContainerWrapper && sidePanel) {
    graphContainerWrapper.addEventListener('click', () => {
      if (sidePanel.classList.contains('is-open')) {
        sidePanel.classList.remove('is-open');
      }
    });
  }

  // Opzionale: chiudi il menu se si preme il tasto Escape
  document.addEventListener('keydown', function(event) {
    if (event.key === "Escape" && sidePanel && sidePanel.classList.contains('is-open')) {
      sidePanel.classList.remove('is-open');
    }
  });

});