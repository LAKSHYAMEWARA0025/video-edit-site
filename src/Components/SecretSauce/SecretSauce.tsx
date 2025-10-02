import React from "react";
import { motion, Variants } from "framer-motion";

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
    img: "/images/brand-strategy.jpg",
  },
  {
    title: "Filming and Editing",
    text:
      "Once we receive all the raw files, we’ll kick off the editing process. Throughout the shoot, we’ll guide and support you at every step. After editing, we’ll create the copies to go along with the content—and just like that, your content will be ready to go live.",
    img: "/images/filming.jpg",
  },
  {
    title: "Watch your brand scale",
    text:
      "Once your content goes live, it will become a massive support system for your business. Think of it like the iceberg beneath the surface—driving leads and sales that aren’t immediately visible. Beyond that, whether it’s hiring, sharing your ideas, closing high-ticket clients, or generating inbound leads—everything flows through one powerful engine: your personal brand.",
    img: "/images/brand-scale.jpg",
  },
];

// typed variants to satisfy TypeScript
const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 80,
    rotateX: -18,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const SecretSauce: React.FC = () => {
  return (
    <section className="relative bg-bg text-textMain py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-center mb-16">
          What’s the <span className="text-primary">Secret?</span>
        </h2>

        <div className="flex flex-col gap-24">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              className={`flex flex-col md:flex-row items-center gap-8 ${
                idx % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              variants={cardVariants}
            >
              {/* Image */}
              <div className="w-full md:w-1/2">
                <img
                  src={step.img}
                  alt={step.title}
                  className="w-full h-64 sm:h-80 object-cover rounded-xl shadow-lg"
                />
              </div>

              {/* Text */}
              <div className="w-full md:w-1/2 space-y-4">
                <h3 className="text-2xl md:text-3xl font-semibold text-primary">
                  {step.title}
                </h3>
                <p className="text-base sm:text-lg leading-relaxed text-textMuted">
                  {step.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecretSauce;
