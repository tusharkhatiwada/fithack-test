/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "ring-progress": {
          from: {
            strokeDashArray: "0 999",
          },
        },
      },
    },
  },
  plugins: [],
};
