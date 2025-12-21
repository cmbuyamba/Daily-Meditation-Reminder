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
  volunteerPage: {
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
    color: '#d83b01',
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
    color: '#d83b01',
    marginBottom: '24px',
    display: 'block',
    paddingBottom: '12px',
    borderBottom: `2px solid #d83b01`,
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
    backgroundColor: '#d83b01',
    borderColor: '#d83b01',
    '&:hover': {
      backgroundColor: '#c23600',
      borderColor: '#c23600',
    },
  },
  successMessage: {
    ...shorthands.padding('24px'),
    backgroundColor: '#fef0e6',
    ...shorthands.borderRadius('8px'),
    textAlign: 'center',
    marginTop: '24px',
  },
  successTitle: {
    fontSize: '1.5rem',
    fontWeight: '600',
    color: '#d83b01',
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

function VolunteerPage() {
  const styles = useStyles();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    city: '',
    state: '',
    zipCode: '',
    languagesSpoken: '',
    skills: '',
    volunteerInterests: [],
    availability: [],
    timePreference: '',
    hoursPerMonth: '1-5',
    previousExperience: '',
    preferredRole: '',
    backgroundCheckConsent: false,
    emergencyName: '',
    emergencyPhone: '',
    specialSkills: '',
    whyVolunteer: '',
  });

  const volunteerInterestOptions = [
    'Event Planning & Coordination',
    'Youth & Children Programs',
    'Administrative Support',
    'Communications & Social Media',
    'Fundraising',
    'Community Outreach',
    'Translation Services',
    'Technology & Website',
    'Hospitality & Welcoming',
    'Music & Liturgy',
    'Education & Tutoring',
    'Prayer & Spiritual Support',
  ];

  const availabilityOptions = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
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
    console.log('Volunteer form submitted:', formData);
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (submitted) {
    return (
      <div className={styles.volunteerPage}>
        <div className={styles.container}>
          <div className={styles.successMessage}>
            <Text className={styles.successTitle}>Thank You for Your Commitment!</Text>
            <Text className={styles.successText}>
              Your volunteer application has been received. We're grateful for your willingness to serve 
              the NAACUS community. Our volunteer coordinator will contact you within 3-5 business days 
              to discuss opportunities that match your interests and availability.
            </Text>
            <Button
              appearance="primary"
              size="large"
              onClick={() => window.location.href = '/'}
              style={{ 
                marginTop: '24px',
                backgroundColor: '#d83b01',
                borderColor: '#d83b01',
              }}
            >
              Return to Home
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.volunteerPage}>
      <div className={styles.container}>
        <div className={styles.header}>
          <Text as="h1" className={styles.title}>Volunteer with NAACUS</Text>
          <Text className={styles.subtitle}>
            Make a difference in the African Catholic community. Share your time, talents, and passion 
            to help strengthen our mission and serve our members.
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
              <div className={`${styles.formField} ${styles.formFieldFull}`}>
                <label className={styles.label}>Zip Code</label>
                <Input
                  value={formData.zipCode}
                  onChange={(e) => handleInputChange('zipCode', e.target.value)}
                />
              </div>
            </div>
          </Card>

          {/* Skills & Background */}
          <Card className={styles.formCard}>
            <Text className={styles.sectionTitle}>Skills & Experience</Text>
            <div className={styles.formGrid}>
              <div className={`${styles.formField} ${styles.formFieldFull}`}>
                <label className={styles.label}>Languages Spoken</label>
                <Input
                  placeholder="e.g., English, French, Swahili, Portuguese..."
                  value={formData.languagesSpoken}
                  onChange={(e) => handleInputChange('languagesSpoken', e.target.value)}
                />
              </div>
              <div className={`${styles.formField} ${styles.formFieldFull}`}>
                <label className={styles.label}>Professional Skills & Expertise</label>
                <Textarea
                  placeholder="Share your professional skills, certifications, or relevant expertise..."
                  value={formData.skills}
                  onChange={(e) => handleInputChange('skills', e.target.value)}
                  rows={3}
                />
              </div>
              <div className={`${styles.formField} ${styles.formFieldFull}`}>
                <label className={styles.label}>Previous Volunteer Experience</label>
                <Textarea
                  placeholder="Describe any previous volunteer experience, especially in church or community organizations..."
                  value={formData.previousExperience}
                  onChange={(e) => handleInputChange('previousExperience', e.target.value)}
                  rows={3}
                />
              </div>
              <div className={`${styles.formField} ${styles.formFieldFull}`}>
                <label className={styles.label}>Special Skills or Talents</label>
                <Textarea
                  placeholder="e.g., graphic design, event planning, music, photography, public speaking..."
                  value={formData.specialSkills}
                  onChange={(e) => handleInputChange('specialSkills', e.target.value)}
                  rows={3}
                />
              </div>
            </div>
          </Card>

          {/* Volunteer Interests */}
          <Card className={styles.formCard}>
            <Text className={styles.sectionTitle}>Volunteer Interests</Text>
            <div className={styles.formGrid}>
              <div className={`${styles.formField} ${styles.formFieldFull}`}>
                <label className={styles.label}>
                  Areas of Interest <span className={styles.required}>*</span> (Select all that apply)
                </label>
                <div className={styles.checkboxGroup}>
                  {volunteerInterestOptions.map((option) => (
                    <Checkbox
                      key={option}
                      label={option}
                      checked={formData.volunteerInterests.includes(option)}
                      onChange={(e, data) => handleCheckboxChange('volunteerInterests', option, data.checked)}
                    />
                  ))}
                </div>
              </div>
              <div className={`${styles.formField} ${styles.formFieldFull}`}>
                <label className={styles.label}>Preferred Role or Tasks</label>
                <Textarea
                  placeholder="Describe the type of volunteer work you'd most enjoy or excel at..."
                  value={formData.preferredRole}
                  onChange={(e) => handleInputChange('preferredRole', e.target.value)}
                  rows={3}
                />
              </div>
            </div>
          </Card>

          {/* Availability */}
          <Card className={styles.formCard}>
            <Text className={styles.sectionTitle}>Availability</Text>
            <div className={styles.formGrid}>
              <div className={`${styles.formField} ${styles.formFieldFull}`}>
                <label className={styles.label}>
                  Days Available <span className={styles.required}>*</span>
                </label>
                <div className={styles.checkboxGroup}>
                  {availabilityOptions.map((option) => (
                    <Checkbox
                      key={option}
                      label={option}
                      checked={formData.availability.includes(option)}
                      onChange={(e, data) => handleCheckboxChange('availability', option, data.checked)}
                    />
                  ))}
                </div>
              </div>
              <div className={styles.formField}>
                <label className={styles.label}>
                  Time Preference <span className={styles.required}>*</span>
                </label>
                <Dropdown
                  value={formData.timePreference}
                  onOptionSelect={(e, data) => handleInputChange('timePreference', data.optionValue)}
                  placeholder="Select time preference"
                >
                  <Option value="morning">Morning (8am - 12pm)</Option>
                  <Option value="afternoon">Afternoon (12pm - 5pm)</Option>
                  <Option value="evening">Evening (5pm - 9pm)</Option>
                  <Option value="flexible">Flexible</Option>
                </Dropdown>
              </div>
              <div className={styles.formField}>
                <label className={styles.label}>
                  Hours Per Month <span className={styles.required}>*</span>
                </label>
                <Dropdown
                  value={formData.hoursPerMonth}
                  onOptionSelect={(e, data) => handleInputChange('hoursPerMonth', data.optionValue)}
                >
                  <Option value="1-5">1-5 hours</Option>
                  <Option value="6-10">6-10 hours</Option>
                  <Option value="11-20">11-20 hours</Option>
                  <Option value="20+">20+ hours</Option>
                </Dropdown>
              </div>
            </div>
          </Card>

          {/* Emergency Contact & Consent */}
          <Card className={styles.formCard}>
            <Text className={styles.sectionTitle}>Emergency Contact & Consent</Text>
            <div className={styles.formGrid}>
              <div className={styles.formField}>
                <label className={styles.label}>
                  Emergency Contact Name <span className={styles.required}>*</span>
                </label>
                <Input
                  required
                  value={formData.emergencyName}
                  onChange={(e) => handleInputChange('emergencyName', e.target.value)}
                />
              </div>
              <div className={styles.formField}>
                <label className={styles.label}>
                  Emergency Phone <span className={styles.required}>*</span>
                </label>
                <Input
                  type="tel"
                  required
                  value={formData.emergencyPhone}
                  onChange={(e) => handleInputChange('emergencyPhone', e.target.value)}
                />
              </div>
              <div className={`${styles.formField} ${styles.formFieldFull}`}>
                <Checkbox
                  label="I consent to a background check if required for my volunteer role"
                  checked={formData.backgroundCheckConsent}
                  onChange={(e, data) => handleInputChange('backgroundCheckConsent', data.checked)}
                />
              </div>
            </div>
          </Card>

          {/* Why Volunteer */}
          <Card className={styles.formCard}>
            <Text className={styles.sectionTitle}>Tell Us More</Text>
            <div className={styles.formGrid}>
              <div className={`${styles.formField} ${styles.formFieldFull}`}>
                <label className={styles.label}>
                  Why do you want to volunteer with NAACUS? <span className={styles.required}>*</span>
                </label>
                <Textarea
                  required
                  placeholder="Share your motivation and what you hope to contribute to our community..."
                  value={formData.whyVolunteer}
                  onChange={(e) => handleInputChange('whyVolunteer', e.target.value)}
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
            Submit Volunteer Application
          </Button>
        </form>
      </div>
    </div>
  );
}

export default VolunteerPage;
