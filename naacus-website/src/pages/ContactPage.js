import React from 'react';
import { makeStyles, shorthands, tokens } from '@fluentui/react-components';
import Contact from '../components/Contact';

const useStyles = makeStyles({
  page: {
    paddingTop: '114px',
    backgroundColor: tokens.colorNeutralBackground1,
    minHeight: '100vh',
    ...shorthands.padding('0', '20px', '60px'),
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
});

export default function ContactPage() {
  const styles = useStyles();
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <Contact />
      </div>
    </div>
  );
}
