import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        wall: {
          DEFAULT: "#0a0b0d",
          900: "#0a0b0d",
          800: "#101216",
          700: "#15181d",
        },
        panel: {
          DEFAULT: "#13161b",
          border: "#262b32",
          head: "#1a1e24",
        },
        ink: {
          DEFAULT: "#e7e9ec",
          muted: "#8d94a0",
          dim: "#5c626d",
        },
        amber: {
          50: "#fff6ed",
          100: "#ffe9d3",
          200: "#ffcfa1",
          300: "#ffab5c",
          400: "#ff8a2e",
          500: "#f97316",
          600: "#e35d0a",
          700: "#bc460a",
          800: "#96380f",
          900: "#7a2f10",
        },
        status: {
          good: "#3ecf7e",
          warn: "#f2c94c",
          bad: "#ef4b4b",
          info: "#3aa0ff",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      boxShadow: {
        panel: "0 0 0 1px rgba(249,115,22,0.04), 0 8px 24px -12px rgba(0,0,0,0.6)",
        glow: "0 0 24px -4px rgba(249,115,22,0.35)",
      },
      backgroundImage: {
        "wall-grid":
          "linear-gradient(rgba(249,115,22,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.035) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
export default config;
