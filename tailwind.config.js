/** 
 * This configuration file defines the Tailwind CSS settings for your project.
 * It specifies the content to be processed, theme extensions, custom animations, and plugins.
 */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include JavaScript and TypeScript files
    "./public/index.html", // Include your HTML file
  ],
  theme: {
    extend: {}, // Extend the default Tailwind CSS theme (if needed).
    animation: {
      'spin-slow': 'spin 20s linear infinite', // Define a custom "spin-slow" animation.
    },
  },
  plugins: [], 
};
