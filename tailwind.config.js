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
        chooseUsCardBackground: "hsla(0, 0%, 80%, 0.05)",
        chooseUsCardBackgroundHover: "hsla(0, 0%, 100%, 0.1)",
        chooseUsCardBorder: "#82828240",
        navBarBackground: "",
      },
    },
  },
  plugins: [],
};
