import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // This will be integrated with Microsoft 365 services
    alert('Thank you for your interest! Form submission will be integrated with Microsoft 365 services.');
    console.log('Form data:', formData);
  };

  return (
    <section id="contact" className="contact">
      <h2>Get In Touch</h2>
      <div className="contact-content">
        <div className="contact-info">
          <h3>Connect With Us</h3>
          <p>
            Have questions about NACCUS or the 2027 conference? 
            We'd love to hear from you!
          </p>
          <div className="contact-details">
            <div className="contact-item">
              <div className="contact-icon">📧</div>
              <div>
                <h4>Email</h4>
                <p>info@naacus.org</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">📱</div>
              <div>
                <h4>Phone</h4>
                <p>Coming Soon</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">🌐</div>
              <div>
                <h4>Social Media</h4>
                <p>Follow us for updates</p>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-form-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your full name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="organization">College/Organization</label>
              <input
                type="text"
                id="organization"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                placeholder="Your college or organization"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Tell us how we can help..."
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
          <p className="form-note">
            * Microsoft 365 integration ready - form submissions will be processed through secure Microsoft services
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
