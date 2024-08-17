import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import './Hero.css';

import cloud1 from '../assets/images/cloud1.png';
import cloud2 from '../assets/images/cloud2.png';
import cloud3 from '../assets/images/cloud3.png';

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
      const startPosition = gsap.utils.random(-200, -100); // Start offscreen
      const verticalPosition = gsap.utils.random(0, 70); // Random vertical position
      const speed = gsap.utils.random(15, 40); // Speed between 15s and 40s

      cloud.style.width = `${cloudSize}px`;
      cloud.style.top = `${verticalPosition}%`;
      cloud.style.left = `${startPosition}px`;
      
      cloudContainerRef.current.appendChild(cloud);

      // Animate cloud
      gsap.to(cloud, {
        x: window.innerWidth + 200,
        duration: speed,
        ease: "linear",
        onComplete: () => {
          cloud.remove(); // Remove cloud after it moves offscreen
        }
      });
    };

    const interval = setInterval(spawnCloud, gsap.utils.random(2000, 5000)); // Spawn a cloud every 2-5 seconds

    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  return (
    <section className="hero">
      <div className="clouds" ref={cloudContainerRef}></div>
      <div className="hero-content">
        <h1>Hi, I am <span className="name-highlight">Zach</span>.</h1>
        <p>I am a Software Developer.</p>
      </div>
    </section>
  );
};

export default Hero;

