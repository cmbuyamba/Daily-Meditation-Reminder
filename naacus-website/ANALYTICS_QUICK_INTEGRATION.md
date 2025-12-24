# Quick Analytics Integration Guide

Fast-track guide to add analytics tracking to remaining components.

## Copy-Paste Templates

### Template 1: Single CTA Button

```javascript
// 1. Add import at top of file
import { useAnalytics } from '../hooks/useAnalytics';

// 2. Add in component function
const { trackMembershipCTA } = useAnalytics(); // or other tracking method

// 3. Create handler function
const handleButtonClick = () => {
  trackMembershipCTA('Button Label', 'section_name_cta');
  // ... existing click handler code ...
};

// 4. Update button onClick
<button onClick={handleButtonClick}>Click Me</button>
```

### Template 2: Multiple CTAs

```javascript
import { useAnalytics } from '../hooks/useAnalytics';

const { 
  trackMembershipCTA,
  trackVolunteerCTA,
  trackEventCTA,
  trackContactCTA
} = useAnalytics();

const handleMembershipClick = () => {
  trackMembershipCTA('Join Button', 'section_cta');
  navigate('/membership');
};

const handleVolunteerClick = () => {
  trackVolunteerCTA('Volunteer Button', 'section_cta');
  navigate('/volunteer');
};

const handleEventClick = () => {
  trackEventCTA('Event Registration', 'section_cta');
  navigate('/events');
};

const handleContactClick = () => {
  trackContactCTA('Contact Us', 'section_cta');
  navigate('/contact');
};
```

### Template 3: Form Submission

```javascript
import { useAnalytics } from '../hooks/useAnalytics';

const { trackForm } = useAnalytics();

const handleFormStart = () => {
  trackForm('MembershipForm', 'form_start');
};

const handleFormSubmit = (formData) => {
  trackForm('MembershipForm', 'form_submit', formData);
  // ... existing submit code ...
};

<form onFocus={handleFormStart} onSubmit={handleFormSubmit}>
  {/* form fields */}
</form>
```

### Template 4: Link Click

```javascript
const { trackMinistryCTA } = useAnalytics();

const handleLinkClick = (ministryName) => {
  trackMinistryCTA(`Email ${ministryName}`, 'ministry_email_link');
};

<a 
  href={`mailto:${ministry.email}`}
  onClick={() => handleLinkClick(ministry.title)}
>
  {ministry.email}
</a>
```

## Component-by-Component Instructions

### Conference.js
**Location:** `src/components/Conference.js`
**CTA:** "Stay Informed" button

```javascript
// Add import
import { useAnalytics } from '../hooks/useAnalytics';

// In component function
const { trackEventCTA } = useAnalytics();

// Replace onClick
const handleStayInformed = () => {
  trackEventCTA('Stay Informed', 'conference_cta');
  // ... existing code ...
};

// Update button
<button onClick={handleStayInformed}>
  Stay Informed
</button>
```

### Gallery.js
**Location:** `src/components/Gallery.js`
**CTA:** "Contact Us to Share" button

```javascript
// Add import
import { useAnalytics } from '../hooks/useAnalytics';

// In component function
const { trackContactCTA } = useAnalytics();

// Create handler
const handleContactShare = () => {
  trackContactCTA('Contact to Share', 'gallery_cta');
  navigate('/contact');
};

// Update button
<button onClick={handleContactShare}>
  Contact Us to Share
</button>
```

### Ministries.js
**Location:** `src/components/Ministries.js`
**CTA:** Ministry email links

```javascript
// Add import
import { useAnalytics } from '../hooks/useAnalytics';

// In component function
const { trackMinistryCTA } = useAnalytics();

// Create handler
const handleMinistryEmail = (ministryTitle) => {
  trackMinistryCTA(`Email ${ministryTitle}`, 'ministry_email_link');
};

// Update email link
<a 
  href={`mailto:${ministry.email}`}
  onClick={() => handleMinistryEmail(ministry.title)}
>
  {ministry.email}
</a>
```

### Resources.js
**Location:** `src/components/Resources.js`
**CTA:** Resource links, download buttons

```javascript
// Add import
import { useAnalytics } from '../hooks/useAnalytics';

// In component function
const { trackResourceCTA } = useAnalytics();

// Create handlers
const handleResourceClick = (resourceName) => {
  trackResourceCTA(`View ${resourceName}`, 'resource_click');
};

const handleDownloadResource = (resourceName) => {
  trackResourceCTA(`Download ${resourceName}`, 'resource_download');
};

// Update links
<a href={resource.url} onClick={() => handleResourceClick(resource.name)}>
  {resource.name}
</a>

<button onClick={() => handleDownloadResource(resource.name)}>
  Download
</button>
```

### Footer.js
**Location:** `src/components/Footer.js`
**CTA:** Navigation links, contact links

```javascript
// Add import
import { useAnalytics } from '../hooks/useAnalytics';

// In component function
const { trackCTA, trackContactCTA } = useAnalytics();
const navigate = useNavigate();

// Create handlers
const handleFooterNavigation = (section) => {
  trackCTA('navigation', `Footer ${section}`, 'footer_navigation');
};

const handleFooterContact = () => {
  trackContactCTA('Footer Contact', 'footer_cta');
  navigate('/contact');
};

// Update links
<button 
  onClick={() => {
    handleFooterNavigation('About');
    navigate('/about');
  }}
>
  About
</button>

<button onClick={handleFooterContact}>
  Contact Us
</button>
```

### Contact.js
**Location:** `src/components/Contact.js` or `src/pages/ContactPage.js`
**CTA:** Form submission

```javascript
// Add import
import { useAnalytics } from '../hooks/useAnalytics';

// In component function
const { trackForm } = useAnalytics();

// Create handlers
const handleFormFocus = () => {
  trackForm('ContactForm', 'form_start');
};

const handleFormSubmit = (e, formData) => {
  e.preventDefault();
  trackForm('ContactForm', 'form_submit', {
    email: formData.email,
    subject: formData.subject
  });
  // ... existing submit code ...
};

// Update form
<form 
  onFocus={handleFormFocus}
  onSubmit={(e) => handleFormSubmit(e, formData)}
>
  {/* form fields */}
</form>
```

### Volunteer.js
**Location:** `src/pages/VolunteerPage.js`
**CTA:** Volunteer form submission

```javascript
// Add import
import { useAnalytics } from '../hooks/useAnalytics';

// In component function
const { trackForm, trackVolunteerCTA } = useAnalytics();

// Create handlers
const handleFormStart = () => {
  trackForm('VolunteerForm', 'form_start');
};

const handleFormSubmit = (e, formData) => {
  e.preventDefault();
  trackForm('VolunteerForm', 'form_submit', {
    email: formData.email,
    interests: formData.interests
  });
  trackVolunteerCTA('Volunteer Form Submitted', 'volunteer_form');
  // ... existing submit code ...
};

// Update form
<form 
  onFocus={handleFormStart}
  onSubmit={(e) => handleFormSubmit(e, formData)}
>
  {/* form fields */}
</form>
```

### Newsletter.js / NewsletterSignup.js
**Location:** `src/components/Newsletter.js`
**CTA:** Newsletter signup

```javascript
// Add import
import { useAnalytics } from '../hooks/useAnalytics';

// In component function
const { trackForm, trackNewsletterCTA } = useAnalytics();

// Create handlers
const handleNewsletterSubmit = (e, email) => {
  e.preventDefault();
  trackForm('NewsletterForm', 'form_submit', { email });
  trackNewsletterCTA('Newsletter Signup', 'newsletter_cta');
  // ... existing submit code ...
};

// Update form
<form onSubmit={(e) => handleNewsletterSubmit(e, email)}>
  <input type="email" value={email} onChange={...} />
  <button type="submit">Subscribe</button>
</form>
```

## Bulk Integration Script

To speed up integration across all components, use this search pattern:

1. **Find all onClick handlers:**
   ```
   Search: onClick={\(\) => handleNavigation
   ```
   Replace with handler function using tracking

2. **Find all form submissions:**
   ```
   Search: onSubmit
   ```
   Add trackForm call

3. **Find all navigation links:**
   ```
   Search: <Link to=
   ```
   Consider adding tracking to important links

## Verification Checklist

After integrating each component:

- [ ] Import `useAnalytics` hook
- [ ] Add destructuring for needed tracking methods
- [ ] Create handler function with tracking call
- [ ] Update onClick/onSubmit with new handler
- [ ] Test button click in browser
- [ ] Check localStorage for event
- [ ] Verify event has correct category and action
- [ ] Verify no console errors

## Testing Integration

```javascript
// In browser console, after clicking tracked buttons:

const events = JSON.parse(localStorage.getItem('naacus_analytics_events'));
console.table(events.slice(-5)); // Show last 5 events

// Should show:
// timestamp | type | category | action | label
// ----------|------|----------|--------|-------
```

## Debugging Tips

**Check if tracking was called:**
```javascript
// Add temporary console.log in handler
const handleClick = () => {
  console.log('Tracking CTA...'); // You should see this
  trackMembershipCTA('Button', 'section');
};
```

**Verify event structure:**
```javascript
const events = JSON.parse(localStorage.getItem('naacus_analytics_events'));
const lastEvent = events[events.length - 1];
console.log(lastEvent);
// Should have: timestamp, type, category, action, label, metadata, url
```

**Check for errors:**
```javascript
// Open browser DevTools Console
// Look for any errors related to useAnalytics or trackCTA
// Common error: "trackCTA is not a function" - check import
```

## Files to Modify (Checklist)

- [ ] src/components/Conference.js
- [ ] src/components/Gallery.js
- [ ] src/components/Ministries.js
- [ ] src/components/Resources.js
- [ ] src/components/Footer.js
- [ ] src/components/Newsletter.js
- [ ] src/pages/ContactPage.js
- [ ] src/pages/VolunteerPage.js
- [ ] src/pages/HomePage.js (if it has CTAs)
- [ ] Any other components with buttons/links

## Estimated Time

- Per component: 5-10 minutes
- Full integration (10 components): 1-2 hours
- Testing all events: 30 minutes
- Total: 2-3 hours

---

**Note:** All templates assume React Router v6 with `useNavigate()`. Adjust imports/patterns as needed for your specific setup.
