import React from 'react';
import { 
  makeStyles,
  shorthands,
  tokens,
  Text,
  Card,
  CardHeader
} from '@fluentui/react-components';
import { 
  People24Regular,
  Globe24Regular,
  Heart24Regular,
  BookInformation24Regular,
  Handshake24Regular
} from '@fluentui/react-icons';

const useStyles = makeStyles({
  whatWeDo: {
    backgroundColor: '#f5f5f5',
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
    maxWidth: '800px',
    margin: '0 auto 60px',
    lineHeight: '1.6',
    display: 'block',
  },
  content: {
    maxWidth: '1200px',
    ...shorthands.margin('0', 'auto'),
  },
  activitiesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    ...shorthands.gap('30px'),
  },
  activityCard: {
    ...shorthands.padding('30px', '20px'),
    ...shorthands.transition('all', '0.3s', 'ease'),
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: tokens.shadow16,
    },
  },
  iconWrapper: {
    fontSize: '2.5rem',
    marginBottom: '20px',
    color: tokens.colorBrandBackground,
  },
  cardTitle: {
    fontSize: '1.3rem',
    marginBottom: '12px',
    color: tokens.colorBrandBackground,
    fontWeight: '600',
    display: 'block',
  },
  cardText: {
    fontSize: '1rem',
    lineHeight: '1.7',
    color: tokens.colorNeutralForeground2,
    display: 'block',
  },
});

function WhatWeDo() {
  const styles = useStyles();

  const activities = [
    {
      icon: <People24Regular />,
      title: 'Pastoral Care & Parish Connection',
      description: 'Supporting African Catholic communities and strengthening their connection with parishes, dioceses, and national Catholic organizations.'
    },
    {
      icon: <Globe24Regular />,
      title: 'Heritage & Culture Awareness',
      description: 'Raising awareness of the presence, heritage, and cultures of African Catholics in the U.S., encouraging culturally rooted liturgy including ethnic languages and traditions.'
    },
    {
      icon: <Heart24Regular />,
      title: 'Family Life & Vocations',
      description: 'Building up family life and vocations, nurturing leadership among laity, youth, young adults, and those discerning priesthood, religious life, and other ministries.'
    },
    {
      icon: <BookInformation24Regular />,
      title: 'Evangelization & Catechesis',
      description: 'Promoting evangelization, catechesis, and service, empowering African Catholics to witness to Christ in their local parishes and communities.'
    },
    {
      icon: <Handshake24Regular />,
      title: 'Collaboration & Advocacy',
      description: 'Collaborating widely—dialoguing with diocesan offices, national Catholic partners, and other ecclesial communities—and advocating for social justice in African communities and U.S. society.'
    }
  ];

  return (
    <section id="what-we-do" className={styles.whatWeDo}>
      <Text as="h2" className={styles.sectionTitle}>What We Do</Text>
      <Text as="p" className={styles.sectionSubtitle}>
        Guided by our mission, NAACUS works to ensure African Catholics in the United States 
        can fully share their gifts, participate actively in the Church, and witness Christ 
        in family life, parish life, and public life.
      </Text>
      <div className={styles.content}>
        <div className={styles.activitiesGrid}>
          {activities.map((activity, index) => (
            <Card key={index} className={styles.activityCard}>
              <div className={styles.iconWrapper}>
                {activity.icon}
              </div>
              <CardHeader
                header={<Text className={styles.cardTitle}>{activity.title}</Text>}
                description={
                  <Text className={styles.cardText}>
                    {activity.description}
                  </Text>
                }
              />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatWeDo;
