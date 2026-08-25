/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: '#EDE9DF',
        canvas: '#F5F1E8',
        limestone: '#B9B3A6',
        rock: '#77756E',
        graphite: '#292A27',
        summit: '#151715',
        forest: '#36453A',
        moss: '#727D62',
        clay: '#9B6248',
        rust: '#B75E3F',
        signal: '#D86A3E',
        fire: '#C67A48',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'Archivo', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
