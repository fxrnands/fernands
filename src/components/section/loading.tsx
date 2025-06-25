import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import CountUp from "../base/count-load";

export default function Loading({ onFinish }: { onFinish: () => void }) {
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsFinished(true);
      onFinish()
    }, 3500);
    return () => clearTimeout(timeout);
  }, [onFinish]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-black flex items-center justify-center"
          initial={{ y: 0 }}
          animate={{ y: "-100%" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 2.2 }}
        >
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            exit={{ scaleY: 0 }}
            transition={{
              duration: 1,
              ease: [0.76, 0, 0.24, 1],
              delay: 2.6,
            }}
            className="absolute top-0 left-0 w-full h-full bg-white origin-bottom"
          />

          {/* CountUp (durasi 2 detik) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.3,
              duration: 0.6,
              ease: "easeOut",
            }}
            className="z-10 text-white text-6xl font-bold"
          >
            <CountUp to={100} className="text-white" duration={0.2} />%
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
