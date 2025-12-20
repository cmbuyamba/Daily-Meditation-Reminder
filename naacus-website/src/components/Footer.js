import React from 'react';
import { 
  makeStyles,
  shorthands,
  tokens,
  Text,
  Link
} from '@fluentui/react-components';

const useStyles = makeStyles({
  footer: {
    backgroundColor: '#1a1a1a',
    color: tokens.colorNeutralForegroundInverted,
    ...shorthands.padding('60px', '20px', '20px'),
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
    fontSize: '1.2rem',
    fontWeight: '700',
    marginBottom: '10px',
    color: tokens.colorNeutralForegroundInverted,
  },
  footerSectionSubtitle: {
    fontSize: '1rem',
    fontWeight: '600',
    color: tokens.colorNeutralForegroundInverted,
  },
  footerTagline: {
    fontSize: '0.95rem',
    fontStyle: 'italic',
    opacity: 0.9,
    color: tokens.colorNeutralForegroundInverted,
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
  },
  msIntegration: {
    fontSize: '0.85rem',
    color: '#90e0ef',
    fontWeight: '500',
  },
});

function Footer() {
  const styles = useStyles();
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <Text as="h3" className={styles.footerSectionTitle}>NAACUS</Text>
          <Text className={styles.footerSectionSubtitle}>National Association of African Catholics in the United States</Text>
          <Text as="p" className={styles.footerTagline}>
            "Together with Christ" — Building vibrant African Catholic communities across the United States.
          </Text>
        </div>
        <div className={styles.footerSection}>
          <Text as="h4" className={styles.footerSectionTitle}>Quick Links</Text>
          <ul className={styles.footerList}>
            <li>
              <Link 
                className={styles.footerLink} 
                onClick={() => scrollToSection('home')}
                style={{ cursor: 'pointer' }}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                className={styles.footerLink} 
                onClick={() => scrollToSection('about')}
                style={{ cursor: 'pointer' }}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                className={styles.footerLink} 
                onClick={() => scrollToSection('what-we-do')}
                style={{ cursor: 'pointer' }}
              >
                What We Do
              </Link>
            </li>
            <li>
              <Link 
                className={styles.footerLink} 
                onClick={() => scrollToSection('programs')}
                style={{ cursor: 'pointer' }}
              >
                Programs
              </Link>
            </li>
            <li>
              <Link 
                className={styles.footerLink} 
                onClick={() => scrollToSection('conference')}
                style={{ cursor: 'pointer' }}
              >
                Conference
              </Link>
            </li>
            <li>
              <Link 
                className={styles.footerLink} 
                onClick={() => scrollToSection('contact')}
                style={{ cursor: 'pointer' }}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <Text as="h4" className={styles.footerSectionTitle}>Our Mission</Text>
          <ul className={styles.footerList}>
            <li>
              <Link 
                className={styles.footerLink} 
                onClick={() => scrollToSection('what-we-do')}
                style={{ cursor: 'pointer' }}
              >
                Pastoral Care
              </Link>
            </li>
            <li>
              <Link 
                className={styles.footerLink} 
                onClick={() => scrollToSection('what-we-do')}
                style={{ cursor: 'pointer' }}
              >
                Heritage & Culture
              </Link>
            </li>
            <li>
              <Link 
                className={styles.footerLink} 
                onClick={() => scrollToSection('what-we-do')}
                style={{ cursor: 'pointer' }}
              >
                Family Life
              </Link>
            </li>
            <li>
              <Link 
                className={styles.footerLink} 
                onClick={() => scrollToSection('what-we-do')}
                style={{ cursor: 'pointer' }}
              >
                Evangelization
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <Text as="h4" className={styles.footerSectionTitle}>Get Involved</Text>
          <Text>Join our community of African Catholics</Text>
          <Text>Participate in our programs</Text>
          <Link 
            className={styles.footerCta} 
            onClick={() => scrollToSection('contact')}
            style={{ cursor: 'pointer' }}
          >
            Contact Us →
          </Link>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <Text as="p" className={styles.footerBottomText}>
          &copy; {currentYear} NAACUS - National Association of African Catholics in the United States. All rights reserved.
        </Text>
        <Text as="p" className={styles.msIntegration}>
          Microsoft 365 Integration Ready
        </Text>
      </div>
    </footer>
  );
}

export default Footer;
