/**
 * Microsoft 365 Authentication Configuration
 * 
 * This file contains the configuration for Microsoft Authentication Library (MSAL)
 * to enable Microsoft 365 integration.
 * 
 * To complete the integration:
 * 1. Register your application in Azure Active Directory
 * 2. Update the clientId with your application's client ID
 * 3. Configure redirect URIs in Azure AD to match your deployment URLs
 * 4. Add required API permissions (e.g., User.Read, Mail.Send)
 */

export const msalConfig = {
  auth: {
    clientId: "YOUR_CLIENT_ID_HERE", // Replace with your Azure AD app client ID
    authority: "https://login.microsoftonline.com/common", // For multi-tenant apps
    redirectUri: window.location.origin, // Dynamically set based on deployment
  },
  cache: {
    cacheLocation: "sessionStorage", // This configures where your cache will be stored
    storeAuthStateInCookie: false, // Set to true for IE11 or Edge
  },
};

// Add scopes for Microsoft Graph API
export const loginRequest = {
  scopes: ["User.Read", "Mail.Send"], // Permissions for reading user profile and sending emails
};

// Microsoft Graph API endpoints
export const graphConfig = {
  graphMeEndpoint: "https://graph.microsoft.com/v1.0/me",
  graphMailEndpoint: "https://graph.microsoft.com/v1.0/me/sendMail",
};

/**
 * Integration Guide:
 * 
 * 1. User Authentication:
 *    - Users can sign in with their Microsoft 365 accounts
 *    - Access to user profile information
 * 
 * 2. Email Integration:
 *    - Send automated emails through Microsoft 365
 *    - Useful for conference registration confirmations
 * 
 * 3. Calendar Integration (optional):
 *    - Add conference events to user calendars
 *    - Requires additional scopes: ["Calendars.ReadWrite"]
 * 
 * 4. OneDrive Integration (optional):
 *    - Share conference materials and resources
 *    - Requires additional scopes: ["Files.ReadWrite"]
 * 
 * For detailed setup instructions, see:
 * https://docs.microsoft.com/en-us/azure/active-directory/develop/quickstart-v2-javascript
 */
