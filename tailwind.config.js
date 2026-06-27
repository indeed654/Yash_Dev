/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: { fontSize: { hero: 'clamp(2rem,5vw,4.5rem)' } },
  },
  plugins: [],
}
