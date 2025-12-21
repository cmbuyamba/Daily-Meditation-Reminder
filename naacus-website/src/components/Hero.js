import React from 'react';
import { useTranslation } from 'react-i18next';
import { 
  makeStyles,
  shorthands,
  tokens,
  Text,
  Button
} from '@fluentui/react-components';

const useStyles = makeStyles({
  hero: {
    position: 'relative',
    background: `linear-gradient(135deg, ${tokens.colorBrandBackground} 0%, #1a6fb8 100%)`,
    color: tokens.colorNeutralForegroundInverted,
    ...shorthands.padding('100px', '20px', '80px'),
    minHeight: '600px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  heroContent: {
    position: 'relative',
    zIndex: 2,
    maxWidth: '1000px',
    margin: '0 auto',
    textAlign: 'center',
  },
  heroTitle: {
    fontSize: '4.5rem',
    fontWeight: '600',
    marginBottom: '24px',
    color: tokens.colorNeutralForegroundInverted,
    display: 'block',
    textAlign: 'center',
    lineHeight: '1.1',
    letterSpacing: '-0.03em',
    '@media (max-width: 768px)': {
      fontSize: '2.8rem',
    },
  },
  heroSubtitle: {
    fontSize: '1.6rem',
    marginBottom: '20px',
    fontWeight: '400',
    color: tokens.colorNeutralForegroundInverted,
    display: 'block',
    textAlign: 'center',
    lineHeight: '1.5',
    '@media (max-width: 768px)': {
      fontSize: '1.3rem',
    },
  },
  heroDescription: {
    fontSize: '1.2rem',
    marginBottom: '40px',
    lineHeight: '1.8',
    color: tokens.colorNeutralForegroundInverted,
    opacity: 0.96,
    display: 'block',
    textAlign: 'center',
    maxWidth: '900px',
    margin: '0 auto 40px',
  },
  heroButtons: {
    display: 'flex',
    ...shorthands.gap('20px'),
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginTop: '40px',
  },
  membershipHighlight: {
    backgroundColor: 'rgba(90, 160, 220, 0.35)',
    ...shorthands.padding('24px', '32px'),
    ...shorthands.borderRadius('16px'),
    marginTop: '40px',
    backdropFilter: 'blur(12px)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
  },
  membershipText: {
    fontSize: '1.1rem',
    color: tokens.colorNeutralForegroundInverted,
    marginBottom: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    ...shorthands.gap('10px'),
    textAlign: 'center',
    fontWeight: '500',
  },
  benefitsList: {
    display: 'flex',
    ...shorthands.gap('32px'),
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginTop: '16px',
  },
  benefitItem: {
    display: 'flex',
    alignItems: 'center',
    ...shorthands.gap('8px'),
    fontSize: '1rem',
    color: tokens.colorNeutralForegroundInverted,
    fontWeight: '400',
  },
  heroGraphic: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 1,
    overflow: 'hidden',
  },
  graphicCircle: {
    position: 'absolute',
    ...shorthands.borderRadius('50%'),
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  circle1: {
    width: '400px',
    height: '400px',
    top: '-200px',
    right: '-100px',
    animationName: {
      from: { transform: 'translateY(0)' },
      to: { transform: 'translateY(20px)' },
    },
    animationDuration: '3s',
    animationIterationCount: 'infinite',
    animationDirection: 'alternate',
    animationTimingFunction: 'ease-in-out',
  },
  circle2: {
    width: '300px',
    height: '300px',
    bottom: '-150px',
    left: '-50px',
    animationName: {
      from: { transform: 'translateY(0)' },
      to: { transform: 'translateY(-20px)' },
    },
    animationDuration: '4s',
    animationIterationCount: 'infinite',
    animationDirection: 'alternate',
    animationTimingFunction: 'ease-in-out',
  },
  circle3: {
    width: '200px',
    height: '200px',
    top: '50%',
    right: '20%',
    animationName: {
      from: { transform: 'translateY(0)' },
      to: { transform: 'translateY(15px)' },
    },
    animationDuration: '3.5s',
    animationIterationCount: 'infinite',
    animationDirection: 'alternate',
    animationTimingFunction: 'ease-in-out',
  },
});

function Hero() {
  const { t } = useTranslation();
  const styles = useStyles();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.heroContent}>
        <Text as="h1" className={styles.heroTitle}>{t('hero.title')}</Text>
        <Text as="p" className={styles.heroSubtitle}>
          {t('hero.subtitle')}
        </Text>
        <Text as="p" className={styles.heroDescription}>
          {t('hero.description')}
        </Text>
        
        <div className={styles.membershipHighlight}>
          <Text className={styles.membershipText}>
            <span style={{ fontSize: '1.5rem' }}>⭐</span> {t('hero.membershipTeaser')}
          </Text>
          <div className={styles.benefitsList}>
            <span className={styles.benefitItem}>✓ {t('hero.benefit1')}</span>
            <span className={styles.benefitItem}>✓ {t('hero.benefit2')}</span>
            <span className={styles.benefitItem}>✓ {t('hero.benefit3')}</span>
          </div>
        </div>

        <div className={styles.heroButtons}>
          <Button 
            appearance="primary" 
            size="large"
            onClick={() => scrollToSection('newsletter')}
            style={{
              backgroundColor: '#28a745',
              borderColor: '#28a745',
              fontSize: '1.15rem',
              padding: '18px 48px',
              height: 'auto',
              fontWeight: '600',
              borderRadius: '8px',
              boxShadow: '0 4px 16px rgba(40, 167, 69, 0.3)',
            }}
          >
            {t('hero.becomeMemberButton')}
          </Button>
          <Button 
            appearance="outline" 
            size="large"
            onClick={() => scrollToSection('about')}
            style={{ 
              color: tokens.colorNeutralForegroundInverted, 
              borderColor: tokens.colorNeutralForegroundInverted,
              fontSize: '1.15rem',
              padding: '18px 48px',
              height: 'auto',
              borderWidth: '2px',
              borderRadius: '8px',
              fontWeight: '600',
              backgroundColor: 'transparent',
            }}
          >
            {t('hero.discoverButton')}
          </Button>
        </div>
      </div>
      <div className={styles.heroGraphic}>
        <div className={`${styles.graphicCircle} ${styles.circle1}`}></div>
        <div className={`${styles.graphicCircle} ${styles.circle2}`}></div>
        <div className={`${styles.graphicCircle} ${styles.circle3}`}></div>
      </div>
    </section>
  );
}

export default Hero;
