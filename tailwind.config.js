module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gold: '#cfb87c',
        'muted-gold': '#f4ead0',
        'cu-gray': '#C6C8C9',
      },
      width: {
        'medium': '768px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
