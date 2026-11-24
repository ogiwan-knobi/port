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

// Mobile subtitle: 24px, shrinks only if it is wider than the title's available width
(function () {
  var h2 = document.querySelector('.hero-text h2');
  if (!h2) return;
  function fitSub() {
    if (window.innerWidth > 760) { h2.style.fontSize = ''; return; }
    var box = h2.parentElement;
    var avail = box.clientWidth - 96;
    h2.style.fontSize = '24px';
    h2.style.display = 'inline-block';
    var w = h2.getBoundingClientRect().width;
    h2.style.display = '';
    if (w > avail) h2.style.fontSize = (24 * avail / w) + 'px';
  }
  fitSub();
  window.addEventListener('resize', fitSub);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(fitSub);
})();
