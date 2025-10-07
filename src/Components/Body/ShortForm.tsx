import { useRef, useState, useEffect, SVGProps } from "react";
import { motion } from "framer-motion";

// --- SVG Icons (to remove external dependency) ---
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
               hover:shadow-[0_0_20px_0_rgba(225,162,51,0.5)] 
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
        onError={(e) => { e.currentTarget.style.display = 'none'; }}
      />

      {/* Volume toggle */}
      <button
        onClick={toggleMute}
        className="absolute bottom-3 right-3 z-10 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full transition"
      >
        {muted ? <VolumeMuteIcon className="text-lg" /> : <VolumeUpIcon className="text-lg" />}
      </button>

      {/* Play/Pause overlay */}
      <button
        onClick={togglePlay}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                   z-10 bg-white/10 text-white p-4 rounded-full transition duration-300 hover:bg-white/20"
      >
        {isPlaying ? <PauseIcon className="text-2xl" /> : <PlayIcon className="text-2xl" />}
      </button>
    </motion.div>
  );
};

const ShortFormSection = () => (
  <section className="bg-[#000000] text-white py-20 px-4 sm:px-10 lg:px-16 overflow-hidden">
    <div className="flex items-center mb-8">
       <div className="w-1 h-8 sm:h-9 mr-4 bg-gradient-to-b from-[#EFEFEF] to-[#A75A2B]"></div>
       <h3 className="text-2xl sm:text-3xl font-bold text-white">
        Short Form (Reels, TikToks)
      </h3>
    </div>


    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 max-w-7xl mx-auto">
      {videos.map((video, idx) => (
        <VideoPlayer key={idx} src={video.src} />
      ))}
    </div>
  </section>
);

export default ShortFormSection;

