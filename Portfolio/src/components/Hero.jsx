import React from 'react';
import petals from '../../public/petals.png'; 

const Hero = () => {
  return (
    <section
      className="h-screen flex items-center justify-center text-center bg-cover bg-center relative overflow-hidden"
      style={{ backgroundImage: "url('/cherry-blossom-bg.jpg')" }}
      
    >
      <div className="absolute top-10 left-10 w-16 animate-float">
        <img src="/lantern.png" alt="Lantern" />
      </div>
      <div className="absolute top-20 right-10 w-16 animate-float-reverse">
        <img src="/lantern.png" alt="Lantern" />
      </div>

      {/* Floating Cherry Blossoms Animation */}
      {Array.from({ length: 15 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-6 h-6 bg-[url('/petals.png')] bg-contain bg-no-repeat animate-fall"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${4 + Math.random() * 6}s`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}

      <div className="z-10 px-4">
        <h1 className="text-4xl md:text-6xl font-protest text-pink-700 drop-shadow-md mb-6">
          Hi, I'm Shyam Raj 🐦‍🔥
        </h1>
        <p className="text-lg md:text-2xl text-[#d63384] font-medium tracking-wide font-bungee mb-6">
          Full Stack Developer | React & Django Enthusiast
        </p>
        <div className="space-x-4">
          <a
            href="https://drive.google.com/file/d/1qNm85eVUlu1Gy5x_de_adXhcyFcrcpwx/view?usp=sharing"
            className="bg-pink-500 text-white px-6 py-2 rounded-xl shadow hover:bg-pink-600 transition duration-300 font-semibold"
          >
            View Resume
          </a>
          <a
            href="https://github.com/shyamshyam018"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-700 underline hover:text-pink-900 font-semibold transition duration-300"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
