/**
 * Microsoft Copilot Studio Configuration
 * 
 * This file contains configuration for connecting to Microsoft Copilot Studio
 * via the Direct Line API (Azure Bot Service)
 * 
 * Setup Instructions:
 * 1. Create a Copilot Studio bot at https://copilotstudio.microsoft.com
 * 2. Enable the "Direct Line" channel in your bot settings
 * 3. Generate a Direct Line secret key
 * 4. Add the secret key to your .env file as REACT_APP_COPILOT_DIRECT_LINE_SECRET
 * 
 * For M365 integration:
 * - Configure Azure AD authentication
 * - Set up Microsoft Graph API permissions
 * - Enable SSO for seamless user experience
 */

export const copilotStudioConfig = {
  // Direct Line API endpoint
  directLineEndpoint: 'https://directline.botframework.com/v3/directline',
  
  // Bot ID (from Copilot Studio)
  botId: process.env.REACT_APP_COPILOT_BOT_ID || '',
  
  // Direct Line Secret (store in .env file, never commit)
  directLineSecret: process.env.REACT_APP_COPILOT_DIRECT_LINE_SECRET || '',
  
  // Token endpoint for refreshing (optional)
  tokenEndpoint: process.env.REACT_APP_COPILOT_TOKEN_ENDPOINT || '',
  
  // Azure AD / M365 Configuration
  azureAd: {
    enabled: process.env.REACT_APP_ENABLE_M365_AUTH === 'true',
    clientId: process.env.REACT_APP_M365_CLIENT_ID || '',
    tenantId: process.env.REACT_APP_M365_TENANT_ID || '',
    scopes: ['User.Read', 'Chat.ReadWrite'], // Microsoft Graph scopes
  },
  
  // Bot configuration
  bot: {
    name: 'NAACUS Support Assistant',
    locale: 'en-US',
    timezone: 'America/New_York',
    reconnectTimeout: 10000, // 10 seconds
    maxRetries: 3,
  },
  
  // Feature flags
  features: {
    enableTypingIndicator: true,
    enableSuggestedActions: true,
    enableAdaptiveCards: true,
    enableFileUpload: false,
    enableVoice: false,
  },
  
  // Conversation settings
  conversation: {
    userId: null, // Will be set dynamically per user
    userName: null, // From M365 if authenticated
    conversationId: null, // Generated for each session
    watermark: null, // For message synchronization
  },
};

/**
 * Validates the configuration
 * @returns {object} Validation result with isValid flag and errors array
 */
export function validateConfig() {
  const errors = [];
  
  if (!copilotStudioConfig.directLineSecret) {
    errors.push('Direct Line secret is not configured. Set REACT_APP_COPILOT_DIRECT_LINE_SECRET in .env');
  }
  
  if (copilotStudioConfig.azureAd.enabled) {
    if (!copilotStudioConfig.azureAd.clientId) {
      errors.push('M365 Client ID is missing. Set REACT_APP_M365_CLIENT_ID in .env');
    }
    if (!copilotStudioConfig.azureAd.tenantId) {
      errors.push('M365 Tenant ID is missing. Set REACT_APP_M365_TENANT_ID in .env');
    }
  }
  
  return {
    isValid: errors.length === 0,
    errors,
  };
}

export default copilotStudioConfig;
