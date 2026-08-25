import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useDeviceCapability } from "../../hooks/useDeviceCapability";

/**
 * Mouse-driven 3D tilt + glare, inspired by React Bits' "Tilted Card".
 * Falls back to a flat card with a plain hover lift on touch devices
 * and when reduced motion is requested.
 */
export default function TiltCard({ children, className = "", glare = true, maxTilt = 10 }) {
  const ref = useRef(null);
  const { finePointer, reducedMotion } = useDeviceCapability();
  const active = finePointer && !reducedMotion;

  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const springConfig = { stiffness: 150, damping: 18, mass: 0.5 };
  const spx = useSpring(px, springConfig);
  const spy = useSpring(py, springConfig);

  const rotateX = useTransform(spy, [0, 1], [maxTilt, -maxTilt]);
  const rotateY = useTransform(spx, [0, 1], [-maxTilt, maxTilt]);
  const glareX = useTransform(spx, [0, 1], ["0%", "100%"]);
  const glareY = useTransform(spy, [0, 1], ["0%", "100%"]);

  function handleMouseMove(e) {
    if (!active || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    px.set((e.clientX - rect.left) / rect.width);
    py.set((e.clientY - rect.top) / rect.height);
  }

  function handleMouseLeave() {
    px.set(0.5);
    py.set(0.5);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={
        active
          ? { rotateX, rotateY, transformStyle: "preserve-3d", transformPerspective: 800 }
          : undefined
      }
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 250, damping: 20 }}
      className={`relative will-change-transform ${className}`}
    >
      {children}
      {active && glare && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.14), transparent 55%)`,
          }}
        />
      )}
    </motion.div>
  );
}
