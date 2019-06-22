// See default config https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
const rotate = {
  '.rotate-45deg': {
    transform: 'rotate(45deg)'
  },
  '.rotate-90deg': {
    transform: 'rotate(90deg)'
  },
  '.rotate-180deg': {
    transform: 'rotate(180deg)'
  }
}

module.exports = {
  theme: {
    fontFamily: {
      sans: ['Inter', 'Helvetica-neue', 'sans-serif']
    },
    extend: {}
  },
  variants: {},
  plugins: [
    function({ addUtilities }) {
      addUtilities(rotate)
    }
  ]
}
