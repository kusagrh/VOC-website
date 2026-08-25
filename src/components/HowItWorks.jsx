import React from "react";
import { motion } from "framer-motion";
import { howItWorks } from "../data/content";
import RevealOnScroll from "./ui/RevealOnScroll";

export default function HowItWorks() {
  return (
    <section className="relative bg-ink py-24 md:py-32">
      <div className="container-vc">
        <RevealOnScroll className="mx-auto max-w-2xl text-center">
          <span className="font-mono text-xs uppercase tracking-widest text-teal">How It Works</span>
          <h2 className="mt-4 font-display text-3xl font-bold text-text-soft md:text-4xl">
            From curious to shipping, in four steps.
          </h2>
        </RevealOnScroll>

        <div className="relative mt-20">
          {/* Connecting line - desktop */}
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-ink-line md:block">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              style={{ transformOrigin: "left" }}
              className="h-full bg-gradient-to-r from-teal via-violet to-amber"
            />
          </div>

          <div className="grid gap-10 md:grid-cols-4">
            {howItWorks.map((item, i) => (
              <RevealOnScroll key={item.step} delay={i * 0.15} className="relative flex flex-col items-center text-center md:items-start md:text-left">
                <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-ink bg-ink-panel font-mono text-sm font-bold text-teal ring-4 ring-ink">
                  {item.step}
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold text-text-soft">{item.title}</h3>
                <p className="mt-2 text-sm text-text-muted">{item.description}</p>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
