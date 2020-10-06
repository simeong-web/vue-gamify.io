const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    container: {
      center: true
    },
    extend: {
      fontFamily: {
        'sans': ['Righteous', 'Sans-serif']
      },
      colors: {
        'primary': '#5E548E',
        'secondary': '#F24236',
        'secondary-light': '#32CD32',
        'default': '#FFF',
        'default-dark': '#DDD'
      }
    },
  },
  plugins: [
    require('@tailwindcss/ui'),
  ]
};