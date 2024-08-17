import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact">
      <h2>Contact</h2>
      <p>Feel free to reach out to me on any of my social media platforms, or send me an email directly.</p>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default Contact;
