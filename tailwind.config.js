/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        "primary-orange": "#FF6D3C",
        "primary-white": "#F6F6F6",
        "primary-yellow": "#FFCE3C",
        "primary-green": "#27BE69",
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
