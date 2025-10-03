import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden pt-16">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/HomePageBg/HomepageBG.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center text-textMain">
        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading leading-tight max-w-4xl">
          We help{" "}
          <span className="text-textMuted underline underline-offset-4">
            startups and businesses
          </span>{" "}
          build{" "}
          their profitable personal brands{" "}
          that actually{" "}
          <span className="text-textMuted underline underline-offset-4">
            creates distribution.
          </span>
        </h1>

        {/* Subtext */}
        <p className="mt-6 max-w-2xl text-base sm:text-lg text-textMuted font-primary">
          Transform your knowledge into compelling short-form videos that
          captivate your audience, generate leads effortlessly, and build a
          brand they can’t ignore.
        </p>

        {/* CTA Button */}
        <a
          href="#contact"
          className="mt-6 bg-primary text-white px-6 py-3 rounded-md hover:bg-accent transition font-medium"
        >
          Book a Free Discovery Call
        </a>

        {/* Stat Buttons */}
        <motion.div
          className="mt-10 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
        >
          {[
            "100M+ Views generated",
            "3+ years of building a personal brand",
            "400+ videos created",
          ].map((text, idx) => (
            <button
              key={idx}
              className="flex items-center gap-2 border border-textMuted px-4 py-2 rounded-full bg-bg/70 backdrop-blur-sm hover:bg-bg/90 hover:scale-105 hover:text-white transition-all duration-300 text-sm text-textMuted"
            >
              {/* Optional icon can go here */}
              {text}
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
