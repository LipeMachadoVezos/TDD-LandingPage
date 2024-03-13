import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "header": "url('/backgrounds/header.png')",
        "aboutus": "url('/backgrounds/aboutus.png')",
        "features": "url('/backgrounds/features.png')",
      },
    },
  },
  plugins: [],
};
export default config;
