/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgBtn: "#fedee2",
        bgBtnHover: "#fb6a7d",
        textGray: "#BFC0C0",
        custom: "#e5dada",
      },
    },
  },
  plugins: [],
};
