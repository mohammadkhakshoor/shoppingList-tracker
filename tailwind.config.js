/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgCard: "#2D3142",
        textGray: "#BFC0C0",
        custom: "#e5dada",
      },
    },
  },
  plugins: [],
};
