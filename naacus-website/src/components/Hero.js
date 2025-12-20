import React from 'react';
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
    background: `linear-gradient(135deg, ${tokens.colorBrandBackground} 0%, #0053a0 100%)`,
    color: tokens.colorNeutralForegroundInverted,
    ...shorthands.padding('100px', '20px'),
    minHeight: '500px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  heroContent: {
    position: 'relative',
    zIndex: 2,
    maxWidth: '800px',
    textAlign: 'center',
  },
  heroTitle: {
    fontSize: '3.5rem',
    fontWeight: '700',
    marginBottom: '20px',
    color: tokens.colorNeutralForegroundInverted,
    '@media (max-width: 768px)': {
      fontSize: '2.5rem',
    },
  },
  heroSubtitle: {
    fontSize: '1.5rem',
    marginBottom: '20px',
    fontWeight: '500',
    color: tokens.colorNeutralForegroundInverted,
    '@media (max-width: 768px)': {
      fontSize: '1.2rem',
    },
  },
  heroDescription: {
    fontSize: '1.1rem',
    marginBottom: '40px',
    lineHeight: '1.8',
    color: tokens.colorNeutralForegroundInverted,
    opacity: 0.95,
  },
  heroButtons: {
    display: 'flex',
    ...shorthands.gap('20px'),
    justifyContent: 'center',
    flexWrap: 'wrap',
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
        <Text as="h1" className={styles.heroTitle}>Welcome to NACCUS</Text>
        <Text as="p" className={styles.heroSubtitle}>
          Empowering Christian Unions Across College Campuses Nationwide
        </Text>
        <Text as="p" className={styles.heroDescription}>
          Join us for NACCUS 2027 in Maryland as we strengthen our community, 
          share our faith, and build lasting connections.
        </Text>
        <div className={styles.heroButtons}>
          <Button 
            appearance="primary" 
            size="large"
            onClick={() => scrollToSection('conference')}
          >
            Learn About NACCUS 2027
          </Button>
          <Button 
            appearance="outline" 
            size="large"
            onClick={() => scrollToSection('about')}
            style={{ 
              color: tokens.colorNeutralForegroundInverted, 
              borderColor: tokens.colorNeutralForegroundInverted 
            }}
          >
            Discover Our Mission
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
