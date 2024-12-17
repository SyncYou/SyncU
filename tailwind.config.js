/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        alert: {
          600: "#F04848",
        },
        ash: "#F5F5FAB2",
        brand600: "#8333D0",
        brand400: "#A771E5",
        gray100: "#F5F5FA",
        gray200: "#E6E6F0",
        gray300: "#D6D6E0",
        gray400: "#BFBFCC",
        gray500: "#A6A6B5",
        gray700: "#73737F",
        gray800: "#5C5C66",
        gray900: "#40404D",
        gray950: "#2A2A33",
        success100: "#E7F9EE",
        success700: "#16BA52",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
