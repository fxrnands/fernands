import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaArrowRight, FaRightLeft } from "react-icons/fa6";

export const AnimatedButton = ({ onClick }: { onClick: () => void }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="bg-white text-black cursor-none px-6 py-3 h-full rounded-md font-semibold overflow-hidden relative"
    >
      <AnimatePresence mode="wait">
        {isHovered ? (
          <motion.span
            key="arrow"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="flex items-center justify-center"
          >
            <FaArrowRight size={80} />
          </motion.span>
        ) : (
          <motion.span
            key="text"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="block"
          >
            Let’s Get Started
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
};
