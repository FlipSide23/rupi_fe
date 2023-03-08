/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },

    extend: {
      colors: {
        green: '008D41',
        current: 'currentColor',
        'grey-601': '#78847D',
        'green-401': '#A2BDAA',
        'dark-green': '#253D32',
        'gray-201': '#F3F5F6',
        'brand-green': '#008D41',
        'gray-301': '#F2F7FF',
      },
    },
  },
  plugins: [],
};
