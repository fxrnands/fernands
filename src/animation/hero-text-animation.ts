export const introduction =
  "Hi, I'm Fernands — a Frontend Engineer building smooth, modern web experiences.";

export const tagline = "Crafting Beautiful Interfaces with Code & Care.";

export const introductionContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: tagline.length * 0.03 + 0.5,
      staggerChildren: 0.02,
    },
  },
};

export const taglineContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
    },
  },
};

export const child = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};
