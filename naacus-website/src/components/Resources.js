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
  DocumentBulletList24Regular,
  News24Regular,
  FormNew24Regular,
  Link24Regular
} from '@fluentui/react-icons';

const useStyles = makeStyles({
  resources: {
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
    maxWidth: '900px',
    margin: '0 auto 60px',
    lineHeight: '1.7',
    display: 'block',
  },
  content: {
    maxWidth: '1200px',
    ...shorthands.margin('0', 'auto'),
  },
  resourcesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    ...shorthands.gap('30px'),
    marginBottom: '40px',
  },
  resourceCard: {
    ...shorthands.padding('30px', '20px'),
    textAlign: 'center',
    ...shorthands.transition('all', '0.3s', 'ease'),
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: tokens.shadow16,
    },
  },
  iconWrapper: {
    fontSize: '3rem',
    marginBottom: '20px',
    color: tokens.colorBrandBackground,
  },
  cardTitle: {
    fontSize: '1.3rem',
    marginBottom: '15px',
    color: tokens.colorBrandBackground,
    fontWeight: '600',
    display: 'block',
  },
  cardDescription: {
    fontSize: '1rem',
    lineHeight: '1.7',
    color: tokens.colorNeutralForeground2,
    marginBottom: '20px',
    display: 'block',
  },
  partnerSection: {
    ...shorthands.padding('40px'),
    backgroundColor: tokens.colorNeutralBackground1,
    ...shorthands.borderRadius('12px'),
    marginTop: '40px',
  },
  partnerTitle: {
    fontSize: '2rem',
    marginBottom: '20px',
    color: tokens.colorBrandBackground,
    fontWeight: '600',
    textAlign: 'center',
  },
  partnerText: {
    fontSize: '1.1rem',
    lineHeight: '1.8',
    color: tokens.colorNeutralForeground2,
    marginBottom: '30px',
    textAlign: 'center',
  },
  partnerList: {
    display: 'flex',
    flexDirection: 'column',
    ...shorthands.gap('15px'),
    maxWidth: '600px',
    margin: '0 auto',
  },
  partnerItem: {
    display: 'flex',
    alignItems: 'center',
    ...shorthands.gap('15px'),
    ...shorthands.padding('15px'),
    backgroundColor: '#f0f7ff',
    ...shorthands.borderRadius('8px'),
  },
  partnerItemText: {
    fontSize: '1.05rem',
    color: tokens.colorNeutralForeground1,
  },
});

function Resources() {
  const styles = useStyles();

  const resources = [
    {
      icon: <DocumentBulletList24Regular />,
      title: 'NAACUS Brochure',
      description: 'Download our brochure to learn more about NAACUS mission, objectives, and how to get involved.',
      buttonText: 'Download Brochure'
    },
    {
      icon: <News24Regular />,
      title: 'Newsletters',
      description: 'Stay updated with our latest newsletters featuring community news, events, and spiritual reflections.',
      buttonText: 'View Newsletters'
    },
    {
      icon: <FormNew24Regular />,
      title: 'Membership Form',
      description: 'Join the NAACUS community! Download and complete our membership form to become a member.',
      buttonText: 'Get Membership Form'
    },
    {
      icon: <DocumentBulletList24Regular />,
      title: 'Advocacy Documents',
      description: 'Access our advocacy resources supporting African Catholics and promoting social justice.',
      buttonText: 'View Documents'
    },
  ];

  const partners = [
    'United States Conference of Catholic Bishops (USCCB)',
    'Local Diocesan Offices',
    'African and Haitian Catholic Ministries',
    'National Catholic Organizations',
    'Intercultural Ministry Programs'
  ];

  return (
    <section id="resources" className={styles.resources}>
      <Text as="h2" className={styles.sectionTitle}>Resources & Links</Text>
      <Text as="p" className={styles.sectionSubtitle}>
        Access brochures, newsletters, membership forms, and advocacy documents that support 
        the mission of NAACUS and empower African Catholic communities.
      </Text>
      <div className={styles.content}>
        <div className={styles.resourcesGrid}>
          {resources.map((resource, index) => (
            <Card key={index} className={styles.resourceCard}>
              <div className={styles.iconWrapper}>
                {resource.icon}
              </div>
              <Text className={styles.cardTitle}>{resource.title}</Text>
              <Text className={styles.cardDescription}>{resource.description}</Text>
              <Button 
                appearance="primary"
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {resource.buttonText}
              </Button>
            </Card>
          ))}
        </div>

        <div className={styles.partnerSection}>
          <Text as="h3" className={styles.partnerTitle}>Partner Organizations</Text>
          <Text as="p" className={styles.partnerText}>
            NAACUS collaborates with various Catholic organizations, dioceses, and ministries 
            to support African Catholics throughout the United States.
          </Text>
          <div className={styles.partnerList}>
            {partners.map((partner, index) => (
              <div key={index} className={styles.partnerItem}>
                <Link24Regular color={tokens.colorBrandBackground} />
                <Text className={styles.partnerItemText}>{partner}</Text>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resources;
