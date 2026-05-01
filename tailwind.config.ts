import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.25rem", sm: "1.5rem", lg: "2rem" },
      screens: { "2xl": "1280px" },
    },
    extend: {
      colors: {
        bg: {
          DEFAULT: "#FFFCFA",
          soft: "#FFF8F5",
          warm: "#FFEFE8",
          deep: "#FFE4DA",
        },
        ink: {
          DEFAULT: "#1A1A1A",
          soft: "#2D2825",
          muted: "#6B6258",
          subtle: "#9A8F84",
        },
        coral: {
          50: "#FFF1EE",
          100: "#FFE4DF",
          200: "#FFC9BF",
          300: "#FFA294",
          400: "#FF8675",
          500: "#FF6B5B",
          600: "#E5483A",
          700: "#C03729",
          800: "#8E281D",
        },
        line: {
          DEFAULT: "#EFE5DD",
          soft: "#F5EDE6",
          strong: "#E0D2C5",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "monospace"],
      },
      fontSize: {
        "display-2xl": ["clamp(3rem, 7vw, 5.75rem)", { lineHeight: "0.95", letterSpacing: "-0.035em" }],
        "display-xl": ["clamp(2.5rem, 5.5vw, 4.5rem)", { lineHeight: "0.98", letterSpacing: "-0.03em" }],
        "display-lg": ["clamp(2rem, 4vw, 3.25rem)", { lineHeight: "1.02", letterSpacing: "-0.025em" }],
        "display-md": ["clamp(1.625rem, 2.8vw, 2.25rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        eyebrow: ["0.75rem", { lineHeight: "1.2", letterSpacing: "0.18em" }],
      },
      boxShadow: {
        soft: "0 1px 2px rgba(26,26,26,0.04), 0 8px 24px -12px rgba(26,26,26,0.08)",
        lift: "0 1px 0 rgba(26,26,26,0.04), 0 24px 48px -24px rgba(26,26,26,0.18)",
        coral: "0 12px 32px -12px rgba(255,107,91,0.45)",
        card: "0 0 0 1px rgba(239,229,221,0.8), 0 1px 2px rgba(26,26,26,0.04)",
      },
      backgroundImage: {
        grain:
          "radial-gradient(circle at 1px 1px, rgba(26,26,26,0.06) 1px, transparent 0)",
        peachShine:
          "radial-gradient(60% 60% at 50% 0%, rgba(255,107,91,0.10) 0%, rgba(255,107,91,0) 60%)",
      },
      animation: {
        "marquee": "marquee 36s linear infinite",
        "pulse-coral": "pulse-coral 2.4s ease-in-out infinite",
        "float-slow": "float 8s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "pulse-coral": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(255,107,91,0.55)" },
          "50%": { boxShadow: "0 0 0 14px rgba(255,107,91,0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
