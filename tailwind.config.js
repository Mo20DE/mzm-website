
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: { 
        'tu-berlin-red': 'rgb(220, 15, 31)',
        'tu-berlin-red-hover': 'rgb(206, 71, 71)',
      },

      keyframes: {
        // keyframes for slide down and slide up
        slideDown: {
          '0%': {transform: 'translateY(-5%)', opacity: 0},
          '100%': {transform: 'translateY(0)', opacity: 1},
        },
        slideUp: {
          '0%': {transform: 'translateY(0)', opacity: 1},
          '100%': {transform: 'translateY(-5%)', opacity: 0},
        },

        handMovement: {
          '0%': {transform: 'rotate(-5deg)'},
          '100%': {transform: 'rotate(15deg)'}
        }
      },
      animation: {
        // animation for slide down and slide up
        slideDown: 'slideDown 0.3s ease-in-out forwards',
        slideUp: 'slideUp 0.3s ease-in-out forwards',

        handMovement: 'handMovement 2s ease-in-out infinite alternate'
      },
    },
  },
  plugins: [],
}

