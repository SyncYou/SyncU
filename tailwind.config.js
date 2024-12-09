/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ash: "#F5F5FAB2",
        brand600: "#8333D0",
        gray100: "#F5F5FA",
        gray200: "#E6E6F0",
        gray300: "#D6D6E0",
        gray500: "#A6A6B5",
        gray700: "#73737F",
        gray900: "#40404D",
        gray950: "#2A2A33",
        success100: "#E7F9EE",
        success700: "#16BA52",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
