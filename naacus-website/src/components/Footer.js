import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { 
  makeStyles,
  shorthands,
  tokens,
  Text,
  Link
} from '@fluentui/react-components';

const useStyles = makeStyles({
  footer: {
    backgroundColor: '#252423',
    color: tokens.colorNeutralForegroundInverted,
    ...shorthands.padding('64px', '20px', '24px'),
  },
  footerContent: {
    maxWidth: '1200px',
    ...shorthands.margin('0', 'auto'),
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    ...shorthands.gap('40px'),
    marginBottom: '40px',
  },
  footerSection: {
    display: 'flex',
    flexDirection: 'column',
    ...shorthands.gap('15px'),
  },
  footerSectionTitle: {
    fontSize: '1.125rem',
    fontWeight: '600',
    marginBottom: '16px',
    color: tokens.colorNeutralForegroundInverted,
    display: 'block',
  },
  footerSectionSubtitle: {
    fontSize: '1rem',
    fontWeight: '600',
    color: tokens.colorNeutralForegroundInverted,
    display: 'block',
  },
  footerTagline: {
    fontSize: '0.95rem',
    fontStyle: 'italic',
    opacity: 0.9,
    color: tokens.colorNeutralForegroundInverted,
    display: 'block',
  },
  footerList: {
    listStyle: 'none',
    ...shorthands.padding(0),
    ...shorthands.margin(0),
    display: 'flex',
    flexDirection: 'column',
    ...shorthands.gap('10px'),
  },
  footerLink: {
    color: tokens.colorNeutralForegroundInverted,
    textDecoration: 'none',
    opacity: 0.9,
    fontSize: '0.95rem',
    '&:hover': {
      opacity: 1,
      textDecoration: 'underline',
    },
  },
  footerCta: {
    color: '#90e0ef',
    textDecoration: 'none',
    fontWeight: '500',
    fontSize: '1rem',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  footerBottom: {
    textAlign: 'center',
    ...shorthands.padding('20px', '0', '0'),
    ...shorthands.borderTop('1px', 'solid', 'rgba(255, 255, 255, 0.1)'),
  },
  footerBottomText: {
    fontSize: '0.9rem',
    marginBottom: '10px',
    color: tokens.colorNeutralForegroundInverted,
    opacity: 0.8,
    display: 'block',
  },
  msIntegration: {
    fontSize: '0.85rem',
    color: '#90e0ef',
    fontWeight: '500',
  },
});

function Footer() {
  const { t } = useTranslation();
  const styles = useStyles();
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <Text as="h3" className={styles.footerSectionTitle}>{t('header.title')}</Text>
          <Text className={styles.footerSectionSubtitle}>{t('header.tagline')}</Text>
          <Text as="p" className={styles.footerTagline}>
            {t('footer.tagline')}
          </Text>
        </div>
        <div className={styles.footerSection}>
          <Text as="h4" className={styles.footerSectionTitle}>{t('footer.quickLinks')}</Text>
          <ul className={styles.footerList}>
            <li>
              <Link 
                className={styles.footerLink} 
                onClick={() => handleNavigation('/')}
                style={{ cursor: 'pointer' }}
              >
                {t('footer.home')}
              </Link>
            </li>
            <li>
              <Link 
                className={styles.footerLink} 
                onClick={() => handleNavigation('/about')}
                style={{ cursor: 'pointer' }}
              >
                {t('footer.about')}
              </Link>
            </li>
            <li>
              <Link 
                className={styles.footerLink} 
                onClick={() => handleNavigation('/leadership')}
                style={{ cursor: 'pointer' }}
              >
                {t('footer.leadership')}
              </Link>
            </li>
            <li>
              <Link 
                className={styles.footerLink} 
                onClick={() => handleNavigation('/events')}
                style={{ cursor: 'pointer' }}
              >
                {t('footer.events')}
              </Link>
            </li>
            <li>
              <Link 
                className={styles.footerLink} 
                onClick={() => handleNavigation('/resources')}
                style={{ cursor: 'pointer' }}
              >
                {t('footer.resources')}
              </Link>
            </li>
            <li>
              <Link 
                className={styles.footerLink} 
                onClick={() => handleNavigation('/contact')}
                style={{ cursor: 'pointer' }}
              >
                {t('footer.contact')}
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <Text as="h4" className={styles.footerSectionTitle}>{t('footer.engage')}</Text>
          <ul className={styles.footerList}>
            <li>
              <Link 
                className={styles.footerLink} 
                onClick={() => handleNavigation('/programs-activities')}
                style={{ cursor: 'pointer' }}
              >
                {t('footer.eventsActivities')}
              </Link>
            </li>
            <li>
              <Link 
                className={styles.footerLink} 
                onClick={() => handleNavigation('/events')}
                style={{ cursor: 'pointer' }}
              >
                {t('footer.nationalConference')}
              </Link>
            </li>
            <li>
              <Link 
                className={styles.footerLink} 
                onClick={() => handleNavigation('/contact')}
                style={{ cursor: 'pointer' }}
              >
                {t('footer.newsletter')}
              </Link>
            </li>
            <li>
              <Link 
                className={styles.footerLink} 
                onClick={() => handleNavigation('/membership')}
                style={{ cursor: 'pointer' }}
              >
                {t('footer.membership')}
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <Text as="h4" className={styles.footerSectionTitle}>{t('footer.getInvolved')}</Text>
          <Link 
            className={styles.footerLink} 
            onClick={() => handleNavigation('/membership')}
            style={{ cursor: 'pointer' }}
          >
            {t('footer.joinCommunity')}
          </Link>
          <Link 
            className={styles.footerLink} 
            onClick={() => handleNavigation('/programs-activities')}
            style={{ cursor: 'pointer' }}
          >
            {t('footer.participatePrograms')}
          </Link>
          <Link 
            className={styles.footerCta} 
            onClick={() => handleNavigation('/contact')}
            style={{ cursor: 'pointer' }}
          >
            {t('footer.contactUs')}
          </Link>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <Text as="p" className={styles.footerBottomText}>
          {t('footer.copyright', { year: currentYear })}
        </Text>
        <Text as="p" className={styles.msIntegration}>
          {t('footer.msIntegration')}
        </Text>
      </div>
    </footer>
  );
}

export default Footer;
