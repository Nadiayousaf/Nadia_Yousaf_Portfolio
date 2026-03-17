/* ========================================
   particles.js — Animated Hero Particles
   ======================================== */

const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
let pts = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// Generate particles
for (let i = 0; i < 80; i++) {
  pts.push({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    r: Math.random() * 1.5 + 0.5,
    dx: (Math.random() - 0.5) * 0.4,
    dy: (Math.random() - 0.5) * 0.4,
    a: Math.random()
  });
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  pts.forEach(p => {
    p.x += p.dx;
    p.y += p.dy;
    p.a += 0.005;

    // Bounce off walls
    if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.dy *= -1;

    const alpha = 0.2 + Math.abs(Math.sin(p.a)) * 0.3;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(0, 180, 216, ${alpha})`;
    ctx.fill();
  });

  requestAnimationFrame(animateParticles);
}

animateParticles();
