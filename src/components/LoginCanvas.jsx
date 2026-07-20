import { useEffect, useRef } from "react";
import "./LoginCanvas.css";

const COLORS = ["#378f84", "#5ecec4", "#c9913a", "#aac2c5"];
const COUNT = 60;
const MAX_DIST = 120;

function rand(a, b) {
  return a + Math.random() * (b - a);
}

function LoginCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let W, H, particles, rafId;

    function resize() {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    }

    function createParticles() {
      particles = Array.from({ length: COUNT }, () => ({
        x: rand(0, W),
        y: rand(0, H),
        vx: rand(-0.25, 0.25),
        vy: rand(-0.25, 0.25),
        r: rand(1, 2.4),
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
      }));
    }

    function draw() {
      ctx.clearRect(0, 0, W, H);

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_DIST) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(94,206,196,${(1 - dist / MAX_DIST) * 0.15})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }
      }

      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = 0.6;
        ctx.fill();
        ctx.globalAlpha = 1;
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
      });

      rafId = requestAnimationFrame(draw);
    }

    function onResize() {
      resize();
      createParticles();
    }

    resize();
    createParticles();
    draw();
    window.addEventListener("resize", onResize, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="login-canvas" aria-hidden="true" />;
}

export default LoginCanvas;
