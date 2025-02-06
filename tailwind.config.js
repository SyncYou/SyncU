/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", './node_modules/oasis-toast/**/*.{js,ts,jsx,tsx}' ],

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
        logo: "  #2A2A33",
        white: "#FFF",
        pink: "#F77FED",
        primary: "#8333D0",
        secondary: "#40404D",
        "brand-400": "#A771E5",
        "brand-500": "#8F4BDD",
        "brand-600": "#7F56D9",
        "gray-100": "#F5F5FA",
        "gray-200": "#E6E6F0",
        "gray-300": "#D6D6E0",
        "gray-400": "#BFBFCC",
        "gray-950": "#2A2A33",
        "gray-800": "#5C5C66",
        "gray-600": "#8C8C99",
        clicked: "rgba(237, 228, 250, 0.50)",
        skill: "#F3ECFC",
        loading: "rgba(18, 18, 18, 0.24)",
      },
      boxShadow: {
        rightShadow:
          "0px 13px 4px 0px rgba(105, 105, 105, 0.00), 0px 8px 3px 0px rgba(105, 105, 105, 0.01), 0px 5px 3px 0px rgba(105, 105, 105, 0.05), 0px 2px 2px 0px rgba(105, 105, 105, 0.09), 0px 1px 1px 0px rgba(105, 105, 105, 0.10)",
        smallBox:
          "0px 0px 6px 0px rgba(102, 102, 102, 0.00), 0px 0px 5px 0px rgba(102, 102, 102, 0.01), 0px 0px 5px 0px rgba(102, 102, 102, 0.05), 0px 0px 3px 0px rgba(102, 102, 102, 0.09), 0px 0px 2px 0px rgba(102, 102, 102, 0.10)",
        xs: "0px 0px 6px 0px rgba(43, 43, 43, 0.00), 0px 0px 5px 0px rgba(43, 43, 43, 0.01), 0px 0px 5px 0px rgba(43, 43, 43, 0.05), 0px 0px 3px 0px rgba(43, 43, 43, 0.09), 0px 0px 2px 0px rgba(43, 43, 43, 0.10)",
        "active-state": "0px 0px 1px 3px #EDE4FA",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
