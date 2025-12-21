import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
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
    backgroundColor: '#faf9f8',
    ...shorthands.padding('50px', '20px'),
  },
  contactTitle: {
    fontSize: '2.75rem',
    textAlign: 'center',
    marginBottom: '40px',
    color: tokens.colorNeutralForeground1,
    fontWeight: '600',
    display: 'block',
    letterSpacing: '-0.02em',
    '@media (max-width: 768px)': {
      fontSize: '2rem',
      marginBottom: '32px',
    },
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
    fontSize: '1.875rem',
    marginBottom: '16px',
    color: tokens.colorNeutralForeground1,
    fontWeight: '600',
    display: 'block',
    '@media (max-width: 768px)': {
      fontSize: '1.5rem',
    },
  },
  contactInfoText: {
    fontSize: '1rem',
    color: tokens.colorNeutralForeground2,
    lineHeight: '1.6',
    marginBottom: '32px',
    display: 'block',
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
    '@media (max-width: 768px)': {
      fontSize: '1rem',
    },
  },
  contactItemText: {
    fontSize: '1rem',
    color: tokens.colorNeutralForeground2,
    display: 'block',
    '@media (max-width: 768px)': {
      fontSize: '0.9rem',
    },
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
  const { t } = useTranslation();
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
      <Text as="h2" className={styles.contactTitle}>{t('contact.title')}</Text>
      <div className={styles.contactContent}>
        <div>
          <Text as="h3" className={styles.contactInfoTitle}>{t('contact.connectWithUs')}</Text>
          <Text as="p" className={styles.contactInfoText}>
            {t('contact.description')}
          </Text>
          <div className={styles.contactDetails}>
            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>📧</div>
              <div>
                <Text className={styles.contactItemTitle}>{t('contact.emailLabel')}</Text>
                <Text className={styles.contactItemText}>{t('contact.emailValue')}</Text>
              </div>
            </div>
            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>🤝</div>
              <div>
                <Text className={styles.contactItemTitle}>{t('contact.joinUsLabel')}</Text>
                <Text className={styles.contactItemText}>{t('contact.joinUsValue')}</Text>
              </div>
            </div>
            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>🌐</div>
              <div>
                <Text className={styles.contactItemTitle}>{t('contact.communityLabel')}</Text>
                <Text className={styles.contactItemText}>{t('contact.communityValue')}</Text>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.formContainer}>
          <form onSubmit={handleSubmit}>
            <Field label={t('contact.nameLabel')} required>
              <Input
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder={t('contact.namePlaceholder')}
              />
            </Field>
            <Field label={t('contact.emailFieldLabel')} required style={{ marginTop: '20px' }}>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder={t('contact.emailPlaceholder')}
              />
            </Field>
            <Field label={t('contact.parishLabel')} style={{ marginTop: '20px' }}>
              <Input
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                placeholder={t('contact.parishPlaceholder')}
              />
            </Field>
            <Field label={t('contact.messageLabel')} required style={{ marginTop: '20px' }}>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder={t('contact.messagePlaceholder')}
              />
            </Field>
            <Button 
              appearance="primary" 
              type="submit" 
              size="large"
              style={{ marginTop: '20px' }}
            >
              {t('contact.sendButton')}
            </Button>
          </form>
          <Text as="p" className={styles.formNote}>
            {t('contact.formNote')}
          </Text>
        </div>
      </div>
    </section>
  );
}

export default Contact;
