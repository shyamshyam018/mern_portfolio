// src/App.js
import React from 'react';
import './App.css';

function NavBar() {
  return (
    <nav className="navbar">
      <h1>My Portfolio</h1>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

function Home() {
  return (
    <div className="home">
      <h2>Welcome to My Portfolio</h2>
      <p>This is a simple React application showcasing my projects and skills.</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <Home />
      </header>
    </div>
  );
}

export default App;
