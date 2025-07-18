document.addEventListener('DOMContentLoaded', () => {
  const content = document.getElementById('content');
  const links = document.querySelectorAll('nav a');

  function loadPage(page) {
    fetch(`pages/${page}.html`)
      .then(res => res.text())
      .then(data => {
        content.innerHTML = data;
      });
  }

  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const page = link.getAttribute('data-page');
      loadPage(page);
      links.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });

  // Load home by default
  loadPage('home');
});
