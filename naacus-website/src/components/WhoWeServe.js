import React from 'react';
import { 
  makeStyles,
  shorthands,
  tokens,
  Text,
  Card
} from '@fluentui/react-components';

const useStyles = makeStyles({
  whoWeServe: {
    backgroundColor: tokens.colorNeutralBackground1,
    ...shorthands.padding('80px', '20px'),
  },
  sectionTitle: {
    fontSize: '2.5rem',
    textAlign: 'center',
    marginBottom: '20px',
    color: tokens.colorBrandBackground,
    fontWeight: '700',
    display: 'block',
  },
  sectionSubtitle: {
    fontSize: '1.2rem',
    textAlign: 'center',
    marginBottom: '60px',
    color: tokens.colorNeutralForeground2,
    maxWidth: '900px',
    margin: '0 auto 60px',
    lineHeight: '1.7',
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
    marginBottom: '40px',
  },
  communityCard: {
    textAlign: 'center',
    ...shorthands.padding('30px', '20px'),
    backgroundColor: tokens.colorNeutralBackground1,
    ...shorthands.borderRadius('8px'),
    ...shorthands.transition('all', '0.3s', 'ease'),
    '&:hover': {
      transform: 'translateY(-3px)',
      boxShadow: tokens.shadow8,
    },
  },
  communityIcon: {
    fontSize: '2.5rem',
    marginBottom: '15px',
  },
  communityText: {
    fontSize: '1.1rem',
    fontWeight: '600',
    color: tokens.colorNeutralForeground1,
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
  },
});

function WhoWeServe() {
  const styles = useStyles();

  const communities = [
    { icon: '✈️', text: 'Immigrants' },
    { icon: '🌍', text: 'Migrants' },
    { icon: '🏡', text: 'Refugees' },
    { icon: '🎓', text: 'Students' },
    { icon: '💼', text: 'Professionals' },
    { icon: '👨‍👩‍👧‍👦', text: 'Families' },
    { icon: '👴', text: 'Elders' },
    { icon: '🌟', text: 'Diaspora' }
  ];

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
