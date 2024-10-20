/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
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
          focus: 'rgba(212, 250, 237, 0.75)',
        },
        check: {
          disabledText: '#9E9E9E',
          disabledGray: '#EEEEEE',
          borderFocus: '#14E5C5',
        },
        primary: {
          hover: 'rgba(17, 97, 92, 0.75)',
          disabled: '#88B0AE',
          DEFAULT: '#11615C',
        },
        white: '#fff',
        alert: '#D81C1C',
        customGradient: 'rgba(212, 250, 237, 0.75)',
      },
    },
    animation: {
      'scale-in': 'elastic-scale-in 800ms ease 0s 1 normal forwards',
      'spin-in': 'elastic-spin-in 300ms ease 0s 1 normal forwards',
    },
    keyframes: {
      'elastic-scale-in': {
        '0%': {
          animationTimingFunction: 'ease-in',
          opacity: 0,
          transform: 'scale(0)',
        },

        '38%': {
          animationTimingFunction: 'ease-out',
          opacity: 1,
          transform: 'scale(0.2)',
        },

        '81%': {
          animationTimingFunction: 'ease-in',
          transform: 'scale(1.05)',
        },

        '90%': {
          animationTimingFunction: 'ease-out',
          transform: 'scale(0.95)',
        },

        '95%': {
          animationTimingFunction: 'ease-in',
          transform: 'scale(1.02)',
        },

        '100%': {
          animationTimingFunction: 'ease-out',
          transform: 'scale(1)',
        },
      },
      'elastic-spin-in': {
        '0%': {
          animationTimingFunction: 'ease-in',
          opacity: 0,
          transform: 'rotate(-90deg)',
        },

        '38%': {
          animationTimingFunction: 'ease-out',
          opacity: 1,
        },

        '81%': {
          animationTimingFunction: 'ease-in',
          transform: 'rotate(15deg)',
        },

        '90%': {
          animationTimingFunction: 'ease-out',
          transform: 'rotate(-5deg)',
        },

        '95%': {
          animationTimingFunction: 'ease-in',
          transform: 'rotate(3deg)',
        },

        '100%': {
          animationTimingFunction: 'ease-out',
          transform: 'rotate(0deg)',
          opacity: 1,
        },
      },
    },
  },
  plugins: [],
};
