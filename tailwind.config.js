/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Minecrafter:['Minecrafter'],
        Minecrafteralt:['Minecrafter-alt'],
        Minecraft:['Minecraft'],
      }
    },
  },
  plugins: [],
}

