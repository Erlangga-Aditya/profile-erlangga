import '../styles/main.scss';
import { initNavbar, initLightbox } from './components';
import { initAnimations, playPreloaderAnimation } from './animations';

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Components
  initNavbar();
  initLightbox();

  // Once document is loaded, run the preloader out-animation
  // and trigger the hero animation timeline
  window.addEventListener('load', () => {
    playPreloaderAnimation(() => {
      initAnimations();
    });
  });
});
