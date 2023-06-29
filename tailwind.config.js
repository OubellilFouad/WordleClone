/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        main: '#d69f7e',
        secondary: '#a4ac86'
      }
    },
  },
  plugins: [],
}

