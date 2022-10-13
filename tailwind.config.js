/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'top-background':"url('/images/sample/back_1.webp'),url('/images/background/background1.webp')"
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["cmyk", "night"],
  }
}

