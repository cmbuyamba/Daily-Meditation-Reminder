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
    backgroundColor: tokens.colorNeutralBackground1,
    ...shorthands.padding('50px', '20px'),
  },
  conferenceTitle: {
    fontSize: '2.75rem',
    textAlign: 'center',
    marginBottom: '30px',
    color: tokens.colorNeutralForeground1,
    fontWeight: '600',
    display: 'block',
    letterSpacing: '-0.02em',
  },
  conferenceBanner: {
    background: `linear-gradient(135deg, ${tokens.colorBrandBackground} 0%, #005a9e 100%)`,
    color: tokens.colorNeutralForegroundInverted,
    ...shorthands.padding('32px', '20px'),
    ...shorthands.borderRadius('8px'),
    textAlign: 'center',
    marginBottom: '40px',
  },
  bannerTitle: {
    fontSize: '1.875rem',
    marginBottom: '12px',
    fontWeight: '600',
    color: tokens.colorNeutralForegroundInverted,
    display: 'block',
    textAlign: 'center',
  },
  conferenceDate: {
    fontSize: '1.25rem',
    fontWeight: '400',
    color: tokens.colorNeutralForegroundInverted,
    display: 'block',
    textAlign: 'center',
  },
  conferenceContent: {
    maxWidth: '1200px',
    ...shorthands.margin('0', 'auto'),
  },
  conferenceDetails: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    ...shorthands.gap('24px'),
    marginBottom: '40px',
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
    display: 'block',
  },
  detailSubtext: {
    fontSize: '0.9rem',
    color: tokens.colorNeutralForeground3,
    display: 'block',
  },
  conferenceDescription: {
    backgroundColor: tokens.colorNeutralBackground1,
    ...shorthands.padding('32px'),
    ...shorthands.borderRadius('12px'),
  },
  descriptionTitle: {
    fontSize: '2rem',
    marginBottom: '20px',
    color: tokens.colorBrandBackground,
    fontWeight: '600',
    display: 'block',
    textAlign: 'center',
  },
  descriptionText: {
    fontSize: '1.1rem',
    lineHeight: '1.8',
    color: tokens.colorNeutralForeground2,
    marginBottom: '30px',
    display: 'block',
    textAlign: 'center',
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
    display: 'block',
    textAlign: 'center',
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
      <Text as="h2" className={styles.conferenceTitle}>National Conference</Text>
      <div className={styles.conferenceBanner}>
        <Text as="h3" className={styles.bannerTitle}>Biannual National Conference</Text>
        <Text as="p" className={styles.conferenceDate}>Unity in Christ • Evangelization • African Heritage</Text>
      </div>
      <div className={styles.conferenceContent}>
        <div className={styles.conferenceDetails}>
          <Card className={styles.detailCard}>
            <div className={styles.cardIcon}>🙏</div>
            <div>
              <Text className={styles.cardTitle}>Focus</Text>
              <Text className={styles.cardText}>Unity in Christ</Text>
              <Text className={styles.detailSubtext}>Strengthening our faith together</Text>
            </div>
          </Card>
          <Card className={styles.detailCard}>
            <div className={styles.cardIcon}>📖</div>
            <div>
              <Text className={styles.cardTitle}>Theme</Text>
              <Text className={styles.cardText}>Evangelization</Text>
              <Text className={styles.detailSubtext}>Sharing the Gospel message</Text>
            </div>
          </Card>
          <Card className={styles.detailCard}>
            <div className={styles.cardIcon}>🌍</div>
            <div>
              <Text className={styles.cardTitle}>Celebration</Text>
              <Text className={styles.cardText}>African Catholic Culture</Text>
              <Text className={styles.detailSubtext}>Heritage and traditions</Text>
            </div>
          </Card>
        </div>
        <div className={styles.conferenceDescription}>
          <Text as="h3" className={styles.descriptionTitle}>A Gathering of Faith and Heritage</Text>
          <Text as="p" className={styles.descriptionText}>
            Our biannual national conference brings together African Catholics from across the United States 
            for an inspiring experience of worship, learning, fellowship, and cultural celebration. This 
            signature event focuses on unity in Christ and evangelization while honoring the rich heritage 
            of African Catholics.
          </Text>
          <div className={styles.conferenceHighlights}>
            <div className={styles.highlight}>
              <CheckmarkCircle24Regular color={tokens.colorPaletteGreenForeground1} />
              <span>Inspiring liturgies and worship incorporating African traditions</span>
            </div>
            <div className={styles.highlight}>
              <CheckmarkCircle24Regular color={tokens.colorPaletteGreenForeground1} />
              <span>Workshops on faith, family life, and leadership formation</span>
            </div>
            <div className={styles.highlight}>
              <CheckmarkCircle24Regular color={tokens.colorPaletteGreenForeground1} />
              <span>Networking with African Catholic communities nationwide</span>
            </div>
            <div className={styles.highlight}>
              <CheckmarkCircle24Regular color={tokens.colorPaletteGreenForeground1} />
              <span>Cultural celebrations honoring African heritage</span>
            </div>
            <div className={styles.highlight}>
              <CheckmarkCircle24Regular color={tokens.colorPaletteGreenForeground1} />
              <span>Youth and young adult programs and mentorship</span>
            </div>
            <div className={styles.highlight}>
              <CheckmarkCircle24Regular color={tokens.colorPaletteGreenForeground1} />
              <span>Strengthening connections with parishes and dioceses</span>
            </div>
          </div>
          <div className={styles.ctaSection}>
            <Text as="p" className={styles.ctaText}>
              Join us for our next conference and experience the vibrant African Catholic community!
            </Text>
            <Button 
              appearance="primary" 
              size="large"
              onClick={() => scrollToSection('contact')}
            >
              Stay Informed
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Conference;
