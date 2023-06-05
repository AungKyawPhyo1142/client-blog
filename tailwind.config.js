// /** @type {import('tailwindcss').Config} */
// export const content = ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'];
// export const theme = {
//   extend: {},
//   daisyui: {
//     themes: ["light", "dark","night","synthwave"],
//   },

// };
// // eslint-disable-next-line no-undef
// export const plugins = [require("daisyui")];


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.html', 
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
    },

  },
  plugins: [
    require('daisyui')
  ],
  daisyui:{
    themes:["light","synthwave","luxury"]
  }
}

