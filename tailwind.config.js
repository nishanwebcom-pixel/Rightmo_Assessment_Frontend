/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#f9f506",
        "background-light": "#f8f8f5",
        "background-dark": "#23220f",
        "surface-light": "#ffffff",
        "surface-dark": "#2d2c15",
        "text-main": "#181811",
        "text-sub": "#8c8b5f",
      },
      fontFamily: {
        display: ["Spline Sans", "sans-serif"],
      },
      borderRadius: {
        // Renamed from "DEFAULT" to avoid conflict if necessary,
        // but 'DEFAULT' works fine within the extend object.
        DEFAULT: "1rem",
        lg: "2rem",
        xl: "3rem",
        full: "9999px",
      },
      animation: {
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
        "fade-in-up-delay-1": "fadeInUp 0.8s ease-out 0.2s forwards",
        "fade-in-up-delay-2": "fadeInUp 0.8s ease-out 0.4s forwards",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
