import React from 'react';
import { 
  makeStyles,
  shorthands,
  tokens,
  Text,
  Card,
  CardHeader
} from '@fluentui/react-components';

const useStyles = makeStyles({
  about: {
    backgroundColor: '#faf9f8',
    ...shorthands.padding('80px', '20px'),
  },
  aboutTitle: {
    fontSize: '2.75rem',
    textAlign: 'center',
    marginBottom: '24px',
    color: tokens.colorNeutralForeground1,
    fontWeight: '600',
    display: 'block',
    letterSpacing: '-0.02em',
  },
  aboutContent: {
    maxWidth: '1200px',
    ...shorthands.margin('0', 'auto'),
  },
  aboutIntro: {
    fontSize: '1.125rem',
    lineHeight: '1.7',
    color: tokens.colorNeutralForeground2,
    textAlign: 'center',
    marginBottom: '64px',
    maxWidth: '800px',
    ...shorthands.margin('0', 'auto', '64px'),
    display: 'block',
  },
  missionValues: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    ...shorthands.gap('30px'),
  },
  missionItem: {
    textAlign: 'center',
    ...shorthands.padding('40px', '32px'),
    ...shorthands.transition('all', '0.3s', 'ease'),
    backgroundColor: tokens.colorNeutralBackground1,
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
    ...shorthands.borderRadius('8px'),
    '&:hover': {
      transform: 'translateY(-8px)',
      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
    },
  },
  icon: {
    fontSize: '3rem',
    marginBottom: '20px',
    display: 'block',
  },
  itemTitle: {
    fontSize: '1.375rem',
    marginBottom: '12px',
    color: tokens.colorNeutralForeground1,
    fontWeight: '600',
  },
  itemText: {
    fontSize: '1rem',
    lineHeight: '1.6',
    color: tokens.colorNeutralForeground2,
  },
});

function About() {
  const styles = useStyles();

  return (
    <section id="about" className={styles.about}>
      <Text as="h2" className={styles.aboutTitle}>About NAACUS</Text>
      <div className={styles.aboutContent}>
        <Text as="p" className={styles.aboutIntro}>
          The National Association of African Catholics in the United States (NAACUS) brings together 
          African Catholics and their families to foster faith, leadership, and service in the Church 
          across the United States. Rooted in the Gospel and our motto "Together with Christ," we 
          welcome members into an active community for fellowship, workshops, and collaborative ministries.
        </Text>
        <div className={styles.missionValues}>
          <Card className={styles.missionItem}>
            <div className={styles.icon}>🎯</div>
            <CardHeader
              header={<Text className={styles.itemTitle}>Our Mission</Text>}
              description={
                <Text className={styles.itemText}>
                  To gather African Catholic communities in the U.S., promote their faith, 
                  and ensure their full and active participation in the life of the Church.
                </Text>
              }
            />
          </Card>
          <Card className={styles.missionItem}>
            <div className={styles.icon}>✨</div>
            <CardHeader
              header={<Text className={styles.itemTitle}>Our Vision</Text>}
              description={
                <Text className={styles.itemText}>
                  A vibrant and visible African Catholic community that contributes its gifts 
                  to the Church and society—confident in identity, generous in service, 
                  and engaged in society.
                </Text>
              }
            />
          </Card>
          <Card className={styles.missionItem}>
            <div className={styles.icon}>🤝</div>
            <CardHeader
              header={<Text className={styles.itemTitle}>Our Motto</Text>}
              description={
                <Text className={styles.itemText}>
                  "Together with Christ" — We build welcoming networks of fellowship, workshops, 
                  and community initiatives that uplift people, celebrate culture, and advance 
                  the common good.
                </Text>
              }
            />
          </Card>
        </div>
      </div>
    </section>
  );
}

export default About;
