import { motion } from "framer-motion";

const pageVariants = {
  initial: {
    opacity: 0,
    y: 60,
    scale: 0.98,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1], // elegant "easeOutExpo"-like curve
    },
  },
};

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={pageVariants}
    >
      {children}
    </motion.div>
  );
}
