import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#09090B",
          900: "#0E0E11",
          850: "#141418",
          800: "#1A1A1F",
          700: "#24242B",
          600: "#32323A",
        },
        mist: {
          50: "#FAFAFA",
          100: "#EDEDF0",
          200: "#D4D4D8",
          300: "#A1A1AA",
          400: "#71717A",
        },
        accent: {
          DEFAULT: "#E11D63",
          soft: "#F43F7A",
          muted: "rgba(225, 29, 99, 0.12)",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        panel: "0 28px 80px -40px rgba(0,0,0,0.85)",
        soft: "0 12px 40px -24px rgba(0,0,0,0.65)",
      },
      backgroundImage: {
        "hero-wash":
          "radial-gradient(ellipse 90% 55% at 70% -10%, rgba(225,29,99,0.16), transparent 55%), radial-gradient(ellipse 60% 40% at 10% 30%, rgba(255,255,255,0.04), transparent 50%)",
        "section-fade":
          "linear-gradient(180deg, transparent, rgba(255,255,255,0.02), transparent)",
      },
      animation: {
        "fade-up": "fadeUp 0.65s ease-out both",
        "caret-blink": "caretBlink 1s step-end infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        caretBlink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
