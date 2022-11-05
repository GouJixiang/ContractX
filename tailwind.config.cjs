/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/*/*.{vue, ts}', './src/*/*/*.{vue, ts}'],
  theme: {
    extend: {
      backgroundImage: {
        'login-bg': "url('./src/assets/login.jpg')",
      },
    },
  },
  plugins: [],
}
