/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        // 'top-background':"url('/images/sample/back_1.webp'),url('/images/background/background1.webp')"
        // 'top-background':"url('/images/background/stylish-blue.png'),url('/images/background/simple-sky-blue.webp')" 
        'top-background': "url('/images/background/22910713.png'),url('/images/background/23070528.jpg')" 
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["cmyk", "night"],
  }
}

