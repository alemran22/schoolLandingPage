/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "#09B451",
        white: "#ffffff",
        black: "#000000",
        gary_text: "#333333",
        banner_bg_color: "#f0faf4",
        light_green: "#E4FFFF",
        modified_green: "#DDFFFF",
        modified_blue: "#1a222a",
      },
    },
  },
  plugins: [],
};
