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
  