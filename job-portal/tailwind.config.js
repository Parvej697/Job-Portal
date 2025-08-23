/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors :{
     'mine-shaft': {
    '50': '#f6f6f6',
    '100': '#e7e7e7',
    '200': '#d1d1d1',
    '300': '#b0b0b0',
    '400': '#888888',
    '500': '#6d6d6d',
    '600': '#5d5d5d',
    '700': '#4f4f4f',
    '800': '#454545',
    '900': '#3d3d3d',
    '950': '#2d2d2d',
},


'eucalyptus': {
    '50': '#f1f8f4',
    '100': '#dcefe3',
    '200': '#bbdfc9',
    '300': '#8fc6a9',
    '400': '#5fa884',
    '500': '#40916c',
    '600': '#2c6f52',
    '700': '#235943',
    '800': '#1e4736',
    '900': '#193b2e',
    '950': '#0d2119',
},


      }
    },
    screens: {
      'xsm': '350px',
      'xm': '476px',
      'sm': '640px',
      'md': '768px',
      'bs': '900px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',

     '2xl-mx':{ 'max': '1535px' },
     'xl-mx':{ 'max': '1279px' },
     'lg-mx':{ 'max': '1023px' },
     'bs-mx':{ 'max': '899px' },
     'md-mx':{ 'max': '767px' },
     'sm-mx':{ 'max': '639px' },
     'xs-mx':{ 'max': '475px' },
     'xsm-mx':{ 'max': '349px' },

  },
  plugins: [],
}

}