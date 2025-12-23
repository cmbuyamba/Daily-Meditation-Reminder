/**
 * Mock Data Store for NAACUS CRUD Operations
 * 
 * This is a temporary in-memory storage for all CRUD operations.
 * When backend API is ready, this will be replaced with actual API calls.
 * Data persists only during the current session.
 */

import { eventsData } from '../data/eventsData';
import { faqData } from '../data/faqData';

/**
 * Membership Mock Data
 */
const membershipStore = [];

/**
 * Volunteer Mock Data
 */
const volunteerStore = [];

/**
 * Newsletter Subscriber Mock Data
 */
const newsletterStore = [];

/**
 * Contact Inquiry Mock Data
 */
const contactStore = [];

/**
 * Donation Mock Data
 */
const donationStore = [];

/**
 * Events Mock Data (from eventsData.js)
 */
let eventsStore = {
  past: [...eventsData.pastEvents],
  upcoming: [...eventsData.upcomingEvents]
};

/**
 * FAQ Mock Data (from faqData.js)
 */
let faqStore = [...faqData];

/**
 * Utility: Generate unique ID
 */
export const generateId = () => {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};

/**
 * Utility: Get current timestamp
 */
export const getCurrentTimestamp = () => {
  return new Date().toISOString();
};

/**
 * Export all stores for direct access if needed
 */
export const mockDataStores = {
  membershipStore,
  volunteerStore,
  newsletterStore,
  contactStore,
  donationStore,
  eventsStore,
  faqStore
};

/**
 * Reset all stores (useful for testing)
 */
export const resetAllStores = () => {
  membershipStore.length = 0;
  volunteerStore.length = 0;
  newsletterStore.length = 0;
  contactStore.length = 0;
  donationStore.length = 0;
  eventsStore = {
    past: [...eventsData.pastEvents],
    upcoming: [...eventsData.upcomingEvents]
  };
  faqStore = [...faqData];
};
