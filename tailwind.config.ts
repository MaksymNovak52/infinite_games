import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Ciutadella TRIAL'", "system-ui", "sans-serif"],
        ciutadella: ["'Ciutadella TRIAL'", "sans-serif"],
        cormorant: ["var(--font-cormorant)", "serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        baseTitle: "#1F1F1F",
        orange: {
          500: "#ff6b19",
        },
        blue: {
          500: "#4b7bec",
          600: "#3867d6",
        },
      },
    },
  },
  plugins: [],
};
export default config;
