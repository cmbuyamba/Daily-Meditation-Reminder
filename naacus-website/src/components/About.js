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
    backgroundColor: tokens.colorNeutralBackground1,
    ...shorthands.padding('80px', '20px'),
  },
  aboutTitle: {
    fontSize: '2.5rem',
    textAlign: 'center',
    marginBottom: '60px',
    color: tokens.colorBrandBackground,
    fontWeight: '700',
  },
  aboutContent: {
    maxWidth: '1200px',
    ...shorthands.margin('0', 'auto'),
  },
  aboutIntro: {
    fontSize: '1.2rem',
    lineHeight: '1.8',
    color: tokens.colorNeutralForeground2,
    textAlign: 'center',
    marginBottom: '60px',
    maxWidth: '900px',
    ...shorthands.margin('0', 'auto', '60px'),
  },
  missionValues: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    ...shorthands.gap('30px'),
  },
  missionItem: {
    textAlign: 'center',
    ...shorthands.padding('30px', '20px'),
    ...shorthands.transition('transform', '0.3s', 'ease'),
    '&:hover': {
      transform: 'translateY(-5px)',
    },
  },
  icon: {
    fontSize: '3rem',
    marginBottom: '20px',
  },
  itemTitle: {
    fontSize: '1.5rem',
    marginBottom: '15px',
    color: tokens.colorBrandBackground,
    fontWeight: '600',
  },
  itemText: {
    fontSize: '1rem',
    lineHeight: '1.8',
    color: tokens.colorNeutralForeground2,
  },
});

function About() {
  const styles = useStyles();

  return (
    <section id="about" className={styles.about}>
      <Text as="h2" className={styles.aboutTitle}>About NACCUS</Text>
      <div className={styles.aboutContent}>
        <Text as="p" className={styles.aboutIntro}>
          The National Association of Colleges and Christian Unions (NACCUS) is dedicated 
          to supporting and strengthening Christian communities across college campuses 
          throughout the United States.
        </Text>
        <div className={styles.missionValues}>
          <Card className={styles.missionItem}>
            <div className={styles.icon}>🎯</div>
            <CardHeader
              header={<Text className={styles.itemTitle}>Our Mission</Text>}
              description={
                <Text className={styles.itemText}>
                  To empower Christian students and campus ministries through resources, 
                  networking, and spiritual development opportunities.
                </Text>
              }
            />
          </Card>
          <Card className={styles.missionItem}>
            <div className={styles.icon}>💡</div>
            <CardHeader
              header={<Text className={styles.itemTitle}>Our Vision</Text>}
              description={
                <Text className={styles.itemText}>
                  A thriving network of Christian unions that transforms campus cultures 
                  and equips students to live out their faith.
                </Text>
              }
            />
          </Card>
          <Card className={styles.missionItem}>
            <div className={styles.icon}>🤝</div>
            <CardHeader
              header={<Text className={styles.itemTitle}>Our Values</Text>}
              description={
                <Text className={styles.itemText}>
                  Unity, excellence, authenticity, and service guide everything we do 
                  as we serve campus ministries nationwide.
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
