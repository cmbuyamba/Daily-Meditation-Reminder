import React from 'react';
import { makeStyles, shorthands, tokens } from '@fluentui/react-components';
import Leadership from '../components/Leadership';

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

export default function LeadershipPage() {
  const styles = useStyles();
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <Leadership />
      </div>
    </div>
  );
}
