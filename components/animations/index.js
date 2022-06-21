const transition = {
  duration: 1,
  ease: [0.56, 0.03, 0.12, 1.04],
};

export const upFadeAnimation = {
  initial: {
    opacity: 0,
    y: 15,
  },
  whileInView: {
    opacity: 1,
    y: 0,
  },
  viewport: { once: false, amount: 0.1 },
  transition: transition,
};
