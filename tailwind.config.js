/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    fontFamily: {
      'DM': ['DM Sans', 'sans-serif'],


    },

      animation: {
        marquee: 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },




      


    extend: {
      screens: {
        'max-1650': { 'max': '1650px' }, // custom screen
      },
      colors: {
        primary: ' #262626',
        ptext: '#767676',
        secondary: '#3750A3'

      },
    },
  },
  plugins: [],
}