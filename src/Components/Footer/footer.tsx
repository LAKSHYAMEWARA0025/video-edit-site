import React, { SVGProps } from 'react';
import { useInView } from 'react-intersection-observer'; 
import { motion, Variants } from 'framer-motion';

// --- Local Typewriter Effect Component ---
const TypewriterEffectSmooth = ({ words }: { words: { text: string; className?: string }[] }) => {
    const containerVariants:Variants = {
      hidden: { opacity: 0 },
      visible: (i = 1) => ({
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: i * 0.1 },
      }),
    };
  
    const childVariants:Variants = {
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          type: "spring",
          damping: 12,
          stiffness: 100,
        },
      },
      hidden: {
        opacity: 0,
        x: -20,
        transition: {
          type: "spring",
          damping: 12,
          stiffness: 100,
        },
      },
    };
  
    return (
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-wrap items-center justify-center"
      >
        {words.map((word, idx) => (
          <motion.span
            key={`word-${idx}`}
            variants={childVariants}
            className={`mr-2 mt-2 ${word.className}`}
          >
            {word.text}
          </motion.span>
        ))}
      </motion.div>
    );
};


// --- SVG Icons ---
const YoutubeIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" {...props}>
      <path d="M549.655 124.083c-6.28-23.746-24.835-42.228-48.4-48.423C477.595 59.837 452.548 64 288 64S98.405 59.837 74.745 75.66c-23.565 6.195-42.12 24.677-48.4 48.423C22.32 153.29 20 206 20 256s2.32 102.71 6.345 131.917c6.28 23.746 24.835 42.228 48.4 48.423C98.405 454.163 123.452 448 288 448s189.595 6.163 213.255-9.66c23.565-6.195 42.12-24.677 48.4-48.423C553.68 358.71 556 306 556 256s-2.32-102.71-6.345-131.917zM232 308l128-52-128-52v104z"></path>
    </svg>
);
const InstagramIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" {...props}>
        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.5 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9 26.3 26.2 58 34.4 93.9 36.2 37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
    </svg>
);
const LinkedinIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" {...props}>
        <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.7 14.3 480 31.9 480H416c17.6 0 32-14.3 32-31.9V64.3C448 46.5 433.7 32 416 32zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
    </svg>
);
const TwitterIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" {...props}>
        <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
    </svg>
);

const Footer: React.FC = () => {
  const CAL_LINK = "https://cal.com/itsvijaychoudhary/schedule-a-call";
  const EMAIL = "vijay9828choudhary@gmail.com";

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const heroWords = [
    { text: "We", className: "text-white" },
    { text: "help" },
    { text: "startups", className: "bg-gradient-to-r from-gray-200 to-orange-500 bg-clip-text text-transparent" },
    { text: "and", className: "text-white" },
    { text: "businesses" },
    { text: "build", className: "text-white" },
    { text: "their", className: "text-white" },
    { text: "profitable", className: "text-white" },
    { text: "personal", className: "text-white" },
    { text: "brands", className: "text-white" },
    { text: "that", className: "text-white" },
    { text: "actually", className: "text-white" },
    { text: "creates", className: "bg-gradient-to-r from-gray-200 to-orange-500 bg-clip-text text-transparent" },
    { text: "distribution.", className: "text-white" },
  ];

  return (
    <footer className="relative bg-[#000000] text-white pt-24 pb-10 px-6 sm:px-10 md:px-16 overflow-x-hidden font-primary">
      <div 
        ref={ref}
        className="relative z-10 flex flex-col items-center justify-center text-center max-w-7xl mx-auto pb-20 border-b border-gray-800"
      >
        <div className="text-3xl sm:text-4xl md:text-5xl font-bold max-w-5xl min-h-[6rem] sm:min-h-[8rem] flex items-center justify-center p-4">
          {inView ? (
            <TypewriterEffectSmooth words={heroWords} />
          ) : (
            <p className="opacity-0">We help startups and businesses build their profitable personal brands that actually creates distribution.</p>
          )}
        </div>

        <p className="mt-6 max-w-2xl text-base sm:text-lg text-gray-400 font-light px-4 sm:px-0">
          Transform your knowledge into compelling short-form videos that
          captivate your audience, generate leads effortlessly, and build a
          brand they can’t ignore.
        </p>

        <a
          href={CAL_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-block text-white px-8 sm:px-10 py-3.5 rounded-lg shadow-lg 
                     text-md sm:text-lg font-semibold tracking-wide uppercase transition-all duration-300 
                     bg-[linear-gradient(to_right,#BF4C13,#502D1B_45%,#262626)]
                     hover:brightness-125 transform hover:scale-105"
        >
          Book a Free Discovery Call
        </a>
      </div>

      <div className="relative z-10 pt-10 flex flex-col md:flex-row justify-between items-center md:items-end max-w-7xl mx-auto gap-12">
        <div className="flex flex-col items-center md:items-start gap-2 flex-shrink-0">
          <img src="/logo/Whitelogo.png" alt="Logo" className="w-24 h-auto drop-shadow-lg" />
          <span className="text-2xl sm:text-3xl font-bold tracking-wider text-white">The Final Cut</span>
          <p className="text-sm text-gray-500 mt-1">A Personal Branding Studio.</p>
        </div>

        <div className="text-center md:text-right w-full md:w-auto">
          <h4 className="text-lg font-bold text-orange-500 mb-3 uppercase tracking-wider">Connect</h4>
          
          <p className="text-base text-gray-300 mb-4">
            <a href={`mailto:${EMAIL}`} className="hover:text-orange-400 transition-colors flex items-center justify-center md:justify-end gap-2">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="w-4 h-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M48 64C21.5 64 0 85.5 0 112v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zM152 224l-40 32-40-32-5.7-4.5c-3.1-2.4-7.5-2.5-10.7-.1S48 226.2 48 230v144c0 6.6 5.4 12 12 12h384c6.6 0 12-5.4 12-12V230c0-3.8-2.1-7.2-5.5-9.1s-7.6-2.3-10.7.1L400 224l-40 32-40-32-40 32-40-32-40 32-40-32-40 32-40-32zM48 128h416v37.4c-20.1 16.1-43.8 33.1-66.5 51.2l-36 28.8-40-32-40 32-40-32-40 32-40-32-40 32-36-28.8C91.8 198.5 68.1 181.5 48 165.4V128z"></path></svg>
                {EMAIL}
            </a>
          </p>
          
          <div className="flex gap-5 justify-center md:justify-end text-gray-300">
            <a href="https://www.youtube.com/@itsvijaychoudhary/featured" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors" aria-label="YouTube"><YoutubeIcon className="w-7 h-7" /></a>
            <a href="https://www.instagram.com/itsvijaychoudhary/" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors" aria-label="Instagram"><InstagramIcon className="w-7 h-7" /></a>
            <a href="https://www.linkedin.com/in/itsvijaychoudhary/" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors" aria-label="LinkedIn"><LinkedinIcon className="w-7 h-7" /></a>
            <a href="https://x.com/_vijaychoudhary" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors" aria-label="Twitter/X"><TwitterIcon className="w-7 h-7" /></a>
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-12 pt-6 border-t border-gray-800 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} The Final Cut. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

