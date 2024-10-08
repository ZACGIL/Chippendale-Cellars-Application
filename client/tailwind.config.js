/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'title': [ "Gravitas One", "san-serif"],
        'subtitle': [ "Playwrite AU TAS", "san-serif"],
        'body': [ "Philosopher", "san-serif"]
      },
    }
  },
  plugins: []
}
