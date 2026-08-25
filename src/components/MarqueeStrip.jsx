import React from "react";

const items = [
  "Web Development",
  "Python",
  "AI & Prompt Engineering",
  "Cybersecurity",
  "Ethical Hacking",
  "Data Science",
  "Cloud & DevOps",
  "UI/UX Design",
];

export default function MarqueeStrip() {
  const loop = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-ink-line bg-ink-soft py-5">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink-soft to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink-soft to-transparent" />
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap [animation-play-state:running] hover:[animation-play-state:paused]">
        {loop.map((item, i) => (
          <span key={i} className="flex items-center gap-3 font-mono text-sm text-text-muted">
            {item}
            <span className="h-1 w-1 rounded-full bg-violet/60" />
          </span>
        ))}
      </div>
    </div>
  );
}
