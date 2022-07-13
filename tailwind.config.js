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
      keyframes: {
        onLoad: {
          '0%': {
            transform: "translateY(-1rem)",
            opacity: "0",
          },
          '100%': {
            opacity: "100",
          }
        }
      },
      animation: {
        onLoad: 'onLoad 0.4s ease-out'
      }
    },
  },
  plugins: [
    percentageWidth,
  ],
}
