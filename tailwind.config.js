/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#081621", // dark black
        primary: "#ef4a23", // yellow
        secondary: "#3749bb", // blue
        dark: "#01132d", // text black
        dim: "#666666",
        senary: "#",
        "secondary-text": "#ef4a23", // secondary-text
      },
      backgroundImage: {},
    },
  },
  plugins: [],
};
