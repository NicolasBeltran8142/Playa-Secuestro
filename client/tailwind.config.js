/* eslint-env node */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dashboard-bg': '#1a1f2e',
        'dashboard-red': '#e63946',
        'dashboard-blue': '#4361ee',
        'dashboard-green': '#2ec4b6',
        'dashboard-orange': '#f77f00',
        'dashboard-purple': '#7209b7',
      }
    },
  },
  plugins: [require("daisyui")],
}
