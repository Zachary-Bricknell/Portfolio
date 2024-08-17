import React from 'react';
import './Experience.css';

const experiences = [
  {
    company: 'Company 1',
    role: 'Software Engineer',
    duration: 'Jan 2020 - Present',
    description: 'Worked on developing and maintaining web applications using React and Node.js.',
  },
  {
    company: 'Company 2',
    role: 'Frontend Developer',
    duration: 'Jun 2018 - Dec 2019',
    description: 'Focused on building responsive UI components using React and Redux.',
  },
  // Add more experiences as needed
];

const Experience = () => {
  return (
    <section className="experience">
      <h2>Experience</h2>
      <div className="experience-container">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card">
            <h3>{exp.company}</h3>
            <h4>{exp.role}</h4>
            <p><strong>{exp.duration}</strong></p>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
