// tailwind.config.js
module.exports = {
  darkMode: 'class',
  content: [
    './layouts/**/*.html',
    './content/**/*.md',
    './static/js/**/*.js',
    './assets/js/**/*.js',
  ],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'), 
  ],
}
