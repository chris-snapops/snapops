function currentPage() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  return path.replace('.html', '') || 'index';
}

function loadPartial(id, url, done) {
  const el = document.getElementById(id);
  if (!el) return;
  fetch(url)
    .then(response => response.text())
    .then(html => {
      el.innerHTML = html;
      if (done) done(el);
    });
}

loadPartial('header-placeholder', 'header.html', el => {
  const page = currentPage();
  el.querySelectorAll('[data-page]').forEach(link => {
    if (link.getAttribute('data-page') === page) {
      link.classList.add('is-active');
    }
  });
});

loadPartial('footer-placeholder', 'footer.html', () => {
  const yearEl = document.getElementById('copyright-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
