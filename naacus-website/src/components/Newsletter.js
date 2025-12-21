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
    ...shorthands.padding('70px', '20px'),
  },
  content: {
    maxWidth: '960px',
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
    boxShadow: '0 10px 30px rgba(0,0,0,0.14)',
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
    ...shorthands.gap('28px'),
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
    maxWidth: '900px',
    ...shorthands.margin('0', 'auto'),
  },
  inputGroup: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr auto',
    alignItems: 'stretch',
    ...shorthands.gap('12px'),
    '@media (max-width: 900px)': {
      gridTemplateColumns: '1fr',
    },
  },
  input: {
    flex: 1,
    backgroundColor: '#f9fbff',
    border: '1px solid #d7e3f4',
    ...shorthands.borderRadius('12px'),
    ...shorthands.padding('14px', '16px'),
    boxShadow: '0 8px 30px rgba(0,0,0,0.08)',
    color: tokens.colorNeutralForeground1,
  },
  subscribeButton: {
    backgroundColor: '#28a745',
    color: tokens.colorNeutralForegroundInverted,
    fontSize: '1.05rem',
    fontWeight: '700',
    ...shorthands.padding('16px', '28px'),
    ...shorthands.borderRadius('12px'),
    height: '100%',
    minWidth: '160px',
    boxShadow: '0 12px 30px rgba(0,0,0,0.18)',
    '&:hover': {
      backgroundColor: '#23963d',
      boxShadow: '0 14px 36px rgba(0,0,0,0.2)',
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
                />
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t('newsletter.emailPlaceholder')}
                  required
                  className={styles.input}
                  size="large"
                />
                <Button 
                  appearance="primary"
                  type="submit"
                  size="large"
                  className={styles.subscribeButton}
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
