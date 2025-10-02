import React from "react";
import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";

const OwnerInfo: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/20 via-bg to-accent/20 py-20 px-6">
      {/* Animated background gradient blobs */}
      <motion.div
        className="absolute top-0 left-0 w-72 h-72 bg-primary/30 rounded-full blur-3xl"
        animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
        animate={{ x: [0, -100, 0], y: [0, -50, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center text-textMain">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-8">
          We Did it, <span className="text-primary">You can too</span>
        </h2>

        <div className="space-y-6 text-base sm:text-lg leading-relaxed font-primary text-textMuted">
          <p>
            Today, most early-stage businesses can be built using AI. But what
            they often lack is distribution—something AI alone cannot solve.
            That’s where we come in.
          </p>
          <p>
            We’ve worked with several individual creators across India and even
            a few in London, helping them grow their online presence. This
            online presence doesn’t just build credibility, it also creates a
            strong distribution channel that directly fuels their business
            growth.
          </p>
          <p>
            Once you have distribution, running an online business becomes far
            easier. With greater reach and trust, your business can scale much
            faster without any cost.
          </p>
          <p>
            After spending years creating content that resonates with millions,
            I've realized one thing:{" "}
            <span className="text-primary font-semibold">
              attention is the new currency.
            </span>
          </p>
          <p>
            With 100k+ views on YouTube and experience crafting 500+ videos, I
            help brands stand out through powerful storytelling and content
            strategy.
          </p>
          <p className="italic text-accent font-medium">
            Every scroll, every click, every view Matters!!
          </p>
        </div>

        {/* Owner Info with Scroll Animation */}
        <motion.div
          className="mt-16 flex flex-col items-center gap-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <img
            src="/images/owner.jpg" // replace with your actual owner photo
            alt="Owner"
            className="w-32 h-32 rounded-full object-cover border-4 border-primary shadow-lg"
          />
          <h3 className="text-xl sm:text-2xl font-semibold">Lakshya Mewara</h3>
          <a
            href="https://instagram.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-primary hover:text-accent transition text-lg"
          >
            <FaInstagram className="text-2xl" />
            @yourusername
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default OwnerInfo;
