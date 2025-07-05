/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'rgba(3, 4, 6, 1)',
        secondary:'#DB4444',
        textFooter:'#fff',
        Fieldbg:'#F5F5F5'
      }
    },
  },
  plugins: [],
}

