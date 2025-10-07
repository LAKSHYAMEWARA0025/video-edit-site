import React from "react";
import InfiniteLogoScroll from "./infiniteScroll";
// import { motion } from "framer-motion";

// --- Design Palette Mapping ---
// const ACCENT_BLUE = "#2196F3";
// const CHARCOAL_BG = "#1A1A1A"; // Card background
// const STEEL_GRAY = "#2E2E2E"; // Border/Divider

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
  {
    name: "Vrikshit Foundation",
    logo: "https://logo.clearbit.com/vrikshitfoundation.org",
  },
];

const TrustedBy: React.FC = () => {
  return (
    // Background is set to Black
    <section className="bg-[#000000] py-20 text-white relative overflow-hidden">
      {/* Title - Updated font weight and size for better appearance */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-center mb-16 uppercase tracking-wider">
          Trusted by the{" "}
          <span className="text-[#2196F3]">Industry Leaders</span>
        </h2>
      </div>

      {/* --- Infinite Scroll Track --- */}
      {/* Default speed ('normal') */}
      <div className="mb-10">
        <InfiniteLogoScroll logos={companies} speed="normal"/>
      </div>
    </section>
  );
};

export default TrustedBy;
