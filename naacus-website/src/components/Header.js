import React from 'react';
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
  searchContainer: {
    position: 'relative',
    '@media (max-width: 768px)': {
      display: 'none',
    },
  },
  searchInput: {
    width: '200px',
    height: '32px',
    fontSize: '13px',
    ...shorthands.border('1px', 'solid', '#e5e5e5'),
    ...shorthands.borderRadius('2px'),
    ...shorthands.padding('0', '32px', '0', '8px'),
    '&:focus': {
      ...shorthands.borderColor('#0067b8'),
      outline: 'none',
    },
  },
  searchIcon: {
    position: 'absolute',
    right: '8px',
    top: '50%',
    transform: 'translateY(-50%)',
    color: '#616161',
  },
  iconButton: {
    ...shorthands.padding('8px'),
    minWidth: 'auto',
    height: '32px',
    color: '#262626',
    '&:hover': {
      backgroundColor: '#f2f2f2',
    },
    '@media (max-width: 768px)': {
      display: 'none',
    },
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

function Header() {
  const { t } = useTranslation();
  const styles = useStyles();
  const navigate = useNavigate();
  const location = useLocation();

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
    <header className={styles.header}>
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
              onClick={() => handleNavigation('/membership', null)}
              className={styles.navLink}
            >
              Membership
            </button>
            <button 
              onClick={() => handleNavigation('/volunteer', null)}
              className={styles.navLink}
            >
              Volunteer
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
                className={styles.mobileMenuButton}
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
                <MenuItem onClick={() => handleNavigation('/membership', null)}>Membership</MenuItem>
                <MenuItem onClick={() => handleNavigation('/volunteer', null)}>Volunteer</MenuItem>
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
