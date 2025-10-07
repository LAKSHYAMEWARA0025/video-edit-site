import React from "react";
import { motion } from "framer-motion";
import { SVGProps } from "react";

// --- SVG Icon (to remove external dependency) ---
const YouTubeIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" {...props}>
        <path d="M549.655 124.083c-6.281-23.65-24.787-42.118-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.479-41.992 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.292 23.65 24.787 42.118 48.284 48.597C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.479 41.992-24.947 48.284-48.597 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.208z"></path>
    </svg>
);


const OwnerInfo: React.FC = () => {
  const OWNER_YOUTUBE = "https://www.youtube.com/@itsvijaychoudhary/featured";
  const OWNER_USERNAME = "@itsvijaychoudhary";
  const OWNER_NAME = "Vijay Chaudhary";

  return (
    <section id="about" className="relative overflow-hidden bg-[#000000] py-20 px-6 sm:px-8">
      
      {/* Animated background gradient blobs */}
      <motion.div
        className="absolute top-[-100px] left-[-100px] w-96 h-96 bg-orange-900/20 rounded-full blur-3xl opacity-30"
        animate={{ x: [0, 200, 0], y: [0, 150, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-100px] right-[-100px] w-80 h-80 bg-[#1A1A1A]/50 rounded-full blur-3xl opacity-30"
        animate={{ x: [0, -200, 0], y: [0, -100, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
        
        {/* Title */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-12 drop-shadow-md font-secondary">
          We Did it, <span className="bg-gradient-to-r from-[#E0E0E0] to-[#D94E13] bg-clip-text text-transparent">You can too</span>
        </h2>

        {/* Text Content */}
        <div className="space-y-6 text-base sm:text-lg leading-relaxed text-gray-300 font-light px-2">
          <p>
            Today, most early-stage businesses can be built using AI. But what
            they often lack is distribution—something AI alone cannot solve.
            That’s where we come in.
          </p>
          <p>
            We’ve worked with several individual creators across India and even
            a few in London, helping them grow their online presence. This
            online presence doesn’t just build credibility, it also creates a
            strong distribution channel that directly fuels their business
            growth.
          </p>
          <p>
            Once you have distribution, running an online business becomes far
            easier. With greater reach and trust, your business can scale much
            faster without any cost.
          </p>
          <p>
            After spending years creating content that resonates with millions,
            I've realized one thing:{" "}
            <span className="font-semibold tracking-wide bg-gradient-to-r from-[#EFEFEF] to-[#A75A2B] bg-clip-text text-transparent">
              attention is the new currency.
            </span>
          </p>
          <p>
            With 100k+ views on YouTube and experience crafting 500+ videos, I
            help brands stand out through powerful storytelling and content
            strategy.
          </p>
          <p className="italic font-medium mt-8 text-orange-400/80">
            Every scroll, every click, every view Matters!!
          </p>
        </div>

        {/* Owner Info Card */}
        <motion.div
          className="mt-16 inline-block bg-[#1A1A1A] rounded-xl p-8 shadow-2xl transition-all duration-500 border border-transparent hover:border-orange-500/30"
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut" }}
          whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
        >
          <div className="flex flex-col items-center gap-4">
            <img
              src="/owner/owner.jpg"
              alt={OWNER_NAME}
              className="w-32 h-32 rounded-full object-cover border-4 border-orange-500/70 shadow-lg grayscale hover:grayscale-0 transition duration-500"
            />
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              {OWNER_NAME}
            </h3>
            
            {/* YouTube Link */}
            <a
              href={OWNER_YOUTUBE}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-orange-400 hover:text-orange-300 transition text-lg font-medium"
              aria-label={`Follow ${OWNER_NAME} on YouTube`}
            >
              <YouTubeIcon className="text-2xl" />
              {OWNER_USERNAME}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OwnerInfo;
