/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
    moveLeft: {
      '100%': { transform: 'translateX(3.59586px)' },
    },
    moveRight: {
      '100%': { transform: 'translateX(-5.71733px)' },
    },
  },
  animation: {
    moveLeft: 'moveLeft 3s linear infinite',
    moveRight: 'moveRight 3s linear infinite',
  },
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

