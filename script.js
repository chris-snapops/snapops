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
      if (window.__applyLocalLinkRewrite) window.__applyLocalLinkRewrite();
    });
}

loadPartial('header-placeholder', 'header.html', el => {
  const page = currentPage();
  el.querySelectorAll('[data-page]').forEach(link => {
    if (link.getAttribute('data-page') === page) {
      link.classList.add('is-active');
    }
  });

  const toggle = el.querySelector('[data-nav-toggle]');
  const nav = el.querySelector('[data-nav]');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', isOpen);
    });
  }
});

loadPartial('footer-placeholder', 'footer.html', () => {
  const yearEl = document.getElementById('copyright-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});

// Local-only dev helper: rewrites clean-URL links to /snapops/*.html for
// testing under a /snapops/ path prefix. The file is gitignored, so in any
// environment where it doesn't exist this script tag just 404s silently.
const localLinkRewrite = document.createElement('script');
localLinkRewrite.src = 'link-rewrite.local.js';
localLinkRewrite.onload = () => {
  if (window.__applyLocalLinkRewrite) window.__applyLocalLinkRewrite();
};
localLinkRewrite.onerror = () => {};
document.head.appendChild(localLinkRewrite);
