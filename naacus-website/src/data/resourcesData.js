/**
 * Resources Mock Data
 */

export const resourcesData = [
  {
    id: 1,
    iconType: 'document',
    title: 'NAACUS Brochure',
    description: 'Download our brochure to learn more about NAACUS mission, objectives, and how to get involved.',
    buttonText: 'Download Brochure'
  },
  {
    id: 2,
    iconType: 'news',
    title: 'Newsletters',
    description: 'Stay updated with our latest newsletters featuring community news, events, and spiritual reflections.',
    buttonText: 'View Newsletters'
  },
  {
    id: 3,
    iconType: 'form',
    title: 'Membership Form',
    description: 'Join the NAACUS community! Download and complete our membership form to become a member.',
    buttonText: 'Get Membership Form'
  },
  {
    id: 4,
    iconType: 'document',
    title: 'Advocacy Documents',
    description: 'Access our advocacy resources supporting African Catholics and promoting social justice.',
    buttonText: 'View Documents'
  },
];

export const partnersData = [
  { id: 1, name: 'USCCB', fullName: 'United States Conference of Catholic Bishops' },
  { id: 2, name: 'Local Dioceses', fullName: 'Local Diocesan Offices' },
  { id: 3, name: 'African & Haitian Ministries', fullName: 'African and Haitian Catholic Ministries' },
  { id: 4, name: 'National Catholic Orgs', fullName: 'National Catholic Organizations' },
  { id: 5, name: 'Intercultural Programs', fullName: 'Intercultural Ministry Programs' },
];

export const getResources = () => resourcesData;
export const getPartners = () => partnersData;
