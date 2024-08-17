import React from 'react';
import './Projects.css';

const projects = [
  {
    title: 'LiDAR Noise Reducer',
    description: 'LiDAR Noise reduction in raw scans of Red Pine trees for the MNRF.',
    technologies: ['React', 'Node.js', 'Express'],
    link: 'https://github.com/yourusername/project1',
  },
  {
    title: 'LiDAR Noise Reducer',
    description: 'LiDAR Noise reduction in raw scans of Red Pine trees for the MNRF.',
    technologies: ['React', 'Node.js', 'Express'],
    link: 'https://github.com/yourusername/project1',
  },
];

const Projects = () => {
  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p><strong>Technologies:</strong> {project.technologies.join(', ')}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
