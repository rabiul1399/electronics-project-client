/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'bghero': "url('./src/images/XoDO.gif')",
       
      }
    },
  },
  plugins: [require("daisyui")],
}
