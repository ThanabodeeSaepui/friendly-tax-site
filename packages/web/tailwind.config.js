/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [{
      mytheme: {
        "primary": "#ffd944",
        "secondary": "#006fff",
        "accent": "#0060ff",
        "neutral": "#ffffff",
        "base-100": "#f0f4f5",
        "info": "#00e8ff",
        "success": "#56BC6C",
        "warning": "#ffb737",
        "error": "#f14d50",
      },
    },],
  },
}