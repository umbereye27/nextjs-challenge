import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['CustomFont', 'sans'], // Custom font configuration
      },
      colors: {
        "bg-black-100": "#2B2C35", // Custom color definition
        primary: "hsl(14, 86%, 42%)", // Primary color
        rose: "hsl(20, 50%, 98%)", // Rose color
        secondary: "hsl(12, 20%, 44%)", // Secondary color
      },
    },
  },
  plugins: [] // No additional plugins specified
};

export default config;
