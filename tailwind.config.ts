import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark brand palette
        primary: "#4A60F6", // GrowthLoop blue
        secondary: "#00C894", // growth green accent
        accent: "#00C894",
        background: "#020617", // near-black background
        surface: "#020617", // base surface, can be overridden per component
        surfaceElevated: "#020617", // placeholder for elevated surfaces
        heading: "#F9FAFB", // primary text
        body: "#9CA3AF", // secondary text
        borderSubtle: "#1F2937",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
