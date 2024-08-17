import React from 'react';
import { Link } from 'react-scroll';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import SocialMediaSidebar from './components/SocialMediaSidebar';
import Footer from './components/FooterComponent'; 
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <Link to="about" smooth={true} duration={500}>About</Link>
        <Link to="projects" smooth={true} duration={500}>Projects</Link>
        <Link to="experience" smooth={true} duration={500}>Experience</Link>
        <Link to="contact" smooth={true} duration={500}>Contact</Link>
      </nav>
      <SocialMediaSidebar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
