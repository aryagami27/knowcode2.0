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
      },
      backgroundImage:{
        'leave':"url('/leaves.png')",
        'passage':"url('/Unground passage.png')",
        'hotbar':"url('/hotbar.png')",
        'scrolls':"url('/about section.png')",
      }
    },
  },
  plugins: [],
}

