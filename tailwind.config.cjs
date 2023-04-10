/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      }
    },
    colors: {
      // primary orange color
      'primary': '#eb5e28',
      'secondary':'#252422',
      'tertiary': '#403d39',
      'primary-bg': '#F7F7F7',
      'secondary-bg': '#FFFFFF',
      'red': '#d90429',
      'white': '#FFFFFF'
    },
    screens: {
      'xl': {'max': '1920px'},
      'large': {'max': '1366px'},
      'md': {'max': '768px' },
      'sm': {'max': '520px'},
    },

  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
}

