
function switchLang() {
  const fr = document.querySelectorAll('.fr');
  const en = document.querySelectorAll('.en');
  const btn = document.querySelector('.lang-switch');
  if (btn.textContent === 'EN') {
    fr.forEach(el => el.style.display = 'none');
    en.forEach(el => el.style.display = 'block');
    btn.textContent = 'FR';
  } else {
    fr.forEach(el => el.style.display = 'block');
    en.forEach(el => el.style.display = 'none');
    btn.textContent = 'EN';
  }
}
