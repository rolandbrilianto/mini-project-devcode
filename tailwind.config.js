/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-blue": "#16ABF8",
      },
      boxShadow: {
        "main-box": "0px 6px 10px 0px #0000001A",
      },
    },
  },
  plugins: [],
};
