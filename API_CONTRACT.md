# NAACUS API Contract

**Document Version:** 1.0  
**Last Updated:** December 22, 2025  
**Project:** NAACUS Website & Services  
**Frontend Framework:** React 19 with React Router v6  
**Backend Integration:** Microsoft 365 (SharePoint, Graph API)

---

## Table of Contents

1. [Overview](#overview)
2. [Data Models](#data-models)
3. [API Endpoints](#api-endpoints)
4. [Form Submissions (CRUD)](#form-submissions-crud)
5. [Authentication](#authentication)
6. [Error Handling](#error-handling)
7. [Rate Limiting & Constraints](#rate-limiting--constraints)
8. [Future Enhancements](#future-enhancements)

---

## Overview

The NAACUS website uses a frontend-driven architecture with backend integration to Microsoft 365 services. Currently, no dedicated backend API server exists—submissions go directly to SharePoint Lists via Microsoft Graph API. This document outlines the current implementation and expected backend API contract.

### Current Architecture
- **Frontend:** React SPA hosted on Azure Static Web Apps
- **Backend Services:** Microsoft 365 (SharePoint Lists, OneDrive Excel)
- **Authentication:** Azure AD / MSAL
- **Third-Party Integrations:** Microsoft Copilot Studio (Chatbot)

---

## Data Models

### 1. Membership Form Data

**Entity:** `Membership`  
**Storage:** SharePoint List or Database Table  
**Primary Key:** `id` (auto-generated GUID)

```json
{
  "id": "uuid",
  "firstName": "string (required)",
  "lastName": "string (required)",
  "email": "string (required, email format)",
  "phone": "string (10-15 digits)",
  "dateOfBirth": "ISO 8601 date",
  "address": {
    "street": "string",
    "city": "string",
    "state": "string (2-char state code)",
    "zipCode": "string (5-10 digits)",
    "country": "string (default: United States)"
  },
  "parish": {
    "name": "string",
    "diocese": "string",
    "city": "string",
    "state": "string"
  },
  "background": {
    "countryOfOrigin": "string",
    "yearsInUS": "number",
    "occupation": "string",
    "skills": "text",
    "languagesSpoken": ["string"]
  },
  "membership": {
    "type": "enum: individual | family | student | senior",
    "ministryInterests": ["string"],
    "communicationPreferences": ["email", "phone", "text", "mail"],
    "hearAboutUs": "string",
    "whyJoin": "text"
  },
  "emergency": {
    "contactName": "string",
    "relationship": "string",
    "phone": "string"
  },
  "timestamps": {
    "submittedAt": "ISO 8601 timestamp",
    "updatedAt": "ISO 8601 timestamp",
    "createdAt": "ISO 8601 timestamp"
  },
  "status": "enum: pending | approved | active | inactive",
  "membershipNumber": "string (auto-generated, format: NAACUS-XXXX)"
}
```

**Notes:**
- All date fields should accept ISO 8601 format
- Email must be validated
- Phone numbers should support multiple countries
- Ministry interests should reference a configurable list
- Status field for membership lifecycle management

---

### 2. Volunteer Form Data

**Entity:** `Volunteer`  
**Storage:** SharePoint List or Database Table  
**Primary Key:** `id` (auto-generated GUID)

```json
{
  "id": "uuid",
  "firstName": "string (required)",
  "lastName": "string (required)",
  "email": "string (required, email format)",
  "phone": "string (required, 10-15 digits)",
  "location": {
    "city": "string",
    "state": "string (2-char state code)",
    "zipCode": "string"
  },
  "background": {
    "languagesSpoken": ["string"],
    "skills": "text",
    "previousExperience": "text",
    "specialSkills": "text",
    "countryOfOrigin": "string"
  },
  "availability": {
    "timePreference": "enum: morning | afternoon | evening | flexible",
    "hoursPerMonth": "number (5, 10, 20, 40, custom)",
    "availabilityDates": ["ISO 8601 date"]
  },
  "volunteer": {
    "preferredRole": "string",
    "volunteerInterests": ["string"],
    "whyVolunteer": "text",
    "backgroundCheckConsent": "boolean"
  },
  "emergency": {
    "contactName": "string (required)",
    "phone": "string (required)"
  },
  "timestamps": {
    "submittedAt": "ISO 8601 timestamp",
    "updatedAt": "ISO 8601 timestamp",
    "createdAt": "ISO 8601 timestamp"
  },
  "status": "enum: pending | approved | active | inactive | archived",
  "volunteerNumber": "string (auto-generated, format: VOL-XXXX)"
}
```

**Notes:**
- Background check consent is critical—cannot proceed without it
- Hours per month should have preset options with custom input
- Volunteer interests should be from a predefined list

---

### 3. Newsletter Subscription

**Entity:** `NewsletterSubscriber`  
**Storage:** Database Table or Mailing List  
**Primary Key:** `id` (auto-generated GUID)

```json
{
  "id": "uuid",
  "name": "string (required)",
  "email": "string (required, email format, unique)",
  "subscribedAt": "ISO 8601 timestamp",
  "unsubscribedAt": "ISO 8601 timestamp or null",
  "status": "enum: active | unsubscribed | bounced | spam",
  "source": "string (enum: website | event | referral)",
  "preferences": {
    "frequency": "enum: weekly | monthly | quarterly",
    "categories": ["news", "events", "spirituality", "programs"]
  }
}
```

**Notes:**
- Email should be unique in the system
- Support one-click unsubscribe
- Track subscription source for analytics
- Double opt-in recommended for compliance

---

### 4. Contact Form Data

**Entity:** `ContactInquiry`  
**Storage:** Database Table or Email Queue  
**Primary Key:** `id` (auto-generated GUID)

```json
{
  "id": "uuid",
  "name": "string (required)",
  "email": "string (required, email format)",
  "organization": "string",
  "message": "text (required, min 10 chars, max 5000)",
  "submittedAt": "ISO 8601 timestamp",
  "status": "enum: new | read | responded | archived",
  "response": {
    "respondedBy": "string (staff email)",
    "respondedAt": "ISO 8601 timestamp",
    "responseMessage": "text"
  }
}
```

**Notes:**
- Should trigger automated acknowledgment email
- Support priority flagging for urgent inquiries
- Track response metrics

---

### 5. Event Data

**Entity:** `Event`  
**Storage:** Mock data in frontend (eventsData.js)  
**Primary Key:** `id` (string)

```json
{
  "id": "string (e.g., past-2023-summit)",
  "year": "number",
  "title": "string",
  "date": "string (human-readable date range)",
  "location": "string",
  "description": "text",
  "type": "enum: conference | regional | workshop | celebration",
  "status": "enum: completed | upcoming | cancelled",
  "highlights": ["string"],
  "attendees": "string (e.g., '2,500+')",
  "images": {
    "thumbnail": "url",
    "hero": "url",
    "gallery": ["url"]
  },
  "media": {
    "videos": ["url"],
    "photos": ["url"],
    "testimonials": ["string"]
  }
}
```

**Notes:**
- Currently stored as static JSON in `eventsData.js`
- Consider migrating to database for dynamic management
- Support image/video uploads

---

### 6. FAQ Data

**Entity:** `FAQ`  
**Storage:** Mock data in frontend (faqData.js)  
**Primary Key:** `id` (string)

```json
{
  "id": "string (e.g., about-1)",
  "category": "enum: about | membership | events | programs | volunteer | contact | general",
  "question": "string (required)",
  "answer": "text (required, HTML supported)",
  "keywords": ["string"],
  "relatedFaqs": ["id"],
  "updatedAt": "ISO 8601 timestamp"
}
```

**Notes:**
- Used by chatbot for intelligent responses
- Keywords used for search/matching
- Support rich text formatting in answers

---

### 7. Donation

**Entity:** `Donation`  
**Storage:** Payment processor + optional Database table  
**Primary Key:** `id` (auto-generated GUID)

```json
{
  "id": "uuid",
  "donor": {
    "fullName": "string (required)",
    "email": "string (required, email format)",
    "phone": "string (optional)"
  },
  "donation": {
    "amount": "decimal (min: 1.00, required)",
    "currency": "string (default: USD)",
    "paymentMethod": "enum: card | paypal | bitcoin | bank_transfer | google_pay | apple_pay",
    "transactionId": "string (from payment processor)",
    "status": "enum: pending | completed | failed | refunded"
  },
  "timestamps": {
    "submittedAt": "ISO 8601 timestamp",
    "completedAt": "ISO 8601 timestamp"
  },
  "receipt": {
    "receiptNumber": "string (auto-generated)",
    "sentTo": "string (email)"
  }
}
```

**Notes:**
- Integrates with payment processor (Stripe, Square, PayPal)
- Support both one-time and recurring donations
- Issue tax receipts for compliance

---

## API Endpoints

### A. Membership Management

#### **POST /api/v1/memberships**
Create a new membership

**Request:**
```http
POST /api/v1/memberships
Content-Type: application/json
Authorization: Bearer {token}

{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "phone": "+1-202-555-0000",
  "address": {...},
  "parish": {...},
  "membership": {...}
}
```

**Response (201 Created):**
```json
{
  "id": "f47ac10b-58cc-4372-a567-0e02b2c3d479",
  "membershipNumber": "NAACUS-0001",
  "status": "pending",
  "submittedAt": "2025-12-22T10:30:00Z",
  "message": "Membership application submitted successfully"
}
```

**Errors:**
- `400 Bad Request` - Validation error
- `409 Conflict` - Email already exists
- `401 Unauthorized` - Missing/invalid token

---

#### **GET /api/v1/memberships/{id}**
Retrieve membership details

**Response (200 OK):**
```json
{
  "id": "f47ac10b-58cc-4372-a567-0e02b2c3d479",
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "status": "active",
  "membershipNumber": "NAACUS-0001",
  "submittedAt": "2025-12-22T10:30:00Z"
}
```

---

#### **PUT /api/v1/memberships/{id}**
Update membership information

**Request:**
```json
{
  "phone": "+1-202-555-0001",
  "address": {...}
}
```

**Response (200 OK):** Updated membership object

---

#### **DELETE /api/v1/memberships/{id}**
Archive/delete membership (soft delete recommended)

**Response (204 No Content)**

---

### B. Volunteer Management

#### **POST /api/v1/volunteers**
Create a new volunteer application

**Request:**
```http
POST /api/v1/volunteers
Content-Type: application/json

{
  "firstName": "Jane",
  "lastName": "Smith",
  "email": "jane@example.com",
  "phone": "+1-202-555-0000",
  "location": {...},
  "availability": {...},
  "volunteer": {...}
}
```

**Response (201 Created):**
```json
{
  "id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  "volunteerNumber": "VOL-0001",
  "status": "pending",
  "submittedAt": "2025-12-22T11:00:00Z"
}
```

---

#### **GET /api/v1/volunteers/{id}**
Retrieve volunteer details

**Response (200 OK):** Volunteer object

---

#### **PUT /api/v1/volunteers/{id}**
Update volunteer information

**Response (200 OK):** Updated volunteer object

---

#### **DELETE /api/v1/volunteers/{id}**
Archive volunteer (soft delete)

**Response (204 No Content)**

---

### C. Newsletter Management

#### **POST /api/v1/newsletter/subscribe**
Subscribe to newsletter

**Request:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "preferences": {
    "frequency": "monthly",
    "categories": ["news", "events"]
  }
}
```

**Response (201 Created):**
```json
{
  "id": "sub123",
  "email": "john@example.com",
  "status": "active",
  "subscribedAt": "2025-12-22T10:30:00Z"
}
```

---

#### **POST /api/v1/newsletter/unsubscribe**
Unsubscribe from newsletter

**Request:**
```json
{
  "email": "john@example.com"
}
```

**Response (200 OK):**
```json
{
  "message": "Successfully unsubscribed"
}
```

---

#### **PUT /api/v1/newsletter/preferences**
Update newsletter preferences

**Request:**
```json
{
  "email": "john@example.com",
  "preferences": {
    "frequency": "weekly"
  }
}
```

**Response (200 OK):** Updated preferences

---

### D. Contact Form

#### **POST /api/v1/contact**
Submit contact inquiry

**Request:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "organization": "My Org",
  "message": "I have a question about NAACUS..."
}
```

**Response (201 Created):**
```json
{
  "id": "contact123",
  "submittedAt": "2025-12-22T10:30:00Z",
  "message": "Thank you for contacting us. We'll respond soon."
}
```

---

### E. Events (Read-Only)

#### **GET /api/v1/events**
Retrieve all events

**Query Parameters:**
- `year` (optional): Filter by year
- `type` (optional): Filter by event type
- `status` (optional): past | upcoming | all

**Response (200 OK):**
```json
{
  "data": [
    {
      "id": "past-2023-summit",
      "year": 2023,
      "title": "National Summit",
      "date": "July 15-17, 2023",
      "location": "Chicago, Illinois"
    }
  ],
  "total": 10
}
```

---

#### **GET /api/v1/events/{id}**
Retrieve event details

**Response (200 OK):** Event object with full details

---

### F. FAQ (Read-Only)

#### **GET /api/v1/faq**
Retrieve all FAQs

**Query Parameters:**
- `category` (optional): Filter by category
- `search` (optional): Search keyword

**Response (200 OK):**
```json
{
  "data": [
    {
      "id": "about-1",
      "category": "about",
      "question": "What is NAACUS?",
      "answer": "..."
    }
  ],
  "total": 50
}
```

---

#### **GET /api/v1/faq/{id}**
Retrieve FAQ details

**Response (200 OK):** FAQ object

---

#### **GET /api/v1/faq/search**
Search FAQs by keyword

**Query Parameters:**
- `q` (required): Search query
- `limit` (optional, default: 10): Max results

**Response (200 OK):**
```json
{
  "results": [
    {
      "id": "about-1",
      "question": "What is NAACUS?",
      "relevanceScore": 0.95
    }
  ]
}
```

---

### G. Donations

#### **POST /api/v1/donations/initiate**
Initiate a donation

**Request:**
```json
{
  "donor": {
    "fullName": "John Doe",
    "email": "john@example.com"
  },
  "donation": {
    "amount": 50.00,
    "paymentMethod": "card"
  }
}
```

**Response (200 OK):**
```json
{
  "donationId": "don123",
  "paymentUrl": "https://payment-processor.com/checkout/...",
  "expiresAt": "2025-12-22T11:30:00Z"
}
```

---

#### **POST /api/v1/donations/webhook**
Payment processor webhook (Stripe/PayPal)

**Request:** (from payment processor)
```json
{
  "type": "charge.succeeded",
  "data": {
    "donationId": "don123",
    "transactionId": "txn_xxx",
    "status": "completed"
  }
}
```

**Response (200 OK):** Acknowledgment

---

#### **GET /api/v1/donations/{id}**
Retrieve donation receipt

**Response (200 OK):**
```json
{
  "id": "don123",
  "amount": 50.00,
  "status": "completed",
  "receiptNumber": "RCP-2025-001",
  "receiptUrl": "https://..."
}
```

---

## Form Submissions (CRUD)

### Create Operations

| Form | Endpoint | Method | Status Code |
|------|----------|--------|-------------|
| Membership | `/api/v1/memberships` | POST | 201 |
| Volunteer | `/api/v1/volunteers` | POST | 201 |
| Newsletter | `/api/v1/newsletter/subscribe` | POST | 201 |
| Contact | `/api/v1/contact` | POST | 201 |
| Donation | `/api/v1/donations/initiate` | POST | 200 |

### Read Operations

| Form | Endpoint | Method | Status Code |
|------|----------|--------|-------------|
| Membership | `/api/v1/memberships/{id}` | GET | 200 |
| Volunteer | `/api/v1/volunteers/{id}` | GET | 200 |
| Contact | `/api/v1/contact/{id}` | GET | 200 |
| Events | `/api/v1/events` | GET | 200 |
| FAQ | `/api/v1/faq` | GET | 200 |
| Donation | `/api/v1/donations/{id}` | GET | 200 |

### Update Operations

| Form | Endpoint | Method | Status Code |
|------|----------|--------|-------------|
| Membership | `/api/v1/memberships/{id}` | PUT | 200 |
| Volunteer | `/api/v1/volunteers/{id}` | PUT | 200 |
| Newsletter Prefs | `/api/v1/newsletter/preferences` | PUT | 200 |

### Delete Operations

| Form | Endpoint | Method | Status Code |
|------|----------|--------|-------------|
| Membership | `/api/v1/memberships/{id}` | DELETE | 204 |
| Volunteer | `/api/v1/volunteers/{id}` | DELETE | 204 |
| Newsletter | `/api/v1/newsletter/unsubscribe` | POST | 200 |

---

## Authentication

### OAuth 2.0 / OpenID Connect (Azure AD)

**Current Implementation:**
- MSAL (Microsoft Authentication Library) for browser
- Azure AD / Office 365 tenant integration
- Token-based authentication for SharePoint access

**Expected Backend Endpoints:**

#### **POST /api/auth/token**
Exchange authorization code for access token

**Request:**
```json
{
  "grant_type": "authorization_code",
  "code": "auth_code_from_frontend",
  "client_id": "your-app-id",
  "client_secret": "your-app-secret",
  "redirect_uri": "https://naacus.org/callback"
}
```

**Response:**
```json
{
  "access_token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9...",
  "token_type": "Bearer",
  "expires_in": 3600,
  "refresh_token": "refresh_token_xxx"
}
```

---

#### **POST /api/auth/refresh**
Refresh access token

**Request:**
```json
{
  "refresh_token": "refresh_token_xxx"
}
```

**Response:**
```json
{
  "access_token": "new_access_token",
  "expires_in": 3600
}
```

---

#### **POST /api/auth/logout**
Revoke tokens

**Response (200 OK):**
```json
{
  "message": "Successfully logged out"
}
```

---

### JWT Token Structure

**Header:**
```json
{
  "alg": "RS256",
  "typ": "JWT"
}
```

**Payload:**
```json
{
  "aud": "https://naacus.org",
  "iss": "https://login.microsoftonline.com/{tenant}/v2.0",
  "iat": 1703267400,
  "exp": 1703271000,
  "sub": "user-id",
  "email": "user@example.com",
  "name": "User Name"
}
```

---

## Error Handling

### Standard Error Response Format

```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "One or more fields failed validation",
    "details": [
      {
        "field": "email",
        "message": "Invalid email format",
        "value": "invalid-email"
      }
    ],
    "timestamp": "2025-12-22T10:30:00Z",
    "requestId": "req-12345"
  }
}
```

### HTTP Status Codes

| Code | Meaning | Example |
|------|---------|---------|
| 200 | OK | Successful GET/PUT |
| 201 | Created | Form successfully submitted |
| 204 | No Content | Successful DELETE |
| 400 | Bad Request | Invalid input data |
| 401 | Unauthorized | Missing/invalid token |
| 403 | Forbidden | User lacks permission |
| 404 | Not Found | Resource not found |
| 409 | Conflict | Duplicate email address |
| 422 | Unprocessable | Validation error |
| 429 | Too Many Requests | Rate limit exceeded |
| 500 | Server Error | Internal server error |
| 503 | Service Unavailable | Maintenance/temporary downtime |

### Common Error Codes

```
VALIDATION_ERROR - Input validation failed
DUPLICATE_ENTRY - Email or unique field already exists
UNAUTHORIZED - Missing or invalid authentication
FORBIDDEN - User lacks permission for action
NOT_FOUND - Resource does not exist
PAYMENT_FAILED - Payment processing failed
EMAIL_SEND_FAILED - Could not send email notification
DATABASE_ERROR - Database operation failed
SERVICE_UNAVAILABLE - Third-party service unavailable
RATE_LIMIT_EXCEEDED - Too many requests
```

---

## Rate Limiting & Constraints

### API Rate Limits

| Endpoint | Limit | Window |
|----------|-------|--------|
| POST /api/v1/memberships | 10 | 1 hour per IP |
| POST /api/v1/volunteers | 10 | 1 hour per IP |
| POST /api/v1/contact | 5 | 1 hour per IP |
| POST /api/v1/newsletter/subscribe | 20 | 1 hour per IP |
| GET /api/v1/* | 1000 | 1 hour per IP |

### Field Constraints

| Field | Min | Max | Format |
|-------|-----|-----|--------|
| firstName | 1 | 100 | alphanumeric + spaces |
| lastName | 1 | 100 | alphanumeric + spaces |
| email | - | 254 | RFC 5322 |
| phone | 10 | 15 | digits only (international) |
| message | 10 | 5000 | text |
| zipCode | 5 | 10 | alphanumeric |
| donation amount | 1.00 | 999999.99 | decimal |

### Batch Operation Limits

- Maximum 100 records per batch insert/update
- Maximum 50 concurrent requests per user
- Maximum 10MB payload size

---

## Future Enhancements

### 1. Advanced Search & Filtering
```
GET /api/v1/memberships?filter[status]=active&sort=createdAt&page=1&limit=20
```

### 2. Bulk Operations
```
POST /api/v1/memberships/bulk
```

### 3. Export Data
```
GET /api/v1/memberships/export?format=csv&fields=firstName,email,status
```

### 4. Analytics & Reporting
```
GET /api/v1/analytics/memberships?startDate=2025-01-01&endDate=2025-12-31
```

### 5. Webhook Subscriptions
```
POST /api/v1/webhooks
{
  "event": "membership.created",
  "url": "https://your-service.com/webhook"
}
```

### 6. Two-Factor Authentication
```
POST /api/auth/2fa/initiate
POST /api/auth/2fa/verify
```

### 7. Audit Logging
```
GET /api/v1/audit-logs?resource=membership&action=create
```

### 8. Integration with External Services
- Email Service (SendGrid, Mailchimp)
- SMS Service (Twilio)
- Payment Processing (Stripe, Square)
- CRM (Salesforce, HubSpot)

---

## Implementation Notes

### Frontend Implementation Status
- ✅ Membership Form (React Component)
- ✅ Volunteer Form (React Component)
- ✅ Newsletter Subscription (React Component)
- ✅ Contact Form (React Component)
- ✅ Donation Form (React Component)
- ✅ Event Display (Static Mock Data)
- ✅ FAQ System (Static Mock Data + Chatbot Integration)
- ✅ Authentication (MSAL + Azure AD)
- ⚠️ Form Submission (Currently goes to SharePoint directly)

### Backend Implementation Required
- ⚠️ Create dedicated API server (Node.js/Express, .NET, Python)
- ⚠️ Set up database (SQL Server, PostgreSQL, MongoDB)
- ⚠️ Implement authentication endpoints
- ⚠️ Create all CRUD endpoints listed above
- ⚠️ Add validation & error handling
- ⚠️ Set up email notifications
- ⚠️ Integrate with payment processors
- ⚠️ Implement rate limiting & logging
- ⚠️ Set up monitoring & alerting

---

## Contact & Support

For questions or clarifications on this API contract:

- **Frontend Team:** naacus-frontend@example.com
- **Backend Team:** naacus-backend@example.com
- **Project Manager:** info@naacus.org

---

**Document Control**
- Version: 1.0
- Status: FINAL
- Date: December 22, 2025
- Next Review: Q1 2026
