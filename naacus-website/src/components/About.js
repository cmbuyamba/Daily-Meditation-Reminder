import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" className="about">
      <h2>About NACCUS</h2>
      <div className="about-content">
        <div className="about-text">
          <p className="about-intro">
            The National Association of Colleges and Christian Unions (NACCUS) is dedicated 
            to supporting and strengthening Christian communities across college campuses 
            throughout the United States.
          </p>
          <div className="mission-values">
            <div className="mission-item">
              <div className="icon">🎯</div>
              <h3>Our Mission</h3>
              <p>
                To empower Christian students and campus ministries through resources, 
                networking, and spiritual development opportunities.
              </p>
            </div>
            <div className="mission-item">
              <div className="icon">💡</div>
              <h3>Our Vision</h3>
              <p>
                A thriving network of Christian unions that transforms campus cultures 
                and equips students to live out their faith.
              </p>
            </div>
            <div className="mission-item">
              <div className="icon">🤝</div>
              <h3>Our Values</h3>
              <p>
                Unity, excellence, authenticity, and service guide everything we do 
                as we serve campus ministries nationwide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
