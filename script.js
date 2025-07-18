(function(){
  let currentLang = 'fr'; // default FR
  function applyLang(){
    const frEls = document.querySelectorAll('.fr');
    const enEls = document.querySelectorAll('.en');
    const btn = document.querySelector('.lang-switch');
    if (btn){
      if (currentLang === 'en'){
        frEls.forEach(el=>el.style.display='none');
        enEls.forEach(el=>el.style.display='block');
        btn.textContent='FR';
        document.documentElement.lang='en';
      } else {
        frEls.forEach(el=>el.style.display='block');
        enEls.forEach(el=>el.style.display='none');
        btn.textContent='EN';
        document.documentElement.lang='fr';
      }
    }
  }
  window.switchLang = function(){
    currentLang = (currentLang === 'fr') ? 'en' : 'fr';
    applyLang();
  };
  document.addEventListener('DOMContentLoaded', applyLang);
})();
