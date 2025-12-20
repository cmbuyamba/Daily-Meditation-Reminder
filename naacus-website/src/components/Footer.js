import React from 'react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>NACCUS</h3>
          <p>National Association of Colleges and Christian Unions</p>
          <p className="footer-tagline">
            Empowering Christian communities on college campuses nationwide.
          </p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#conference">Conference 2027</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Connect</h4>
          <ul>
            <li><a href="mailto:info@naacus.org">Email Us</a></li>
            <li><a href="#contact">Get Updates</a></li>
            <li><a href="#conference">Register Interest</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>NACCUS 2027</h4>
          <p>Join us in Maryland</p>
          <p>Summer 2027</p>
          <a href="#conference" className="footer-cta">Learn More →</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {currentYear} NACCUS. All rights reserved.</p>
        <p className="ms-integration">Microsoft 365 Integration Ready</p>
      </div>
    </footer>
  );
}

export default Footer;
