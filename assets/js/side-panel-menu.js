---
# Front matter vuoto per abilitare il processing Liquid se necessario (non serve per questo script specifico)
---
document.addEventListener('DOMContentLoaded', function () {
  const openMenuBtn = document.getElementById('openMenuBtn');
  const closeMenuBtn = document.getElementById('closeMenuBtn');
  const sidePanel = document.getElementById('sidePanel');
  // const graphContainerWrapper = document.getElementById('graph-container-wrapper'); // Decommenta se usi lo shift

  if (openMenuBtn && sidePanel) { // Controlla che gli elementi esistano
    openMenuBtn.addEventListener('click', () => {
      sidePanel.classList.add('is-open');
      // Se vuoi che il contenuto del grafo si sposti:
      // graphContainerWrapper.classList.add('shifted-right');
    });
  }

  if (closeMenuBtn && sidePanel) { // Controlla che gli elementi esistano
    closeMenuBtn.addEventListener('click', () => {
      sidePanel.classList.remove('is-open');
      // Se hai spostato il contenuto del grafo:
      // graphContainerWrapper.classList.remove('shifted-right');
    });
  }

  // Opzionale: chiudi il menu se si clicca fuori dal pannello (o si preme Esc)
  // Questa parte è un po' più complessa da rendere robusta
  // document.addEventListener('click', function(event) {
  //   if (sidePanel && sidePanel.classList.contains('is-open')) {
  //     const isClickInsidePanel = sidePanel.contains(event.target);
  //     const isClickOnOpenButton = openMenuBtn ? openMenuBtn.contains(event.target) : false;

  //     if (!isClickInsidePanel && !isClickOnOpenButton) {
  //       sidePanel.classList.remove('is-open');
  //       // graphContainerWrapper.classList.remove('shifted-right');
  //     }
  //   }
  // });

  // document.addEventListener('keydown', function(event) {
  //   if (event.key === "Escape" && sidePanel && sidePanel.classList.contains('is-open')) {
  //     sidePanel.classList.remove('is-open');
  //     // graphContainerWrapper.classList.remove('shifted-right');
  //   }
  // });

});