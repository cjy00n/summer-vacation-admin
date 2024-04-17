/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      width: {
        long: "33vw",
        middle: "15vw",
        short: "6vw",
      },
      keyframes: {
        fadein: {
          "0%": {
            opacity: "0.5",
            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        fadeout: {
          "0%": {
            opacity: "1",
          },
          "100%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
        },
      },
      animation: {
        fadein: "fadein 0.5s",
        fadeout: "fadeout 1s",
      },
      colors: {
        "primary-orange": "#FF6D3C",
        "primary-white": "#F6F6F6",
        "primary-yellow": "#FFCE3C",
        "primary-green": "#27BE69",
        "primary-blue": "#0091FF",
        "error-red": "#DF0020",
        "gray-90": "#FDF8F4",
        "gray-80": "#E8E3E0",
        "gray-70": "#D1CDCA",
        "gray-60": "#D9D9D9",
        "gray-50": "#A3A09D",
        "gray-30": "#757371",
      },
    },
  },
};
