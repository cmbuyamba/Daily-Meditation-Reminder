/**
 * Chatbot Service
 * 
 * This service provides AI-powered FAQ matching and response generation
 * for the NAACUS chatbot on both web and WhatsApp platforms.
 */

import { faqData, defaultResponses, quickActions } from '../data/faqData';

/**
 * Calculate similarity score between two strings using a simple keyword matching algorithm
 * In a production environment, this could be replaced with more sophisticated NLP libraries
 * or API calls to services like OpenAI, Dialogflow, etc.
 */
function calculateSimilarity(str1, str2) {
  const normalize = (str) => str.toLowerCase().trim().replace(/[^\w\s]/g, '');
  const words1 = normalize(str1).split(/\s+/);
  const words2 = normalize(str2).split(/\s+/);
  
  // Count matching words
  let matches = 0;
  for (const word1 of words1) {
    if (word1.length < 3) continue; // Skip very short words
    for (const word2 of words2) {
      if (word2.includes(word1) || word1.includes(word2)) {
        matches++;
        break;
      }
    }
  }
  
  // Calculate similarity score (0-1)
  const maxLength = Math.max(words1.length, words2.length);
  return maxLength > 0 ? matches / maxLength : 0;
}

/**
 * Find the best matching FAQ entry for a given user question
 */
function findBestMatch(userQuestion) {
  let bestMatch = null;
  let bestScore = 0;
  const minThreshold = 0.25; // Minimum similarity threshold
  
  for (const faq of faqData) {
    // Check similarity with the main question
    let score = calculateSimilarity(userQuestion, faq.question);
    
    // Also check against keywords (with higher weight)
    for (const keyword of faq.keywords) {
      const keywordScore = calculateSimilarity(userQuestion, keyword);
      score = Math.max(score, keywordScore * 1.2); // Give keywords 20% boost
    }
    
    if (score > bestScore && score >= minThreshold) {
      bestScore = score;
      bestMatch = faq;
    }
  }
  
  return { match: bestMatch, score: bestScore };
}

/**
 * Process a user message and generate a response
 * @param {string} userMessage - The user's question or message
 * @param {object} context - Optional context (user history, language, etc.)
 * @returns {object} Response object with text and optional suggestions
 */
export function processMessage(userMessage, context = {}) {
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
  
  // Handle thank you messages
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
    // Get related FAQs from the same category
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
  
  // No good match found
  return {
    text: defaultResponses.noMatch,
    suggestions: quickActions.map(qa => qa.label),
    quickActions: quickActions,
    confidence: 0
  };
}

/**
 * Get FAQ by ID (useful for direct question selection)
 */
export function getFaqById(faqId) {
  return faqData.find(faq => faq.id === faqId);
}

/**
 * Get FAQs by category
 */
export function getFaqsByCategory(category) {
  return faqData.filter(faq => faq.category === category);
}

/**
 * Get all available categories
 */
export function getCategories() {
  const categories = {};
  faqData.forEach(faq => {
    if (!categories[faq.category]) {
      categories[faq.category] = {
        name: faq.category,
        count: 0
      };
    }
    categories[faq.category].count++;
  });
  return categories;
}

/**
 * Get quick action suggestions
 */
export function getQuickActions() {
  return quickActions;
}

/**
 * Format response for WhatsApp
 * WhatsApp has specific formatting requirements (plain text, no HTML)
 */
export function formatForWhatsApp(response) {
  let message = response.text;
  
  // Add related questions if available
  if (response.relatedQuestions && response.relatedQuestions.length > 0) {
    message += '\n\n*You might also be interested in:*\n';
    response.relatedQuestions.forEach((q, i) => {
      message += `${i + 1}. ${q}\n`;
    });
  }
  
  // Add quick actions if available
  if (response.quickActions && response.quickActions.length > 0) {
    message += '\n\n*Quick options:*\n';
    response.quickActions.forEach((qa, i) => {
      message += `${i + 1}. ${qa.label}\n`;
    });
  }
  
  return message;
}

/**
 * Log conversation for analytics (can be extended to save to database)
 */
export function logConversation(userMessage, botResponse, platform = 'web') {
  // In production, this would save to a database or analytics service
  console.log('Chatbot Conversation Log:', {
    timestamp: new Date().toISOString(),
    platform,
    userMessage,
    botResponse: botResponse.text,
    faqId: botResponse.faqId,
    confidence: botResponse.confidence
  });
}

export default {
  processMessage,
  getFaqById,
  getFaqsByCategory,
  getCategories,
  getQuickActions,
  formatForWhatsApp,
  logConversation
};
