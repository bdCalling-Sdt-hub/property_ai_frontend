/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#161D6F"
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(213.54deg, #E6E6F2 -6.27%, rgba(0, 0, 127, 0.35) 172.7%)',
      }
    },
  },
  plugins: [],
}