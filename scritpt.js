const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.appendChild(canvas);

const snowflakes = [];

function createSnowflake() {
  const size = Math.random() * 10 + 10;
  const speed = Math.random() * 3 + 1;
  const x = Math.random() * canvas.width;
  const y = -size;
  snowflakes.push({ size, speed, x, y });
}

function updateSnowflakes() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  snowflakes.forEach((snowflake, index) => {
    snowflake.y += snowflake.speed;
    if (snowflake.y > canvas.height) {
      snowflakes.splice(index, 1);
    }
    ctx.beginPath();
    ctx.arc(snowflake.x, snowflake.y, snowflake.size, 0, Math.PI * 2);
    ctx.fillStyle = 'white';
    ctx.fill();
  });
}

function animate() {
  requestAnimationFrame(animate);
  if (Math.random() < 0.1) {
    createSnowflake();
  }
  updateSnowflakes();
}

animate();