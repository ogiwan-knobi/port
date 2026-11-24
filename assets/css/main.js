
// Mobile title: fit "Igo Souza" to the width minus 48px on each side
(function () {
  var h1 = document.querySelector('.hero-text h1');
  if (!h1) return;
  function fit() {
    if (window.innerWidth > 760) { h1.style.fontSize = ''; return; }
    var box = h1.parentElement;
    var avail = box.clientWidth - 96; // 48px margin on each side
    h1.style.fontSize = '100px';
    h1.style.display = 'inline-block';
    var w = h1.getBoundingClientRect().width;
    h1.style.display = '';
    h1.style.fontSize = (100 * avail / w) + 'px';
  }
  fit();
  window.addEventListener('resize', fit);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(fit);
})();
