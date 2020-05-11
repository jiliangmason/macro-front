/* eslint-disable no-param-reassign */
/* eslint-disable func-names */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
export type FireworksInput = {
  x: number;
  y: number;
  count?: number;
  colors?: string[];
  parentNode?: HTMLElement;
};

export type Particle = {
  x: number;
  y: number;
  yVel: number;
  speed: number;
  radius: number;
  opacity: number;
  gravity: number;
  rotation: number;
  friction: number;
  color: string;
};

function fireworks(opts: FireworksInput) {
  if (!opts) {
    throw new Error('Missing options for fireworks');
  }

  const {
    x,
    y,
    colors = [],
    count: bubbleCount = 25,
    parentNode = document.body,
  } = opts;

  const particles = [];
  const ratio = window.devicePixelRatio;
  const cvs = document.createElement('canvas');
  const ctx = cvs.getContext('2d');

  if (!ctx) {
    console.log(`fireworks: unable to get 2d canvas context`);
    return;
  }

  cvs.style.position = 'absolute';
  cvs.style.left = `${x - 150}px`;
  cvs.style.top = `${y - 150}px`;
  cvs.style.pointerEvents = 'none';
  cvs.style.width = `${300}px`;
  cvs.style.height = `${300}px`;
  cvs.style.zIndex = '100';
  cvs.width = 300 * ratio;
  cvs.height = 300 * ratio;
  parentNode.appendChild(cvs);

  for (let i = 0; i < bubbleCount; i += 1) {
    particles.push({
      x: cvs.width / 2,
      y: cvs.height / 2,
      radius: randomRange(10, 25),
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: randomRange(0, 360, -1),
      speed: randomRange(6, 10),
      friction: 0.96,
      opacity: randomRange(0, 0.5, -1),
      yVel: 0,
      gravity: 0.05,
    });
  }

  render(cvs.width, cvs.height, particles, ctx);

  setTimeout(function() {
    parentNode.removeChild(cvs);
  }, 1000);
}

function render(
  width: number,
  height: number,
  particles: Particle[],
  ctx: CanvasRenderingContext2D
) {
  requestAnimationFrame(() => {
    render(width, height, particles, ctx);
  });

  ctx.clearRect(0, 0, width, height);
  particles.forEach(function(p: Particle, i: number) {
    p.x += p.speed * Math.cos((p.rotation * Math.PI) / 180);
    p.y += p.speed * Math.sin((p.rotation * Math.PI) / 180);
    p.opacity -= 0.005;
    p.speed *= p.friction;
    p.radius *= p.friction;
    p.yVel += p.gravity;
    p.y += p.yVel;

    if (p.opacity < 0 || p.radius < 0) {
      return;
    }

    ctx.beginPath();
    ctx.globalAlpha = p.opacity;
    ctx.fillStyle = p.color;
    ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI, false);
    ctx.fill();
  });

  return ctx;
}

function randomRange(a: number, b: number, c = 0) {
  return parseFloat(
    (Math.random() * ((a || 1) - (b || 0)) + (b || 0)).toFixed(c > 0 ? c : 0)
  );
}
export default fireworks;

export function fire(): void {
  Array(6)
    .fill(null)
    .map(() =>
      fireworks({
        x: (Math.random() * window.innerWidth) / 2 + window.innerWidth / 4,
        y: (Math.random() * window.innerWidth) / 2 + window.innerWidth / 4,
        colors: ['#cc3333', '#4CAF50', '#81C784'],
      })
    );
}
