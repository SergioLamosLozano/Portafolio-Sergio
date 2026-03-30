/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        portfolio: {
          white: "#F8FAFC",
          light: "#FFFFFF",
          green: {
            light: "#A7F3D0",
            DEFAULT: "#10B981",
            dark: "#047857"
          },
          magenta: {
            light: "#F9A8D4",
            DEFAULT: "#DB2777",
            dark: "#9D174D"
          },
          dark: "#0F172A",
          darker: "#020617",
        }
      }
    },
  },
  plugins: [],
}
