import React from 'react';
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

const useStyles = makeStyles({
  header: {
    backgroundColor: tokens.colorBrandBackground,
    color: tokens.colorNeutralForegroundInverted,
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    boxShadow: tokens.shadow8,
    ...shorthands.padding('20px', '0'),
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
    fontSize: '2rem',
    fontWeight: '700',
    letterSpacing: '2px',
    margin: 0,
    color: tokens.colorNeutralForegroundInverted,
  },
  tagline: {
    fontSize: '0.85rem',
    margin: 0,
    opacity: 0.9,
    color: tokens.colorNeutralForegroundInverted,
  },
  nav: {
    display: 'flex',
    ...shorthands.gap('10px'),
    '@media (max-width: 768px)': {
      display: 'none',
    },
  },
  navLink: {
    color: tokens.colorNeutralForegroundInverted,
    textDecoration: 'none',
    fontSize: '1rem',
    fontWeight: '500',
    '&:hover': {
      opacity: 0.8,
    },
  },
  mobileMenu: {
    display: 'none',
    '@media (max-width: 768px)': {
      display: 'block',
    },
  },
});

function Header() {
  const styles = useStyles();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.logo}>
          <Text as="h1" className={styles.logoTitle}>NAACUS</Text>
          <Text className={styles.tagline}>National Association of African Catholics in the United States</Text>
        </div>
        <nav className={styles.nav}>
          <Button 
            appearance="transparent" 
            onClick={() => scrollToSection('home')}
            className={styles.navLink}
          >
            Home
          </Button>
          <Button 
            appearance="transparent" 
            onClick={() => scrollToSection('about')}
            className={styles.navLink}
          >
            About
          </Button>
          <Button 
            appearance="transparent" 
            onClick={() => scrollToSection('programs')}
            className={styles.navLink}
          >
            Events
          </Button>
          <Button 
            appearance="transparent" 
            onClick={() => scrollToSection('gallery')}
            className={styles.navLink}
          >
            Gallery
          </Button>
          <Button 
            appearance="transparent" 
            onClick={() => scrollToSection('resources')}
            className={styles.navLink}
          >
            Resources
          </Button>
          <Button 
            appearance="transparent" 
            onClick={() => scrollToSection('contact')}
            className={styles.navLink}
          >
            Contact
          </Button>
        </nav>
        <div className={styles.mobileMenu}>
          <Menu>
            <MenuTrigger disableButtonEnhancement>
              <Button 
                appearance="transparent" 
                icon={<Navigation24Regular />}
                style={{ color: tokens.colorNeutralForegroundInverted }}
              />
            </MenuTrigger>
            <MenuPopover>
              <MenuList>
                <MenuItem onClick={() => scrollToSection('home')}>Home</MenuItem>
                <MenuItem onClick={() => scrollToSection('about')}>About</MenuItem>
                <MenuItem onClick={() => scrollToSection('objectives')}>Objectives</MenuItem>
                <MenuItem onClick={() => scrollToSection('programs')}>Events & Activities</MenuItem>
                <MenuItem onClick={() => scrollToSection('gallery')}>Gallery</MenuItem>
                <MenuItem onClick={() => scrollToSection('resources')}>Resources</MenuItem>
                <MenuItem onClick={() => scrollToSection('contact')}>Contact</MenuItem>
                <MenuItem onClick={() => scrollToSection('contact')}>Contact</MenuItem>
              </MenuList>
            </MenuPopover>
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
