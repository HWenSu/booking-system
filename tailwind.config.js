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
      },
    },
  },
  plugins: [],
};
