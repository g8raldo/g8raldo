(function(){
  let currentLang = 'fr'; // langue par défaut

  function applyLang(){
    const frEls = document.querySelectorAll('.fr');
    const enEls = document.querySelectorAll('.en');
    const btn   = document.querySelector('.lang-switch');

    if (currentLang === 'en'){
      frEls.forEach(el => el.style.display = 'none');
      enEls.forEach(el => el.style.display = 'block');
      if (btn) btn.textContent = 'FR';
      document.documentElement.lang = 'en';
    } else {
      frEls.forEach(el => el.style.display = 'block');
      enEls.forEach(el => el.style.display = 'none');
      if (btn) btn.textContent = 'EN';
      document.documentElement.lang = 'fr';
    }
  }

  window.switchLang = function(){
    currentLang = (currentLang === 'fr') ? 'en' : 'fr';
    applyLang();
  };

  // Appelle applyLang **immédiatement** pour éviter que les deux langues apparaissent
  if (document.readyState === "loading") {
    document.addEventListener('DOMContentLoaded', applyLang);
  } else {
    applyLang();
  }
})();
