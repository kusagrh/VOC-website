import React, { useEffect, useRef } from "react";
import { useDeviceCapability } from "../../hooks/useDeviceCapability";

/**
 * Slim, glowing light streaks that drift downward at varying speed and
 * opacity — a lightweight take on React Bits' "Lightfall" effect.
 * Runs behind hero content; text stays legible because streaks are
 * thin, low-opacity, and layered under a dark scrim in the Hero.
 */
export default function LightfallCanvas({ className = "" }) {
  const canvasRef = useRef(null);
  const { reducedMotion, isSmallScreen } = useDeviceCapability();

  useEffect(() => {
    if (reducedMotion) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let width, height, dpr;
    let streaks = [];
    let animId = null;
    let running = true;
    const count = isSmallScreen ? 14 : 30;

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function makeStreak() {
      return {
        x: Math.random() * width,
        y: Math.random() * -height,
        len: 60 + Math.random() * 140,
        speed: 0.6 + Math.random() * 1.8,
        opacity: 0.08 + Math.random() * 0.22,
      };
    }

    function init() {
      streaks = Array.from({ length: count }, makeStreak);
    }

    function step() {
      if (!running) return;
      ctx.clearRect(0, 0, width, height);
      for (const s of streaks) {
        const gradient = ctx.createLinearGradient(s.x, s.y, s.x, s.y + s.len);
        gradient.addColorStop(0, "rgba(139,127,242,0)");
        gradient.addColorStop(0.5, `rgba(139,127,242,${s.opacity})`);
        gradient.addColorStop(1, "rgba(47,224,196,0)");
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1.4;
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(s.x, s.y + s.len);
        ctx.stroke();

        s.y += s.speed;
        if (s.y > height) {
          s.y = -s.len;
          s.x = Math.random() * width;
        }
      }
      animId = requestAnimationFrame(step);
    }

    resize();
    init();
    animId = requestAnimationFrame(step);

    const ro = new ResizeObserver(() => {
      resize();
      init();
    });
    ro.observe(canvas);

    const onVisibility = () => {
      running = document.visibilityState === "visible";
      if (running && !animId) animId = requestAnimationFrame(step);
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      running = false;
      if (animId) cancelAnimationFrame(animId);
      ro.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [reducedMotion, isSmallScreen]);

  if (reducedMotion) return null;

  return <canvas ref={canvasRef} className={`h-full w-full ${className}`} />;
}
