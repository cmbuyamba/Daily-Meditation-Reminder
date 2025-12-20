import React, { useState, useEffect } from 'react';
import { 
  makeStyles,
  shorthands,
  Button, tokens
} from '@fluentui/react-components';
import { ArrowUp24Regular } from '@fluentui/react-icons';

const useStyles = makeStyles({
  backToTop: {
    position: 'fixed',
    bottom: '40px',
    right: '40px',
    zIndex: 1000,
    opacity: 0,
    visibility: 'hidden',
    transitionProperty: 'opacity, visibility, transform',
    transitionDuration: '0.3s',
    transitionTimingFunction: 'ease-in-out',
    '@media (max-width: 768px)': {
      bottom: '20px',
      right: '20px',
    },
  },
  visible: {
    opacity: 1,
    visibility: 'visible',
  },
  button: {
    ...shorthands.padding('12px', '24px'),
    ...shorthands.borderRadius('50px'),
    backgroundColor: tokens.colorNeutralBackground1,
    color: tokens.colorNeutralForeground1,
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
    fontSize: '16px',
    fontWeight: '600',
    ':hover': {
      transform: 'translateY(-2px)',
      boxShadow: '0 6px 16px rgba(0, 0, 0, 0.2)',
      backgroundColor: tokens.colorNeutralBackground1Hover,
    },
  },
});

function BackToTop() {
  const styles = useStyles();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={`${styles.backToTop} ${isVisible ? styles.visible : ''}`}>
      <Button
        appearance="subtle"
        icon={<ArrowUp24Regular />}
        iconPosition="after"
        onClick={scrollToTop}
        className={styles.button}
        aria-label="Back to top"
      >
        Back to Top
      </Button>
    </div>
  );
}

export default BackToTop;
