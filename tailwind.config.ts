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
        midnight: "#0f1015",
        burgundy: "#330013",
        ruby: "#520016",
        graphite: "#1b1c21",
        champagne: "#f4d28a",
        oldgold: "#d8b25f",
      },
      fontFamily: {
        heading: ["Constantia", "Georgia", "serif"],
        body: ["var(--font-poppins)", "system-ui", "sans-serif"],
        logo: ["var(--font-cormorant)", "Georgia", "serif"],
      },
      boxShadow: {
        gold: "0 24px 80px rgba(224, 186, 102, 0.18)",
        crimson: "0 24px 80px rgba(82, 0, 22, 0.4)",
      },
      backgroundImage: {
        "gold-gradient":
          "linear-gradient(135deg, #e0ba66 0%, #feed93 24%, #d8b25f 48%, #f4d28a 72%, #fff9bc 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
