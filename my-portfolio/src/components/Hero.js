import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ReactTyped } from 'react-typed'; // Updated import
import './Hero.css';

import cloud1 from '../assets/images/cloud1.png';
import cloud2 from '../assets/images/cloud2.png';
import cloud3 from '../assets/images/cloud3.png';
import gcloud from '../assets/images/gcloud_2.png'; // Import your image

const cloudImages = [cloud1, cloud2, cloud3];

const preloadImages = (imageArray) => {
  imageArray.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
};

const Hero = () => {
  const cloudContainerRef = useRef(null);

  useEffect(() => {
    preloadImages(cloudImages); // Preload all cloud images

    const spawnCloud = () => {
      if (cloudContainerRef.current.children.length > 10) return; // Limit to 10 clouds at once

      const cloud = document.createElement("img");
      const randomCloud = cloudImages[Math.floor(Math.random() * cloudImages.length)];
      cloud.src = randomCloud;
      cloud.className = "cloud";

      // Randomize cloud properties
      const cloudSize = gsap.utils.random(150, 300); // Size between 150px and 300px
      const startPositionX = gsap.utils.random(0, window.innerWidth - cloudSize); // Random horizontal position within the viewport
      const startPositionY = gsap.utils.random(0, window.innerHeight - cloudSize); // Random vertical position within the viewport
      const moveRight = Math.random() > 0.5; // Randomly choose direction: true for right, false for left
      const endPositionX = moveRight ? window.innerWidth + 200 : -200; // Move off-screen left or right
      const duration = gsap.utils.random(10, 20); // Duration between 10s and 20s

      cloud.style.width = `${cloudSize}px`;
      cloud.style.left = `${startPositionX}px`;
      cloud.style.top = `${startPositionY}px`;
      cloud.style.opacity = 0; // Start with 0% opacity

      cloudContainerRef.current.appendChild(cloud);

      // Animate cloud
      gsap.to(cloud, {
        x: endPositionX, // Move either right or left
        duration: duration, // Move duration
        ease: "linear",
      });

      gsap.to(cloud, {
        opacity: 0.7, // Fade in to 70%
        duration: 2, // 2 seconds for fade-in
        onComplete: () => {
          gsap.to(cloud, {
            opacity: 0, // Fade out to 0% opacity
            duration: 2, // 2 seconds for fade-out
            delay: duration - 4, // Ensure it starts fading out before it completes its movement
            onComplete: () => {
              cloud.remove(); // Remove cloud after fade-out
            }
          });
        }
      });
    };

    const interval = setInterval(spawnCloud, gsap.utils.random(2000, 5000)); // Spawn a cloud every 2-5 seconds

    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  return (
    <div className="hero">
      <div className="clouds" ref={cloudContainerRef}></div>
      <div  className="hero-content" style={{ backgroundImage: `url(${gcloud})`, backgroundSize: 'cover' }}>
        <h1>Hi, I am <span className="name-highlight">Zach</span>.</h1>
        <p>
          <span>I am a</span>
          <span className="typed-text-container">
            <ReactTyped
              strings={[
                " Software Developer.",
                " Backend Developer.",
                " Full-Stack Developer.",
              ]}
              typeSpeed={40}
              backSpeed={50}
              loop
            />
          </span>
        </p>
      </div>
    </div>
  );
};

export default Hero;

