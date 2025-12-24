// Microsoft 365 Analytics Service
// Stores analytics events to SharePoint Lists for historical tracking and audit

import { PublicClientApplication } from '@azure/msal-browser';
import { Client } from '@microsoft/microsoft-graph-client';
import { msalConfig, sharePointScopes, sharePointConfig } from '../config/msalConfig';

// Initialize MSAL instance
let msalInstance = null;
let graphClient = null;

const hasM365Config = !!(
  process.env.REACT_APP_AZURE_CLIENT_ID &&
  process.env.REACT_APP_AZURE_TENANT_ID &&
  process.env.REACT_APP_ANALYTICS_LIST_ID
);

if (hasM365Config) {
  msalInstance = new PublicClientApplication(msalConfig);
}

/**
 * Initialize Microsoft Graph client for analytics
 */
async function initializeGraphClient() {
  if (!hasM365Config) {
    if (process.env.NODE_ENV === 'development') {
      console.warn('⚠️ M365 analytics not configured. Set REACT_APP_AZURE_CLIENT_ID, REACT_APP_AZURE_TENANT_ID, and REACT_APP_ANALYTICS_LIST_ID');
    }
    return null;
  }

  if (graphClient) {
    return graphClient;
  }

  try {
    await msalInstance.initialize();
    const accounts = msalInstance.getAllAccounts();

    let account = null;
    if (accounts.length > 0) {
      account = accounts[0];
    } else {
      // Silent login attempt with cached credentials
      try {
        const tokenResponse = await msalInstance.acquireTokenSilent({
          scopes: sharePointScopes.scopes,
        });
        account = tokenResponse.account;
      } catch (error) {
        // No cached credentials - will attempt on first analytics call
        if (process.env.NODE_ENV === 'development') {
          console.log('📊 M365 analytics: User not signed in yet (will use anonymous tracking)');
        }
        return null;
      }
    }

    if (account) {
      const tokenResponse = await msalInstance.acquireTokenSilent({
        scopes: sharePointScopes.scopes,
        account: account,
      });

      graphClient = Client.init({
        authProvider: (done) => {
          done(null, tokenResponse.accessToken);
        },
      });
    }

    return graphClient;
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error('📊 Error initializing M365 analytics:', error);
    }
    return null;
  }
}

/**
 * Get SharePoint site ID from site URL
 */
async function getSiteId(client, siteUrl) {
  try {
    const site = await client.api(`/sites/${siteUrl}`).get();
    return site.id;
  } catch (error) {
    console.error('Error getting SharePoint site ID:', error);
    return null;
  }
}

/**
 * Send analytics event to SharePoint Analytics List
 */
export async function sendToM365Analytics(eventData) {
  if (!hasM365Config) {
    return { success: false, reason: 'M365 not configured' };
  }

  try {
    const client = await initializeGraphClient();

    if (!client) {
      // M365 not available (user not signed in or no token)
      if (process.env.NODE_ENV === 'development') {
        console.log('📊 M365 analytics: Skipping (not authenticated)');
      }
      return { success: false, reason: 'M365 client not initialized' };
    }

    const siteId = await getSiteId(client, sharePointConfig.siteUrl);
    if (!siteId) {
      return { success: false, reason: 'Cannot resolve SharePoint site' };
    }

    // Prepare list item for analytics
    const listItem = {
      fields: {
        Title: `${eventData.eventType} - ${eventData.timestamp}`,
        EventType: eventData.eventType, // cta_click, form_start, form_submit, page_view, scroll_to_section, download
        EventTimestamp: eventData.timestamp,
        Category: eventData.category || '',
        Action: eventData.action || '',
        Label: eventData.label || '',
        PageURL: eventData.pageUrl || window.location.pathname,
        PageTitle: eventData.pageTitle || document.title,
        UserAgent: eventData.userAgent || navigator.userAgent,
        SessionId: eventData.sessionId || '',
        UserId: eventData.userId || '', // Optional: user identifier if available
        FormName: eventData.formName || '', // For form events
        ResourceName: eventData.resourceName || '', // For download events
        ResourceType: eventData.resourceType || '', // For download events
        SectionId: eventData.sectionId || '', // For scroll events
        CustomData: eventData.customData ? JSON.stringify(eventData.customData) : '', // Any additional data
        ReferrerURL: eventData.referrer || document.referrer || '',
      },
    };

    // Add item to SharePoint Analytics list
    const response = await client
      .api(`/sites/${siteId}/lists/${process.env.REACT_APP_ANALYTICS_LIST_ID}/items`)
      .post(listItem);

    if (process.env.NODE_ENV === 'development') {
      console.log('📊 Event sent to M365:', eventData.eventType, response.id);
    }

    return { success: true, data: response };
  } catch (error) {
    console.error('📊 Error sending to M365 analytics:', error);
    return { success: false, error: error.message };
  }
}

/**
 * Track CTA click in M365
 */
export async function trackCTAInM365(category, action, label, metadata = {}) {
  const eventData = {
    eventType: 'cta_click',
    timestamp: new Date().toISOString(),
    category,
    action,
    label,
    pageUrl: window.location.pathname,
    pageTitle: document.title,
    userAgent: navigator.userAgent,
    customData: metadata,
  };

  return sendToM365Analytics(eventData);
}

/**
 * Track page view in M365
 */
export async function trackPageViewInM365(pageName, pageTitle) {
  const eventData = {
    eventType: 'page_view',
    timestamp: new Date().toISOString(),
    label: pageName,
    pageUrl: window.location.pathname,
    pageTitle: pageTitle || document.title,
    userAgent: navigator.userAgent,
  };

  return sendToM365Analytics(eventData);
}

/**
 * Track form event in M365
 */
export async function trackFormInM365(formName, eventType) {
  const eventData = {
    eventType: eventType, // form_start or form_submit
    timestamp: new Date().toISOString(),
    formName,
    pageUrl: window.location.pathname,
    pageTitle: document.title,
    userAgent: navigator.userAgent,
  };

  return sendToM365Analytics(eventData);
}

/**
 * Track download in M365
 */
export async function trackDownloadInM365(resourceName, resourceType) {
  const eventData = {
    eventType: 'download',
    timestamp: new Date().toISOString(),
    resourceName,
    resourceType,
    pageUrl: window.location.pathname,
    pageTitle: document.title,
    userAgent: navigator.userAgent,
  };

  return sendToM365Analytics(eventData);
}

/**
 * Track scroll event in M365
 */
export async function trackScrollInM365(sectionId) {
  const eventData = {
    eventType: 'scroll_to_section',
    timestamp: new Date().toISOString(),
    sectionId,
    pageUrl: window.location.pathname,
    pageTitle: document.title,
    userAgent: navigator.userAgent,
  };

  return sendToM365Analytics(eventData);
}

/**
 * Batch send multiple analytics events to M365 (for performance)
 */
export async function batchSendToM365(eventDataArray) {
  try {
    const client = await initializeGraphClient();
    if (!client) {
      return { success: false, reason: 'M365 client not initialized', failed: eventDataArray.length };
    }

    const siteId = await getSiteId(client, sharePointConfig.siteUrl);
    if (!siteId) {
      return { success: false, reason: 'Cannot resolve SharePoint site', failed: eventDataArray.length };
    }

    let successCount = 0;
    let failureCount = 0;

    for (const eventData of eventDataArray) {
      try {
        const listItem = {
          fields: {
            Title: `${eventData.eventType} - ${eventData.timestamp}`,
            EventType: eventData.eventType,
            EventTimestamp: eventData.timestamp,
            Category: eventData.category || '',
            Action: eventData.action || '',
            Label: eventData.label || '',
            PageURL: eventData.pageUrl || window.location.pathname,
            PageTitle: eventData.pageTitle || document.title,
            UserAgent: eventData.userAgent || navigator.userAgent,
          },
        };

        await client
          .api(`/sites/${siteId}/lists/${process.env.REACT_APP_ANALYTICS_LIST_ID}/items`)
          .post(listItem);

        successCount++;
      } catch (itemError) {
        console.error('Error sending batch item to M365:', itemError);
        failureCount++;
      }
    }

    if (process.env.NODE_ENV === 'development') {
      console.log(`📊 M365 batch send: ${successCount} success, ${failureCount} failed`);
    }

    return { success: successCount > 0, successCount, failureCount };
  } catch (error) {
    console.error('Error in batch M365 send:', error);
    return { success: false, error: error.message, failed: eventDataArray.length };
  }
}

/**
 * Check if M365 analytics is configured and available
 */
export function isM365AnalyticsAvailable() {
  return hasM365Config;
}

/**
 * Get M365 configuration status
 */
export function getM365ConfigStatus() {
  return {
    configured: hasM365Config,
    clientIdSet: !!process.env.REACT_APP_AZURE_CLIENT_ID,
    tenantIdSet: !!process.env.REACT_APP_AZURE_TENANT_ID,
    analyticsListIdSet: !!process.env.REACT_APP_ANALYTICS_LIST_ID,
    siteUrlSet: !!sharePointConfig.siteUrl,
  };
}

export default {
  sendToM365Analytics,
  trackCTAInM365,
  trackPageViewInM365,
  trackFormInM365,
  trackDownloadInM365,
  trackScrollInM365,
  batchSendToM365,
  isM365AnalyticsAvailable,
  getM365ConfigStatus,
};
