/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'gray': '#F6F6F6',
      'white': '#ffffff',
      'black': '#262636',
      'red': '#FF404B',
      'green': '#00B627',
      'dark-green': '#0C9E12',
      'light-yellow': '#FFF2DF'
    },
    fontFamily: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    }
  },
  plugins: [],
}