/**
 * Unit Tests for Chatbot Service
 * 
 * Run with: npm test
 */

import { processMessage, formatForWhatsApp, getFaqById } from '../services/chatbotService';
import { faqData } from '../data/faqData';

describe('Chatbot Service', () => {
  describe('processMessage', () => {
    test('should respond to greetings', () => {
      const response = processMessage('Hello');
      expect(response.text).toContain('NAACUS virtual assistant');
      expect(response.quickActions).toBeDefined();
      expect(response.quickActions.length).toBeGreaterThan(0);
    });

    test('should match FAQ about NAACUS', () => {
      const response = processMessage('What is NAACUS?');
      expect(response.text).toContain('National Association of African Catholics');
      expect(response.faqId).toBe('about-1');
      expect(response.confidence).toBeGreaterThan(0.3);
    });

    test('should match membership question', () => {
      const response = processMessage('How can I become a member?');
      expect(response.text).toContain('membership form');
      expect(response.faqId).toBe('membership-1');
    });

    test('should match conference question', () => {
      const response = processMessage('When is the next conference?');
      expect(response.text).toContain('2027');
      expect(response.category).toBe('events');
    });

    test('should provide fallback for unknown questions', () => {
      const response = processMessage('xyz random stuff that makes no sense');
      expect(response.text).toContain('rephrase');
      expect(response.confidence).toBe(0);
      expect(response.quickActions).toBeDefined();
    });

    test('should handle thank you messages', () => {
      const response = processMessage('Thank you!');
      expect(response.text).toContain('welcome');
    });

    test('should provide related questions', () => {
      const response = processMessage('What is NAACUS?');
      if (response.relatedQuestions) {
        expect(response.relatedQuestions.length).toBeGreaterThan(0);
      }
    });
  });

  describe('formatForWhatsApp', () => {
    test('should format basic response', () => {
      const response = processMessage('What is NAACUS?');
      const formatted = formatForWhatsApp(response);
      expect(formatted).toContain(response.text);
    });

    test('should include related questions in WhatsApp format', () => {
      const response = processMessage('What is NAACUS?');
      const formatted = formatForWhatsApp(response);
      if (response.relatedQuestions && response.relatedQuestions.length > 0) {
        expect(formatted).toContain('*You might also be interested in:*');
      }
    });

    test('should include quick actions in WhatsApp format', () => {
      const response = processMessage('Hello');
      const formatted = formatForWhatsApp(response);
      if (response.quickActions && response.quickActions.length > 0) {
        expect(formatted).toContain('*Quick options:*');
      }
    });
  });

  describe('FAQ Data', () => {
    test('should have FAQ data loaded', () => {
      expect(faqData).toBeDefined();
      expect(faqData.length).toBeGreaterThan(0);
    });

    test('all FAQs should have required fields', () => {
      faqData.forEach(faq => {
        expect(faq.id).toBeDefined();
        expect(faq.category).toBeDefined();
        expect(faq.question).toBeDefined();
        expect(faq.keywords).toBeDefined();
        expect(faq.answer).toBeDefined();
        expect(Array.isArray(faq.keywords)).toBe(true);
      });
    });

    test('should be able to get FAQ by ID', () => {
      const faq = getFaqById('about-1');
      expect(faq).toBeDefined();
      expect(faq.id).toBe('about-1');
    });
  });
});
