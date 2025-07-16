import { Suspense, lazy, useEffect, useState, useRef } from "react";

import "./App.css";

import Navbar from "./components/base/navbar";
import CustomCursor from "./components/base/custom-cursor";
import ScrollVelocity from "./components/base/velocity-text";
import Card from "./components/section/card";
import { worksItem } from "./data/data";
import BlurText from "./components/base/blurred-text";
import LoadingScreen from "./components/base/loading";
import ScrollFloat from "./components/base/scroll-float";
import Noise from "./components/base/noise";
import { AnimatePresence } from "framer-motion";

const Hero = lazy(() => import("./components/section/hero"));
const Career = lazy(() => import("./components/section/career"));
const Works = lazy(() => import("./components/section/works"));

export default function App() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fakeDelay = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(fakeDelay);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen />}
      </AnimatePresence>
      <Suspense fallback={<div className="fixed inset-0 bg-[#dbdbdb]" />}>
        <Navbar />

        <div className="fixed inset-0 z-[-1] pointer-events-none">
          <Noise
            patternSize={250}
            patternScaleX={1}
            patternScaleY={1}
            patternRefreshInterval={4}
            patternAlpha={15}
          />
        </div>

        {/* Static Background Layer */}
        <div className="fixed inset-0 bg-[#dbdbdb] z-[-2]" />

        {/* Main Content */}
        <div className="relative min-h-screen w-full overflow-y-auto scroll-smooth">
          <CustomCursor />

          <div className="relative z-10">
            {/* Hero Section */}
            <section
              id="home"
              className="h-full snap-start flex mt-[75px] pb-36 overflow-hidden"
            >
              <Hero />
            </section>

            {/* Works Section */}
            <section
              id="works"
              ref={sectionRef}
              className="h-full items-center lg:pt-32 text-white"
            >
              <div className="relative w-full h-full grid place-items-center overflow-hidden px-4">
                <img
                  src="/sunburst.svg"
                  alt="Radial Burst"
                  className="absolute inset-0 w-[150%] h-[150%] mx-auto my-auto spin-slow opacity-20"
                />

                <BlurText
                  direction="bottom"
                  text="FEATURED"
                  className="relative text-[4rem] lg:text-[10rem] text-[#FF2DD1] font-denton"
                />
                <BlurText
                  direction="top"
                  text="WORKS"
                  className="relative text-[4rem] lg:text-[10rem] lg:leading-[8rem] text-[#181818] font-denton"
                />
              </div>

              <div className="max-w-8xl mx-auto">
                <Works
                  items={worksItem.map((item) => ({
                    ...item,
                    type:
                      item.type === "image" || item.type === "video"
                        ? item.type
                        : "image",
                  }))}
                />
              </div>
            </section>

            {/* Career Section */}
            <section id="experience" className="pt-12 mx-auto">
              <Career />
            </section>

            {/* ScrollFloat Quote */}
            <div className="h-full md:pt-32 px-6">
              <ScrollFloat
                animationDuration={1}
                ease="back.inOut(2)"
                scrollStart="center bottom+=50%"
                scrollEnd="bottom bottom-=40%"
                textClassName="md:text-[5rem] text-[2rem] font-denton"
                stagger={0.01}
              >
                perfection isn't born out of love, it's forged in frustration,
                obsession, and an unrelenting pursuit of something better.
              </ScrollFloat>
            </div>

            {/* Footer */}
            <footer id="connect">
              <Card />
              <ScrollVelocity
                texts={["THANKS FOR VISIT!"]}
                className="custom-scroll-text"
              />
            </footer>
          </div>
        </div>
      </Suspense>
    </>
  );
}
