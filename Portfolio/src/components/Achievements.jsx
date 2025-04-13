import React, { useEffect, useState } from "react";

const Achievements = () => {
  const [fireworks, setFireworks] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setFireworks((prev) => [
        ...prev,
        {
          id: Math.random(),
          top: `${Math.random() * 90}%`,
          left: `${Math.random() * 90}%`,
        },
      ]);
    }, 1000); // New firework every second

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="achievements"
      className="font-protest relative py-24 px-4 bg-gradient-to-br from-[#7c0a02] to-[#250202] text-white overflow-hidden"
    >
      {/* Fireworks */}
      {fireworks.map((fw) => (
        <div
          key={fw.id}
          className="absolute w-16 h-16 bg-[url('/fireworks.png')] bg-contain bg-no-repeat animate-spin-slow pointer-events-none"
          style={{
            top: fw.top,
            left: fw.left,
            opacity: 0.8,
            animationDuration: `${2 + Math.random() * 3}s`,
          }}
        />
      ))}

      {/* Heading */}
      <h2 className="text-5xl font-protest text-yellow-400 text-center mb-16 drop-shadow-[0_0_20px_gold] z-10 relative">
        🏮 Achievements 🏮
      </h2>

      {/* Achievements */}
      <div className="max-w-6xl mx-auto grid gap-12 md:grid-cols-2 lg:grid-cols-3 relative z-10">
        {[
          {
            title: "Hackfest ‘23 – 3rd Prize",
            desc: "Won ₹50,000 for building a hands-free data visualization & defect detection tool.",
            image: "/badge1.png",
          },
          {
            title: "Smart India Hackathon 2024",
            desc: "Shortlisted for finals with a job portal tailored for differently-abled users.",
            image: "/badge3.png",
          },
          {
            title: "BITSHACK 2023 – Finalist",
            desc: "Built an AI-powered academic platform using LLMs and contextual chat tools.",
            image: "/badge2.png",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="relative bg-gradient-to-br from-[#ffebbb] to-[#ffd700] text-red-900 border-2 border-yellow-600 rounded-3xl shadow-[0_0_25px_rgba(255,255,255,0.2)] overflow-hidden p-6 hover:scale-105 transition-transform duration-300"
          >
            {/* Festive Badge Image */}
            <img
              src={item.image}
              alt="badge"
              className="w-22 h-20 mx-auto mb-4 drop-shadow-xl"
            />

            <h4 className="font-protest text-xl font-bold mb-3 text-center  text-red-800">
              {item.title}
            </h4>
            <p className="text-center text-red-700">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
