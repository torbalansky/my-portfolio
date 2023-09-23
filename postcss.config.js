// postcss.config.js

/**
 * This configuration file defines PostCSS plugins and their options.
 * It is used to process styles and add necessary prefixes.
 */
module.exports = {
    plugins: {
      tailwindcss: {}, // Enable Tailwind CSS integration.
      autoprefixer: {}, // Automatically add vendor prefixes for better browser compatibility.
      'postcss-flexbugs-fixes': {}, // Fix common flexbox issues in various browsers.
    },
  };
  