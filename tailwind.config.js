/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        //For Hero Section
          float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
          
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
    float: 'float 4s ease-in-out infinite',
  },

      colors:{
        primary:'rgba(3, 4, 6, 1)',
        secondary:'#03ada4',
        cardbg:'#f6f6f6',
        textFooter:'#000',
        Fieldbg:'#F5F5F5'
      }
    },
  },
  plugins: [],
}

