(function () {
  // Mobile menu
  var btn = document.querySelector('.menu-btn'), nav = document.getElementById('nav');
  if (btn && nav) { btn.addEventListener('click', function () { var o = nav.classList.toggle('open'); btn.setAttribute('aria-expanded', o) }); }
  // Hero slideshow
  var heroSlides = [].slice.call(document.querySelectorAll('.hero-slide'));
  if (heroSlides.length) {
    var slideIndex = 0;
    setInterval(function () {
      heroSlides[slideIndex].classList.remove('active');
      slideIndex = (slideIndex + 1) % heroSlides.length;
      heroSlides[slideIndex].classList.add('active');
    }, 3000);
  }
  // Local image first, then Site123 copy if the local file is missing
  document.addEventListener('error', function (e) {
    var i = e.target; if (i.tagName !== 'IMG') return;
    var f = i.getAttribute('data-fallback');
    if (f && !i.dataset.tried) { i.dataset.tried = 1; i.src = f }
    else if (i.closest('.portrait')) i.closest('.portrait').classList.add('noimg');
  }, true);
  // Lightbox
  var links = [].slice.call(document.querySelectorAll('[data-lightbox]')), idx = 0, lb;
  function show(n) { idx = (n + links.length) % links.length; var im = links[idx].querySelector('img'); lb.querySelector('img').src = im.currentSrc || im.src }
  function close() { if (lb) { lb.remove(); lb = null; document.removeEventListener('keydown', key) } }
  function key(e) { if (e.key === 'Escape') close(); if (e.key === 'ArrowRight') show(idx + 1); if (e.key === 'ArrowLeft') show(idx - 1) }
  links.forEach(function (a, n) {
    a.addEventListener('click', function (e) {
      e.preventDefault(); lb = document.createElement('div'); lb.className = 'lb'; lb.setAttribute('role', 'dialog'); lb.setAttribute('aria-label', 'Photo viewer');
      lb.innerHTML = '<button class="x" aria-label="Close">&times;</button><button class="p" aria-label="Previous">&lsaquo;</button><img alt=""><button class="n" aria-label="Next">&rsaquo;</button>';
      document.body.appendChild(lb); show(n); document.addEventListener('keydown', key);
      lb.addEventListener('click', function (ev) { var c = ev.target.className; if (c === 'lb' || c === 'x') close(); if (c === 'p') show(idx - 1); if (c === 'n') show(idx + 1) });
      lb.querySelector('.x').focus();
    })
  });
  // YouTube: load player only on click
  var v = document.querySelector('.video');
  if (v) v.querySelector('button').addEventListener('click', function () {
    v.innerHTML = '<iframe src="https://www.youtube-nocookie.com/embed/' + v.dataset.yt + '?autoplay=1" title="Video player" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>'
  });
  // Contact form: opens the visitor's email app. For a real form backend, see README.
  var f = document.getElementById('contact-form');
  if (f) f.addEventListener('submit', function (e) {
    e.preventDefault(); var n = document.getElementById('form-note'), d = new FormData(f);
    if (!d.get('name') || !d.get('email') || !d.get('message') || !/^\S+@\S+\.\S+$/.test(d.get('email'))) { n.textContent = 'Fill in your name, a valid email and a message.'; return }
    location.href = 'mailto:ronenacharya68@gmail.com?subject=' + encodeURIComponent('Website message from ' + d.get('name')) +
      '&body=' + encodeURIComponent(d.get('message') + '\n\n' + d.get('name') + '\n' + d.get('email'));
    n.textContent = 'Your email app should open with the message ready to send.';
  });
})();
