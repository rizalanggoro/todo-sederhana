/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          sm: "100%",
          md: "640px",
          lg: "640px",
          xl: "640px",
          "2xl": "640px",
        },
      },
    },
  },
  plugins: [],
};
