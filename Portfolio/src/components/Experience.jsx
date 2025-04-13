import React from "react";

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative py-24 px-4 bg-[#3b0a15] text-white overflow-hidden"
    >
      {/* Lanterns */}
      <div className="absolute top-10 left-10 w-14 animate-float z-0 opacity-70">
        <img src="/lantern.png" alt="Lantern" />
      </div>
      <div className="absolute top-16 right-10 w-14 animate-float-reverse z-0 opacity-70">
        <img src="/lantern.png" alt="Lantern" />
      </div>

      {/* Fewer petals, subtler effect */}
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-5 h-5 bg-[url('/petals.png')] bg-contain bg-no-repeat animate-fall pointer-events-none"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${5 + Math.random() * 5}s`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}

      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-protest text-[#f4c430] text-center mb-12 drop-shadow-lg z-10 relative">
        Experience
      </h2>

      {/* Content */}
      <div className="max-w-4xl mx-auto text-left space-y-10 relative z-10">
        {/* Internship */}
        <div className="bg-[#4c1c24]/90 border border-[#f4c430] rounded-xl p-6 shadow-xl hover:shadow-yellow-500/30 transition duration-300">
          <h3 className="text-2xl font-bold text-[#f4c430] mb-2">
            Web Dev Intern – CodSoft (Feb–Mar 2024)
          </h3>
          <p className="text-[#fbe8d3]">
            Built a personal portfolio, fitness landing page, and explored the full web development stack via real-world projects.
          </p>
        </div>

        {/* Certifications */}
        <div className="bg-[#4c1c24]/90 border border-[#f4c430] rounded-xl p-6 shadow-xl hover:shadow-yellow-500/30 transition duration-300">
          <h4 className="text-xl font-semibold text-[#f4c430] mb-2">Certifications</h4>
          <ul className="list-disc ml-6 text-[#fbe8d3] space-y-1">
            <li>Docker Essentials – IBM</li>
            <li>Mastering AWS – Great Learning</li>
            <li>Git & GitHub – Simplilearn</li>
            <li>React Basics – Meta (Ongoing)</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
