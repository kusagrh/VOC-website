import React from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { whatWeDo } from "../data/content";
import TiltCard from "./ui/TiltCard";
import RevealOnScroll from "./ui/RevealOnScroll";

const accents = {
  edtech: { grad: "from-teal/20 to-transparent", ring: "hover:border-teal/50", dot: "bg-teal" },
  software: { grad: "from-violet/20 to-transparent", ring: "hover:border-violet/50", dot: "bg-violet" },
};

export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="relative bg-ink py-24 md:py-32">
      <div className="container-vc">
        <RevealOnScroll className="mx-auto max-w-2xl text-center">
          <span className="font-mono text-xs uppercase tracking-widest text-teal">What We Do</span>
          <h2 className="mt-4 font-display text-3xl font-bold text-text-soft md:text-4xl">
            Two sides of one technology company.
          </h2>
          <p className="mt-4 text-text-muted">
            VaultofCodes exists at the intersection of education and software — we teach the skills, and we build the
            products those skills power.
          </p>
        </RevealOnScroll>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {whatWeDo.map((item, i) => {
            const accent = accents[item.id];
            return (
              <RevealOnScroll key={item.id} delay={i * 0.1} direction={i === 0 ? "left" : "right"}>
                <TiltCard maxTilt={5} className="group h-full rounded-3xl">
                  <div
                    className={`relative h-full overflow-hidden rounded-3xl border border-ink-line bg-ink-panel p-8 transition-colors duration-300 md:p-10 ${accent.ring}`}
                  >
                    <div className={`absolute -right-16 -top-16 h-56 w-56 rounded-full bg-gradient-to-br ${accent.grad} blur-2xl`} />
                    <span className="relative font-mono text-xs uppercase tracking-widest text-text-muted">
                      {item.tag}
                    </span>
                    <h3 className="relative mt-3 font-display text-2xl font-semibold text-text-soft md:text-[1.7rem]">
                      {item.title}
                    </h3>
                    <p className="relative mt-4 text-text-muted">{item.description}</p>
                    <ul className="relative mt-6 grid grid-cols-2 gap-3">
                      {item.points.map((point) => (
                        <li key={point} className="flex items-center gap-2 text-sm text-text-soft">
                          <span className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${accent.dot}`}>
                            <Check size={10} className="text-ink" strokeWidth={3} />
                          </span>
                          {point}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={item.href}
                      className="relative mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-text-soft"
                    >
                      {item.cta}
                      <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </div>
                </TiltCard>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
