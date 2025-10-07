import { useRef, useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
// FIX: Using specific icon imports to improve resolution reliability
import { FaChevronLeft, FaChevronRight, FaVolumeUp, FaVolumeMute, FaPlay, FaPause } from 'react-icons/fa'; 

// --- Design Constants ---
const ACCENT_BLUE = "#2196F3";
// const CARD_BG = "#1A1A1A"; // Charcoal Gray

interface Testimonial {
  video: string;
  name: string;
  role: string;
  review: string;
}

const testimonials: Testimonial[] = [
  {
    video: "/videos/Aarushi.MP4",
    name: "Aarushi Bedi",
    role: "Founder of The Fluent Flyers, Ex International Cabin Crew",
    review:
      "He always delivered on time and were always up for last minute changes. Really good ctr.",
  },
  {
    video: "/videos/Raj.mp4",
    name: "Striver(Raj)",
    role: "Founder of TUF, ex SDE at Google & Amazon",
    review:
      "He takes the ownership. I would call him around 2 Am and will tell him that we need it live within next 12 hours and he delivers it!.",
  },
  {
    video: "/videos/Saumya.mov",
    name: "Saumya Singh",
    role: "TEDx Speaker, Josh Talks Speaker, ex-SDE at RedHat",
    review:
      "Very satisfied and impress by his work, very talented and hardworking guy! He takes the responsibility!",
  },
  {
    video: "/videos/Shreyansh.mp4",
    name: "Shreyansh Goyal",
    role: "TEDx speaker, SDE",
    review:
      "I started working with him when I had somewhat 2k subscribers and with him I've scaled to 150k subscribers.",
  },
  {
    video: "/videos/VidhiKalra.mp4",
    name: "Vidhi Karla",
    role: "Founder of 5-minute economics",
    review:
      "He is really good with editing and apart from that he also helped me grow my channel 10x.",
  },
];

// 🎥 Video Player Component (Self-contained controls)
const VideoPlayer = ({ src }: { src: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  // Auto-play/pause when the source changes
  useEffect(() => {
      // Ensure video plays when component mounts or source updates
      videoRef.current?.play();
      
      // Cleanup: pause video when the component is removed
      return () => {
          videoRef.current?.pause();
      };
  }, [src]);


  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    const newMutedState = !isMuted;
    videoRef.current.muted = newMutedState;
    setIsMuted(newMutedState);
  };

  return (
    <div 
        className="relative w-full md:w-[280px] aspect-[9/16] rounded-xl overflow-hidden shadow-2xl transition-all duration-300 group"
        style={{ boxShadow: `0 0 10px ${ACCENT_BLUE}` }}
    >
      <video
        ref={videoRef}
        key={src} // Key is vital for remounting video when testimonial changes
        src={src}
        autoPlay
        loop
        muted={isMuted}
        playsInline
        className="w-full h-full object-cover"
      />
      
      {/* Controls Overlay */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        
        {/* Play/Pause Button */}
        <button
          onClick={togglePlay}
          className="bg-black/50 hover:bg-black/80 text-white p-3 rounded-full transition shadow-lg"
          aria-label={isPlaying ? "Pause Video" : "Play Video"}
        >
          {isPlaying ? <FaPause className="text-xl" /> : <FaPlay className="text-xl" />}
        </button>
        
        {/* Mute Button */}
        <button
          onClick={toggleMute}
          className="bg-black/50 hover:bg-black/80 text-white p-3 rounded-full transition shadow-lg"
          aria-label={isMuted ? "Unmute Video" : "Mute Video"}
        >
          {isMuted ? <FaVolumeMute className="text-xl" /> : <FaVolumeUp className="text-xl" />}
        </button>
      </div>
    </div>
  );
};

// --- Main Component ---
const Testimonials = () => {
  const [index, setIndex] = useState(0);

  // Navigation handlers
  const nextTestimonial = useCallback(() => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevTestimonial = useCallback(() => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  // Timer logic is REMOVED, manual navigation only.

  return (
    <section id="testimonials" className="bg-[#000000] text-white py-24 px-6 sm:px-10 lg:px-20 relative overflow-hidden">
      
      {/* Heading style updated to match the Hero component */}
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white text-center mb-16 uppercase tracking-wider">
        What people say <span className="text-[#2196F3]">when we’re not</span> in the room
      </h2>

      <div className="relative max-w-5xl mx-auto">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={index} // Key is essential for AnimatePresence to work
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            
            // Card Style: Charcoal background, shadow, and responsive layout
            className="flex flex-col md:flex-row items-center gap-10 bg-[#1A1A1A] p-8 rounded-2xl shadow-2xl shadow-black/50 border border-[#2E2E2E]"
          >
            {/* Video Player */}
            <VideoPlayer src={testimonials[index].video} />

            {/* Text Review */}
            <div className="flex-1 space-y-4 md:space-y-6">
              <h4 className="text-xl sm:text-2xl font-bold text-white mb-2">
                {testimonials[index].name}
              </h4>
              <p className="text-sm text-[#2196F3] font-semibold mb-4 uppercase tracking-wider">
                {testimonials[index].role}
              </p>
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed italic border-l-4 border-[#2196F3] pl-4">
                "{testimonials[index].review}"
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <motion.button
          onClick={prevTestimonial}
          className="absolute -left-3 top-1/2 -translate-y-1/2 bg-[#2196F3] hover:bg-white text-white hover:text-[#2196F3] p-3 rounded-full shadow-lg transition duration-300 z-20 hidden md:block"
          aria-label="Previous Testimonial"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaChevronLeft className="text-xl" />
        </motion.button>
        <motion.button
          onClick={nextTestimonial}
          className="absolute -right-3 top-1/2 -translate-y-1/2 bg-[#2196F3] hover:bg-white text-white hover:text-[#2196F3] p-3 rounded-full shadow-lg transition duration-300 z-20 hidden md:block"
          aria-label="Next Testimonial"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaChevronRight className="text-xl" />
        </motion.button>
      </div>
    </section>
  );
};

export default Testimonials;
