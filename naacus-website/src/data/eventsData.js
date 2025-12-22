/**
 * Events Data for NAACUS
 * Contains past events and upcoming events organized by type
 */

export const eventsData = {
  pastEvents: [
    {
      id: 'past-2023-summit',
      year: 2023,
      title: 'National Summit of African Catholics',
      date: 'July 15-17, 2023',
      location: 'Chicago, Illinois',
      description: 'The inaugural gathering that brought together African Catholics from across the nation to celebrate faith, heritage, and community.',
      highlights: [
        'Opening Mass with Bishop',
        'Cultural performances and celebrations',
        'Leadership workshops',
        'Networking breakfasts'
      ],
      attendees: '2,500+',
      status: 'completed'
    },
    {
      id: 'past-2024-regional',
      year: 2024,
      title: 'Regional Chapters Conference 2024',
      date: 'September 21-23, 2024',
      location: 'Atlanta, Georgia',
      description: 'A gathering of regional chapter leaders and volunteers to strengthen organizational efforts and community engagement.',
      highlights: [
        'Chapter leadership training',
        'Strategic planning sessions',
        'Spiritual formation retreat',
        'Community service projects'
      ],
      attendees: '1,200+',
      status: 'completed'
    },
    {
      id: 'past-2024-spiritual-retreat',
      year: 2024,
      title: 'Spiritual Retreat: "Deeper in Faith"',
      date: 'April 12-14, 2024',
      location: 'St. Louis, Missouri',
      description: 'A transformative retreat focused on deepening spiritual connection and Catholic identity among African Catholics.',
      highlights: [
        'Daily Mass and prayer services',
        'Eucharistic adoration',
        'Spiritual direction sessions',
        'Fellowship and dining'
      ],
      attendees: '800+',
      status: 'completed'
    }
  ],
  upcomingEvents: [
    {
      id: 'upcoming-2025-conference',
      year: 2025,
      title: 'NAACUS National Conference 2025',
      date: 'July 18-20, 2025',
      location: 'Houston, Texas',
      description: 'Our most comprehensive annual gathering celebrating African Catholic faith, culture, and service across America. Join us for inspiring presentations, spiritual renewal, and community fellowship.',
      highlights: [
        'Keynote addresses from Church leaders',
        'Concurrent workshops and seminars',
        'Cultural exhibitions and performances',
        'Youth leadership programs',
        'Ministerial networking sessions',
        'Closing Gala dinner'
      ],
      attendees: '3,500+',
      status: 'upcoming',
      registrationLink: '#'
    },
    {
      id: 'upcoming-2025-youth-summit',
      year: 2025,
      title: 'Youth Leadership Summit',
      date: 'August 8-10, 2025',
      location: 'Washington, D.C.',
      description: 'A dynamic summit designed for young African Catholics aged 18-35 to develop leadership skills, deepen faith, and build lasting networks.',
      highlights: [
        'Leadership development workshops',
        'Career networking sessions',
        'Spiritual mentorship programs',
        'Social justice initiatives',
        'Cultural celebrations',
        'Team building activities'
      ],
      attendees: '500+',
      status: 'upcoming',
      registrationLink: '#'
    },
    {
      id: 'upcoming-2025-women-retreat',
      year: 2025,
      title: 'Women\'s Ministry Retreat: "Rise and Shine"',
      date: 'October 3-5, 2025',
      location: 'Nashville, Tennessee',
      description: 'A special retreat for women to celebrate strength, faith, and community while exploring ministry opportunities.',
      highlights: [
        'Inspirational speakers',
        'Small group discussions',
        'Prayer and reflection circles',
        'Ministry training sessions',
        'Cultural performances',
        'Networking dinners'
      ],
      attendees: '400+',
      status: 'upcoming',
      registrationLink: '#'
    },
    {
      id: 'upcoming-2027-conference',
      year: 2027,
      title: 'The National Conference: "Together with Christ 2027"',
      date: 'July 2027',
      location: 'Baltimore, Maryland',
      description: 'A historic gathering that will bring together African Catholics from across America. This unprecedented event will be our largest conference to date.',
      highlights: [
        'Five-day comprehensive program',
        'Multiple cultural and spiritual tracks',
        'International speakers and leaders',
        'Youth and young adult programs',
        'Family activities and workshops',
        'Historic closing celebration'
      ],
      attendees: '5,000+',
      status: 'upcoming',
      registrationLink: '#'
    }
  ]
};

export const getEventsByYear = (year) => {
  return {
    past: eventsData.pastEvents.filter(event => event.year === year),
    upcoming: eventsData.upcomingEvents.filter(event => event.year === year)
  };
};

export const getAllYears = () => {
  const allEvents = [...eventsData.pastEvents, ...eventsData.upcomingEvents];
  const years = Array.from(new Set(allEvents.map(event => event.year))).sort((a, b) => a - b);
  return years;
};
