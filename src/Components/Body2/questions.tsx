import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- Design Palette Mapping ---
// Black: #000000 (background)
// Charcoal Gray: #1A1A1A (item background)
// Electric Blue: #2196F3 (accent)

const faqs = [
  {
    question: "What do we offer?",
    answer:
      "We provide end-to-end content creation services—right from ideation, planning, and scripting to filming, editing, and packaging content for Instagram, YouTube, LinkedIn, and X. We also guide you on how to effectively leverage your content once it’s live.",
  },
  {
    question: "Who is this for?",
    answer:
      "This is for founders and entrepreneurs who want to build a personal brand that creates distribution and drives real results.",
  },
  {
    question: "What is the timeline for results to show up?",
    answer:
      "Usually it takes 3-4 months and for 90% of our creators it took 3-4 months time to get a viral video and drive actual numbers.",
  },
  {
    question: "Are there any guaranteed results?",
    answer:
      "If we don’t deliver results, we’ll work at half the agreed quote. We’ll handle all the backend systems until we see real progress.",
  },
];

// Variants for smooth opening/closing animation
const collapseVariants = {
  open: {
    height: "auto",
    opacity: 1,
    paddingTop: "1rem", // p-4 equivalent
    transition: {
      height: { duration: 0.4, ease: "easeOut" },
      opacity: { duration: 0.25, delay: 0.1 },
    },
  },
  collapsed: {
    height: 0,
    opacity: 0,
    paddingTop: "0rem",
    transition: {
      height: { duration: 0.4, ease: "easeOut" },
      opacity: { duration: 0.25 },
    },
  },
};

const FAQItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [open, setOpen] = useState(false);

  return (
    // Outer container for layout, allowing Framer Motion to animate surrounding elements
    <motion.div
      layout
      className="w-full bg-[#1A1A1A] rounded-xl mb-4 transition-all duration-300 shadow-xl border border-transparent hover:border-[#2E2E2E]"
    >
      
      {/* Question Header (Clickable Area) */}
      <div
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center p-5 sm:p-6 cursor-pointer"
      >
        <h4 className="text-base sm:text-lg font-semibold text-white max-w-[90%]">
          {question}
        </h4>
        <motion.button 
          className="text-xl font-bold text-[#2196F3] transition-transform duration-300 flex-shrink-0"
          animate={{ rotate: open ? 45 : 0 }} // Rotates the '+' into an 'x'
          aria-expanded={open}
        >
          {open ? "−" : "+"}
        </motion.button>
      </div>

      {/* Answer Content (Animated Collapse/Expand) */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={collapseVariants}
            className="overflow-hidden px-5 sm:px-6" // Hides overflow during height animation
          >
            <motion.p className="text-sm sm:text-base text-gray-400 pb-5 leading-relaxed">
              {answer}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Questions = () => {
  return (
    <section className="bg-[#000000] py-20 px-4 sm:px-6 lg:px-8">
      {/* FAQ Container */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white text-center mb-4">
          Frequently Asked <span className="text-[#2196F3]">Questions</span>
        </h2>
        <p className="text-center text-base sm:text-lg text-gray-500 mb-12">
          Get answers to the most common questions about our services.
        </p>
        
        {/* Render FAQ Items */}
        {faqs.map((f, idx) => (
          <FAQItem key={idx} question={f.question} answer={f.answer} />
        ))}
      </div>
    </section>
  );
};

export default Questions;
