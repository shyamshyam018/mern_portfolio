import React from 'react';

const Header = () => {
  return (
    <header className="fixed w-full top-0 bg-gray-800 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Shyam Raj</h1>
        <nav className="space-x-6">
          <a href="#about" className="text-gray-300 hover:text-white" aria-label="Go to About section">About</a>
          <a href="#skills" className="text-gray-300 hover:text-white" aria-label="Go to Skills section">Skills</a>
          <a href="#projects" className="text-gray-300 hover:text-white" aria-label="Go to Projects section">Projects</a>
          <a href="#experience" className="text-gray-300 hover:text-white" aria-label="Go to Experience section">Experience</a>
          <a href="#contact" className="text-gray-300 hover:text-white" aria-label="Go to Contact section">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
