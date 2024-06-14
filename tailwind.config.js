/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        13: 'repeat(13, minmax(0, 1fr))',
      },
      fontFamily: {
        poppins: ['Poppins', ...defaultTheme.fontFamily.sans],
        title: ['Fjalla One', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        black: '#0b0b0c',
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        '.btn': {
          padding: '.625rem 1.25rem',
          borderRadius: '.375rem',
          fontWeight: '500',
          lineHeight: '1',
          transitionProperty: 'all',
          transitionDuration: '150ms',
          transitionTimingFunction: 'cubic-bezier(0.4, 0, 1, 1)',
        },
        '.btn-primary': {
          backgroundColor: '#33332e',
          color: '#f5f5f5',
          '&:hover': {
            backgroundColor: '#888679',
          },
        },
        '.btn-ghost': {
          backgroundColor: 'transparent',
          border: '1px solid #aaa89e',
          color: '#6d6b5f',
          '&:hover': {
            border: '1px solid #3b3a34',
            color: '#0f0f0d',
          },
        },
        '.btn-white': {
          backgroundColor: '#f5f5f5',
          color: '##888679',
          '&:hover': {
            backgroundColor: '#e5e5e2',
          },
        },
        '.shadow-navbar': {
          fill: '#FAFAFA',
          filter:
            'drop-shadow(1px 1px 2px rgba(97, 97, 97, 0.10)) drop-shadow(2px 3px 4px rgba(97, 97, 97, 0.09)) drop-shadow(5px 7px 5px rgba(97, 97, 97, 0.05)) drop-shadow(9px 13px 6px rgba(97, 97, 97, 0.01)) drop-shadow(14px 20px 7px rgba(97, 97, 97, 0.00))',
        },
        '.shadow-category': {
          boxShadow:
            '23px 45px 14px 0px rgba(18, 18, 18, 0.00), 15px 29px 13px 0px rgba(18, 18, 18, 0.01), 8px 16px 11px 0px rgba(18, 18, 18, 0.05), 4px 7px 8px 0px rgba(18, 18, 18, 0.09), 1px 2px 4px 0px rgba(18, 18, 18, 0.10)',
        },
        '.shadow-footer': {
          boxShadow:
            '43px 73px 24px 0px rgba(173, 173, 173, 0.00), 27px 47px 22px 0px rgba(173, 173, 173, 0.01), 15px 26px 18px 0px rgba(173, 173, 173, 0.05), 7px 12px 14px 0px rgba(173, 173, 173, 0.09), 2px 3px 7px 0px rgba(173, 173, 173, 0.10);',
        },
      });
    }),
  ],
};
