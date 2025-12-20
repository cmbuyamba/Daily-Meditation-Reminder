import React from 'react';
import { 
  makeStyles,
  shorthands,
  tokens,
  Text,
  Card,
  Button
} from '@fluentui/react-components';
import { Image24Regular, Video24Regular } from '@fluentui/react-icons';

const useStyles = makeStyles({
  gallery: {
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
    textAlign: 'center',
    marginBottom: '64px',
    color: tokens.colorNeutralForeground2,
    maxWidth: '800px',
    margin: '0 auto 64px',
    lineHeight: '1.6',
    display: 'block',
  },
  content: {
    maxWidth: '1200px',
    ...shorthands.margin('0', 'auto'),
  },
  galleryGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    ...shorthands.gap('30px'),
    marginBottom: '40px',
  },
  galleryCard: {
    ...shorthands.padding('0'),
    ...shorthands.overflow('hidden'),
    ...shorthands.transition('all', '0.3s', 'ease'),
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
    ...shorthands.borderRadius('8px'),
    '&:hover': {
      transform: 'translateY(-8px)',
      boxShadow: tokens.shadow16,
    },
  },
  imageContainer: {
    width: '100%',
    height: '250px',
    backgroundColor: '#f0f7ff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '4rem',
    color: tokens.colorBrandBackground,
  },
  cardContent: {
    ...shorthands.padding('20px'),
  },
  cardTitle: {
    fontSize: '1.2rem',
    fontWeight: '600',
    marginBottom: '10px',
    color: tokens.colorNeutralForeground1,
    display: 'block',
  },
  cardDescription: {
    fontSize: '1rem',
    lineHeight: '1.6',
    color: tokens.colorNeutralForeground2,
    marginBottom: '15px',
    display: 'block',
  },
  ctaSection: {
    textAlign: 'center',
    ...shorthands.padding('40px', '20px'),
    backgroundColor: '#f0f7ff',
    ...shorthands.borderRadius('12px'),
  },
  ctaText: {
    fontSize: '1.2rem',
    marginBottom: '20px',
    color: tokens.colorNeutralForeground1,
    fontWeight: '500',
  },
});

function Gallery() {
  const styles = useStyles();

  const galleryItems = [
    {
      icon: <Image24Regular />,
      title: 'Biannual National Conference',
      description: 'Photos from our national gatherings featuring keynote speakers, workshops, and cultural celebrations.',
      type: 'photos'
    },
    {
      icon: <Image24Regular />,
      title: 'Eucharistic Congress',
      description: 'Moments of faith and worship from special Eucharistic celebrations and congresses.',
      type: 'photos'
    },
    {
      icon: <Image24Regular />,
      title: 'Multicultural Mass',
      description: 'Vibrant liturgies incorporating African languages, music, and traditions.',
      type: 'photos'
    },
    {
      icon: <Video24Regular />,
      title: 'Conference Highlights',
      description: 'Video recordings of inspiring keynote addresses and workshop sessions.',
      type: 'video'
    },
    {
      icon: <Image24Regular />,
      title: 'Community Gatherings',
      description: 'Fellowship events, youth activities, and family life programs across the nation.',
      type: 'photos'
    },
    {
      icon: <Video24Regular />,
      title: 'Cultural Celebrations',
      description: 'Videos showcasing African Catholic heritage, music, and dance performances.',
      type: 'video'
    },
  ];

  return (
    <section id="gallery" className={styles.gallery}>
      <Text as="h2" className={styles.sectionTitle}>Gallery & Videos</Text>
      <Text as="p" className={styles.sectionSubtitle}>
        Explore photos and videos from NAACUS events, conferences, liturgical celebrations, 
        and community activities that bring African Catholics together in faith and fellowship.
      </Text>
      <div className={styles.content}>
        <div className={styles.galleryGrid}>
          {galleryItems.map((item, index) => (
            <Card key={index} className={styles.galleryCard}>
              <div className={styles.imageContainer}>
                {item.icon}
              </div>
              <div className={styles.cardContent}>
                <Text className={styles.cardTitle}>{item.title}</Text>
                <Text className={styles.cardDescription}>{item.description}</Text>
              </div>
            </Card>
          ))}
        </div>
        <div className={styles.ctaSection}>
          <Text as="p" className={styles.ctaText}>
            Want to share photos or videos from your local NAACUS events?
          </Text>
          <Button 
            appearance="primary" 
            size="large"
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Contact Us to Share
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
