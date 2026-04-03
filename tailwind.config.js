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
      },
      animation: {
        'gradient-x': 'gradient-x 3s ease infinite',
        'bounce-subtle': 'bounce-subtle 0.6s ease-out forwards',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        'bounce-subtle': {
          '0%': { transform: 'translate(-50%, 0) scale(0.8)', opacity: '0' },
          '50%': { transform: 'translate(-50%, -15px) scale(1.1)', opacity: '1' },
          '100%': { transform: 'translate(-50%, -10px) scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
