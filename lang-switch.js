document.getElementById('lang-switch').addEventListener('click', function() {
  let fr = document.querySelectorAll('.fr');
  let en = document.querySelectorAll('.en');

  if (this.textContent === 'EN') {
    fr.forEach(el => el.style.display = 'none');
    en.forEach(el => el.style.display = 'inline');
    this.textContent = 'FR';
  } else {
    fr.forEach(el => el.style.display = 'inline');
    en.forEach(el => el.style.display = 'none');
    this.textContent = 'EN';
  }
});
