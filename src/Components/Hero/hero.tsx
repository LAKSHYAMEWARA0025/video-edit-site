import { motion } from "framer-motion";
import React from "react";

const PlayIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
    <path fill="currentColor" d="M549.655 124.083c-6.28-23.746-24.835-42.228-48.4-48.423C477.595 59.837 452.548 64 288 64S98.405 59.837 74.745 75.66c-23.565 6.195-42.12 24.677-48.4 48.423C22.32 153.29 20 206 20 256s2.32 102.71 6.345 131.917c6.28 23.746 24.835 42.228 48.4 48.423C98.405 454.163 123.452 448 288 448s189.595 6.163 213.255-9.66c23.565 6.195 42.12-24.677 48.4-48.423C553.68 358.71 556 306 556 256s-2.32-102.71-6.345-131.917zM288 368c-57.392 0-104-46.608-104-104s46.608-104 104-104 104 46.608 104 104-46.608 104-104 104zM232 216V300L352 258L232 216z"/>
  </svg>
);

const EyeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
    <path fill="currentColor" d="M288 80c-78.5 0-149.7 35.7-198.8 91.2c-15.3 17.6-25.1 39.4-28.7 63.3c-1.8 11.9-1.8 24.1 0 36c3.6 23.9 13.4 45.7 28.7 63.3C138.3 396.3 209.5 432 288 432s149.7-35.7 198.8-91.2c15.3-17.6 25.1-39.4 28.7-63.3c1.8-11.9 1.8-24.1 0-36c-3.6-23.9-13.4-45.7-28.7-63.3C437.7 115.7 366.5 80 288 80zm0 304c-47.6 0-91.8-20.9-122.9-55.5c-31.1-34.5-47.1-79.6-47.1-126.5s16-91.9 47.1-126.5C196.2 116.9 240.4 96 288 96s91.8 20.9 122.9 55.5c31.1 34.5 47.1 79.6 47.1 126.5s-16 91.9-47.1 126.5C379.8 363.1 335.6 384 288 384zM288 192c-35.3 0-64 28.7-64 64s28.7 64 64 64s64-28.7 64-64s-28.7-64-64-64z"/>
  </svg>
);

const CalendarIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
    <path fill="currentColor" d="M128 0v32h192V0h64v32h32c17.7 0 32 14.3 32 32v416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32h32V0h64zm320 96H32v344h384V96zM112 160h32v32h-32v-32zm160 0h32v32h-32v-32zm-80 0h32v32h-32v-32zm-80 80h32v32h-32v-32zm80 0h32v32h-32v-32zm80 0h32v32h-32v-32zm-160 80h32v32h-32v-32zm80 0h32v32h-32v-32zm80 0h32v32h-32v-32z"/>
  </svg>
);

const Hero: React.FC = () => {
  const itemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };
  const statItems = [
    { text: "250M+ Views Generated", icon: PlayIcon },
    { text: "4+ Years of Building Personal Brands", icon: EyeIcon },
    { text: "5000+ Videos Created", icon: CalendarIcon },
  ];

  return (
    <section className="relative min-h-screen w-full bg-black bg-[url('/HomePageBg/homepage.jpg')] bg-center bg-cover">
      {/* Dark overlay */}
      <div className="absolute inset-0 z-10 bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(0,0,0,0.5)_30%,rgba(0,0,0,0.85)_80%,rgba(0,0,0,1)_100%)]"></div>

      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4 py-20 md:py-32 gap-8">
        {/* Headline */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bebas text-white max-w-5xl tracking-tight"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          We help{" "}
          <span className="bg-gradient-to-r from-[#E0E0E0] to-[#D94E13] bg-clip-text text-transparent">
            startups and businesses
          </span>{" "}
          build their profitable{" "}
          <span className="bg-gradient-to-r from-[#E0E0E0] to-[#D94E13] bg-clip-text text-transparent">
            personal brands
          </span>{" "}
          that actually creates distribution.
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="text-gray-300 text-lg sm:text-xl max-w-3xl"
          variants={itemVariants}
        >
          Transform your knowledge into compelling short-form videos that
          captivate your audience, generate leads effortlessly, and build a
          brand they can’t ignore.
        </motion.p>

        {/* CTA */}
        <motion.div variants={itemVariants}>
          <a
            href="https://cal.com/itsvijaychoudhary/schedule-a-call"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[linear-gradient(to_right,#262626,#502D1B_45%,#BF4C13)] text-white px-8 sm:px-10 py-4 rounded-lg shadow-xl shadow-orange-500/30 text-base sm:text-lg font-bold uppercase transition-all duration-300 transform hover:scale-105"
          >
            Book a Free Discovery Call
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="flex flex-col md:flex-row gap-4 mt-8 w-full max-w-5xl justify-center"
          variants={{
            hidden: { opacity: 0.7 },
            visible: { transition: { staggerChildren: 0.2 } },
          }}
          initial="hidden"
          animate="visible"
        >
          {statItems.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="flex items-center gap-3 px-5 py-3 rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:border-white/50 transition-all duration-300 text-white text-base md:text-lg w-full md:w-auto justify-center"
            >
              <item.icon className="w-6 h-6 text-white/90" />
              <span className="font-semibold">{item.text}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

