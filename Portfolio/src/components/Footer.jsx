import React from "react";

const Footer = () => {
  return (
    <footer className="relative bg-[#1a0000] text-center py-6 text-gray-400 border-t border-red-800 shadow-inner">
      {/* Glowing Top Border Effect */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-500 via-red-500 to-yellow-500 blur-sm animate-pulse" />

      <p className="text-sm md:text-base font-light tracking-wide z-10 relative">
        © {new Date().getFullYear()} <span className="text-yellow-400 font-semibold">Shyam Raj</span> 🐲 | Crafted with ❤️ and creativity.
      </p>

      {/* Optional Scroll-to-top button */}
      {<button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="mt-4 text-yellow-400 hover:text-yellow-300 transition duration-300"
      >
        🔝 Back to Top
      </button> }
    </footer>
  );
};

export default Footer;
