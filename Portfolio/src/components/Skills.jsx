import React from 'react';

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

  return (
    <section id="skills" className="py-20 px-4 bg-gray-800 text-center">
      <h2 className="text-4xl font-bold mb-6">Skills & Tools</h2>
      <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-700 text-white px-5 py-2 rounded-full shadow hover:bg-blue-600 transition"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
