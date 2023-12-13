/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // color 
      colors:{
        brightColor: "#AB6B3E",
        backgroundColor: "#FDE9CC",
        brandOne: "#AB6B2E",
        brandTwo: "#FFDCAB",
      },

      // boxShadow 
      boxShadow: {
        'shadowOne': '0 3px 10px rgb(0,0,0,0.2)',
        'shadowTwo': '0 20px 50px  rgba(8, 112, 184, 0.7)',
      },
    },
  },
  plugins: [],
}

