import { useState } from "react";
import { motion } from "framer-motion";

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

const FAQItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      layout
      onClick={() => setOpen(!open)}
      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 sm:p-6 mb-4 cursor-pointer transition-all duration-300 hover:border-white/20"
    >
      <div className="flex justify-between items-center gap-4">
        <h4 className="text-base sm:text-lg font-semibold text-white font-inter">
          {question}
        </h4>
        <button className="text-lg sm:text-xl text-white font-bold transition-transform duration-200">
          {open ? "−" : "+"}
        </button>
      </div>
      {open && (
        <motion.p
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-3 text-sm sm:text-base text-gray-300 font-inter leading-relaxed"
        >
          {answer}
        </motion.p>
      )}
    </motion.div>
  );
};

const Questions = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16">
      {/* FAQ */}
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-oswald font-bold text-center mb-3">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-sm sm:text-base text-gray-400 mb-10 font-inter">
          Get answers to the most common questions about our services
        </p>
        {faqs.map((f, idx) => (
          <FAQItem key={idx} question={f.question} answer={f.answer} />
        ))}
      </div>
    </section>
  );
};

export default Questions;
