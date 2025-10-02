// src/components/Creators.tsx
import { motion } from "framer-motion";

interface Creator {
  name: string;
  handle: string;
  profile: string; // profile image URL
  link: string; // Instagram link
}

const creators: Creator[] = [
  {
    name: "Ishan",
    handle: "@ishan",
    profile: "/creators/ishan.jpg",
    link: "https://instagram.com/ishan",
  },
  {
    name: "Kashish IG",
    handle: "@kashish",
    profile: "/creators/kashish.jpg",
    link: "https://instagram.com/kashish",
  },
  {
    name: "Kushagra Tayal",
    handle: "@kushagra",
    profile: "/creators/kushagra.jpg",
    link: "https://instagram.com/kushagra",
  },
  // 👉 Add the rest of the creators here
];

const Creators = () => {
  return (
    <section className="bg-bg py-16 text-center text-textMain">
      <h2 className="text-2xl md:text-4xl font-heading font-bold mb-12">
        Worked with Creators
      </h2>

      {/* Grid of Creator Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 px-6">
        {creators.map((creator, idx) => (
          <motion.a
            href={creator.link}
            target="_blank"
            rel="noopener noreferrer"
            key={idx}
            className="flex flex-col items-center bg-white/10 rounded-xl p-4 shadow-md hover:shadow-xl transition transform hover:-translate-y-2"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={creator.profile}
              alt={creator.name}
              className="w-24 h-24 rounded-full object-cover border-2 border-primary mb-4"
            />
            <h3 className="text-lg font-semibold">{creator.name}</h3>
            <p className="text-sm text-textMuted flex items-center gap-1">
              <img
                src="/icons/instagram.svg"
                alt="Instagram"
                className="w-4 h-4"
              />
              {creator.handle}
            </p>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Creators;
