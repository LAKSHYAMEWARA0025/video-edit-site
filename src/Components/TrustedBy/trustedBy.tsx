import React from "react";

// Updated company data to point to local logo files in the `/Trust/` folder
const companies = [
  { name: "Yes Securities", logo: "/Trust/YesSecurities.png" },
  { name: "Samco Securities", logo: "/Trust/Samco.png" },
  { name: "Lvana", logo: "/Trust/lvana.png" },
  { name: "Fome", logo: "/Trust/Fome.png" },
  { name: "Air India", logo: "/Trust/Airindia.png" },
  { name: "Dhiwise", logo: "/Trust/Dhiwise.png" },
  { name: "Scaler", logo: "/Trust/Scaler.png" },
  { name: "Vedantu", logo: "/Trust/vedantu.png" },
  { name: "Semrush", logo: "/Trust/semrush.png" },
  { name: "Tuf", logo: "/Trust/tuf.png" },
  { name: "Vrikshit Foundation", logo: "/Trust/Varkshit.png" },
  { name: "Unacademy", logo: "/Trust/Unacademy.png" },
];

const TrustedBy: React.FC = () => {
  // Duplicate the array for a seamless infinite scroll
  const logos = [...companies, ...companies];
  const animationDuration = 45; // seconds

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
              className="flex-shrink-0 flex items-center justify-center min-w-[180px] sm:min-w-[240px] h-28 group"
            >
              <img
                src={company.logo}
                alt={company.name}
                className="h-16 sm:h-20 w-auto object-contain transition-all duration-300 filter grayscale brightness-0 invert opacity-70 group-hover:opacity-100 group-hover:scale-115"
                // Fallback in case a logo fails to load
                onError={(e) => { (e.currentTarget as HTMLImageElement).src = `https://placehold.co/240x80/000000/FFFFFF?text=${company.name}`; }}
              />
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

