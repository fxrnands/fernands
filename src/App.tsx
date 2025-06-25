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

const App = () => {
  const specialist = [
    {
      text: "Mobile Development",
      image: "/mobile_development.jpg",
    },
    {
      text: "Website Development",
      image: "/web_development.jpg",
    },
    {
      text: "UI/UX Design",
      image: "uiux.png",
    },
    {
      text: "Creative Design",
      image: "creative_design.jpg",
    },
    {
      text: "Blockchain",
      image: "blockchain.png",
    },
  ];

  const buttonLink = [
    { icon: <FaGithub />, color: "black", label: "Github" },
    { icon: <FaLinkedin />, color: "black", label: "Linkedin" },
    { icon: <FaInstagram />, color: "black", label: "Instagram" },
  ];

  const worksItem = [
    {
      id: "1",
      img: "/onedaybiotech.png",
      url: "https://dev-onedaybiotech-cms.vercel.app/",
      height: 400,
    },
    {
      id: "2",
      img: "/brimofstvl.png",
      url: "https://brimofstvl.bri.co.id/",
      height: 300,
    },
    {
      id: "3",
      img: "/zoetispetz.png",
      url: "https://onelink.to/k6b9da",
      height: 600,
    },
    {
      id: "4",
      img: "/pratiwi.png",
      url: "/",
      height: 340,
    },
    {
      id: "5",
      img: "/waytodo.png",
      url: "/",
      height: 550,
    },
    {
      id: "6",
      img: "/dumbflix.png",
      url: "/",
      height: 700,
    },
    {
      id: "7",
      img: "/mindsetlab.png",
      url: "https://mindsetlab.id/",
      height: 325,
    },
    {
      id: "8",
      img: "/cinemaonline.png",
      url: "/",
      height: 400,
    },
    {
      id: "9",
      img: "/harmouni.png",
      url: "/",
      height: 300,
    },
    {
      id: "10",
      img: "/bricams.png",
      url: "https://bricams.bri.co.id/",
      height: 330,
    },
    {
      id: "11",
      img: "/nusantara.png",
      url: "/",
      height: 450,
    },
    {
      id: "12",
      img: "/pancasakti.png",
      url: "/",
      height: 250,
    },
  ];

  return (
    <>
      <Navbar />
      <div className="relative h-screen w-full snap-y snap-mandatory overflow-y-scroll scroll-smooth">
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
            id="thankyou"
            className="h-screen snap-start flex items-center justify-center text-white"
          ></section>
        </div>
      </div>
    </>
  );
};

export default App;
