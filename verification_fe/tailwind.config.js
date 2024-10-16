/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        content: {
          default: '#212121',
          disabled: '#9E9E9E',
          hover: '#F5F5F5',
          focus: 'rgba(212, 250, 237, 0.75)'
        },
        check: {
          disabledText: '#9E9E9E',
          disabledGray: '#EEEEEE',
          borderFocus: '#14E5C5'
        },
        primary : {
          hover: 'rgba(17, 97, 92, 0.75)',
          disabled: '#88B0AE',
          DEFAULT: '#11615C'
        },
        white: '#fff',
        customGradient: 'rgba(212, 250, 237, 0.75)',
      }
    },
  },
  plugins: [],
}
