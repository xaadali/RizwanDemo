/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        primary: "Avenir",
      },
      keyframes: {
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        }
      },
      animation: {
        'fade-in-down': 'fade-in-down 0.6s ease-out'
      }
    },
    container: {
      center: true,
    },
    colors: {
      mustered100: '#D7D7D7',
      mustered400: '#eba04b',
      mustered600: '#FB8700',
      white100: '#F1F7FB',
      white: '#FFFFFF',
      black200: '#828282',
      black300: '#333333',
      black700: '#000',
      red100: '#f7dfe0',
      red: '#ff0000',
      aquaBg: '#AECEE7',
      gray100 : '#D9D9D9',
      gray300: '#D6D6D6',
      gray700: '#7B7B7B',
      gray200: '#F3F3F3',
      borderGray: '#686868',
      borderLight: '#F9F9F9',
      blue100: '#b4d2f3',
      blue500: '#54b4f0',
      blue600: '#0095F5',
      green200: '#e9f7ec',
      green400: '#41e0ae',
      gradientFrom1: '#E9DEFA',
      gradientTo1: '#FBFCDB',
      gradientFrom2: '#E3FDF5',
      gradientTo2: '#FFE6FA',
      gradientFrom3: '#FFF1EB',
      gradientTo3: '#ACE0F9',

      inputPlaceholderText: '#C9C9C9',
      inputBorder: '#AEAEAE',
      lineBg: '#EDEDED',

      test: '#C9C9C9',
    },
  },
  plugins: [
    require("daisyui"),
    require('tailwind-scrollbar-hide'),
    require('tailwindcss-animated')
  ],
}
