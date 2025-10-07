import  { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaVolumeUp, FaVolumeMute, FaPlay, FaPause } from "react-icons/fa";

interface LocalVideo {
  src: string;
  type: "short" | "long";
}

const videos: LocalVideo[] = [
  { src: "/videos/short1.mp4", type: "short" },
  { src: "/videos/short2.mp4", type: "short" },
  { src: "/videos/short3.mp4", type: "short" },
  { src: "/videos/short4.mp4", type: "short" },
  { src: "/videos/short6.mp4", type: "short" },
];

// Reusable Video Player for short-form content
const VideoPlayer = ({ src }: { src: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);

  const toggleMute = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = !video.muted;
      setMuted(video.muted);
    }
  };

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (isPlaying) video.pause();
    else video.play();
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch((err) => {
        if (err.name !== "AbortError") console.error("Playback error:", err);
      });
    }
  }, [src]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6 }}
      className="relative group bg-[#1A1A1A] rounded-xl overflow-hidden shadow-2xl 
                 transform transition-all duration-300 cursor-pointer 
                 hover:shadow-[0_0_20px_0_rgba(33,150,243,0.5)] 
                 aspect-[9/16] h-[300px] sm:h-[400px]"
    >
      <video
        ref={videoRef}
        key={src}
        src={src}
        autoPlay
        loop
        muted={muted}
        playsInline
        preload="auto"
        className="w-full h-full object-cover transition duration-300 group-hover:scale-[1.02]"
      />

      {/* Volume toggle */}
      <button
        onClick={toggleMute}
        className="absolute bottom-3 right-3 z-10 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full transition"
      >
        {muted ? <FaVolumeMute className="text-lg" /> : <FaVolumeUp className="text-lg" />}
      </button>

      {/* Play/Pause overlay */}
      <button
        onClick={togglePlay}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                   z-10 bg-white/10 text-white p-4 rounded-full transition duration-300 hover:bg-white/20"
      >
        {isPlaying ? <FaPause className="text-2xl" /> : <FaPlay className="text-2xl" />}
      </button>
    </motion.div>
  );
};

const ShortFormSection = () => (
  <section className="bg-[#000000] text-white py-20 px-4 sm:px-10 lg:px-16 overflow-hidden">
    <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-white border-l-4 border-[#2196F3] pl-4">
      Short Form (Reels, TikToks)
    </h3>

    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 max-w-7xl mx-auto">
      {videos.map((video, idx) => (
        <VideoPlayer key={idx} src={video.src} />
      ))}
    </div>
  </section>
);

export default ShortFormSection;
