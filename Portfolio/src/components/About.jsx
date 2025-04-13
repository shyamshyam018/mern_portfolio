import React from 'react';

const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-4 bg-[#fff0f5] text-center relative overflow-hidden"
    >
      {/* Optional floating petal animation for continuity */}
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-5 h-5 bg-[url('/petal.png')] bg-contain bg-no-repeat animate-fall"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${5 + Math.random() * 5}s`,
            animationDelay: `${Math.random() * 3}s`,
          }}
        />
      ))}

      <h2 className="text-4xl md:text-5xl font-protest text-pink-700 drop-shadow mb-6">
        About Me
      </h2>
      <p className="max-w-3xl mx-auto text-[#6d3a3a] text-lg md:text-xl font-medium leading-relaxed font-bungee px-4">
        I'm <strong className="text-pink-700">Shyam Raj</strong>, a passionate full stack developer and
        engineering student (B.Tech IT) at Bannari Amman Institute of Technology. I thrive on solving problems
        through code, enjoy working on meaningful projects, and love participating in hackathons. My goal is to grow
        as a developer while contributing to impactful tech solutions.
      </p>
    </section>
  );
};

export default About;
