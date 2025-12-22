import React from 'react';
import { 
  makeStyles,
  shorthands,
  tokens
} from '@fluentui/react-components';

const useStyles = makeStyles({
  page: {
    paddingTop: '114px',
    backgroundColor: tokens.colorNeutralBackground1,
    minHeight: '100vh',
    ...shorthands.padding('0', '20px', '60px'),
    '@media (max-width: 768px)': {
      paddingTop: '100px',
      ...shorthands.padding('0', '12px', '40px'),
    },
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
});

export default function PageWrapper({ children }) {
  const styles = useStyles();
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        {children}
      </div>
    </div>
  );
}
