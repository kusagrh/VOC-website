import React from "react";
import { stats } from "../data/content";
import { useCountUp } from "../hooks/useCountUp";
import RevealOnScroll from "./ui/RevealOnScroll";

function StatItem({ value, suffix, label }) {
  const [count, ref] = useCountUp(value);
  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-4xl font-bold text-gradient md:text-5xl">
        {count.toLocaleString()}
        {suffix}
      </div>
      <div className="mt-2 font-mono text-xs uppercase tracking-widest text-text-muted">{label}</div>
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="relative border-y border-ink-line bg-ink-soft py-20">
      <div className="container-vc">
        <RevealOnScroll>
          <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
            {stats.map((s) => (
              <StatItem key={s.label} {...s} />
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
