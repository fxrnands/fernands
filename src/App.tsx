import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./App.css";
import Navbar from "./components/base/navbar";
import ExperienceSection from "./components/section/experience";
import FlowingMenu from "./components/base/flowing-menus";
import CustomCursor from "./components/base/custom-cursor";
import Hero from "./components/section/hero";
import Works from "./components/section/works";
import BlurText from "./components/base/blurred-text";
import Particles from "./components/base/particles";
import { worksItem, specialist } from "./data/data";
import ScrollFloat from "./components/base/scroll-text";
import { useRef } from "react";
import Card from "./components/section/card";

const App = () => {
  const scrollTextRef = useRef<HTMLElement>(null);
  const buttonLink = [
    { icon: <FaGithub />, color: "black", label: "Github" },
    { icon: <FaLinkedin />, color: "black", label: "Linkedin" },
    { icon: <FaInstagram />, color: "black", label: "Instagram" },
  ];

  return (
    <>
      <Navbar />
      <div className="relative min-h-screen w-full snap-y snap-mandatory overflow-y-scroll scroll-smooth">
        <CustomCursor />
        <div className="fixed inset-0 h-full z-10 pointer-events-none">
          <Particles
            particleColors={["#ffffff", "#ffffff"]}
            particleCount={200}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>
        <div className="fixed inset-0 bg-black z-[-1]" />

        <div className="relative z-10">
          <Hero buttonLink={buttonLink} />
          <ExperienceSection />
          <section
            id="specialist"
            className="h-screen snap-start flex items-center justify-center text-white"
          >
            <FlowingMenu items={specialist} />
          </section>

          <section
            id="connect"
            className="h-full snap-start items-center justify-center  text-white"
          >
            <div className="max-w-7xl pt-24 mx-auto px-6">
              <div className="flex items-center gap-4  mb-8">
                <BlurText
                  text="What I've Built"
                  className="text-3xl lg:text-5xl font-bold whitespace-nowrap"
                />

                <div className="flex-1 lg:block hidden h-[2px] bg-white relative">
                  <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full"></span>
                </div>
              </div>
              <Works
                items={worksItem}
                ease="power3.out"
                duration={0.6}
                stagger={0.05}
                animateFrom="random"
                scaleOnHover={true}
                hoverScale={0.95}
                blurToFocus={true}
                colorShiftOnHover={false}
              />
            </div>
          </section>
          <section
            id="trailtext"
            ref={scrollTextRef}
            className="h-screen flex flex-col mt-[35rem] lg:mt-64 max-w-7xl px-6 mx-auto items-center justify-center [scroll-snap-align:none] text-white"
          >
            <ScrollFloat
              animationDuration={1}
              ease="back.inOut(2)"
              triggerRef={scrollTextRef}
              scrollStart="top 250%"
              stagger={0.03}
            >
              Crafting bold ideas into digital realities — shall we?
            </ScrollFloat>
            <Card />
          </section>
        </div>
      </div>
    </>
  );
};

export default App;
