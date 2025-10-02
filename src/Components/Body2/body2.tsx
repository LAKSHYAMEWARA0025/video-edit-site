import  { useState } from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Ananya Sharma",
    role: "Founder, SocialSphere",
    image: "/assets/ananya.jpg", // make sure to place image in /public/assets/
    review:
      "Working with this team has transformed our brand. Their videos boosted our visibility by 300%.",
  },
  {
    name: "Rohit Kapoor",
    role: "Marketing Head, FinEdge",
    image: "/assets/rohit.jpg",
    review:
      "Professional, reliable, and insanely creative. Highly recommended!",
  },
  {
    name: "Nidhi Verma",
    role: "Content Strategist, BrandNest",
    image: "/assets/nidhi.jpg",
    review:
      "From editing to storytelling, everything was flawless. Our audience loves the content!",
  },
];

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
      "Usually it takes 3-4 months and for 90% of our creators it took 3-4 months time to get viral video video and drive actual numbers.",
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
      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 mb-4 cursor-pointer transition-all duration-300 hover:border-white/20"
    >
      <div className="flex justify-between items-center">
        <h4 className="text-lg font-semibold text-white font-inter">
          {question}
        </h4>
        <button className="text-xl text-white font-bold transition-transform duration-200">
          {open ? "−" : "+"}
        </button>
      </div>
      {open && (
        <motion.p
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-3 text-sm text-gray-300 font-inter"
        >
          {answer}
        </motion.p>
      )}
    </motion.div>
  );
};

const Body2 = () => {
  return (
    <section className="bg-[#0e0f1b] text-white py-20 px-6 sm:px-12 md:px-20">
      {/* Testimonials */}
      <div className="mb-24">
        <h2 className="text-4xl sm:text-5xl font-oswald font-bold text-center mb-14">
          What people say when we’re not in the room
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border border-white/20"
                />
                <div>
                  <h4 className="text-white font-semibold font-inter">
                    {t.name}
                  </h4>
                  <p className="text-gray-400 text-xs font-inter">{t.role}</p>
                </div>
              </div>
              <p className="text-sm text-gray-300 font-inter leading-relaxed">
                "{t.review}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-oswald font-bold text-center mb-3">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-sm text-gray-400 mb-10 font-inter">
          Get answers to the most common questions about our services
        </p>
        {faqs.map((f, idx) => (
          <FAQItem key={idx} question={f.question} answer={f.answer} />
        ))}
      </div>
    </section>
  );
};

export default Body2;
