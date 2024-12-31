/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        dark: "#131313",
        orange: "#F1A253",
      },
      fontFamily: {
        primary: ['"Libre Baskerville"', "serif"], // Primary heading
        secondary: ['Montserrat', "sans-serif"],   // Secondary heading
        bodytext: ['Quicksand', "sans-serif"],  
      },
    },
  },
  plugins: [],
};
