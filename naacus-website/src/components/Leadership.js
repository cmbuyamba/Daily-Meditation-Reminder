import React, { useState } from 'react';
import { 
  makeStyles,
  shorthands,
  tokens,
  Text,
  Card,
  Dialog,
  DialogContent,
  DialogBody,
  DialogTitle,
  Button
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
  readMoreBtn: {
    marginTop: '12px',
    width: '100%',
  },
  dialogTitle: {
    fontSize: '1.5rem',
    fontWeight: '600',
    color: tokens.colorNeutralForeground1,
  },
  dialogContent: {
    display: 'flex',
    flexDirection: 'column',
    ...shorthands.gap('16px'),
  },
  contactLink: {
    color: '#0067b8',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
});

function Leadership() {
  const styles = useStyles();
  const [selectedMember, setSelectedMember] = useState(null);

  const executiveBoard = [
    { name: 'Mrs. Sally Stovall', title: 'President', phone: '317-727-5736', email: 'sally.stovall@naacus.org', photo: '' },
    { name: 'Mr. Kwame Frimpong', title: 'Vice President', phone: '240-731-1526', email: 'kwame.frimpong@naacus.org', photo: '' },
    { name: 'Mr. Alex Nana Danso', title: 'General Secretary', phone: '571-337-9797', email: 'alex.danso@naacus.org', photo: '' },
    { name: 'Mr. Fessahaye Mebrahtu', title: 'Assistant General Secretary', phone: '414-526-0385', email: 'fessahaye.mebrahtu@naacus.org', photo: '' },
    { name: 'Mr. Bosco Miller', title: 'Publicity Secretary', phone: '210-315-2547', email: 'bosco.miller@naacus.org', photo: '' },
    { name: 'Mrs. Reine Marie Assana', title: 'Assistant Publicity Secretary', phone: '414-614-4907', email: 'reine.assana@naacus.org', photo: '' },
    { name: 'Sr. Henrietta Okoro HHCJ', title: 'Treasurer', phone: '832-605-5426', email: 'henrietta.okoro@naacus.org', photo: '' },
    { name: 'Deacon Francis Chan', title: 'Financial Secretary', phone: '515-210-4444', email: 'francis.chan@naacus.org', photo: '' },
    { name: 'Eric Mpesha', title: 'Assistant Financial Secretary', phone: '240-498-7171', email: 'eric.mpesha@naacus.org', photo: '' },
    { name: 'Dr. Seikor Bundu', title: 'Provost', phone: '240-994-6774', email: 'seikor.bundu@naacus.org', photo: '' },
    { name: 'Mrs Lucia Chuo', title: 'Coordinator for African Catholic Women', phone: '301-233-7662', email: 'lucia.chuo@naacus.org', photo: '' },
    { name: 'Ms. Nkafu Amingwa', title: 'Coordinator for People with Disability', phone: '240-205-4759', email: 'nkafu.amingwa@naacus.org', photo: '' },
    { name: 'Rebecca Tham', title: 'Youth and Young Coordinator', phone: '267-982-7645', email: 'rebecca.tham@naacus.org', photo: '' },
    { name: 'Mr. Kwadwo Mireku', title: 'Board Member', phone: '301-202-4277', email: 'kwadwo.mireku@naacus.org', photo: '' },
    { name: 'Mr. Ntal Alimasi', title: 'Ex-Officio Member', phone: '202-256-1781', email: 'ntal.alimasi@naacus.org', photo: '' },
  ];

  const spiritualAdvisers = [
    { name: 'Rev. Fr. Aniedi Okure, O.P.', title: 'Spiritual Adviser', phone: '301-277-9787', email: 'aniedi.okure@naacus.org', photo: '' },
    { name: 'Rev. Fr. Benoit Mukamba, CSSP', title: 'Spiritual Adviser', phone: '281-216-7894', email: 'benoit.mukamba@naacus.org', photo: '' },
    { name: 'Sr. Joanna Okereke, HHCJ', title: 'Spiritual Adviser', phone: '202-541-3359', email: 'joanna.okereke@naacus.org', photo: '' },
    { name: 'Msgr. Anselm Nwaorgu', title: 'Spiritual Adviser', phone: '908-456-7357', email: 'anselm.nwaorgu@naacus.org', photo: '' },
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
                {member.phone && <Text className={styles.memberContact}>{member.phone}</Text>}
                {member.email && <Text className={styles.memberContact}><a href={`mailto:${member.email}`} style={{ color: '#0067b8', textDecoration: 'none' }}>{member.email}</a></Text>}
                <Button
                  className={styles.readMoreBtn}
                  appearance="primary"
                  onClick={() => setSelectedMember(member)}
                >
                  Read More
                </Button>
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
                {member.phone && <Text className={styles.memberContact}>{member.phone}</Text>}
                {member.email && <Text className={styles.memberContact}><a href={`mailto:${member.email}`} style={{ color: '#0067b8', textDecoration: 'none' }}>{member.email}</a></Text>}
                <Button
                  className={styles.readMoreBtn}
                  appearance="primary"
                  onClick={() => setSelectedMember(member)}
                >
                  Read More
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {selectedMember && (
        <Dialog open={true}>
          <DialogContent style={{ maxWidth: '500px' }}>
            <DialogTitle className={styles.dialogTitle}>
              {selectedMember.name}
            </DialogTitle>
            <DialogBody>
              <div className={styles.dialogContent}>
                <div>
                  <Text as="p" style={{ fontSize: '1rem', fontWeight: '500', color: tokens.colorNeutralForeground1 }}>
                    {selectedMember.title}
                  </Text>
                </div>

                <div>
                  <Text as="h4" style={{ fontSize: '0.95rem', fontWeight: '600', marginBottom: '12px', color: tokens.colorNeutralForeground1 }}>
                    About
                  </Text>
                  <Text as="p" style={{ fontSize: '0.9rem', lineHeight: '1.6', color: tokens.colorNeutralForeground2, marginBottom: '12px' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </Text>
                  <Text as="p" style={{ fontSize: '0.9rem', lineHeight: '1.6', color: tokens.colorNeutralForeground2 }}>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </Text>
                </div>

                <div>
                  <Text as="h4" style={{ fontSize: '0.95rem', fontWeight: '600', marginBottom: '8px', color: tokens.colorNeutralForeground1 }}>
                    Contact Information
                  </Text>
                  {selectedMember.phone && (
                    <Text as="p" style={{ fontSize: '0.9rem', color: tokens.colorNeutralForeground2, marginBottom: '4px' }}>
                      <strong>Phone:</strong> {selectedMember.phone}
                    </Text>
                  )}
                  {selectedMember.email && (
                    <Text as="p" style={{ fontSize: '0.9rem', color: tokens.colorNeutralForeground2 }}>
                      <strong>Email:</strong> <a href={`mailto:${selectedMember.email}`} className={styles.contactLink}>{selectedMember.email}</a>
                    </Text>
                  )}
                </div>
              <Button appearance="secondary" onClick={() => setSelectedMember(null)}>
                Close
              </Button>
            </div>
          </DialogBody>
        </DialogContent>
      </Dialog>
    )}
    </section>
  );
}

export default Leadership;
