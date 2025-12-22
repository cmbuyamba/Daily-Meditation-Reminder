import React from 'react';
import { 
  makeStyles,
  shorthands,
  tokens,
  Text,
  Card,
  Button
} from '@fluentui/react-components';
import { CheckmarkCircle24Regular } from '@fluentui/react-icons';

const useStyles = makeStyles({
  programs: {
    backgroundColor: tokens.colorNeutralBackground1,
    ...shorthands.padding('50px', '20px'),
    '@media (max-width: 768px)': {
      padding: '40px 0',
    },
  },
  sectionTitle: {
    fontSize: '2.75rem',
    textAlign: 'center',
    marginBottom: '16px',
    color: tokens.colorNeutralForeground1,
    fontWeight: '600',
    display: 'block',
    letterSpacing: '-0.02em',
    '@media (max-width: 768px)': {
      fontSize: '1.75rem',
    },
  },
  sectionSubtitle: {
    fontSize: '1.125rem',
    textAlign: 'center',
    marginBottom: '24px',
    color: tokens.colorNeutralForeground2,
    maxWidth: '800px',
    margin: '0 auto 24px',
    lineHeight: '1.6',
    display: 'block',
  },
  content: {
    maxWidth: '1000px',
    ...shorthands.margin('0', 'auto'),
  },
  highlightCard: {
    ...shorthands.padding('24px'),
    backgroundColor: tokens.colorNeutralBackground1,
    ...shorthands.borderRadius('8px'),
    marginBottom: '20px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
  },
  highlightTitle: {
    fontSize: '1.625rem',
    marginBottom: '16px',
    color: tokens.colorNeutralForeground1,
    fontWeight: '600',
  },
  highlightText: {
    fontSize: '1.05rem',
    lineHeight: '1.7',
    color: tokens.colorNeutralForeground2,
    marginBottom: '16px',
  },
  activitiesList: {
    display: 'flex',
    flexDirection: 'column',
    ...shorthands.gap('12px'),
    marginBottom: '0',
  },
  activityItem: {
    display: 'flex',
    alignItems: 'flex-start',
    ...shorthands.gap('15px'),
  },
  activityText: {
    fontSize: '1.05rem',
    lineHeight: '1.6',
    color: tokens.colorNeutralForeground1,
  },
  conferenceCallout: {
    background: `linear-gradient(135deg, ${tokens.colorBrandBackground} 0%, #0053a0 100%)`,
    color: tokens.colorNeutralForegroundInverted,
    ...shorthands.padding('24px'),
    ...shorthands.borderRadius('12px'),
    textAlign: 'center',
    marginTop: '20px',
  },
  calloutTitle: {
    fontSize: '1.4rem',
    marginBottom: '12px',
    fontWeight: '600',
    color: tokens.colorNeutralForegroundInverted,
    display: 'block',
    textAlign: 'center',
  },
  calloutText: {
    fontSize: '1rem',
    marginBottom: '16px',
    color: tokens.colorNeutralForegroundInverted,
    opacity: 0.95,
    display: 'block',
    textAlign: 'center',
  },
  getInvolvedSection: {
    backgroundColor: tokens.colorNeutralBackground1,
    ...shorthands.padding('24px'),
    ...shorthands.borderRadius('12px'),
    marginTop: '20px',
    textAlign: 'center',
  },
  getInvolvedTitle: {
    fontSize: '1.75rem',
    marginBottom: '12px',
    color: tokens.colorBrandBackground,
    fontWeight: '600',
    display: 'block',
    textAlign: 'center',
  },
  getInvolvedText: {
    fontSize: '1.05rem',
    lineHeight: '1.6',
    color: tokens.colorNeutralForeground2,
    marginBottom: '16px',
    display: 'block',
    textAlign: 'center',
  },
});

function Programs() {
  const styles = useStyles();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const activities = [
    'Community gatherings and fellowship events',
    'Workshops on faith, family, and leadership',
    'National conferences highlighting African Catholic faith and culture',
    'Leadership formation and mentorship programs',
    'Cultural celebrations and liturgical events',
    'Youth and young adult ministry initiatives',
    'Marriage and family life support programs',
    'Outreach and service projects'
  ];

  return (
    <section id="programs" className={styles.programs}>
      <Text as="h2" className={styles.sectionTitle}>Programs & Activities</Text>
      <Text as="p" className={styles.sectionSubtitle}>
        NAACUS convenes gatherings, workshops, and events that strengthen fellowship, 
        leadership formation, and outreach while celebrating African Catholic faith and culture in action.
      </Text>
      <div className={styles.content}>
        <Card className={styles.highlightCard}>
          <Text as="h3" className={styles.highlightTitle}>Our Activities</Text>
          <Text as="p" className={styles.highlightText}>
            Through various programs and initiatives, we create opportunities for African Catholics 
            to grow in faith, build community, and serve the Church and society.
          </Text>
          <div className={styles.activitiesList}>
            {activities.map((activity, index) => (
              <div key={index} className={styles.activityItem}>
                <CheckmarkCircle24Regular color={tokens.colorPaletteGreenForeground1} />
                <Text className={styles.activityText}>{activity}</Text>
              </div>
            ))}
          </div>
        </Card>

        <div className={styles.conferenceCallout}>
          <Text as="h3" className={styles.calloutTitle}>Biannual National Conference</Text>
          <Text as="p" className={styles.calloutText}>
            Our signature event brings together African Catholics from across the nation for 
            a time of unity in Christ, evangelization, and celebrating our shared heritage.
          </Text>
          <Button 
            appearance="primary" 
            size="large"
            onClick={() => scrollToSection('conference')}
            style={{ 
              backgroundColor: tokens.colorNeutralForegroundInverted,
              color: tokens.colorBrandBackground 
            }}
          >
            Learn More About Conferences
          </Button>
        </div>

        <div className={styles.getInvolvedSection}>
          <Text as="h3" className={styles.getInvolvedTitle}>Get Involved</Text>
          <Text as="p" className={styles.getInvolvedText}>
            NAACUS welcomes new members and volunteers to help build a stronger community 
            in the Church through fellowship, workshops, and service. Join us in our mission!
          </Text>
          <Button 
            appearance="primary" 
            size="large"
            onClick={() => scrollToSection('contact')}
          >
            Contact Us to Join
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Programs;
