/* eslint-disable global-require */
// const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      // fontFamily: {
      //   sans: ['Inter', ...defaultTheme.fontFamily.sans],
      // },
      // // referenced from https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/defaultConfig.stub.js#L318-L332
      // fontSize: {
      //   xs: ['0.75rem', { lineHeight: '1rem',  }],
      //   sm: ['0.875rem', { lineHeight: '1.25rem' }],
      //   base: ['1rem', { lineHeight: '1.5rem' }],
      //   lg: ['1.125rem', { lineHeight: '1.75rem' }],
      //   xl: ['1.25rem', { lineHeight: '1.75rem' }],
      //   '2xl': ['1.5rem', { lineHeight: '2rem' }],
      //   '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      //   '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      //   '5xl': ['3rem', { lineHeight: '1' }],
      //   '6xl': ['3.75rem', { lineHeight: '1' }],
      //   '7xl': ['4.5rem', { lineHeight: '1' }],
      //   '8xl': ['6rem', { lineHeight: '1' }],
      //   '9xl': ['8rem', { lineHeight: '1' }],
      // },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-font-inter'),
  ],
};
