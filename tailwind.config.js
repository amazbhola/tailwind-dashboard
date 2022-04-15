const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/*.html'],
  mode:'jit',
  darkMode:'class',
  content: ["./src/**/*.{html,js}",'*.{html,js}'],
  // content: [],
  theme: {
    extend: {
      fontFamily: {
        poppins:""
     }
    },
  },
  plugins: [],
  variants:{
    extend:{}
  }
}
