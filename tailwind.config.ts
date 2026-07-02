import type { Config } from "tailwindcss";

/**
 * LUMINA DENTAL — DESIGN SYSTEM
 * ------------------------------------------------------------
 * Palette
 *   Primary   #0F766E  (Deep Teal)   — trust, clinical calm
 *   Accent    #D4AF37  (Champagne Gold) — luxury, precision
 *   Ink       #0B1414  (near-black, warm) — headline text
 *   Porcelain #FAFAF8  (warm off-white) — background, "tooth" tone
 *   Mist      #F1F3F2  (light gray) — section alternation
 *   Line      #E4E7E5  (hairline borders)
 *
 * Type scale is defined in globals.css via CSS variables so both
 * Tailwind utilities (font-display / font-body / font-mono) and
 * raw CSS can share the same font stacks.
 * ------------------------------------------------------------
 */

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "2rem",
        lg: "3rem",
        xl: "4rem",
        "2xl": "5rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0F766E",
          50: "#EAF5F3",
          100: "#D2E9E5",
          200: "#A5D3CB",
          300: "#78BDB1",
          400: "#4BA797",
          500: "#0F766E",
          600: "#0D655E",
          700: "#0A544E",
          800: "#08423E",
          900: "#05302D",
          foreground: "#FAFAF8",
        },
        accent: {
          DEFAULT: "#D4AF37",
          50: "#FBF6E7",
          100: "#F6EBC9",
          200: "#EDD891",
          300: "#E4C55A",
          400: "#DBB63F",
          500: "#D4AF37",
          600: "#B08C24",
          700: "#87691C",
          800: "#5E4813",
          900: "#35280A",
          foreground: "#0B1414",
        },
        ink: {
          DEFAULT: "#0B1414",
          soft: "#2A3532",
          muted: "#5C6663",
        },
        porcelain: "#FAFAF8",
        mist: "#F1F3F2",
        line: "#E4E7E5",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      fontSize: {
        "display-xl": ["clamp(3.5rem, 6vw, 6.5rem)", { lineHeight: "0.98", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2.75rem, 4.5vw, 4.75rem)", { lineHeight: "1.02", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(2.25rem, 3.2vw, 3.25rem)", { lineHeight: "1.06", letterSpacing: "-0.015em" }],
        "display-sm": ["clamp(1.75rem, 2.2vw, 2.25rem)", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
      },
      borderRadius: {
        xs: "0.25rem",
        sm: "0.5rem",
        md: "0.75rem",
        lg: "1rem",
        xl: "1.5rem",
        "2xl": "2rem",
        pill: "999px",
      },
      boxShadow: {
        subtle: "0 1px 2px rgba(11,20,20,0.04), 0 1px 1px rgba(11,20,20,0.03)",
        soft: "0 8px 24px -8px rgba(11,20,20,0.10)",
        card: "0 12px 40px -12px rgba(11,20,20,0.14)",
        elevated: "0 24px 64px -16px rgba(11,20,20,0.20)",
        gold: "0 8px 30px -6px rgba(212,175,55,0.35)",
        "inner-line": "inset 0 0 0 1px rgba(11,20,20,0.06)",
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        30: "7.5rem",
      },
      maxWidth: {
        "8xl": "90rem",
      },
      keyframes: {
        "draw-arc": {
          "0%": { strokeDashoffset: "1" },
          "100%": { strokeDashoffset: "0" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) forwards",
        shimmer: "shimmer 2.5s linear infinite",
        marquee: "marquee 32s linear infinite",
      },
      transitionTimingFunction: {
        luxury: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
