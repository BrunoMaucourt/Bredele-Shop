/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./assets/**/*.js",
    "./templates/**/*.html.twig",
  ],
  theme: {
    extend: {
      colors: {
        'main-red-dark': '#77030d',
        'main-red': '#d1001a',
        'main-gold': '#e8c567',
        'main-brown': '#aa8244',
        'main-green': {
          DEFAULT: '#646e25',
          light: '#94d926',
        },
      },
      fontFamily: {
        'tangerine': ['tangerine', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

