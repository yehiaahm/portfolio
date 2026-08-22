import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "#F5F2EB",
          50: "#FDFCFA",
          100: "#FAF8F3",
          200: "#F5F2EB",
          300: "#EEE9DD",
          400: "#E4DCC9",
        },
        ink: {
          DEFAULT: "#211E1A",
          50: "#4A443C",
          100: "#3A342D",
          200: "#211E1A",
          300: "#17140F",
          400: "#0F0D0A",
        },
        clay: {
          DEFAULT: "#C96A45",
          50: "#F3D9CB",
          100: "#EBC2AC",
          200: "#DE9C79",
          300: "#C96A45",
          400: "#A94E30",
          500: "#833A24",
          600: "#5E2A1A",
        },
        gold: {
          DEFAULT: "#B8863F",
          100: "#EEE0C4",
          200: "#DDBE87",
          300: "#B8863F",
          400: "#96692E",
          500: "#734F21",
        },
        sky: {
          DEFAULT: "#5B7C99",
          100: "#D6E1E9",
          200: "#A9C0D2",
          300: "#5B7C99",
          400: "#436077",
          500: "#324857",
        },
        sage: {
          DEFAULT: "#6B7261",
          100: "#D9DDD1",
          300: "#8C9480",
          500: "#6B7261",
          700: "#4A5040",
        },
        parchment: "#EDE7D9",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        serif: ["var(--font-serif)"],
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      fontSize: {
        "display-xl": ["clamp(3.5rem, 8vw, 8.5rem)", { lineHeight: "0.95", letterSpacing: "-0.03em" }],
        "display-lg": ["clamp(2.75rem, 6vw, 6rem)", { lineHeight: "0.98", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(2.25rem, 4.5vw, 4rem)", { lineHeight: "1.02", letterSpacing: "-0.02em" }],
        "display-sm": ["clamp(1.75rem, 3vw, 2.75rem)", { lineHeight: "1.05", letterSpacing: "-0.01em" }],
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.02em",
        widest2: "0.28em",
      },
      maxWidth: {
        content: "1400px",
      },
      backgroundImage: {
        grain: "url('/images/grain.png')",
      },
      animation: {
        marquee: "marquee 32s linear infinite",
        "marquee-reverse": "marquee-reverse 38s linear infinite",
        "spin-slow": "spin 22s linear infinite",
        float: "float 7s ease-in-out infinite",
        "float-delayed": "float 8.5s ease-in-out infinite 1.2s",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-16px) rotate(3deg)" },
        },
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.16, 1, 0.3, 1)",
        smooth: "cubic-bezier(0.65, 0, 0.35, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
