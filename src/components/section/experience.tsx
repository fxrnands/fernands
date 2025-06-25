import { useRef } from "react";
import experience from "../../data/experienceData.json";
import { motion } from "framer-motion";
import SpotlightCard from "../base/cards";
import BlurText from "../base/blurred-text";
import AnimatedSection from "./section-wrapper";

export default function ExperienceSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  return (
    <AnimatedSection
      id="experience"
      className="relative h-screen snap-start bg-black/60 text-[#FAFAFA] px-6 py-20 overflow-hidden"
    >
      <div className="mb-16 text-left max-w-7xl mt-6 mx-auto lg:px-6">
        <div className="flex items-center gap-4 mb-4">
          <BlurText
            text="Who is Fernands?"
            className="text-3xl lg:text-5xl font-bold whitespace-nowrap"
          />
          <div className="flex-1 h-[2px] lg:block hidden bg-white relative">
            <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full"></span>
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="leading-relaxed"
        >
          I'm a Frontend Engineer with over 3 years of experience turning ideas
          into fast, intuitive, and polished digital products. From banking
          platforms to creative agency sites and mobile apps, I specialize in
          crafting clean, scalable code and interfaces that not only work—but
          feel right. My daily tools include React, Next.js, Tailwind CSS, and
          TypeScript.
        </motion.p>
      </div>
      <div className="max-w-7xl lg:px-6 mx-auto w-full h-full flex flex-col">
        <div className="flex items-center gap-4 mb-8">
          <BlurText
            text="A Look Into My Career"
            className="text-3xl lg:text-5xl font-bold whitespace-nowrap"
          />

          <div className="flex-1 lg:block hidden h-[2px] bg-white relative">
            <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full"></span>
          </div>
        </div>

        <motion.div
          ref={scrollRef}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="flex gap-6 overflow-x-auto overflow-y-hidden no-scrollbar h-fit scroll-smooth pb-6"
        >
          {experience.map((exp, index) => (
            <SpotlightCard
              key={index}
              className="min-w-[80%] md:min-w-[60%] lg:min-w-[40%] shrink-0 bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-md border border-white/10"
            >
              <h3 className="text-xl lg:text-2xl font-semibold ">{exp.role}</h3>
              <p className="text-sm mt-3 text-gray-300">
                {exp.company} • {exp.type}
              </p>
              <p className="text-sm mt-4 text-gray-300">{exp.date}</p>
              <p className="text-sm text-gray-300">{exp.location}</p>
              <ul className="list-disc list-inside mt-4 text-gray-200 space-y-1">
                {exp.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </SpotlightCard>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
