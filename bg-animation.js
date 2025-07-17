// Gold starfield background
document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('bg-stars');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  const STAR_COUNT = 100;
  const stars = [];
  for (let i = 0; i < STAR_COUNT; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.3,
      speed: 0.005 + Math.random() * 0.01,
      phase: Math.random() * Math.PI * 2
    });
  }

  function draw(t) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    stars.forEach(s => {
      const glow = (Math.sin(t * s.speed + s.phase) + 1) / 2;
      const alpha = 0.25 + glow * 0.75;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,215,0,${alpha})`;
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }
  requestAnimationFrame(draw);

  // make sure canvas never blocks clicks
  const style = canvas.style;
  style.position = 'fixed';
  style.top = 0;
  style.left = 0;
  style.width = '100%';
  style.height = '100%';
  style.pointerEvents = 'none';
  style.zIndex = '-1';
});
