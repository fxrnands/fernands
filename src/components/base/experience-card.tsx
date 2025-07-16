"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ExperienceItem {
  role: string;
  company: string;
  type: string;
  date: string;
  location: string;
  description: string;
}

export default function ExperienceCard({
  exp,
  idx,
}: {
  exp: ExperienceItem;
  idx: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        {
          opacity: 0,
          y: 80,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: -idx * 20,
          scale: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            end: "bottom 60%",
            scrub: true,
          },
        }
      );
    });

    return () => ctx.revert();
  }, [idx]);

  return (
    <div
      ref={cardRef}
      className="border-[#181818] p-6 bg-[#dbdbdb] border flex flex-col md:flex-row md:justify-between gap-4 relative z-10 will-change-transform"
      style={{
        zIndex: idx - 100,
      }}
    >
      <div className="flex flex-col md:flex-row">
        <div className="font-denton mr-3 mb-2 md:mb-0">0{idx + 1}.</div>
        <div>
          <h3 className="text-3xl md:text-5xl font-denton font-bold">
            {exp.role}
          </h3>
          <p className="font-bold">{exp.company}</p>
          <div className="text-sm text-[#181818] mb-2">
            {exp.type} — {exp.date}
          </div>
          <div className="text-xs text-[#DC3C22] mb-4">{exp.location}</div>
        </div>
      </div>
      <p className="font-satoshi text-sm text-[#181818] md:w-[50%]">
        {exp.description}
      </p>
    </div>
  );
}
