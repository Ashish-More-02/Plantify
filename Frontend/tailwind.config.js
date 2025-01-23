/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".myFontClass": {},
        ".inter-medium": {
          fontFamily: "Inter",
          fontOpticalSizing: "auto",
          fontWeight: 400,
          fontStyle: "normal",
        },
      });
    },
  ],
};
