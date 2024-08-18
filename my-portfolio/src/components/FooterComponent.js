import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Fetch the current year

  return (
    <footer className="footer">
      <p>© Zachary Bricknell {currentYear}. All rights reserved.</p>
    </footer>
  );
};

export default Footer;