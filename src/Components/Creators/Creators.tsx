import React from "react";

// --- Design Constants ---
const ACCENT_BLUE = "#2196F3";

// --- Inline SVG Icons (Kept for potential future use) ---
const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
    <path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.5 74.7-74.7 74.7zm146.4-194.3c0-14.1 11.2-25.3 25.3-25.3 14.1 0 25.3 11.2 25.3 25.3s-11.2 25.3-25.3 25.3c-14.1 0-25.3-11.2-25.3-25.3zm-45.7 194.3c-.3 158.4-128.7 186.2-186.2 186.2-158.4 0-186.2-128.7-186.2-186.2V166.4c0-57.5 27.8-186.2 186.2-186.2 57.5 0 186.2 27.8 186.2 186.2zm-128.9-194.3v158.4c0 47.9-38.6 86.5-86.5 86.5s-86.5-38.6-86.5-86.5V166.4c0-47.9 38.6-86.5 86.5-86.5s86.5 38.6 86.5 86.5z"/>
  </svg>
);

const YoutubeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
    <path fill="currentColor" d="M549.655 124.083c-6.28-23.746-24.835-42.228-48.4-48.423C477.595 59.837 452.548 64 288 64S98.405 59.837 74.745 75.66c-23.565 6.195-42.12 24.677-48.4 48.423C22.32 153.29 20 206 20 256s2.32 102.71 6.345 131.917c6.28 23.746 24.835 42.228 48.4 48.423C98.405 454.163 123.452 448 288 448s189.595 6.163 213.255-9.66c23.565-6.195 42.12-24.677 48.4-48.423C553.68 358.71 556 306 556 256s-2.32-102.71-6.345-131.917zM288 368c-57.392 0-104-46.608-104-104s46.608-104 104-104 104 46.608 104 104-46.608 104-104 104zm104-104c0 14.359-11.641 26-26 26H288v-52h78c14.359 0 26 11.641 26 26z"/>
    <polygon fill="white" points="230,285 230,227 340,256" />
  </svg>
);

// --- Data Structure (TypeScript) ---
type Creator = {
  name: string;
  instagram?: string;
  youtube?: string;
  image?: string;
  followers: string;
};

// --- Creator Data (Keeping it the same) ---
const creators: Creator[] = [
  {
    name: "Ishan Sharma",
    instagram: "https://www.instagram.com/ishansharma7390/",
    image: "/Creators/IshanSharma.jpg",
    followers: "1M followers",
  },
  {
    name: "Kashish",
    instagram: "https://www.instagram.com/aapki_kashishhh/",
    image: "/Creators/Kashish.jpg",
    followers: "502K followers",
  },
  {
    name: "Saumya Singh",
    instagram: "https://www.instagram.com/saumya1singh/",
    followers: "483K followers",
    image: "/Creators/SaumyaSingh.jpg",
  },
  {
    name: "Shreyansh Goyal",
    youtube: "https://www.youtube.com/@ShreyanshGoyal/featured",
    followers: "181K subscribers",
    image: "/Creators/ShreyanshGoyal.jpg",
  },
  {
    name: "Siddharth",
    youtube: "https://www.youtube.com/@itssiddharthsingh",
    followers: "216K subscribers",
    image: "/Creators/SiddharthSingh.jpg",
  },
  {
    name: "Harman Singh",
    instagram: "https://www.instagram.com/hustlewithharman/",
    followers: "888K followers",
    image: "/Creators/Harman.jpg",
  },
  {
    name: "Arsh Goyal",
    instagram: "https://www.instagram.com/arshgoyalyt/",
    followers: "481K followers",
    image: "/Creators/ArshGoyal.jpg",
  },
  {
    name: "Deepanshu Raj",
    instagram: "https://www.instagram.com/iqlipse_nova/",
    followers: "892K followers",
    image: "/Creators/DeepanshuRaj.jpg",
  },
  {
    name: "Striver",
    youtube: "https://www.youtube.com/@striver_79",
    followers: "305k subscribers",
    image: "/Creators/Striver.jpg",
  },
  {
    name: "Dr. Sid Warrier",
    instagram: "https://www.instagram.com/thesidwarrier/",
    followers: "287K followers",
    image: "/Creators/DrSid.jpg",
  },
];

// Duplicate the array to ensure seamless infinite scrolling
const infiniteCreators = [...creators, ...creators];

// --- Creator Card Component (Updated for Circular Shape) ---
const CreatorCard: React.FC<{ creator: Creator }> = ({ creator }) => {
  return (
    <div
      // UPDATED: Square dimensions (h-[280px] w-[280px]) and rounded-full for circular shape
      className={`group relative h-[280px] w-[280px] flex-shrink-0
                overflow-hidden rounded-full shadow-xl cursor-pointer 
                transition-transform duration-300 hover:scale-[1.05] 
                border border-transparent hover:border-white/20`}
    >
      
      {/* 1. Profile Image - Fills the card, gets slight fade on hover */}
      {creator.image ? (
        <img
          src={creator.image}
          alt={creator.name}
          // Image styling: object-top prioritizes face/head
          className="w-full h-full object-cover object-top transition-opacity duration-500 group-hover:opacity-30"
          onError={(e) => { e.currentTarget.src = 'https://placehold.co/280x280/1A1A1A/FFFFFF?text=Photo'; }}
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-gray-900 text-gray-300 text-6xl font-bold">
          {creator.name.charAt(0)}
        </div>
      )}

      {/* 2. Hover Overlay - Hidden by default, appears on hover, reveals details */}
      <div 
        // rounded-full added here to match the container's circular shape
        className={`absolute inset-0 bg-black/60 backdrop-blur-sm 
                  flex flex-col items-center justify-end p-6 text-center
                  opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full pb-10`}
      >
        {/* Name */}
        <h3 className="text-xl font-extrabold text-white mb-1 leading-snug">
          {creator.name}
        </h3>

        {/* Followers */}
        <p className="text-md font-semibold text-gray-300 mb-4">
          {creator.followers}
        </p>
      </div>

      {/* 3. Subtle glow accent on hover, now also rounded-full */}
      <div className="absolute inset-0 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-custom-blue" />
    </div>
  );
};

// --- Main Creators Section (React Component) ---
export default function CreatorsSection() {
  return (
    <section className="bg-[#000000] text-white py-24 overflow-hidden relative">
      {/* Internal CSS for animation and custom shadow */}
      <style>
        {`
          /* Keyframes for the infinite horizontal scroll */
          @keyframes scroll {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }

          /* Slower animation duration (80s) */
          .animate-scroll {
            animation: scroll 80s linear infinite; 
          }

          /* Custom blue glow */
          .shadow-custom-blue {
            box-shadow: 0 0 15px ${ACCENT_BLUE}, inset 0 0 5px ${ACCENT_BLUE};
          }
        `}
      </style>

      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-16 border-b-4 border-b-white/10 mx-auto pb-2">
          <span className="text-[#2196F3] underline decoration-solid">
            Creators
          </span>{" "} We’ve Worked With
        </h2>
      </div>

      {/* --- Infinite Scroll Track --- */}
      {/* Reduced fade area (64px) for less fade-out effect */}
      <div 
        className="w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_64px,_black_calc(100%-64px),transparent_100%)]"
      >
        
        {/* The scrolling container with flex-shrink-0 included implicitly in CreatorCard */}
        <div className="flex gap-8 py-8 animate-scroll">
          {infiniteCreators.map((creator, idx) => (
            <CreatorCard key={idx} creator={creator} /> 
          ))}
        </div>
        
      </div>
      
      {/* Edge fade overlay */}
      <div className="absolute inset-0 pointer-events-none 
                        bg-gradient-to-r from-[#000000]/90 via-transparent to-[#000000]/90"/>
    </section>
  );
}
