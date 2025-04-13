import React from 'react';

const Hero = () => {
  return (
    <section className="h-screen flex items-center justify-center text-center bg-gradient-to-b from-gray-800 to-gray-900 px-4">
      <div>
        <h1 className="text-5xl font-bold mb-4">Hi, I'm Shyam Raj 👋</h1>
        <p className="text-xl text-gray-300">Full Stack Developer | React & Django Enthusiast</p>
        <div className="mt-6 space-x-4">
          <a href="#projects" className="bg-blue-600 px-6 py-2 rounded hover:bg-blue-700">View Projects</a>
          <a href="https://github.com/shyamshyam018" target="_blank" rel="noopener noreferrer" className="underline text-gray-300 hover:text-white">GitHub</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
