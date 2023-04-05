/** @type {import('tailwindcss').Config} */
module.exports = {
  // purge: ["./src/**/*.{jsx,tsx}", "../../shared/atoms/**/*.{jsx,tsx}"],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      xs: "320px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    fontSize: {
      sm: "12px",
      base: "14px",
      lg: "16px",
      xl: "20px",
      "2xl": "24px",
      "3xl": "28px",
      "4xl": "32px",
    },
    fontWeight: {
      headline: 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      "extra-bold": 800,
      black: 900,
    },
    extend: {
      fontFamily: {
        Rampart: ["Roboto", "sans-serif"],
      },
      colors: {
        gray: {
          white: "#F7F8FA",
          light: "#DCDFE3",
          DEFAULT: "#8B8D94",
          deep: "#65666B",
          dark: "#3A3B40",
        },
        black: {
          DEFAULT: "#000",
        },
      },
      dropShadow: {
        sm: "0 2px 4px rgb(0 0 0 / 0.04)",
        DEFAULT: [
          "0px 1px 2px rgba(0, 0, 0, 0.02)",
          "0px 4px 16px rgba(0, 0, 0, 0.1)",
        ],
        lg: "0px 2px 4px rgba(0, 0, 0, 0.1)",
        xl: "0px 4px 6px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
};
