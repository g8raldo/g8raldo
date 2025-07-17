
const canvas = document.getElementById('waveCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let width = canvas.width;
let height = canvas.height;
let t = 0;

function draw() {
  ctx.clearRect(0, 0, width, height);
  for (let i = 0; i < height; i += 10) {
    ctx.beginPath();
    ctx.moveTo(0, i);
    ctx.lineTo(width, i + Math.sin(i / 50 + t) * 50);
    ctx.strokeStyle = `hsl(${(i / height) * 360}, 100%, 50%)`;
    ctx.stroke();
  }
  t += 0.02;
  requestAnimationFrame(draw);
}
draw();
