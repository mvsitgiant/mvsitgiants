/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lgfirstcolor: "#6EA7FC",
        lgsecondcolor: "#F1245B",
        hovlgfirstcolor: "#FFE2EA",
        hovlgsecondcolor: "#C5DCFF",
        navfontcolor: "#5D5C5C",
        hovnavfontcolor: "#F1245B",
      },
      fontFamily: {
        poppinsh: ["Poppins", "sans-serif"],
        rancho: ["Rancho", "cursive"],
      },
    },
  },
  plugins: [],
};
