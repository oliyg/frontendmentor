const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      tablet: "768px",
      laptop: "1024px",
      desktop: "1440px",
    },
    extend: {
      colors: {
        black: "#050505",
        white: "#FFFFFF",
        purple: "#A445ED",
        red: "#FF5252",
        gray: {
          100: "#F4F4F4",
          200: "#E9E9E9",
          300: "#757575",
          400: "#3A3A3A",
          500: "#2D2D2D",
          600: "#1F1F1F",
        },
      },
      fontFamily: {
        sans: ["inter", ...defaultTheme.fontFamily.sans],
        serif: ["lora", ...defaultTheme.fontFamily.serif],
        mono: ["inconsolata", ...defaultTheme.fontFamily.mono],
      },
    },
    fontSize: {
      sm: [
        ".875rem" /* 14/16 */,
        {
          lineHeight: "1.0625rem" /* 17/16 */,
        },
      ],
      base: [
        "1.125rem" /* 18/16 */,
        {
          lineHeight: "1.5rem" /* 24/16 */,
        },
      ],
      lg: [
        "1.25rem" /* 20/16 */,
        {
          lineHeight: "1.5rem" /* 24/16 */,
        },
      ],
      xl: [
        "1.5rem" /* 24/16 */,
        {
          lineHeight: "1.8125rem" /* 29/16 */,
        },
      ],
      "2xl": [
        "4rem" /* 64/16 */,
        {
          lineHeight: "4.8125rem" /* 77/16 */,
        },
      ],
    },
  },
  plugins: [],
};
