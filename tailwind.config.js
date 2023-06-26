/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "primary": "#203659",
        "secundary": "#012f3c"
      },
      screens: {
        0: "0px"
      }
    },
  },
  plugins: [],
};
