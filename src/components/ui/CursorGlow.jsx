import React, { useEffect, useRef } from "react";
import { useDeviceCapability } from "../../hooks/useDeviceCapability";

/**
 * A soft radial-gradient glow that follows the cursor across the whole
 * page. Pure CSS transform updates (no React state) to stay smooth,
 * and it's skipped entirely on touch devices / reduced motion.
 */
export default function CursorGlow() {
  const ref = useRef(null);
  const { finePointer, reducedMotion } = useDeviceCapability();
  const enabled = finePointer && !reducedMotion;

  useEffect(() => {
    if (!enabled) return;
    const el = ref.current;
    let raf = null;
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (raf) return;
      raf = requestAnimationFrame(() => {
        if (el) el.style.transform = `translate(${mouseX - 250}px, ${mouseY - 250}px)`;
        raf = null;
      });
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[1] h-[500px] w-[500px] rounded-full mix-blend-screen"
      style={{
        background:
          "radial-gradient(circle, rgba(139,127,242,0.16) 0%, rgba(47,224,196,0.08) 40%, transparent 70%)",
        willChange: "transform",
      }}
    />
  );
}
