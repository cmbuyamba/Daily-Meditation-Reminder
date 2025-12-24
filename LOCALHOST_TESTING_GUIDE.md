# Testing Analytics from Localhost

## Setup Steps

### 1. Create `.env.local` file

In the `naacus-website/` folder, create a `.env.local` file by copying from `.env.local.example`:

```bash
cp .env.local.example .env.local
```

### 2. Fill in Your Credentials

Edit `.env.local` and replace the placeholder values:

```env
# Google Analytics
REACT_APP_GA4_MEASUREMENT_ID=G-XXXXXXXXXX

# M365 Credentials
REACT_APP_AZURE_CLIENT_ID=your-client-id
REACT_APP_AZURE_TENANT_ID=your-tenant-id
REACT_APP_AZURE_CLIENT_SECRET=your-secret
REACT_APP_SHAREPOINT_SITE_URL=yourorg.sharepoint.com/sites/YourSite
REACT_APP_ANALYTICS_LIST_ID=your-guid-here
```

### 3. Start Development Server

```bash
cd naacus-website
npm start
```

### 4. Open Browser DevTools

Press `F12` or `Cmd+Option+I` and go to **Console** tab.

## Testing Events

### Verify Configuration

```javascript
import { getM365ConfigStatus } from './src/services/m365AnalyticsService';
console.log(getM365ConfigStatus());

// Should output:
{
  configured: true,
  clientIdSet: true,
  tenantIdSet: true,
  clientSecretSet: true,
  analyticsListIdSet: true,
  siteUrlSet: true
}
```

### Test CTA Click

```javascript
import { trackCTAEvent } from './src/services/analyticsService';

// This sends to both localStorage, GA4, and M365
trackCTAEvent('test', 'test-button', 'testing-localhost');
```

Check console output:
```
📊 CTA Event: {category: 'test', action: 'test-button', label: 'testing-localhost', ...}
📊 GA Event sent: cta_click {...}
📊 Event sent to M365: cta_click 12345-guid-here
```

### Test Page View

```javascript
import { trackPageView } from './src/services/analyticsService';

trackPageView('test-page');
```

### Test Form Event

```javascript
import { trackFormEvent } from './src/services/analyticsService';

trackFormEvent('TestForm', 'submit');
```

## Where Events Go

### 1. Browser Console
- Development logs show all events being tracked
- Look for `📊` emoji prefix

### 2. localStorage
Open **DevTools → Application → Local Storage** and check:
- Key: `naacus_analytics_events`
- Should contain JSON array of events

### 3. Google Analytics 4
Go to [https://analytics.google.com](https://analytics.google.com):
1. Select your property
2. Go to **Real-time** → **Events**
3. Events appear within 1-2 seconds of tracking
4. Look for: `cta_click`, `page_view`, `form_begin`, `form_submit`, `file_download`

### 4. SharePoint Analytics List
Go to your SharePoint site:
1. Open the **Analytics Events** list
2. Refresh the page (F5)
3. You should see new items appearing
4. Check that fields are populated:
   - EventType: `cta_click`, `page_view`, etc.
   - Timestamp: ISO format time
   - Category: Event category
   - PageURL: `/` or page path
   - UserAgent: Browser info

## Troubleshooting

### M365 Events Not Appearing

**Check 1: Token Error**
```javascript
// In console, you might see:
// "📊 M365 token error: {error: "invalid_client", error_description: "..."}"
```
This means:
- Client ID or Secret is wrong
- App registration not set up correctly
- Permissions not granted

**Check 2: Site Not Found**
```javascript
// "📊 Error getting SharePoint site ID: 404 Not Found"
```
This means:
- SharePoint site URL is incorrect
- App doesn't have permission to the site
- Site no longer exists

**Check 3: List Not Found**
```javascript
// "Error sending to M365 analytics: Item not found"
```
This means:
- Analytics List ID is wrong
- List was deleted
- App doesn't have write permission

### GA4 Events Not Appearing

**Check 1: Measurement ID**
- Wrong measurement ID format (should be `G-XXXXXXXXXX`)
- ID is from old UA property instead of GA4

**Check 2: Network Issues**
Open **DevTools → Network** tab:
1. Look for requests to `google-analytics.com`
2. Check for 200 status (successful)

**Check 3: Real-time Delay**
- GA4 real-time shows events within 2 seconds
- 24-48 hours for full reporting

## Triple-Layer Analytics Flow

Every user interaction now triggers:

```
User Action (click button, navigate, submit form, etc.)
    ↓
analyticsService.trackEvent()
    ├─→ localStorage (immediate, offline capable)
    ├─→ Google Analytics 4 (cloud analytics)
    └─→ M365 SharePoint (historical archive)
```

**Example: User clicks "Join Membership" button**

1. **localStorage** - Event stored immediately in browser
2. **Google Analytics** - Event sent to gtag.js within 1 second
3. **M365** - Event sent via Microsoft Graph API (requires token fetch)

Check all three:
- **localStorage**: DevTools → Application → Local Storage
- **Google Analytics**: analytics.google.com → Real-time Events
- **M365**: SharePoint list → Analytics Events

## Environment Variables (.env.local)

**Never commit `.env.local` to git!**

Add to `.gitignore`:
```
.env.local
.env.*.local
.env
```

Verify it's gitignored:
```bash
git check-ignore .env.local
# Should output: .env.local (if properly ignored)
```

## Common Issues

| Issue | Solution |
|-------|----------|
| M365 events not appearing | Check Client Secret in .env.local |
| GA4 events not appearing | Verify Measurement ID is correct |
| Nothing appears | Check browser console for errors |
| Localhost works, production doesn't | M365 needs public URL for CORS |
| Token errors | Client Secret may have expired |

## Security Notes

⚠️ **Development Only**: The `.env.local` file contains sensitive credentials. This is OK for localhost testing.

🔐 **Production**: Use Azure Key Vault or GitHub Secrets instead of environment variables.

For deployment:
1. **Azure Static Web Apps**: Use Application Settings in Azure Portal
2. **GitHub Actions**: Use GitHub Secrets in workflow
3. **Azure DevOps**: Use Variable Groups

## Need Help?

1. Check [M365_ANALYTICS_SETUP.md](../M365_ANALYTICS_SETUP.md) for detailed configuration
2. Review browser console for error messages
3. Verify all environment variables are set: `console.log(process.env)`
4. Check that SharePoint list has all required columns
