/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "Sora": ["Sora", "sans-serif"],
        "Inter": ["Inter", "sans-serif"]
      },
      colors: {
        green:{
          "primary": "#04D361",
        },
        dark: {
          "primary": "#0C0C0C",
          "secondary": "#212529"
        },
        gray: {
          "primary": "#AEAEAE",
        },
        light: {
          "primary": "#F9f9f9",
        },
      }
    },
  },
  plugins: [],
}

