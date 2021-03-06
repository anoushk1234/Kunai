// tailwind.config.js
module.exports = {
  mode: "jit",
  purge: [
    "./public/**/*.html",
    "./index.html",
    "./src/**/*.{js,jsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
