/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#E50914",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
