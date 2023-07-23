/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme"

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      viewportCel: "347px",
      ...defaultTheme.screens
    },
    extend: {
      fontFamily: {
        "Sora": ["Sora", "sans-serif"],
        "Inter": ["Inter", "sans-serif"]
      },
      colors: {
        green: {
          "primary": "#04D361",
        },
        white: {
          "primary": "#F9F9F9",
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
        modalBg: {
          dark: "#151515",
          backdrop: "#141414"
        }
      }
    },
  },
  plugins: [],
}

