/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      "./src/*.{js,jsx,ts,tsx}"
    ],
    theme: {
    colors: {
        transparent: 'transparent',
        black: '#000',
        white: '#fff',
        primary: {
            white: '#ffff',
            pure: '#80B4C9',
            low: '#C0DAE4',
            medium: '#006992',
            high: '#001D4A'
        }
    },
      extend: {},
    },
    plugins: [],
  }