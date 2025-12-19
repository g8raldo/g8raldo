/* LANG TOGGLE */
let lang = "fr";
const toggle = document.getElementById("langToggle");

function updateLang() {
  document.querySelectorAll(".bilingue").forEach(el => {
    el.textContent = el.dataset[lang];
  });
}
updateLang();

toggle.addEventListener("click", () => {
  lang = lang === "fr" ? "en" : "fr";
  updateLang();
});

/* SCROLL FADE */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll(".fade").forEach(el => observer.observe(el));

/* BACKGROUND PARTICLES */
const canvas = document.getElementById("background");
const ctx = canvas.getContext("2d");

let w, h;
function resize() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
}
window.addEventListener("resize", resize);
resize();

const particles = Array.from({ length: 80 }, () => ({
  x: Math.random() * w,
  y: Math.random() * h,
  r: Math.random() * 2 + 0.5,
  dx: (Math.random() - 0.5) * 0.3,
  dy: (Math.random() - 0.5) * 0.3
}));

function animate() {
  ctx.clearRect(0, 0, w, h);
  particles.forEach(p => {
    p.x += p.dx;
    p.y += p.dy;

    if (p.x < 0 || p.x > w) p.dx *= -1;
    if (p.y < 0 || p.y > h) p.dy *= -1;

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(0,173,238,0.4)";
    ctx.fill();
  });
  requestAnimationFrame(animate);
}
animate();
