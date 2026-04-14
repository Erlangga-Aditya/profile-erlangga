import '../styles/main.scss';
import { initNavbar, initLightbox } from './components';
import { initAnimations, playPreloaderAnimation } from './animations';

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Components
  initNavbar();
  initLightbox();

  // Show More Certificates Logic
  const certToggleBtn = document.getElementById('btn-show-certs');
  const certGrid = document.querySelector('.certificates-grid');
  
  if (certToggleBtn && certGrid) {
    certToggleBtn.addEventListener('click', () => {
      certGrid.classList.toggle('show-all');
      
      if (certGrid.classList.contains('show-all')) {
        certToggleBtn.innerHTML = 'Hide Certificates <svg style="margin-left: 8px;" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>';
      } else {
        certToggleBtn.innerHTML = 'View All Certificates <svg style="margin-left: 8px;" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>';
        // Scroll kembali ke judul certificates agar tidak tersesat
        document.getElementById('certificates').scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // Once document is loaded, run the preloader out-animation
  // and trigger the hero animation timeline
  window.addEventListener('load', () => {
    playPreloaderAnimation(() => {
      initAnimations();
    });
  });
});
