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
        sand: "#f8f4ec",
        ink: "#1c1917",
        bronze: "#b7791f",
        clay: "#8b5e34"
      },
      boxShadow: {
        soft: "0 24px 80px rgba(28, 25, 23, 0.08)"
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "sans-serif"],
        display: ["var(--font-cormorant)", "serif"]
      }
    }
  },
  plugins: []
};

export default config;
