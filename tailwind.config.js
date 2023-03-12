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
        green: '#008D41',
        current: 'currentColor',
        'grey-601': '#78847D',
        'green-401': '#A2BDAA',
        'dark-green': '#253D32',
        'gray-201': '#F3F5F6',
        'brand-green': '#008D41',
        'gray-301': '#F2F7FF',
        'green-802': '#2D2E2E',
        'green-702': '#3A4F39',
        'gray-101': '#ABABAB',
        'gray-302': '#DEDEDE',
        'gray-401': '#F6F6F6',
         blue: '#4A3AFF',
      },
    },
  },
  plugins: [],
};
