import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  makeStyles,
  shorthands,
  Button
} from '@fluentui/react-components';
import { ArrowUp24Regular } from '@fluentui/react-icons';

const useStyles = makeStyles({
  backToTop: {
    position: 'fixed',
    bottom: '88px',
    right: '4px',
    zIndex: 1200,
    opacity: 0,
    transform: 'translateY(20px)',
    visibility: 'hidden',
    transitionProperty: 'opacity, visibility, transform',
    transitionDuration: '0.3s',
    transitionTimingFunction: 'ease-in-out',
    '@media (max-width: 768px)': {
      bottom: '80px',
      right: '4px',
    },
  },
  visible: {
    opacity: 1,
    transform: 'translateY(0)',
    visibility: 'visible',
  },
  button: {
    ...shorthands.padding('14px', '28px'),
    ...shorthands.borderRadius('50px'),
    backgroundColor: '#0067b8',
    color: '#ffffff',
    boxShadow: '0 6px 16px rgba(0, 103, 184, 0.35)',
    fontSize: '15px',
    fontWeight: '600',
    border: 'none',
    minWidth: 'fit-content',
    ':hover': {
      transform: 'translateY(-3px)',
      boxShadow: '0 8px 20px rgba(0, 103, 184, 0.45)',
      backgroundColor: '#005a9e',
    },
    '@media (max-width: 768px)': {
      ...shorthands.padding('12px'),
      minWidth: '52px',
      width: '52px',
      height: '52px',
      ...shorthands.borderRadius('26px'),
      '& [class*="fui-Button__icon"]': {
        marginLeft: '0 !important',
      },
    },
  },
  textShowDesktop: {
    display: 'inline',
    '@media (max-width: 768px)': {
      display: 'none',
    },
  },
});

function BackToTop() {
  const { t } = useTranslation();
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
    <div 
      style={{
        position: 'fixed',
        bottom: '85px',
        right: '4px',
        zIndex: 1200,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        visibility: isVisible ? 'visible' : 'hidden',
        transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out, visibility 0.3s ease-in-out',
        pointerEvents: isVisible ? 'auto' : 'none',
      }}
    >
      <Button
        appearance="subtle"
        icon={<ArrowUp24Regular />}
        iconPosition="after"
        onClick={scrollToTop}
        className={styles.button}
        aria-label={t('backToTop')}
        style={{
          padding: '12px 24px',
          borderRadius: '50px',
          backgroundColor: '#0067b8',
          color: '#ffffff',
          boxShadow: '0 6px 16px rgba(0, 103, 184, 0.35)',
          fontSize: '14px',
          fontWeight: '600',
          border: 'none',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-3px)';
          e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 103, 184, 0.45)';
          e.currentTarget.style.backgroundColor = '#005a9e';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 6px 16px rgba(0, 103, 184, 0.35)';
          e.currentTarget.style.backgroundColor = '#0067b8';
        }}
      >
        <span className={styles.textShowDesktop}>
          {t('backToTop')}
        </span>
      </Button>
    </div>
  );
}

export default BackToTop;
