/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "text": "text 5s ease infinite alternate"
      },
      keyframes: {
        text: {
          "0%": {
            "background-size": "200% 200%",
            "background-position": "left",
          },
          "100%": {
            "background-size": "200% 200%",
            "background-position": "right",
          },
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["cupcake", "halloween", "cmyk"],
    darkTheme: "halloween",
  },
};
