module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      DEFAULT: '15px',
      'md': '25.5px',
      'lg': '45px',
      'full': '9999px',
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    fontSize: {
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['21px', '31px'],
      xl: ['24px', '32px'],
      '2xl': ['1.94vw', '2.639vw'],
      '3xl': ['2.64vh', '3.33vh'],
      '4xl': ['3.47vh', '4.44vh'],
      '5xl': ['4.58vh', '5.347vh'],
      '28': ['28px', '38px'],
      '38': ['38px', '48px'],
      '50': ['50px', '64px'],
      '66': ['66px', '77px'],
    },
    screens: {
      sm: '479px',
      md: '719px',
      lg: '1023px',
      xl: '1279px',
    },
    extend: {
      boxShadow: {
        'inner-more': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      },
      colors: {
        gold: '#cfb87c',
        'muted-gold': '#f4ead0',
        'cu-gray': '#C6C8C9',
        'light-yellow': '#F5F1E5',
        'light-gray': '#363636',
        'medium-gray': '#7C7E7F',
        'light-teal': '#4BB6AE',
        'dark-teal': '#065E62',
      },
      width: {
        medium: '719px',
        '90vw': '90vw',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
