import {
  tagline,
  introduction,
  experiences,
} from "../../animation/hero-text-animation";
import BlurText from "../base/blurred-text";
import DecayCard from "../base/decay-card";
import CircularText from "../base/spin-text";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="max-w-8xl mx-auto">
      <div className="flex">
        <BlurText
          direction="bottom"
          delay={100}
          onAction={1000}
          className="lg:max-w-[90%] text-[#181818] mix-blend-difference px-6 uppercase 
          lg:text-[6rem] text-[2.5rem] leading-[3rem] lg:leading-[6rem] font-denton"
          text={tagline}
        />
      </div>

      <div className="w-full mt-4 flex flex-col md:flex-row justify-between gap-y-12">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          className="px-6 w-full md:w-auto flex justify-center md:justify-start"
        >
          <CircularText
            text="DESIGN*CREATIVE*CODING*"
            onHover="speedUp"
            spinDuration={30}
            className="custom-class cursor-none mt-12"
          />
        </motion.div>

        <div className="w-full md:max-w-[40%] flex flex-col items-center md:items-start">
          <BlurText
            delay={100}
            onAction={1000}
            className="lg:text-sm  uppercase h-fit px-6 text-xl font-satoshi mt-10 font-semibold text-center md:text-left"
            text={introduction}
          />

          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            className="md:flex hidden justify-center top-12 right-0 relative w-full"
          >
            <DecayCard image="/roses_bnw.jpg" />
          </motion.div>
        </div>
      </div>

      <BlurText
        delay={9}
        onAction={1000}
        className="lg:text-sm uppercase my-12 px-6 text-sm font-satoshi lg:max-w-[60%] mt-10 font-semibold text-center md:text-left"
        text={experiences}
      />
    </div>
  );
};

export default Hero;
