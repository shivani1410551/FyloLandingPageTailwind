/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "3xl": "1535px",
      "2xl": "1279px",
      xl: "1023px",
      lg: "875px",
      md: "747px",
      sm: "639px",
      xs: "430px",
      xxs: "375px",
    },
    extend: {
      colors: {
        VeryDarkBlue: "hsl(243, 87%, 12%)",
        DesaturatedBlue: "hsl(238, 22%, 44%)",
        BrightBlue: "hsl(224, 93%, 58%)",
        ModerateCyan: "hsl(170, 45%, 43%)",
        LightGrayishBlue: "hsl(240, 75%, 98%)",
        LightGray: " hsl(0, 0%, 75%)",
      },
      fontFamily: {
        primary: ["Raleway", "sans - serif"],
        //Headings, Call-to-actions, Header Navigation 400 700
        secondary: ["Open Sans", "sans - serif"], //body 400
      },
    },
  },
  plugins: [],
};
