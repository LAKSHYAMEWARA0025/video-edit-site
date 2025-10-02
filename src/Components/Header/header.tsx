import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-bg text-textMain shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo + Site Name */}
          <div className="flex items-center space-x-2">
            <img
              src="/logo-placeholder.svg" // Replace this with your actual logo
              alt="Logo"
              className="w-8 h-8"
            />
            <span className="text-xl font-bold text-primary">VideoEditPro</span>
          </div>

          {/* Center Links (Hidden on Mobile) */}
          <nav className="hidden md:flex space-x-8 text-sm font-heading font-medium">
            <a href="#about" className="hover:text-accent transition">
              About
            </a>
            <a href="#services" className="hover:text-accent transition">
              Services
            </a>
            <a href="#testimonials" className="hover:text-accent transition">
              Testimonials
            </a>
          </nav>

          {/* Right CTA */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="bg-primary text-white px-4 py-2 rounded-md hover:bg-accent transition"
            >
              Book a Call
            </a>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
            >
              <svg
                className="w-6 h-6"
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

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-bg px-4 pb-4">
          <nav className="flex flex-col space-y-3 text-sm font-medium pt-4 border-t border-gray-700">
            <a href="#about" className="hover:text-accent transition">
              About
            </a>
            <a href="#services" className="hover:text-accent transition">
              Services
            </a>
            <a href="#testimonials" className="hover:text-accent transition">
              Testimonials
            </a>
            <a
              href="#contact"
              className="mt-2 bg-primary text-white px-4 py-2 rounded-md hover:bg-accent transition w-fit"
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
