# Microsoft 365 Analytics Setup Guide

## Overview

Your NAACUS website now implements **triple-layer analytics tracking with implicit M365 authentication**:

1. **localStorage** - Local browser storage (500-event backup, offline support)
2. **Google Analytics 4** - Cloud analytics dashboard & real-time insights
3. **SharePoint Lists** - M365 native storage, historical archive, Power BI integration

**Key Feature**: No user sign-in required. Analytics are sent automatically using application-level credentials.

This guide walks through setting up the M365 analytics layer.

---

## Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    Analytics Flow                           │
└─────────────────────────────────────────────────────────────┘

All Events
    ↓
    ├─→ localStorage (500-event buffer)
    ├─→ Google Analytics 4 (cloud dashboard)
    └─→ SharePoint Lists (historical archive)
         ├─→ Application-Level Auth (no user sign-in)
         ├─→ Client Credentials Flow (secure backend token)
         ├─→ Event Timestamps
         ├─→ Event Categories
         ├─→ User Actions
         ├─→ Page Context
         └─→ Custom Metadata

Authentication Method:
- Client Credentials OAuth Flow
- No user sign-in popup required
- Credentials stored securely in environment variables
- Automatic token refresh with caching

Event Types Tracked:
- cta_click (button/link clicks)
- page_view (page navigation)
- form_start (form engagement)
- form_submit (form completion)
- download (resource downloads)
- scroll_to_section (scroll interactions)
```

---

## Setup Steps

### 1. Create Azure App Registration

#### Register Application in Azure AD

1. Go to [Azure Portal](https://portal.azure.com)
2. Navigate to **Azure Active Directory** → **App registrations**
3. Click **New registration**
4. Fill in:
   - **Name**: `NAACUS Analytics Service`
   - **Supported account types**: Accounts in this organizational directory only
5. Click **Register**

#### Get Your Credentials

Copy these values from the app registration overview:
- **Application (client) ID** → `REACT_APP_AZURE_CLIENT_ID`
- **Directory (tenant) ID** → `REACT_APP_AZURE_TENANT_ID`

#### Create Client Secret

1. Navigate to **Certificates & secrets** → **Client secrets**
2. Click **New client secret**
3. Add description: `NAACUS Analytics`
4. Set expiration: 24 months (or longer)
5. Copy the **Value** → `REACT_APP_AZURE_CLIENT_SECRET`
   - ⚠️ **IMPORTANT**: Copy immediately! You won't be able to see it again

#### Configure API Permissions

1. Go to **API permissions**
2. Click **Add a permission**
3. Select **Microsoft Graph**
4. Choose **Application permissions** (NOT delegated)
5. Search for and add: **Sites.ReadWrite.All**
6. Click **Grant admin consent** (requires admin access)

---

### 2. SharePoint Site & List Creation

#### Grant SharePoint Permissions to App

1. Go to your **SharePoint site** (usually `https://yourorganization.sharepoint.com/sites/YourSite`)
2. Click **Settings** (gear icon)
3. Under **Advanced settings**, enable **SharePoint API access**

#### Get Your SharePoint Site URL

1. While on your SharePoint site, copy the URL from the address bar
2. Format should be: `yourorganization.sharepoint.com/sites/YourSite`
3. Store as: `REACT_APP_SHAREPOINT_SITE_URL`

#### Create Analytics Events List

1. In SharePoint, click **New** → **List**
2. Name it: **Analytics Events**
3. Choose blank list

#### Add Required Columns

Create these columns in the list:

| Column Name | Type | Notes |
|---|---|---|
| Title | Single line text (auto-created) | Default, stores event summary |
| EventType | Single line text | cta_click, page_view, form_start, form_submit, download, scroll_to_section |
| EventTimestamp | Date and Time | ISO format timestamp |
| Category | Single line text | CTA category (membership, volunteer, etc.) |
| Action | Single line text | Specific action (button text, link text) |
| Label | Single line text | Additional label/description |
| PageURL | Single line text | Page pathname where event occurred |
| PageTitle | Single line text | Document title |
| UserAgent | Multiple lines text | Browser/device info |
| SessionId | Single line text | Session identifier |
| FormName | Single line text | Name of form (for form events) |
| ResourceName | Single line text | Resource name (for downloads) |
| ResourceType | Single line text | Resource type (pdf, doc, image) |
| SectionId | Single line text | Section ID (for scroll events) |
| CustomData | Multiple lines text | JSON-formatted custom data |
| ReferrerURL | Single line text | Page referrer |

#### Get the List ID

1. Open the **Analytics Events** list
2. Click **Settings** → **List settings**
3. Look at the URL: `...?List={GUID}`
4. Copy the GUID → `REACT_APP_ANALYTICS_LIST_ID`

---

### 3. Environment Configuration

Add these to your `.env.local` file (in `naacus-website/.env.local`):

```env
# Azure AD Configuration (Application-Level)
REACT_APP_AZURE_CLIENT_ID=your-application-id-here
REACT_APP_AZURE_TENANT_ID=your-tenant-id-here
REACT_APP_AZURE_CLIENT_SECRET=your-client-secret-here

# SharePoint Configuration
REACT_APP_SHAREPOINT_SITE_URL=yourorganization.sharepoint.com/sites/YourSite
REACT_APP_ANALYTICS_LIST_ID=your-list-id-guid-here

# Google Analytics (from previous setup)
REACT_APP_GA4_MEASUREMENT_ID=G-XXXXXXXXXX
```

#### Security Note

⚠️ **IMPORTANT**: Never commit `.env.local` to version control. Add it to `.gitignore`:

```
# .gitignore
.env.local
.env.*.local
```

---

### 4. Code Integration (Already Done!)

The following have been automatically integrated with **implicit authentication**:

✅ **m365AnalyticsService.js** - M365 tracking functions with Client Credentials OAuth
✅ **analyticsService.js** - All tracking methods send to M365
✅ **Automatic token management** - Tokens cached and refreshed automatically
✅ **Graceful fallbacks** - If M365 not configured, other tracking continues
✅ **No user sign-in required** - Works automatically in background

### Tracking Functions Available:

```javascript
import {
  trackCTAInM365,
  trackPageViewInM365,
  trackFormInM365,
  trackDownloadInM365,
  trackScrollInM365,
  batchSendToM365,
  isM365AnalyticsAvailable,
} from '../services/m365AnalyticsService';
```

---

## Testing Your Setup

### 1. Verify Configuration

Open browser console and check:

```javascript
// In your browser DevTools Console
import { getM365ConfigStatus } from './src/services/m365AnalyticsService';
console.log(getM365ConfigStatus());

// Output:
{
  configured: true,
  clientIdSet: true,
  tenantIdSet: true,
  clientSecretSet: true,
  analyticsListIdSet: true,
  siteUrlSet: true
}
```

### 2. Test Event Tracking

Click around the website and perform these actions:
- Click a button (tests cta_click)
- Navigate to a different page (tests page_view)
- Fill out a form (tests form_start and form_submit)
- Download a resource (tests download)
- Scroll to a section (tests scroll_to_section)

### 3. Verify in SharePoint

1. Go to your **Analytics Events** list in SharePoint
2. You should see events appearing automatically
3. Check that all fields are populated correctly
4. Verify event timestamps match your testing time

---

## Event Data Flow

### Example: CTA Click Event

```
User clicks "Join Membership" button (Header.js)
    ↓
trackCTAEvent('membership', 'join-button', 'header')
    ↓
Three parallel tracks:
    ├─→ localStorage.setItem('naacus_analytics_events', [...])
    ├─→ window.gtag('event', 'cta_click', {...})
    └─→ trackCTAInM365('membership', 'join-button', 'header')
         ↓
    Microsoft Graph API call to create SharePoint list item
         ↓
    New record in Analytics Events list with:
       - Title: "cta_click - 2025-12-23T15:30:00Z"
       - EventType: "cta_click"
       - Category: "membership"
       - Action: "join-button"
       - Label: "header"
       - EventTimestamp: "2025-12-23T15:30:00Z"
       - PageURL: "/membership"
       - UserAgent: "Mozilla/5.0..."
```

---

## Data Privacy & Security

### What Gets Stored

✅ Event metadata (type, timestamp, action)
✅ Page context (URL, title, referrer)
✅ Device info (browser user agent)
✅ User interactions (clicks, forms, downloads)

### What Does NOT Get Stored

❌ Sensitive form data (passwords, credit cards)
❌ Personal identification (email, phone - unless user consents)
❌ Location data (IP addresses are stripped)
❌ User credentials (never stored on client or server)

### Authentication Security

The application uses **OAuth 2.0 Client Credentials Flow**:

1. ✅ **Secure credentials**: Client Secret never exposed to browser
2. ✅ **Token validation**: Microsoft Graph API validates all requests
3. ✅ **Time-limited tokens**: Access tokens expire after 1 hour
4. ✅ **Token caching**: Tokens cached in memory only (not localStorage)
5. ✅ **Automatic refresh**: Expired tokens automatically refreshed

### SharePoint List Permissions

1. Only authenticated app can write to Analytics Events list
2. Set appropriate permissions on the list:
   - **Owners**: Your admin team (manage list)
   - **Members**: Analytics team (view data)
   - **Visitors**: (no access)
   - **No public access**

### Environment Variable Security

Store sensitive credentials securely:

- **Local development**: Use `.env.local` (gitignored)
- **Azure deployment**: Use Azure Key Vault or App Configuration
- **Staging/Production**: Set via GitHub Secrets or Azure DevOps

---

## Power BI Integration (Optional)

### Create Analytics Dashboard

1. Open **Power BI Desktop**
2. **Get Data** → **SharePoint Online Lists**
3. Select your SharePoint site and **Analytics Events** list
4. Create visualizations:

```
Popular Dashboards:
├─ CTA Performance by Category (bar chart)
├─ Form Conversion Funnel (form_start → form_submit)
├─ Page View Traffic (line chart over time)
├─ Event Timeline (table with all events)
├─ Device/Browser Distribution (pie chart)
└─ Download Popularity (download events by resource)
```

5. Publish to **Power BI Service**
6. Share with stakeholders

---

## Troubleshooting

### M365 Analytics Not Recording Events

**Check #1: Configuration**
```javascript
// In console:
isM365AnalyticsAvailable() // Should return true if configured
```

**Check #2: Environment Variables**
Verify all required env vars are set:
- `REACT_APP_AZURE_CLIENT_ID`
- `REACT_APP_AZURE_TENANT_ID`
- `REACT_APP_AZURE_CLIENT_SECRET` (⚠️ most common issue)
- `REACT_APP_ANALYTICS_LIST_ID`
- `REACT_APP_SHAREPOINT_SITE_URL`

**Check #3: App Registration Permissions**
- Go to Azure Portal → App registrations
- Verify **Sites.ReadWrite.All** permission is added
- Verify **Grant admin consent** was clicked (green checkmark)

**Check #4: SharePoint Access**
- Ensure app has write permission to Analytics Events list
- Test access by navigating to the list in SharePoint

### Token Errors

**Error: "401 Unauthorized"**
- Client Secret may have expired
- Check expiration in Azure Portal → App → Certificates & secrets
- Generate new secret if needed

**Error: "403 Forbidden"**
- App registration lacks required permissions
- Add Sites.ReadWrite.All and grant admin consent

### Events Not Appearing in SharePoint

1. **Wait a moment** - Events are async, may take 1-2 seconds
2. **Refresh the SharePoint list** - Press F5 or click refresh
3. **Check browser console** for errors:
   - Look for "Error sending to M365 analytics" messages
   - Check for 401/403 authentication errors

### Graph API Errors

**Error: "Invalid request"**
- List ID format is incorrect (should be GUID like `12345678-1234-1234-1234-123456789012`)
- Site URL format is wrong (should be `domain.sharepoint.com/sites/name`)

**Error: "Item not found"**
- Analytics Events list doesn't exist
- List ID points to a deleted list
- App doesn't have permission to the list

---

## Next Steps

1. ✅ Create Azure app registration with Client Secret
2. ✅ Grant SharePoint permissions to app
3. ✅ Create SharePoint Analytics Events list
4. ✅ Add columns to the list
5. ✅ Set environment variables in `.env.local`
6. ⏳ Test with website interactions
7. ⏳ Verify events in SharePoint
8. ⏳ Create Power BI dashboard

---

## Reference Documentation

- [Azure AD App Registration](https://learn.microsoft.com/en-us/azure/active-directory/develop/quickstart-register-app)
- [Microsoft Graph API](https://learn.microsoft.com/en-us/graph/overview)
- [SharePoint REST API](https://learn.microsoft.com/en-us/sharepoint/dev/sp-add-ins/get-to-know-the-sharepoint-rest-service)
- [MSAL for Browser](https://github.com/AzureAD/microsoft-authentication-library-for-js)
- [Power BI Documentation](https://learn.microsoft.com/en-us/power-bi/)

---

## Support

For issues or questions:
1. Check browser DevTools Console for error messages
2. Review this guide's Troubleshooting section
3. Verify all environment variables are correctly set
4. Check Azure portal for app registration configuration
5. Ensure SharePoint list has all required columns

---

**Architecture**: Client Credentials OAuth Flow (Implicit Authentication)
**Status**: ✅ M365 Analytics Integration Complete
**Date**: December 23, 2025
**Commit**: 57c549b (updated for implicit auth)
