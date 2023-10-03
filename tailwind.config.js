/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bgBtn: "#fedee2",
        bgBtnHover: "#fb6a7d",
        textGray: "#BFC0C0",
        addBtn: "#cf3c61",
        custom: "#e5dada",
        darkInputBackground: "#4444",
      },
      backgroundImage: {
        lightMode: "url('../src/assets/images/bgc-light.svg')",
        darkMode: "url('../src/assets/images/bgc-dark.svg')",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
