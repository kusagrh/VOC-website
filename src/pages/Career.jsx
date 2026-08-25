import React from "react";
import FeaturedPrograms from "../components/FeaturedPrograms";
import RevealOnScroll from "../components/ui/RevealOnScroll";
import AuroraBackground from "../components/backgrounds/AuroraBackground";

export default function Career() {
  return (
    <div className="bg-ink">

      {/* =========================================
          CAREER HERO
      ========================================= */}

      <section className="relative overflow-hidden pb-16 pt-40 md:pb-20 md:pt-48">
        <AuroraBackground />

        <div className="container-vc relative">

          <RevealOnScroll className="mx-auto max-w-3xl text-center">

            <span className="inline-flex items-center gap-2 rounded-full border border-ink-line bg-ink-panel px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-teal">
              Career Intelligence
            </span>

            <h1 className="mt-6 font-display text-4xl font-bold text-text-soft md:text-6xl">
              Build skills that move your career forward.
            </h1>

            <p className="mt-5 text-lg text-text-muted">
              Explore job-ready learning tracks designed to help you
              build practical skills, real projects, and career-ready
              experience.
            </p>

          </RevealOnScroll>

        </div>
      </section>


      {/* =========================================
          FEATURED PROGRAMS / COURSES

          Jobs & Internships section has been
          removed from Career.jsx.

          Courses remain here.
      ========================================= */}

      <FeaturedPrograms
        id="career-programs"
        limit={0}
        showShowMore={false}
      />

    </div>
  );
}