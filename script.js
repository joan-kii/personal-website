const canvas = document.getElementById('particles-container');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext('2d');
const particles = [];

for (let i = 0; i < 300; i++) {
  const x = Math.floor(Math.random() * canvas.width);
  const y = Math.floor(Math.random() * canvas.height);
  const size = Math.floor(Math.random() * 10);
  const opacity = Math.random().toFixed(1);

  ctx.beginPath();
  ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
  ctx.arc(x, y, size, 0, Math.PI * 2, false);
  ctx.fill();
}

function moveParticles() {
  const speed = 1;
  requestAnimationFrame(moveParticles);
}

/* moveParticles(); */
