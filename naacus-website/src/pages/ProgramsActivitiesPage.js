import React from 'react';
import { makeStyles, shorthands } from '@fluentui/react-components';
import Programs from '../components/Programs';

const useStyles = makeStyles({
  pageContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    ...shorthands.padding('60px', '20px', '80px'),
    marginTop: '114px',
  },
});

function ProgramsActivitiesPage() {
  const styles = useStyles();

  return (
    <div className={styles.pageContainer}>
      <Programs />
    </div>
  );
}

export default ProgramsActivitiesPage;
