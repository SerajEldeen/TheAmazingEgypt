import { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        dancing: ['"Dancing Script"', "cursive"],
      },
      animation: {
        slideIn: "slideIn 0.7s ease-out forwards",
      },
      colors: {
        primary: "#f59e0b",
        secondary: "#6b7280",
      },
      keyframes: {
        slideIn: {
          "0%": { opacity: "0", transform: "translateX(-50px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
