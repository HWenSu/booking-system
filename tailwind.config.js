/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slideIn: {
          "0%": { transform: "translateX(100%)", opacity: 0 },
          "100%": { transform: "translateX(0%)", opacity: 1 },
        },
        slideOut: {
          "0%": { transform: "translateX(0%)", opacity: 0 },
          "100%": { transform: "translateX(100%)", opacity: 1 },
        },
      },
      colors: {
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        tertiary: "var(--tertiary-color)",
        highlight: "var(--highlight)",
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
      saturate: {
        25: ".25",
        90: ".90",
      },
      animation: {
        "fade-in-up": "fadeInUp 0.5s ease-out",
        "fade-in-title": "fadeInUp 1s ease-in-out",
        "slide-in": "slideIn 1s ease-in-out",
        "slide-out": "slideOut 1s ease-in-out",
      },
      backgroundSize: {
        auto: "auto",
        cover: "cover",
        contain: "contain",
        "50%": "50%",
        16: "4rem",
      },
    },
  },
  safelist: [
    {
      pattern: /theme-(modern|classic|mudstone)/,
    },
  ],
  plugins: [],
};
