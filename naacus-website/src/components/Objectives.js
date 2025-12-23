import React from 'react';
import { 
  makeStyles,
  shorthands,
  tokens,
  Text,
  Card
} from '@fluentui/react-components';
import { dataService } from '../services/dataService';

const useStyles = makeStyles({
  objectives: {
    backgroundColor: tokens.colorNeutralBackground1,
    ...shorthands.padding('60px', '20px'),
  },
  sectionTitle: {
    fontSize: '2rem',
    textAlign: 'center',
    marginBottom: '12px',
    color: tokens.colorNeutralForeground1,
    fontWeight: '600',
    display: 'block',
    letterSpacing: '-0.02em',
    '@media (max-width: 768px)': {
      fontSize: '1.5rem',
    },
  },
  sectionSubtitle: {
    fontSize: '1.125rem',
    textAlign: 'center',
    marginBottom: '48px',
    color: tokens.colorNeutralForeground2,
    maxWidth: '800px',
    margin: '0 auto 48px',
    lineHeight: '1.6',
    display: 'block',
  },
  content: {
    maxWidth: '1200px',
    ...shorthands.margin('0', 'auto'),
  },
  objectivesList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
    ...shorthands.gap('20px'),
    '@media (max-width: 768px)': {
      gridTemplateColumns: '1fr',
    },
  },
  objectiveCard: {
    ...shorthands.padding('24px'),
    ...shorthands.transition('all', '0.3s', 'ease'),
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
    ...shorthands.borderRadius('12px'),
    backgroundColor: tokens.colorNeutralBackground1,
    ...shorthands.border('1px', 'solid', tokens.colorNeutralStroke2),
    position: 'relative',
    ...shorthands.overflow('hidden'),
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '4px',
      height: '100%',
      backgroundColor: tokens.colorBrandBackground,
    },
    '&:hover': {
      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
      transform: 'translateY(-4px)',
      ...shorthands.borderColor(tokens.colorBrandBackground),
    },
  },
  objectiveItem: {
    display: 'flex',
    alignItems: 'flex-start',
    ...shorthands.gap('16px'),
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
    fontSize: '1.25rem',
    fontWeight: '600',
    marginBottom: '6px',
    color: tokens.colorBrandBackground,
    display: 'block',
  },
  objectiveText: {
    fontSize: '1rem',
    lineHeight: '1.6',
    color: tokens.colorNeutralForeground2,
    display: 'block',
  },
  visionCard: {
    background: `linear-gradient(135deg, ${tokens.colorBrandBackground} 0%, #0053a0 100%)`,
    color: tokens.colorNeutralForegroundInverted,
    ...shorthands.padding('40px', '32px'),
    ...shorthands.borderRadius('12px'),
    marginTop: '40px',
    textAlign: 'center',
  },
  visionTitle: {
    fontSize: '2rem',
    marginBottom: '16px',
    fontWeight: '600',
    color: tokens.colorNeutralForegroundInverted,
    display: 'block',
    textAlign: 'center',
  },
  visionText: {
    fontSize: '1.15rem',
    lineHeight: '1.7',
    color: tokens.colorNeutralForegroundInverted,
    opacity: 0.95,
    display: 'block',
    textAlign: 'center',
  },
});

function Objectives() {
  const styles = useStyles();

  const objectives = dataService.getObjectives().map((obj, index) => (
    {
      title: obj.title,
      description: obj.description
    }
  ));

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
