/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";

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
        spin: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
      },
      animation: {
        fadein: "fadein 0.5s",
        fadeout: "fadeout 1s",
        "spin-slow": "spin 2s linear infinite",
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
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".modal": {
          display: "flex",
          "flex-direction": "column",
          "background-color": "white",
          position: "absolute",
          "align-items": "center",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          "box-shadow":
            "0 10px 8px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.05)",
          "border-radius": "0.375rem",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    }),
  ],
};
