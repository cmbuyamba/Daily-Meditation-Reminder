import React, { useState } from 'react';
import { 
  makeStyles,
  shorthands,
  tokens,
  Text,
  Input,
  Button
} from '@fluentui/react-components';
import { Mail24Regular } from '@fluentui/react-icons';

const useStyles = makeStyles({
  newsletter: {
    background: `linear-gradient(135deg, ${tokens.colorBrandBackground} 0%, #005a9e 100%)`,
    color: tokens.colorNeutralForegroundInverted,
    ...shorthands.padding('50px', '20px'),
  },
  content: {
    maxWidth: '800px',
    ...shorthands.margin('0', 'auto'),
    textAlign: 'center',
  },
  iconWrapper: {
    fontSize: '4rem',
    marginBottom: '20px',
    color: tokens.colorNeutralForegroundInverted,
  },
  title: {
    fontSize: '2.75rem',
    marginBottom: '16px',
    fontWeight: '600',
    color: tokens.colorNeutralForegroundInverted,
    display: 'block',
    letterSpacing: '-0.02em',
  },
  subtitle: {
    fontSize: '1.125rem',
    marginBottom: '32px',
    lineHeight: '1.6',
    color: tokens.colorNeutralForegroundInverted,
    opacity: 0.95,
    display: 'block',
  },
  formContainer: {
    maxWidth: '500px',
    ...shorthands.margin('0', 'auto'),
  },
  inputGroup: {
    display: 'flex',
    ...shorthands.gap('15px'),
    flexDirection: 'row',
    '@media (max-width: 768px)': {
      flexDirection: 'column',
    },
  },
  input: {
    flex: 1,
  },
  subscribeButton: {
    backgroundColor: tokens.colorNeutralForegroundInverted,
    color: tokens.colorBrandBackground,
    '&:hover': {
      backgroundColor: '#f0f7ff',
    },
  },
  privacyNote: {
    fontSize: '0.9rem',
    marginTop: '20px',
    color: tokens.colorNeutralForegroundInverted,
    opacity: 0.85,
    fontStyle: 'italic',
  },
});

function Newsletter() {
  const styles = useStyles();
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // This will be integrated with email service
    console.log('Newsletter subscription:', email);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail('');
    }, 3000);
  };

  return (
    <section id="newsletter" className={styles.newsletter}>
      <div className={styles.content}>
        <div className={styles.iconWrapper}>
          <Mail24Regular />
        </div>
        <Text as="h2" className={styles.title}>Stay Connected</Text>
        <Text as="p" className={styles.subtitle}>
          Subscribe to our newsletter for regular updates on NAACUS activities, events, 
          news, spiritual reflections, and inspiring stories from the African Catholic community.
        </Text>
        <div className={styles.formContainer}>
          {!submitted ? (
            <form onSubmit={handleSubmit}>
              <div className={styles.inputGroup}>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className={styles.input}
                  size="large"
                  style={{
                    backgroundColor: tokens.colorNeutralForegroundInverted,
                  }}
                />
                <Button 
                  appearance="primary"
                  type="submit"
                  size="large"
                  className={styles.subscribeButton}
                >
                  Subscribe
                </Button>
              </div>
            </form>
          ) : (
            <Text style={{ 
              fontSize: '1.2rem', 
              fontWeight: '600',
              color: tokens.colorNeutralForegroundInverted 
            }}>
              ✓ Thank you for subscribing!
            </Text>
          )}
          <Text as="p" className={styles.privacyNote}>
            We respect your privacy. Your email will only be used for NAACUS communications.
          </Text>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
