/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        baloo: ['Baloo', 'sans-serif'],
        poppins: ['Poppins'],
      },

      colors: {
        Button1: "#B28E0D",
        Abu_Abu: "#E6E6E6",
        React: "#61DAFB",
        Bootstrapp: "#7711F8",
        HTML: "#EF652A",
        Tailwind: "#06B6D4",
        Wordpress: "#006A99",
        CSS: "#0277BD",
        Card: "#D9D9D9"
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
