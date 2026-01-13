import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";

export default function CustomCursor() {
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const springConfig = { damping: 30, stiffness: 400 };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);

  const [hoveredGlassIcon, setHoveredGlassIcon] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [cursorX, cursorY]);

  useEffect(() => {
    const handleEnter = () => setHoveredGlassIcon(true);
    const handleLeave = () => setHoveredGlassIcon(false);

    const targets = document.querySelectorAll(".glass-icon-hover");
    targets.forEach((el) => {
      el.addEventListener("mouseenter", handleEnter);
      el.addEventListener("mouseleave", handleLeave);
    });

    return () => {
      targets.forEach((el) => {
        el.removeEventListener("mouseenter", handleEnter);
        el.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(Math.min(100, Math.max(0, scrollPercent)));
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      className={`fixed top-0 left-0 w-14 h-14 rounded-full hidden md:flex ${
        !hoveredGlassIcon && "mix-blend-difference"
      } pointer-events-none z-[9999] bg-white items-center justify-center`}
      style={{ x, y }}
      animate={{
        scale: hoveredGlassIcon ? 2 : 1,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {hoveredGlassIcon ? (
        <motion.span
          initial={{ opacity: 0, scale: 0.5, x: 8 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0.5, x: 8 }}
          transition={{ type: "spring", stiffness: 250, damping: 18 }}
          className="text-black text-xs"
        >
          <FaArrowRight />
        </motion.span>
      ) : (
        <span className="text-xs text-black font-mono">
          {Math.round(scrollProgress)}%
        </span>
      )}
    </motion.div>
  );
}
