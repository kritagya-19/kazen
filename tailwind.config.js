/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'kazen-black': '#0a0a0a',
        'kazen-gold': '#d4af37',
        'kazen-white': '#f5f5f0',
        'kazen-gray': '#1c1c1c',
        'kazen-sand': '#e5e0d8',
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
        display: ['"Cinzel"', 'serif'],
      }
    },
  },
  plugins: [],
}
