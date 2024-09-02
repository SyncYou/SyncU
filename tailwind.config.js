/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "fbg": "var(--Neutral-n-white, #FFF)",
      "fb": "var(--Neutral-n-200, #E5E7EB)",
      "h2": "var(--Neutral-n-900, #111827)",
      "h4": "var(--Neutral-n-700, #374151)",
      "hr" : "#E5E7EB;",
      "or": "var(--Neutral-n-500, #6B7280)",
      "input": "var(--Neutral-n-50, #F9FAFB)",
      "email": "var(--Neutral-n-400, #9CA3AF)",
      "label": "var(--Neutral-n-800, #1F2937)",
      "changeColor": "var(--Primary-p-800, #672A9F)",
      "checkMark": "#15803D",
      "envelop": "var(--Blue-b-100, #DBEAFE)",
      "popUp": "#16A34A",
      "orange": "var(--Orange-o-100, #FFEDD5)",
      "darkBlue": "var(--Neutral-n-800, #1F2937)",
      stackHover: "#D1D5DB",
      red: "#f44336",
      gray: "#F3F4F6"
    },
    spacing: {
      "gap": "var(--8, 32px)",    
    },
    boxShadow: {
  "3xl" : "0px 1px 16px 0px rgba(100, 100, 100, 0.30)",
  'blg': "0 10px 15px -3px #16A34A, 0 4px 6px -2px #16A34A",
},
    fontFamily: {
  figtree: ["Figtree", "sans-serif"],
    },
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
