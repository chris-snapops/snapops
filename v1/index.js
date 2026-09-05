fetch('footer.html')
  .then(response => response.text())
  .then(html => {
    document.getElementById('footer-placeholder').innerHTML = html;
    document.getElementById('copyright-year').textContent = new Date().getFullYear();
  });
