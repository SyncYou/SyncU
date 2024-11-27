/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary': '#8333D0',
      'secondary': '#2A2A33',
      'light': '#D6D6E0',
      'gray': '#5C5C66'
    },
    extend: {},
  },
  plugins: [],
}