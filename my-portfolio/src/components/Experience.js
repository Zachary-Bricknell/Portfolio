import React, { useEffect, useRef } from 'react';
import './Experience.css';

const experiences = [
  {
    company: 'Iterayt',
    role: 'Contractor',
    duration: 'Jan 2023 - Present',
    description: `Delivered requested frontend UI features using React, iterated on scalable backend services using Python, Node.js, & C#, and enhanced development velocity by leveraging Docker for quick testing, deployment, and scaling services. Wrote comprehensive integration and unit tests, reducing potential production incidents.`,
  },
  {
    company: 'Trent University',
    role: 'Student Developer',
    duration: 'Apr 2022 - Dec 2022',
    description: `Led the development of a LiDAR noise reduction system, transforming raw point cloud data into precise tree taper models. Implemented noise reduction algorithms that significantly improved forestry management decisions.`,
  },
  // Add more experiences as needed
];

const Experience = () => {
  const experienceRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: .6 }
    );

    experienceRefs.current.forEach((experience) => {
      if (experience) {
        observer.observe(experience);
      }
    });

    return () => {
      experienceRefs.current.forEach((experience) => {
        if (experience) {
          observer.unobserve(experience);
        }
      });
    };
  }, []);

  return (
    <section className="experience">
      <h2>Experience</h2>
      <div className="experience-container">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="experience-card"
            ref={(el) => (experienceRefs.current[index] = el)}
          >
            <h3>{exp.company}</h3>
            <h4>{exp.role}</h4>
            <h4><strong>{exp.duration}</strong></h4>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
