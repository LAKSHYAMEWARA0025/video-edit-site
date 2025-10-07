import React from 'react';
import { useInView } from 'react-intersection-observer'; 
// FIX 1: Using the correct relative path based on your file structure
import TypewriterEffectSmooth from '../../Effects/TypewriterEffect';
// FIX 2: Using the standard 'react-icons/fa' path for broader compatibility
import { FaYoutube, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

// --- Design Palette Mapping ---
// Black: #000000 (background)
// Charcoal Gray: #121212 or #1A1A1A (secondary background)
// Steel Gray: #2E2E2E (UI elements / dividers)
// White: #FFFFFF (main text)
// Electric Blue: #2196F3 (accent buttons / highlights)

const Footer: React.FC = () => {
  
  const CAL_LINK = "https://cal.com/itsvijaychoudhary/schedule-a-call";
  const EMAIL = "vijay9828choudhary@gmail.com";

  // State to manage viewport visibility
  const { ref, inView } = useInView({
    triggerOnce: true, // Animation only triggers once
    threshold: 0.1,    // Triggers when 10% of the component is visible
  });

  // Data for the Typewriter Effect
  const heroWords = [
    { text: "We", className: "text-white" },
    { text: "help" },
    { text: "startups", className: "text-[#2196F3]" },
    { text: "and", className: "text-white" },
    { text: "businesses" },
    { text: "build", className: "text-white" },
    { text: "their", className: "text-white" },
    { text: "profitable", className: "text-white" },
    { text: "personal", className: "text-white" },
    { text: "brands", className: "text-white" },
    { text: "that", className: "text-white" },
    { text: "actually", className: "text-white" },
    { text: "creates", className: "text-[#2196F3]" },
    { text: "distribution.", className: "text-white" },
  ];

  return (
    <footer className="relative bg-[#000000] text-white pt-24 pb-10 px-6 sm:px-10 md:px-16 overflow-x-hidden">

      {/* --- 1. Top CTA Section (Animated Text) --- */}
      {/* Attach the ref here so useInView watches this div */}
      <div 
        ref={ref}
        className="relative z-10 flex flex-col items-center justify-center text-center max-w-7xl mx-auto pb-20 border-b border-[#2E2E2E]"
      >
        
        {/* Animated Headline Container */}
        {/* FIX: Using responsive min-height and padding to prevent text stacking/overflowing on narrow screens when it wraps. */}
        <div className="text-3xl sm:text-4xl md:text-5xl font-bold max-w-5xl min-h-[6rem] sm:min-h-[8rem] flex items-center justify-center p-4">
            
            {/* Conditional Rendering: Only show the typewriter effect when the component is in view */}
            {inView ? (
                 <TypewriterEffectSmooth words={heroWords}  /> 
            ) : (
                // Render static text when not in view (prevents animation jump)
                // Adjusting opacity to ensure it takes up space correctly.
                <p className="opacity-0">We help startups and businesses build their profitable personal brands that actually creates distribution.</p>
            )}
        </div>

        {/* Subtext - Improved mobile readability */}
        <p className="mt-6 max-w-2xl text-base sm:text-lg text-gray-400 font-light px-4 sm:px-0">
          Transform your knowledge into compelling short-form videos that
          captivate your audience, generate leads effortlessly, and build a
          brand they can’t ignore.
        </p>

        {/* CTA Button - Style matching the Hero section */}
        <a
          href={CAL_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-block bg-[#2196F3] text-white px-8 sm:px-10 py-3.5 rounded-lg shadow-xl shadow-[#2196F3]/40 
                     text-md sm:text-lg font-semibold tracking-wide uppercase transition-all duration-300 
                     hover:bg-white hover:text-[#2196F3] hover:shadow-none transform hover:scale-[1.02]"
        >
          Book a Free Discovery Call
        </a>
      </div>

      {/* --- 2. Footer Base and Contact Info --- */}
      {/* Primary Flex container: Stacks vertically on mobile (default) and becomes horizontal on desktop (md:flex-row) */}
      <div className="relative z-10 pt-10 flex flex-col md:flex-row justify-between items-center md:items-end max-w-7xl mx-auto gap-12">

        {/* Left: Logo + Name */}
        {/* Centered on mobile, left-aligned on desktop (md:items-start) */}
        <div className="flex flex-col items-center md:items-start gap-2 flex-shrink-0">
          <img src="/logo/Whitelogo.png" alt="Logo" className="w-24 h-auto drop-shadow-lg" />
          <span className="text-2xl sm:text-3xl font-bold tracking-wider text-white">The Final Cut</span>
          <p className="text-sm text-gray-500 mt-1">A Personal Branding Studio.</p>
        </div>

        {/* Right: Contact Section and Social Icons */}
        {/* Centered text on mobile, right-aligned on desktop (md:text-right) */}
        <div className="text-center md:text-right w-full md:w-auto">
          <h4 className="text-lg font-bold text-[#2196F3] mb-3 uppercase tracking-wider">Connect</h4>
          
          {/* Email */}
          <p className="text-base text-gray-300 mb-4">
            📩 <a href={`mailto:${EMAIL}`} className="hover:text-[#2196F3] transition-colors">{EMAIL}</a>
          </p>
          
          {/* Social Icons - Centered on mobile, right-aligned on desktop */}
          <div className="flex gap-6 justify-center md:justify-end text-3xl text-white">
            <a href="https://www.youtube.com/@itsvijaychoudhary/featured" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 transition-colors" aria-label="YouTube"><FaYoutube /></a>
            <a href="https://www.instagram.com/itsvijaychoudhary/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-colors" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://www.linkedin.com/in/itsvijaychoudhary/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors" aria-label="LinkedIn"><FaLinkedinIn /></a>
            <a href="https://x.com/_vijaychoudhary" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors" aria-label="Threads/X"><FaTwitter /></a>
          </div>
        </div>
      </div>

      {/* --- 3. Copyright --- */}
      <div className="relative z-10 mt-12 pt-6 border-t border-[#2E2E2E] text-center text-sm text-gray-500">
        © {new Date().getFullYear()} The Final Cut. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
