/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
const plugin = require('tailwindcss/plugin');

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
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle 350px at 12% 50%, var(--tw-gradient-stops))',
      },
      // https://www.hyperui.dev/blog/text-shadow-with-tailwindcss
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
        outline: '2px 2px 0 var(--tw-shadow-color), 2px -2px 0 var(--tw-shadow-color), -2px 2px 0 var(--tw-shadow-color), -2px -2px 0 var(--tw-shadow-color), 2px 0px 0 var(--tw-shadow-color), 0px 2px 0 var(--tw-shadow-color), -2px 0px 0 var(--tw-shadow-color), 0px -2px 0 var(--tw-shadow-color), 2px 2px 20px rgba(255, 165, 0, 0)',
      },
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
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') },
      )
    }),
  ],
}