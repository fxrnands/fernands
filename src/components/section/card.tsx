import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import RotatingText from "../base/rotating-text";
import { AnimatedButton } from "../base/animated-button";

const Card = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="w-full  border border-[#181818] bg-[#dbdbdb] backdrop-blur-sm px-6 shadow-xl">
      <div className="lg:flex mx-auto">
        <div className="lg:w-[50%] lg:border-r py-4 lg:mr-8">
          <h3 className="lg:text-[3.5rem] text-3xl font-extrabold uppercase text-[#181818] mb-2">
            Let’s talk about
          </h3>
          <h3 className="lg:text-[3.5rem] font-extrabold uppercase text-3xl h-fit gap-5 flex text-[#181818] mb-2">
            your
            <RotatingText
              texts={[
                "Idea",
                "Project",
                "Vision",
                "Dream",
                "Story",
                "Product",
                "Business",
                "Challenge",
                "Journey",
                "Experience",
                "Brand",
                "Prototype",
              ]}
              mainClassName="px-6 bg-[#181818] text-white overflow-hidden lg:pt-0 pt-1 justify-center rounded-lg"
              staggerFrom="last"
              //@ts-ignore
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              //@ts-ignore
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
          </h3>
          <p className="lg:mt-12 mt-6 text-[#181818] font-satoshi lg:w-[90%] mb-4">
            Whether it's an idea, a collaboration, or just to say hello — I'm
            always up for a good conversation.
          </p>
        </div>

        <div className="flex lg:w-[50%] py-4 flex-col gap-3">
          {!showForm ? (
            <AnimatedButton onClick={() => setShowForm(true)} />
          ) : (
            <AnimatePresence>
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4 }}
                onSubmit={(e) => {
                  e.preventDefault();
                  const subject = (e.currentTarget.subject as HTMLInputElement)
                    .value;
                  const body = (e.currentTarget.message as HTMLTextAreaElement)
                    .value;
                  window.location.href = `mailto:fxrnands@gmail.com?subject=${encodeURIComponent(
                    subject
                  )}&body=${encodeURIComponent(body)}`;
                }}
                className="flex flex-col gap-3"
              >
                <input
                  type="text"
                  name="subject"
                  placeholder="What's your name, visionary?"
                  className="px-4 py-2 rounded-md bg-white/10 text-[#181818] placeholder-[#181818] border border-[#181818] focus:outline-none focus:ring-2 focus:ring-white/30"
                  required
                />
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Got an idea, a brief, or just vibes? Lay it out here."
                  className="px-4 py-2 rounded-md bg-white/10 text-[#181818] placeholder-[#181818] border border-[#181818] resize-none focus:outline-none focus:ring-2 focus:ring-white/30"
                  required
                />
                <button
                  type="submit"
                  className="bg-[#181818] text-[#dbdbdb] text-center px-4 py-2 border border-[#181818] rounded-md font-medium hover:bg-white/90 transition"
                >
                  Send Email
                </button>
              </motion.form>
            </AnimatePresence>
          )}

          <a
            href="https://www.linkedin.com/in/fxrnands/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#181818] h-full flex items-center cursor-none justify-center border border-[#181818] px-4 py-2 rounded-md hover:bg-white/10 transition"
          >
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
