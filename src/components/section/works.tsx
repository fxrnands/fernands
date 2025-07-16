import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

interface WorkItem {
  type: "image" | "video";
  src: string;
  alt?: string;
  title: string;
  techStack: string;
  url?: string;
}

interface WorksProps {
  items: WorkItem[];
}

const Works: React.FC<WorksProps> = ({ items }) => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const smoothY = useSpring(textY, { stiffness: 50, damping: 20, mass: 1 });

  const positions = [
    { top: "35vh", left: "5vw" },
    { top: "55vh", right: "10vw" },
    { top: "80vh", left: "20vw" },
    { top: "110vh", right: "10vw" },
    { top: "135vh", left: "10vw" },
    { top: "160vh", right: "15vw" },
    { top: "190vh", left: "5vw" },
    { top: "210vh", right: "10vw" },
    { top: "230vh", left: "5vw" },
  ];

  return (
    <div
      ref={containerRef}
      className="relative w-full min-h-[250vh] overflow-hidden pt-[30vh]"
    >
      <motion.div
        style={{ y: smoothY }}
        className="absolute inset-0 z-0 pointer-events-none select-none"
      >
        {[
          { text: "Mobile Apps Development", top: "20vh", left: "10vw" },
          { text: "Website Development", top: "50vh", right: "2vw" },
          { text: "Optimization", top: "110vh", left: "60vw" },
          { text: "Search Engine", top: "130vh", left: "5vw" },
          { text: "Blockchain", top: "170vh", right: "10vw" },
          { text: "3D Website", top: "210vh", right: "10vw" },
          { text: "UI/UX", top: "200vh", left: "15vw" },
          { text: "Creative Design", top: "250vh", left: "15vw" },
        ].map((item, index) => (
          <h2
            key={index}
            className="absolute text-[10vw] uppercase font-denton md:text-[5vw] font-bold text-[#181818] opacity-30 "
            style={{
              top: item.top,
              left: item.left,
              right: item.right,
            }}
          >
            {item.text}
          </h2>
        ))}
      </motion.div>

      {items.map((item, index) => {
        const ref = useRef(null);
        const { scrollYProgress } = useScroll({
          target: ref,
          offset: ["start end", "end start"],
        });

        const speed = -100 - index * 20;
        const rawY = useTransform(scrollYProgress, [0, 1], ["0%", `${speed}%`]);
        const y = useSpring(rawY, { stiffness: 50, damping: 20, mass: 1 });

        const pos = positions[index % positions.length];

        return (
          <motion.figure
            key={index}
            ref={ref}
            style={{
              y,
              top: pos.top,
              left: pos.left,
              right: pos.right,
            }}
            className="absolute glass-icon-hover w-[300px] md:w-[550px] z-10"
            onClick={() => item.url && window.open(item.url, "_blank")}
          >
            <div className="relative overflow-hidden group">
              {item.type === "image" ? (
                <img
                  src={item.src}
                  alt={item.alt || `work-${index}`}
                  className="w-full h-auto object-cover"
                />
              ) : (
                <video
                  src={item.src}
                  muted
                  loop
                  autoPlay
                  playsInline
                  className="w-full h-auto object-cover"
                />
              )}
              {/* <figcaption className="absolute bottom-0 left-0 w-full p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-black/70 to-transparent">
                <h3 className="text-lg uppercase">
                  <span className="text-sm font-mono text-gray-400">
                    0{index + 1}.
                  </span>{" "}
                  <span className="text-[#dbdbdb] font-satoshi">
                    {item.title}
                  </span>
                </h3>
                <p className="text-sm text-gray-300">{item.techStack}</p>
              </figcaption> */}
            </div>
          </motion.figure>
        );
      })}
    </div>
  );
};

export default Works;
