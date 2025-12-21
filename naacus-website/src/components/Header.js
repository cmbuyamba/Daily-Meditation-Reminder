import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  makeStyles,
  shorthands,
  tokens,
  Text,
  Menu,
  MenuTrigger,
  MenuPopover,
  MenuList,
  MenuItem,
  Button
} from '@fluentui/react-components';
import { Navigation24Regular } from '@fluentui/react-icons';
import LanguageSwitcher from './LanguageSwitcher';

const useStyles = makeStyles({
  header: {
    backgroundColor: 'rgba(255, 255, 255, 0.98)',
    '@supports (backdrop-filter: blur(10px))': {
      backdropFilter: 'blur(10px)',
    },
    color: tokens.colorNeutralForeground1,
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
    ...shorthands.padding('16px', '0'),
    ...shorthands.borderBottom('1px', 'solid', '#e1dfdd'),
    transition: 'transform 0.3s ease, opacity 0.3s ease',
  },
  headerHidden: {
    transform: 'translateY(-100%)',
    opacity: 0,
  },
  headerContainer: {
    maxWidth: '1200px',
    ...shorthands.margin('0', 'auto'),
    ...shorthands.padding('0', '20px'),
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    display: 'flex',
    flexDirection: 'column',
    ...shorthands.gap('4px'),
  },
  logoTitle: {
    fontSize: '1.5rem',
    fontWeight: '600',
    letterSpacing: '0.5px',
    margin: 0,
    color: tokens.colorBrandBackground,
    display: 'block',
  },
  tagline: {
    fontSize: '0.75rem',
    margin: 0,
    opacity: 0.7,
    color: tokens.colorNeutralForeground2,
    display: 'block',
    fontWeight: '400',
  },
  nav: {
    display: 'flex',
    ...shorthands.gap('10px'),
    '@media (max-width: 768px)': {
      display: 'none',
    },
  },
  navLink: {
    color: tokens.colorNeutralForeground1,
    textDecoration: 'none',
    fontSize: '0.9rem',
    fontWeight: '500',
    transition: 'color 0.2s ease',
    '&:hover': {
      color: tokens.colorBrandBackground,
    },
  },
  mobileMenu: {
    display: 'none',
    '@media (max-width: 768px)': {
      display: 'block',
    },
  },
  headerActions: {
    display: 'flex',
    alignItems: 'center',
    ...shorthands.gap('12px'),
  },
});

// Delay before showing menu after scroll stops (in milliseconds)
const SCROLL_HIDE_DELAY = 150;

function Header() {
  const { t } = useTranslation();
  const styles = useStyles();
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      // Set scrolling state to true
      setIsScrolling(true);

      // Clear previous timeout
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      // Set new timeout to detect when scrolling stops
      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, SCROLL_HIDE_DELAY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []); // Empty dependency array - effect runs only on mount/unmount

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigation = (path, sectionId) => {
    if (path) {
      // Navigate to a different route
      navigate(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (location.pathname === '/') {
      // If on home page, scroll to section
      scrollToSection(sectionId);
    } else {
      // If on another page, navigate home first then scroll
      navigate('/');
      setTimeout(() => scrollToSection(sectionId), 100);
    }
  };

  return (
    <header className={`${styles.header} ${isScrolling ? styles.headerHidden : ''}`}>
      <div className={styles.headerContainer}>
        <div className={styles.logo}>
          <Text as="h1" className={styles.logoTitle}>{t('header.title')}</Text>
          <Text className={styles.tagline}>{t('header.tagline')}</Text>
        </div>
        <div className={styles.headerActions}>
          <nav className={styles.nav}>
            <Button 
              appearance="transparent" 
              onClick={() => handleNavigation(null, 'home')}
              className={styles.navLink}
            >
              {t('header.nav.home')}
            </Button>
            <Button 
              appearance="transparent" 
              onClick={() => handleNavigation('/events', null)}
              className={styles.navLink}
            >
              {t('header.nav.naacus2025', 'NAACUS 2025')}
            </Button>
            <Button 
              appearance="transparent" 
              onClick={() => handleNavigation(null, 'about')}
              className={styles.navLink}
            >
              {t('header.nav.about')}
            </Button>
            <Button 
              appearance="transparent" 
              onClick={() => handleNavigation(null, 'leadership')}
              className={styles.navLink}
            >
              {t('header.nav.leadership')}
            </Button>
            <Button 
              appearance="transparent" 
              onClick={() => handleNavigation(null, 'programs')}
              className={styles.navLink}
            >
              {t('header.nav.events')}
            </Button>
            <Button 
              appearance="transparent" 
              onClick={() => handleNavigation(null, 'ministries')}
              className={styles.navLink}
            >
              {t('header.nav.ministries')}
            </Button>
            <Button 
              appearance="transparent" 
              onClick={() => handleNavigation(null, 'gallery')}
              className={styles.navLink}
            >
              {t('header.nav.gallery')}
            </Button>
            <Button 
              appearance="transparent" 
              onClick={() => handleNavigation(null, 'resources')}
              className={styles.navLink}
            >
              {t('header.nav.resources')}
            </Button>
            <Button 
              appearance="transparent" 
              onClick={() => handleNavigation(null, 'contact')}
              className={styles.navLink}
            >
              {t('header.nav.contact')}
            </Button>
          </nav>
          <LanguageSwitcher />
        </div>
        <div className={styles.mobileMenu}>
          <LanguageSwitcher />
          <Menu>
            <MenuTrigger disableButtonEnhancement>
              <Button 
                appearance="transparent" 
                icon={<Navigation24Regular />}
                style={{ color: tokens.colorNeutralForeground1 }}
              />
            </MenuTrigger>
            <MenuPopover>
              <MenuList>
                <MenuItem onClick={() => handleNavigation(null, 'home')}>{t('header.nav.home')}</MenuItem>
                <MenuItem onClick={() => handleNavigation('/events', null)}>{t('header.nav.naacus2025', 'NAACUS 2025')}</MenuItem>
                <MenuItem onClick={() => handleNavigation(null, 'about')}>{t('header.nav.about')}</MenuItem>
                <MenuItem onClick={() => handleNavigation(null, 'leadership')}>{t('header.nav.leadership')}</MenuItem>
                <MenuItem onClick={() => handleNavigation(null, 'objectives')}>{t('header.nav.objectives')}</MenuItem>
                <MenuItem onClick={() => handleNavigation(null, 'programs')}>{t('header.nav.events')}</MenuItem>
                <MenuItem onClick={() => handleNavigation(null, 'ministries')}>{t('header.nav.ministries')}</MenuItem>
                <MenuItem onClick={() => handleNavigation(null, 'gallery')}>{t('header.nav.gallery')}</MenuItem>
                <MenuItem onClick={() => handleNavigation(null, 'resources')}>{t('header.nav.resources')}</MenuItem>
                <MenuItem onClick={() => handleNavigation(null, 'contact')}>{t('header.nav.contact')}</MenuItem>
              </MenuList>
            </MenuPopover>
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
