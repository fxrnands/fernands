import { useEffect, useState, Suspense, lazy, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

import "./App.css";

import Navbar from "./components/base/navbar";
import CustomCursor from "./components/base/custom-cursor";
import ScrollVelocity from "./components/base/velocity-text";
import Card from "./components/section/card";

const Hero = lazy(() => import("./components/section/hero"));
const ExperienceSection = lazy(() => import("./components/section/experience"));
const FlowingMenu = lazy(() => import("./components/base/flowing-menus"));
const Works = lazy(() => import("./components/section/works"));
const Particles = lazy(() => import("./components/base/particles"));
const SpaceStation = lazy(() => import("./components/base/space-station"));
import { specialist, worksItem } from "./data/data";
import BlurText from "./components/base/blurred-text";

const App = () => {
  const [scrollY, setScrollY] = useState(0);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
      debounceRef.current = setTimeout(() => {
        setScrollY(window.scrollY);
      }, 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const buttonLink = [
    { icon: <FaGithub />, color: "black", label: "Github" },
    { icon: <FaLinkedin />, color: "black", label: "Linkedin" },
    { icon: <FaInstagram />, color: "black", label: "Instagram" },
  ];

  return (
    <Suspense
      fallback={
        <div className="fixed inset-0 flex items-center justify-center text-white bg-black z-50">
          Loading Website...
        </div>
      }
    >
      <Navbar />

      <div className="relative min-h-screen w-full overflow-y-scroll scroll-smooth">
        <CustomCursor />

        <div className="fixed inset-0 z-0 pointer-events-none">
          <Particles
            particleColors={["#ffffff"]}
            particleCount={100}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          />

          <div className="fixed inset-0 lg:block hidden z-[1] pointer-events-none">
            <Canvas
              frameloop="always"
              camera={{ position: [0, 0, 10], fov: 50 }}
              style={{ width: "100%", height: "100%" }}
            >
              <ambientLight intensity={1} />
              <Suspense fallback={null}>
                <SpaceStation scrollY={scrollY} />
              </Suspense>
            </Canvas>
          </div>
        </div>

        <div className="fixed inset-0 bg-black z-[-1]" />

        <div className="relative z-10">
          <Hero buttonLink={buttonLink} />
          <ExperienceSection />

          <section
            id="specialist"
            className="h-screen flex items-center justify-center text-white"
          >
            <FlowingMenu items={specialist} />
          </section>

          <section
            id="connect"
            className="h-full items-center justify-center pb-36 lg:pb-0 text-white"
          >
            <div className="max-w-7xl pt-24 mx-auto px-6">
              <div className="flex items-center gap-4 mb-4">
                <BlurText
                  text="THINGS I MADE"
                  className="text-3xl lg:text-5xl font-bold whitespace-nowrap"
                />
                <div className="flex-1 h-[2px] lg:block hidden bg-white relative">
                  <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full"></span>
                </div>
              </div>

              <Works
                items={worksItem}
                ease="power3.out"
                duration={0.6}
                stagger={0.05}
                animateFrom="random"
                scaleOnHover
                hoverScale={0.95}
                blurToFocus
              />
            </div>
          </section>

          <footer>
            <Card />
            <ScrollVelocity
              texts={["THANKS FOR VISIT!"]}
              className="custom-scroll-text"
            />
          </footer>
        </div>
      </div>
    </Suspense>
  );
};

export default App;
