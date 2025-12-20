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
    backgroundColor: tokens.colorNeutralBackground1,
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
    maxWidth: '1200px',
    ...shorthands.margin('0', 'auto'),
  },
  activitiesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    ...shorthands.gap('30px'),
  },
  activityCard: {
    ...shorthands.padding('32px', '24px'),
    ...shorthands.transition('all', '0.3s', 'ease'),
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
    ...shorthands.borderRadius('8px'),
    backgroundColor: tokens.colorNeutralBackground1,
    '&:hover': {
      transform: 'translateY(-8px)',
      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
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
