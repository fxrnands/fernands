export const introduction =
  "Hi, I'm Fernanda — a Frontend Engineer building smooth, modern web experiences.";

export const experiences =
  "Frontend Engineer with over 3 years of experience turning ideas into fast, intuitive, and polished digital products. From banking platforms to creative agency sites and mobile apps, I specialize in crafting clean, scalable code and interfaces that not only work—but feel right. My daily tools include React, Next.js, Tailwind CSS, and TypeScript.";

export const tagline = " — Crafting Beautiful Interfaces with  — Code & Care.";

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
