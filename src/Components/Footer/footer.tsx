// import React from 'react';
import { FaYoutube, FaInstagram, FaLinkedin } from 'react-icons/fa6';

const Footer = () => {
  return (
    <section className="relative bg-black text-white pt-28 pb-10 px-6 sm:px-12 md:px-20 overflow-hidden">

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* CTA Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-textMain">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading leading-tight max-w-5xl">
          We help{" "}
          <span className="text-textMuted underline underline-offset-4">
            startups and businesses
          </span>{" "}
          build{" "}
          <span className="text-primary">their profitable personal brands</span>{" "}
          that actually{" "}
          <span className="text-textMuted underline underline-offset-4">
            creates distribution.
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-base sm:text-lg text-textMuted font-primary">
          Transform your knowledge into compelling short-form videos that
          captivate your audience, generate leads effortlessly, and build a
          brand they can’t ignore.
        </p>

        <a
          href="#contact"
          className="mt-6 bg-primary text-white px-6 py-3 rounded-md hover:bg-accent transition font-medium"
        >
          Book a Free Discovery Call
        </a>
      </div>

      {/* Footer Base */}
      <div className="relative z-10 mt-20 border-t border-yellow-400 pt-10 flex flex-col md:flex-row justify-between items-center gap-8">

        {/* Left: Logo + Name */}
        <div className="flex items-center gap-4">
          <img src="/logo.svg" alt="Logo" className="w-14 h-14" />
          <span className="font-oswald text-2xl font-bold tracking-wide">Cinematic Studio</span>
        </div>

        {/* Golden line divider on small screens */}
        <div className="w-full border-t border-yellow-500 md:hidden my-6 opacity-40" />

        {/* Right: Contact Section */}
        <div className="text-center md:text-right">
          <h4 className="text-lg font-semibold text-yellow-400 mb-2 font-inter uppercase tracking-wide">Contact</h4>
          <p className="text-base text-gray-300 mb-2 font-inter">
            📩 <a href="mailto:connect@cinematicstudio.com" className="hover:underline">connect@cinematicstudio.com</a>
          </p>
          <div className="flex gap-6 justify-center md:justify-end text-2xl mt-1 text-white">
            <a href="#" className="hover:text-red-500 transition-colors"><FaYoutube /></a>
            <a href="#" className="hover:text-pink-500 transition-colors"><FaInstagram /></a>
            <a href="#" className="hover:text-blue-400 transition-colors"><FaLinkedin /></a>
            {/*<a href="#" className="hover:text-white transition-colors"><FaThreads /></a> */}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="relative z-10 mt-12 text-center text-sm text-gray-500 font-inter">
        © {new Date().getFullYear()} Cinematic Studio. All rights reserved.
      </div>
    </section>
  );
};

export default Footer;
