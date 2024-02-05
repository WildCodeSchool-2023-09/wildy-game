/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        color: {
          first: "#920075",
          second: "#f9c80e",
          shop1: "#f36d84",
          shop2: "#3d2579",
          neutral: "#bbbbbb",
        },
      },
      fontFamily: {
        mont: ["Montserrat"],
      },
    },
  },
  plugins: [],
};
