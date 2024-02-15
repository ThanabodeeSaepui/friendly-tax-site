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
        "primary": "#450051",
        "secondary": "#740087",
        "accent": "#FEF121",
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