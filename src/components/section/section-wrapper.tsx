import { useInView } from "react-intersection-observer";
import { motion, type Variants } from "framer-motion";
import { type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  id: string;
};

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -100,
    y: -100,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

const AnimatedSection = ({ children, className = "", id }: Props) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <motion.section
      id={id}
      ref={ref}
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {/* Mapping children to motion.div */}
      {Array.isArray(children) ? (
        children.map((child, i) => (
          <motion.div key={i} custom={i} variants={itemVariants}>
            {child}
          </motion.div>
        ))
      ) : (
        <motion.div custom={0} variants={itemVariants}>
          {children}
        </motion.div>
      )}
    </motion.section>
  );
};

export default AnimatedSection;
