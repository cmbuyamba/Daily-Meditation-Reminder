# Analytics Implementation Guide

## Overview

This document describes the complete analytics tracking infrastructure implemented for the NAACUS website. The system tracks all CTAs (Call-To-Action) clicks and user interactions to understand user behavior and inform website restructuring decisions.

## Architecture

### Components

1. **analyticsService.js** - Core tracking service
   - Event tracking functions
   - localStorage management
   - Data export and analysis
   
2. **useAnalytics.js** - React hook for easy component integration
   - Pre-configured CTA tracking methods
   - Form event tracking
   - Scroll tracking

3. **AnalyticsDashboard.js** - Admin dashboard for viewing analytics
   - Real-time event display
   - Summary statistics
   - CSV export functionality

### Data Flow

```
Component (Hero.js, MemberBenefits.js, etc.)
    ↓
useAnalytics hook (trackCTA, trackForm, etc.)
    ↓
analyticsService.trackCTAEvent() / trackFormEvent()
    ↓
localStorage (stored as JSON array, max 500 events)
    ↓
AnalyticsDashboard.js (displays summary & events)
    ↓
CSV export (for external analysis)
```

## Usage Guide

### 1. Tracking CTA Clicks

**Import the hook:**
```javascript
import { useAnalytics } from '../hooks/useAnalytics';
```

**Use in component:**
```javascript
function MyComponent() {
  const { trackMembershipCTA, trackVolunteerCTA } = useAnalytics();

  const handleJoinClick = () => {
    trackMembershipCTA('Join Button', 'my_section_cta');
    // Then navigate...
    navigate('/membership');
  };

  return (
    <button onClick={handleJoinClick}>
      Join Now
    </button>
  );
}
```

### 2. Tracking Form Submissions

```javascript
const { trackForm } = useAnalytics();

const handleFormSubmit = (formData) => {
  trackForm('MembershipForm', 'form_submit', formData);
  // Submit to server...
};
```

### 3. Tracking Page Navigation

```javascript
const { trackScroll } = useAnalytics();

const handleSectionClick = () => {
  trackScroll('mission-section');
};
```

## CTA Categories

The system tracks 9 CTA categories:

- **membership** - Join membership, become member buttons
- **volunteer** - Volunteer, get involved buttons
- **event** - Event registration, event clicks
- **contact** - Contact form, email links
- **ministry** - Ministry clicks, join ministry
- **resource** - Download, resource access
- **newsletter** - Newsletter signup, email signup
- **navigation** - Page navigation, breadcrumbs
- **donation** - Donation buttons
- **other** - Uncategorized CTAs

## Event Types

- **cta_click** - CTA button/link clicked
- **form_start** - Form opened/focused
- **form_submit** - Form submitted
- **page_view** - Page viewed
- **scroll_to_section** - Scroll to section link clicked
- **download** - File downloaded

## Implemented Integrations

### ✅ Hero.js (Complete)
- "Join Our Community" (membership CTA)
- "Learn Mission" (scroll to about)
- "Get Involved" (volunteer CTA)

### ✅ MemberBenefits.js (Complete)
- "Become a Member" button (membership CTA)
- "Become a Volunteer" button (volunteer CTA)

### 📋 Pending Integration
- Conference.js - "Stay Informed" CTA
- Gallery.js - "Contact Us to Share" CTA
- Ministries.js - Ministry email links
- Resources.js - Resource CTAs
- Footer.js - Navigation links and CTAs
- Contact.js - Form submission tracking
- Volunteer.js - Volunteer form submission
- NewsletterSignup.js - Newsletter signup tracking

## Viewing Analytics

### 1. Access Dashboard
Navigate to: `http://localhost:3000/analytics` (after adding route to App.js)

### 2. Dashboard Features
- **Total Events** - Sum of all tracked events
- **Total CTAs Tracked** - Count of CTA clicks and form starts
- **Pages Visited** - Unique pages with tracked events
- **Conversion Rate** - Form submissions / total events

### 3. Charts
- **Top CTA Categories** - Bar chart of most clicked CTA types
- **Top Actions** - Bar chart of most common button clicks
- **Top Pages** - Bar chart of pages with most activity

### 4. Recent Events
- Last 10 events with timestamp
- Event type, action, and category

### 5. Export Data
- Click "Export to CSV" button
- Downloads all collected events as CSV file
- Includes: timestamp, type, category, action, label, url

## localStorage Structure

Events are stored in localStorage under key `naacus_analytics_events`:

```javascript
[
  {
    timestamp: 1234567890,
    type: "cta_click",
    category: "membership",
    action: "Join Community",
    label: "hero_primary_cta",
    metadata: { section: "hero", ... },
    url: "/home"
  },
  // ... more events (max 500)
]
```

## Integration Checklist

Use this checklist to track analytics integration across components:

- [x] analyticsService.js - Core service created
- [x] useAnalytics.js - React hook created
- [x] AnalyticsDashboard.js - Dashboard page created
- [x] Hero.js - Integrated 3 CTAs
- [x] MemberBenefits.js - Integrated 2 CTAs
- [ ] Conference.js - Integrate "Stay Informed"
- [ ] Gallery.js - Integrate "Contact Us to Share"
- [ ] Ministries.js - Integrate ministry email links
- [ ] Resources.js - Integrate resource CTAs
- [ ] Footer.js - Integrate footer links
- [ ] Contact.js - Integrate form submission
- [ ] Volunteer.js - Integrate form submission
- [ ] NewsletterSignup.js - Integrate newsletter signup
- [ ] App.js - Add /analytics route

## Next Steps

### Phase 1: Complete Component Integration (High Priority)
- [ ] Add tracking to remaining 8+ components
- [ ] Validate event collection in localStorage
- [ ] Test CSV export functionality

### Phase 2: Dashboard Enhancement (Medium Priority)
- [ ] Add admin authentication requirement
- [ ] Add date range filtering
- [ ] Add funnel analysis (views → CTAs → forms)
- [ ] Add time-series charts
- [ ] Add device/browser tracking

### Phase 3: Backend Integration (Medium Priority)
- [ ] Create backend analytics API
- [ ] Send events to server periodically
- [ ] Store in database for long-term analysis
- [ ] Add user session tracking

### Phase 4: Advanced Analysis (Low Priority)
- [ ] User journey mapping
- [ ] Cohort analysis
- [ ] A/B testing framework
- [ ] Custom event definitions
- [ ] Automated insights/alerts

## Testing

### Manual Testing
1. Navigate to a component with tracking
2. Click a tracked button
3. Open DevTools → Application → localStorage
4. Check `naacus_analytics_events` key
5. Verify event object is correct

### Example Event Check
```javascript
// In browser console:
JSON.parse(localStorage.getItem('naacus_analytics_events')).slice(-1)

// Should show:
[{
  timestamp: 1234567890123,
  type: "cta_click",
  category: "membership",
  action: "Join Community",
  label: "hero_primary_cta",
  metadata: {},
  url: "/home"
}]
```

### Testing Dashboard
1. Click several buttons on different pages
2. Navigate to `/analytics`
3. Verify events appear in "Recent Events"
4. Verify counts match in statistics
5. Test "Refresh Data" button
6. Test "Export to CSV" button

## Troubleshooting

### Events not appearing in localStorage
- Check browser console for errors
- Verify useAnalytics hook is imported correctly
- Verify trackCTA function is called on button click
- Check localStorage is enabled

### Dashboard shows no data
- Ensure events exist in localStorage
- Check console for JavaScript errors
- Try refreshing the page
- Clear localStorage and click buttons again

### CSV export not working
- Check console for errors
- Verify browser supports Blob API
- Try different browser
- Check localStorage size (max 500 events)

## Files Modified

1. **src/services/analyticsService.js** - NEW (230 lines)
   - Core tracking service with event management

2. **src/hooks/useAnalytics.js** - NEW (130 lines)
   - React hook with pre-configured CTA methods

3. **src/pages/AnalyticsDashboard.js** - NEW (400+ lines)
   - Admin dashboard for viewing analytics

4. **src/components/Hero.js** - MODIFIED
   - Added useAnalytics import and hook
   - Added trackMembershipCTA calls
   - Created handler functions for buttons

5. **src/components/MemberBenefits.js** - MODIFIED
   - Added useAnalytics import and hook
   - Added trackMembershipCTA and trackVolunteerCTA calls
   - Created handler functions for buttons

## Related Documents

- [CTA_ANALYSIS.md](./CTA_ANALYSIS.md) - Strategic analysis of CTAs and user needs
- [SERVICE_LAYER_GUIDE.md](./SERVICE_LAYER_GUIDE.md) - Overview of service layer architecture
- [REORGANIZATION_SUMMARY.md](./REORGANIZATION_SUMMARY.md) - Overall restructuring plan

## Performance Considerations

- **localStorage limit**: Max 500 events (auto-removes oldest when exceeded)
- **Dashboard refresh**: Auto-refreshes every 30 seconds
- **CSV export**: Fast for < 1000 events, may be slow for larger datasets
- **Browser performance**: Minimal impact, all processing client-side

## Security Notes

- ⚠️ Analytics data is stored locally, not on server
- ⚠️ CSV export downloads raw data - handle carefully
- ⚠️ No user identification - events are anonymous
- ⚠️ Dashboard should be protected with admin auth (TODO)

## Future Enhancements

1. **Backend Integration** - Move to server-side analytics
2. **User Sessions** - Track user journeys across visits
3. **Heatmaps** - Visual display of click locations
4. **Real-time Alerts** - Notify of unusual patterns
5. **Segmentation** - Analyze by device, browser, location
6. **Attribution** - Track which marketing source drives conversions
7. **Retention** - Measure repeat visitor patterns
8. **Funnel Analysis** - Visualize conversion steps

---

**Last Updated:** 2025
**Status:** Phase 1 - Core Implementation Complete
