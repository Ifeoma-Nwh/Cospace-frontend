/* eslint-disable */
/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        headline: ["Neuton", "serif"], //700, 800
        text: ["Amiko", "sans-serif"], // 400, 600, 700
      },
      colors: {
        "clr-black": "var(--text)",
        "clr-white": "var(--background)",
        "clr-primary": "var(--primary)",
        "clr-secondary": "var(--secondary)",
        "clr-accent": "var(--accent)",
        "clr-alert": "var(--alert)",
        "clr-warning": "var(--warning)",
        "clr-success": "var(--success)",
        "clr-grey": "var(--grey)",
      },
      boxShadow: {
        tl: "-5px -5px 0px 0px var(--shadow)",
        "2tl": "-10px -10px 0px 0px var(--shadow)",
        "3tl": "-15px -15px 0px 0px var(--shadow)",
        "4tl": "-20px -20px 0px 0px var(--shadow)",
        "5tl": "-25px -25px 0px 0px var(--shadow)",

        tr: "5px -5px 0px 0px var(--shadow)",
        "2tr": "10px -10px 0px 0px var(--shadow)",
        "3tr": "15px -15px 0px 0px var(--shadow)",
        "4tr": "20px -20px 0px 0px var(--shadow)",
        "5tr": "25px -25px 0px 0px var(--shadow)",

        rb: "5px 5px 0px 0px var(--shadow)",
        "2rb": "10px 10px 0px 0px var(--shadow)",
        "3rb": "15px 15px 0px 0px var(--shadow)",
        "4rb": "20px 20px 0px 0px var(--shadow)",
        "5rb": "25px 25px 0px 0px var(--shadow)",

        lb: "-5px 5px 0px 0px var(--shadow)",
        "2lb": "-10px 10px 0px 0px var(--shadow)",
        "3lb": "-15px 15px 0px 0px var(--shadow)",
        "4lb": "-20px 20px 0px 0px var(--shadow)",
        "5lb": "-25px 25px 0px 0px var(--shadow)",
      },
      dropShadow: {
        tl: "-5px -5px 0px var(--shadow)",
        "2tl": "-10px -10px 0px var(--shadow)",
        "3tl": "-15px -15px 0px var(--shadow)",
        "4tl": "-20px -20px 0px var(--shadow)",
        "5tl": "-25px -25px 0px var(--shadow)",

        tr: "5px -5px 0px var(--shadow)",
        "2tr": "10px -10px 0px var(--shadow)",
        "3tr": "15px -15px 0px var(--shadow)",
        "4tr": "20px -20px 0px var(--shadow)",
        "5tr": "25px -25px 0px var(--shadow)",

        rb: "5px 5px 0px var(--shadow)",
        "2rb": "10px 10px 0px var(--shadow)",
        "3rb": "15px 15px 0px var(--shadow)",
        "4rb": "20px 20px 0px var(--shadow)",
        "5rb": "25px 25px 0px var(--shadow)",

        lb: "-5px 5px 0px var(--shadow)",
        "2lb": "-10px 10px 0px var(--shadow)",
        "3lb": "-15px 15px 0px var(--shadow)",
        "4lb": "-20px 20px 0px var(--shadow)",
        "5lb": "-25px 25px 0px var(--shadow)",
      },
      animation: {
        "progress-bar": "progress-bar 4s linear forwards",
        "slide-in": "slide-in 0.4s ease-in-out forwards",
        "slide-out": "slide-out 0.4s ease-in-out forwards",
      },
      keyframes: {
        "progress-bar": {
          "0%": { width: "100%" },
          "100%": { width: "0%" },
        },
        "slide-in": {
          "0%": { opacity: 0, transform: "translateX(100%)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        "slide-out": {
          "0%": { opacity: 1, transform: "translateX(0)" },
          "100%": { opacity: 0, transform: "translateX(100%)" },
        },
      },
    },
  },
  plugins: [],
};
