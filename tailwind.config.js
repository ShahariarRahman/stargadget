/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "475px",
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
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
      backgroundImage: {
        "new-gradient":
          "linear-gradient(-45deg, #00237e, #3749bb, #0bc1e9, #3749bb, #00237e)",
      },
      keyframes: {
        blinkerKeyframe: {
          "0%": { opacity: "1.0" },
          "50%": { opacity: "0.0" },
          "100%": { opacity: "1.0", color: "white" },
        },
        "gradient-keyframe": {
          "0%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
          "100%": { "background-position": "0% 50%" },
        },
        marqueeKeyframe: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        "marquee-fast": "marqueeKeyframe 10s linear infinite",
        "marquee-normal": "marqueeKeyframe 20s linear infinite",
        "marquee-slow": "marqueeKeyframe 25s linear infinite",
        blinker: "blinkerKeyframe 2s infinite linear",
        gradient: "gradient-keyframe 12s infinite ease",
      },
    },
  },
  plugins: [],
};
