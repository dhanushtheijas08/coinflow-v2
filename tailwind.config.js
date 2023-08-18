/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      grotesk: ["Space Grotesk", "sans-serif"],
    },

    extend: {
      colors: {
        primary: "#0f051d;",
        chooseUsCardBackground: "#ffffff0d",
        chooseUsCardBorder: "#82828240",
      },
    },
  },
  plugins: [],
};
