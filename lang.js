document.getElementById('langSwitch').addEventListener('click', () => {
    const fr = document.querySelectorAll('.fr');
    const en = document.querySelectorAll('.en');
    const btn = document.getElementById('langSwitch');
    if (btn.textContent === 'EN') {
        fr.forEach(el => el.style.display = 'none');
        en.forEach(el => el.style.display = 'inline');
        btn.textContent = 'FR';
    } else {
        fr.forEach(el => el.style.display = 'inline');
        en.forEach(el => el.style.display = 'none');
        btn.textContent = 'EN';
    }
});
