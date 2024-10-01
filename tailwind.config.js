/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bkg: {
          light: "hsl(200, 20%, 99%)",
          dark: "hsl(200, 10%, 25%)",
        },
        content: {
          light: "hsl(200, 20%, 92%)",
          dark: "hsl(200, 5%, 35%)",
        },
        accent1: {
          light: "hsl(200, 100%, 10%)",
          dark: "hsl(200, 15%, 75%)",
        },
        accent2: {
          light: "hsl(200, 30%, 30%)",
          dark: "hsl(200, 10%, 61%)",
        },
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}