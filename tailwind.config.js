const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/*.html'],
  mode:'jit',
  darkMode:false,
  content: ["./src/**/*.{html,js}",'*.{html,js}'],
  // content: [],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins'],
     }
    },
  },
  plugins: [],
  variants:{
    extend:{}
  }
}
