/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Maven Pro", "Inter", ...defaultTheme.fontFamily.sans],
      },
    },
    colors: {
      // Basic Colors
      black: "#000000",
      white: "#ffffff",

      // Green
      "green-900": "#073D30",
      "green-800": "#236340",
      "green-700": "#236340",
      "green-600": "#236340",
      "green-500": "#236340",
      "green-400": "#236340",
      "green-300": "#236340",
      "green-200": "#236340",
      "green-100": "#236340",
      // Yellow
      "yellow-900": "#FBD718",
      "yellow-800": "#236340",
      "yellow-700": "#236340",
      "yellow-600": "#236340",
      "yellow-500": "#236340",
      "yellow-400": "#236340",
      "yellow-300": "#236340",
      "yellow-200": "#236340",
      "yellow-100": "#236340",
      // Gray
      "gray-900": "#252525",
      "gray-700": "#236340",
      "gray-600": "#236340",
      "gray-500": "#236340",
      "gray-400": "#EBEBEB",
      "gray-300": "#236340",
      "gray-200": "#236340",
      "gray-100": "#236340",
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
