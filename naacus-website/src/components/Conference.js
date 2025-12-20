import React from 'react';
import './Conference.css';

function Conference() {
  return (
    <section id="conference" className="conference">
      <h2>NACCUS 2027 Conference</h2>
      <div className="conference-banner">
        <div className="banner-content">
          <h3>Join Us in Maryland!</h3>
          <p className="conference-date">Summer 2027</p>
        </div>
      </div>
      <div className="conference-content">
        <div className="conference-details">
          <div className="detail-card">
            <div className="card-icon">📍</div>
            <h4>Location</h4>
            <p>Maryland</p>
            <p className="detail-subtext">Specific venue to be announced</p>
          </div>
          <div className="detail-card">
            <div className="card-icon">📅</div>
            <h4>When</h4>
            <p>Summer 2027</p>
            <p className="detail-subtext">Exact dates coming soon</p>
          </div>
          <div className="detail-card">
            <div className="card-icon">✨</div>
            <h4>What to Expect</h4>
            <p>Workshops, Networking</p>
            <p className="detail-subtext">Spiritual growth & fellowship</p>
          </div>
        </div>
        <div className="conference-description">
          <h3>A Transformative Experience</h3>
          <p>
            NACCUS 2027 will bring together Christian student leaders, campus ministry 
            staff, and supporters from across the nation for an unforgettable experience 
            of worship, learning, and community building.
          </p>
          <div className="conference-highlights">
            <div className="highlight">
              <span className="checkmark">✓</span>
              <span>Inspiring keynote speakers and worship sessions</span>
            </div>
            <div className="highlight">
              <span className="checkmark">✓</span>
              <span>Practical workshops for campus ministry leadership</span>
            </div>
            <div className="highlight">
              <span className="checkmark">✓</span>
              <span>Networking opportunities with peers nationwide</span>
            </div>
            <div className="highlight">
              <span className="checkmark">✓</span>
              <span>Resources and tools for effective ministry</span>
            </div>
          </div>
          <div className="cta-section">
            <p className="cta-text">Stay tuned for registration details!</p>
            <a href="#contact" className="btn btn-primary">Get Updates</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Conference;
