/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#5D5FEF",
      Tcolor: "#151D48",
      secondary: "#737791",
      orange: "#FFA412",
      white: "#FFFFFF",
      body: "#ECECEC",
      input: "#F9FAFB",
      red: "#EF4444",
      bgNotification: "#FFFAF1",
    },
    extend: {},
    screens: {
      sm: "576px",
      "sm-max": { max: "576px" },
      md: "768px",
      "md-max": { max: "868px" },
      lg: "992px",
      "lg-max": { max: "992px" },
      xl: "1200px",
      "xl-max": { max: "1200px" },
      "2xl": "1320px",
      "2xl-max": { max: "1320px" },
      "3xl": "1600px",
      "3xl-max": { max: "1600px" },
      "4xl": "1850px",
      "4xl-max": { max: "1850px" },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
