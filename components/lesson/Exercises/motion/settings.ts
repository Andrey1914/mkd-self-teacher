const transition = {
  duration: 0.8,
  ease: "easeInOut",
};

export const inputVariants = {
  hidden: {
    scale: 1,
    opacity: 0,
    transition: { transition },
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { transition },
  },
  exit: {
    scale: 1,
    opacity: 0,
    transition: { transition },
  },
};
