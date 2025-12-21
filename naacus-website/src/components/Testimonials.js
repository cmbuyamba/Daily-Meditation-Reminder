import React from 'react';
import { useTranslation } from 'react-i18next';
import { 
  makeStyles,
  shorthands,
  tokens,
  Text,
  Card
} from '@fluentui/react-components';

const useStyles = makeStyles({
  testimonials: {
    backgroundColor: '#f8f9fa',
    ...shorthands.padding('60px', '20px'),
  },
  testimonialsTitle: {
    fontSize: '2.75rem',
    textAlign: 'center',
    marginBottom: '16px',
    color: tokens.colorNeutralForeground1,
    fontWeight: '600',
    display: 'block',
    letterSpacing: '-0.02em',
  },
  testimonialsSubtitle: {
    fontSize: '1.25rem',
    textAlign: 'center',
    marginBottom: '48px',
    color: tokens.colorNeutralForeground2,
    display: 'block',
    maxWidth: '700px',
    margin: '0 auto 48px',
  },
  testimonialsContent: {
    maxWidth: '1200px',
    ...shorthands.margin('0', 'auto'),
  },
  testimonialsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    ...shorthands.gap('32px'),
  },
  testimonialCard: {
    ...shorthands.padding('32px'),
    backgroundColor: tokens.colorNeutralBackground1,
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
    ...shorthands.borderRadius('12px'),
    ...shorthands.transition('all', '0.3s', 'ease'),
    position: 'relative',
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.12)',
    },
  },
  quoteIcon: {
    fontSize: '3rem',
    color: tokens.colorBrandBackground,
    opacity: 0.2,
    position: 'absolute',
    top: '20px',
    right: '24px',
  },
  testimonialText: {
    fontSize: '1.125rem',
    lineHeight: '1.7',
    color: tokens.colorNeutralForeground1,
    marginBottom: '24px',
    fontStyle: 'italic',
    display: 'block',
  },
  authorSection: {
    display: 'flex',
    alignItems: 'center',
    ...shorthands.gap('16px'),
    ...shorthands.borderTop('2px', 'solid', '#e0e0e0'),
    paddingTop: '20px',
  },
  authorAvatar: {
    width: '50px',
    height: '50px',
    ...shorthands.borderRadius('50%'),
    backgroundColor: tokens.colorBrandBackground,
    color: tokens.colorNeutralForegroundInverted,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.5rem',
    fontWeight: '600',
  },
  authorInfo: {
    flex: 1,
  },
  authorName: {
    fontSize: '1.125rem',
    fontWeight: '600',
    color: tokens.colorNeutralForeground1,
    display: 'block',
    marginBottom: '4px',
  },
  authorLocation: {
    fontSize: '0.95rem',
    color: tokens.colorNeutralForeground2,
    display: 'block',
  },
});

function Testimonials() {
  const { t } = useTranslation();
  const styles = useStyles();

  const testimonials = [
    {
      text: t('testimonials.testimonial1.text'),
      author: t('testimonials.testimonial1.author'),
      location: t('testimonials.testimonial1.location'),
      initial: 'M'
    },
    {
      text: t('testimonials.testimonial2.text'),
      author: t('testimonials.testimonial2.author'),
      location: t('testimonials.testimonial2.location'),
      initial: 'J'
    },
    {
      text: t('testimonials.testimonial3.text'),
      author: t('testimonials.testimonial3.author'),
      location: t('testimonials.testimonial3.location'),
      initial: 'A'
    }
  ];

  return (
    <section id="testimonials" className={styles.testimonials}>
      <div className={styles.testimonialsContent}>
        <Text as="h2" className={styles.testimonialsTitle}>
          {t('testimonials.title')}
        </Text>
        <Text as="p" className={styles.testimonialsSubtitle}>
          {t('testimonials.subtitle')}
        </Text>

        <div className={styles.testimonialsGrid}>
          {testimonials.map((testimonial, index) => (
            <Card key={index} className={styles.testimonialCard}>
              <div className={styles.quoteIcon}>"</div>
              <Text className={styles.testimonialText}>
                {testimonial.text}
              </Text>
              <div className={styles.authorSection}>
                <div className={styles.authorAvatar}>
                  {testimonial.initial}
                </div>
                <div className={styles.authorInfo}>
                  <Text className={styles.authorName}>{testimonial.author}</Text>
                  <Text className={styles.authorLocation}>{testimonial.location}</Text>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
