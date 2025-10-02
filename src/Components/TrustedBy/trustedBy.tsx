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

const TrustedBy = () => {
  const logos = [...companies, ...companies];

  return (
    <section className="bg-bg py-16 text-center text-textMain relative overflow-hidden">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-heading font-semibold mb-12">
        Trusted by the industry leaders
      </h2>

      <div className="logo-carousel w-full overflow-hidden">
        <div className="flex gap-10 animate-scroll px-4">
          {logos.map((company, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 flex items-center justify-center min-w-[160px]"
            >
              <div className="p-4 rounded-2xl bg-gradient-to-tr from-primary/30 via-white/10 to-primary/30 backdrop-blur-md shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105">
                <img
                  src={company.logo}
                  alt={company.name}
                  className="h-16 sm:h-20 w-auto object-contain transition-all duration-300 filter grayscale hover:grayscale-0 hover:brightness-110"
                  onError={(e) =>
                    (e.currentTarget.src = "/logos/placeholder-logo.png")
                  }
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Animation Styles
      <style 'jsx'>{`
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        @keyframes scroll {
          from {
            transform: translateX(0%);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style> */}
    </section>
  );
};

export default TrustedBy;
