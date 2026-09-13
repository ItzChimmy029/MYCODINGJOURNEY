const CONFIG = {
  recipientName: 'UGWU EBUBE MIRACLE',
  senderName: 'JUSTICE',
  loveLevel: 100,
  photoPath: '',
  musicPath: 'assets/audio/love-song.mp3',
  enableParticles: true,
  enableMusic: true
};

const LOVE_MESSAGE = `Ebube,

I don't know if I can fit everything I feel for you into one little website, but I wanted to make something that was just yours.

You mean so much to me, and I hope you never forget that.

I love your smile.
I love your voice.
I love the way you make ordinary moments feel different.

And honestly, I'm just grateful that I get to love you.

This little experience is nowhere near enough to explain how much you mean to me.

But it's a start.

I love you, Ebube.

— Justice`;

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const isTouch = window.matchMedia('(pointer: coarse)').matches;
const atmosphere = document.querySelector('#atmosphere');
const atmosphereContext = atmosphere.getContext('2d');
const loaderCanvas = document.querySelector('#loaderCanvas');
const loaderContext = loaderCanvas.getContext('2d');
const heartCanvas = document.querySelector('#heartCanvas');
const heartContext = heartCanvas.getContext('2d');
const particles = [];
const explosions = [];
let pointer = { x: innerWidth / 2, y: innerHeight / 2, active: false };
let heartPulse = 0;

function resizeCanvas(canvas, context) {
  const ratio = Math.min(devicePixelRatio || 1, 2);
  canvas.width = canvas.clientWidth * ratio;
  canvas.height = canvas.clientHeight * ratio;
  context.setTransform(ratio, 0, 0, ratio, 0, 0);
}

function resizeAll() {
  resizeCanvas(atmosphere, atmosphereContext);
  resizeCanvas(loaderCanvas, loaderContext);
  resizeCanvas(heartCanvas, heartContext);
}

function seedParticles() {
  const count = isTouch ? 55 : 110;
  for (let index = 0; index < count; index += 1) {
    particles.push({ x: Math.random() * innerWidth, y: Math.random() * innerHeight, radius: Math.random() * 1.5 + .25, speed: Math.random() * .18 + .03, alpha: Math.random() * .5 + .12 });
  }
}

function drawAtmosphere() {
  const { width, height } = atmosphere;
  atmosphereContext.clearRect(0, 0, width, height);
  for (const particle of particles) {
    particle.y -= particle.speed;
    if (particle.y < -4) particle.y = height + 4;
    const distance = Math.hypot(pointer.x - particle.x, pointer.y - particle.y);
    const boost = pointer.active && distance < 170 ? (1 - distance / 170) * .5 : 0;
    atmosphereContext.fillStyle = `rgba(218, 202, 225, ${particle.alpha + boost})`;
    atmosphereContext.beginPath();
    atmosphereContext.arc(particle.x, particle.y, particle.radius + boost, 0, Math.PI * 2);
    atmosphereContext.fill();
  }
  for (const burst of explosions) {
    burst.x += burst.vx; burst.y += burst.vy; burst.vx *= .97; burst.vy *= .97; burst.life -= 1;
    atmosphereContext.fillStyle = `rgba(236, 124, 169, ${Math.max(0, burst.life / 80)})`;
    atmosphereContext.fillRect(burst.x, burst.y, burst.size, burst.size);
  }
  while (explosions.length && explosions[0].life <= 0) explosions.shift();
  requestAnimationFrame(drawAtmosphere);
}

function drawLoader() {
  const { width, height } = loaderCanvas;
  loaderContext.clearRect(0, 0, width, height);
  const gradient = loaderContext.createRadialGradient(width / 2, height / 2, 0, width / 2, height / 2, Math.min(width, height) * .55);
  gradient.addColorStop(0, 'rgba(107, 62, 92, .13)'); gradient.addColorStop(1, 'rgba(5, 6, 11, 0)');
  loaderContext.fillStyle = gradient; loaderContext.fillRect(0, 0, width, height);
  requestAnimationFrame(drawLoader);
}

function heartPoint(t, scale, centerX, centerY) {
  const x = 16 * Math.sin(t) ** 3;
  const y = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t);
  return { x: centerX + x * scale, y: centerY - y * scale };
}

function drawHeart() {
  const width = heartCanvas.clientWidth;
  const height = heartCanvas.clientHeight;
  heartContext.clearRect(0, 0, width, height);
  const centerX = width / 2;
  const centerY = height / 2;
  const scale = Math.min(width, height) / 34;
  const pulse = 1 + Math.sin(heartPulse) * .025;
  heartContext.shadowBlur = 24;
  heartContext.shadowColor = 'rgba(236, 124, 169, .8)';
  heartContext.strokeStyle = '#ec7ca9';
  heartContext.lineWidth = 1.5;
  heartContext.beginPath();
  for (let index = 0; index <= 260; index += 1) {
    const point = heartPoint(index / 260 * Math.PI * 2, scale * pulse, centerX, centerY);
    if (index === 0) heartContext.moveTo(point.x, point.y); else heartContext.lineTo(point.x, point.y);
  }
  heartContext.stroke(); heartContext.shadowBlur = 0;
  for (let index = 0; index < 38; index += 1) {
    const t = index / 38 * Math.PI * 2 + heartPulse * .003;
    const point = heartPoint(t, scale * pulse, centerX, centerY);
    heartContext.fillStyle = index % 3 === 0 ? '#88dfe3' : '#f2b0c3';
    heartContext.globalAlpha = .45 + Math.sin(heartPulse * .3 + index) * .2;
    heartContext.beginPath(); heartContext.arc(point.x, point.y, index % 4 === 0 ? 2.2 : 1.1, 0, Math.PI * 2); heartContext.fill();
  }
  heartContext.globalAlpha = 1;
  heartPulse += reduceMotion ? .02 : .06;
  requestAnimationFrame(drawHeart);
}

function revealLoader() {
  const word = document.querySelector('#loaderWord');
  const status = document.querySelector('#loaderStatus');
  const progress = document.querySelector('#loaderProgress');
  const steps = [
    () => { word.textContent = 'FOR'; progress.style.width = '24%'; },
    () => { word.textContent = 'UGWU EBUBE MIRACLE'; progress.style.width = '64%'; },
    () => { status.textContent = 'LOVE TRANSMISSION // READY'; progress.style.width = '100%'; },
    () => { document.querySelector('#loader').classList.add('is-done'); document.querySelector('#experience').classList.add('is-ready'); document.querySelector('#experience').removeAttribute('aria-hidden'); }
  ];
  steps.forEach((step, index) => setTimeout(step, reduceMotion ? index * 120 : [400, 1150, 1900, 2500][index]));
}

function setPointer(event) { pointer = { x: event.clientX, y: event.clientY, active: true }; }
function burstHeart() {
  const bounds = heartCanvas.getBoundingClientRect();
  const originX = bounds.left + bounds.width / 2; const originY = bounds.top + bounds.height / 2;
  for (let index = 0; index < (isTouch ? 90 : 150); index += 1) { const angle = Math.random() * Math.PI * 2; const speed = Math.random() * 6 + 2; explosions.push({ x: originX, y: originY, vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed, size: Math.random() * 3 + 1, life: Math.random() * 55 + 30 }); }
}

function initInteractions() {
  const enterButton = document.querySelector('#enterButton');
  enterButton.addEventListener('click', () => { document.querySelector('#scene-2').scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' }); enterButton.blur(); });
  document.querySelector('#heartButton').addEventListener('click', () => { burstHeart(); document.querySelector('#heartReveal').classList.add('is-visible'); });
  const unlockButton = document.querySelector('#unlockButton');
  unlockButton.addEventListener('click', () => { const card = document.querySelector('#messageCard'); card.classList.add('is-unlocked'); typeMessage(document.querySelector('#letter'), LOVE_MESSAGE); });
  document.querySelectorAll('.node').forEach(node => node.addEventListener('click', () => { document.querySelectorAll('.node').forEach(item => item.classList.remove('is-active')); node.classList.add('is-active'); }));
  document.querySelectorAll('.magnetic').forEach(button => button.addEventListener('pointermove', (event) => { const box = button.getBoundingClientRect(); button.style.transform = `translate(${(event.clientX - box.left - box.width / 2) * .08}px, ${(event.clientY - box.top - box.height / 2) * .08 - 3}px)`; }));
  document.querySelectorAll('.magnetic').forEach(button => button.addEventListener('pointerleave', () => { button.style.transform = ''; }));
  if (!isTouch) { document.addEventListener('pointermove', setPointer); const cursor = document.querySelector('#cursor'); document.querySelectorAll('button').forEach(button => { button.addEventListener('mouseenter', () => cursor.classList.add('is-hover')); button.addEventListener('mouseleave', () => cursor.classList.remove('is-hover')); }); document.addEventListener('pointermove', event => { cursor.style.left = `${event.clientX}px`; cursor.style.top = `${event.clientY}px`; }); }
}

function typeMessage(element, message) { let index = 0; const delay = reduceMotion ? 0 : 19; function write() { element.textContent = message.slice(0, index); index += 1; if (index <= message.length) setTimeout(write, message[index - 1] === '\n' ? delay * 7 : delay); } write(); }

function initScrollScenes() {
  const sections = document.querySelectorAll('.scene');
  const counter = document.querySelector('#sceneCount');
  const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (!entry.isIntersecting) return; counter.textContent = `${entry.target.dataset.scene} / 08`; if (entry.target.id === 'scene-8') document.querySelectorAll('.final-line,.final-signoff').forEach(item => setTimeout(() => item.classList.add('is-visible'), Number(item.dataset.delay || 0))); }), { threshold: .45 });
  sections.forEach(section => observer.observe(section));
}

function initMusic() {
  const toggle = document.querySelector('#musicToggle');
  if (!CONFIG.enableMusic) { toggle.hidden = true; return; }
  const audio = new Audio(CONFIG.musicPath); audio.loop = true; audio.volume = .28;
  toggle.addEventListener('click', async () => { try { if (audio.paused) { await audio.play(); toggle.classList.add('is-on'); toggle.querySelector('span').textContent = 'ON'; } else { audio.pause(); toggle.classList.remove('is-on'); toggle.querySelector('span').textContent = 'OFF'; } } catch { toggle.querySelector('span').textContent = 'NO AUDIO'; } });
}

function initPhoto() { if (!CONFIG.photoPath) return; const frame = document.querySelector('#photoFrame'); frame.style.background = `url('${CONFIG.photoPath}') center/cover`; frame.querySelector('.photo-empty').hidden = true; }

window.addEventListener('resize', resizeAll);
resizeAll();
seedParticles();
if (CONFIG.enableParticles) { drawAtmosphere(); drawLoader(); drawHeart(); }
revealLoader();
initInteractions();
initScrollScenes();
initMusic();
initPhoto();
