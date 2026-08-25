# VaultofCodes — Homepage Rebuild

A from-scratch rebuild of the VaultofCodes homepage as a modern **EdTech + Software
Products + SaaS** technology-startup site, built with React, Tailwind CSS, and
Framer Motion, with custom canvas/CSS effects inspired by **React Bits**.

> Your original vanilla HTML/CSS/JS project (the "About Us" + Career Portal pages)
> is preserved untouched inside `legacy-original-site/` for reference — nothing in
> that folder was deleted or overwritten.

---

## 1. Getting started

```bash
npm install
npm run dev       # starts Vite dev server, usually at http://localhost:5173
```

Build for production:

```bash
npm run build      # outputs to /dist
npm run preview    # preview the production build locally
```

Requirements: Node.js 18+.

---

## 2. Tech stack (all within the assignment's allowed list)

| Tool | Used for |
|---|---|
| **React 18 + Vite** | Component architecture, fast dev/build |
| **Tailwind CSS** | Utility styling, custom breakpoints for 1280/1440/1920 |
| **Framer Motion** | Scroll reveals, tab transitions, magnetic buttons, tilt cards |
| **Canvas 2D API** | Particle network + "Lightfall" streak backgrounds (no extra deps) |
| **lucide-react** | Icon set |

"React Bits" itself is a copy-paste component gallery, not an installable
package — so its component **patterns** (Aurora, Particles, Lightfall, Tilted
Card, Magnet Button, Animated Text, Spotlight Cursor, Marquee) were
re-implemented natively in `src/components/backgrounds/` and
`src/components/ui/` so the project has zero unnecessary dependencies.

---

## 3. Project structure

```
src/
  components/
    backgrounds/
      AuroraBackground.jsx     # animated gradient blobs
      ParticleField.jsx        # canvas particle network + mouse interaction
      LightfallCanvas.jsx      # falling light-streak effect
    ui/
      MagneticButton.jsx       # cursor-attraction buttons
      TiltCard.jsx             # 3D mouse-tilt cards with glare
      RevealOnScroll.jsx       # scroll-triggered fade/slide wrapper
      AnimatedText.jsx         # staggered word-reveal headline text
      CursorGlow.jsx           # cursor-following spotlight glow
    Navbar.jsx
    Hero.jsx
    MarqueeStrip.jsx
    WhatWeDo.jsx
    FeaturedPrograms.jsx
    CodePlayground.jsx         # multi-language (Python/C/C++/Java/JS/Go) CTA
    SoftwareSaaS.jsx           # VaultVerify / VaultCareer / VaultHire
    StatsSection.jsx           # animated counters
    WhyVault.jsx
    HowItWorks.jsx             # Discover → Learn → Build → Launch
    Community.jsx              # testimonials marquee
    FinalCTA.jsx
    Footer.jsx
  data/content.js               # ALL dummy copy lives here (edit content without touching UI)
  hooks/
    useDeviceCapability.js      # centralised reduced-motion / touch / small-screen checks
    useCountUp.js                # requestAnimationFrame count-up for stats
  App.jsx
  main.jsx
  index.css
legacy-original-site/           # your original vanilla project, untouched
```

Content is fully separated from components — to swap dummy copy for real
copy later, only `src/data/content.js` needs editing.

---

## 4. How each assignment requirement was met

**Hero & positioning** — "Learn. Build. Launch." animated headline, sub-line
naming EdTech / Software Products / SaaS explicitly, CTAs for Explore
Programs / Explore Software.

**Interactive hero background** — three layered effects behind the hero:
an animated grid, `AuroraBackground` (drifting gradient blobs), `LightfallCanvas`
(falling light streaks), and `ParticleField` (mouse-reactive particle network).
Text sits above a scrim gradient so contrast stays readable at every breakpoint.

**Multi-language coding CTA** — `CodePlayground.jsx` is a tabbed mock code
editor with real, distinct snippets for Python, C, C++, Java, JavaScript, and
Go, ending in a "Start Learning to Code" CTA — directly answers the
"CTA for coding in different programming languages" requirement.

**What We Do / Software & SaaS / Featured Programs** — tilt-card grids with
dummy but realistic program and product data (`VaultVerify`, `VaultCareer`,
`VaultHire`), each with category, benefit, and CTA per the brief.

**Why VaultofCodes, Stats, How It Works, Community** — checklist grid,
count-up statistics, a 4-step animated journey with a scroll-drawn connecting
line, and a testimonial marquee.

**Navbar** — Home, Programs, Software, About, Career, Free Tests + Login +
primary CTA, with a slide-down mobile menu.

**Footer** — Company, Programs, Software, Resources, Legal columns, socials,
and copyright.

**Motion & interaction** — scroll reveals, staggered text animation, magnetic
buttons, 3D tilt + glare cards, animated counters, two marquees (opposite
directions), animated gradients, cursor-following glow — implemented across
the sections above without stacking effects on top of each other in any one
place.

**Responsive design** — Tailwind breakpoints tuned for the brief's exact
targets: `xs 375px`, default mobile <640px (covers 375/390/414), `md 768px`,
`lg 1024px`, `xl 1280px`, custom `2xl 1440px`, custom `3xl 1920px`. Layouts
genuinely restructure per breakpoint (grid column counts change, nav
collapses to a drawer, hero stat row wraps) rather than just scaling down.

**Performance** —
- Canvas effects are DPR-capped, pause via `IntersectionObserver` when
  off-screen and the Page Visibility API when the tab is backgrounded, and
  scale particle count down on small screens.
- Every heavy effect (`ParticleField`, `LightfallCanvas`, `CursorGlow`,
  `TiltCard`, `MagneticButton`) is gated behind a shared
  `useDeviceCapability` hook that checks `prefers-reduced-motion` and
  `(hover: hover) and (pointer: fine)`, so touch devices and users who
  request reduced motion get a lightweight, still-fully-functional page.
- No large images — icons are inline SVG (`lucide-react`), so there is
  nothing to lazy-load or optimize on the image side.
- Scroll reveals use Framer Motion's `whileInView` with `once: true`, so
  animations run once, not on every scroll pass.

---

## 6. Notes for the next pass

- All copy, stats, testimonials, and product names in `src/data/content.js`
  are placeholders per the assignment's "Dummy Content Rule" — replace with
  real content when available.
- The original vanilla "About Us" and "Career Portal" pages are preserved in
  `legacy-original-site/` in case any of that content or the jobs data
  (`legacy-original-site/data/jobs.json`) needs to be ported into the new
  React site later.
