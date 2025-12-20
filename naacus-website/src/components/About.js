import React from 'react';
import { useTranslation } from 'react-i18next';
import { 
  makeStyles,
  shorthands,
  tokens,
  Text,
  Card,
  CardHeader
} from '@fluentui/react-components';

const useStyles = makeStyles({
  about: {
    backgroundColor: '#faf9f8',
    ...shorthands.padding('50px', '20px'),
  },
  aboutTitle: {
    fontSize: '2.75rem',
    textAlign: 'center',
    marginBottom: '16px',
    color: tokens.colorNeutralForeground1,
    fontWeight: '600',
    display: 'block',
    letterSpacing: '-0.02em',
  },
  aboutContent: {
    maxWidth: '1200px',
    ...shorthands.margin('0', 'auto'),
  },
  aboutIntro: {
    fontSize: '1.125rem',
    lineHeight: '1.7',
    color: tokens.colorNeutralForeground2,
    textAlign: 'center',
    marginBottom: '40px',
    maxWidth: '800px',
    ...shorthands.margin('0', 'auto', '40px'),
    display: 'block',
  },
  missionValues: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    ...shorthands.gap('30px'),
  },
  missionItem: {
    textAlign: 'center',
    ...shorthands.padding('40px', '32px'),
    ...shorthands.transition('all', '0.3s', 'ease'),
    backgroundColor: tokens.colorNeutralBackground1,
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
    ...shorthands.borderRadius('8px'),
    '&:hover': {
      transform: 'translateY(-8px)',
      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
    },
  },
  icon: {
    fontSize: '3rem',
    marginBottom: '20px',
    display: 'block',
  },
  itemTitle: {
    fontSize: '1.375rem',
    marginBottom: '12px',
    color: tokens.colorNeutralForeground1,
    fontWeight: '600',
  },
  itemText: {
    fontSize: '1rem',
    lineHeight: '1.6',
    color: tokens.colorNeutralForeground2,
  },
});

function About() {
  const { t } = useTranslation();
  const styles = useStyles();

  return (
    <section id="about" className={styles.about}>
      <Text as="h2" className={styles.aboutTitle}>{t('about.title')}</Text>
      <div className={styles.aboutContent}>
        <Text as="p" className={styles.aboutIntro}>
          {t('about.intro')}
        </Text>
        <div className={styles.missionValues}>
          <Card className={styles.missionItem}>
            <div className={styles.icon}>🎯</div>
            <CardHeader
              header={<Text className={styles.itemTitle}>{t('about.mission.title')}</Text>}
              description={
                <Text className={styles.itemText}>
                  {t('about.mission.description')}
                </Text>
              }
            />
          </Card>
          <Card className={styles.missionItem}>
            <div className={styles.icon}>✨</div>
            <CardHeader
              header={<Text className={styles.itemTitle}>{t('about.vision.title')}</Text>}
              description={
                <Text className={styles.itemText}>
                  {t('about.vision.description')}
                </Text>
              }
            />
          </Card>
          <Card className={styles.missionItem}>
            <div className={styles.icon}>🤝</div>
            <CardHeader
              header={<Text className={styles.itemTitle}>{t('about.motto.title')}</Text>}
              description={
                <Text className={styles.itemText}>
                  {t('about.motto.description')}
                </Text>
              }
            />
          </Card>
        </div>
      </div>
    </section>
  );
}

export default About;
