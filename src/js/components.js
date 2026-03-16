export const initNavbar = () => {
  const navbar = document.querySelector('.navbar-wrapper');
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const navItems = document.querySelectorAll('.nav-links a');

  // Glassmorphic scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Mobile menu toggle logic
  hamburger.addEventListener('click', () => {
    const isActive = hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
    
    if (isActive) {
      document.body.style.overflow = 'hidden';
      // Animate items internally if possible via CSS
    } else {
      document.body.style.overflow = '';
    }
  });

  // Smooth close on link selection
  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      // Smooth Scroll manually to offset the fixed glass header
      const targetId = item.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          const navHeight = navbar.offsetHeight;
          const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navHeight - 20;

          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }

      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
      document.body.style.overflow = '';
      document.body.classList.remove('loading');
    });
  });
};

export const initLightbox = () => {
  const certCards = document.querySelectorAll('.cert-card');
  const lightbox = document.getElementById('lightbox');
  const lightboxContent = document.getElementById('lightbox-img');
  const closeBtn = document.querySelector('.lightbox-close');
  const backdrop = document.querySelector('.lightbox-backdrop');

  if (!lightbox || certCards.length === 0) return;

  const openLightbox = (src) => {
    lightboxContent.src = src;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  };

  // Open events
  certCards.forEach(card => {
    card.addEventListener('click', () => {
      const img = card.querySelector('img');
      if (img) openLightbox(img.src);
    });
  });

  // Close events
  closeBtn.addEventListener('click', closeLightbox);
  backdrop.addEventListener('click', closeLightbox);

  // ESC key event
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
      closeLightbox();
    }
  });
};
