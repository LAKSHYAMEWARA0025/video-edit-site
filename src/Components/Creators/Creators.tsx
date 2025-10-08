import React from "react";

// --- Data Structure ---
type Creator = {
  name: string;
  instagram?: string;
  youtube?: string;
  image?: string;
  followers: string;
};

// --- Creator Data ---
const creators: Creator[] = [
    { name: "Ishan Sharma", instagram: "https://www.instagram.com/ishansharma7390/", image: "/Creators/IshanSharma.jpg", followers: "1M followers" },
    { name: "Kashish", instagram: "https://www.instagram.com/aapki_kashishhh/", image: "/Creators/Kashish.jpg", followers: "502K followers" },
    { name: "Saumya Singh", instagram: "https://www.instagram.com/saumya1singh/", followers: "483K followers", image: "/Creators/SaumyaSingh.jpg" },
    { name: "Shreyansh Goyal", youtube: "https://www.youtube.com/@ShreyanshGoyal/featured", followers: "181K subscribers", image: "/Creators/ShreyanshGoyal.jpg" },
    { name: "Siddharth", youtube: "https://www.youtube.com/@itssiddharthsingh", followers: "216K subscribers", image: "/Creators/SiddharthSingh.jpg" },
    { name: "Harman Singh", instagram: "https://www.instagram.com/hustlewithharman/", followers: "888K followers", image: "/Creators/Harman.jpg" },
    { name: "Arsh Goyal", instagram: "https://www.instagram.com/arshgoyalyt/", followers: "481K followers", image: "/Creators/ArshGoyal.jpg" },
    { name: "Deepanshu Raj", instagram: "https://www.instagram.com/iqlipse_nova/", followers: "892K followers", image: "/Creators/DeepanshuRaj.jpg" },
    { name: "Striver", youtube: "https://www.youtube.com/@striver_79", followers: "305k subscribers", image: "/Creators/Striver.jpg" },
    { name: "Dr. Sid Warrier", instagram: "https://www.instagram.com/thesidwarrier/", followers: "287K followers", image: "/Creators/DrSid.jpg" },
];

// Duplicate for seamless infinite scrolling
const infiniteCreators: Creator[] = [...creators, ...creators];

// --- Prop Types for CreatorCard ---
interface CreatorCardProps {
  creator: Creator;
}

// --- Creator Card Component ---
const CreatorCard: React.FC<CreatorCardProps> = ({ creator }) => {
  return (
    // Parent container to manage hover state ('group') and scaling
    <div className="group relative flex-shrink-0 transition-transform duration-300 hover:scale-[1.05]">
      
      {/* The glowing border element with expanded hover effect */}
      <div 
        className={`absolute -inset-1 rounded-full bg-gradient-to-r from-orange-600 to-amber-500 
                   opacity-0 transition-all duration-500 ease-out 
                   group-hover:opacity-80 group-hover:blur-md group-hover:scale-110`}
      />

      {/* The main card content, positioned relatively to sit on top of the glow */}
      <div
        className={`relative h-[220px] w-[220px] overflow-hidden 
                   rounded-full shadow-xl cursor-pointer bg-gray-900`}
      >
        {creator.image ? (
          <div className="w-full h-full rounded-full overflow-hidden bg-gray-900 relative z-10">
            <img
              src={creator.image}
              alt={creator.name}
              className="w-full h-full object-cover object-top transition-opacity duration-500 group-hover:opacity-30"
              onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => { 
                e.currentTarget.src = 'https://placehold.co/220x220/1A1A1A/FFFFFF?text=Photo'; 
              }}
            />
          </div>
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-900 text-gray-300 text-5xl font-bold">
            {creator.name.charAt(0)}
          </div>
        )}

        {/* Overlay div */}
        <div 
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm 
                     flex flex-col items-center justify-end p-6 text-center
                     opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full pb-8 z-20`}
        >
          <h3 className="text-xl font-extrabold text-white mb-1 leading-snug">
            {creator.name}
          </h3>
          <p className="text-md font-semibold text-gray-300 mb-4">
            {creator.followers}
          </p>
        </div>
      </div>
    </div>
  );
};

// --- Main Creators Section ---
export default function CreatorsSection(): React.JSX.Element {
  return (
    <section className="bg-[#000000] text-white py-24 overflow-hidden relative">
      <style>
        {`
          @keyframes scroll {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          .animate-scroll {
            animation: scroll 80s linear infinite; 
          }
        `}
      </style>

      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-16 font-secondary">
          <span className="bg-gradient-to-r from-[#E0E0E0] to-[#D94E13] bg-clip-text text-transparent">
            Creators
          </span> We’ve Worked With
        </h2>
      </div>

      <div 
        className="w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_64px,_black_calc(100%-64px),transparent_100%)]"
      >
        <div className="flex gap-8 py-8 animate-scroll">
          {infiniteCreators.map((creator: Creator, idx: number) => (
            <CreatorCard key={idx} creator={creator} /> 
          ))}
        </div>
      </div>
      
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-[#000000]/90 via-transparent to-[#000000]/90"/>
    </section>
  );
}