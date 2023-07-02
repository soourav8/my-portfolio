/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        signature: ['agustina', 'sans-serif'],
       
      }
    },
  },
  plugins: [require("daisyui")],

}

