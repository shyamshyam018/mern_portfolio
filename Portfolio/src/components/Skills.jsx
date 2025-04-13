import React, { useEffect, useRef } from 'react';

const Skills = () => {
  const skills = [
    "Java (Intermediate)",
    "React (Intermediate)",
    "Tailwind CSS",
    "Bootstrap 5",
    "Django (Intermediate)",
    "Python (Basic)",
    "SQL (Intermediate)",
  ];

  const containerRef = useRef(null);

  // Lantern movement effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const lanterns = containerRef.current.querySelectorAll('.lantern-skill');

      lanterns.forEach((lantern, i) => {
        const offsetX = (clientX - window.innerWidth / 2) * 0.02 * (i % 3);
        const offsetY = (clientY - window.innerHeight / 2) * 0.02 * (i % 3);
        lantern.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id="skills"
      className="relative py-24 px-4 bg-[#fff5f5] text-center overflow-hidden"
    >
      {/* 🌸 Decorative Chinese-style Divider */}
      <div className="absolute top-0 left-0 w-full  h-20 bg-[url('/chinese-border.png')] bg-repeat-x bg-top bg-[length:auto_100%] pointer-events-none" />

      <h2 className="text-4xl md:text-5xl font-protest text-[#cc1e1e] mt-16 mb-10 drop-shadow">
        Skills & Tools
      </h2>

      {/* Lantern container */}
      <div
        ref={containerRef}
        className="relative max-w-6xl mx-auto flex flex-wrap justify-center gap-8"
      >
        {skills.map((skill, index) => (
          <div
            key={index}
            className="lantern-skill relative w-44 h-40 bg-[url('/lantern.png')] bg-contain bg-no-repeat bg-center flex items-center justify-center text-sm text-yellow-200 font-bold font-bungee drop-shadow-md transition-transform duration-300"
          >
            <span className="text-center px-2">{skill}</span>
          </div>
        ))}
      </div>

      {/* Floating petals for decoration */}
      {Array.from({ length: 7 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-5 h-5 bg-[url('/petals.png')] bg-contain bg-no-repeat animate-fall"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${4 + Math.random() * 6}s`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
    </section>
  );
};

export default Skills;
