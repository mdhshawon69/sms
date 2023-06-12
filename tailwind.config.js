/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src//components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sidebar: "#01544D",
        primary: "#1EB3A6",
        yellow: "#FF9900",
        "primary-text": "#0D1530CC",
        backdrop: "rgba(0, 0, 0, 0.6)",
      },
      fontFamily: {
        kalpurush: ["Kalpurush", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
