/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#2E7D32',
          blue: '#1565C0',
          gold: '#D4AF37',
        }
      }
    },
  },
  plugins: [],
}