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
    display: 'block',
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
    display: 'block',
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
