import React from 'react';
import { useTranslation } from 'react-i18next';
import { 
  makeStyles,
  shorthands,
  tokens,
  Text,
  Button
} from '@fluentui/react-components';
import { CalendarLtr24Regular, People24Regular, Location24Regular } from '@fluentui/react-icons';

const useStyles = makeStyles({
  teaser: {
    position: 'relative',
    background: `linear-gradient(135deg, #8B0000 0%, #DC143C 50%, #FF6347 100%)`,
    color: tokens.colorNeutralForegroundInverted,
    ...shorthands.padding('60px', '20px'),
    textAlign: 'center',
    overflow: 'hidden',
    ...shorthands.borderBottom('4px', 'solid', '#FFD700'),
  },
  teaserContent: {
    position: 'relative',
    zIndex: 2,
    maxWidth: '1000px',
    margin: '0 auto',
  },
  badge: {
    display: 'inline-block',
    backgroundColor: '#FFD700',
    color: '#8B0000',
    fontSize: '0.9rem',
    fontWeight: '700',
    ...shorthands.padding('8px', '20px'),
    ...shorthands.borderRadius('30px'),
    marginBottom: '20px',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    boxShadow: '0 4px 15px rgba(255, 215, 0, 0.4)',
  },
  teaserTitle: {
    fontSize: '3.5rem',
    fontWeight: '700',
    marginBottom: '16px',
    color: tokens.colorNeutralForegroundInverted,
    display: 'block',
    textAlign: 'center',
    lineHeight: '1.2',
    letterSpacing: '-0.02em',
    textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
    '@media (max-width: 768px)': {
      fontSize: '2.2rem',
    },
  },
  teaserSubtitle: {
    fontSize: '1.5rem',
    marginBottom: '24px',
    fontWeight: '400',
    color: tokens.colorNeutralForegroundInverted,
    display: 'block',
    textAlign: 'center',
    lineHeight: '1.4',
    opacity: 0.95,
    '@media (max-width: 768px)': {
      fontSize: '1.2rem',
    },
  },
  highlightBox: {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    ...shorthands.padding('24px', '32px'),
    ...shorthands.borderRadius('16px'),
    marginTop: '32px',
    marginBottom: '32px',
    backdropFilter: 'blur(10px)',
    ...shorthands.border('1px', 'solid', 'rgba(255, 255, 255, 0.3)'),
  },
  highlightText: {
    fontSize: '1.3rem',
    fontWeight: '600',
    color: tokens.colorNeutralForegroundInverted,
    marginBottom: '20px',
    display: 'block',
    textAlign: 'center',
  },
  detailsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    ...shorthands.gap('20px'),
    marginTop: '16px',
  },
  detailItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    ...shorthands.gap('8px'),
  },
  detailIcon: {
    fontSize: '2rem',
    color: '#FFD700',
  },
  detailLabel: {
    fontSize: '0.9rem',
    color: 'rgba(255, 255, 255, 0.8)',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    fontWeight: '500',
  },
  detailValue: {
    fontSize: '1.2rem',
    fontWeight: '600',
    color: tokens.colorNeutralForegroundInverted,
  },
  ctaButton: {
    marginTop: '24px',
    backgroundColor: '#FFD700',
    color: '#8B0000',
    fontSize: '1.1rem',
    fontWeight: '700',
    ...shorthands.padding('20px', '40px'),
    height: 'auto',
    ...shorthands.borderRadius('30px'),
    boxShadow: '0 4px 20px rgba(255, 215, 0, 0.5)',
    ...shorthands.transition('all', '0.3s', 'ease'),
    '&:hover': {
      backgroundColor: '#FFA500',
      transform: 'scale(1.05)',
      boxShadow: '0 6px 25px rgba(255, 215, 0, 0.7)',
    },
  },
  teaserGraphic: {
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
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
  },
  circle1: {
    width: '350px',
    height: '350px',
    top: '-150px',
    right: '-80px',
    animationName: {
      from: { transform: 'translateY(0) rotate(0deg)' },
      to: { transform: 'translateY(20px) rotate(360deg)' },
    },
    animationDuration: '20s',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'linear',
  },
  circle2: {
    width: '250px',
    height: '250px',
    bottom: '-100px',
    left: '-50px',
    animationName: {
      from: { transform: 'translateY(0) rotate(0deg)' },
      to: { transform: 'translateY(-20px) rotate(-360deg)' },
    },
    animationDuration: '25s',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'linear',
  },
});

function Conference2027Teaser() {
  const { t } = useTranslation();
  const styles = useStyles();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.teaser}>
      <div className={styles.teaserContent}>
        <div className={styles.badge}>
          {t('conference2027.badge')}
        </div>
        
        <Text as="h2" className={styles.teaserTitle}>
          {t('conference2027.title')}
        </Text>
        
        <Text as="p" className={styles.teaserSubtitle}>
          {t('conference2027.subtitle')}
        </Text>

        <div className={styles.highlightBox}>
          <Text className={styles.highlightText}>
            {t('conference2027.highlightText')}
          </Text>
          
          <div className={styles.detailsGrid}>
            <div className={styles.detailItem}>
              <CalendarLtr24Regular className={styles.detailIcon} />
              <span className={styles.detailLabel}>{t('conference2027.whenLabel')}</span>
              <span className={styles.detailValue}>{t('conference2027.whenValue')}</span>
            </div>
            
            <div className={styles.detailItem}>
              <Location24Regular className={styles.detailIcon} />
              <span className={styles.detailLabel}>{t('conference2027.whereLabel')}</span>
              <span className={styles.detailValue}>{t('conference2027.whereValue')}</span>
            </div>
            
            <div className={styles.detailItem}>
              <People24Regular className={styles.detailIcon} />
              <span className={styles.detailLabel}>{t('conference2027.targetLabel')}</span>
              <span className={styles.detailValue}>{t('conference2027.targetValue')}</span>
            </div>
          </div>
        </div>

        <Button 
          className={styles.ctaButton}
          onClick={() => scrollToSection('newsletter')}
        >
          {t('conference2027.ctaButton')}
        </Button>
      </div>
      
      <div className={styles.teaserGraphic}>
        <div className={`${styles.graphicCircle} ${styles.circle1}`}></div>
        <div className={`${styles.graphicCircle} ${styles.circle2}`}></div>
      </div>
    </section>
  );
}

export default Conference2027Teaser;
