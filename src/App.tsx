import { Suspense, lazy, useEffect, useState, useRef } from "react";

import "./App.css";

import Navbar from "./components/base/navbar";
import CustomCursor from "./components/base/custom-cursor";
import ScrollVelocity from "./components/base/velocity-text";
import Card from "./components/section/card";
import { worksItem } from "./data/data";
import BlurText from "./components/base/blurred-text";
import LoadingScreen from "./components/base/loading";
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
                  className="absolute h-full inset-0 w-[150%] mx-auto my-auto spin-slow opacity-20"
                />

                <BlurText
                  direction="bottom"
                  text="FEATURED"
                  className="relative text-[4rem] leading-tight lg:leading-[9rem] lg:text-[10rem] text-[#FF2DD1] font-denton"
                />
                <BlurText
                  direction="top"
                  text="WORKS"
                  className="relative text-[4rem] leading-tight lg:text-[10rem] lg:leading-[8rem] text-[#181818] font-denton"
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
