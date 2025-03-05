/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        br: {
          dark: "#111111",
          gray: "#333333",
          primary: "#054C73",
          "light-gray": "#666666",
        },
      },
      backgroundColor: {
        "primary-dark": "#054C73",
        "light-blue": "#F2F5FF",
        "hero-light-blue": "#DFE9F4",
        primary: "#054C73",
        "hero-light-gray": "#f1f1f1",
      },
      fontFamily: { montserrat: ["Montserrat", "sans-serif"] },
    },
  },
  plugins: [],
};
