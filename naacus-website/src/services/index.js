/**
 * Service Layer Index
 * 
 * Central export point for all CRUD services
 * All services use mock data stores until backend API integration
 * 
 * Usage Example:
 * import { membershipService, donationService } from './services';
 * 
 * // Create membership
 * const result = await membershipService.createMembership(formData);
 * 
 * // Get events
 * const events = await eventService.getAllEvents({ type: 'upcoming' });
 */

// Entity Services
export * as membershipService from './membershipService';
export * as volunteerService from './volunteerService';
export * as newsletterService from './newsletterService';
export * as contactService from './contactService';
export * as donationService from './donationService';
export * as eventService from './eventService';
export * as faqService from './faqService';

// Mock Data Store (for accessing/resetting data directly)
export {
  mockDataStores,
  generateId,
  getCurrentTimestamp,
  resetAllStores
} from './mockData';

// Existing Services (not replaced)
export { default as chatbotService } from './chatbotService';
export { default as copilotStudioService } from './copilotStudioService';
export { default as m365Service } from './m365Service';
