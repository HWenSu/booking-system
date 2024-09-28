/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        tertiary: "var(--tertiary-color)",
        highLight: "var(--hightLight)",
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
