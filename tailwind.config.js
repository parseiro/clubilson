/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./**/*.{html,js}", "node_modules/flowbite/**/*.js"],
  theme: {
    extend: { fontFamily: {
      'sans': ['Open Sans', ...defaultTheme.fontFamily.sans]
      } },
    fontFamily: {
      display: ["Oswald", "sans-serif"],
    },
  },
  plugins: [require("@tailwindcss/typography"), require("flowbite/plugin")],
};
