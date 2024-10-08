import type { Config } from "tailwindcss";
const plugin = require("tailwindcss/plugin");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {},
      colors: {
        borderColor: "#1E2D3D",
        mainDivColor: "#011627",
        grad1: "rgba(67, 217, 173, 0.13)",
        grad2: "rgba(35, 123, 109, 1)",
        labelText: "#607B96",
      },
      screens: {
        pc: "1080px",
        mobile: "480px",
        // => @media (min-width: 640px) { ... }
      },
      keyframes: {
        slideUp: {
          "0%": { transform: "translateY(20%)" },
          "20%": { transform: "translateY(0)" },
        },
      },
      animation: {
        "slide-up": "slideUp 1s ease-out forwards",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }: { addUtilities: any }) {
      addUtilities({
        
        /* Hide scrollbar for Chrome, Safari and Opera */
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
        /* Hide scrollbar for IE, Edge and Firefox */
        ".no-scrollbar": {
          "-ms-overflow-style": "none" /* IE and Edge */,
          "scrollbar-width": "none" /* Firefox */,
        },
        '.transition-transform ':{
          'transition': 'transform 0.5s ease-in-out'
        }
        ,
        '.translate-y-full' :{
          'transform': 'translateY(100%)'
        }
        ,
        '.translate-y-0': {
          'transform': 'translateY(0%)'
        }
      });
    }),
  ],
};
export default config;
