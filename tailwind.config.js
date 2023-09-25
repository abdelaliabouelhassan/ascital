/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      fontFamily:{
        'maven-pro':['Maven Pro', 'sans-serif'],
        'inter':['Inter','sans-serif']
      },
      colors:{
        'verde-ascital':'#CFD61C'
      }
    },
  },
  plugins: [],
}

