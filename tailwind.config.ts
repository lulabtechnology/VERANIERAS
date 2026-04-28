import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F1E5D2",
        sand: "#E4CDA9",
        ivory: "#FBF5EA",
        verde: "#0F5A3A",
        verde2: "#174732",
        gold: "#B79552",
        coral: "#CF5A3A",
        turquoise: "#2CA6A4",
        coffee: "#3A2A20"
      },
      fontFamily: {
        display: ["Arapey", "Georgia", "serif"],
        body: ["Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        soft: "0 22px 70px rgba(58, 42, 32, 0.14)",
        green: "0 22px 60px rgba(15, 90, 58, 0.28)"
      },
      backgroundImage: {
        grain: "radial-gradient(circle at 1px 1px, rgba(58,42,32,.09) 1px, transparent 0)"
      }
    },
  },
  plugins: [],
};

export default config;
