import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Custom V.Service color palette
        'v-dark': '#0F2D58',      // Dark blue for primary elements
        'v-light': '#1059C4',      // Light blue for secondary elements
        'v-faded': '#F8F8F8',      // Light faded white for backgrounds
        'v-grey': '#ADADAD',        // Grey for footer and quote sections
        'v-white': '#FFFFFF',        // Clear normal white
      },
    },
  },
  plugins: [],
};
export default config;
