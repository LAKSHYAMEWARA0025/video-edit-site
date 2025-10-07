import React from "react";
import { motion } from "framer-motion";

// --- Design Palette Mapping ---
const ACCENT_BLUE = "#2196F3";
const CHARCOAL_BG = "#1A1A1A"; // Card background
const STEEL_GRAY = "#2E2E2E"; // Border/Divider

const companies = [
  { name: "Yes Securities", logo: "https://logo.clearbit.com/yesinvest.in" },
  { name: "Samco Securities", logo: "https://logo.clearbit.com/samco.in" },
  { name: "Lvana", logo: "https://logo.clearbit.com/ivanajewels.com" },
  { name: "Cello", logo: "https://logo.clearbit.com/celloworld.com" },
  { name: "Air India", logo: "https://logo.clearbit.com/airindia.com" },
  { name: "Dhiwise", logo: "https://logo.clearbit.com/dhiwise.com" },
  { name: "Scaler", logo: "https://logo.clearbit.com/scaler.com" },
  { name: "Vedantu", logo: "https://logo.clearbit.com/vedantu.com" },
  { name: "Semrush", logo: "https://logo.clearbit.com/semrush.com" },
  { name: "Markit Up", logo: "https://logo.clearbit.com/markitup.in" },
  { name: "Vrikshit Foundation", logo: "https://logo.clearbit.com/vrikshitfoundation.org" },
];

const TrustedBy: React.FC = () => {
  // Duplicate the array once for seamless infinite scrolling
  const logos = [...companies, ...companies];
  const animationDuration = 45; // seconds

  return (
    // Background is set to Black
    <section className="bg-[#000000] py-20 text-white relative overflow-hidden">
      
      {/* Title - Updated font weight and size for better appearance */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-center mb-16 uppercase tracking-wider">
          Trusted by the <span className="text-[#2196F3]">Industry Leaders</span>
        </h2>
      </div>

      {/* --- Infinite Scroll Track --- */}
      <div 
        className="w-full overflow-hidden relative"
        style={{
          // Creates a cinematic fade on the left and right edges
          maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent 100%)',
        }}
      >
        {/* The scrolling container */}
        <div 
          className="flex whitespace-nowrap gap-12 sm:gap-20 py-4 animate-scroll"
          style={{ animationDuration: `${animationDuration}s` }}
        >
          {logos.map((company, idx) => (
            // Removed motion/animation wrapper
            <div
              key={idx}
              className="flex-shrink-0 flex items-center justify-center min-w-[120px] sm:min-w-[180px] p-2"
            >
              <div 
                className="p-1"
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  // FIX: Removed grayscale, opacity, and hover effects
                  className="h-12 sm:h-16 w-auto object-contain transition-opacity duration-300"
                  onError={(e) => { e.currentTarget.src = 'https://placehold.co/180x48/1A1A1A/FFFFFF?text=Logo'; }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Inject CSS Keyframes */}
      <style>
        {`
          /* Defines the horizontal scrolling keyframe */
          @keyframes scroll {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }

          /* Applies the keyframe animation to the scrolling div */
          .animate-scroll {
            animation: scroll ${animationDuration}s linear infinite;
          }
        `}
      </style>
    </section>
  );
};

export default TrustedBy;
