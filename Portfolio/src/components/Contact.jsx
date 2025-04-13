import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="font-protest relative py-24 px-6 bg-gradient-to-b from-[#2c0d0d] to-black text-white text-center overflow-hidden"
    >
      {/* Floating lanterns or glowing orbs */}
      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          className="absolute w-12 h-12 bg-[url('/lantern.png')] bg-contain bg-no-repeat animate-float pointer-events-none opacity-70"
          style={{
            top: `${Math.random() * 90}%`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${6 + Math.random() * 3}s`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}

      {/* Heading */}
      <h2 className=" font-protest text-5xl font-semibold  text-yellow-300 mb-6 drop-shadow-[0_0_15px_gold]">
        📜 Let's Connect 📜
      </h2>

      <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
        I’m currently open to internships, freelance gigs, or full-time opportunities. Feel free to reach out and let’s create something impactful together!
      </p>

      {/* Contact Links */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-lg">
        <a
          href="mailto:shyamraj.it22@bitsathy.ac.in"
          className="hover:text-yellow-400 transition duration-300 underline underline-offset-4"
        >
          📧 shyamraj.it22@bitsathy.ac.in
        </a>
        <a
          href="https://www.linkedin.com/in/shyamrajd"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-yellow-400 transition duration-300 underline underline-offset-4"
        >
          🔗 LinkedIn
        </a>
        <a
          href="https://github.com/shyamshyam018"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-yellow-400 transition duration-300 underline underline-offset-4"
        >
          💻 GitHub
        </a>
      </div>
    </section>
  );
};

export default Contact;
