/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'mont-font': ['Montserrat', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [require('tailwindcss-motion')],
}

