/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    screens: {
      xs: "375px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
      "3xl": "1920px",
    },
    extend: {
      colors: {
        // Theme-aware tokens: these read CSS custom properties defined in
        // src/index.css (dark values on :root, light values under .light).
        // Component code never needs to know which theme is active — it
        // just keeps using bg-ink, text-text-soft, border-ink-line, etc.
        ink: {
          DEFAULT: "var(--color-ink)",
          soft: "var(--color-ink-soft)",
          panel: "var(--color-ink-panel)",
          line: "var(--color-ink-line)",
        },
        paper: "var(--color-paper)",
        amber: { DEFAULT: "#f2a93c", dim: "#f6c274" },
        teal: { DEFAULT: "#2fe0c4", dim: "#7ff0dd" },
        violet: { DEFAULT: "#8b7ff2", dim: "#b6aefc" },
        text: {
          soft: "var(--color-text-soft)",
          muted: "var(--color-text-muted)",
          mutedLight: "var(--color-text-muted-light)",
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "Inter", "sans-serif"],
        body: ["Inter", "-apple-system", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, transparent, #05060a 85%), linear-gradient(rgba(245,243,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(245,243,255,0.06) 1px, transparent 1px)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      keyframes: {
        aurora: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(4%, -6%) scale(1.08)" },
          "66%": { transform: "translate(-3%, 4%) scale(0.96)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        blink: {
          "0%, 49%": { opacity: 1 },
          "50%, 100%": { opacity: 0 },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        aurora: "aurora 18s ease-in-out infinite",
        marquee: "marquee 30s linear infinite",
        "marquee-reverse": "marquee-reverse 34s linear infinite",
        blink: "blink 1s steps(1) infinite",
        float: "float 4s ease-in-out infinite",
        "gradient-x": "gradient-x 6s ease infinite",
      },
    },
  },
  plugins: [],
};
