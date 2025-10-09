import React, { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";

interface Word {
  text: string;
  className?: string;
}

interface TypewriterEffectSmoothProps {
  words: Word[];
}

const TypewriterEffect: React.FC<TypewriterEffectSmoothProps> = ({ words }) => {
  const [isTyping, setIsTyping] = useState(false); 
  
  // Set isTyping state on mount to trigger animation
  useEffect(() => {
    setIsTyping(true);
  }, []);

  const containerVariants :Variants= {
    visible: {
      transition: {
        // Stagger between words (0.15s gap between each word's animation start)
        staggerChildren: 0.15, 
      },
    },
  };

  // Variants applied to the entire word block
  const wordVariants :Variants= {
    hidden: { 
        opacity: 0,
        // The clipPath reveals the word from left (0%) to right (100%)
        clipPath: 'inset(0 100% 0 0)', 
    },
    visible: { 
        opacity: 1, 
        clipPath: 'inset(0 0% 0 0)',
        transition: {
            // Short reveal duration for the 'typing' feel
            duration: 0.4, 
            ease: "easeInOut",
        }
    },
  };

  const renderWords = () => {
    // FIX: Ensure words array exists before calling map()
    if (!words || words.length === 0) {
      return null;
    }
    
    // Renders the words as individual, animatable blocks
    return words.map((word, idx) => {
      
      return (
        <motion.div 
          key={word.text + idx} 
          // Apply animation directly to the word block
          variants={wordVariants}
          // Added styling to ensure the overflow caused by clip-path is hidden
          className={`inline-block text-white overflow-hidden ${word.className || ''}`}
          style={{ whiteSpace: 'nowrap' }} // Keeps words from wrapping mid-animation
        >
          {/* Render the full text of the word */}
          {word.text}
          <span className="inline-block">&nbsp;</span> {/* Space between words */}
        </motion.div>
      );
    });
  };

  return (
    <motion.div
      className="flex flex-wrap justify-center font-extrabold leading-tight tracking-wide"
      variants={containerVariants}
      initial="hidden"
      animate={isTyping ? "visible" : "hidden"}
    >
      {renderWords()}
    </motion.div>
  );
};

export default TypewriterEffect;
