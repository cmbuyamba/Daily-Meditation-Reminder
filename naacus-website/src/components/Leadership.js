import React from 'react';
import { 
  makeStyles,
  shorthands,
  tokens,
  Text,
  Card
} from '@fluentui/react-components';

const useStyles = makeStyles({
  leadership: {
    backgroundColor: '#faf9f8',
    ...shorthands.padding('50px', '20px'),
  },
  leadershipTitle: {
    fontSize: '2.75rem',
    textAlign: 'center',
    marginBottom: '16px',
    color: tokens.colorNeutralForeground1,
    fontWeight: '600',
    display: 'block',
    letterSpacing: '-0.02em',
  },
  leadershipContent: {
    maxWidth: '1200px',
    ...shorthands.margin('0', 'auto'),
  },
  leadershipIntro: {
    fontSize: '1.125rem',
    lineHeight: '1.7',
    color: tokens.colorNeutralForeground2,
    textAlign: 'center',
    marginBottom: '40px',
    maxWidth: '800px',
    ...shorthands.margin('0', 'auto', '40px'),
    display: 'block',
  },
  sectionTitle: {
    fontSize: '1.75rem',
    marginTop: '40px',
    marginBottom: '24px',
    color: tokens.colorNeutralForeground1,
    fontWeight: '600',
    textAlign: 'center',
    display: 'block',
  },
  boardGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    ...shorthands.gap('24px'),
    marginBottom: '40px',
  },
  boardMember: {
    ...shorthands.padding('24px'),
    ...shorthands.transition('all', '0.3s', 'ease'),
    backgroundColor: tokens.colorNeutralBackground1,
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
    ...shorthands.borderRadius('8px'),
    ...shorthands.overflow('hidden'),
    textAlign: 'center',
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
    },
  },
  photo: {
    width: '100%',
    height: '220px',
    objectFit: 'cover',
    display: 'block',
  },
  photoPlaceholder: {
    width: '100%',
    height: '220px',
    background: 'linear-gradient(180deg, #e6f0ff 0%, #cbd5e1 100%)',
    display: 'block',
  },
  memberBody: {
    ...shorthands.padding('16px', '16px', '8px'),
  },
  memberName: {
    fontSize: '1.125rem',
    marginBottom: '8px',
    color: tokens.colorNeutralForeground1,
    fontWeight: '600',
    display: 'block',
  },
  memberTitle: {
    fontSize: '0.9rem',
    lineHeight: '1.5',
    color: tokens.colorNeutralForeground2,
    display: 'block',
  },
  memberContact: {
    fontSize: '0.9rem',
    lineHeight: '1.5',
    color: tokens.colorNeutralForeground2,
    display: 'block',
    marginTop: '6px',
  },
});

function Leadership() {
  const styles = useStyles();

  const executiveBoard = [
    { name: 'Mrs. Sally Stovall', title: 'President', photo: '' },
    { name: 'Mr. Kwame Frimpong', title: 'Vice President', photo: '' },
    { name: 'Mr. Alex Nana Danso', title: 'General Secretary', photo: '' },
    { name: 'Mr. Fessahaye Mebrahtu', title: 'Assistant General Secretary', photo: '' },
    { name: 'Mr. Bosco Miller', title: 'Publicity Secretary', photo: '' },
    { name: 'Mrs. Reine Marie Assana', title: 'Assistant Publicity Secretary', photo: '' },
    { name: 'Sr. Henrietta Okoro HHCJ', title: 'Treasurer', photo: '' },
    { name: 'Deacon Francis Chan', title: 'Financial Secretary', photo: '' },
  ];

  const spiritualAdvisers = [
    { name: 'Rev. Fr. Aniedi Okure, O.P.', title: 'Spiritual Adviser', photo: '' },
    { name: 'Rev. Fr. Benoit Mukamba, CSSP', title: 'Spiritual Adviser', photo: '' },
    { name: 'Sr. Joanna Okereke, HHCJ', title: 'Spiritual Adviser', photo: '' },
    { name: 'Msgr. Anselm Nwaorgu', title: 'Spiritual Adviser', photo: '' },
  ];

  return (
    <section id="leadership" className={styles.leadership}>
      <Text as="h2" className={styles.leadershipTitle}>Leadership</Text>
      <div className={styles.leadershipContent}>
        <Text as="p" className={styles.leadershipIntro}>
          Our dedicated leaders serve the NAACUS community with commitment and passion, 
          guiding our mission to unite African Catholic communities across the United States.
        </Text>

        <Text as="h3" className={styles.sectionTitle}>Executive Board</Text>
        <div className={styles.boardGrid}>
          {executiveBoard.map((member) => (
            <Card key={member.name} className={styles.boardMember}>
              {member.photo ? (
                <img src={member.photo} alt={member.name} className={styles.photo} />
              ) : (
                <div className={styles.photoPlaceholder} />
              )}
              <div className={styles.memberBody}>
                <Text className={styles.memberName}>{member.name}</Text>
                <Text className={styles.memberTitle}>{member.title}</Text>
              </div>
            </Card>
          ))}
        </div>

        <Text as="h3" className={styles.sectionTitle}>Spiritual Advisers</Text>
        <div className={styles.boardGrid}>
          {spiritualAdvisers.map((member) => (
            <Card key={member.name} className={styles.boardMember}>
              {member.photo ? (
                <img src={member.photo} alt={member.name} className={styles.photo} />
              ) : (
                <div className={styles.photoPlaceholder} />
              )}
              <div className={styles.memberBody}>
                <Text className={styles.memberName}>{member.name}</Text>
                <Text className={styles.memberTitle}>{member.title}</Text>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Leadership;
