/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        myDarkBlue: "#141c2f",
        myLightBlue: "#1f2a48",
        myBrightBlue: "#0079fd",
        myWhite: "#fcfcfc",
        myGrey: "#c1c4cb",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
    screens: {
      xs: "350px",
      sm: "768px",
      md: "1060px",
      lg: "1440px",
    },
  },
  plugins: [],
};
