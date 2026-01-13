"use client";

import experienceData from "../../data/experienceData.json";
import { useRef, useLayoutEffect } from "react";
import ExperienceCard from "../base/experience-card";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Career() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sunburstRef = useRef<HTMLImageElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 40%",
          scrub: 0.5,
        },
      });

      tl.fromTo(
        sunburstRef.current,
        { scale: 0.5, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
        }
      );

      tl.to(
        titleRef.current,
        {
          "--gap": "20rem",
          duration: 1,
          ease: "power3.inOut",
          onUpdate: () => {
            if (titleRef.current && tl) {
              const progress = tl.progress();
              titleRef.current.style.setProperty(
                "--gap",
                `${2 + progress * 18}rem`
              );
            }
          },
        },
        "<"
      );

      gsap.to(sunburstRef.current, {
        rotate: 360,
        duration: 40,
        ease: "linear",
        repeat: -1,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative py-36 px-4">
      <div
        ref={titleRef}
        className="relative flex gap-2 md:gap-[4rem] flex-col md:flex-row md:items-center md:justify-center mb-12 z-10"
      >
        <h2
          style={{
            WebkitTextStroke: "2px #FF2DD1",
          }}
          className="text-5xl md:text-8xl font-extrabold text-transparent uppercase text-center md:text-left"
        >
          Career
        </h2>
        <h2
          className="text-5xl md:text-8xl font-extrabold uppercase text-center md:text-left text-transparent"
          style={{
            WebkitTextStroke: "2px #FF2DD1",
          }}
        >
          Journey
        </h2>
      </div>

      <div className="flex flex-col gap-8 md:gap-6 relative z-10">
        {experienceData.map((exp, idx) => (
          <ExperienceCard exp={exp} idx={idx} key={idx} />
        ))}
      </div>
    </div>
  );
}
