/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        palanquin: ['Palanquin Dark', 'sans-serif'],
      },
      colors: {
        pail_navy: '#0b122a',
        pail_tan: "#feedcd",
        pail_cream: "#fefef3",
        pail_blue: "#3a68ca",
        pail_green: "#14796e",
        pail_red: "#eb0d05",
      }
    },
  },
  plugins: [],
}