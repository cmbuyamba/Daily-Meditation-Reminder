import React from 'react';
import { 
  makeStyles,
  shorthands,
  tokens,
  Text,
  Card,
  CardHeader,
  Button
} from '@fluentui/react-components';
import { CheckmarkCircle24Regular } from '@fluentui/react-icons';

const useStyles = makeStyles({
  conference: {
    backgroundColor: '#f5f5f5',
    ...shorthands.padding('80px', '20px'),
  },
  conferenceTitle: {
    fontSize: '2.5rem',
    textAlign: 'center',
    marginBottom: '40px',
    color: tokens.colorBrandBackground,
    fontWeight: '700',
  },
  conferenceBanner: {
    background: `linear-gradient(135deg, ${tokens.colorBrandBackground} 0%, #0053a0 100%)`,
    color: tokens.colorNeutralForegroundInverted,
    ...shorthands.padding('40px', '20px'),
    ...shorthands.borderRadius('12px'),
    textAlign: 'center',
    marginBottom: '60px',
  },
  bannerTitle: {
    fontSize: '2rem',
    marginBottom: '10px',
    fontWeight: '700',
    color: tokens.colorNeutralForegroundInverted,
  },
  conferenceDate: {
    fontSize: '1.5rem',
    fontWeight: '500',
    color: tokens.colorNeutralForegroundInverted,
  },
  conferenceContent: {
    maxWidth: '1200px',
    ...shorthands.margin('0', 'auto'),
  },
  conferenceDetails: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    ...shorthands.gap('30px'),
    marginBottom: '60px',
  },
  detailCard: {
    textAlign: 'center',
    ...shorthands.padding('30px', '20px'),
    ...shorthands.transition('transform', '0.3s', 'ease'),
    '&:hover': {
      transform: 'translateY(-5px)',
    },
  },
  cardIcon: {
    fontSize: '3rem',
    marginBottom: '20px',
  },
  cardTitle: {
    fontSize: '1.3rem',
    marginBottom: '10px',
    color: tokens.colorBrandBackground,
    fontWeight: '600',
  },
  cardText: {
    fontSize: '1.1rem',
    fontWeight: '500',
    color: tokens.colorNeutralForeground1,
    marginBottom: '5px',
  },
  detailSubtext: {
    fontSize: '0.9rem',
    color: tokens.colorNeutralForeground3,
  },
  conferenceDescription: {
    backgroundColor: tokens.colorNeutralBackground1,
    ...shorthands.padding('40px'),
    ...shorthands.borderRadius('12px'),
  },
  descriptionTitle: {
    fontSize: '2rem',
    marginBottom: '20px',
    color: tokens.colorBrandBackground,
    fontWeight: '600',
  },
  descriptionText: {
    fontSize: '1.1rem',
    lineHeight: '1.8',
    color: tokens.colorNeutralForeground2,
    marginBottom: '30px',
  },
  conferenceHighlights: {
    marginBottom: '30px',
  },
  highlight: {
    display: 'flex',
    alignItems: 'center',
    ...shorthands.gap('15px'),
    marginBottom: '15px',
    fontSize: '1.05rem',
    color: tokens.colorNeutralForeground1,
  },
  ctaSection: {
    textAlign: 'center',
    ...shorthands.padding('30px', '0', '0'),
    ...shorthands.borderTop('2px', 'solid', tokens.colorNeutralStroke1),
  },
  ctaText: {
    fontSize: '1.2rem',
    marginBottom: '20px',
    fontWeight: '500',
    color: tokens.colorNeutralForeground1,
  },
});

function Conference() {
  const styles = useStyles();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="conference" className={styles.conference}>
      <Text as="h2" className={styles.conferenceTitle}>NACCUS 2027 Conference</Text>
      <div className={styles.conferenceBanner}>
        <Text as="h3" className={styles.bannerTitle}>Join Us in Maryland!</Text>
        <Text as="p" className={styles.conferenceDate}>Summer 2027</Text>
      </div>
      <div className={styles.conferenceContent}>
        <div className={styles.conferenceDetails}>
          <Card className={styles.detailCard}>
            <div className={styles.cardIcon}>📍</div>
            <CardHeader
              header={<Text className={styles.cardTitle}>Location</Text>}
              description={
                <>
                  <Text className={styles.cardText}>Maryland</Text>
                  <Text className={styles.detailSubtext}>Specific venue to be announced</Text>
                </>
              }
            />
          </Card>
          <Card className={styles.detailCard}>
            <div className={styles.cardIcon}>📅</div>
            <CardHeader
              header={<Text className={styles.cardTitle}>When</Text>}
              description={
                <>
                  <Text className={styles.cardText}>Summer 2027</Text>
                  <Text className={styles.detailSubtext}>Exact dates coming soon</Text>
                </>
              }
            />
          </Card>
          <Card className={styles.detailCard}>
            <div className={styles.cardIcon}>✨</div>
            <CardHeader
              header={<Text className={styles.cardTitle}>What to Expect</Text>}
              description={
                <>
                  <Text className={styles.cardText}>Workshops, Networking</Text>
                  <Text className={styles.detailSubtext}>Spiritual growth & fellowship</Text>
                </>
              }
            />
          </Card>
        </div>
        <div className={styles.conferenceDescription}>
          <Text as="h3" className={styles.descriptionTitle}>A Transformative Experience</Text>
          <Text as="p" className={styles.descriptionText}>
            NACCUS 2027 will bring together Christian student leaders, campus ministry 
            staff, and supporters from across the nation for an unforgettable experience 
            of worship, learning, and community building.
          </Text>
          <div className={styles.conferenceHighlights}>
            <div className={styles.highlight}>
              <CheckmarkCircle24Regular color={tokens.colorPaletteGreenForeground1} />
              <span>Inspiring keynote speakers and worship sessions</span>
            </div>
            <div className={styles.highlight}>
              <CheckmarkCircle24Regular color={tokens.colorPaletteGreenForeground1} />
              <span>Practical workshops for campus ministry leadership</span>
            </div>
            <div className={styles.highlight}>
              <CheckmarkCircle24Regular color={tokens.colorPaletteGreenForeground1} />
              <span>Networking opportunities with peers nationwide</span>
            </div>
            <div className={styles.highlight}>
              <CheckmarkCircle24Regular color={tokens.colorPaletteGreenForeground1} />
              <span>Resources and tools for effective ministry</span>
            </div>
          </div>
          <div className={styles.ctaSection}>
            <Text as="p" className={styles.ctaText}>Stay tuned for registration details!</Text>
            <Button 
              appearance="primary" 
              size="large"
              onClick={() => scrollToSection('contact')}
            >
              Get Updates
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Conference;
