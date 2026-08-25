import React, { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useDeviceCapability } from "../../hooks/useDeviceCapability";

/**
 * Wraps any button/link and makes it "magnetically" follow the cursor
 * within its bounds. Disabled on touch devices and reduced-motion,
 * where it behaves like a normal element.
 */
export default function MagneticButton({ as: Tag = "button", className = "", children, strength = 0.35, ...props }) {
  const ref = useRef(null);
  const { finePointer, reducedMotion } = useDeviceCapability();

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 15, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 200, damping: 15, mass: 0.4 });

  const active = finePointer && !reducedMotion;

  function handleMouseMove(e) {
    if (!active || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set(relX * strength);
    y.set(relY * strength);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const MotionTag = motion[Tag] ?? motion.button;

  return (
    <MotionTag
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={active ? { x: springX, y: springY } : undefined}
      className={className}
      {...props}
    >
      {children}
    </MotionTag>
  );
}
