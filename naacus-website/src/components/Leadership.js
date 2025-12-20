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
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
    },
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
    { name: 'Mrs. Sally Stovall', title: 'President', phone: '317-727-5736', email: 'sstov92865@aol.com' },
    { name: 'Mr. Kwame Frimpong', title: 'Vice President', phone: '240-731-1526', email: 'akrasah@gmail.com' },
    { name: 'Mr. Alex Nana Danso', title: 'General Secretary', phone: '571-337-9797', email: 'lexidan6771@aol.com' },
    { name: 'Mr. Fessahaye Mebrahtu', title: 'Assistant General Secretary', phone: '414-526-0385', email: 'fmebrahtu@panafricoma.org' },
    { name: 'Mr. Bosco Miller', title: 'Publicity Secretary', phone: '210-315-2547', email: 'boscom@ameritech.net' },
    { name: 'Mrs. Reine Marie Assana', title: 'Assistant Publicity Secretary', phone: '414-614-4907', email: 'assanabebe@gmail.com' },
    { name: 'Sr. Henrietta Okoro HHCJ', title: 'Treasurer', phone: '832-605-5426', email: 'chikodi59@hotmail.com' },
    { name: 'Deacon Francis Chan', title: 'Financial Secretary', phone: '515-210-4444', email: 'nyalam05@gmail.com' },
    { name: 'Eric Mpesha', title: 'Assistant Financial Secretary', phone: '240-498-7171', email: 'empesha@yahoo.com' },
    { name: 'Dr. Seikor Bundu', title: 'Provost', phone: '240-994-6774', email: 'seikorbundu@hotmail.com' },
    { name: 'Mrs. Lucia Chuo', title: 'Coordinator for African Catholic Women', phone: '301-233-7662', email: 'lchuo@worldbank.org' },
    { name: 'Ms. Nkafu Amingwa', title: 'Coordinator for People with Disability', phone: '240-205-4759', email: 'nkafu.amingwa@gmail.com' },
    { name: 'Rebecca Tham', title: 'Youth and Young Adult Coordinator', phone: '267-982-7645', email: 'thamrebecca@gmail.com' },
    { name: 'Mr. Kwadwo Mireku', title: 'Ex-Officio Member', phone: '301-202-4277', email: 'kwadwomireku@hotmail.com' },
    { name: 'Mr. Ntal Alimasi', title: 'Ex-Officio Member', phone: '202-256-1781', email: 'ntal.alim@gmail.com' },
  ];

  const spiritualAdvisers = [
    { name: 'Rev. Fr. Aniedi Okure, O.P.', title: 'Spiritual Adviser', phone: '301-277-9787', email: 'okureop@gmail.com' },
    { name: 'Rev. Fr. Benoit Mukamba, CSSP', title: 'Spiritual Adviser', phone: '281-216-7894', email: 'kishben61@gmail.com' },
    { name: 'Sr. Joanna Okereke, HHCJ', title: 'Spiritual Adviser', phone: '202-541-3359', email: 'Jokereke@usccb.org' },
    { name: 'Msgr. Anselm Nwaorgu', title: 'Spiritual Adviser', phone: '908-456-7357', email: 'anwaorgu@yahoo.com' },
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
              <div>
                <Text className={styles.memberName}>{member.name}</Text>
                <Text className={styles.memberTitle}>{member.title}</Text>
                {member.phone && member.email && (
                  <Text className={styles.memberContact}>{member.phone} – {member.email}</Text>
                )}
              </div>
            </Card>
          ))}
        </div>

        <Text as="h3" className={styles.sectionTitle}>Spiritual Advisers</Text>
        <div className={styles.boardGrid}>
          {spiritualAdvisers.map((member) => (
            <Card key={member.name} className={styles.boardMember}>
              <div>
                <Text className={styles.memberName}>{member.name}</Text>
                <Text className={styles.memberTitle}>{member.title}</Text>
                {member.phone && member.email && (
                  <Text className={styles.memberContact}>{member.phone} – {member.email}</Text>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Leadership;
