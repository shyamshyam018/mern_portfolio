import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Agri-Assist",
      desc: "AI-powered platform offering personalized farming support, plant research, and agri-news.",
      role: "Team Lead, Frontend Dev",
      tech: "React, Node, MongoDB",
      link: "https://github.com/shyamshyam018/AgriAssist"
    },
    {
      title: "Hands-Free Data Visualization",
      desc: "Voice-controlled tool for data visuals using LLMs. Won 3rd prize at Hackfest ‘23.",
      role: "Team Lead, Full Stack",
      tech: "Python, Streamlit, Langchain",
      link: "https://github.com/shyamshyam018/voice_data_visualisation"
    },
    {
      title: "BITLearn",
      desc: "Notes sharing platform with rewards and mentorship for BIT students.",
      role: "Frontend Dev",
      tech: "React, Node.js, MongoDB",
      link: "https://github.com/shyamshyam018/BitLearn-Notes-Sharing-App"
    },
    {
      title: "Campus Management Portal",
      desc: "Efficient task and workforce manager for institutions.",
      role: "Full Stack",
      tech: "Django, SQLite, Bootstrap",
      link: "https://github.com/shyamshyam018/FullStack"
    }
  ];

  return (
    <section
      id="projects"
      className="relative py-24 px-4 bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: "url('/cherry-blossom-bg.jpg')" }}
    >
      {/* Lanterns for symmetry */}
      <div className="absolute top-10 left-10 w-16 animate-float z-0 opacity-80">
        <img src="/lantern.png" alt="Lantern" />
      </div>
      <div className="absolute top-20 right-10 w-16 animate-float-reverse z-0 opacity-80">
        <img src="/lantern.png" alt="Lantern" />
      </div>

      {/* Falling petals animation */}
      {Array.from({ length: 10 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-6 h-6 bg-[url('/petals.png')] bg-contain bg-no-repeat animate-fall pointer-events-none"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${4 + Math.random() * 4}s`,
            animationDelay: `${Math.random() * 4}s`
          }}
        />
      ))}

      <h2 className="text-4xl md:text-5xl font-protest text-pink-700 mb-12 text-center drop-shadow-md z-10 relative">
        My Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto relative z-10">
        {projects.map((p, i) => (
          <div
            key={i}
            className="bg-white/80 border-2 border-pink-300 rounded-2xl p-6 shadow-lg hover:shadow-pink-500/40 transition-all transform hover:-translate-y-1 backdrop-blur"
          >
            <h3 className="text-2xl font-bold text-pink-700 mb-2">{p.title}</h3>
            <p className="text-gray-700 mb-3">{p.desc}</p>
            <p className="text-sm text-gray-600 mb-2">
              <span className="font-bold text-pink-600">Role:</span> {p.role}
              <br />
              <span className="font-bold text-pink-600">Tech:</span> {p.tech}
            </p>
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-pink-700 underline hover:text-pink-900 transition font-semibold"
            >
              🔗 View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
