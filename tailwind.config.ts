import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        utama: {
          blue: "#0055B8",
          red: "#CF3339",
          yellow: "#FFDD00",
          ink: "#111111",
          soft: "#F7F8FB",
        },
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Outfit", "sans-serif"],
        body: ["var(--font-body)", "Poppins", "sans-serif"],
      },
      boxShadow: {
        soft: "0 24px 80px rgba(0, 0, 0, 0.10)",
        card: "0 16px 48px rgba(0, 85, 184, 0.10)",
      },
    },
  },
  plugins: [],
};

export default config;
