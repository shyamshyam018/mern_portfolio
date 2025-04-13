// Projects.jsx
import React from "react";

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-gray-900 text-white text-center">
      <h2 className="text-4xl font-bold mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto text-left">
        {/* Project Cards */}
        {[{
          title: 'Agri-Assist',
          desc: 'AI-powered platform offering personalized farming support, plant research, and agri-news.',
          role: 'Team Lead, Frontend Dev',
          tech: 'React, Node, MongoDB',
          link: 'https://github.com/shyamshyam018/AgriAssist'
        }, {
          title: 'Hands-Free Data Visualization',
          desc: 'Voice-controlled tool for data visuals using LLMs. Won 3rd prize at Hackfest ‘23.',
          role: 'Team Lead, Full Stack',
          tech: 'Python, Streamlit, Langchain',
          link: 'https://github.com/shyamshyam018/voice_data_visualisation'
        }, {
          title: 'BITLearn',
          desc: 'Notes sharing platform with rewards and mentorship for BIT students.',
          role: 'Frontend Dev',
          tech: 'React, Node.js, MongoDB',
          link: 'https://github.com/shyamshyam018/BitLearn-Notes-Sharing-App'
        }, {
          title: 'Campus Management Portal',
          desc: 'Efficient task and workforce manager for institutions.',
          role: 'Full Stack',
          tech: 'Django, SQLite, Bootstrap',
          link: 'https://github.com/shyamshyam018/FullStack'
        }].map((p, i) => (
          <div key={i} className="bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition-all">
            <h3 className="text-xl font-bold text-blue-400 mb-2">{p.title}</h3>
            <p className="text-gray-300 mb-2">{p.desc}</p>
            <p className="text-sm text-gray-400 mb-1">Role: {p.role} | Tech: {p.tech}</p>
            <a href={p.link} target="_blank" className="text-blue-500 underline">View on GitHub</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;