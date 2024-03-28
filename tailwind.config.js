/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'light-gray': '#F0F0F0',
      'gray': '#F6F6F6',
      'dark-gray': '#A2A2A8',
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