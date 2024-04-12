/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      white: '#fefefe',
      black: '#222',
      bgcolor: '#fdfcf9',
      sand: '##fcf6ec',
      primary: {
        50: '#edecfd',
        100: '#cac5f8',
        200: '#a79ef4',
        300: '#8377ef',
        400: '#6050ea',
        500: '#4e3de8',
        600: '#4637d1',
        700: '#372ba2',
        800: '#271f74',
        900: '#171246',
      },
      secondary: {
        300: '#fff397',
      },
      grey: {
        50: '#fefefe',
        100: '#ebebeb',
        200: '#c2c2c2',
        300: '#9a9a9a',
        400: '#717171',
        500: '#484848',
        600: '#343434',
        700: '#2a2a2a',
        800: '#1f1f1f',
        900: '#101010',
      },
    },

    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        13: 'repeat(13, minmax(0, 1fr))',
      },
    },
  },
  plugins: [],
};
