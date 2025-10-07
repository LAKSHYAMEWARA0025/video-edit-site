import React from "react";
import { motion, Variants } from "framer-motion";

// --- Design Palette Mapping ---
const CHARCOAL_BG = "#1A1A1A"; // Secondary Background (Card Body)
// const STEEL_GRAY = "#2E2E2E"; // UI elements / dividers
// const ACCENT_BLUE = "#2196F3"; // Electric Blue (Accent)

interface Step {
  title: string;
  text: string;
  img: string;
}

const steps: Step[] = [
  {
    title: "Brand Ideation and Strategy",
    text:
      "In a single powerful session, we’ll map your entire content ecosystem—shaping your unique angle, refining your style, designing impactful hooks, and building a strategy that adds the wow factor. Within a week, you’ll have a clear 1–3 month brand strategy ready. By week two, your brand assets will be finalized and content production will be underway.",
    img: "/SecretSauce/bb.png", // NEW IMAGE HERE
  },
  {
    title: "Filming and Editing",
    text:
      "Once we receive all the raw files, we’ll kick off the editing process. Throughout the shoot, we’ll guide and support you at every step. After editing, we’ll create the copies to go along with the content—and just like that, your content will be ready to go live.",
    img: "/SecretSauce/FilmingEditing.jpg", // KEEP EXISTING IMAGE
  },
  {
    title: "Watch your brand scale",
    text:
      "Once your content goes live, it will become a massive support system for your business. Think of it like the iceberg beneath the surface—driving leads and sales that aren’t immediately visible. Beyond that, whether it’s hiring, sharing your ideas, closing high-ticket clients, or generating inbound leads—everything flows through one powerful engine: your personal brand.",
    img: "/SecretSauce/WatchYourBrandScale.jpg", // KEEP EXISTING IMAGE
  },
];

// --- 1. Custom Spotlight/Container Component (Local Implementation) ---
interface SpotlightWrapperProps {
  children: React.ReactNode;
  spotlightColor: string;
  className?: string;
}

const SpotlightWrapper: React.FC<SpotlightWrapperProps> = ({ children, spotlightColor, className }) => {
  return (
    <div className={`relative ${className} group`}>
      {/* Absolute positioned div acts as the glowing border */}
      <div 
        className="absolute inset-0.5 rounded-xl transition duration-500 opacity-0 
                   group-hover:opacity-100 group-hover:scale-[1.01] pointer-events-none"
        style={{
          boxShadow: `0 0 15px 5px ${spotlightColor}, 0 0 50px 10px ${spotlightColor} inset`,
        }}
      />
      {children}
    </div>
  );
};


// --- 2. Framer Motion Variants ---
const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 80,
    rotateX: -18, 
    scale: 0.9,
    transformOrigin: "bottom",
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: {
      duration: 1.0,
      ease: [0.25, 0.46, 0.45, 0.94],
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};


// --- 3. Main Component ---
const SecretSauce: React.FC = () => {
  return (
    <section id="services" className="relative bg-[#000000] text-white py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-16">
          What’s the <span className="text-[#2196F3]">Secret?</span>
        </h2>

        <div className="flex flex-col gap-28">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              className={`flex flex-col items-center gap-10 md:gap-16 perspective-xl group 
                          ${idx % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
            >
              
              {/* Image Container (Visual 3D Card with Spotlight) */}
              <motion.div 
                className={`w-full md:w-1/2`} 
                variants={itemVariants}
                style={{ transformStyle: "preserve-3d" }}
              >
                <SpotlightWrapper 
                  spotlightColor="#2196F3"
                  className="rounded-xl transition duration-300 w-full"
                >
                  <div 
                    className={`h-64 sm:h-80 bg-[${CHARCOAL_BG}] rounded-xl overflow-hidden relative z-10`}
                  >
                    <img
                      src={step.img}
                      alt={step.title}
                      className="w-full h-full object-cover rounded-xl transition-transform duration-500 hover:scale-[1.03] opacity-90"
                      onError={(e) => { e.currentTarget.src = `https://placehold.co/400x300/${CHARCOAL_BG.substring(1)}/FFFFFF?text=Step+${idx+1}`; }}
                    />
                  </div>
                </SpotlightWrapper>
              </motion.div>

              {/* Text Content */}
              <motion.div 
                className={`w-full md:w-1/2 space-y-4 p-4`}
                variants={itemVariants}
              >
                <span className="text-sm font-semibold text-[#2196F3] uppercase tracking-wider">
                  STEP {idx + 1}
                </span>
                <h3 className="text-3xl md:text-4xl font-extrabold text-white">
                  {step.title}
                </h3>
                <p className="text-base sm:text-lg leading-relaxed text-gray-300">
                  {step.text}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecretSauce;
