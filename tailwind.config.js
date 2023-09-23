/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include JavaScript and TypeScript files
    "./public/index.html", // Include your HTML file
  ],
  theme: {
    extend: {},
    animation: {
      'spin-slow': 'spin 20s linear infinite',
    },
  },
  plugins: [], 
};
