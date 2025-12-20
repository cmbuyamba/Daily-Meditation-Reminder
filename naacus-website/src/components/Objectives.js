import React from 'react';
import { 
  makeStyles,
  shorthands,
  tokens,
  Text,
  Card
} from '@fluentui/react-components';

const useStyles = makeStyles({
  objectives: {
    backgroundColor: tokens.colorNeutralBackground1,
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
    maxWidth: '1000px',
    ...shorthands.margin('0', 'auto'),
  },
  objectivesList: {
    display: 'flex',
    flexDirection: 'column',
    ...shorthands.gap('25px'),
  },
  objectiveCard: {
    ...shorthands.padding('30px'),
    ...shorthands.transition('all', '0.3s', 'ease'),
    '&:hover': {
      boxShadow: tokens.shadow8,
      transform: 'translateX(5px)',
    },
  },
  objectiveItem: {
    display: 'flex',
    alignItems: 'flex-start',
    ...shorthands.gap('20px'),
  },
  objectiveNumber: {
    minWidth: '40px',
    height: '40px',
    backgroundColor: tokens.colorBrandBackground,
    color: tokens.colorNeutralForegroundInverted,
    ...shorthands.borderRadius('50%'),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.2rem',
    fontWeight: '700',
    flexShrink: 0,
  },
  objectiveContent: {
    flex: 1,
  },
  objectiveTitle: {
    fontSize: '1.3rem',
    fontWeight: '600',
    marginBottom: '10px',
    color: tokens.colorBrandBackground,
    display: 'block',
  },
  objectiveText: {
    fontSize: '1.05rem',
    lineHeight: '1.7',
    color: tokens.colorNeutralForeground2,
    display: 'block',
  },
  visionCard: {
    background: `linear-gradient(135deg, ${tokens.colorBrandBackground} 0%, #0053a0 100%)`,
    color: tokens.colorNeutralForegroundInverted,
    ...shorthands.padding('40px'),
    ...shorthands.borderRadius('12px'),
    marginTop: '40px',
    textAlign: 'center',
  },
  visionTitle: {
    fontSize: '2rem',
    marginBottom: '20px',
    fontWeight: '600',
    color: tokens.colorNeutralForegroundInverted,
  },
  visionText: {
    fontSize: '1.2rem',
    lineHeight: '1.8',
    color: tokens.colorNeutralForegroundInverted,
    opacity: 0.95,
  },
});

function Objectives() {
  const styles = useStyles();

  const objectives = [
    {
      title: 'Be a United Voice',
      description: 'Serve as a united voice for African Catholics in the United States, advocating for their needs and representing their interests within the Church and society.'
    },
    {
      title: 'Promote Heritage Awareness',
      description: 'Raise awareness of the presence, heritage, and cultures of African Catholics in the U.S., celebrating their unique contributions to the Church.'
    },
    {
      title: 'Celebrate Ethnic Liturgies',
      description: 'Encourage the celebration of liturgies in ethnic languages and traditions, fostering culturally rooted worship experiences.'
    },
    {
      title: 'Foster Diocesan Connections',
      description: 'Promote connection and collaboration with local dioceses and national Catholic organizations to strengthen the African Catholic presence.'
    },
    {
      title: 'Support Families and Youth',
      description: 'Provide support for African families, youth, marriages, and vocations, nurturing the next generation of Catholic leaders.'
    },
    {
      title: 'Advocate for Social Justice',
      description: 'Champion social justice initiatives and promote interreligious dialogue, working for the common good in African communities and U.S. society.'
    },
    {
      title: 'Build Leadership',
      description: 'Cultivate lay leadership and support vocational programs, empowering African Catholics to serve the Church in various ministries.'
    },
    {
      title: 'Ensure Full Participation',
      description: 'Work to ensure that African Catholics fully participate in the life of the Church in the United States while maintaining connections with the Church in Africa.'
    },
  ];

  return (
    <section id="objectives" className={styles.objectives}>
      <Text as="h2" className={styles.sectionTitle}>Our Objectives</Text>
      <Text as="p" className={styles.sectionSubtitle}>
        NAACUS is committed to achieving these objectives to bring all African Catholic 
        communities together and ensure their vibrant presence in the U.S. Church.
      </Text>
      <div className={styles.content}>
        <div className={styles.objectivesList}>
          {objectives.map((objective, index) => (
            <Card key={index} className={styles.objectiveCard}>
              <div className={styles.objectiveItem}>
                <div className={styles.objectiveNumber}>{index + 1}</div>
                <div className={styles.objectiveContent}>
                  <Text className={styles.objectiveTitle}>{objective.title}</Text>
                  <Text className={styles.objectiveText}>{objective.description}</Text>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className={styles.visionCard}>
          <Text as="h3" className={styles.visionTitle}>Our Vision</Text>
          <Text as="p" className={styles.visionText}>
            A vibrant and visible African Catholic community in the United States—confident in identity, 
            generous in service, and engaged in society—fully participating in the life of the Church 
            and contributing its gifts to build the Kingdom of God.
          </Text>
        </div>
      </div>
    </section>
  );
}

export default Objectives;
