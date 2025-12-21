/**
 * Chatbot Service for WhatsApp Server
 * 
 * This is a Node.js compatible version of the chatbot service
 * that works with the WhatsApp webhook server.
 */

// FAQ Data
const faqCategories = {
  ABOUT: 'about',
  MEMBERSHIP: 'membership',
  EVENTS: 'events',
  PROGRAMS: 'programs',
  CONTACT: 'contact',
  GENERAL: 'general'
};

const faqData = [
  // ABOUT NAACUS
  {
    id: 'about-1',
    category: faqCategories.ABOUT,
    question: 'What is NAACUS?',
    keywords: ['what is naacus', 'about naacus', 'naacus meaning', 'organization'],
    answer: 'NAACUS stands for the National Association of African Catholics in the United States. We unite African Catholic communities across the nation to promote faith and heritage, strengthen families, and cultivate leaders—ensuring full participation in the life of the Church in the U.S. while supporting the Church in Africa.'
  },
  {
    id: 'about-2',
    category: faqCategories.ABOUT,
    question: 'What is NAACUS\'s mission?',
    keywords: ['mission', 'purpose', 'goal', 'objective'],
    answer: 'Our mission is to gather African Catholic communities in the U.S., promote their faith, and ensure their full and active participation in the life of the Church. We work to build a vibrant and visible African Catholic community that contributes its gifts to the Church and society.'
  },
  {
    id: 'about-3',
    category: faqCategories.ABOUT,
    question: 'What is NAACUS\'s motto?',
    keywords: ['motto', 'slogan', 'tagline'],
    answer: 'Our motto is "Together with Christ" - uniting African Catholic communities across the United States in faith and fellowship.'
  },
  {
    id: 'about-4',
    category: faqCategories.ABOUT,
    question: 'Who does NAACUS serve?',
    keywords: ['who serve', 'community', 'members', 'target audience'],
    answer: 'NAACUS serves African Catholic communities including immigrants, migrants, refugees, students, professionals, families, elders, and the African diaspora in the United States.'
  },
  {
    id: 'membership-1',
    category: faqCategories.MEMBERSHIP,
    question: 'How can I become a member?',
    keywords: ['join', 'membership', 'become member', 'sign up', 'register'],
    answer: 'You can become a member by filling out our membership form available on our website. Visit the Membership section or contact us at info@naacus.org for more information about membership benefits and requirements.'
  },
  {
    id: 'events-1',
    category: faqCategories.EVENTS,
    question: 'When is the next NAACUS conference?',
    keywords: ['conference', 'next conference', 'when conference', 'biannual', '2027'],
    answer: 'NAACUS hosts a biannual national conference. The next conference is NAACUS 2027. Please subscribe to our newsletter or check our website regularly for updates on dates, location, and registration details.'
  },
  {
    id: 'events-3',
    category: faqCategories.EVENTS,
    question: 'How was NAACUS 2025?',
    keywords: ['2025', 'last conference', 'previous conference', 'july 2025'],
    answer: 'NAACUS 2025 in July 2025 was a historic success with record attendance of over 1,500 participants! It featured inspiring programs, cultural celebrations, and significant community impact.'
  },
  {
    id: 'contact-1',
    category: faqCategories.CONTACT,
    question: 'How can I contact NAACUS?',
    keywords: ['contact', 'email', 'reach', 'get in touch', 'phone'],
    answer: 'You can contact NAACUS by email at info@naacus.org or through our contact form on the website. We\'re here to help and answer any questions you may have!'
  },
  {
    id: 'programs-2',
    category: faqCategories.PROGRAMS,
    question: 'How can I get involved with NAACUS?',
    keywords: ['get involved', 'volunteer', 'participate', 'help'],
    answer: 'You can get involved by becoming a member, attending our events, volunteering for programs, joining our ministries, or supporting our advocacy efforts. Contact us at info@naacus.org to learn about current opportunities.'
  }
];

const defaultResponses = {
  noMatch: "I'd be happy to help! Could you rephrase your question? For immediate assistance, you can also contact us at info@naacus.org",
  greeting: "Hello! 👋 I'm the NAACUS virtual assistant. I can help answer questions about our organization, membership, events, programs, and more. How can I assist you today?",
  fallback: "I'm here to help with questions about NAACUS. You can ask me about our mission, membership, upcoming events, programs, or how to get involved."
};

const quickActions = [
  { id: 'qa-1', label: 'About NAACUS', question: 'What is NAACUS?' },
  { id: 'qa-2', label: 'Join Us', question: 'How can I become a member?' },
  { id: 'qa-3', label: 'Next Conference', question: 'When is the next conference?' },
  { id: 'qa-4', label: 'Contact Info', question: 'How can I contact NAACUS?' }
];

// Helper Functions
function calculateSimilarity(str1, str2) {
  const normalize = (str) => str.toLowerCase().trim().replace(/[^\w\s]/g, '');
  const words1 = normalize(str1).split(/\s+/);
  const words2 = normalize(str2).split(/\s+/);
  
  let matches = 0;
  for (const word1 of words1) {
    if (word1.length < 3) continue;
    for (const word2 of words2) {
      if (word2.includes(word1) || word1.includes(word2)) {
        matches++;
        break;
      }
    }
  }
  
  const maxLength = Math.max(words1.length, words2.length);
  return maxLength > 0 ? matches / maxLength : 0;
}

function findBestMatch(userQuestion) {
  let bestMatch = null;
  let bestScore = 0;
  const minThreshold = 0.25;
  
  for (const faq of faqData) {
    let score = calculateSimilarity(userQuestion, faq.question);
    
    for (const keyword of faq.keywords) {
      const keywordScore = calculateSimilarity(userQuestion, keyword);
      score = Math.max(score, keywordScore * 1.2);
    }
    
    if (score > bestScore && score >= minThreshold) {
      bestScore = score;
      bestMatch = faq;
    }
  }
  
  return { match: bestMatch, score: bestScore };
}

// Main Functions
function processMessage(userMessage, context = {}) {
  const normalizedMessage = userMessage.toLowerCase().trim();
  
  // Handle greetings
  const greetings = ['hi', 'hello', 'hey', 'greetings', 'good morning', 'good afternoon', 'good evening'];
  if (greetings.some(g => normalizedMessage === g || normalizedMessage.startsWith(g + ' '))) {
    return {
      text: defaultResponses.greeting,
      suggestions: quickActions.map(qa => qa.label),
      quickActions: quickActions
    };
  }
  
  // Handle thank you
  const thankYou = ['thank', 'thanks', 'appreciate'];
  if (thankYou.some(t => normalizedMessage.includes(t))) {
    return {
      text: "You're welcome! Is there anything else I can help you with?",
      suggestions: quickActions.map(qa => qa.label),
      quickActions: quickActions
    };
  }
  
  // Find best matching FAQ
  const { match, score } = findBestMatch(userMessage);
  
  if (match && score > 0.3) {
    const relatedFaqs = faqData
      .filter(faq => faq.category === match.category && faq.id !== match.id)
      .slice(0, 2);
    
    return {
      text: match.answer,
      faqId: match.id,
      category: match.category,
      confidence: score,
      relatedQuestions: relatedFaqs.map(faq => faq.question)
    };
  }
  
  return {
    text: defaultResponses.noMatch,
    suggestions: quickActions.map(qa => qa.label),
    quickActions: quickActions,
    confidence: 0
  };
}

function formatForWhatsApp(response) {
  let message = response.text;
  
  if (response.relatedQuestions && response.relatedQuestions.length > 0) {
    message += '\n\n*You might also be interested in:*\n';
    response.relatedQuestions.forEach((q, i) => {
      message += `${i + 1}. ${q}\n`;
    });
  }
  
  if (response.quickActions && response.quickActions.length > 0) {
    message += '\n\n*Quick options:*\n';
    response.quickActions.forEach((qa, i) => {
      message += `${i + 1}. ${qa.label}\n`;
    });
  }
  
  return message;
}

function logConversation(userMessage, botResponse, platform = 'web') {
  console.log('Chatbot Conversation Log:', {
    timestamp: new Date().toISOString(),
    platform,
    userMessage,
    botResponse: botResponse.text,
    faqId: botResponse.faqId,
    confidence: botResponse.confidence
  });
}

// Exports
module.exports = {
  processMessage,
  formatForWhatsApp,
  logConversation,
  faqData,
  faqCategories,
  quickActions
};
