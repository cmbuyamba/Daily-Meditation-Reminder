import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Welcome to NACCUS</h1>
        <p className="hero-subtitle">
          Empowering Christian Unions Across College Campuses Nationwide
        </p>
        <p className="hero-description">
          Join us for NACCUS 2027 in Maryland as we strengthen our community, 
          share our faith, and build lasting connections.
        </p>
        <div className="hero-buttons">
          <a href="#conference" className="btn btn-primary">Learn About NACCUS 2027</a>
          <a href="#about" className="btn btn-secondary">Discover Our Mission</a>
        </div>
      </div>
      <div className="hero-graphic">
        <div className="graphic-circle circle-1"></div>
        <div className="graphic-circle circle-2"></div>
        <div className="graphic-circle circle-3"></div>
      </div>
    </section>
  );
}

export default Hero;
