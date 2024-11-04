/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

export default {
  darkMode: 'selector',
  content: [
    `./components/**/*.{vue,js,ts}`,
    `./layouts/**/*.vue`,
    `./pages/**/*.vue`,
    `./composables/**/*.{js,ts}`,
    `./plugins/**/*.{js,ts}`,
    `./utils/**/*.{js,ts}`,
    `./App.{js,ts,vue}`,
    `./app.{js,ts,vue}`,
    `./Error.{js,ts,vue}`,
    `./error.{js,ts,vue}`,
    `./app.config.{js,ts}`
  ],
  theme: {
    extend: {
      colors: {
        // Light
        primary1: "#0060B9",
        primary2: "#193EBD",
        secondary1: "#E5F0FF",
        secondary2: "#D9E3F2",
        accent1: "#AFD8F5",
        accent2: "#9DC4F5",
        neutral1: "#FFFFFF",
        neutral2: "#141A22",
        special1: "#FFA500",
        special2: "#FFD700",
        gray1: "#9ca3af",
        gray2: "#4b5563",

        // Dark
        darkPrimary1Dark: "#0077E5",
        darkPrimary2Dark: "#004F98",
        darkSecondary1Dark: "#E5F0FF",
        darkSecondary2Dark: "#BBBBBB",
        darkAccent1Dark: "#2F3D50",
        darkAccent2Dark: "#546D90",
        darkNeutral1: "#141A22",
        darkNeutral2: "#FFFFFF",
        darkSpecial1Dark: "#CC8400",
        darkSpecial2Dark: "#6A0DAD",
        current: colors.current,
        inherit: colors.inherit,
        transparent: colors.transparent,
      }
    },
  },
  plugins: [],
}