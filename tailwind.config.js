module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        orange: {
          '500': '#FF6413'
        }
      },
      fontFamily: {
        'raleway': ['Raleway', 'sans-serif'],
        'noto': ['"Noto Sans"', 'sans-serif'],
      }
    },
  },
  variants: {
    extend: {
      fontWeight: ['hover', 'focus', 'active'],
      borderWidth: ['hover', 'focus', 'active'],
      fontSize: ['hover', 'focus', 'active'],
      borderRadius: ['hover', 'focus', 'active'],
      fill: ['hover', 'focus', 'active'],
    },
  },
  plugins: [],
}
