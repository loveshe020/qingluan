import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Aptos", "Segoe UI", "Helvetica Neue", "Arial", "sans-serif"],
        serif: ["Iowan Old Style", "Palatino Linotype", "Book Antiqua", "Georgia", "serif"],
      },
      colors: {
        ink: "var(--ink)",
        ivory: "var(--ivory)",
        jade: "var(--jade)",
        teal: "var(--teal)",
        gold: "var(--gold)",
        line: "var(--line)",
        mist: "var(--mist)",
      },
      boxShadow: {
        panel: "0 20px 80px rgba(10, 26, 28, 0.12)",
      },
      backgroundImage: {
        paper:
          "radial-gradient(circle at top, rgba(185, 198, 190, 0.24), transparent 38%), linear-gradient(135deg, rgba(8, 27, 31, 0.05), transparent 45%)",
      },
    },
  },
  plugins: [],
};

export default config;
