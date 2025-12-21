/**
 * Test script for NAACUS Chatbot Service
 * 
 * Run: node test-chatbot.js
 */

const chatbotService = require('./chatbotService');

console.log('🤖 NAACUS Chatbot Service Test\n');
console.log('='.repeat(60));

// Test cases
const testCases = [
  { input: 'Hello', description: 'Greeting' },
  { input: 'What is NAACUS?', description: 'About question' },
  { input: 'How can I join?', description: 'Membership question' },
  { input: 'When is the next conference?', description: 'Event question' },
  { input: 'How do I contact you?', description: 'Contact question' },
  { input: 'Tell me about the 2025 conference', description: 'Past event question' },
  { input: 'How can I help?', description: 'Volunteer question' },
  { input: 'xyz random stuff', description: 'Unknown question (should fallback)' },
  { input: 'Thank you!', description: 'Thank you message' }
];

// Run tests
testCases.forEach((test, index) => {
  console.log(`\nTest ${index + 1}: ${test.description}`);
  console.log('-'.repeat(60));
  console.log(`User: "${test.input}"`);
  
  const response = chatbotService.processMessage(test.input);
  
  console.log(`\nBot: ${response.text}`);
  
  if (response.confidence !== undefined) {
    console.log(`Confidence: ${(response.confidence * 100).toFixed(1)}%`);
  }
  
  if (response.faqId) {
    console.log(`FAQ ID: ${response.faqId}`);
    console.log(`Category: ${response.category}`);
  }
  
  if (response.relatedQuestions && response.relatedQuestions.length > 0) {
    console.log('\nRelated Questions:');
    response.relatedQuestions.forEach((q, i) => {
      console.log(`  ${i + 1}. ${q}`);
    });
  }
  
  if (response.quickActions && response.quickActions.length > 0) {
    console.log('\nQuick Actions:');
    response.quickActions.forEach((qa, i) => {
      console.log(`  ${i + 1}. ${qa.label}`);
    });
  }
  
  // Test WhatsApp formatting
  const whatsappMessage = chatbotService.formatForWhatsApp(response);
  console.log('\nWhatsApp Formatted:');
  console.log('---');
  console.log(whatsappMessage);
  console.log('---');
  
  console.log('='.repeat(60));
});

console.log('\n✅ All tests completed!\n');

// Summary statistics
console.log('📊 Test Summary:');
console.log(`Total tests: ${testCases.length}`);
console.log(`FAQ categories: ${Object.keys(chatbotService.faqCategories).length}`);
console.log(`Total FAQs: ${chatbotService.faqData.length}`);
console.log(`Quick actions: ${chatbotService.quickActions.length}`);
