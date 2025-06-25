import { tagline, introduction } from "../../animation/hero-text-animation";
import GlassIcons from "../base/glass-button";
import type { GlassIconsItem } from "../base/glass-button";
import BlurText from "../base/blurred-text";

interface Props {
  buttonLink: GlassIconsItem[];
}

const Hero = ({ buttonLink }: Props) => {
  return (
    <section
      id="home"
      className="h-screen snap-start flex items-center text-white overflow-hidden"
    >
      <div className="max-w-7xl mt-20 px-6 mx-auto">
        <BlurText
          className="lg:max-w-[70%] lg:text-[6rem] text-[3rem] leading-[3rem] lg:leading-[6rem] font-bold"
          text={tagline}
        />

        <BlurText
          className="lg:text-2xl text-xl lg:max-w-[40%] mt-10 font-bold"
          text={introduction}
        />

        <GlassIcons items={buttonLink} />
      </div>
    </section>
  );
};

export default Hero;
