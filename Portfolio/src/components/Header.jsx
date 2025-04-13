import React from 'react';
import lantern from '../../public/lantern.png'; 

const Header = () => {
  return (
    <header className="fixed w-full top-0 bg-gradient-to-r from-[#8B0000] to-[#FFD700] z-50 shadow-xl border-b-4 border-[#DAA520]">
      <div className="max-w-7xl mx-auto px-4 py-5 flex justify-between items-center relative">
        
        {/* Hanging Lantern Animation */}
        <img 
          src={lantern} 
          alt="Lantern" 
          className="absolute left-4 top-0 w-12 animate-hang bounce-slow"
        />
        <img 
          src={lantern} 
          alt="Lantern" 
          className="absolute right-4 top-0 w-12 animate-hang bounce-slow"
        />
        
        {/* Title with Bungee Tint font */}
        <h1 
          className="text-3xl font-semibold ml-5 text-[#FFD700] tracking-widest font-protest drop-shadow-[0_2px_2px_rgba(255,215,0,0.8)]"
        >
          Shyam Raj
        </h1>
      
        {/* Navigation with Protest Riot font */}
        <nav className="space-x-6 font-protest mr-5">
          {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((section) => (
            <a
              key={section}
              href={`#${section.toLowerCase()}`}
              className="text-[#cc1e1e] hover:text-white hover:cursor-none font-medium transition-all duration-200 hover:scale-110"
              aria-label={`Go to ${section} section`}
            >
              {section}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
