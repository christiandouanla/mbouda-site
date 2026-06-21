/* =========================================================
   MAIN.JS — Interactions légères (vanilla JS)
   - Nav scroll state + menu mobile
   - Reveal au scroll (IntersectionObserver)
   - Parallaxe léger sur .hero-bg
   - Lightbox basique pour galerie
   ========================================================= */

(() => {
  const nav = document.getElementById('nav');
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');

  // Scroll state nav
  const onScroll = () => {
    if (!nav) return;
    nav.classList.toggle('scrolled', window.scrollY > 60);

    // Parallax sur le hero
    const bg = document.querySelector('.hero-bg');
    if (bg) {
      const y = Math.min(window.scrollY * 0.35, 200);
      bg.style.transform = `scale(1.08) translate3d(0, ${y}px, 0)`;
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Menu mobile
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('open');
      navMenu.classList.toggle('open');
    });
    navMenu.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', () => {
        navToggle.classList.remove('open');
        navMenu.classList.remove('open');
      })
    );
  }

  // Lien actif d'après le pathname
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === path) link.classList.add('active');
  });

  // Reveal au scroll
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('is-visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  // Lightbox galerie
  const lightbox = document.getElementById('lightbox');
  if (lightbox) {
    const img = lightbox.querySelector('img');
    const cap = lightbox.querySelector('.lb-cap');
    document.querySelectorAll('[data-lb]').forEach(t => {
      t.addEventListener('click', e => {
        e.preventDefault();
        img.src = t.dataset.lb;
        cap.textContent = t.dataset.cap || '';
        lightbox.classList.add('open');
        document.body.style.overflow = 'hidden';
      });
    });
    lightbox.addEventListener('click', () => {
      lightbox.classList.remove('open');
      document.body.style.overflow = '';
    });
  }

  // Compteurs animés (.counter[data-to])
  const counters = document.querySelectorAll('.counter');
  if (counters.length) {
    const cio = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        const el = e.target;
        const to = +el.dataset.to;
        const dur = 1600;
        const start = performance.now();
        const tick = (t) => {
          const p = Math.min((t - start) / dur, 1);
          el.textContent = Math.floor(p * to).toLocaleString('fr-FR');
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        cio.unobserve(el);
      });
    }, { threshold: 0.6 });
    counters.forEach(c => cio.observe(c));
  }
})();
