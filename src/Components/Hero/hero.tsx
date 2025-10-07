import { motion } from "framer-motion";
import React from "react";

// --- Design Palette Mapping ---
// Black: #000000 (background)
// Charcoal Gray: #121212 
// Steel Gray: #2E2E2E 
// Electric Blue: #2196F3 (Accent)

const Hero: React.FC = () => {
  
  // Animation variants for the main content block (staggered entry)
  const contentVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2, // Increased stagger for better visual effect
      },
    },
  };

  // Animation variants for individual text lines and buttons (fade up)
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const statItems = [
    "100M+ Views generated",
    "3+ years of building a personal brand",
    "400+ videos created",
  ];

  return (
    // Base background is Black, height covers the screen
    <section className="relative w-full h-screen min-h-[600px] bg-[#000000] overflow-hidden">
      
      {/* Video Background - Ensures full coverage, even on mobile/desktop aspect ratios */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover transform -translate-x-1/2 -translate-y-1/2"
      >
        <source src="/HomePageBg/HomepageBG.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay: Dark overlay opacity reduced from 80% to 50% so the video is visible */}
      <div className="absolute inset-0 bg-[#121212]/50"></div>

      {/* Hero Content - FIX: Added overflow-x-hidden for responsive safety */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center 
                   min-h-[calc(100vh-80px)] pt-48 pb-10 px-4 text-center text-white w-full overflow-x-hidden"
        // variants={contentVariants} // Applied contentVariants here for staggered children
        initial="hidden"
        animate="visible"
      >
        {/* Headline */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight max-w-5xl drop-shadow-lg"
          variants={itemVariants}
        >
          We help{" "}
          <span className="text-[#2196F3] underline decoration-solid underline-offset-8">
            startups and businesses
          </span>{" "}
          build{" "}
          <span className="text-white">
            their profitable personal brands
          </span>{" "}
          that actually{" "}
          <span className="text-[#2196F3] underline decoration-solid underline-offset-8">
            creates distribution.
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="mt-8 max-w-3xl text-base sm:text-xl text-gray-300 font-light"
          variants={itemVariants}
        >
          Transform your knowledge into compelling short-form videos that
          captivate your audience, generate leads effortlessly, and build a
          brand they can’t ignore.
        </motion.p>

        {/* CTA Button */}
        <motion.div variants={itemVariants} className="mt-10">
          <a
            href="https://cal.com/itsvijaychoudhary/schedule-a-call"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#2196F3] text-white px-10 py-3.5 rounded-lg shadow-xl shadow-[#2196F3]/40 
                       text-lg font-semibold tracking-wide uppercase transition-all duration-300 
                       hover:bg-white hover:text-[#2196F3] hover:shadow-none transform hover:scale-[1.02]"
          >
            Book a Free Discovery Call
          </a>
        </motion.div>

        {/* Stat Buttons - FIX: Ensured wrapping on small screens (added md:flex-row) */}
        <motion.div
          className="mt-16 flex flex-col md:flex-row justify-center gap-4 max-w-5xl"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {statItems.map((text, idx) => (
            <motion.button
              key={idx}
              variants={itemVariants}
              className="flex items-center justify-center text-center gap-2 border border-[#2E2E2E] px-5 py-2 rounded-full 
                          bg-[#1A1A1A]/70 backdrop-blur-sm 
                          hover:bg-[#2196F3] hover:border-[#2196F3] hover:text-white 
                          transition-all duration-300 text-sm text-gray-300 shadow-lg w-full md:w-auto"
            >
              {text}
            </motion.button>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
