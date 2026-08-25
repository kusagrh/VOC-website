import React from "react";
import {
  Code,
  Terminal,
  Sparkles,
  Shield,
  Bug,
  BarChart3,
  ArrowRight,
} from "lucide-react";

import { programs } from "../data/content";
import SmartLink from "./ui/SmartLink";
import TiltCard from "./ui/TiltCard";
import RevealOnScroll from "./ui/RevealOnScroll";

const icons = {
  code: Code,
  terminal: Terminal,
  sparkles: Sparkles,
  shield: Shield,
  bug: Bug,
  "bar-chart": BarChart3,
};

export default function FeaturedPrograms({
  limit = 3,
  showShowMore = true,
  id = "programs",

  // New customizable text
  eyebrow = "Featured Programs",
  title = "Job-ready tracks, built by engineers.",
  description =
    "A sample of our current catalog — every track ends with a deployed, portfolio-ready project.",
  linkText = "Explore All Courses",
  linkHref = "/vaultcareer",
}) {
  const visible = limit ? programs.slice(0, limit) : programs;

  return (
    <section
      id={id}
      className="relative overflow-hidden bg-ink py-24 md:py-32"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-teal/10 blur-3xl" />

      <div className="container-vc relative">
        {/* Header */}
        <RevealOnScroll className="mx-auto max-w-3xl text-center">
          <span className="font-mono text-xs uppercase tracking-widest text-teal">
            {eyebrow}
          </span>

          <h2 className="mt-4 font-display text-3xl font-bold text-text-soft md:text-4xl">
            {title}
          </h2>

          <p className="mt-4 text-text-muted">
            {description}
          </p>
        </RevealOnScroll>

        {/* Course Cards */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((program, i) => {
            const Icon = icons[program.icon] ?? Code;

            return (
              <RevealOnScroll
                key={program.id}
                delay={(i % 3) * 0.08}
              >
                <TiltCard
                  maxTilt={7}
                  className="group h-full rounded-2xl"
                >
                  <div className="flex h-full flex-col rounded-2xl border border-ink-line bg-ink-panel p-7 transition-colors duration-300 hover:border-teal/40">

                    {/* Icon + Duration */}
                    <div className="flex items-center justify-between">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-teal/20 to-violet/20 text-teal">
                        <Icon size={20} />
                      </span>

                      <span className="rounded-full border border-ink-line px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-text-muted">
                        {program.duration}
                      </span>
                    </div>

                    {/* Course Information */}
                    <h3 className="mt-5 font-display text-lg font-semibold text-text-soft">
                      {program.title}
                    </h3>

                    <p className="mt-1 font-mono text-[11px] uppercase tracking-wide text-violet-dim">
                      {program.level}
                    </p>

                    <p className="mt-3 flex-1 text-sm text-text-muted">
                      {program.description}
                    </p>

                    {/* CTA */}
                    <SmartLink
                      href="/vaultcareer"
                      className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-text-soft"
                    >
                      View Course
                      <ArrowRight
                        size={15}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </SmartLink>
                  </div>
                </TiltCard>
              </RevealOnScroll>
            );
          })}
        </div>

        {/* Bottom CTA */}
        {showShowMore && limit && programs.length > limit && (
          <RevealOnScroll
            delay={0.15}
            className="mt-12 flex justify-center"
          >
            <SmartLink
              href={linkHref}
              className="group inline-flex items-center gap-2 rounded-full border border-ink-line bg-ink-panel px-6 py-3 text-sm font-semibold text-text-soft transition-colors hover:border-teal/50 hover:text-teal"
            >
              {linkText}

              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </SmartLink>
          </RevealOnScroll>
        )}
      </div>
    </section>
  );
}