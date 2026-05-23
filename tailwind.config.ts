import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        sand: "#f7f1e7",
        ink: "#171717",
        bronze: "#d4a340",
        clay: "#6b6257",
        "brand-charcoal": "#121212",
        "brand-gold": "#e0b14c",
        "brand-gold-soft": "#f1c96f",
        "brand-cream": "#f6eee2",
        "brand-muted": "#7d7368"
      },
      boxShadow: {
        soft: "0 24px 80px rgba(18, 18, 18, 0.08)"
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "sans-serif"],
        display: ["var(--font-sora)", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
