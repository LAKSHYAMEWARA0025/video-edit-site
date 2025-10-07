import React from "react";

const companies = [
  { name: "Yes Securities", logo: "https://logo.clearbit.com/yesinvest.in" },
  { name: "Samco Securities", logo: "https://logo.clearbit.com/samco.in" },
  { name: "Lvana", logo: "https://logo.clearbit.com/ivanajewels.com" },
  { name: "Cello", logo: "https://logo.clearbit.com/celloworld.com" },
  { name: "Air India", logo: "https://logo.clearbit.com/airindia.com" },
  { name: "Dhiwise", logo: "https://logo.clearbit.com/dhiwise.com" },
  { name: "Scaler", logo: "https://logo.clearbit.com/scaler.com" },
  { name: "Vedantu", logo: "https://logo.clearbit.com/vedantu.com" },
  { name: "Semrush", logo: "https://logo.clearbit.com/semrush.com" },
  { name: "Markit Up", logo: "https://logo.clearbit.com/markitup.in" },
  { name: "Vrikshit Foundation", logo: "https://logo.clearbit.com/vrikshitfoundation.org" },
];

const TrustedBy: React.FC = () => {
  const logos = [...companies, ...companies];
  const animationDuration = 45;

  return (
    <section className="bg-[#000000] py-20 text-white relative overflow-hidden font-primary">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center mb-16 uppercase tracking-wider">
          Trusted by the <span className="bg-gradient-to-r from-[#E0E0E0] to-[#D94E13] bg-clip-text text-transparent">Industry Leaders</span>
        </h2>
      </div>

      <div 
        className="w-full overflow-hidden relative"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent 100%)',
        }}
      >
        <div 
          className="flex whitespace-nowrap gap-12 sm:gap-20 py-4 animate-scroll"
          style={{ animationDuration: `${animationDuration}s` }}
        >
          {logos.map((company, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 flex items-center justify-center min-w-[200px] sm:min-w-[280px] h-24"
            >
              <span className="text-2xl sm:text-3xl font-bold text-white text-center transition-all duration-300 opacity-70 hover:opacity-100 hover:scale-105 tracking-wide">
                {company.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          @keyframes scroll {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }

          .animate-scroll {
            animation: scroll ${animationDuration}s linear infinite;
          }
        `}
      </style>
    </section>
  );
};

export default TrustedBy;

