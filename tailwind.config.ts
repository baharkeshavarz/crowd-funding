import type { Config } from "tailwindcss"

const withMT = require("@material-tailwind/react/utils/withMT")

const config: Config = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px"
      }
    },
    extend: {
      colors: {
        primary: {
          500: "#32d2a4",
          100: "#FFF1E6"
        },
        secondary: {
          50: "#f3e5f5",
          100: "#e1bee7",
          200: "#ce93d8",
          300: "#ba68c8",
          400: "#ab47bc",
          500: "#674df0",
          600: "#8e24aa",
          700: "#7b1fa2",
          800: "#6a1b9a",
          900: "#6f2dbd"
        },
        dark: {
          100: "#000000",
          200: "#0F1117",
          300: "#151821",
          400: "#212734",
          500: "#1b1f2e"
        },
        light: {
          900: "#FFFFFF",
          800: "#F4F6F8",
          850: "#f7f7f7",
          700: "#DCE3F1",
          500: "#7B8EC8",
          400: "#858EAD"
        }
      },
      fontFamily: {
        roboto: ["var(--font-roboto)"],
        notoSansArabic: "[var(--font-notoSansArabic)]"
      },
      boxShadow: {
        "light-100":
          "0px 12px 20px 0px rgba(184, 184, 184, 0.03), 0px 6px 12px 0px rgba(184, 184, 184, 0.02), 0px 2px 4px 0px rgba(184, 184, 184, 0.03)",
        "light-200": "10px 10px 20px 0px rgba(218, 213, 213, 0.01)",
        "light-300": "-10px 10px 20px 0px rgba(218, 213, 213, 0.0)",
        "dark-100": "0px 2px 10px 0px rgba(46, 52, 56, 0.10)",
        "dark-200": "2px 0px 20px 0px rgba(39, 36, 36, 0.04)"
      }
    },
    backgroundImage: {},
    screens: {
      sm: "576px",
      // => @media (min-width: 576px) { ... }
      md: "768px",
      // => @media (min-width: 768px) { ... }
      lg: "992px",
      // => @media (min-width: 992px) { ... }
      xl: "1200px"
      // => @media (min-width: 1200px) { ... }
    },
    keyframes: {
      // "accordion-down": {
      //   from: { height: "0" },
      //   to: { height: "var(--radix-accordion-content-height)" }
      // },
      // "accordion-up": {
      //   from: { height: "var(--radix-accordion-content-height)" },
      //   to: { height: "0" }
      // }
    },
    animation: {
      "accordion-down": "accordion-down 0.2s ease-out",
      "accordion-up": "accordion-up 0.2s ease-out"
    }
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")]
})

export default config
