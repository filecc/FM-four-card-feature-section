/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{html,js}',
    './pages/**/*.{html,js}',
    './index.html',
  ],
  theme: {
    extend: {
      colors: {
        
      },
      fontFamily: {
        poppins: 'Poppins',
      },
      fontWeight: {
        'extra-light': 200
      }
    },
  },
  plugins: [require('prettier-plugin-tailwindcss')],
}