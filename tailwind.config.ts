import type { Config } from "tailwindcss";
import daisyui from "daisyui";

const config: Config = {
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#5a00c2",

          secondary: "#1E244E",

          accent: "#ffaa00",

          neutral: "#00031F",

          "base-100": "#9ca3af",

          info: "#ffaa00",

          success: "hsl(94, 100%, 49%)",

          warning: "#f59e0b",

          error: "#ef4444",
        },
      },
    ],
  },
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "rowdy-light-blue": "#282F44",
        "rowdy-blue": "#191D32",
        "rowdy-orange": "#f5740a",
      },
      fontFamily: {
        orbitron: ["var(--font-orbitron)"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), daisyui],
};
export default config;
