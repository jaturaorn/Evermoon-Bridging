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
      },
      backgroundImage: {
        bgfull: "url('../public/environment1.png')",
      },
      screens: {
        xsm: "400px",
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1440px",
        // => @media (min-width: 1536px) { ... }
        "3xl": "1921px",
        // => @media (min-width: 1536px) { ... }
        "2xlm": { max: "1439px" },
        // => @media (max-width: 1535px) { ... }

        xlm: { max: "1279px" },
        // => @media (max-width: 1279px) { ... }

        lgm: { max: "1023px" },
        // => @media (max-width: 1023px) { ... }

        mdm: { max: "767px" },
        // => @media (max-width: 767px) { ... }

        smm: { max: "639px" },
        // => @media (max-width: 639px) { ... }
        xsmm: { max: "374px" },
        pr: { max: "816px" },
      },
    },
  },
  plugins: [],
};
export default config;
