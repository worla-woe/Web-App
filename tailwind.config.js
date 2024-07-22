/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        wobble: {
          "0%, 100%": {
            transform: "translateX(0%)",
            transformOrigin: "50% 50%",
          },
          "15%": {
            transform: "translateX(-10px) rotate(-5deg)",
          },
          "30%": {
            transform: "translateX(5px) rotate(5deg)",
          },
          "45%": {
            transform: "translateX(-5px) rotate(-3deg)",
          },
          "60%": {
            transform: "translateX(3px) rotate(2deg)",
          },
          "75%": {
            transform: "translateX(-2px) rotate(-1deg)",
          },
        },
      },
      animation: {
        wobble: "wobble 3s cubic-bezier(0.25, 1, 0.5, 1) infinite normal",
        "pulse-slow": "pulse 8s linear infinite",
      },
    },
  },
  plugins: [],
};
