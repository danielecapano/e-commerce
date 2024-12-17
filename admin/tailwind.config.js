/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-gray": "#414141",
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
        prata: ["Prata", "serif"],
      },
      screens: {
        xs: "480px",
        ml: "900px",
      },
    },
  },
  plugins: [],
};
