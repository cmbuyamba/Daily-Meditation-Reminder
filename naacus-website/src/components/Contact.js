import React, { useState } from 'react';
import { 
  makeStyles,
  shorthands,
  tokens,
  Text,
  Input,
  Textarea,
  Button,
  Field
} from '@fluentui/react-components';

const useStyles = makeStyles({
  contact: {
    backgroundColor: tokens.colorNeutralBackground1,
    ...shorthands.padding('80px', '20px'),
  },
  contactTitle: {
    fontSize: '2.5rem',
    textAlign: 'center',
    marginBottom: '60px',
    color: tokens.colorBrandBackground,
    fontWeight: '700',
  },
  contactContent: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    ...shorthands.gap('60px'),
    maxWidth: '1000px',
    ...shorthands.margin('0', 'auto'),
    '@media (max-width: 768px)': {
      gridTemplateColumns: '1fr',
      ...shorthands.gap('40px'),
    },
  },
  contactInfoTitle: {
    fontSize: '2rem',
    marginBottom: '20px',
    color: tokens.colorBrandBackground,
    fontWeight: '600',
  },
  contactInfoText: {
    fontSize: '1.1rem',
    color: tokens.colorNeutralForeground2,
    lineHeight: '1.8',
    marginBottom: '40px',
  },
  contactDetails: {
    display: 'flex',
    flexDirection: 'column',
    ...shorthands.gap('25px'),
  },
  contactItem: {
    display: 'flex',
    alignItems: 'center',
    ...shorthands.gap('20px'),
  },
  contactIcon: {
    fontSize: '2rem',
  },
  contactItemTitle: {
    fontSize: '1.1rem',
    fontWeight: '600',
    color: tokens.colorNeutralForeground1,
    marginBottom: '5px',
    display: 'block',
  },
  contactItemText: {
    fontSize: '1rem',
    color: tokens.colorNeutralForeground2,
    display: 'block',
  },
  formContainer: {
    backgroundColor: tokens.colorNeutralBackground1,
  },
  formNote: {
    fontSize: '0.85rem',
    color: tokens.colorNeutralForeground3,
    marginTop: '20px',
    fontStyle: 'italic',
  },
});

function Contact() {
  const styles = useStyles();
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
    <section id="contact" className={styles.contact}>
      <Text as="h2" className={styles.contactTitle}>Get In Touch</Text>
      <div className={styles.contactContent}>
        <div>
          <Text as="h3" className={styles.contactInfoTitle}>Connect With Us</Text>
          <Text as="p" className={styles.contactInfoText}>
            Have questions about NAACUS or our programs? Interested in joining our community? 
            We'd love to hear from you!
          </Text>
          <div className={styles.contactDetails}>
            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>📧</div>
              <div>
                <Text className={styles.contactItemTitle}>Email</Text>
                <Text className={styles.contactItemText}>info@naacus.org</Text>
              </div>
            </div>
            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>🤝</div>
              <div>
                <Text className={styles.contactItemTitle}>Join Us</Text>
                <Text className={styles.contactItemText}>Become a member or volunteer</Text>
              </div>
            </div>
            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>🌐</div>
              <div>
                <Text className={styles.contactItemTitle}>Community</Text>
                <Text className={styles.contactItemText}>Connect with African Catholics nationwide</Text>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.formContainer}>
          <form onSubmit={handleSubmit}>
            <Field label="Name *" required>
              <Input
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your full name"
              />
            </Field>
            <Field label="Email *" required style={{ marginTop: '20px' }}>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
            </Field>
            <Field label="Parish/Organization (Optional)" style={{ marginTop: '20px' }}>
              <Input
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                placeholder="Your parish or organization"
              />
            </Field>
            <Field label="Message *" required style={{ marginTop: '20px' }}>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Tell us how we can help..."
              />
            </Field>
            <Button 
              appearance="primary" 
              type="submit" 
              size="large"
              style={{ marginTop: '20px' }}
            >
              Send Message
            </Button>
          </form>
          <Text as="p" className={styles.formNote}>
            * Microsoft 365 integration ready - form submissions will be processed through secure Microsoft services
          </Text>
        </div>
      </div>
    </section>
  );
}

export default Contact;
