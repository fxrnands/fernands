import RotatingText from "../base/rotating-text";

const Card = () => {
  return (
    <div className="mt-12 w-full lg:flex rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 shadow-xl">
      <div className="lg:w-[50%] lg:border-r lg:mr-8">
        <h3 className="text-[3.5rem] font-bold text-white mb-2">
          Let’s talk about
        </h3>
        <h3 className="text-[3.5rem] h-fit gap-5 flex font-bold text-white mb-2">
          your
          <RotatingText
            texts={["Idea", "Project"]}
            mainClassName="px-6  bg-white text-black overflow-hidden justify-center rounded-lg"
            staggerFrom={"last"}
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
        <p className="mt-12 text-white/80 lg:w-[90%] mb-4">
          Whether it's an idea, a collaboration, or just to say hello — I'm
          always up for a good conversation.
        </p>
      </div>

      <div className="flex lg:w-[50%] flex-col gap-3">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const subject = (e.currentTarget.subject as HTMLInputElement).value;
            const body = (e.currentTarget.message as HTMLTextAreaElement).value;
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
            className="px-4 py-2 rounded-md bg-white/10 text-white placeholder-white/50 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/30"
            required
          />
          <textarea
            name="message"
            rows={4}
            placeholder="Got an idea, a brief, or just vibes? Lay it out here."
            className="px-4 py-2 rounded-md bg-white/10 text-white placeholder-white/50 border border-white/20 resize-none focus:outline-none focus:ring-2 focus:ring-white/30"
            required
          />
          <button
            type="submit"
            className="bg-white text-black text-center px-4 py-2 rounded-md font-medium hover:bg-white/90 transition"
          >
            Send Email
          </button>
        </form>
        <a
          href="https://www.linkedin.com/in/fxrnands/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white h-full flex items-center justify-center border border-white/30 px-4 py-2 rounded-md hover:bg-white/10 transition"
        >
          Connect on LinkedIn
        </a>
      </div>
    </div>
  );
};

export default Card;
