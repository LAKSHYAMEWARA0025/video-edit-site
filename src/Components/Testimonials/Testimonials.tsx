// src/components/Testimonials.tsx
import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
  video: string;
  name: string;
  role: string;
  review: string;
}

const testimonials: Testimonial[] = [
  {
    video: "/videos/Aarushi.MP4",
    name: "Aarushi",
    role: "Founder, SocialSphere",
    review:
      "They always delivered on time and were always up for last minute changes. Really good ctr.",
  },
  {
    video: "/videos/Raj.mp4",
    name: "Raj",
    role: "Marketing Head, FinEdge",
    review:
      "They takes the ownership. I would call him around 2 Am and will tell him that we need it live within next 12 hours and he delivers it!.",
  },
  {
    video: "/videos/Saumya.mov",
    name: "Saumya",
    role: "Content Strategist, BrandNest",
    review:
      "-Very satisfied and impress by his work, very talented and hardworking guy! He takes the reliability!",
  },
  {
    video: "/videos/Shreyansh.mp4",
    name: "Shreyansh",
    role: "CEO, MarketMinds",
    review:
      "I started working with him when I had somewhat 2k subscribers and with him I've scaled to 150k subscribers.",
  },
  {
    video: "/videos/VidhiKalra.mp4",
    name: "Vidhi Karla",
    role: "Entrepreneur",
    review:
      "He is really good with editing and apart from that he also helped me grow my channel 10x.",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  // Auto-play every 6s
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () =>
    setIndex((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () =>
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="bg-[#0e0f1b] text-white py-20 px-6 sm:px-12 md:px-20 relative">
      <h2 className="text-4xl sm:text-5xl font-oswald font-bold text-center mb-14">
        What people say when we’re not in the room
      </h2>

      <div className="relative max-w-5xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-center gap-8 bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl shadow-lg"
          >
            {/* Video */}
            <VideoPlayer src={testimonials[index].video} />

            {/* Text */}
            <div className="flex-1">
              <h4 className="text-xl font-semibold text-white mb-2">
                {testimonials[index].name}
              </h4>
              <p className="text-sm text-gray-400 mb-4">
                {testimonials[index].role}
              </p>
              <p className="text-gray-300 leading-relaxed">
                "{testimonials[index].review}"
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <button
          onClick={prevTestimonial}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-orange-500/70 hover:bg-orange-600/80 text-white p-3 rounded-full shadow-md transition"
        >
          ◀
        </button>
        <button
          onClick={nextTestimonial}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-orange-500/70 hover:bg-orange-600/80 text-white p-3 rounded-full shadow-md transition"
        >
          ▶
        </button>
      </div>
    </section>
  );
};

// 🎥 Video Player Component
const VideoPlayer = ({ src }: { src: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

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
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div className="relative w-full md:w-[280px] aspect-[9/16] rounded-xl overflow-hidden shadow-md">
      <video
        ref={videoRef}
        src={src}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-3">
        <button
          onClick={togglePlay}
          className="bg-orange-500/70 text-white px-3 py-1 rounded-full text-sm font-semibold hover:bg-orange-600/80 transition"
        >
          {isPlaying ? "Pause" : "Play"}
        </button>
        <button
          onClick={toggleMute}
          className="bg-orange-500/70 text-white px-3 py-1 rounded-full text-sm font-semibold hover:bg-orange-600/80 transition"
        >
          {isMuted ? "Unmute" : "Mute"}
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
