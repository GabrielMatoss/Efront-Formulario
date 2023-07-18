/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
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
      }
    },
  },
  plugins: [],
}

