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
      '0%': { transform: 'translateX(0)' },
      '50%': {
        transform: 'translateX(7px)',
      },
      '100%': { transform: 'translateX(0)' },
    }, 
   moveRight: {
      '0%': { transform: 'translateX(0)' },
      '50%': {
        transform: 'translateX(-7px)',
      },
      '100%': { transform: 'translateX(0)' },
    },
  },
  animation: {
    moveLeft: 'moveLeft 3s linear infinite',
    moveRight: 'moveRight 3s linear infinite',
  },
      colors:{
        primary:'rgba(3, 4, 6, 1)',
        secondary:'#fa4f09',
        textFooter:'#fff',
        Fieldbg:'#F5F5F5'
      }
    },
  },
  plugins: [],
}

