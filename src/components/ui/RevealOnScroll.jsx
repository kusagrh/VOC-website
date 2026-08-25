import React from "react";
import { motion } from "framer-motion";

const directions = {
  up: { y: 28, x: 0 },
  down: { y: -28, x: 0 },
  left: { y: 0, x: 28 },
  right: { y: 0, x: -28 },
};

export default function RevealOnScroll({
  children,
  className = "",
  direction = "up",
  delay = 0,
  duration = 0.6,
  once = true,
  amount = 0.2,
  as = "div",
}) {
  const offset = directions[direction] ?? directions.up;
  const Tag = motion[as] ?? motion.div;

  return (
    <Tag
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Tag>
  );
}
