/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      zIndex: {
        '-10': '-10',
        '-2': '-2',
        '-1': '-1',
      },
    },
  },
  plugins: [],
}