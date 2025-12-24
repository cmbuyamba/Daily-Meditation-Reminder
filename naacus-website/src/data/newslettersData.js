/**
 * Newsletters Mock Data
 * Contains monthly newsletters with articles and updates
 */

export const newslettersData = [
  {
    id: 1,
    title: 'December 2024 Newsletter',
    date: 'December 2024',
    month: 'December',
    year: 2024,
    featured: true,
    coverImage: 'newsletter-dec',
    articles: [
      {
        id: 1,
        title: 'The Spirit of Giving: NAACUS Year-End Reflection',
        excerpt: 'As we approach the end of 2024, we celebrate the generosity and dedication of our community members who have supported our mission throughout the year.',
        content: 'This article highlights the remarkable contributions and volunteer efforts that have strengthened our mission to serve African Catholics across the nation.',
        category: 'Community'
      },
      {
        id: 2,
        title: 'Preparing for the 2025 Annual Conference',
        excerpt: 'Join us as we announce the dates and theme for our upcoming 2025 National Conference in Chicago.',
        content: 'Early bird registration is now open. Learn about the exciting speakers, workshops, and networking opportunities planned for this year\'s event.',
        category: 'Events'
      }
    ]
  },
  {
    id: 2,
    title: 'November 2024 Newsletter',
    date: 'November 2024',
    month: 'November',
    year: 2024,
    featured: false,
    coverImage: 'newsletter-nov',
    articles: [
      {
        id: 1,
        title: 'Celebrating Heritage: African Catholic Appreciation Month',
        excerpt: 'November marks a special time to celebrate the rich heritage and contributions of African Catholics in the United States.',
        content: 'From spiritual traditions to community leadership, African Catholics continue to strengthen the fabric of the Catholic Church across America.',
        category: 'Heritage'
      },
      {
        id: 2,
        title: 'Member Spotlight: Stories from Our Community',
        excerpt: 'We feature the inspiring stories of NAACUS members making a difference in their local communities.',
        content: 'Read about the incredible work being done by our volunteers and leaders in fellowship, ministry, and advocacy.',
        category: 'Members'
      },
      {
        id: 3,
        title: 'Volunteer Opportunities This Season',
        excerpt: 'Discover ways to give back during the holiday season with NAACUS-supported initiatives.',
        content: 'From food drives to community outreach programs, there are many ways to make a difference this holiday season.',
        category: 'Volunteer'
      }
    ]
  },
  {
    id: 3,
    title: 'October 2024 Newsletter',
    date: 'October 2024',
    month: 'October',
    year: 2024,
    featured: false,
    coverImage: 'newsletter-oct',
    articles: [
      {
        id: 1,
        title: 'Empowerment Through Faith: NAACUS Leadership Training',
        excerpt: 'Our latest leadership training program equipped regional chapter leaders with tools for community engagement.',
        content: 'Participants learned about effective ministry strategies, organizational development, and spiritual growth in leadership roles.',
        category: 'Training'
      },
      {
        id: 2,
        title: 'New Chapters Launched Across the Country',
        excerpt: 'NAACUS continues to expand its presence with new chapters opening in major metropolitan areas.',
        content: 'These new chapters bring our mission closer to African Catholic communities seeking fellowship and spiritual support.',
        category: 'Growth'
      }
    ]
  },
  {
    id: 4,
    title: 'September 2024 Newsletter',
    date: 'September 2024',
    month: 'September',
    year: 2024,
    featured: false,
    coverImage: 'newsletter-sep',
    articles: [
      {
        id: 1,
        title: 'Back to School: Ministry for Young Catholics',
        excerpt: 'As students return to school, NAACUS launches targeted programs for young African Catholic professionals.',
        content: 'From young adult ministries to campus chaplaincy partnerships, we support the spiritual development of the next generation.',
        category: 'Youth'
      },
      {
        id: 2,
        title: 'Advocacy Update: Social Justice Initiatives',
        excerpt: 'NAACUS continues its commitment to social justice and advocacy on behalf of African Catholic communities.',
        content: 'Our advocacy team has been active in promoting policies that support the dignity and wellbeing of all people.',
        category: 'Advocacy'
      }
    ]
  },
  {
    id: 5,
    title: 'August 2024 Newsletter',
    date: 'August 2024',
    month: 'August',
    year: 2024,
    featured: false,
    coverImage: 'newsletter-aug',
    articles: [
      {
        id: 1,
        title: 'Summer Fellowship Programs: Building Community',
        excerpt: 'Our summer fellowship programs brought together African Catholics for meaningful connections and spiritual growth.',
        content: 'From regional retreats to family gatherings, participants experienced the joy of Catholic community and shared values.',
        category: 'Fellowship'
      },
      {
        id: 2,
        title: 'Resource Highlight: Spiritual Reading Recommendations',
        excerpt: 'We share a curated list of spiritual books and resources for reflection and growth.',
        content: 'These recommended readings explore themes of faith, African heritage, and Catholic identity.',
        category: 'Resources'
      }
    ]
  },
  {
    id: 6,
    title: 'July 2024 Newsletter',
    date: 'July 2024',
    month: 'July',
    year: 2024,
    featured: false,
    coverImage: 'newsletter-july',
    articles: [
      {
        id: 1,
        title: 'National Summit 2024: Bringing People Together',
        excerpt: 'Our annual National Summit celebrated African Catholic unity and community on a national scale.',
        content: 'Over 2,000 participants gathered to celebrate faith, share experiences, and strengthen networks across the country.',
        category: 'Events'
      },
      {
        id: 2,
        title: 'Testimonies: Lives Changed Through NAACUS',
        excerpt: 'Members share how NAACUS has impacted their spiritual journey and community involvement.',
        content: 'These powerful testimonies demonstrate the transformative power of fellowship, faith, and collective action.',
        category: 'Community'
      }
    ]
  }
];

export const getNewsletters = () => newslettersData;

export const getFeaturedNewsletter = () => {
  return newslettersData.find(newsletter => newsletter.featured) || newslettersData[0];
};

export const getNewslettersByYear = (year) => {
  return newslettersData.filter(newsletter => newsletter.year === year);
};

export const getNewsletterById = (id) => {
  return newslettersData.find(newsletter => newsletter.id === id);
};
