import React from "react";
import { ArrowRight } from "lucide-react";
import AuroraBackground from "./backgrounds/AuroraBackground";
import RevealOnScroll from "./ui/RevealOnScroll";
import MagneticButton from "./ui/MagneticButton";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 md:py-32">
      <div className="container-vc">
        <RevealOnScroll>
          <div className="relative overflow-hidden rounded-3xl border border-ink-line bg-ink-panel px-6 py-16 text-center sm:px-10 md:py-20">
            <AuroraBackground />
            <div className="relative">
              <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold text-text-soft md:text-5xl">
                Ready to build your future in tech?
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-text-muted">
                Join a community that learns by shipping — real courses, real software, real careers.
              </p>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
                <MagneticButton
                  as="a"
                  href="#programs"
                  className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal to-violet px-7 py-3.5 text-sm font-semibold text-ink shadow-[0_0_30px_rgba(47,224,196,0.3)] md:text-base"
                >
                  Explore Programs
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </MagneticButton>
                <MagneticButton
                  as="a"
                  href="#software"
                  className="inline-flex items-center gap-2 rounded-full border border-ink-line bg-ink/50 px-7 py-3.5 text-sm font-semibold text-text-soft backdrop-blur hover:border-violet/60 md:text-base"
                >
                  Explore Software
                </MagneticButton>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}