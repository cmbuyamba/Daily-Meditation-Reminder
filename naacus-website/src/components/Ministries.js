import React from 'react';
import { 
  makeStyles,
  shorthands,
  tokens,
  Text
} from '@fluentui/react-components';
import { 
  Heart24Regular,
  People24Regular,
  PeopleTeam24Regular,
  Book24Regular,
  Megaphone24Regular,
  News24Regular,
  CalendarLtr24Regular,
  Money24Regular,
  Video24Regular,
  PersonAccounts24Regular,
  HandRight24Regular,
  MusicNote224Regular
} from '@fluentui/react-icons';

const useStyles = makeStyles({
  ministries: {
    backgroundColor: '#faf9f8',
    ...shorthands.padding('80px', '20px'),
  },
  sectionTitle: {
    fontSize: '2.75rem',
    textAlign: 'center',
    marginBottom: '24px',
    color: tokens.colorNeutralForeground1,
    fontWeight: '600',
    display: 'block',
    letterSpacing: '-0.02em',
  },
  sectionSubtitle: {
    fontSize: '1.125rem',
    lineHeight: '1.7',
    color: tokens.colorNeutralForeground2,
    textAlign: 'center',
    marginBottom: '64px',
    maxWidth: '800px',
    ...shorthands.margin('0', 'auto', '64px'),
    display: 'block',
  },
  content: {
    maxWidth: '1200px',
    ...shorthands.margin('0', 'auto'),
  },
  ministriesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    ...shorthands.gap('24px'),
    marginBottom: '48px',
  },
  ministryCard: {
    ...shorthands.padding('32px', '24px'),
    backgroundColor: tokens.colorNeutralBackground1,
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
    ...shorthands.borderRadius('8px'),
    ...shorthands.transition('all', '0.3s', 'ease'),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    '&:hover': {
      boxShadow: '0 4px 16px rgba(0, 0, 0, 0.12)',
      transform: 'translateY(-4px)',
    },
  },
  ministryIcon: {
    color: tokens.colorBrandBackground,
    marginBottom: '16px',
    fontSize: '48px',
  },
  ministryTitle: {
    fontSize: '1.125rem',
    fontWeight: '600',
    marginBottom: '8px',
    color: tokens.colorNeutralForeground1,
    display: 'block',
  },
  ministryDescription: {
    fontSize: '0.9rem',
    lineHeight: '1.5',
    color: tokens.colorNeutralForeground2,
    display: 'block',
  },
  callToAction: {
    ...shorthands.padding('48px', '40px'),
    backgroundColor: tokens.colorNeutralBackground1,
    ...shorthands.borderRadius('8px'),
    textAlign: 'center',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
  },
  ctaTitle: {
    fontSize: '1.75rem',
    fontWeight: '600',
    marginBottom: '16px',
    color: tokens.colorNeutralForeground1,
    display: 'block',
  },
  ctaText: {
    fontSize: '1.125rem',
    lineHeight: '1.6',
    color: tokens.colorNeutralForeground2,
    display: 'block',
  },
});

function Ministries() {
  const styles = useStyles();

  const ministries = [
    {
      icon: <Megaphone24Regular />,
      title: 'Advocacy Ministry',
      description: 'Promoting social justice and advocating for African communities in the United States.'
    },
    {
      icon: <PersonAccounts24Regular />,
      title: "Women's Ministry",
      description: 'Empowering women through retreats, workshops, and fellowship activities.'
    },
    {
      icon: <PeopleTeam24Regular />,
      title: 'Youth Ministry',
      description: 'Nurturing young Catholics through faith formation, activities, and leadership development.'
    },
    {
      icon: <Heart24Regular />,
      title: 'Young Adults Ministry',
      description: 'Supporting young adults (ages 19-39) in their spiritual journey and community life.'
    },
    {
      icon: <People24Regular />,
      title: "Men's Ministry",
      description: 'Building brotherhood and strengthening faith among African Catholic men.'
    },
    {
      icon: <HandRight24Regular />,
      title: 'Ministry for People with Disabilities',
      description: 'Creating inclusive opportunities for full participation in church life.'
    },
    {
      icon: <Book24Regular />,
      title: 'Resource Ministry',
      description: 'Providing educational materials and resources for spiritual growth.'
    },
    {
      icon: <Money24Regular />,
      title: 'Finance Ministry',
      description: 'Managing financial resources and supporting organizational sustainability.'
    },
    {
      icon: <Video24Regular />,
      title: 'Media & Public Relations Ministry',
      description: 'Sharing our story and engaging with communities through various media platforms.'
    },
    {
      icon: <News24Regular />,
      title: 'Newsletter Ministry',
      description: 'Keeping members informed through regular communications and updates.'
    },
    {
      icon: <CalendarLtr24Regular />,
      title: 'Liturgy Committee',
      description: 'Planning and coordinating meaningful worship experiences and celebrations.'
    },
    {
      icon: <MusicNote224Regular />,
      title: 'ANEC Ministry',
      description: 'Organizing the African National Eucharistic Congress and related activities.'
    },
  ];

  return (
    <section id="ministries" className={styles.ministries}>
      <div className={styles.content}>
        <Text as="h2" className={styles.sectionTitle}>Fellowship & Ministries</Text>
        <Text className={styles.sectionSubtitle}>
          NAACUS calls its members to get actively involved in various activities, maximizing their 
          gifts as a faith and worship community in the United States. Through fellowship, workshops, 
          and programs, we welcome members to help form a vibrant and active church community.
        </Text>

        <div className={styles.ministriesGrid}>
          {ministries.map((ministry, index) => (
            <div key={index} className={styles.ministryCard}>
              <div className={styles.ministryIcon}>
                {ministry.icon}
              </div>
              <Text className={styles.ministryTitle}>{ministry.title}</Text>
              <Text className={styles.ministryDescription}>{ministry.description}</Text>
            </div>
          ))}
        </div>

        <div className={styles.callToAction}>
          <Text className={styles.ctaTitle}>Get Involved</Text>
          <Text className={styles.ctaText}>
            Join us in building a better church community. Your talents and expertise are needed 
            in various ministries and committees. Together, we can make a meaningful impact in 
            advancing the mission of NAACUS and serving African Catholics in the United States.
          </Text>
        </div>
      </div>
    </section>
  );
}

export default Ministries;
