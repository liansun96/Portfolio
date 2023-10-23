/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      cursor: {
        'fancy': 'url("./src/assets/react.svg"), pointer',
      },
      screens: {
        xs: "540px",
        "3xl": "1920px",
        "4xl": "2560px",
      },
      spacing: {
        100: "25rem",
        104: "26rem",
        108: "27rem",
        112: "28rem",
        116: "29rem",
        120: "30rem",
      },
      colors: {
        light: "#F0FCF7",
        green: "#245747",
        green_text:"#D2E4D6",
        info :"#C9FCE9",
        gray : "#383030",
        gray_text : "#FFE4E4",
        sky : "#EFEDFF",
        warning: "#10112a",
        body_text: "#C9C9C9",
        text_secondary: "#AAA9A9",
        heading_text: "#fff",
        header_border: "#322C50",
        border: "#2c1933",
        icon: "#59606B",
        icon_border: "#2A2547",
        menu: "#D4CDCD",
        purple: "#E039FD",
        dark_blue: "#6345ED",
        media_bg: "#28243F",
        dark: "#070B24",
        table_bg: "#25223f",
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
