import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
// FIX: Using specific icon imports to resolve module errors
import { FaVolumeUp, FaVolumeMute, FaPlay, FaPause, FaChevronRight, FaChevronLeft } from 'react-icons/fa'; 

// --- Design Constants & Data ---
const ACCENT_BLUE = "#2196F3";
const CARD_BG = "#1A1A1A"; // Charcoal Gray

interface LocalVideo {
    src: string;
    type: 'short' | 'long';
}

const videos: LocalVideo[] = [
    { src: '/videos/short1.mp4', type: 'short' },
    { src: '/videos/short2.mp4', type: 'short' },
    { src: '/videos/short3.mp4', type: 'short' },
    { src: '/videos/short4.mp4', type: 'short' },
    { src: '/videos/short6.mp4', type: 'short' },
    { src: '/videos/long1.mp4', type: 'long' },
    { src: '/videos/long2.mp4', type: 'long' },
    { src: '/videos/long3.mp4', type: 'long' },
    { src: '/videos/long4.mp4', type: 'long' },
];

// Mock Content Data for the Long-Form Section
const longFormContent = [
    {
        title: "Brand Strategy Design",
        involvement: "1-2 hours",
        description: "Map your entire content ecosystem in one powerful session. We'll craft your unique angle, design your hooks, and build your content strategy. Get the first 1-3 month brand strategy ideated in week 1. We'll nail down brand assets and start content production from week 2.",
        videoSrc: "/videos/long1.mp4"
    },
    {
        title: "Scaling Content Sessions",
        involvement: "4-5 hours",
        description: "We run 1-2 recording sessions monthly (1-1.5 hours each). We transform these into 40-50 pieces of content across videos, animations, carousels and stories. This ensures a consistent, high-quality flow across all platforms.",
        videoSrc: "/videos/long2.mp4"
    },
    {
        title: "Watch Your Brand Scale",
        involvement: "0 hours",
        description: "This is where the magic happens. While you’re closing deals and running your business, we’re turning your expertise into a content empire that fills leads for your product/service. Your brand works 24/7 so you don’t have to.",
        videoSrc: "/videos/long3.mp4"
    },
    {
        title: "Monetization Workshop",
        involvement: "2 hours",
        description: "A dedicated session to refine your funnels, optimize ad placement, and integrate e-commerce solutions directly into your content. We ensure every view has a clear path to conversion for maximum ROI.",
        videoSrc: "/videos/long4.mp4"
    },
];

// --- 1. Reusable Video Card Component (Used for SHORT-FORM) ---
const VideoPlayer = ({ src, type }: { src: string; type: 'short' | 'long' }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [muted, setMuted] = useState(true);
    const [isPlaying, setIsPlaying] = useState(true);

    const aspectRatioClass = type === 'short'
        ? 'aspect-[9/16] h-[300px] sm:h-[400px]'
        : 'aspect-video h-full';

    const toggleMute = () => {
        const video = videoRef.current;
        if (video) {
            video.muted = !video.muted;
            setMuted(video.muted);
        }
    };
    
    const togglePlay = () => {
        if (!videoRef.current) return;
        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    // Handle the AbortError promise rejection for stable autoplay
    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            video.play().catch(error => {
                if (error.name !== "AbortError") {
                    console.error("Video Playback Error:", error);
                }
            });
        }
    }, [src]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
            className={`relative group bg-[#1A1A1A] rounded-xl overflow-hidden shadow-2xl 
                        transform transition-all duration-300 cursor-pointer 
                        hover:shadow-[0_0_20px_0_rgba(33,150,243,0.5)] ${aspectRatioClass}`}
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

            {/* Mute/Unmute Indicator Button */}
            <button
                onClick={toggleMute}
                className="absolute bottom-3 right-3 z-10 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full transition"
                aria-label={muted ? 'Unmute Video' : 'Mute Video'}
            >
                {muted ? <FaVolumeMute className="text-lg" /> : <FaVolumeUp className="text-lg" />}
            </button>
            
            {/* Play/Pause Icon Overlay */}
             <button
                onClick={togglePlay}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 bg-white/10 text-white p-4 rounded-full transition duration-300 hover:bg-white/20"
                aria-label={isPlaying ? 'Pause' : 'Play'}
            >
                {isPlaying ? <FaPause className="text-2xl" /> : <FaPlay className="text-2xl" />}
            </button>
        </motion.div>
    );
};

// --- 2. Long Form Design Component (Stacked Scroll Reveal) ---

// Component that creates the single content card that scrolls over the fixed video
const LongFormStackCard = ({
    videoSrc,
    title,
    involvement,
    description,
    index,
}: {
    videoSrc: string;
    title: string;
    involvement: string;
    description: string;
    index: number;
}) => {
    const ACCENT_COLOR = index % 2 === 0 ? ACCENT_BLUE : "#9C27B0"; // Alternating accent colors

    return (
        <div 
            // The content card is positioned on the right half of the lg grid
            className="w-full lg:col-start-2 flex justify-center lg:justify-end"
        >
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                // NOTE: Using delay based on index for staggered appearance
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.8 }} 
                transition={{ duration: 0.8, delay: index * 0.25 }} 
                data-title={title} // Used by IntersectionObserver
                className={`
                    p-8 rounded-2xl shadow-xl border border-[#2E2E2E]
                    bg-[#1A1A1A] text-white
                    w-[90%] md:w-[70%] lg:w-[450px] h-auto // Adjusted max width
                    transition-shadow duration-300 hover:shadow-[0_0_25px_0_rgba(33,150,243,0.7)]
                    mt-12 mb-12 // Spacing to ensure the card occupies the scroll height
                `}
            >
                <h3 className="text-3xl font-extrabold mb-4" style={{ color: ACCENT_COLOR }}>
                    {title}
                </h3>
                <p className="text-white/80 mb-4 leading-relaxed text-base">
                    {description}
                </p>
                <div className="flex space-x-4">
                     <div className="text-sm font-semibold text-white/80">
                        Involvement: <span className="font-bold" style={{ color: ACCENT_COLOR }}>{involvement}</span>
                     </div>
                </div>
            </motion.div>
        </div>
    );
};


// --- 3. Main Section Component ---
const VideoShowcase = () => {
    const shortVideos = videos.filter((v) => v.type === 'short');
    const longVideos = longFormContent; // Use the rich content data

    // State for auto-cycling the sticky video
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const currentVideo = longFormContent[currentVideoIndex];
    
    // Auto-Cycling Logic (4-second timer)
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentVideoIndex(prevIndex => (prevIndex + 1) % longFormContent.length);
        }, 4000); // 4 seconds interval

        return () => clearInterval(timer);
    }, []); 

    // Calculate required scroll height based on number of cards and card height
    const totalContentHeight = longFormContent.length * 500; // Retaining this for scroll height calculation
    
    return (
        <section className="bg-[#000000] text-white py-20 px-4 sm:px-10 lg:px-16 overflow-hidden">

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center mb-16 uppercase tracking-wider">
                Our Signature <span className="text-[#2196F3]">Video Content</span>
            </h2>

            {/* --- Short Form Content (Vertical Grid) --- */}
            <div className="mb-20 max-w-7xl mx-auto">
                <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-white border-l-4 border-[#2196F3] pl-4">
                    Short Form Strategy (Reels, TikToks)
                </h3>
                
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
                    {shortVideos.map((video, idx) => (
                        <VideoPlayer key={idx} src={video.src} type={video.type} />
                    ))}
                </div>
            </div>

            {/* --- Long Form Content (Auto-Cycling Display) --- */}
            <div className="max-w-7xl mx-auto mt-20 relative grid grid-cols-1 lg:grid-cols-2 gap-8"> 
                
                {/* 1. AUTO-CYCLING VIDEO DISPLAY (Left Column - Responsive) */}
                <div 
                    className="lg:col-start-1 w-full h-[300px] lg:h-full rounded-2xl overflow-hidden shadow-2xl bg-[#000000] z-0"
                    style={{ minHeight: '400px' }} 
                >
                    <video
                        key={currentVideo.videoSrc}
                        src={currentVideo.videoSrc}
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="auto"
                        className="w-full h-full object-cover transition duration-700 opacity-90"
                    />
                     {/* Overlay to dim video */}
                    <div className="absolute inset-0 bg-black/40"></div>
                </div>

                {/* 2. TEXT CONTENT (Right Column - Responsive) */}
                <div className="relative z-10 lg:col-start-2 flex flex-col justify-center">
                    <motion.div
                         key={currentVideo.title}
                         initial={{ opacity: 0, y: 30 }}
                         animate={{ opacity: 1, y: 0 }}
                         transition={{ duration: 0.6 }}
                         className={`p-8 rounded-2xl shadow-xl border border-[#2E2E2E]
                            bg-[#1A1A1A] text-white
                            w-full h-auto
                            transition-shadow duration-300 hover:shadow-[0_0_25px_0_rgba(33,150,243,0.7)]
                            `}
                    >
                         <h3 className="text-3xl font-extrabold mb-4" style={{ color: ACCENT_BLUE }}>
                            {currentVideo.title}
                        </h3>
                        <p className="text-white/80 mb-4 leading-relaxed text-base">
                            {currentVideo.description}
                        </p>
                        <div className="text-sm font-semibold text-white/80">
                            Involvement: <span className="font-bold" style={{ color: ACCENT_BLUE }}>{currentVideo.involvement}</span>
                        </div>
                    </motion.div>
                </div>
            </div>

        </section>
    );
};

export default VideoShowcase;
