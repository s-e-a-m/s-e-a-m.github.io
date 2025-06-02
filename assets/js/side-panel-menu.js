---
# Front matter vuoto
---
document.addEventListener('DOMContentLoaded', function () {
  const openMenuBtn = document.getElementById('openMenuBtn');
  const closeMenuBtn = document.getElementById('closeMenuBtn'); // Questo è il nuovo pulsante X
  const sidePanel = document.getElementById('sidePanel');

  // Funzione per aprire il pannello
  function openPanel(event) {
    if (sidePanel) {
      sidePanel.classList.add('is-open');
    }
    if (openMenuBtn) openMenuBtn.style.display = 'none'; // Nascondi hamburger
    if (closeMenuBtn) closeMenuBtn.style.display = 'block'; // Mostra X
    
    if (event) event.stopPropagation();
  }

  // Funzione per chiudere il pannello
  function closePanel(event) {
    if (sidePanel) {
      sidePanel.classList.remove('is-open');
    }
    if (openMenuBtn) openMenuBtn.style.display = 'block'; // Mostra hamburger
    if (closeMenuBtn) closeMenuBtn.style.display = 'none';  // Nascondi X

    if (event) event.stopPropagation(); // Fermiamo la propagazione per il closeMenuBtn per sicurezza
  }

  if (openMenuBtn) {
    openMenuBtn.addEventListener('click', openPanel);
  }

  if (closeMenuBtn) { // Assicurati che questo si riferisca al nuovo pulsante X
    closeMenuBtn.addEventListener('click', closePanel);
  }

  // Chiudi il menu se si clicca fuori dal pannello
  if (sidePanel && openMenuBtn) { // openMenuBtn è necessario per il controllo isClickOnOpenButton
    document.addEventListener('click', function(event) {
      const isClickInsidePanel = sidePanel.contains(event.target);
      // Il pulsante di apertura (hamburger) non dovrebbe chiudere il pannello se questo è già aperto
      // e il click avviene sul pulsante di apertura.
      // Il pulsante di chiusura (X) ha già il suo event listener.
      const isClickOnOpenButtonItself = openMenuBtn.contains(event.target);

      if (sidePanel.classList.contains('is-open') && !isClickInsidePanel && !isClickOnOpenButtonItself) {
        closePanel(); 
      }
    });

    sidePanel.addEventListener('click', function(event) {
      event.stopPropagation();
    });
  }

  // Chiudi il menu se si preme il tasto Escape
  document.addEventListener('keydown', function(event) {
    if (event.key === "Escape" && sidePanel && sidePanel.classList.contains('is-open')) {
      closePanel();
    }
  });
});