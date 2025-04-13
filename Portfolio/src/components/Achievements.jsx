import React from "react";

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 px-4 bg-gray-900 text-white text-center">
      <h2 className="text-4xl font-bold mb-8">Achievements</h2>
      <div className="max-w-4xl mx-auto space-y-6 text-left">
        {[
          {
            title: 'Hackfest ‘23 – 3rd Prize',
            desc: 'Won ₹50,000 for building hands-free data visualization & defect detection tool.',
          },
          {
            title: 'Smart India Hackathon (SIH) 2024',
            desc: 'Shortlisted for finals with job portal tailored for differently-abled users.',
          },
          {
            title: 'BITSHACK 2023 – Finalist',
            desc: 'Built AI-powered academic platform using LLMs and contextual chat tools.',
          }
        ].map((achieve, i) => (
          <div key={i} className="bg-gray-800 p-5 rounded-xl shadow-md">
            <h4 className="text-xl font-bold text-green-400">{achieve.title}</h4>
            <p className="text-gray-300">{achieve.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;