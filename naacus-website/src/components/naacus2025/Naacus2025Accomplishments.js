import React from 'react';
import { 
  makeStyles,
  shorthands,
  tokens,
  Text,
  Card,
  Button
} from '@fluentui/react-components';
import { 
  Calendar24Regular, 
  People24Regular, 
  Location24Regular,
  Clock24Regular,
  Video24Regular,
  Image24Regular
} from '@fluentui/react-icons';

const useStyles = makeStyles({
  accomplishments: {
    backgroundColor: '#faf9f8',
    ...shorthands.padding('60px', '20px'),
  },
  hero: {
    position: 'relative',
    background: `linear-gradient(135deg, #1a3a52 0%, #2d5a7b 50%, #3d6fa8 100%)`,
    color: tokens.colorNeutralForegroundInverted,
    ...shorthands.padding('80px', '20px'),
    marginTop: '54px',
    paddingTop: '80px',
    textAlign: 'center',
    marginBottom: '40px',
    overflow: 'hidden',
  },
  heroContent: {
    position: 'relative',
    zIndex: 2,
    maxWidth: '1000px',
    margin: '0 auto',
  },
  badge: {
    display: 'inline-block',
    backgroundColor: '#E8D4C0',
    color: '#1a3a52',
    fontSize: '0.9rem',
    fontWeight: '700',
    ...shorthands.padding('8px', '20px'),
    ...shorthands.borderRadius('30px'),
    marginBottom: '20px',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    boxShadow: '0 4px 15px rgba(232, 212, 192, 0.35)',
  },
  title: {
    fontSize: '3.5rem',
    fontWeight: '700',
    marginBottom: '16px',
    color: tokens.colorNeutralForegroundInverted,
    display: 'block',
    textAlign: 'center',
    lineHeight: '1.2',
    letterSpacing: '-0.02em',
    textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
    '@media (max-width: 768px)': {
      fontSize: '2.2rem',
    },
  },
  subtitle: {
    fontSize: '1.5rem',
    marginBottom: '24px',
    fontWeight: '400',
    color: tokens.colorNeutralForegroundInverted,
    display: 'block',
    textAlign: 'center',
    lineHeight: '1.4',
    opacity: 0.95,
    '@media (max-width: 768px)': {
      fontSize: '1.2rem',
    },
  },
  conferenceInfo: {
    maxWidth: '900px',
    margin: '0 auto 40px',
    ...shorthands.padding('30px'),
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    ...shorthands.borderRadius('12px'),
    backdropFilter: 'blur(10px)',
  },
  infoGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    ...shorthands.gap('20px'),
    marginTop: '20px',
  },
  infoItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    ...shorthands.gap('8px'),
  },
  infoIcon: {
    fontSize: '1.5rem',
    color: '#E8D4C0',
  },
  infoLabel: {
    fontSize: '0.9rem',
    fontWeight: '500',
    color: 'rgba(255, 255, 255, 0.8)',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
  infoValue: {
    fontSize: '1.1rem',
    fontWeight: '600',
    color: tokens.colorNeutralForegroundInverted,
    textAlign: 'center',
  },
  content: {
    maxWidth: '1200px',
    ...shorthands.margin('0', 'auto'),
  },
  sectionTitle: {
    fontSize: '2.5rem',
    textAlign: 'center',
    marginBottom: '16px',
    marginTop: '40px',
    color: tokens.colorNeutralForeground1,
    fontWeight: '600',
    display: 'block',
    letterSpacing: '-0.02em',
  },
  sectionDescription: {
    fontSize: '1.125rem',
    textAlign: 'center',
    marginBottom: '40px',
    color: tokens.colorNeutralForeground2,
    maxWidth: '800px',
    margin: '0 auto 40px',
    lineHeight: '1.6',
    display: 'block',
  },
  eventsContainer: {
    display: 'flex',
    flexDirection: 'column',
    ...shorthands.gap('30px'),
    marginBottom: '40px',
  },
  eventCard: {
    ...shorthands.padding('30px'),
    ...shorthands.transition('all', '0.3s', 'ease'),
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
    ...shorthands.borderRadius('12px'),
    backgroundColor: tokens.colorNeutralBackground1,
    ...shorthands.borderLeft('4px', 'solid', '#E8D4C0'),
    '&:hover': {
      transform: 'translateX(8px)',
      boxShadow: tokens.shadow16,
    },
  },
  eventHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '20px',
    ...shorthands.gap('20px'),
    flexWrap: 'wrap',
  },
  eventTitleSection: {
    flex: '1',
    minWidth: '250px',
  },
  eventDay: {
    fontSize: '0.9rem',
    fontWeight: '700',
    color: '#1a3a52',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    marginBottom: '8px',
    display: 'block',
  },
  eventTitle: {
    fontSize: '1.8rem',
    fontWeight: '600',
    marginBottom: '8px',
    color: tokens.colorNeutralForeground1,
    display: 'block',
    lineHeight: '1.3',
  },
  eventPresenter: {
    fontSize: '1rem',
    color: tokens.colorNeutralForeground2,
    fontStyle: 'italic',
    display: 'block',
  },
  eventMeta: {
    display: 'flex',
    flexDirection: 'column',
    ...shorthands.gap('8px'),
    alignItems: 'flex-end',
  },
  metaItem: {
    display: 'flex',
    alignItems: 'center',
    ...shorthands.gap('8px'),
    fontSize: '0.95rem',
    color: tokens.colorNeutralForeground2,
  },
  metaIcon: {
    fontSize: '1.2rem',
    color: '#1a3a52',
  },
  eventContent: {
    marginTop: '20px',
  },
  eventDescription: {
    fontSize: '1rem',
    lineHeight: '1.6',
    color: tokens.colorNeutralForeground2,
    marginBottom: '20px',
    display: 'block',
  },
  mediaSection: {
    display: 'flex',
    ...shorthands.gap('15px'),
    marginTop: '20px',
    flexWrap: 'wrap',
  },
  mediaPlaceholder: {
    ...shorthands.padding('20px', '30px'),
    backgroundColor: tokens.colorNeutralBackground3,
    ...shorthands.borderRadius('8px'),
    display: 'flex',
    alignItems: 'center',
    ...shorthands.gap('10px'),
    fontSize: '0.95rem',
    color: tokens.colorNeutralForeground2,
    ...shorthands.border('2px', 'dashed', tokens.colorNeutralStroke1),
  },
  placeholderIcon: {
    fontSize: '1.5rem',
    color: tokens.colorBrandBackground,
  },
  ctaSection: {
    textAlign: 'center',
    ...shorthands.padding('60px', '20px'),
    marginTop: '40px',
  },
  ctaTitle: {
    fontSize: '2rem',
    fontWeight: '600',
    marginBottom: '20px',
    color: tokens.colorNeutralForeground1,
    display: 'block',
  },
  ctaDescription: {
    fontSize: '1.2rem',
    marginBottom: '30px',
    color: tokens.colorNeutralForeground2,
    maxWidth: '700px',
    margin: '0 auto 30px',
    lineHeight: '1.6',
    display: 'block',
  },
  ctaButton: {
    backgroundColor: '#E8D4C0',
    color: '#1a3a52',
    fontSize: '1.1rem',
    fontWeight: '700',
    ...shorthands.padding('20px', '40px'),
    height: 'auto',
    ...shorthands.borderRadius('30px'),
    boxShadow: '0 4px 20px rgba(232, 212, 192, 0.35)',
    ...shorthands.transition('all', '0.3s', 'ease'),
    '&:hover': {
      backgroundColor: '#F0E0D4',
      transform: 'scale(1.05)',
      boxShadow: '0 6px 25px rgba(232, 212, 192, 0.5)',
    },
  },
});

function Naacus2025Accomplishments() {
  const styles = useStyles();

  // Conference events extracted from the schedule
  const events = [
    {
      id: 1,
      day: 'Friday, July 18, 2025',
      time: '10:00 AM - 4:00 PM',
      title: "Men's Retreat: Who Do You Say You Really Are?",
      presenter: 'Deacon Joseph LeMay',
      location: 'St. Francis DeSales',
      summary: 'Content and summary to be provided',
      videoPlaceholder: true,
      photosPlaceholder: true,
    },
    {
      id: 2,
      day: 'Friday, July 18, 2025',
      time: '10:00 AM - 4:00 PM',
      title: "Women's Retreat: Living a Life of Blessing and Thanksgiving - Challenges and Blessings",
      presenter: 'Sr. Frances Nwaneri',
      location: 'St. Francis DeSales',
      summary: 'Content and summary to be provided',
      videoPlaceholder: true,
      photosPlaceholder: true,
    },
    {
      id: 3,
      day: 'Friday, July 18, 2025',
      time: '6:00 PM - 9:00 PM',
      title: 'Opening Mass and Reception',
      presenter: 'Bishop Brendan J. Cahill',
      location: 'St. Matthias School',
      summary: 'Content and summary to be provided',
      videoPlaceholder: true,
      photosPlaceholder: true,
    },
    {
      id: 4,
      day: 'Saturday, July 19, 2025',
      time: '8:00 AM - 9:00 AM',
      title: 'Registration and Continental Breakfast',
      presenter: 'NAACUS Team',
      location: 'St. Francis DeSales',
      summary: 'Content and summary to be provided',
      videoPlaceholder: false,
      photosPlaceholder: true,
    },
    {
      id: 5,
      day: 'Saturday, July 19, 2025',
      time: '9:00 AM - 10:30 AM',
      title: 'Keynote Address: United in Christ for Evangelization',
      presenter: 'To be announced',
      location: 'St. Francis DeSales',
      summary: 'Content and summary to be provided',
      videoPlaceholder: true,
      photosPlaceholder: true,
    },
    {
      id: 6,
      day: 'Saturday, July 19, 2025',
      time: '11:00 AM - 12:30 PM',
      title: 'Workshops Session 1',
      presenter: 'Various Presenters',
      location: 'St. Francis DeSales',
      summary: 'Content and summary to be provided',
      videoPlaceholder: true,
      photosPlaceholder: true,
    },
    {
      id: 7,
      day: 'Saturday, July 19, 2025',
      time: '12:30 PM - 1:30 PM',
      title: 'Lunch Break',
      presenter: 'NAACUS Team',
      location: 'St. Francis DeSales',
      summary: 'Content and summary to be provided',
      videoPlaceholder: false,
      photosPlaceholder: true,
    },
    {
      id: 8,
      day: 'Saturday, July 19, 2025',
      time: '2:00 PM - 3:30 PM',
      title: 'Workshops Session 2',
      presenter: 'Various Presenters',
      location: 'St. Francis DeSales',
      summary: 'Content and summary to be provided',
      videoPlaceholder: true,
      photosPlaceholder: true,
    },
    {
      id: 9,
      day: 'Saturday, July 19, 2025',
      time: '4:00 PM - 5:00 PM',
      title: 'Cultural Performance and Exhibition',
      presenter: 'African Catholic Communities',
      location: 'St. Francis DeSales',
      summary: 'Content and summary to be provided',
      videoPlaceholder: true,
      photosPlaceholder: true,
    },
    {
      id: 10,
      day: 'Saturday, July 19, 2025',
      time: '6:00 PM - 10:00 PM',
      title: 'Gala Dinner and Cultural Night',
      presenter: 'NAACUS Team',
      location: 'St. Francis DeSales',
      summary: 'Content and summary to be provided',
      videoPlaceholder: true,
      photosPlaceholder: true,
    },
    {
      id: 11,
      day: 'Sunday, July 20, 2025',
      time: '9:00 AM - 11:00 AM',
      title: 'Closing Mass and Commissioning',
      presenter: 'Bishop and Concelebrants',
      location: 'St. Matthias School',
      summary: 'Content and summary to be provided',
      videoPlaceholder: true,
      photosPlaceholder: true,
    },
    {
      id: 12,
      day: 'Sunday, July 20, 2025',
      time: '11:30 AM - 1:00 PM',
      title: 'Farewell Brunch and Networking',
      presenter: 'NAACUS Team',
      location: 'St. Francis DeSales',
      summary: 'Content and summary to be provided',
      videoPlaceholder: false,
      photosPlaceholder: true,
    },
  ];

  const scrollToNewsletter = () => {
    const element = document.getElementById('newsletter');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="naacus2025" className={styles.accomplishments}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          
          <Text as="h1" className={styles.title}>
            NAACUS 2025: A Historic Gathering
          </Text>
          
          <Text as="p" className={styles.subtitle}>
            United in Christ for Evangelization
          </Text>

          <div className={styles.conferenceInfo}>
            <Text style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '10px', display: 'block', textAlign: 'center' }}>
              Theme: United in Christ for Evangelization (1 Cor. 1:10-13)
            </Text>
            <Text style={{ fontSize: '1.1rem', marginBottom: '20px', display: 'block', textAlign: 'center', opacity: 0.9 }}>
              Goal: African Catholics Faith and Culture in Action
            </Text>
            
            <div className={styles.infoGrid}>
              <div className={styles.infoItem}>
                <Calendar24Regular className={styles.infoIcon} />
                <span className={styles.infoLabel}>Dates</span>
                <span className={styles.infoValue}>July 18-20, 2025</span>
              </div>
              
              <div className={styles.infoItem}>
                <Location24Regular className={styles.infoIcon} />
                <span className={styles.infoLabel}>Location</span>
                <span className={styles.infoValue}>Washington DC Area</span>
              </div>
              
              <div className={styles.infoItem}>
                <People24Regular className={styles.infoIcon} />
                <span className={styles.infoLabel}>Host</span>
                <span className={styles.infoValue}>Region 6</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.content}>
        <Text as="h2" className={styles.sectionTitle}>
          Conference Schedule & Events
        </Text>
        
        <Text as="p" className={styles.sectionDescription}>
          The NAACUS 2025 Bi-Annual Conference brought together African Catholics from across the United States 
          for three days of worship, learning, fellowship, and cultural celebration. Below are the complete details 
          of each event, session, and activity from this historic gathering.
        </Text>

        <div className={styles.eventsContainer}>
          {events.map((event) => (
            <Card key={event.id} className={styles.eventCard}>
              <div className={styles.eventHeader}>
                <div className={styles.eventTitleSection}>
                  <Text className={styles.eventDay}>{event.day}</Text>
                  <Text className={styles.eventTitle}>{event.title}</Text>
                  <Text className={styles.eventPresenter}>Presenter: {event.presenter}</Text>
                </div>
                
                <div className={styles.eventMeta}>
                  <div className={styles.metaItem}>
                    <Clock24Regular className={styles.metaIcon} />
                    <span>{event.time}</span>
                  </div>
                  <div className={styles.metaItem}>
                    <Location24Regular className={styles.metaIcon} />
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>

              <div className={styles.eventContent}>
                <Text className={styles.eventDescription}>
                  <strong>Summary:</strong> {event.summary}
                </Text>

                <div className={styles.mediaSection}>
                  {event.videoPlaceholder && (
                    <div className={styles.mediaPlaceholder}>
                      <Video24Regular className={styles.placeholderIcon} />
                      <span>Video to be added</span>
                    </div>
                  )}
                  {event.photosPlaceholder && (
                    <div className={styles.mediaPlaceholder}>
                      <Image24Regular className={styles.placeholderIcon} />
                      <span>Photos to be added</span>
                    </div>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className={styles.ctaSection}>
          <Text as="h2" className={styles.ctaTitle}>
            Join Us for NAACUS 2027!
          </Text>
          
          <Text as="p" className={styles.ctaDescription}>
            Inspired by the success of NAACUS 2025? Be part of the next chapter 
            at NAACUS 2027. Stay updated with the latest news and conference details.
          </Text>

          <Button 
            className={styles.ctaButton}
            onClick={scrollToNewsletter}
          >
            Subscribe for NAACUS 2027 Updates
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Naacus2025Accomplishments;
