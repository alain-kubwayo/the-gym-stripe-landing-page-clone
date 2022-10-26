/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#425466",
        secondary: "#635BFF",
        tertiary: "#0A2540",
        auxiliary: "#ADBCCB",
        label: "#00D4FF",
        description: "#ADBDCC",
        light: "#F6F9FC",
      },
      fontSize: {
        "sm-md": "15px",
        "4.5xl": "38px",
      },
    },
  },
  plugins: [],
};
