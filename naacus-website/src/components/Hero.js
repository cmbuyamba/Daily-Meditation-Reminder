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
    background: `linear-gradient(135deg, #0f4c81 0%, #1a6fb8 50%, #2a8fd8 100%)`,
    color: tokens.colorNeutralForegroundInverted,
    ...shorthands.padding('120px', '20px', '100px'),
    minHeight: '700px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    '::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255, 215, 0, 0.08) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.05) 0%, transparent 50%)',
      pointerEvents: 'none',
      zIndex: 1,
    },
  },
  heroContent: {
    position: 'relative',
    zIndex: 2,
    maxWidth: '1100px',
    margin: '0 auto',
    textAlign: 'center',
  },
  heroTitle: {
    fontSize: '5rem',
    fontWeight: '700',
    marginBottom: '32px',
    color: tokens.colorNeutralForegroundInverted,
    display: 'block',
    textAlign: 'center',
    lineHeight: '1.15',
    letterSpacing: '-0.02em',
    textShadow: '0 4px 20px rgba(0, 0, 0, 0.3), 0 2px 8px rgba(0, 0, 0, 0.2)',
    fontFamily: 'Georgia, "Times New Roman", serif',
    '@media (max-width: 768px)': {
      fontSize: '3rem',
    },
  },
  heroSubtitle: {
    fontSize: '1.75rem',
    marginBottom: '24px',
    fontWeight: '500',
    color: 'rgba(255, 255, 255, 0.95)',
    display: 'block',
    textAlign: 'center',
    lineHeight: '1.6',
    textShadow: '0 2px 12px rgba(0, 0, 0, 0.25)',
    letterSpacing: '0.5px',
    '@media (max-width: 768px)': {
      fontSize: '1.4rem',
    },
  },
  heroDescription: {
    fontSize: '1.25rem',
    marginBottom: '48px',
    lineHeight: '1.9',
    color: 'rgba(255, 255, 255, 0.92)',
    opacity: 1,
    display: 'block',
    textAlign: 'center',
    maxWidth: '920px',
    margin: '0 auto 48px',
    fontWeight: '400',
    textShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
  },
  heroButtons: {
    display: 'flex',
    flexDirection: 'column',
    ...shorthands.gap('20px'),
    alignItems: 'center',
    marginTop: '48px',
    maxWidth: '700px',
    margin: '48px auto 0',
  },
  primaryActions: {
    display: 'flex',
    ...shorthands.gap('20px'),
    justifyContent: 'center',
    flexWrap: 'wrap',
    width: '100%',
  },
  secondaryActions: {
    display: 'flex',
    ...shorthands.gap('20px'),
    justifyContent: 'center',
    flexWrap: 'wrap',
    width: '100%',
  },
  membershipHighlight: {
    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.08) 100%)',
    ...shorthands.padding('28px', '40px'),
    ...shorthands.borderRadius('20px'),
    marginTop: '48px',
    backdropFilter: 'blur(16px)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15), 0 4px 12px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
    ...shorthands.border('1px', 'solid', 'rgba(255, 255, 255, 0.18)'),
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
      transform: 'translateY(-2px)',
      boxShadow: '0 12px 40px rgba(0, 0, 0, 0.2), 0 6px 16px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.25)',
    },
  },
  membershipText: {
    fontSize: '1.2rem',
    color: tokens.colorNeutralForegroundInverted,
    marginBottom: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    ...shorthands.gap('12px'),
    textAlign: 'center',
    fontWeight: '600',
    textShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
    letterSpacing: '0.3px',
  },
  benefitsList: {
    display: 'flex',
    ...shorthands.gap('40px'),
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginTop: '20px',
  },
  benefitItem: {
    display: 'flex',
    alignItems: 'center',
    ...shorthands.gap('10px'),
    fontSize: '1.05rem',
    color: 'rgba(255, 255, 255, 0.95)',
    fontWeight: '500',
    textShadow: '0 1px 4px rgba(0, 0, 0, 0.2)',
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
    background: 'radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 50%, transparent 100%)',
  },
  circle1: {
    width: '500px',
    height: '500px',
    top: '-250px',
    right: '-150px',
    animationName: {
      from: { transform: 'translateY(0) scale(1)' },
      to: { transform: 'translateY(30px) scale(1.05)' },
    },
    animationDuration: '8s',
    animationIterationCount: 'infinite',
    animationDirection: 'alternate',
    animationTimingFunction: 'ease-in-out',
  },
  circle2: {
    width: '400px',
    height: '400px',
    bottom: '-200px',
    left: '-100px',
    animationName: {
      from: { transform: 'translateY(0) scale(1)' },
      to: { transform: 'translateY(-30px) scale(1.08)' },
    },
    animationDuration: '10s',
    animationIterationCount: 'infinite',
    animationDirection: 'alternate',
    animationTimingFunction: 'ease-in-out',
  },
  circle3: {
    width: '300px',
    height: '300px',
    top: '40%',
    right: '15%',
    animationName: {
      from: { transform: 'translateY(0) scale(1)' },
      to: { transform: 'translateY(25px) scale(1.06)' },
    },
    animationDuration: '9s',
    animationIterationCount: 'infinite',
    animationDirection: 'alternate',
    animationTimingFunction: 'ease-in-out',
  },
  divineLight: {
    position: 'absolute',
    width: '600px',
    height: '600px',
    top: '-300px',
    left: '50%',
    transform: 'translateX(-50%)',
    background: 'radial-gradient(circle, rgba(255, 215, 0, 0.12) 0%, transparent 70%)',
    pointerEvents: 'none',
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
            <span style={{ fontSize: '1.8rem', filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))' }}>✨</span> 
            {t('hero.membershipTeaser')}
          </Text>
          <div className={styles.benefitsList}>
            <span className={styles.benefitItem}>
              <span style={{ fontSize: '1.2rem', color: '#ffd700' }}>✓</span> {t('hero.benefit1')}
            </span>
            <span className={styles.benefitItem}>
              <span style={{ fontSize: '1.2rem', color: '#ffd700' }}>✓</span> {t('hero.benefit2')}
            </span>
            <span className={styles.benefitItem}>
              <span style={{ fontSize: '1.2rem', color: '#ffd700' }}>✓</span> {t('hero.benefit3')}
            </span>
          </div>
        </div>

        <div className={styles.heroButtons}>
          {/* Primary Actions Row */}
          <div className={styles.primaryActions}>
            <Button 
              appearance="primary" 
              size="large"
              onClick={() => window.location.href = '/membership'}
              style={{
                backgroundColor: '#0067b8',
                borderColor: '#0067b8',
                fontSize: '1.1rem',
                padding: '18px 36px',
                height: 'auto',
                fontWeight: '600',
                borderRadius: '12px',
                boxShadow: '0 8px 24px rgba(0, 103, 184, 0.45), 0 4px 12px rgba(0, 0, 0, 0.2)',
                flex: '1',
                minWidth: '200px',
                maxWidth: '240px',
                transition: 'all 0.3s ease',
                border: '1px solid rgba(255, 255, 255, 0.2)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(0, 103, 184, 0.5), 0 6px 16px rgba(0, 0, 0, 0.25)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 103, 184, 0.45), 0 4px 12px rgba(0, 0, 0, 0.2)';
              }}
            >
              ✝ Become a Member
            </Button>
            <Button 
              appearance="primary" 
              size="large"
              onClick={() => window.location.href = '/volunteer'}
              style={{
                backgroundColor: '#d83b01',
                borderColor: '#d83b01',
                fontSize: '1.1rem',
                padding: '18px 36px',
                height: 'auto',
                fontWeight: '600',
                borderRadius: '12px',
                boxShadow: '0 8px 24px rgba(216, 59, 1, 0.45), 0 4px 12px rgba(0, 0, 0, 0.2)',
                flex: '1',
                minWidth: '200px',
                maxWidth: '240px',
                transition: 'all 0.3s ease',
                border: '1px solid rgba(255, 255, 255, 0.2)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(216, 59, 1, 0.5), 0 6px 16px rgba(0, 0, 0, 0.25)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(216, 59, 1, 0.45), 0 4px 12px rgba(0, 0, 0, 0.2)';
              }}
            >
              🙏 Volunteer with Us
            </Button>
          </div>
          
          {/* Secondary Actions Row */}
          <div className={styles.secondaryActions}>
            <Button 
              appearance="primary" 
              size="large"
              onClick={() => scrollToSection('newsletter')}
              style={{
                backgroundColor: '#28a745',
                borderColor: '#28a745',
                fontSize: '1rem',
                padding: '16px 32px',
                height: 'auto',
                fontWeight: '600',
                borderRadius: '12px',
                boxShadow: '0 6px 20px rgba(40, 167, 69, 0.4), 0 3px 10px rgba(0, 0, 0, 0.15)',
                flex: '1',
                minWidth: '200px',
                maxWidth: '240px',
                transition: 'all 0.3s ease',
                border: '1px solid rgba(255, 255, 255, 0.2)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 10px 28px rgba(40, 167, 69, 0.45), 0 5px 14px rgba(0, 0, 0, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(40, 167, 69, 0.4), 0 3px 10px rgba(0, 0, 0, 0.15)';
              }}
            >
              📧 {t('hero.becomeMemberButton')}
            </Button>
            <Button 
              appearance="outline" 
              size="large"
              onClick={() => window.location.href = '/about'}
              style={{ 
                color: tokens.colorNeutralForegroundInverted, 
                borderColor: 'rgba(255, 255, 255, 0.9)',
                fontSize: '1rem',
                padding: '16px 32px',
                height: 'auto',
                borderWidth: '2px',
                borderRadius: '12px',
                fontWeight: '600',
                backgroundColor: 'rgba(255, 255, 255, 0.18)',
                backdropFilter: 'blur(12px)',
                flex: '1',
                minWidth: '200px',
                maxWidth: '240px',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.15)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.25)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.18)';
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.15)';
              }}
            >
              📖 {t('hero.discoverButton')}
            </Button>
          </div>
        </div>
      </div>
      <div className={styles.heroGraphic}>
        <div className={styles.divineLight}></div>
        <div className={`${styles.graphicCircle} ${styles.circle1}`}></div>
        <div className={`${styles.graphicCircle} ${styles.circle2}`}></div>
        <div className={`${styles.graphicCircle} ${styles.circle3}`}></div>
      </div>
    </section>
  );
}

export default Hero;
