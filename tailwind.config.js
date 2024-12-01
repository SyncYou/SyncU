/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ash: "#F5F5FAB2",
        gray100: "#F5F5FA",
        gray200: "#E6E6F0",
        gray300: "#D6D6E0",
        gray700: "#73737F",
        gray950: "#2A2A33",
      },
    },
  },
  plugins: [],
};
