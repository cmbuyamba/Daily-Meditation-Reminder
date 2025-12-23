import React from 'react';
import { useTranslation } from 'react-i18next';
import { 
  makeStyles,
  shorthands,
  tokens,
  Text,
  Card
} from '@fluentui/react-components';
import { dataService } from '../services/dataService';
import {
  People24Regular,
  Calendar24Regular,
  BookOpen24Regular,
  Heart24Regular,
  Globe24Regular,
  Star24Regular
} from '@fluentui/react-icons';

const useStyles = makeStyles({
  benefits: {
    backgroundColor: '#ffffff',
    ...shorthands.padding('60px', '20px'),
  },
  benefitsTitle: {
    fontSize: '2.75rem',
    textAlign: 'center',
    marginBottom: '16px',
    color: tokens.colorNeutralForeground1,
    fontWeight: '600',
    display: 'block',
    letterSpacing: '-0.02em',
    '@media (max-width: 768px)': {
      fontSize: '2rem',
    },
  },
  benefitsSubtitle: {
    fontSize: '1.25rem',
    textAlign: 'center',
    marginBottom: '48px',
    color: tokens.colorNeutralForeground2,
    display: 'block',
    maxWidth: '700px',
    margin: '0 auto 48px',
    '@media (max-width: 768px)': {
      fontSize: '1rem',
      marginBottom: '32px',
      padding: '0 10px',
    },
  },
  benefitsContent: {
    maxWidth: '1200px',
    ...shorthands.margin('0', 'auto'),
  },
  benefitsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    ...shorthands.gap('32px'),
    marginBottom: '48px',
    '@media (max-width: 768px)': {
      gridTemplateColumns: '1fr',
      ...shorthands.gap('24px'),
    },
  },
  benefitCard: {
    ...shorthands.padding('32px', '28px'),
    textAlign: 'center',
    backgroundColor: tokens.colorNeutralBackground1,
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
    ...shorthands.borderRadius('12px'),
    ...shorthands.transition('all', '0.3s', 'ease'),
    ...shorthands.border('2px', 'solid', 'transparent'),
    '&:hover': {
      transform: 'translateY(-8px)',
      boxShadow: '0 12px 28px rgba(0, 120, 212, 0.15)',
      ...shorthands.border('2px', 'solid', tokens.colorBrandBackground),
    },
  },
  benefitIcon: {
    fontSize: '3rem',
    color: tokens.colorBrandBackground,
    marginBottom: '20px',
    display: 'flex',
    justifyContent: 'center',
  },
  benefitTitle: {
    fontSize: '1.375rem',
    marginBottom: '12px',
    color: tokens.colorNeutralForeground1,
    fontWeight: '600',
    display: 'block',
    '@media (max-width: 768px)': {
      fontSize: '1.125rem',
    },
  },
  benefitDescription: {
    fontSize: '1rem',
    lineHeight: '1.6',
    color: tokens.colorNeutralForeground2,
    display: 'block',
  },
  ctaSection: {
    textAlign: 'center',
    backgroundColor: '#f5f5f5',
    ...shorthands.padding('40px', '32px'),
    ...shorthands.borderRadius('12px'),
    marginTop: '24px',
  },
  ctaText: {
    fontSize: '1.375rem',
    marginBottom: '24px',
    color: tokens.colorNeutralForeground1,
    fontWeight: '600',
    display: 'block',
  },
  ctaButton: {
    fontSize: '1.1rem',
    padding: '20px 48px',
    height: 'auto',
    fontWeight: '600',
  },
  statsSection: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    ...shorthands.gap('32px'),
    marginBottom: '40px',
    ...shorthands.padding('32px', '20px'),
    backgroundColor: '#f8f9fa',
    ...shorthands.borderRadius('12px'),
    '@media (max-width: 768px)': {
      ...shorthands.gap('24px'),
      ...shorthands.padding('24px', '16px'),
    },
  },
  statItem: {
    textAlign: 'center',
  },
  statNumber: {
    fontSize: '3rem',
    fontWeight: '700',
    color: tokens.colorBrandBackground,
    display: 'block',
    lineHeight: '1',
    '@media (max-width: 768px)': {
      fontSize: '2.25rem',
    },
  },
  statLabel: {
    fontSize: '1rem',
    color: tokens.colorNeutralForeground2,
    marginTop: '8px',
    display: 'block',
    '@media (max-width: 768px)': {
      fontSize: '0.875rem',
    },
  },
});

function MemberBenefits() {
  const { t } = useTranslation();
  const styles = useStyles();

  // Get benefits data from service
  const benefitsData = dataService.getMemberBenefits();

  // Map icons to benefits
  const iconMap = {
    'community': <People24Regular />,
    'events': <Calendar24Regular />,
    'resources': <BookOpen24Regular />,
    'spiritual': <Heart24Regular />,
    'network': <Globe24Regular />,
    'leadership': <Star24Regular />
  };

  // Combine benefits data with icons and translations
  const benefits = benefitsData.map(benefit => ({
    ...benefit,
    icon: iconMap[benefit.key],
    title: t(`memberBenefits.${benefit.key}.title`),
    description: t(`memberBenefits.${benefit.key}.description`)
  }));

  return (
    <section id="member-benefits" className={styles.benefits}>
      <div className={styles.benefitsContent}>
        <Text as="h2" className={styles.benefitsTitle}>
          {t('memberBenefits.title')}
        </Text>
        <Text as="p" className={styles.benefitsSubtitle}>
          {t('memberBenefits.subtitle')}
        </Text>

        <div className={styles.statsSection}>
          <div className={styles.statItem}>
            <Text className={styles.statNumber}>10,000+</Text>
            <Text className={styles.statLabel}>{t('memberBenefits.stats.members')}</Text>
          </div>
          <div className={styles.statItem}>
            <Text className={styles.statNumber}>50+</Text>
            <Text className={styles.statLabel}>{t('memberBenefits.stats.communities')}</Text>
          </div>
          <div className={styles.statItem}>
            <Text className={styles.statNumber}>100+</Text>
            <Text className={styles.statLabel}>{t('memberBenefits.stats.events')}</Text>
          </div>
          <div className={styles.statItem}>
            <Text className={styles.statNumber}>25+</Text>
            <Text className={styles.statLabel}>{t('memberBenefits.stats.states')}</Text>
          </div>
        </div>

        <div className={styles.benefitsGrid}>
          {benefits.map((benefit, index) => (
            <Card key={index} className={styles.benefitCard}>
              <div className={styles.benefitIcon}>{benefit.icon}</div>
              <Text className={styles.benefitTitle}>{benefit.title}</Text>
              <Text className={styles.benefitDescription}>{benefit.description}</Text>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MemberBenefits;
