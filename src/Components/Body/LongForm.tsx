import  { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlay, FaPause, FaVolumeMute, FaVolumeUp } from "react-icons/fa";

const ACCENT_BLUE = "#2196F3";

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

//   const videoRef = useRef(null);
const videoRef = useRef<HTMLVideoElement | null>(null);

  // When index / isPlaying / isMuted changes, update the actual <video> element
  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;

    // apply muted first
    vid.muted = !!isMuted;

    // then play/pause
    if (isPlaying) {
      const playPromise = vid.play();
      if (playPromise && typeof playPromise.catch === "function") {
        // swallow the AbortError or other play rejections silently
        playPromise.catch(() => {});
      }
    } else {
      try {
        vid.pause();
      } catch (e) {
        // ignore
      }
    }
  }, [index, isPlaying, isMuted]);

  // When switching videos manually, ensure the new video tries to play
  const handleNext = () => {
    setIndex((prev) => (prev + 1) % longFormContent.length);
    setIsPlaying(true);
  };
  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + longFormContent.length) % longFormContent.length);
    setIsPlaying(true);
  };

  const togglePlay = () => {
    const vid = videoRef.current;
    if (!vid) return;

    if (isPlaying) {
      vid.pause();
      setIsPlaying(false);
    } else {
      const playPromise = vid.play();
      if (playPromise && typeof playPromise.catch === "function") playPromise.catch(() => {});
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    const vid = videoRef.current;
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    if (vid) vid.muted = nextMuted;
  };

  const current = longFormContent[index];

  return (
    <section className="relative bg-[#000000] text-white py-20 px-6 sm:px-10 lg:px-16 overflow-hidden">
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center mb-16 uppercase tracking-wider">
        Our Signature <span className="text-[#2196F3]">Video Content</span>
      </h2>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-10">
        {/* Left side - video container */}
        <div className="relative w-full lg:w-1/2 aspect-video rounded-2xl overflow-hidden shadow-2xl group">
          <AnimatePresence mode="wait">
            {/* animate wrapper so we can keep a stable ref on the real <video> */}
            <motion.div
              key={current.videoSrc}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
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

          {/* Mute / Unmute button (top-right) */}
          <button
            onClick={toggleMute}
            aria-label={isMuted ? "Unmute video" : "Mute video"}
            className="absolute top-3 right-3 bg-black/60 hover:bg-black/80 text-white text-sm px-3 py-2 rounded-full backdrop-blur-sm transition-all duration-300 z-20"
          >
            {isMuted ? <FaVolumeMute className="w-4 h-4" /> : <FaVolumeUp className="w-4 h-4" />}
          </button>

          {/* Play / Pause button (center) */}
          <button
            onClick={togglePlay}
            aria-label={isPlaying ? "Pause video" : "Play video"}
            className="absolute inset-0 flex items-center justify-center text-white text-5xl bg-black/20 hover:bg-black/30 rounded-2xl z-10"
          >
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>

          {/* Left / Right navigation buttons */}
          <button
            onClick={handlePrev}
            aria-label="Previous video"
            className="absolute top-1/2 -translate-y-1/2 left-3 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 transition z-20"
          >
            ◀
          </button>
          <button
            onClick={handleNext}
            aria-label="Next video"
            className="absolute top-1/2 -translate-y-1/2 right-3 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 transition z-20"
          >
            ▶
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
              className="p-8 rounded-2xl shadow-xl border border-[#2E2E2E] bg-[#1A1A1A] transition-all duration-300 hover:shadow-[0_0_25px_0_rgba(33,150,243,0.6)]"
            >
              <h3 className="text-3xl font-extrabold mb-4" style={{ color: ACCENT_BLUE }}>
                {current.title}
              </h3>
              <p className="text-white/80 mb-4 leading-relaxed text-base">
                {current.description}
              </p>
              <div className="text-sm font-semibold text-white/80">
                Involvement:{" "}
                <span className="font-bold" style={{ color: ACCENT_BLUE }}>
                  {current.involvement}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Background blobs for motion depth */}
      <motion.div
        className="absolute top-0 left-0 w-72 h-72 bg-primary/30 rounded-full blur-3xl"
        animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
        animate={{ x: [0, -100, 0], y: [0, -50, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  );
};

export default LongFormSection;
