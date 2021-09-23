module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        'foof': '#fffaeb',
      },
      boxShadow: {
        'inner-more': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      },
      colors: {
        gold: '#cfb87c',
        'muted-gold': '#f4ead0',
        'cu-gray': '#C6C8C9',
      },
      width: {
        pro: '768px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
