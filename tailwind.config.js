const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      amber: colors.amber,
      orange: colors.orange,
    },
    extend: {},
    spacing: {
      "500": '500px',
      "280": '280px',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
