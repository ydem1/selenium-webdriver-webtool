/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: {
          base: "#161616",
        },
        white: {
          base: "#fff",
        },
        green: {
          base: "#E0FF00",
          light: "#b2de27",
          lighter: "#eaf2d7",
        },
        red: {
          base: "#c44d56",
        },
        yellow: {
          base: "#fff000",
          strong: "#f7ca18",
        },
      },
      fontFamily: {
        gobold: ["Gobold Bold", "sans-serif"],
        montserrat: ["montserrat", "sans-serif"],
      },
      lineHeight: {
        0: "0px",
        1.5: "150%",
      },
      screens: {
        default: "0px",
        xs: "450px",
        sm: "720px",
        md: "900px",
        lg: "1076px",
      },
      spacing: {
        25: "100px",
      },
      maxWidth: {
        360: "1440px",
      },
      borderRadius: {
        20: "20px",
      },
    },
  },
  plugins: [],
}