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
  Trophy24Regular,
  Heart24Regular,
  Book24Regular,
  Star24Regular
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
    textAlign: 'center',
    ...shorthands.borderRadius('16px'),
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
  imageContainer: {
    maxWidth: '800px',
    margin: '40px auto',
    textAlign: 'center',
    ...shorthands.borderRadius('12px'),
    overflow: 'hidden',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
  },
  mainImage: {
    width: '100%',
    height: 'auto',
    display: 'block',
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
  highlightsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    ...shorthands.gap('24px'),
    marginBottom: '40px',
  },
  highlightCard: {
    ...shorthands.padding('32px'),
    ...shorthands.transition('all', '0.3s', 'ease'),
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
    ...shorthands.borderRadius('12px'),
    backgroundColor: tokens.colorNeutralBackground1,
    '&:hover': {
      transform: 'translateY(-8px)',
      boxShadow: tokens.shadow16,
    },
  },
  highlightIcon: {
    fontSize: '3rem',
    color: '#E8D4C0',
    marginBottom: '16px',
    display: 'block',
  },
  highlightTitle: {
    fontSize: '1.5rem',
    fontWeight: '600',
    marginBottom: '12px',
    color: tokens.colorNeutralForeground1,
    display: 'block',
  },
  highlightDescription: {
    fontSize: '1rem',
    lineHeight: '1.6',
    color: tokens.colorNeutralForeground2,
    display: 'block',
  },
  mediaSection: {
    marginTop: '60px',
    ...shorthands.padding('40px', '20px'),
    backgroundColor: '#f0f7ff',
    ...shorthands.borderRadius('12px'),
  },
  mediaGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    ...shorthands.gap('20px'),
    marginTop: '30px',
  },
  mediaPlaceholder: {
    backgroundColor: tokens.colorNeutralBackground3,
    ...shorthands.padding('60px', '20px'),
    ...shorthands.borderRadius('8px'),
    textAlign: 'center',
    color: tokens.colorNeutralForeground2,
    ...shorthands.border('2px', 'dashed', tokens.colorNeutralStroke1),
  },
  placeholderText: {
    fontSize: '1rem',
    fontWeight: '500',
    display: 'block',
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

  const highlights = [
    {
      icon: <People24Regular />,
      title: 'Record Attendance',
      description: 'Over 1,500 participants from across the United States gathered to celebrate faith and heritage.'
    },
    {
      icon: <Trophy24Regular />,
      title: 'Historic Milestones',
      description: 'Achieved significant breakthroughs in African Catholic community engagement and leadership development.'
    },
    {
      icon: <Heart24Regular />,
      title: 'Community Impact',
      description: 'Launched new initiatives supporting families, youth, and parishes across the nation.'
    },
    {
      icon: <Book24Regular />,
      title: 'Educational Programs',
      description: 'Delivered inspiring workshops and training sessions on evangelization and cultural awareness.'
    },
    {
      icon: <Star24Regular />,
      title: 'Cultural Celebrations',
      description: 'Vibrant liturgies and events showcasing the richness of African Catholic traditions.'
    },
    {
      icon: <Calendar24Regular />,
      title: 'Future Vision',
      description: 'Established a roadmap for continued growth and service to the African Catholic community.'
    },
  ];

  const scrollToNewsletter = () => {
    const element = document.getElementById('newsletter');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="naacus2025" className={styles.accomplishments}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.badge}>
            July 2025 Accomplishments
          </div>
          
          <Text as="h1" className={styles.title}>
            NAACUS 2025: A Historic Gathering
          </Text>
          
          <Text as="p" className={styles.subtitle}>
            Celebrating our achievements and building momentum for NAACUS 2027
          </Text>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.imageContainer}>
          <img 
            src="/NAACUS_2025.jpg" 
            alt="NAACUS 2025 Conference Highlights" 
            className={styles.mainImage}
          />
        </div>

        <Text as="h2" className={styles.sectionTitle}>
          What We Accomplished in July 2025
        </Text>
        
        <Text as="p" className={styles.sectionDescription}>
          The NAACUS 2025 gathering marked a transformative moment for African Catholics 
          across the United States. Here are some of the remarkable achievements from that historic event.
        </Text>

        <div className={styles.highlightsGrid}>
          {highlights.map((highlight, index) => (
            <Card key={index} className={styles.highlightCard}>
              <span className={styles.highlightIcon}>{highlight.icon}</span>
              <Text className={styles.highlightTitle}>{highlight.title}</Text>
              <Text className={styles.highlightDescription}>{highlight.description}</Text>
            </Card>
          ))}
        </div>

        <div className={styles.mediaSection}>
          <Text as="h2" className={styles.sectionTitle}>
            Photos & Videos from July 2025
          </Text>
          
          <Text as="p" className={styles.sectionDescription}>
            Relive the inspiring moments, powerful testimonies, and vibrant celebrations 
            that made NAACUS 2025 unforgettable.
          </Text>

          <div className={styles.mediaGrid}>
            <div className={styles.mediaPlaceholder}>
              <Text className={styles.placeholderText}>
                Photo Gallery<br/>Coming Soon
              </Text>
            </div>
            <div className={styles.mediaPlaceholder}>
              <Text className={styles.placeholderText}>
                Video Highlights<br/>Coming Soon
              </Text>
            </div>
            <div className={styles.mediaPlaceholder}>
              <Text className={styles.placeholderText}>
                Testimonials<br/>Coming Soon
              </Text>
            </div>
            <div className={styles.mediaPlaceholder}>
              <Text className={styles.placeholderText}>
                Event Coverage<br/>Coming Soon
              </Text>
            </div>
          </div>
        </div>

        <div className={styles.ctaSection}>
          <Text as="h2" className={styles.ctaTitle}>
            Join Us for NAACUS 2027!
          </Text>
          
          <Text as="p" className={styles.ctaDescription}>
            Inspired by what we accomplished in 2025? Be part of the next chapter 
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
