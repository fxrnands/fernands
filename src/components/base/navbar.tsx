// src/components/Navbar.tsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { to: "home", label: "Welcome" },
    { to: "experience", label: "Career Journey" },
    { to: "specialist", label: "What I Do " },
    { to: "connect", label: "Let's Connect! " },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 w-full z-50 text-white"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "anticipate" }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-lg font-bold tracking-widest">
            <img src="/fernands.png" width={150} />
          </div>

          <button
            onClick={toggleMenu}
            className="text-white cursor-none z-50 relative"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 180 }}
                transition={{ duration: 0.3 }}
              >
                <X size={28} />
              </motion.div>
            ) : (
              <Menu size={28} />
            )}
          </button>
        </div>
      </motion.header>

      {/* Menu */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <>
            <motion.div
              key="backdrop"
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
            />

            {isMobile ? (
              <motion.div
                key="mobile-menu"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "tween", duration: 0.3 }}
                className="fixed top-0 right-0 w-64 h-full bg-zinc-900 text-white z-50 p-6"
              >
                <nav className="flex flex-col gap-6">
                  {navLinks.map(({ to, label }) => (
                    <ScrollLink
                      key={to}
                      to={to}
                      smooth={true}
                      duration={500}
                      offset={-60}
                      onClick={toggleMenu}
                      className="cursor-pointer hover:text-cyan-400 text-lg transition"
                    >
                      {label}
                    </ScrollLink>
                  ))}
                </nav>
              </motion.div>
            ) : (
              <motion.div
                key="desktop-menu"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={containerVariants}
                transition={{ duration: 0.2 }}
                className="absolute right-24 top-[70px] text-white z-50 p-4 rounded shadow-lg"
              >
                <nav className="flex text-right flex-col gap-6">
                  {navLinks.map(({ to, label }) => (
                    <motion.div key={to} variants={itemVariants}>
                      <button
                        onClick={() => {
                          setIsOpen(false), handleScrollTo(to);
                        }}
                        className="cursor-pointer border-b border-b-white text-3xl transition "
                      >
                        {label}
                      </button>
                    </motion.div>
                  ))}
                </nav>
              </motion.div>
            )}
          </>
        )}
      </AnimatePresence>
    </>
  );
}
