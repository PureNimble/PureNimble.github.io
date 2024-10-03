/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        customGray: '#cfcfcf',
        customGrayDark: '#4A4A4A',
        offWhite: '#F0F0F0',
        bkg: {
          light: "hsl(200, 20%, 99%)",
          dark: "hsl(200, 10%, 25%)"
        },
        content: {
          light: "hsl(200, 20%, 92%)",
          dark: "hsl(200, 5%, 35%)"
        },
        accent1: {
          light: "hsl(200, 100%, 10%)",
          dark: "hsl(200, 15%, 75%)"
        },
        accent2: {
          light: "hsl(200, 30%, 30%)",
          dark: "hsl(200, 10%, 61%)"
        },
      },
      keyframes: {
        spin3D: {
          '0%': { transform: 'perspective(1000px) rotateY(0)' },
          '100%': { transform: 'perspective(1000px) rotateY(360deg)' }
        },
      },
      animation: {
        spin3D: 'spin3D 3s linear infinite',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}