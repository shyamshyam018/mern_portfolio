import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-gray-800 text-white text-center">
      <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
      <p className="text-gray-300 text-lg mb-4">
        I'm currently open to internships, freelance gigs, or full-time roles. Feel free to reach out!
      </p>
      <div className="flex justify-center space-x-6 text-lg mt-4">
        <a href="mailto:shyamraj.it22@bitsathy.ac.in" className="hover:text-blue-400">📧 shyamraj.it22@bitsathy.ac.in</a>
        <a href="https://www.linkedin.com/in/shyamrajd" className="hover:text-blue-400" target="_blank">🔗 LinkedIn</a>
        <a href="https://github.com/shyamshyam018" className="hover:text-blue-400" target="_blank">💻 GitHub</a>
      </div>
    </section>
  );
};

export default Contact;