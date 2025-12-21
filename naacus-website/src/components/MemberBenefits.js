import React from 'react';
import { useTranslation } from 'react-i18next';
import { 
  makeStyles,
  shorthands,
  tokens,
  Text,
  Card
} from '@fluentui/react-components';
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
  },
  benefitsSubtitle: {
    fontSize: '1.25rem',
    textAlign: 'center',
    marginBottom: '48px',
    color: tokens.colorNeutralForeground2,
    display: 'block',
    maxWidth: '700px',
    margin: '0 auto 48px',
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
  },
  statLabel: {
    fontSize: '1rem',
    color: tokens.colorNeutralForeground2,
    marginTop: '8px',
    display: 'block',
  },
});

function MemberBenefits() {
  const { t } = useTranslation();
  const styles = useStyles();

  const benefits = [
    {
      icon: <People24Regular />,
      title: t('memberBenefits.community.title'),
      description: t('memberBenefits.community.description')
    },
    {
      icon: <Calendar24Regular />,
      title: t('memberBenefits.events.title'),
      description: t('memberBenefits.events.description')
    },
    {
      icon: <BookOpen24Regular />,
      title: t('memberBenefits.resources.title'),
      description: t('memberBenefits.resources.description')
    },
    {
      icon: <Heart24Regular />,
      title: t('memberBenefits.spiritual.title'),
      description: t('memberBenefits.spiritual.description')
    },
    {
      icon: <Globe24Regular />,
      title: t('memberBenefits.network.title'),
      description: t('memberBenefits.network.description')
    },
    {
      icon: <Star24Regular />,
      title: t('memberBenefits.leadership.title'),
      description: t('memberBenefits.leadership.description')
    }
  ];

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
