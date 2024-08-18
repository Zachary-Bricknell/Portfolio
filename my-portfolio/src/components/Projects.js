import React from 'react';
import './Projects.css';

const projects = [
  {
    title: 'LiDAR Noise Reducer',
    description: `Developed a comprehensive LiDAR noise reduction system to process raw scans of Red Pine trees for the Ministry of Natural Resources and Forestry (MNRF). 
    This involved creating custom algorithms to filter out noise and enhance the clarity of the data, which was crucial for improving forestry management decisions. 
    The project utilized Python for processing and analysis, with a robust frontend built using React and PyQt to visualize the results. The project resulted in 
    an overall success, highlighting the potential for technology to reduce the need for destructive sampling of Trees.`,
    technologies: ['Python', 'JavaScript', 'SQL', 'Beautiful Soup', 'Selenium'],
    link: 'https://github.com/Zachary-Bricknell/Project_Pinecone',
  },
  {
    title: 'TrentUBuddy Discord Bot',
    description: `Designed and implemented a Discord bot named TrentUBuddy to streamline and automate the process of answering student queries at Trent University. 
    The bot was capable of scraping relevant information from the university's website and providing immediate, accurate responses to students. 
    Over 100 students participated in a beta test, leading to refinements that significantly improved the bot’s functionality. 
    This project was built with Python, leveraging libraries such as Beautiful Soup and Selenium for data scraping and processing.`,
    technologies: ['Python', 'JavaScript', 'SQL', 'Beautiful Soup', 'Selenium'],
    link: 'https://github.com/Zachary-Bricknell/TrentUBuddy',
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
