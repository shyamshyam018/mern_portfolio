/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'hang': 'hang 2.5s ease-in-out infinite',
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        hang: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(8px)' },
        },
      },
      fontFamily: {
        bungee: ['"Bungee Tint"', 'sans-serif'],
        protest: ['"Protest Riot"', 'sans-serif'],
      },
    },
  },
};
