const percentageWidth = require('tailwindcss-percentage-width')
module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{html,js}"],
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        main: "var(--main)",
        background: "var(--background)",
        background2: "var(--background-2)",
        header: "var(--header)",
        accent: "var(--accent)",
      },
    },
  },
  plugins: [
    percentageWidth,
  ],
}
