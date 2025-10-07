import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";

const faqs = [
  {
    question: "What do we offer?",
    answer: "We provide end-to-end content creation services—right from ideation, planning, and scripting to filming, editing, and packaging content for Instagram, YouTube, LinkedIn, and X. We also guide you on how to effectively leverage your content once it’s live.",
  },
  {
    question: "Who is this for?",
    answer: "This is for founders and entrepreneurs who want to build a personal brand that creates distribution and drives real results.",
  },
  {
    question: "What is the timeline for results to show up?",
    answer: "Usually it takes 3-4 months and for 90% of our creators it took 3-4 months time to get a viral video and drive actual numbers.",
  },
  {
    question: "Are there any guaranteed results?",
    answer: "If we don’t deliver results, we’ll work at half the agreed quote. We’ll handle all the backend systems until we see real progress.",
  },
];

const collapseVariants:Variants = {
  open: {
    height: "auto",
    opacity: 1,
    transition: {
      height: { duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] },
      opacity: { duration: 0.3, delay: 0.1 },
    },
  },
  collapsed: {
    height: 0,
    opacity: 0,
    transition: {
      height: { duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] },
      opacity: { duration: 0.3 },
    },
  },
};

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      layout
      className={`p-0.5 rounded-xl mb-4 transition-all duration-500 ${open ? 'bg-gradient-to-r from-orange-900/80 via-orange-800/40 to-gray-800' : 'bg-[#1A1A1A]'}`}
    >
      <div className={`rounded-[11px] ${open ? 'bg-[#121212]' : 'bg-[#1A1A1A]'} transition-colors duration-300`}>
        <div
          onClick={() => setOpen(!open)}
          className="flex justify-between items-center p-5 sm:p-6 cursor-pointer"
        >
          <h4 className="text-base sm:text-lg font-semibold text-white max-w-[90%]">
            {question}
          </h4>
          <motion.div
            className="text-2xl font-bold text-orange-500 flex-shrink-0"
            animate={{ rotate: open ? 135 : 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            aria-hidden="true"
          >
            +
          </motion.div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              key="content"
              initial="collapsed"
              animate="open"
              exit="collapsed"
              variants={collapseVariants}
              className="overflow-hidden px-5 sm:px-6"
            >
              <p className="text-sm sm:text-base text-gray-400 pb-5 leading-relaxed border-t border-gray-800 pt-4">
                {answer}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const Questions = () => {
  return (
    <section className="bg-[#000000] py-20 px-4 sm:px-6 lg:px-8 font-primary">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white text-center mb-4">
          Frequently Asked <span className="bg-gradient-to-r from-gray-200 to-orange-500 bg-clip-text text-transparent">Questions</span>
        </h2>
        <p className="text-center text-base sm:text-lg text-gray-400 mb-12">
          Get answers to the most common questions about our services.
        </p>

        {faqs.map((f, idx) => (
          <FAQItem key={idx} question={f.question} answer={f.answer} />
        ))}
      </div>
    </section>
  );
};

export default Questions;
