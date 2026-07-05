import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx,mdx}", "./components/**/*.{ts,tsx}", "./content/**/*.{md,mdx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
        display: ["var(--font-display)"]
      },
      boxShadow: {
        pixel: "4px 4px 0 var(--shadow-color)",
        "pixel-sm": "2px 2px 0 var(--shadow-color)",
        "pixel-lg": "8px 8px 0 var(--shadow-color)"
      }
    }
  },
  plugins: []
};

export default config;
