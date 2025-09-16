export const containerVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
  exit: { opacity: 0 },
};

export const variants = {
  title: {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeInOut" } },
    exit: { opacity: 0, x: -100 },
  },
  subtitle: {
    initial: { opacity: 0, x: 80 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeInOut" } },
    exit: { opacity: 0, x: -80 },
  },
  cta: {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } },
    exit: { opacity: 0, y: -40 },
  },
  leftCard: {
    initial: { opacity: 0, x: -60, scale: 0.95 },
    animate: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.8, ease: "easeInOut" } },
    exit: { opacity: 0, x: 60, scale: 0.95 },
  },
  rightCard: {
    initial: { opacity: 0, x: 60, scale: 0.95 },
    animate: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.8, ease: "easeInOut" } },
    exit: { opacity: 0, x: -60, scale: 0.95 },
  },
  bottomCard: {
    initial: { opacity: 0, y: 50, scale: 0.95 },
    animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: "easeInOut" } },
    exit: { opacity: 0, y: -50, scale: 0.95 },
  },
};
