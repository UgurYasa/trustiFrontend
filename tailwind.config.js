/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      perspective: {
        1000: "1000px",
      },
      keyframes: {
        flip: {
          "0%": { transform: "rotateY(0deg)" },
          "50%": { transform: "rotateY(180deg)" },
          "100%": { transform: "rotateY(360deg)" },
        },
        slideIn: {
          "0%": { opacity: 0, transform: "translateY(-10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        flip: "flip 0.6s forwards",
        slideIn: "slideIn 0.5s ease-out",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          /* Tüm modern tarayıcılar */
          '-ms-overflow-style': 'none', /* IE ve Edge */
          'scrollbar-width': 'none', /* Firefox */
        },
        '.scrollbar-hide::-webkit-scrollbar': {
          'display': 'none', /* Chrome, Safari, Opera */
        },
      });
    },
  ],
};
