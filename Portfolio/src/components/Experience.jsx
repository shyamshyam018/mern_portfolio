import React from "react";

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-gray-800 text-white text-center">
      <h2 className="text-4xl font-bold mb-8">Experience</h2>
      <div className="max-w-4xl mx-auto text-left space-y-6">
        <div className="bg-gray-700 p-6 rounded-lg shadow">
          <h3 className="text-2xl font-semibold text-blue-400">Web Dev Intern – CodSoft (Feb–Mar 2024)</h3>
          <p className="text-gray-300 mt-2">Built personal portfolio, fitness landing page, and learned full web dev stack with real-world projects.</p>
        </div>
        <div className="bg-gray-700 p-6 rounded-lg shadow">
          <h4 className="text-lg text-white font-medium">Certifications:</h4>
          <ul className="list-disc ml-6 text-gray-300 mt-2 space-y-1">
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