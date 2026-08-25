import React from "react";
import { BadgeCheck, Compass, Briefcase, Zap, ArrowUpRight } from "lucide-react";
import { products } from "../data/content";
import TiltCard from "./ui/TiltCard";
import RevealOnScroll from "./ui/RevealOnScroll";
import SmartLink from "./ui/SmartLink";

const icons = { "badge-check": BadgeCheck, compass: Compass, briefcase: Briefcase };
const gradients = [
  "from-teal/25 via-transparent to-transparent",
  "from-violet/25 via-transparent to-transparent",
  "from-amber/25 via-transparent to-transparent",
];

export default function SoftwareSaaS() {
  return (
    <section id="software" className="relative overflow-hidden bg-ink-soft py-24 md:py-32">
      <div className="container-vc">
        <RevealOnScroll className="mx-auto max-w-2xl text-center">
          <span className="font-mono text-xs uppercase tracking-widest text-violet">Software & SaaS</span>
          <h2 className="mt-4 font-display text-3xl font-bold text-text-soft md:text-4xl">
            We don't just teach software. We ship it.
          </h2>
          <p className="mt-4 text-text-muted">
            A growing product suite built to solve the same problems our students and hiring partners face —
            verification, career guidance, and recruitment.
          </p>
        </RevealOnScroll>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {products.map((product, i) => {
            const Icon = icons[product.icon] ?? Zap;
            return (
              <RevealOnScroll key={product.id} delay={i * 0.1}>
                <TiltCard maxTilt={6} className="group h-full rounded-2xl">
                  <div className="relative h-full overflow-hidden rounded-2xl border border-ink-line bg-ink p-8">
                    <div className={`absolute -right-10 -top-10 h-44 w-44 rounded-full bg-gradient-to-br ${gradients[i % gradients.length]} blur-2xl`} />
                    <span className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-ink-panel text-text-soft">
                      <Icon size={22} />
                    </span>
                    <span className="relative mt-5 block font-mono text-[11px] uppercase tracking-widest text-text-muted">
                      {product.category}
                    </span>
                    <h3 className="relative mt-2 font-display text-xl font-semibold text-text-soft">{product.name}</h3>
                    <p className="relative mt-3 text-sm text-text-muted">{product.description}</p>
                    <div className="relative mt-5 flex items-center gap-2 rounded-lg border border-ink-line bg-ink-panel/50 px-3 py-2 text-xs text-teal-dim">
                      <Zap size={13} />
                      {product.benefit}
                    </div>
                    <SmartLink
                      href={product.href ?? "#software"}
                      className="relative mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-text-soft"
                    >
                      {product.cta}
                      <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </SmartLink>
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
