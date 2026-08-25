import React, { useEffect, useRef, useState } from "react";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "../data/content";
import RevealOnScroll from "./ui/RevealOnScroll";

const avatarColors = ["#2fe0c4", "#8b7ff2", "#f2a93c", "#f2544e"];
const CARD_WIDTH = 320 + 24; // card width + gap (sm:w-[380px] bumps slightly, close enough for a smooth skip)

function TestimonialCard({ t, i }) {
  return (
    <div className="flex w-[320px] shrink-0 flex-col gap-4 rounded-2xl border border-ink-line bg-ink-panel p-6 sm:w-[380px]">
      <div className="flex items-center justify-between">
        <Quote size={22} className="text-violet/50" />
        <div className="flex gap-0.5 text-amber">
          {Array.from({ length: 5 }).map((_, s) => (
            <Star key={s} size={13} fill="currentColor" strokeWidth={0} />
          ))}
        </div>
      </div>
      <p className="text-sm leading-relaxed text-text-soft">"{t.quote}"</p>
      <div className="flex items-center gap-3">
        <span
          className="flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold text-ink"
          style={{ background: avatarColors[i % avatarColors.length] }}
        >
          {t.name.charAt(0)}
        </span>
        <div>
          <div className="text-sm font-semibold text-text-soft">{t.name}</div>
          <div className="text-xs text-text-muted">{t.role}</div>
        </div>
      </div>
    </div>
  );
}

export default function Community() {
  const loop = [...testimonials, ...testimonials];
  const trackRef = useRef(null);
  const [paused, setPaused] = useState(false);

  // Gentle continuous auto-scroll; pauses on hover or right after a manual
  // prev/next click so the button press doesn't get fought by the loop.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let raf;
    const tick = () => {
      if (!paused && track) {
        track.scrollLeft += 0.6;
        if (track.scrollLeft >= track.scrollWidth / 2) {
          track.scrollLeft = 0;
        }
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [paused]);

  function skip(direction) {
    const track = trackRef.current;
    if (!track) return;
    setPaused(true);
    track.scrollBy({ left: direction * CARD_WIDTH, behavior: "smooth" });
    window.clearTimeout(skip._t);
    skip._t = window.setTimeout(() => setPaused(false), 2500);
  }

  return (
    <section id="community" className="relative overflow-hidden bg-ink-soft py-24 md:py-32">
      <div className="container-vc">
        <RevealOnScroll className="mx-auto max-w-2xl text-center">
          <span className="font-mono text-xs uppercase tracking-widest text-amber">Community</span>
          <h2 className="mt-4 font-display text-3xl font-bold text-text-soft md:text-4xl">
            48+ campus chapters. One community.
          </h2>
          <p className="mt-4 text-text-muted">
            Student-run chapters, peer learning circles, and a hiring pipeline shared by real partner companies.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1} className="mx-auto mt-10 grid max-w-3xl grid-cols-3 gap-6 text-center">
          {[
            ["48+", "Campus Chapters"],
            ["12", "States"],
            ["4.8/5", "Avg. Rating"],
          ].map(([value, label]) => (
            <div key={label}>
              <div className="font-display text-2xl font-bold text-text-soft md:text-3xl">{value}</div>
              <div className="mt-1 text-xs uppercase tracking-wide text-text-muted">{label}</div>
            </div>
          ))}
        </RevealOnScroll>
      </div>

      <div
        className="group relative mt-16"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-ink-soft to-transparent sm:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-ink-soft to-transparent sm:w-32" />

        <div
          ref={trackRef}
          className="flex w-full gap-6 overflow-x-hidden scroll-smooth px-4 sm:px-0"
          style={{ scrollBehavior: "smooth" }}
        >
          {loop.map((t, i) => (
            <TestimonialCard key={i} t={t} i={i} />
          ))}
        </div>

        <button
          type="button"
          aria-label="Previous review"
          onClick={() => skip(-1)}
          className="absolute left-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-ink-line bg-ink-panel/90 text-text-soft opacity-100 shadow-lg backdrop-blur transition-all hover:border-teal hover:text-teal sm:opacity-0 sm:group-hover:opacity-100"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          type="button"
          aria-label="Next review"
          onClick={() => skip(1)}
          className="absolute right-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-ink-line bg-ink-panel/90 text-text-soft opacity-100 shadow-lg backdrop-blur transition-all hover:border-teal hover:text-teal sm:opacity-0 sm:group-hover:opacity-100"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </section>
  );
}
