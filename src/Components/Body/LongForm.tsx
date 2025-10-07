import { useRef, useState, useEffect, SVGProps } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- SVG Icons (to remove external dependency) ---
const PlayIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" {...props}>
      <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path>
    </svg>
  );
  
const PauseIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" {...props}>
      <path d="M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z"></path>
    </svg>
);
  
const VolumeUpIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512" {...props}>
      <path d="M533.6 32.5C512.2 11.1 479.2 0 448 0h-16c-17.7 0-32 14.3-32 32s14.3 32 32 32h16c19.3 0 37.9 7.6 51.6 21.3l80 80c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L426.7 138.7c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l102.4 102.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l80-80c13.7-13.7 21.3-32.3 21.3-51.6v-16c0-31.2-11.1-64.2-32.5-85.6zM256 0c-17.7 0-32 14.3-32 32v448c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32zM128 64c-17.7 0-32 14.3-32 32v320c0 17.7 14.3 32 32 32s32-14.3 32-32V96c0-17.7-14.3-32-32-32zM0 192c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32s32-14.3 32-32v-64c0-17.7-14.3-32-32-32z"></path>
    </svg>
);
  
const VolumeMuteIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" {...props}>
      <path d="M301.1 34.8C312.6 40 320 51.4 320 64V448c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64v-64c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3zM425 167l55 55 55-55c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-55 55 55 55c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-55-55-55 55c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l55-55-55-55c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z"></path>
    </svg>
);

const ChevronLeftIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 512" {...props}>
        <path d="M192 448c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l137.4 137.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448z" />
    </svg>
);

const ChevronRightIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 512" {...props}>
        <path d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z" />
    </svg>
);


const longFormContent = [
  {
    title: "Brand Strategy Design",
    involvement: "1-2 hours",
    description:
      "Map your entire content ecosystem in one powerful session. We'll craft your unique angle, design your hooks, and build your content strategy. Get the first 1-3 month brand strategy ideated in week 1. We'll nail down brand assets and start content production from week 2.",
    videoSrc: "/videos/long1.mp4",
  },
  {
    title: "Scaling Content Sessions",
    involvement: "4-5 hours",
    description:
      "We run 1-2 recording sessions monthly (1-1.5 hours each). We transform these into 40-50 pieces of content across videos, animations, carousels and stories. This ensures a consistent, high-quality flow across all platforms.",
    videoSrc: "/videos/long2.mp4",
  },
  {
    title: "Watch Your Brand Scale",
    involvement: "0 hours",
    description:
      "While you’re closing deals and running your business, we’re turning your expertise into a content empire that fills leads for your product/service. Your brand works 24/7 so you don’t have to.",
    videoSrc: "/videos/long3.mp4",
  },
  {
    title: "Monetization Workshop",
    involvement: "2 hours",
    description:
      "A dedicated session to refine your funnels, optimize ad placement, and integrate e-commerce solutions directly into your content. We ensure every view has a clear path to conversion for maximum ROI.",
    videoSrc: "/videos/long4.mp4",
  },
];

const LongFormSection = () => {
  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;
    vid.muted = !!isMuted;
    if (isPlaying) {
      vid.play().catch(() => {});
    } else {
      vid.pause();
    }
  }, [index, isPlaying, isMuted]);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % longFormContent.length);
    setIsPlaying(true);
  };
  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + longFormContent.length) % longFormContent.length);
    setIsPlaying(true);
  };

  const togglePlay = () => setIsPlaying(!isPlaying);
  const toggleMute = () => setIsMuted(!isMuted);

  const current = longFormContent[index];

  return (
    <section className="relative bg-[#000000] text-white py-20 px-6 sm:px-10 lg:px-16 overflow-hidden">
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center mb-16 uppercase tracking-wider font-secondary">
        Our Signature <span className="bg-gradient-to-r from-[#E0E0E0] to-[#D94E13] bg-clip-text text-transparent">Video Content</span>
      </h2>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-10">
        {/* Left side - video container */}
        <div className="relative w-full lg:w-1/2 aspect-video rounded-2xl overflow-hidden shadow-2xl group">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.videoSrc}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="w-full h-full"
            >
              <video
                ref={videoRef}
                key={current.videoSrc}
                src={current.videoSrc}
                autoPlay={isPlaying}
                loop
                muted={isMuted}
                playsInline
                className="w-full h-full object-cover rounded-2xl"
                preload="auto"
              />
            </motion.div>
          </AnimatePresence>

          <button
            onClick={toggleMute}
            aria-label={isMuted ? "Unmute video" : "Mute video"}
            className="absolute top-3 right-3 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full backdrop-blur-sm transition-all duration-300 z-20"
          >
            {isMuted ? <VolumeMuteIcon className="w-5 h-5" /> : <VolumeUpIcon className="w-5 h-5" />}
          </button>

          <div
            onClick={togglePlay}
            className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 hover:bg-black/40 transition-all duration-300 rounded-2xl z-10 cursor-pointer"
          >
            <button
              aria-label={isPlaying ? "Pause video" : "Play video"}
              className="text-white text-5xl transform transition-transform hover:scale-110"
            >
              {isPlaying ? <PauseIcon /> : <PlayIcon />}
            </button>
          </div>
          

          <button
            onClick={handlePrev}
            aria-label="Previous video"
            className="absolute top-1/2 -translate-y-1/2 left-3 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition z-20"
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            aria-label="Next video"
            className="absolute top-1/2 -translate-y-1/2 right-3 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition z-20"
          >
            <ChevronRightIcon className="w-6 h-6" />
          </button>
        </div>

        {/* Right side - text content */}
        <div className="w-full lg:w-1/2">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="p-8 rounded-2xl shadow-xl border border-[#2E2E2E] bg-[#1A1A1A] transition-all duration-300 hover:shadow-[0_0_25px_0_rgba(225,162,51,0.5)]"
            >
              <h3 className="text-3xl font-extrabold mb-4 bg-gradient-to-r from-[#EFEFEF] to-[#A75A2B] bg-clip-text text-transparent">
                {current.title}
              </h3>
              <p className="text-white/80 mb-4 leading-relaxed text-base">
                {current.description}
              </p>
              <div className="text-sm font-semibold text-white/80">
                Involvement:{" "}
                <span className="font-bold bg-gradient-to-r from-[#EFEFEF] to-[#A75A2B] bg-clip-text text-transparent">
                  {current.involvement}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default LongFormSection;
