const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
    },
    extend: {
      fontFamily: {
        'montserrat': 'Montserrat'
      }
    },
    spacing: {
      "610": '610px',
      "300": '300px',
      "66": '66px',
      "24": '24px',
      "05": '0.5px',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
