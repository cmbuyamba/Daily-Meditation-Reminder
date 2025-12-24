/**
 * Analytics Service - Track user CTAs and interactions
 * Purpose: Collect data on user behavior to understand conversion paths
 * Integrates with Google Analytics 4 for cloud analytics
 * Also stores locally in localStorage for backup/offline tracking
 * Usage: Import and use useAnalytics hook in components
 */

import {
  trackCTAInGA,
  trackPageViewInGA,
  trackFormInGA,
  trackDownloadInGA,
  trackScrollInGA,
} from './googleAnalyticsService';

// Local storage key for analytics data
const ANALYTICS_STORAGE_KEY = 'naacus_analytics_events';

// CTA Categories
export const CTA_CATEGORIES = {
  MEMBERSHIP: 'membership',
  VOLUNTEER: 'volunteer',
  EVENT: 'event',
  CONTACT: 'contact',
  RESOURCE: 'resource',
  MINISTRY: 'ministry',
  NEWSLETTER: 'newsletter',
  NAVIGATION: 'navigation',
  DONATION: 'donation',
  OTHER: 'other',
};

// Event types
export const EVENT_TYPES = {
  CTA_CLICK: 'cta_click',
  FORM_START: 'form_start',
  FORM_SUBMIT: 'form_submit',
  PAGE_VIEW: 'page_view',
  SCROLL_TO_SECTION: 'scroll_to_section',
  DOWNLOAD: 'download',
};

/**
 * Track a CTA event
 * @param {string} category - CTA category from CTA_CATEGORIES
 * @param {string} action - Specific action (button text, link text, etc.)
 * @param {string} label - Additional label (page, section, destination)
 * @param {object} metadata - Additional metadata (optional)
 */
export const trackCTAEvent = (category, action, label, metadata = {}) => {
  const event = {
    timestamp: new Date().toISOString(),
    type: EVENT_TYPES.CTA_CLICK,
    category,
    action,
    label,
    url: window.location.pathname,
    userAgent: navigator.userAgent,
    ...metadata,
  };

  // Store in localStorage for analytics
  const existingEvents = JSON.parse(
    localStorage.getItem(ANALYTICS_STORAGE_KEY) || '[]'
  );
  existingEvents.push(event);

  // Keep only last 500 events to avoid storage bloat
  const recentEvents = existingEvents.slice(-500);
  localStorage.setItem(ANALYTICS_STORAGE_KEY, JSON.stringify(recentEvents));

  // Send to Google Analytics
  trackCTAInGA(category, action, label);

  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log('📊 CTA Event:', {
      category,
      action,
      label,
      timestamp: event.timestamp,
      url: event.url,
    });
  }

  // TODO: Send to analytics backend (Segment, Mixpanel, etc.)
  // sendToAnalyticsBackend(event);
};

/**
 * Track page view
 * @param {string} pageName - Name of the page/section
 */
export const trackPageView = (pageName) => {
  const event = {
    timestamp: new Date().toISOString(),
    type: EVENT_TYPES.PAGE_VIEW,
    page: pageName,
    url: window.location.pathname,
  };

  // Store in localStorage for analytics
  const existingEvents = JSON.parse(
    localStorage.getItem(ANALYTICS_STORAGE_KEY) || '[]'
  );
  existingEvents.push(event);

  // Keep only last 500 events to avoid storage bloat
  const recentEvents = existingEvents.slice(-500);
  localStorage.setItem(ANALYTICS_STORAGE_KEY, JSON.stringify(recentEvents));

  // Send to Google Analytics
  trackPageViewInGA(pageName);

  if (process.env.NODE_ENV === 'development') {
    console.log('📄 Page View:', pageName);
  }
};

/**
 * Track scroll to section
 * @param {string} sectionId - ID of the section scrolled to
 */
export const trackScrollToSection = (sectionId) => {
  trackCTAEvent(
    CTA_CATEGORIES.NAVIGATION,
    'scroll_to_section',
    sectionId,
    { sectionId }
  );
  // Also send directly to GA
  trackScrollInGA(sectionId);
};

/**
 * Track resource download
 * @param {string} resourceName - Name of the resource being downloaded
 * @param {string} resourceType - Type of resource (pdf, doc, image, etc.)
 */
export const trackDownload = (resourceName, resourceType = '') => {
  const event = {
    timestamp: new Date().toISOString(),
    type: EVENT_TYPES.DOWNLOAD,
    resource: resourceName,
    resourceType,
    url: window.location.pathname,
  };

  // Store in localStorage for analytics
  const existingEvents = JSON.parse(
    localStorage.getItem(ANALYTICS_STORAGE_KEY) || '[]'
  );
  existingEvents.push(event);

  // Keep only last 500 events to avoid storage bloat
  const recentEvents = existingEvents.slice(-500);
  localStorage.setItem(ANALYTICS_STORAGE_KEY, JSON.stringify(recentEvents));

  // Send to Google Analytics
  trackDownloadInGA(resourceName, resourceType);

  if (process.env.NODE_ENV === 'development') {
    console.log('📥 Download Event:', resourceName, resourceType);
  }
};

/**
 * Track form interaction
 * @param {string} formName - Name of the form
 * @param {string} eventType - 'start' or 'submit'
 * @param {object} formData - Form data (optional, sanitized)
 */
export const trackFormEvent = (formName, eventType, formData = {}) => {
  const event = {
    timestamp: new Date().toISOString(),
    type:
      eventType === 'start' ? EVENT_TYPES.FORM_START : EVENT_TYPES.FORM_SUBMIT,
    form: formName,
    url: window.location.pathname,
    // Don't store sensitive data, just field names
    fields: Object.keys(formData),
  };

  // Store in localStorage for analytics
  const existingEvents = JSON.parse(
    localStorage.getItem(ANALYTICS_STORAGE_KEY) || '[]'
  );
  existingEvents.push(event);

  // Keep only last 500 events to avoid storage bloat
  const recentEvents = existingEvents.slice(-500);
  localStorage.setItem(ANALYTICS_STORAGE_KEY, JSON.stringify(recentEvents));

  // Send to Google Analytics
  trackFormInGA(formName, eventType);

  // Only log form_submit events to avoid console spam from form_start
  if (process.env.NODE_ENV === 'development' && eventType === 'submit') {
    console.log('📝 Form Event:', event.type, formName);
  }
};

/**
 * Get all analytics events
 * @returns {array} Array of tracked events
 */
export const getAnalyticsEvents = () => {
  return JSON.parse(localStorage.getItem(ANALYTICS_STORAGE_KEY) || '[]');
};

/**
 * Get analytics summary
 * @returns {object} Summary of analytics data
 */
export const getAnalyticsSummary = () => {
  const events = getAnalyticsEvents();

  // Group by category
  const byCategory = events.reduce((acc, event) => {
    if (event.category) {
      acc[event.category] = (acc[event.category] || 0) + 1;
    }
    return acc;
  }, {});

  // Group by action
  const byAction = events.reduce((acc, event) => {
    if (event.action) {
      acc[event.action] = (acc[event.action] || 0) + 1;
    }
    return acc;
  }, {});

  // Group by page
  const byPage = events.reduce((acc, event) => {
    const page = event.url || 'unknown';
    acc[page] = (acc[page] || 0) + 1;
    return acc;
  }, {});

  return {
    totalEvents: events.length,
    eventsByCategory: byCategory,
    eventsByAction: byAction,
    eventsByPage: byPage,
    latestEvents: events.slice(-10),
  };
};

/**
 * Clear all analytics data
 */
export const clearAnalytics = () => {
  localStorage.removeItem(ANALYTICS_STORAGE_KEY);
  console.log('✓ Analytics data cleared');
};

/**
 * Export analytics data as CSV
 * @returns {string} CSV formatted data
 */
export const exportAnalyticsCSV = () => {
  const events = getAnalyticsEvents();

  if (events.length === 0) {
    return 'No analytics data to export';
  }

  // Create CSV headers
  const headers = [
    'Timestamp',
    'Type',
    'Category',
    'Action',
    'Label',
    'URL',
    'Form',
  ];
  const rows = events.map((event) => [
    event.timestamp,
    event.type,
    event.category || '',
    event.action || '',
    event.label || '',
    event.url || '',
    event.form || '',
  ]);

  // Combine headers and rows
  const csv = [
    headers.join(','),
    ...rows.map((row) =>
      row.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(',')
    ),
  ].join('\n');

  return csv;
};

/**
 * Download analytics data
 */
export const downloadAnalyticsData = () => {
  const csv = exportAnalyticsCSV();
  const element = document.createElement('a');
  element.setAttribute(
    'href',
    'data:text/csv;charset=utf-8,' + encodeURIComponent(csv)
  );
  element.setAttribute(
    'download',
    `naacus-analytics-${new Date().toISOString().split('T')[0]}.csv`
  );
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);

  console.log('✓ Analytics data downloaded');
};
