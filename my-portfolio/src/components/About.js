import React, { useEffect, useRef } from 'react';
import './About.css';
import profilePicture from '../assets/images/headshot.jpg';

const About = () => {
  const aboutSectionsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 1 } // Trigger when 10% of the element is in view
    );

    aboutSectionsRef.current.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      if (aboutSectionsRef.current) {
        aboutSectionsRef.current.forEach((section) => {
          if (section) {
            observer.unobserve(section);
          }
        });
      }
    };
  }, []);

  return (
    <section id="about" className="about-section">
      <div className="profile-section">
        <img src={profilePicture} alt="Zach's Profile" className="profile-picture" />
      </div>

      <div className="about-content">
        <div ref={(el) => (aboutSectionsRef.current[0] = el)} className="about-section-content hidden">
          <h2>About Me</h2>
          <p>
            I'm Zachary Bricknell, a passionate and driven software developer with a Bachelor of Science in Computer Science from Trent University, specializing in Software Engineering. Over the past year, I have honed my skills in both frontend and backend development through my work as a contractor with Iterayt, where I've been instrumental in delivering scalable and efficient software solutions.
          </p>
        </div>

        <div ref={(el) => (aboutSectionsRef.current[1] = el)} className="about-section-content hidden alternate">
          <h2>Expertise</h2>
          <p>
            My expertise spans across various programming languages and technologies, including C++, Python, JavaScript, and React, allowing me to build robust applications from the ground up. I thrive in agile environments, leveraging tools like Docker to enhance development velocity and ensure smooth deployment processes.
          </p>
        </div>

        <div ref={(el) => (aboutSectionsRef.current[2] = el)} className="about-section-content hidden">
          <h2>Projects</h2>
          <p>
            Beyond my professional experience, I have led several successful projects, such as developing a LiDAR noise reduction system that improved forestry management decisions, and creating a Discord bot to streamline student queries at Trent University.
          </p>
        </div>

        <div ref={(el) => (aboutSectionsRef.current[3] = el)} className="about-section-content hidden alternate">
          <h2>Vision</h2>
          <p>
            I'm constantly exploring new technologies and methodologies to push the boundaries of what's possible in software development. Whether it's collaborating with stakeholders, implementing design patterns, or diving into the latest frameworks, I'm committed to delivering high-quality solutions that make a meaningful impact. Let's build something amazing together!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
