(() => {
  'use strict';

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (typeof gsap === 'undefined') return;
  if (typeof ScrollTrigger !== 'undefined') gsap.registerPlugin(ScrollTrigger);

  /* ============================================================
     HERO: sparkle dots
     ============================================================ */
  const sparkleHost = document.getElementById('heroSparkles');
  if (sparkleHost) {
    const COUNT = 28;
    for (let i = 0; i < COUNT; i++) {
      const dot = document.createElement('span');
      const isAccent = Math.random() < 0.25;
      const size = 2 + Math.random() * 2.5;
      dot.className = 'hero-sparkle' + (isAccent ? ' is-accent' : '');
      dot.style.left = Math.random() * 100 + '%';
      dot.style.top = Math.random() * 100 + '%';
      dot.style.width = size + 'px';
      dot.style.height = size + 'px';
      sparkleHost.appendChild(dot);

      if (!reduceMotion) {
        gsap.to(dot, {
          opacity: 0.35 + Math.random() * 0.5,
          scale: 1.2,
          duration: 1.5 + Math.random() * 2.5,
          delay: Math.random() * 3,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut'
        });
      }
    }
  }

  /* ============================================================
     HERO: shimmer sweep + RISE breathing pulse + parallax
     ============================================================ */
  const heroShimmer = document.querySelector('.hero-shimmer');
  const heroRise = document.querySelector('.hero-rise-text');

  if (!reduceMotion) {
    if (heroShimmer) {
      // Sweep left -> right once per cycle: fades in on the left, travels at a
      // decelerating pace, and fades out gradually as it reaches the right
      // edge — no instant reset, so there's no visible snap/flicker.
      gsap.set(heroShimmer, { xPercent: -130, rotate: 8, opacity: 0 });
      gsap.timeline({ repeat: -1, repeatDelay: 3.5 })
        .to(heroShimmer, { opacity: 1, duration: 0.35, ease: 'power1.in' }, 0)
        .to(heroShimmer, { xPercent: 130, duration: 3, ease: 'power2.out' }, 0)
        .to(heroShimmer, { opacity: 0, duration: 1.1, ease: 'power1.out' }, 1.9);
    }

    if (heroRise) {
      gsap.to(heroRise, {
        scale: 1.035,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });

      if (typeof ScrollTrigger !== 'undefined') {
        gsap.to(heroRise, {
          yPercent: 18,
          ease: 'none',
          scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: true
          }
        });
      }
    }
  }

})();
