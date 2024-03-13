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
        main: {
          1: "#F1E3B5",
          2: "#0B0436",
          3: "#00DDFF",
        },
        backgroundImage: {
          bgfull: "url('../public/environment1.png')",
        },
      },
    },
  },
  plugins: [],
};
export default config;
