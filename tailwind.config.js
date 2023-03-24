/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        iconblue:'#1dade3',
        textgreen:"#91c52e",
        btncolor:'#6156a3',
        grey:"#666666"
      }
    },
  },
  plugins: [],
}