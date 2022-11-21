/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('../public/images/bg-2.png')",
        'men':"url('../public/images/spring-3.jpg')",
        'men-mobile':"url('../public/images/spring-2.jpeg')",
        

      },
    },
  },
  plugins: [],
}
