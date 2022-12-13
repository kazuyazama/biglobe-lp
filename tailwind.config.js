/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        // 'top-background':"url('/images/background/stylish-blue.png'),url('/images/background/simple-sky-blue.webp')" 
        // 'top-background': "url('/images/background/22910713.png'),url('/images/background/23070528.jpg')" 
        // 'top-background': "url('/images/background/23150182.png')"  
        // 'top-background': "url('/images/background/23057452.png')"  
        'top-background': "url('/main/top/background-mainVisual.jpg')"  
      }    
    },fontFamily: {
      NotoSans: ["Noto Sans JP","ヒラギノ角ゴシック","Hiragino Sans","Hiragino Kaku Gothic ProN","ヒラギノ角ゴ ProN W3","メイリオ","Meiryo","sans-serif"],
    }
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["cmyk", "night"],
  }
}

