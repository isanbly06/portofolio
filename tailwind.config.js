/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FFFFFF',
        accent: {
          DEFAULT: '#F1B24A',
          hover: '#e2a033',
          light: '#fdf7eb',
        },
        primary: {
          DEFAULT: '#164A41',
          dark: '#0e342e',
          light: '#216257',
        },
        secondary: {
          DEFAULT: '#4D774E',
          light: '#659766',
          dark: '#395b3a',
        },
        soft: {
          DEFAULT: '#9DC88D',
          light: '#eef6ea',
          dark: '#82b570',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'soft-sm': '0 2px 8px -2px rgba(22, 74, 65, 0.08)',
        'soft-md': '0 4px 20px -4px rgba(22, 74, 65, 0.12)',
        'soft-lg': '0 10px 30px -5px rgba(22, 74, 65, 0.16)',
      }
    },
  },
  plugins: [],
}
