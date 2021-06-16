module.exports = {
  mode: 'jit',
  purge: [
    './pages/*.tsx',
    './pages/**/*.tsx',
    './components/*.tsx',
    './components/**/*.tsx',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        exo: ['Exo', 'ui-sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
