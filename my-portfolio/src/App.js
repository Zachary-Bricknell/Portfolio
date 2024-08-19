import React, { useState } from 'react';
import { Link } from 'react-scroll';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/FooterComponent'; 
import './App.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="App">
      <nav className="navbar">
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <Link to="hero" smooth={true} duration={500} onClick={closeMenu}>Home</Link>
          <Link to="about" smooth={true} duration={500} onClick={closeMenu}>About</Link>
          <Link to="projects" smooth={true} duration={500} onClick={closeMenu}>Projects</Link>
          <Link to="experience" smooth={true} duration={500} onClick={closeMenu}>Experience</Link>
          <Link to="contact" smooth={true} duration={500} onClick={closeMenu}>Contact</Link>
        </div>
      </nav>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
