import React from "react";

// You can keep these TypeScript interfaces in a separate types file if you prefer
interface Logo {
  name: string;
  logo: string;
}

type ScrollSpeed = "slow" | "normal" | "fast";

interface InfiniteLogoScrollProps {
  logos: Logo[];
  speed?: ScrollSpeed;
}

const InfiniteLogoScroll: React.FC<InfiniteLogoScrollProps> = ({
  logos,
  speed = "normal",
}) => {
  const duration: Record<ScrollSpeed, string> = {
    slow: "80s",
    normal: "40s",
    fast: "20s",
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Fade effect at the start */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-white to-transparent dark:from-black"></div>

      {/* The scrolling container */}
      <div
        className="flex animate-infinite-scroll"
        style={
          {
            "--duration": duration[speed],
          } as React.CSSProperties
        }
      >
        {/* We render the logos twice for a seamless loop */}
        {[...logos, ...logos].map((company, index) => (
          <div
            key={`${company.name}-${index}`}
            className="flex-shrink-0 w-[150px] px-4"
          >
            <img
              src={company.logo}
              alt={`${company.name} logo`}
              className="mx-auto h-10 w-auto object-contain"
              //  filter brightness-0 invert
            />
          </div>
        ))}
      </div>

      {/* Fade effect at the end */}
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-white to-transparent dark:from-black"></div>
    </div>
  );
};

export default InfiniteLogoScroll;
