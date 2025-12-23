/**
 * Service Layer Documentation
 * ============================
 * 
 * This document explains the service layer structure and how to use it.
 * All services use mock data stores that simulate API calls with realistic delays.
 * When the backend API is ready, swap out the implementation while keeping the same interface.
 */

# Service Layer Architecture

## Overview

The service layer provides a complete CRUD interface for all entities in the NAACUS application:

- **Membership** - User memberships and profiles
- **Volunteer** - Volunteer applications and records
- **Newsletter** - Email subscription management
- **Contact** - Contact inquiries and message tracking
- **Donation** - Donation processing and tracking
- **Event** - Events and conferences
- **FAQ** - Frequently asked questions

## Service Files

Each service module is independent and exports its own functions:

### 1. mockData.js
Central mock data store that manages in-memory storage for all entities.

**Exports:**
- `mockDataStores` - Object containing all data store arrays
- `generateId()` - Generate unique IDs
- `getCurrentTimestamp()` - Get ISO timestamp
- `resetAllStores()` - Clear all mock data

### 2. membershipService.js
Manages membership records.

**Functions:**
```javascript
createMembership(membershipData)        // POST
getMemberships(options)                 // GET (paginated)
getMembershipById(id)                   // GET single
updateMembership(id, updates)           // PUT
deleteMembership(id)                    // DELETE
searchMembershipsByEmail(email)         // SEARCH
```

### 3. volunteerService.js
Manages volunteer applications and records.

**Functions:**
```javascript
createVolunteer(volunteerData)          // POST
getVolunteers(options)                  // GET (paginated)
getVolunteerById(id)                    // GET single
updateVolunteer(id, updates)            // PUT
deleteVolunteer(id)                     // DELETE
searchVolunteersByEmail(email)          // SEARCH
getVolunteersByStatus(status)           // FILTER
```

### 4. newsletterService.js
Manages newsletter subscriptions.

**Functions:**
```javascript
subscribeToNewsletter(subscriberData)         // POST
getNewsletterSubscribers(options)             // GET (paginated)
getSubscriberById(id)                        // GET single
updateSubscriptionPreferences(id, updates)   // PUT
unsubscribeFromNewsletter(emailOrId)         // DELETE
checkSubscriptionStatus(email)                // VERIFY
```

### 5. contactService.js
Manages contact inquiries.

**Functions:**
```javascript
submitContactInquiry(contactData)      // POST
getContactInquiries(options)           // GET (paginated)
getContactInquiryById(id)              // GET single
updateContactInquiry(id, updates)      // PUT
deleteContactInquiry(id)               // DELETE
getInquiriesByEmail(email)             // SEARCH
```

### 6. donationService.js
Manages donations and payment processing.

**Functions:**
```javascript
initiateDonation(donationData)          // POST (initiate)
processDonationPayment(paymentData)     // POST (webhook)
getDonations(options)                   // GET (paginated)
getDonationById(id)                     // GET single
getDonationReceipt(donationId)          // GET receipt
refundDonation(donationId, reason)      // POST (refund)
getDonationStatistics()                 // GET stats
```

**Constants:**
```javascript
PAYMENT_METHODS = {
  CARD, PAYPAL, APPLE_PAY, GOOGLE_PAY, 
  BANK_TRANSFER, BITCOIN
}

DONATION_STATUS = {
  PENDING, PROCESSING, COMPLETED, FAILED, REFUNDED
}
```

### 7. eventService.js
Manages events and conferences.

**Functions:**
```javascript
getAllEvents(options)                  // GET all
getPastEvents(options)                 // GET past (paginated)
getUpcomingEvents(options)             // GET upcoming (paginated)
getEventById(id)                       // GET single
getEventsByYear(year)                  // FILTER by year
getAvailableEventYears()               // GET distinct years
createEvent(eventData)                 // POST
updateEvent(id, updates)               // PUT
deleteEvent(id)                        // DELETE
getFeaturedEvent()                     // GET special event
```

### 8. faqService.js
Manages FAQ items and search.

**Functions:**
```javascript
getAllFAQs(options)                    // GET all (paginated)
getFAQById(id)                         // GET single
getFAQsByCategory(category, options)   // GET by category
searchFAQs(query, options)             // SEARCH (full text)
searchFAQsByKeywords(keywords)         // SEARCH by keywords
getFAQCategories()                     // GET categories + stats
getRelatedFAQs(faqId, limit)          // GET related items
```

## Usage Examples

### Creating a Membership

```javascript
import { membershipService } from '../services';

try {
  const result = await membershipService.createMembership({
    name: 'John Doe',
    email: 'john@example.com',
    phone: '123-456-7890',
    address: '123 Main St',
    city: 'New York',
    state: 'NY',
    zipCode: '10001',
    parish: 'St. Mary',
    backgroundInfo: 'Active member for 5 years',
    ministryInterests: ['Liturgy', 'Youth']
  });

  if (result.success) {
    console.log('Membership created:', result.data);
  }
} catch (error) {
  console.error('Creation failed:', error.message);
}
```

### Subscribing to Newsletter

```javascript
import { newsletterService } from '../services';

const result = await newsletterService.subscribeToNewsletter({
  email: 'user@example.com',
  name: 'Jane Smith',
  language: 'en',
  frequency: 'weekly',
  preferences: {
    events: true,
    news: true,
    spiritualContent: true,
    updatesCulture: true
  }
});
```

### Processing Donations

```javascript
import { donationService } from '../services';

// Step 1: Initiate donation
const donation = await donationService.initiateDonation({
  amount: 100,
  currency: 'USD',
  paymentMethod: 'card',
  donorName: 'Jane Doe',
  donorEmail: 'jane@example.com',
  isAnonymous: false
});

// Step 2: After payment processor webhook
const processed = await donationService.processDonationPayment({
  donationId: donation.data.id,
  transactionId: 'txn_123456',
  success: true
});

// Step 3: Get receipt
const receipt = await donationService.getDonationReceipt(donation.data.id);
```

### Searching Events

```javascript
import { eventService } from '../services';

// Get all upcoming events for 2025
const events = await eventService.getUpcomingEvents({
  year: 2025,
  limit: 10,
  offset: 0
});

// Get featured event
const featured = await eventService.getFeaturedEvent();
```

### Searching FAQs

```javascript
import { faqService } from '../services';

// Full text search
const results = await faqService.searchFAQs('membership benefits');

// Search by category
const membershipFAQs = await faqService.getFAQsByCategory('membership');

// Search by keywords
const related = await faqService.searchFAQsByKeywords(['fee', 'dues', 'payment']);
```

## Response Format

All service functions return promises that resolve to standardized response objects:

```javascript
{
  success: boolean,
  data: object | array,           // The actual data
  message: string,                // Human-readable message
  error?: string,                 // Error message if failed
  pagination?: {                  // For paginated endpoints
    total: number,
    limit: number,
    offset: number,
    pages: number
  }
}
```

## Error Handling

Services reject with error objects containing:
- `success: false`
- `message: string`
- `status: number` (HTTP-like status codes)
- `error?: string`

## Mock Data Delays

All services simulate realistic API delays:
- Simple operations: 300ms
- Create/Update operations: 500ms
- Complex searches: 400ms

These delays help with:
- Testing loading states in UI
- Realistic performance expectations
- Preparing for real API integration

## Migrating to Real API

When ready to connect to the backend API, you only need to update the implementations in each service file. The function signatures and return types remain the same:

**Before (Mock):**
```javascript
export const createMembership = async (data) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // ... mock implementation
    }, 500);
  });
};
```

**After (Real API):**
```javascript
export const createMembership = async (data) => {
  const response = await fetch('/api/memberships', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' }
  });
  
  const result = await response.json();
  
  if (!response.ok) {
    throw result; // Same error format
  }
  
  return result; // Same response format
};
```

## Testing

Reset mock data between tests:

```javascript
import { resetAllStores } from '../services';

beforeEach(() => {
  resetAllStores();
});
```

## Future Enhancements

- Rate limiting per endpoint
- Caching strategy
- Optimistic updates
- Real-time updates via WebSocket
- Offline support with Service Workers
- Advanced filtering and sorting
- Bulk operations
- Analytics tracking
