import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const playPreloaderAnimation = (onComplete) => {
  const tl = gsap.timeline({
    onComplete: () => {
      document.body.classList.remove('loading');
      if (document.getElementById('preloader')) {
        document.getElementById('preloader').style.display = 'none';
      }
      if (onComplete) onComplete();
    }
  });

  // Fade out loader text first
  tl.to('.loader-text, .loader-icon', {
    opacity: 0,
    y: -20,
    duration: 0.6,
    stagger: 0.1,
    ease: 'power3.in'
  })
  // Slide up wrapper like a curtain
  .to('#preloader', {
    yPercent: -100,
    duration: 1,
    ease: 'power4.inOut'
  }, '-=0.2');
};

export const initAnimations = () => {
  // Hero Entrance Sequence
  const heroTl = gsap.timeline();

  heroTl.fromTo('.hero-badge',
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
  )
  .fromTo('.hero-title',
    { opacity: 0, y: 60 },
    { opacity: 1, y: 0, duration: 1.2, ease: 'power4.out' },
    '-=0.8'
  )
  .fromTo('.hero-tagline',
    { opacity: 0, y: 40 },
    { opacity: 1, y: 0, duration: 1, ease: 'power3.out' },
    '-=0.8'
  )
  .fromTo('.hero-description',
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 1, ease: 'power3.out' },
    '-=0.8'
  )
  .fromTo('.hero-buttons .btn',
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.15 },
    '-=0.8'
  )
  .fromTo('.scroll-wrapper',
    { opacity: 0 },
    { opacity: 1, duration: 1 },
    '-=0.5'
  );

  // Hero Parallax effect
  gsap.to('.hero-grid', {
    y: 100,
    ease: 'none',
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: 'bottom top',
      scrub: true
    }
  });

  // Global Section Titles Array
  const sectionHeaders = document.querySelectorAll('.section-subtitle, .section-title');
  sectionHeaders.forEach(header => {
    gsap.fromTo(header,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: header,
          start: 'top 85%',
        }
      }
    );
  });

  // About Section Stagger
  gsap.fromTo('.about-headline, .about-paragraph',
    { opacity: 0, y: 30 },
    {
      opacity: 1, y: 0, duration: 1, ease: 'power3.out', stagger: 0.2,
      scrollTrigger: {
        trigger: '.about-text',
        start: 'top 80%',
      }
    }
  );

  // About Image Reveal
  gsap.fromTo('.about-image-wrapper',
    { opacity: 0, scale: 0.9, rotate: -2 },
    {
      opacity: 1, scale: 1, rotate: 0, duration: 1.2, ease: 'power3.out',
      scrollTrigger: {
        trigger: '.about-image-wrapper',
        start: 'top 85%',
      }
    }
  );

  // About Stats Counter (Simple implementation)
  gsap.fromTo('.stat-item',
    { opacity: 0, y: 20 },
    {
      opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.15,
      scrollTrigger: {
        trigger: '.about-stats',
        start: 'top 90%',
      }
    }
  );

  // Project Cards Stagger
  const projects = document.querySelectorAll('.project-showcase');
  projects.forEach((proj, i) => {
    const isReverse = proj.classList.contains('reverse');
    const xOffset = isReverse ? -50 : 50;

    gsap.fromTo(proj.querySelector('.project-showcase-visual'),
      { opacity: 0, x: xOffset, scale: 0.95 },
      {
        opacity: 1, x: 0, scale: 1, duration: 1.2, ease: 'expo.out',
        scrollTrigger: {
          trigger: proj,
          start: 'top 75%',
        }
      }
    );

    gsap.fromTo(proj.querySelector('.project-showcase-content').children,
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0, duration: 1, ease: 'expo.out', stagger: 0.1,
        scrollTrigger: {
          trigger: proj,
          start: 'top 75%',
        }
      }
    );
  });

  // Skills Grid Sequence Reveal
  gsap.fromTo('.skill-domain-card',
    { opacity: 0, y: 50 },
    {
      opacity: 1, y: 0, duration: 1, ease: 'power3.out', stagger: 0.2,
      scrollTrigger: {
        trigger: '.skills-domain-grid',
        start: 'top 80%',
      }
    }
  );

  // Certificates Grid Sequences
  gsap.fromTo('.cert-card',
    { opacity: 0, y: 40, scale: 0.95 },
    {
      opacity: 1, y: 0, scale: 1, duration: 0.8, ease: 'back.out(1.2)', stagger: 0.15,
      scrollTrigger: {
        trigger: '.certificates-grid',
        start: 'top 85%',
      }
    }
  );

  // Contact Section Bounce
  gsap.fromTo('.contact-card > *',
    { opacity: 0, y: 30 },
    {
      opacity: 1, y: 0, duration: 1, ease: 'power3.out', stagger: 0.15,
      scrollTrigger: {
        trigger: '.contact-card',
        start: 'top 85%',
      }
    }
  );
};
