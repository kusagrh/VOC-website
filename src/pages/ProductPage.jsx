import React from "react";
import { BadgeCheck, Compass, Briefcase, ArrowRight, CheckCircle2 } from "lucide-react";
import { products } from "../data/content";
import RevealOnScroll from "../components/ui/RevealOnScroll";
import MagneticButton from "../components/ui/MagneticButton";
import SmartLink from "../components/ui/SmartLink";
import AuroraBackground from "../components/backgrounds/AuroraBackground";

const icons = { "badge-check": BadgeCheck, compass: Compass, briefcase: Briefcase };

export default function ProductPage({ productId }) {
  const product = products.find((p) => p.id === productId);
  if (!product) return null;
  const Icon = icons[product.icon] ?? BadgeCheck;

  return (
    <div className="bg-ink">
      <section className="relative overflow-hidden pb-20 pt-40 md:pb-28 md:pt-48">
        <AuroraBackground />
        <div className="container-vc relative">
          <RevealOnScroll className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-ink-line bg-ink-panel px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-teal">
              <Icon size={14} />
              {product.category}
            </span>
            <h1 className="mt-6 font-display text-4xl font-bold text-text-soft md:text-6xl">{product.name}</h1>
            <p className="mt-5 text-lg text-text-muted">{product.description}</p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <MagneticButton
                as="a"
                href="#learn-more"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal to-violet px-7 py-3.5 text-sm font-semibold text-ink shadow-[0_0_30px_rgba(47,224,196,0.3)]"
              >
                {product.cta}
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </MagneticButton>
              <SmartLink
                href="/login"
                className="inline-flex items-center gap-2 rounded-full border border-ink-line bg-ink/50 px-7 py-3.5 text-sm font-semibold text-text-soft backdrop-blur hover:border-violet/60"
              >
                Get Started
              </SmartLink>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section id="learn-more" className="relative border-t border-ink-line bg-ink-soft py-20 md:py-28">
        <div className="container-vc grid gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <RevealOnScroll>
            <span className="font-mono text-xs uppercase tracking-widest text-violet">What it does</span>
            <h2 className="mt-4 font-display text-3xl font-bold text-text-soft md:text-4xl">
              {product.benefit}
            </h2>
            <ul className="mt-8 space-y-4">
              {product.features?.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-text-muted">
                  <CheckCircle2 size={19} className="mt-0.5 shrink-0 text-teal" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1} direction="left">
            <div className="rounded-2xl border border-ink-line bg-ink-panel p-8">
              <span className="font-mono text-xs uppercase tracking-widest text-amber">By the numbers</span>
              <div className="mt-6 grid grid-cols-1 gap-6 xs:grid-cols-3 lg:grid-cols-1">
                {product.stats?.map((stat) => (
                  <div key={stat.label} className="border-b border-ink-line pb-4 last:border-0 last:pb-0">
                    <div className="font-display text-3xl font-bold text-text-soft">{stat.value}</div>
                    <div className="mt-1 text-sm text-text-muted">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
}
