import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const navLinks = [
    { to: "works", label: "Works(09)" },
    { to: "experience", label: "Career Journey" },
    { to: "connect", label: "Let's Connect!" },
  ];

  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious();
    if (typeof prev === "number" && latest > prev && latest > 100) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.header
      className="fixed top-0 left-0 w-full z-50 text-[#181818]  backdrop-blur md:backdrop-blur-none"
      initial={{ y: 0 }}
      animate={{ y: hidden ? "-100%" : 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="relative max-w-8xl mx-auto flex items-center justify-between px-4 md:px-6 py-3 md:py-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <HiX className="w-8 h-8 text-[#181818]" />
          ) : (
            <HiMenu className="w-8 h-8 text-[#181818]" />
          )}
        </button>

        <div className="absolute left-1/2 transform -translate-x-1/2">
          <p className="text-lg font-satoshi font-bold tracking-widest text-[#181818]">
            FXRNANDS.
          </p>
        </div>

        <div className="hidden md:flex items-center gap-x-6 ml-auto">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={`#${link.to}`}
              className="group relative font-satoshi font-bold cursor-none uppercase text-sm"
            >
              {link.label}
              <span className="absolute left-0 -bottom-0.5 h-[1px] w-0 bg-current transition-all duration-500 group-hover:w-full"></span>
            </a>
          ))}
        </div>
      </div>

      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        className="overflow-hidden md:hidden px-4"
      >
        <div className="flex flex-col gap-4 pb-4">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={`#${link.to}`}
              className="font-satoshi font-bold uppercase text-sm"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </motion.div>
    </motion.header>
  );
}
