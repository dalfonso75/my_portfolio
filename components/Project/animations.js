export const animationProject = {
  initial: {
    opacity: 0,
    y: 10,
  },
  // exit: {
  //   opacity: 0,
  //   y: 0,
  // },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.1 },
  transition: {
    duration: 1.5,
    ease: [0.56, 0.03, 0.12, 1.04],
  },
};
