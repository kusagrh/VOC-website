import React, { useEffect, useRef } from "react";
import { useDeviceCapability } from "../../hooks/useDeviceCapability";

/**
 * Lightweight particle-network canvas (React Bits "Particles" style):
 * dots drift slowly, nearby dots connect with a faded line, and the
 * cursor gently pushes particles away.
 *
 * Performance notes:
 * - Particle count scales down on small screens.
 * - Animation pauses via IntersectionObserver when off-screen and via
 *   the Page Visibility API when the tab is backgrounded.
 * - Skipped entirely when prefers-reduced-motion is set.
 */
export default function ParticleField({ className = "", colorRGB = "47, 224, 196", density = 1 }) {
  const canvasRef = useRef(null);
  const { reducedMotion, isSmallScreen } = useDeviceCapability();

  useEffect(() => {
    if (reducedMotion) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let width, height, dpr;
    let particles = [];
    let animId = null;
    let running = true;
    const mouse = { x: -9999, y: -9999 };

    const baseCount = isSmallScreen ? 26 : 60;
    const count = Math.round(baseCount * density);

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function initParticles() {
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.6 + 0.6,
      }));
    }

    function step() {
      if (!running) return;
      ctx.clearRect(0, 0, width, height);

      for (const p of particles) {
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist2 = dx * dx + dy * dy;
        if (dist2 < 14000) {
          const force = (14000 - dist2) / 14000;
          p.x += (dx / (Math.sqrt(dist2) || 1)) * force * 1.2;
          p.y += (dy / (Math.sqrt(dist2) || 1)) * force * 1.2;
        }
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${colorRGB}, 0.6)`;
        ctx.fill();
      }

      const linkDist = 130;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < linkDist) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(${colorRGB}, ${0.14 * (1 - dist / linkDist)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(step);
    }

    function onMouseMove(e) {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    }
    function onMouseLeave() {
      mouse.x = -9999;
      mouse.y = -9999;
    }

    resize();
    initParticles();
    animId = requestAnimationFrame(step);

    const ro = new ResizeObserver(() => {
      resize();
      initParticles();
    });
    ro.observe(canvas);

    const io = new IntersectionObserver(
      ([entry]) => {
        running = entry.isIntersecting && document.visibilityState === "visible";
        if (running && !animId) animId = requestAnimationFrame(step);
      },
      { threshold: 0.05 }
    );
    io.observe(canvas);

    const onVisibility = () => {
      running = document.visibilityState === "visible";
      if (running && !animId) animId = requestAnimationFrame(step);
    };
    document.addEventListener("visibilitychange", onVisibility);
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseleave", onMouseLeave);

    return () => {
      running = false;
      if (animId) cancelAnimationFrame(animId);
      ro.disconnect();
      io.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      canvas.removeEventListener("mousemove", onMouseMove);
      canvas.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [reducedMotion, isSmallScreen, colorRGB, density]);

  if (reducedMotion) return null;

  return <canvas ref={canvasRef} className={`h-full w-full ${className}`} />;
}
