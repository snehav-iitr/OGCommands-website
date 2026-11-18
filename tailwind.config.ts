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
          950: "#070708",
          900: "#0C0C0E",
          850: "#121214",
          800: "#18181B",
          700: "#222226",
          600: "#2E2E33",
        },
        mist: {
          50: "#F7F7F8",
          100: "#E8E8EC",
          300: "#A1A1AA",
          400: "#71717A",
        },
        accent: {
          DEFAULT: "#F43F7A",
          soft: "#FF6B9A",
          muted: "rgba(244, 63, 122, 0.14)",
          glow: "rgba(244, 63, 122, 0.35)",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        glow: "0 0 60px -12px rgba(244, 63, 122, 0.45)",
        panel: "0 24px 80px -32px rgba(0,0,0,0.75)",
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
        "hero-radial":
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(244,63,122,0.22), transparent 55%)",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease-out both",
        float: "float 8s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
