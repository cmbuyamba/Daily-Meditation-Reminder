import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  makeStyles,
  shorthands,
  Button
} from '@fluentui/react-components';
import { PersonAdd24Regular } from '@fluentui/react-icons';

const useStyles = makeStyles({
  floatingButton: {
    position: 'fixed',
    bottom: '30px',
    right: '30px',
    zIndex: 1000,
    boxShadow: '0 8px 24px rgba(40, 167, 69, 0.3)',
    ...shorthands.transition('all', '0.3s', 'ease'),
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: '0 12px 32px rgba(40, 167, 69, 0.4)',
    },
    '@media (max-width: 768px)': {
      bottom: '20px',
      right: '20px',
    },
  },
  hidden: {
    opacity: 0,
    pointerEvents: 'none',
    transform: 'translateY(100px)',
  },
  visible: {
    opacity: 1,
    pointerEvents: 'auto',
    transform: 'translateY(0)',
  },
});

function SubscribeButton() {
  const { t } = useTranslation();
  const styles = useStyles();
  const navigate = useNavigate();
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button after scrolling down 300px
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToNewsletter = () => {
    // If not on home page, navigate to home page first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation and then scroll
      setTimeout(() => {
        const element = document.getElementById('newsletter');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Already on home page, just scroll
      const element = document.getElementById('newsletter');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <Button
      appearance="primary"
      size="large"
      icon={<PersonAdd24Regular />}
      onClick={scrollToNewsletter}
      className={`${styles.floatingButton} ${isVisible ? styles.visible : styles.hidden}`}
      style={{
        backgroundColor: '#28a745',
        borderColor: '#28a745',
        fontSize: '1rem',
        padding: '20px 32px',
        height: 'auto',
        fontWeight: '600',
      }}
    >
      {t('joinNowButton.text')}
    </Button>
  );
}

export default SubscribeButton;