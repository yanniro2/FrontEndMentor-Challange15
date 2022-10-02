/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      "Mobile": { "min": "375px", "max": "600px" }
    },
    colors: {
      "cyan": "hsl(179, 62%, 43%)",
      "cyan-2": "hsl(179, 62%, 48%)",
      "Bright-Yellow": "hsl(71, 73%, 54%)",
      "Light-Gray": "hsl(204, 43%, 93%)",
      "Grayish-Blue": "hsl(218, 22%, 67%)",
    },
    fontSize: {
      "ms": "16px",
    },
    fontFamily: {
      "Karla": ["Karla", "sans-serif"],
    },
    fontWeight: {
      "ms": 400,
      "lg": 700,
    },
    extend: {},
  },
  plugins: [],
}
