/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        semiBlack: "#111111",
        semiGray: "#5F5F5F",
        blackText: "#333333", // text color for white background
        almostGray: "#767676",
        green: {
          100: "#5FFF65",
          200: "#00F60A",
        },
        darkGreen: "#024731",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      fontSize: {
        "2xs": "0.5rem",
        "3xs": "0.25rem",
      },
    },
  },
  plugins: [],
};
