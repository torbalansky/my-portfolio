// animations.js

/**
 * This module provides animation definitions that can be used throughout the application.
 * The `fade` function defines a fade-in animation with a specified delay.
 *
 * @param {number} delay - The delay (in seconds) before the fade-in animation starts.
 * @returns {object} - An object containing animation definitions for hidden and show states.
 */

export const fade = (delay) => {
    return {
      hidden: {
        opacity: 0,
      },
      show: {
        opacity: 1,
        transition: {
          type: "spring",
          duration: 1.25,
          delay: delay,
        },
      },
    };
  };
  