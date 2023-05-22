/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      mobile: "375px",
      desktop: "1440px",
    },
    colors: {
      blue: {
        100: "hsl(206, 94%, 87%)",
        200: "hsl(228, 100%, 84%)",
        300: "hsl(243, 100%, 62%)",
        400: "hsl(213, 96%, 18%)",
      },
      red: "hsl(354, 84%, 57%)",
      gray: {
        100: "hsl(0, 0%, 100%)",
        200: "hsl(231, 100%, 99%)",
        300: "hsl(217, 100%, 97%)",
        400: "hsl(229, 24%, 87%)",
        500: "hsl(231, 11%, 63%)",
      },
    },
    fontSize: {
      sm: ["0.88rem", "1.01rem"],
      base: ["1rem", "1.15rem"],
      lg: ["1.25rem", "1.25rem"],
      xl: ["1.5rem", "1.72rem"],
      "2xl": ["2rem", "2.3rem"],
    },
    extend: {
      backgroundImage: {
        "nav-bg": "url('/images/nav-bg.svg')",
        "desktop-nav-bg": "url('/images/desktop-nav-bg.svg')",
      },
      boxShadow: {
        base: "0px 25px 40px -20px rgba(0, 0, 0, 0.0951141);",
      },
    },
  },
  plugins: [],
};
