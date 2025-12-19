import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {},
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        ChakraPetch: ["ChakraPetch", "sans-serif"],
        ChakraSemibold: ["chakrasemibold"],
        Exo: ["Exo", "sans-serif"],
        Urbanist: ["Urbanist", "sans-serif"],
      },
      container: {
        padding: "20px",
        center: true,
      },
      backgroundImage: {
        HeroBg: "url('/assets/hero-bg.png')",
        NavBg: "url('/assets/nav-bg.png')",
        DappNavBg: "url('/assets/dapp-bg.png')",
        TokenomicsBg: "url('/assets/tokenomics-bg.png')",
        TokenomicsBg2: "url('/assets/tokenomics-bg2.png')",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
