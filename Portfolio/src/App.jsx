import React from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Experience from "./components/Experience.jsx";
import Achievements from "./components/Achievements.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="bg-gray-900 text-white scroll-smooth">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
