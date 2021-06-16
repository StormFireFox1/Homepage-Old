module.exports = {
  mode: 'jit',
  purge: [
    './pages/*.{js,ts,jsx,tsx}',
    './pages/404.tsx',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
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
