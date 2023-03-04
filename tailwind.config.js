/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html', './build/js/*.js'],

  theme: {
    extend: {
      keyframes: {
        menu: {
          '0%': { opacity: '0' },
          '50%': { opacity: '0.5' },
          '75%': { opacity: '0.7' },
          '100%': { opacity: '1' },
         
        },
      },
      animation: { menu: 'menu 0.9s ease-in-out' },
    },
  },
  plugins: [],
};
