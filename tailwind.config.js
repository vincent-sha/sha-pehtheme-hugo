/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './layouts/**/*.html',
    './assets/**/*.{css,js}',
    './exampleSite/**/*.{html,js}'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
