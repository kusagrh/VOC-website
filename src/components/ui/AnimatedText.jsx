import React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: (stagger) => ({
    transition: { staggerChildren: stagger, delayChildren: 0.05 },
  }),
};

const word = {
  hidden: { opacity: 0, y: "0.6em", filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

/**
 * Splits text into words and staggers them in on mount.
 * Use for hero headlines / section titles — not body copy.
 */
export default function AnimatedText({ text, as: Tag = "h1", className = "", stagger = 0.08 }) {
  const words = text.split(" ");
  const MotionTag = motion[Tag] ?? motion.h1;

  return (
    <MotionTag
      className={className}
      variants={container}
      custom={stagger}
      initial="hidden"
      animate="visible"
      aria-label={text}
    >
      {words.map((w, i) => (
        <motion.span key={i} variants={word} className="inline-block mr-[0.25em]">
          {w}
        </motion.span>
      ))}
    </MotionTag>
  );
}
