"use client";
import { motion, AnimatePresence } from "framer-motion";

const transitionvariants = {
  intial: {
    x: "100%",
    width: "100%",
  },
  animate: {
    x: "0",
    width: "0",
  },
  exit: {
    x: ["0", "100%"],
    width: ["0", "100%"],
  },
};
const Transition = () => {
  return (
    <>
      <motion.div
        className="fixed h-screen w-full top-0
       bottom-0 right-0 z-30
       bg-[#2e2257]
       "
        variants={transitionvariants}
        animate="animate"
        exit="exit"
        initial="initial"
        transition={{ delay: 0.1, duration: 0.3, ease: "easeInOut" }}
      ></motion.div>

      <motion.div
        className="fixed h-screen w-full top-0
       bottom-0 right-0 z-20
       bg-[#3b2d71]
       "
        variants={transitionvariants}
        animate="animate"
        exit="exit"
        initial="initial"
        transition={{ delay: 0.2, duration: 0.4, ease: "easeInOut" }}
      ></motion.div>
      <motion.div
        className="fixed h-screen w-full top-0
       bottom-0 right-0 z-10
       bg-[#4b3792]
       "
        variants={transitionvariants}
        animate="animate"
        exit="exit"
        initial="initial"
        transition={{ delay: 0.4, duration: 0.5, ease: "easeInOut" }}
      ></motion.div>
    </>
  );
};

export default Transition;
