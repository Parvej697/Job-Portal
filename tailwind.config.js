/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors :{
     'shiraz': {
    '50': '#fef2f2',
    '100': '#fee5e7',
    '200': '#fccfd3',
    '300': '#faa7b1',
    '400': '#f67687',
    '500': '#ed4660',
    '600': '#d92549',
    '700': '#b7193c',
    '800': '#a4193d',
    '900': '#841737',
    '950': '#490819',
},

'frangipani': {
    '50': '#fff7ed',
    '100': '#ffedd5',
    '200': '#ffdfb9',
    '300': '#ffbb72',
    '400': '#fd933a',
    '500': '#fc7513',
    '600': '#ed5909',
    '700': '#c4410a',
    '800': '#9c3410',
    '900': '#7d2d11',
    '950': '#441406',
},

      }
    },
  },
  plugins: [],
}

