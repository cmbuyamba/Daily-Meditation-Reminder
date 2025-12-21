import React, { useState } from 'react';
import {
  makeStyles,
  shorthands,
  tokens,
  Text,
  Button,
  Input,
  Dropdown,
  Option,
  Checkbox,
  Textarea,
  Card,
} from '@fluentui/react-components';

const useStyles = makeStyles({
  membershipPage: {
    paddingTop: '114px',
    backgroundColor: tokens.colorNeutralBackground1,
    minHeight: '100vh',
    ...shorthands.padding('0', '20px', '60px'),
  },
  container: {
    maxWidth: '900px',
    ...shorthands.margin('0', 'auto'),
  },
  header: {
    textAlign: 'center',
    marginBottom: '60px',
    ...shorthands.padding('40px', '0'),
  },
  title: {
    fontSize: '3.5rem',
    fontWeight: '600',
    color: tokens.colorBrandBackground,
    marginBottom: '16px',
    display: 'block',
    letterSpacing: '-0.02em',
    '@media (max-width: 768px)': {
      fontSize: '2.5rem',
    },
  },
  subtitle: {
    fontSize: '1.3rem',
    color: tokens.colorNeutralForeground2,
    lineHeight: '1.6',
    display: 'block',
  },
  formCard: {
    ...shorthands.padding('40px'),
    marginBottom: '30px',
    '@media (max-width: 768px)': {
      ...shorthands.padding('24px'),
    },
  },
  sectionTitle: {
    fontSize: '1.8rem',
    fontWeight: '600',
    color: tokens.colorBrandBackground,
    marginBottom: '24px',
    display: 'block',
    paddingBottom: '12px',
    borderBottom: `2px solid ${tokens.colorBrandBackground}`,
  },
  formGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    ...shorthands.gap('20px'),
    marginBottom: '24px',
    '@media (max-width: 768px)': {
      gridTemplateColumns: '1fr',
    },
  },
  formField: {
    display: 'flex',
    flexDirection: 'column',
    ...shorthands.gap('8px'),
  },
  formFieldFull: {
    gridColumn: '1 / -1',
  },
  label: {
    fontSize: '0.95rem',
    fontWeight: '600',
    color: tokens.colorNeutralForeground1,
  },
  required: {
    color: '#d13438',
  },
  checkboxGroup: {
    display: 'flex',
    flexDirection: 'column',
    ...shorthands.gap('12px'),
    ...shorthands.padding('12px'),
    backgroundColor: tokens.colorNeutralBackground2,
    ...shorthands.borderRadius('8px'),
  },
  submitButton: {
    marginTop: '32px',
    width: '100%',
    height: '56px',
    fontSize: '1.15rem',
    fontWeight: '600',
  },
  successMessage: {
    ...shorthands.padding('24px'),
    backgroundColor: '#dff6dd',
    ...shorthands.borderRadius('8px'),
    textAlign: 'center',
    marginTop: '24px',
  },
  successTitle: {
    fontSize: '1.5rem',
    fontWeight: '600',
    color: '#107c10',
    marginBottom: '12px',
    display: 'block',
  },
  successText: {
    fontSize: '1.05rem',
    color: tokens.colorNeutralForeground1,
    lineHeight: '1.6',
    display: 'block',
  },
});

function MembershipPage() {
  const styles = useStyles();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'United States',
    parishName: '',
    diocese: '',
    parishCity: '',
    parishState: '',
    countryOfOrigin: '',
    languagesSpoken: [],
    yearsInUS: '',
    occupation: '',
    skills: '',
    membershipType: 'individual',
    ministryInterests: [],
    emergencyName: '',
    emergencyRelationship: '',
    emergencyPhone: '',
    communicationPreferences: [],
    hearAbout: '',
    whyJoin: '',
  });

  const ministryOptions = [
    'Youth Ministry',
    'Music & Liturgy',
    'Social Justice',
    'Community Outreach',
    'Education & Catechesis',
    'Marriage & Family Life',
    'Cultural Events',
    'Leadership & Governance',
  ];

  const communicationOptions = [
    'Email',
    'Phone',
    'Text Message',
    'Mail',
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleCheckboxChange = (field, option, checked) => {
    setFormData(prev => ({
      ...prev,
      [field]: checked
        ? [...prev[field], option]
        : prev[field].filter(item => item !== option),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Membership form submitted:', formData);
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (submitted) {
    return (
      <div className={styles.membershipPage}>
        <div className={styles.container}>
          <div className={styles.successMessage}>
            <Text className={styles.successTitle}>Welcome to the NAACUS Family!</Text>
            <Text className={styles.successText}>
              Thank you for joining the National Association of African Catholics in the United States. 
              We've received your membership application and will be in touch within 2-3 business days 
              to complete your registration. Check your email for confirmation and next steps.
            </Text>
            <Button
              appearance="primary"
              size="large"
              onClick={() => window.location.href = '/'}
              style={{ marginTop: '24px' }}
            >
              Return to Home
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.membershipPage}>
      <div className={styles.container}>
        <div className={styles.header}>
          <Text as="h1" className={styles.title}>Join NAACUS</Text>
          <Text className={styles.subtitle}>
            Become part of a vibrant community dedicated to strengthening the African Catholic presence 
            in the United States. Fill out the form below to begin your membership journey.
          </Text>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Personal Information */}
          <Card className={styles.formCard}>
            <Text className={styles.sectionTitle}>Personal Information</Text>
            <div className={styles.formGrid}>
              <div className={styles.formField}>
                <label className={styles.label}>
                  First Name <span className={styles.required}>*</span>
                </label>
                <Input
                  required
                  value={formData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                />
              </div>
              <div className={styles.formField}>
                <label className={styles.label}>
                  Last Name <span className={styles.required}>*</span>
                </label>
                <Input
                  required
                  value={formData.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                />
              </div>
              <div className={styles.formField}>
                <label className={styles.label}>
                  Email <span className={styles.required}>*</span>
                </label>
                <Input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                />
              </div>
              <div className={styles.formField}>
                <label className={styles.label}>
                  Phone <span className={styles.required}>*</span>
                </label>
                <Input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                />
              </div>
              <div className={styles.formField}>
                <label className={styles.label}>Date of Birth</label>
                <Input
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                />
              </div>
            </div>
          </Card>

          {/* Address Information */}
          <Card className={styles.formCard}>
            <Text className={styles.sectionTitle}>Address</Text>
            <div className={styles.formGrid}>
              <div className={`${styles.formField} ${styles.formFieldFull}`}>
                <label className={styles.label}>
                  Street Address <span className={styles.required}>*</span>
                </label>
                <Input
                  required
                  value={formData.street}
                  onChange={(e) => handleInputChange('street', e.target.value)}
                />
              </div>
              <div className={styles.formField}>
                <label className={styles.label}>
                  City <span className={styles.required}>*</span>
                </label>
                <Input
                  required
                  value={formData.city}
                  onChange={(e) => handleInputChange('city', e.target.value)}
                />
              </div>
              <div className={styles.formField}>
                <label className={styles.label}>
                  State <span className={styles.required}>*</span>
                </label>
                <Input
                  required
                  value={formData.state}
                  onChange={(e) => handleInputChange('state', e.target.value)}
                />
              </div>
              <div className={styles.formField}>
                <label className={styles.label}>
                  Zip Code <span className={styles.required}>*</span>
                </label>
                <Input
                  required
                  value={formData.zipCode}
                  onChange={(e) => handleInputChange('zipCode', e.target.value)}
                />
              </div>
              <div className={styles.formField}>
                <label className={styles.label}>Country</label>
                <Input
                  value={formData.country}
                  onChange={(e) => handleInputChange('country', e.target.value)}
                />
              </div>
            </div>
          </Card>

          {/* Parish Information */}
          <Card className={styles.formCard}>
            <Text className={styles.sectionTitle}>Parish Information</Text>
            <div className={styles.formGrid}>
              <div className={styles.formField}>
                <label className={styles.label}>
                  Parish Name <span className={styles.required}>*</span>
                </label>
                <Input
                  required
                  value={formData.parishName}
                  onChange={(e) => handleInputChange('parishName', e.target.value)}
                />
              </div>
              <div className={styles.formField}>
                <label className={styles.label}>Diocese</label>
                <Input
                  value={formData.diocese}
                  onChange={(e) => handleInputChange('diocese', e.target.value)}
                />
              </div>
              <div className={styles.formField}>
                <label className={styles.label}>City</label>
                <Input
                  value={formData.parishCity}
                  onChange={(e) => handleInputChange('parishCity', e.target.value)}
                />
              </div>
              <div className={styles.formField}>
                <label className={styles.label}>State</label>
                <Input
                  value={formData.parishState}
                  onChange={(e) => handleInputChange('parishState', e.target.value)}
                />
              </div>
            </div>
          </Card>

          {/* Background Information */}
          <Card className={styles.formCard}>
            <Text className={styles.sectionTitle}>Background & Experience</Text>
            <div className={styles.formGrid}>
              <div className={styles.formField}>
                <label className={styles.label}>Country of Origin</label>
                <Input
                  value={formData.countryOfOrigin}
                  onChange={(e) => handleInputChange('countryOfOrigin', e.target.value)}
                />
              </div>
              <div className={styles.formField}>
                <label className={styles.label}>Years in United States</label>
                <Input
                  type="number"
                  value={formData.yearsInUS}
                  onChange={(e) => handleInputChange('yearsInUS', e.target.value)}
                />
              </div>
              <div className={`${styles.formField} ${styles.formFieldFull}`}>
                <label className={styles.label}>Occupation/Profession</label>
                <Input
                  value={formData.occupation}
                  onChange={(e) => handleInputChange('occupation', e.target.value)}
                />
              </div>
              <div className={`${styles.formField} ${styles.formFieldFull}`}>
                <label className={styles.label}>Skills & Expertise</label>
                <Textarea
                  placeholder="Share any skills, talents, or expertise you bring to the community..."
                  value={formData.skills}
                  onChange={(e) => handleInputChange('skills', e.target.value)}
                  rows={3}
                />
              </div>
            </div>
          </Card>

          {/* Membership Type & Interests */}
          <Card className={styles.formCard}>
            <Text className={styles.sectionTitle}>Membership Details</Text>
            <div className={styles.formGrid}>
              <div className={`${styles.formField} ${styles.formFieldFull}`}>
                <label className={styles.label}>
                  Membership Type <span className={styles.required}>*</span>
                </label>
                <Dropdown
                  value={formData.membershipType}
                  onOptionSelect={(e, data) => handleInputChange('membershipType', data.optionValue)}
                >
                  <Option value="individual">Individual Membership</Option>
                  <Option value="family">Family Membership</Option>
                  <Option value="student">Student Membership</Option>
                  <Option value="senior">Senior Membership</Option>
                </Dropdown>
              </div>
              <div className={`${styles.formField} ${styles.formFieldFull}`}>
                <label className={styles.label}>Ministry Interests (Select all that apply)</label>
                <div className={styles.checkboxGroup}>
                  {ministryOptions.map((option) => (
                    <Checkbox
                      key={option}
                      label={option}
                      checked={formData.ministryInterests.includes(option)}
                      onChange={(e, data) => handleCheckboxChange('ministryInterests', option, data.checked)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </Card>

          {/* Emergency Contact */}
          <Card className={styles.formCard}>
            <Text className={styles.sectionTitle}>Emergency Contact</Text>
            <div className={styles.formGrid}>
              <div className={styles.formField}>
                <label className={styles.label}>Contact Name</label>
                <Input
                  value={formData.emergencyName}
                  onChange={(e) => handleInputChange('emergencyName', e.target.value)}
                />
              </div>
              <div className={styles.formField}>
                <label className={styles.label}>Relationship</label>
                <Input
                  value={formData.emergencyRelationship}
                  onChange={(e) => handleInputChange('emergencyRelationship', e.target.value)}
                />
              </div>
              <div className={`${styles.formField} ${styles.formFieldFull}`}>
                <label className={styles.label}>Emergency Phone</label>
                <Input
                  type="tel"
                  value={formData.emergencyPhone}
                  onChange={(e) => handleInputChange('emergencyPhone', e.target.value)}
                />
              </div>
            </div>
          </Card>

          {/* Additional Information */}
          <Card className={styles.formCard}>
            <Text className={styles.sectionTitle}>Additional Information</Text>
            <div className={styles.formGrid}>
              <div className={`${styles.formField} ${styles.formFieldFull}`}>
                <label className={styles.label}>Communication Preferences</label>
                <div className={styles.checkboxGroup}>
                  {communicationOptions.map((option) => (
                    <Checkbox
                      key={option}
                      label={option}
                      checked={formData.communicationPreferences.includes(option)}
                      onChange={(e, data) => handleCheckboxChange('communicationPreferences', option, data.checked)}
                    />
                  ))}
                </div>
              </div>
              <div className={`${styles.formField} ${styles.formFieldFull}`}>
                <label className={styles.label}>How did you hear about NAACUS?</label>
                <Input
                  value={formData.hearAbout}
                  onChange={(e) => handleInputChange('hearAbout', e.target.value)}
                />
              </div>
              <div className={`${styles.formField} ${styles.formFieldFull}`}>
                <label className={styles.label}>Why do you want to join NAACUS?</label>
                <Textarea
                  placeholder="Share what motivates you to become a member..."
                  value={formData.whyJoin}
                  onChange={(e) => handleInputChange('whyJoin', e.target.value)}
                  rows={4}
                />
              </div>
            </div>
          </Card>

          <Button
            appearance="primary"
            size="large"
            type="submit"
            className={styles.submitButton}
          >
            Submit Membership Application
          </Button>
        </form>
      </div>
    </div>
  );
}

export default MembershipPage;
