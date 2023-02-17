/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors :{
        darkblue: '#1A1D28',
        lightblue: '#E5E5F9',
        lightgray: '#F5F5F5',
        darkgray: '#6B7280',
        white: '#FFFFFF',
      }
    },
  },
  plugins: [],
}
