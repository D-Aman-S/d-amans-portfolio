import type { Config } from "tailwindcss";

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
    },
  },
  plugins: [],
};
export default config;
