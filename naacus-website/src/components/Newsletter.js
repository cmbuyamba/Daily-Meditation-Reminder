import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  makeStyles,
  shorthands,
  tokens,
  Text,
  Input,
  Button
} from '@fluentui/react-components';
import { Mail24Regular, Checkmark24Regular } from '@fluentui/react-icons';

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
  badge: {
    display: 'inline-block',
    backgroundColor: '#28a745',
    color: tokens.colorNeutralForegroundInverted,
    ...shorthands.padding('8px', '20px'),
    ...shorthands.borderRadius('20px'),
    fontSize: '0.95rem',
    fontWeight: '600',
    marginBottom: '24px',
  },
  subtitle: {
    fontSize: '1.25rem',
    marginBottom: '16px',
    lineHeight: '1.6',
    color: tokens.colorNeutralForegroundInverted,
    opacity: 0.95,
    display: 'block',
    fontWeight: '500',
  },
  description: {
    fontSize: '1.05rem',
    marginBottom: '32px',
    lineHeight: '1.6',
    color: tokens.colorNeutralForegroundInverted,
    opacity: 0.9,
    display: 'block',
  },
  benefitsHighlight: {
    display: 'flex',
    justifyContent: 'center',
    ...shorthands.gap('32px'),
    flexWrap: 'wrap',
    marginBottom: '32px',
    ...shorthands.padding('24px', '0'),
  },
  benefitItem: {
    display: 'flex',
    alignItems: 'center',
    ...shorthands.gap('10px'),
    color: tokens.colorNeutralForegroundInverted,
    fontSize: '1rem',
    fontWeight: '500',
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
  const { t } = useTranslation();
  const styles = useStyles();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // This will be integrated with email service
    console.log('Membership signup:', { name, email });
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail('');
      setName('');
    }, 5000);
  };

  return (
    <section id="newsletter" className={styles.newsletter}>
      <div className={styles.content}>
        <div className={styles.iconWrapper}>
          <Mail24Regular />
        </div>
        <div className={styles.badge}>{t('newsletter.badge')}</div>
        <Text as="h2" className={styles.title}>{t('newsletter.title')}</Text>
        <Text as="p" className={styles.subtitle}>
          {t('newsletter.subtitle')}
        </Text>
        <Text as="p" className={styles.description}>
          {t('newsletter.description')}
        </Text>
        
        <div className={styles.benefitsHighlight}>
          <span className={styles.benefitItem}>
            <Checkmark24Regular /> {t('newsletter.benefit1')}
          </span>
          <span className={styles.benefitItem}>
            <Checkmark24Regular /> {t('newsletter.benefit2')}
          </span>
          <span className={styles.benefitItem}>
            <Checkmark24Regular /> {t('newsletter.benefit3')}
          </span>
        </div>

        <div className={styles.formContainer}>
          {!submitted ? (
            <form onSubmit={handleSubmit}>
              <div className={styles.inputGroup}>
                <Input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t('newsletter.namePlaceholder')}
                  required
                  className={styles.input}
                  size="large"
                  style={{
                    backgroundColor: tokens.colorNeutralForegroundInverted,
                    marginBottom: '12px',
                  }}
                />
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t('newsletter.emailPlaceholder')}
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
                  style={{
                    fontSize: '1.1rem',
                    padding: '20px 40px',
                    height: 'auto',
                    fontWeight: '600',
                  }}
                >
                  {t('newsletter.submitButton')}
                </Button>
              </div>
            </form>
          ) : (
            <div style={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              padding: '32px',
              borderRadius: '12px',
            }}>
              <Text style={{ 
                fontSize: '1.5rem', 
                fontWeight: '600',
                color: tokens.colorNeutralForegroundInverted,
                display: 'block',
                marginBottom: '12px',
              }}>
                ✓ {t('newsletter.successTitle')}
              </Text>
              <Text style={{
                fontSize: '1.1rem',
                color: tokens.colorNeutralForegroundInverted,
                display: 'block',
              }}>
                {t('newsletter.successMessage')}
              </Text>
            </div>
          )}
          <Text as="p" className={styles.privacyNote}>
            {t('newsletter.privacyNote')}
          </Text>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
