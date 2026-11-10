import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: { DEFAULT: "#a65e43", foreground: "#ffffff" },
        muted: { DEFAULT: "#f0eee8", foreground: "#77766f" },
        border: "#e9e5df",
      },
      fontFamily: { sans: ["var(--font-dm-sans)", "Arial", "sans-serif"], serif: ["var(--font-playfair)", "Georgia", "serif"] },
      boxShadow: { soft: "0 12px 35px rgba(38, 35, 30, .08)" },
    },
  },
  plugins: [],
};
export default config;
