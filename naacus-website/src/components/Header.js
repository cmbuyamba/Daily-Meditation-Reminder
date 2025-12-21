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
  Button,
  Input
} from '@fluentui/react-components';
import { Navigation24Regular, Search24Regular, Person24Regular } from '@fluentui/react-icons';
import LanguageSwitcher from './LanguageSwitcher';

const useStyles = makeStyles({
  header: {
    backgroundColor: '#ffffff',
    color: '#262626',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    boxShadow: 'none',
    ...shorthands.borderBottom('1px', 'solid', '#e5e5e5'),
    height: '54px',
    display: 'flex',
    alignItems: 'center',
  },
  headerContainer: {
    width: '100%',
    maxWidth: '1600px',
    ...shorthands.margin('0', 'auto'),
    ...shorthands.padding('0', '5%'),
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },
  leftSection: {
    display: 'flex',
    alignItems: 'center',
    ...shorthands.gap('24px'),
    flex: 1,
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    ...shorthands.padding('0', '12px', '0', '0'),
  },
  logoTitle: {
    fontSize: '15px',
    fontWeight: '600',
    letterSpacing: '0.3px',
    margin: 0,
    color: '#0067b8',
    whiteSpace: 'nowrap',
  },
  nav: {
    display: 'flex',
    alignItems: 'center',
    ...shorthands.gap('0'),
    ...shorthands.margin('0'),
    ...shorthands.padding('0'),
    listStyle: 'none',
    '@media (max-width: 1024px)': {
      display: 'none',
    },
  },
  navLink: {
    color: '#262626',
    textDecoration: 'none',
    fontSize: '13px',
    fontWeight: '400',
    ...shorthands.padding('0', '12px'),
    height: '54px',
    display: 'flex',
    alignItems: 'center',
    transition: 'background-color 0.1s ease',
    backgroundColor: 'transparent',
    ...shorthands.border('none'),
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#f2f2f2',
      textDecoration: 'underline',
    },
  },
  rightSection: {
    display: 'flex',
    alignItems: 'center',
    ...shorthands.gap('16px'),
  },
function Header() {
  const { t } = useTranslation();
  const styles = useStyles();
  const navigate = useNavigate();
  const location = useLocation();
  },
  signInButton: {
    fontSize: '13px',
    fontWeight: '400',
    height: '32px',
    ...shorthands.padding('0', '12px'),
    backgroundColor: 'transparent',
    color: '#262626',
    ...shorthands.border('1px', 'solid', '#e5e5e5'),
    ...shorthands.borderRadius('2px'),
    '&:hover': {
      backgroundColor: '#f2f2f2',
    },
    '@media (max-width: 768px)': {
      display: 'none',
    },
  },
  mobileMenuButton: {
    display: 'none',
    '@media (max-width: 1024px)': {
      display: 'flex',
    },
  },
  languageSwitcher: {
    '@media (max-width: 768px)': {
      display: 'none',
    },
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
              onClick={styles.header}>
      <div className={styles.headerContainer}>
        {/* Left Section: Logo + Navigation */}
        <div className={styles.leftSection}>
          <div className={styles.logo} onClick={() => handleNavigation(null, 'home')}>
            <Text as="h1" className={styles.logoTitle}>{t('header.title')}</Text>
          </div>
          
          <nav className={styles.nav}>
            <button 
              onClick={() => handleNavigation('/events', null)}
              className={styles.navLink}
            >
              {t('header.nav.naacus2025', 'NAACUS 2025')}
            </button>
            <button 
              onClick={() => handleNavigation(null, 'about')}
              className={styles.navLink}
            >
              {t('header.nav.about')}
            </button>
            <button 
              onClick={() => handleNavigation(null, 'leadership')}
              className={styles.navLink}
            >
              {t('header.nav.leadership')}
            </button>
            <button 
              onClick={() => handleNavigation(null, 'programs')}
              className={styles.navLink}
            >
              {t('header.nav.events')}
            </button>
            <button 
              onClick={() => handleNavigation(null, 'ministries')}
              className={styles.navLink}
            >
              {t('header.nav.ministries')}
            </button>
            <button 
              onClick={() => handleNavigation(null, 'gallery')}
              className={styles.navLink}
            >
              {t('header.nav.gallery')}
            </button>
            <button 
              onClick={() => handleNavigation(null, 'resources')}
              className={styles.navLink}
            >
              {t('header.nav.resources')}
            </button>
            <button 
              onClick={() => handleNavigation(null, 'contact')}
              className={styles.navLink}
            >
              {t('header.nav.contact')}
            </button>
          </nav>
        </div>

        {/* Right Section: Search, Language, Sign In */}
        <div className={styles.rightSection}>
          <div className={styles.searchContainer}>
            <Input 
              className={styles.searchInput}
              placeholder="Search"
              contentAfter={<Search24Regular className={styles.searchIcon} />}
            />
          </div>
          
          <div className={styles.languageSwitcher}>
            <LanguageSwitcher />
          </div>
          
          <Button 
            appearance="subtle"
            className={styles.signInButton}
            icon={<Person24Regular />}
          >
            Sign in
          </Button>

          {/* Mobile Menu */}
          <Menu>
            <MenuTrigger disableButtonEnhancement>
              <Button 
                appearance="subtle"
                icon={<Navigation24Regular />}
                className={styles.mobileMenuButton