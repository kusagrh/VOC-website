import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, ChevronDown } from "lucide-react";
import AuroraBackground from "./backgrounds/AuroraBackground";
import ParticleField from "./backgrounds/ParticleField";
import LightfallCanvas from "./backgrounds/LightfallCanvas";
import AnimatedText from "./ui/AnimatedText";
import MagneticButton from "./ui/MagneticButton";
import RevealOnScroll from "./ui/RevealOnScroll";

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-[100svh] items-center overflow-hidden pt-[72px]">
      {/* Layered backgrounds */}
      <div className="absolute inset-0 bg-ink" />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(245,243,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(245,243,255,0.05) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 20%, #000 40%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 20%, #000 40%, transparent 100%)",
        }}
      />
      <AuroraBackground />
      <div className="absolute inset-0">
        <LightfallCanvas />
      </div>
      <div className="absolute inset-0">
        <ParticleField colorRGB="139, 127, 242" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/40" />

      <div className="container-vc relative z-10 py-20">
        <RevealOnScroll direction="up" duration={0.5}>
          <div className="mx-auto mb-6 flex w-fit items-center gap-2 rounded-full border border-ink-line bg-ink-panel/60 px-4 py-1.5 text-xs font-medium text-teal-dim backdrop-blur">
            <Sparkles size={14} />
            Technology Education × Software Innovation
          </div>
        </RevealOnScroll>

        <AnimatedText
          text="Learn. Build. Launch."
          as="h1"
          className="mx-auto max-w-4xl text-center font-display text-[2.6rem] font-bold leading-[1.1] tracking-tight text-text-soft xs:text-5xl md:text-6xl 2xl:text-7xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mx-auto mt-1 max-w-4xl text-center font-display text-[2.6rem] font-bold leading-[1.1] tracking-tight xs:text-5xl md:text-6xl 2xl:text-7xl"
        >
          <span className="text-gradient-animate">Your career in tech.</span>
        </motion.div>

        <RevealOnScroll delay={0.15} direction="up">
          <p className="mx-auto mt-7 max-w-2xl text-center text-base text-text-muted md:text-lg">
            VaultofCodes is a technology company built on three pillars — practical{" "}
            <span className="text-text-soft">EdTech</span>, real{" "}
            <span className="text-text-soft">Software Products</span>, and scalable{" "}
            <span className="text-text-soft">SaaS</span> — so you don't just learn technology, you build and ship it.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.25} direction="up" className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <MagneticButton
            as="a"
            href="#programs"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal to-violet px-7 py-3.5 text-sm font-semibold text-ink shadow-[0_0_30px_rgba(47,224,196,0.3)] transition-shadow hover:shadow-[0_0_40px_rgba(139,127,242,0.45)] md:text-base"
          >
            Explore Programs
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </MagneticButton>
          <MagneticButton
            as="a"
            href="#software"
            className="inline-flex items-center gap-2 rounded-full border border-ink-line bg-ink-panel/50 px-7 py-3.5 text-sm font-semibold text-text-soft backdrop-blur transition-colors hover:border-violet/60 md:text-base"
          >
            Explore Software
          </MagneticButton>
        </RevealOnScroll>

        <RevealOnScroll delay={0.35} direction="up" className="mx-auto mt-16 flex max-w-2xl flex-wrap justify-center gap-x-10 gap-y-6">
          {[
            ["50K+", "Students Trained"],
            ["100+", "Programs & Courses"],
            ["10K+", "Projects Shipped"],
          ].map(([value, label]) => (
            <div key={label} className="text-center">
              <div className="font-display text-2xl font-bold text-text-soft md:text-3xl">{value}</div>
              <div className="mt-1 text-xs uppercase tracking-wide text-text-muted">{label}</div>
            </div>
          ))}
        </RevealOnScroll>
      </div>

      <motion.a
        href="#what-we-do"
        aria-label="Scroll to explore"
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-1 text-text-muted md:flex"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <span className="text-[11px] uppercase tracking-widest">Scroll</span>
        <ChevronDown size={18} />
      </motion.a>
    </section>
  );
}
