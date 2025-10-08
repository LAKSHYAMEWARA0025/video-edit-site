import { useState, useEffect } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const SCROLL_THRESHOLD = 100;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > SCROLL_THRESHOLD);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [SCROLL_THRESHOLD]);

  const CAL_LINK = "https://cal.com/itsvijaychoudhary/schedule-a-call";

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#testimonials", label: "Testimonials" },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 
              overflow-x-hidden overflow-y-hidden
              ${
                scrolled
                  ? "bg-[#121212]/95 backdrop-blur-md shadow-lg"
                  : "bg-transparent"
              }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center h-20 px-4 sm:px-6 lg:px-8">
          <a
            href="#top"
            className="flex items-center space-x-2 sm:space-x-3 transition-opacity duration-300 hover:opacity-80 flex-shrink-0"
          >
            <img
              src="/logo/Whitelogo.png"
              alt="Logo"
              className="w-64 md:w-40 h-auto drop-shadow-lg"
              onError={(e) => { e.currentTarget.src = '/logo/Whitelogo.png'; }}
            />
          </a>

          <nav className="hidden md:flex space-x-10 text-lg font-medium">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-white hover:text-[#BF4C13] transition-colors duration-300"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <a
              href={CAL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-6 py-2.5 rounded-md text-lg font-semibold transition-all duration-300 border ${
                scrolled
                  ? "border-[#BF4C13]/75 text-white hover:bg-[#502D1B]/85 hover:border-[#502D1B] hover:text-white"
                  : "border-white text-white hover:bg-[#502D1B]/85 hover:border-[#502D1B]"
              }`}
            >
              Book a Call
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none text-white"
              aria-label="Toggle navigation menu"
            >
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className="md:hidden px-4 sm:px-6 lg:px-8 pb-5 transition-all bg-[#000000] shadow-xl"
        >
          <nav className="flex flex-col space-y-4 text-base font-medium pt-4 border-t border-gray-700">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-white hover:text-[#BF4C13] transition-colors duration-300 block px-4 py-2"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href={CAL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-2 px-5 py-2 rounded-md border w-fit transition-all duration-300 font-semibold ${
                scrolled
                  ? "border-[#BF4C13]/75 text-white hover:bg-[#502D1B]/85 hover:border-[#502D1B]"
                  : "border-white text-white hover:bg-[#502D1B]/85 hover:border-[#502D1B]"
              }`}
              onClick={() => setIsOpen(false)}
            >
              Book a Call
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

