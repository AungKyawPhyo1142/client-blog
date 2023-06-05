/** @type {import('tailwindcss').Config} */
export const content = ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'];
export const theme = {
  extend: {},
};
// eslint-disable-next-line no-undef
export const plugins = [require("daisyui")];

