/* eslint-disable */
/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        headline: ["Neuton", "serif"], //700, 800
        text: ["Amiko", "sans-serif"], // 400, 600, 700
      },
      colors: {
        black: {
          base: "var(--text-base)",
          100: "var(--text-100)",
          200: "var(--text-200)",
          300: "var(--text-300)",
          400: "var(--text-400)",
          500: "var(--text-500)",
          600: "var(--text-600)",
          700: "var(--text-700)",
          800: "var(--text-800)",
          900: "var(--text-900)",
        },
        white: {
          base: "var(--background-base)",
          100: "var(--background-100)",
          200: "var(--background-200)",
          300: "var(--background-300)",
          400: "var(--background-400)",
          500: "var(--background-500)",
          600: "var(--background-600)",
          700: "var(--background-700)",
          800: "var(--background-800)",
          900: "var(--background-900)",
        },
        primary: {
          base: "var(--primary-base)",
          100: "var(--primary-100)",
          200: "var(--primary-200)",
          300: "var(--primary-300)",
          400: "var(--primary-400)",
          500: "var(--primary-500)",
          600: "var(--primary-600)",
          700: "var(--primary-700)",
          800: "var(--primary-800)",
          900: "var(--primary-900)",
        },
        secondary: {
          base: "var(--secondary-base)",
          100: "var(--secondary-100)",
          200: "var(--secondary-200)",
          300: "var(--secondary-300)",
          400: "var(--secondary-400)",
          500: "var(--secondary-500)",
          600: "var(--secondary-600)",
          700: "var(--secondary-700)",
          800: "var(--secondary-800)",
          900: "var(--secondary-900)",
        },
        accent: {
          base: "var(--accent-base)",
          100: "var(--accent-100)",
          200: "var(--accent-200)",
          300: "var(--accent-300)",
          400: "var(--accent-400)",
          500: "var(--accent-500)",
          600: "var(--accent-600)",
          700: "var(--accent-700)",
          800: "var(--accent-800)",
          900: "var(--accent-900)",
        },
      },
      boxShadow: {
        tl: "-5px -5px 0px 0px var(--shadow-base)",
        "2tl": "-10px -10px 0px 0px var(--shadow-base)",
        "3tl": "-15px -15px 0px 0px var(--shadow-base)",
        "4tl": "-20px -20px 0px 0px var(--shadow-base)",
        "5tl": "-25px -25px 0px 0px var(--shadow-base)",

        tr: "5px -5px 0px 0px var(--shadow-base)",
        "2tr": "10px -10px 0px 0px var(--shadow-base)",
        "3tr": "15px -15px 0px 0px var(--shadow-base)",
        "4tr": "20px -20px 0px 0px var(--shadow-base)",
        "5tr": "25px -25px 0px 0px var(--shadow-base)",

        rb: "5px 5px 0px 0px var(--shadow-base)",
        "2rb": "10px 10px 0px 0px var(--shadow-base)",
        "3rb": "15px 15px 0px 0px var(--shadow-base)",
        "4rb": "20px 20px 0px 0px var(--shadow-base)",
        "5rb": "25px 25px 0px 0px var(--shadow-base)",

        lb: "-5px 5px 0px 0px var(--shadow-base)",
        "2lb": "-10px 10px 0px 0px var(--shadow-base)",
        "3lb": "-15px 15px 0px 0px var(--shadow-base)",
        "4lb": "-20px 20px 0px 0px var(--shadow-base)",
        "5lb": "-25px 25px 0px 0px var(--shadow-base)",
      },
      dropShadow: {
        tl: "-5px -5px 0px var(--shadow-base)",
        "2tl": "-10px -10px 0px var(--shadow-base)",
        "3tl": "-15px -15px 0px var(--shadow-base)",
        "4tl": "-20px -20px 0px var(--shadow-base)",
        "5tl": "-25px -25px 0px var(--shadow-base)",

        tr: "5px -5px 0px var(--shadow-base)",
        "2tr": "10px -10px 0px var(--shadow-base)",
        "3tr": "15px -15px 0px var(--shadow-base)",
        "4tr": "20px -20px 0px var(--shadow-base)",
        "5tr": "25px -25px 0px var(--shadow-base)",

        rb: "5px 5px 0px var(--shadow-base)",
        "2rb": "10px 10px 0px var(--shadow-base)",
        "3rb": "15px 15px 0px var(--shadow-base)",
        "4rb": "20px 20px 0px var(--shadow-base)",
        "5rb": "25px 25px 0px var(--shadow-base)",

        lb: "-5px 5px 0px var(--shadow-base)",
        "2lb": "-10px 10px 0px var(--shadow-base)",
        "3lb": "-15px 15px 0px var(--shadow-base)",
        "4lb": "-20px 20px 0px var(--shadow-base)",
        "5lb": "-25px 25px 0px var(--shadow-base)",
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
