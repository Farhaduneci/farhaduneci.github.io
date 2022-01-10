module.exports = {
  content: [
    './site/**/*.{html,js,md}'
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    fontFamily: {
      'roboto': ['Roboto Slab', 'sans-serif', 'serif'],
    },
    letterSpacing: {
      wide: '5px',
    },
    extend: {
      backgroundImage: {
        'pattern': 'url("/assets/images/Bg.svg")',
        'card-pattern': "linear-gradient(to top, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url('/assets/images/CardBg.svg')",
      },
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
