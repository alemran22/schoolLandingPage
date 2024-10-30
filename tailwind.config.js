/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "#09B451",
        white: "#ffffff",
        black: "#000000",
        gray_text: "#666666",
        banner_bg_color: "#f0faf4",
        light_green: "#E4FFFF",
        modified_green: "#DDFFFF",
        modified_blue: "#1a222a",
      },
      backgroundImage: {
        firstStepGif: "url('./giphy (3) 4.gif')",
        firstStepMobileBG: "url('./image 10.png')",
      },
    },
  },
  plugins: [],
};
