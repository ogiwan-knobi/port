(function () {
  var header = document.getElementById('site-header');
  if (!header) return;

  var toggle = header.querySelector('.menu-toggle');
  var mobileMenu = header.querySelector('.mobile-menu');
  var menuOpen = false;

  function show() { header.classList.remove('is-hidden'); }
  function hide() { header.classList.add('is-hidden'); }

  // Mobile menu
  if (toggle && mobileMenu) {
    toggle.addEventListener('click', function () {
      menuOpen = !menuOpen;
      mobileMenu.classList.toggle('open', menuOpen);
      toggle.setAttribute('aria-expanded', String(menuOpen));
      show();
    });
  }

  // Hide while scrolling down, show again when scrolling up or near the top
  var lastY = window.scrollY;
  var ticking = false;

  window.addEventListener('scroll', function () {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(function () {
      var y = window.scrollY;
      if (menuOpen || y < 120) {
        show();
      } else if (y > lastY) {
        hide();
      } else if (y < lastY) {
        show();
      }
      lastY = y;
      ticking = false;
    });
  }, { passive: true });

  // Moving the mouse to the top of the screen brings the header back
  document.addEventListener('mousemove', function (e) {
    if (e.clientY < 90) show();
  });
})();

// Case study titles on mobile: between 36px and 48px, never more than two lines
(function () {
  if (!document.body.classList.contains('case-page')) return;
  var h1 = document.querySelector('.case-hero h1');
  if (!h1) return;
  var LINE = 1.08;

  function fit() {
    if (window.innerWidth > 760) { h1.style.fontSize = ''; return; }
    for (var size = 48; size >= 36; size--) {
      h1.style.fontSize = size + 'px';
      var lines = Math.round(h1.getBoundingClientRect().height / (size * LINE));
      if (lines <= 2) return;
    }
    h1.style.fontSize = '36px';
  }

  fit();
  window.addEventListener('resize', fit);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(fit);
})();
