import React from 'react';
import './Projects.css';

const projects = [
  {
    title: 'Project 1',
    description: 'A brief description of your project.',
    technologies: ['React', 'Node.js', 'Express'],
    link: 'https://github.com/yourusername/project1',
  },
  {
    title: 'Project 2',
    description: 'A brief description of your project.',
    technologies: ['Python', 'Flask', 'PostgreSQL'],
    link: 'https://github.com/yourusername/project2',
  },
  // Add more projects as needed
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
