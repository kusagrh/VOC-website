import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Code2 } from "lucide-react";
import { languages } from "../data/content";
import RevealOnScroll from "./ui/RevealOnScroll";
import MagneticButton from "./ui/MagneticButton";

const extensions = {
  python: "py",
  javascript: "js",
  java: "java",
  cpp: "cpp",
  c: "c",
  go: "go",
};

export default function CodePlayground() {
  const [activeId, setActiveId] = useState(languages[0].id);
  const active = languages.find((l) => l.id === activeId) ?? languages[0];

  return (
    <section id="free-tests" className="relative bg-ink-soft py-24 md:py-32">
      <div className="container-vc">
        <RevealOnScroll className="mx-auto max-w-2xl text-center">
          <span className="font-mono text-xs uppercase tracking-widest text-amber">Code In Any Language</span>
          <h2 className="mt-4 font-display text-3xl font-bold text-text-soft md:text-4xl">
            Python, C, C++, Java, JavaScript — start wherever you are.
          </h2>
          <p className="mt-4 text-text-muted">
            Every program is built around a real language track. Pick one below to see a taste of what you'll write
            in week one.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1} className="mx-auto mt-14 max-w-3xl">
          <div className="overflow-hidden rounded-2xl border border-ink-line bg-ink shadow-[0_30px_80px_-30px_rgba(139,127,242,0.25)]">
            {/* Window chrome */}
            <div className="flex items-center justify-between border-b border-ink-line bg-ink-panel px-5 py-3">
              <div className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-[#f2544e]" />
                <span className="h-3 w-3 rounded-full bg-[#f2b84b]" />
                <span className="h-3 w-3 rounded-full bg-[#35c76b]" />
              </div>
              <span className="font-mono text-xs text-text-muted">welcome.{extensions[active.id] ?? active.id}</span>
              <Code2 size={16} className="text-text-muted" />
            </div>

            {/* Language tabs */}
            <div className="flex flex-wrap gap-1 border-b border-ink-line bg-ink-panel/60 px-3 py-2">
              {languages.map((lang) => (
                <button
                  key={lang.id}
                  onClick={() => setActiveId(lang.id)}
                  className={`relative rounded-lg px-3.5 py-1.5 font-mono text-xs font-medium transition-colors ${
                    activeId === lang.id ? "text-ink" : "text-text-muted hover:text-text-soft"
                  }`}
                >
                  {activeId === lang.id && (
                    <motion.span
                      layoutId="lang-pill"
                      className="absolute inset-0 rounded-lg"
                      style={{ background: lang.color }}
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative">{lang.label}</span>
                </button>
              ))}
            </div>

            {/* Code body */}
            <div className="relative min-h-[220px] px-6 py-6 font-mono text-[13px] leading-relaxed text-text-soft md:text-sm">
              <AnimatePresence mode="wait">
                <motion.pre
                  key={active.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="whitespace-pre-wrap"
                >
                  {active.snippet}
                </motion.pre>
              </AnimatePresence>
            </div>

            {/* Output panel */}
            <div className="border-t border-ink-line bg-ink-panel/60">
              <div className="flex items-center justify-between px-5 py-2">
                <span className="font-mono text-[11px] uppercase tracking-widest text-text-muted">Output</span>
              </div>
              <div className="min-h-[70px] px-6 pb-5 font-mono text-[13px] leading-relaxed text-text-soft md:text-sm">
                <AnimatePresence mode="wait">
                  <motion.pre
                    key={active.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                    className="whitespace-pre-wrap"
                  >
                    {(active.output ?? "Welcome to VaultofCodes!").split("\n").map((line, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <span className="text-teal">{">"}</span>
                        <span className="text-text-muted">{line}</span>
                      </div>
                    ))}
                  </motion.pre>
                </AnimatePresence>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center gap-4 text-center">
            <p className="text-sm text-text-muted">
              And more — Go, Rust, Kotlin, and SQL tracks are available across our program catalog.
            </p>
            <MagneticButton
              as="a"
              href="#programs"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber to-teal px-7 py-3.5 text-sm font-semibold text-ink shadow-[0_0_30px_rgba(242,169,60,0.25)]"
            >
              Start Learning to Code
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </MagneticButton>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}