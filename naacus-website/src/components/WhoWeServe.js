import React from 'react';
import { 
  makeStyles,
  shorthands,
  tokens,
  Text,
  Card
} from '@fluentui/react-components';
import { dataService } from '../services/dataService';

const useStyles = makeStyles({
  whoWeServe: {
    backgroundColor: '#faf9f8',
    ...shorthands.padding('50px', '20px'),
  },
  sectionTitle: {
    fontSize: '2.75rem',
    textAlign: 'center',
    marginBottom: '16px',
    color: tokens.colorNeutralForeground1,
    fontWeight: '600',
    display: 'block',
    letterSpacing: '-0.02em',
  },
  sectionSubtitle: {
    fontSize: '1.125rem',
    textAlign: 'center',
    marginBottom: '40px',
    color: tokens.colorNeutralForeground2,
    maxWidth: '800px',
    margin: '0 auto 40px',
    lineHeight: '1.6',
    display: 'block',
  },
  content: {
    maxWidth: '1000px',
    ...shorthands.margin('0', 'auto'),
  },
  communityList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    ...shorthands.gap('20px'),
    marginBottom: '30px',
  },
  communityCard: {
    textAlign: 'center',
    ...shorthands.padding('24px', '16px'),
    backgroundColor: tokens.colorNeutralBackground1,
    ...shorthands.borderRadius('8px'),
    ...shorthands.transition('all', '0.3s', 'ease'),
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.05)',
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: tokens.shadow8,
    },
  },
  communityIcon: {
    fontSize: '2.5rem',
    marginBottom: '15px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  communityText: {
    fontSize: '1.1rem',
    fontWeight: '600',
    color: tokens.colorNeutralForeground1,
    textAlign: 'center',
  },
  closingText: {
    fontSize: '1.15rem',
    textAlign: 'center',
    color: tokens.colorBrandBackground,
    fontWeight: '500',
    lineHeight: '1.8',
    ...shorthands.padding('30px', '20px'),
    backgroundColor: '#f0f7ff',
    ...shorthands.borderRadius('8px'),
      display: 'block',
  },
});

function WhoWeServe() {
  const styles = useStyles();

  const communities = dataService.getCommunitiesServed();

  return (
    <section id="who-we-serve" className={styles.whoWeServe}>
      <Text as="h2" className={styles.sectionTitle}>Who We Serve</Text>
      <Text as="p" className={styles.sectionSubtitle}>
        Our network includes people from across the African continent and diaspora who are 
        building their lives in the United States and seeking a spiritual home that honors 
        both Catholic faith and African heritage.
      </Text>
      <div className={styles.content}>
        <div className={styles.communityList}>
          {communities.map((community, index) => (
            <Card key={index} className={styles.communityCard}>
              <div className={styles.communityIcon}>{community.icon}</div>
              <Text className={styles.communityText}>{community.text}</Text>
            </Card>
          ))}
        </div>
        <Text as="p" className={styles.closingText}>
          NAACUS welcomes all who seek to connect with the vibrant African Catholic community 
          in the United States—a place where faith and heritage come together in service to Christ and His Church.
        </Text>
      </div>
    </section>
  );
}

export default WhoWeServe;
