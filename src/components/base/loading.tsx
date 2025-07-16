import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-[#181818] z-50 overflow-hidden"
      initial={{ clipPath: "circle(150% at 50% 50%)" }}
      animate={{ clipPath: "circle(0% at 50% 50%)" }}
      transition={{
        duration: 2.5,
        ease: "easeInOut",
      }}
    >
      <motion.div
        className="absolute inset-0 bg-[#dbdbdb] "
        initial={{ clipPath: "circle(0% at 50% 50%)" }}
        animate={{ clipPath: "circle(100% at 50% 50%)" }}
        transition={{
          duration: 2.5,
          ease: "easeInOut",
        }}
      />
      <motion.h1
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
        }}
        style={{
          WebkitTextStroke: "2px #181818",
        }}
        className="text-[#dbdbdb] text-8xl font-denton uppercase tracking-widest relative z-10"
      >
        Design Meets Code
      </motion.h1>
    </motion.div>
  );
}
