import React from "react";
import { Check } from "lucide-react";
import { whyPoints } from "../data/content";
import RevealOnScroll from "./ui/RevealOnScroll";

export default function WhyVault() {
  return (
    <section id="why-us" className="relative bg-ink py-24 md:py-32">
      <div className="container-vc grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <RevealOnScroll direction="left">
          <span className="font-mono text-xs uppercase tracking-widest text-amber">Why VaultofCodes</span>
          <h2 className="mt-4 font-display text-3xl font-bold text-text-soft md:text-4xl">
            Learning that looks like an actual job.
          </h2>
          <p className="mt-5 text-text-muted">
            We built VaultofCodes the way we'd want to have learned — briefs instead of busywork, mentors instead of
            slides, and software you can actually point to.
          </p>
        </RevealOnScroll>

        <div className="grid gap-4 sm:grid-cols-2">
          {whyPoints.map((point, i) => (
            <RevealOnScroll key={point.title} delay={i * 0.05} direction="right">
              <div className="flex gap-3.5 rounded-xl border border-ink-line bg-ink-panel/50 p-5 transition-colors hover:border-teal/40">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-teal to-violet">
                  <Check size={14} className="text-ink" strokeWidth={3} />
                </span>
                <div>
                  <h4 className="font-semibold text-text-soft">{point.title}</h4>
                  <p className="mt-1 text-sm text-text-muted">{point.description}</p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
