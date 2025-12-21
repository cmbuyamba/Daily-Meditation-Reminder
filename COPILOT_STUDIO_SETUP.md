# Microsoft Copilot Studio Integration Guide

## Overview

This guide explains how to integrate the NAACUS website chatbot with Microsoft Copilot Studio for intelligent, AI-powered conversations using Microsoft 365 services.

## Architecture

```
┌─────────────────┐
│   React App     │
│   (ChatWidget)  │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ chatbotService  │ ◄─── Decides: Copilot Studio or Local FAQ
└────────┬────────┘
         │
    ┌────┴────┐
    │         │
    ▼         ▼
┌─────────┐ ┌──────────────┐
│ Copilot │ │  Local FAQ   │
│ Studio  │ │  (Fallback)  │
└─────────┘ └──────────────┘
```

## Prerequisites

1. **Microsoft 365 Subscription** (E3/E5 or Business Premium)
2. **Copilot Studio License** (included with Power Apps/Power Automate licenses)
3. **Azure AD Application** (for authentication)
4. **Node.js 16+** and **npm/yarn**

## Step 1: Create a Copilot Studio Bot

### 1.1 Access Copilot Studio
1. Go to [https://copilotstudio.microsoft.com](https://copilotstudio.microsoft.com)
2. Sign in with your Microsoft 365 account
3. Select your environment (usually the default)

### 1.2 Create a New Bot
1. Click **"Create"** in the left sidebar
2. Choose **"New chatbot"**
3. Name your bot: **"NAACUS Support Assistant"**
4. Choose your language: **English (United States)**
5. Click **"Create"**

### 1.3 Configure Bot Responses
1. In the **Topics** section, create topics for common queries:
   - Membership Information
   - Event Registration
   - Contact Information
   - Volunteer Opportunities
   - Programs & Activities

2. Use **"Add a topic"** to create custom conversation flows
3. Add **trigger phrases** (e.g., "How do I join?", "Tell me about membership")
4. Design responses using the visual editor

### 1.4 Enable Direct Line Channel
1. Go to **Settings** (gear icon)
2. Click **Channels**
3. Find **Direct Line** and click **"Add"**
4. Click **"Show"** to reveal the secret key
5. **Copy the secret key** - you'll need this later
6. (Optional) Configure additional settings like endpoint URLs

## Step 2: Set Up Azure AD Authentication (Optional but Recommended)

### 2.1 Register an Application in Azure AD
1. Go to [Azure Portal](https://portal.azure.com)
2. Navigate to **Azure Active Directory** > **App registrations**
3. Click **"New registration"**
   - Name: `NAACUS Chat Bot`
   - Supported account types: **Accounts in this organizational directory only**
   - Redirect URI: `http://localhost:3000` (for development)
   - Click **Register**

### 2.2 Configure API Permissions
1. In your app registration, go to **API permissions**
2. Click **"Add a permission"** > **Microsoft Graph** > **Delegated permissions**
3. Add these permissions:
   - `User.Read` (sign in and read user profile)
   - `Chat.ReadWrite` (optional: for chat history)
   - `Files.ReadWrite` (optional: for file attachments)
4. Click **"Grant admin consent"** (requires admin role)

### 2.3 Get Credentials
1. Go to **Overview** and copy:
   - **Application (client) ID**
   - **Directory (tenant) ID**
2. These will be used in your environment variables

## Step 3: Configure the React Application

### 3.1 Set Environment Variables
1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Edit `.env.local` and add your credentials:
   ```env
   # Copilot Studio
   REACT_APP_COPILOT_DIRECT_LINE_SECRET=your_secret_key_from_step_1.4
   REACT_APP_COPILOT_BOT_ID=your_bot_id (optional)
   
   # Azure AD (if using authentication)
   REACT_APP_ENABLE_M365_AUTH=true
   REACT_APP_M365_CLIENT_ID=your_client_id_from_step_2.3
   REACT_APP_M365_TENANT_ID=your_tenant_id_from_step_2.3
   ```

3. **Important**: Never commit `.env.local` to version control!

### 3.2 Update ChatWidget Component
The `ChatWidget` component will automatically use Copilot Studio when configured. Update the initialization:

```javascript
// In ChatWidget.js
import { initializeCopilotStudio } from '../services/chatbotService';

useEffect(() => {
  // Initialize Copilot Studio when component mounts
  initializeCopilotStudio();
}, []);
```

### 3.3 Install Dependencies (if needed)
```bash
cd naacus-website
npm install
```

## Step 4: Test the Integration

### 4.1 Start Development Server
```bash
npm start
```

### 4.2 Test Chatbot Functionality
1. Open the website at `http://localhost:3000`
2. Click the chat widget in the bottom-right corner
3. Send a test message: "Hello"
4. Verify you receive a response from Copilot Studio

### 4.3 Check Console for Debugging
Open browser DevTools (F12) and check the Console:
- ✅ `Microsoft Copilot Studio connected successfully` - Integration working
- ⚠️ `Copilot Studio unavailable, using local FAQ fallback` - Check your credentials

## Step 5: Advanced Configuration

### 5.1 Enable Adaptive Cards
Copilot Studio supports rich adaptive cards. To enable:

1. In `copilotStudioConfig.js`, ensure:
   ```javascript
   features: {
     enableAdaptiveCards: true,
   }
   ```

2. In Copilot Studio, use adaptive cards in your responses

### 5.2 Add Custom Context
Pass user context to improve responses:

```javascript
const context = {
  userName: user.displayName,
  userEmail: user.email,
  channelData: {
    timezone: 'America/New_York',
    language: 'en-US',
  },
};

await processMessage(userMessage, context);
```

### 5.3 Store Chat Logs in SharePoint
1. Create a SharePoint list named "Chat Logs"
2. Add columns: UserMessage, BotResponse, Timestamp, UserId
3. Get the List ID from SharePoint settings
4. Add to `.env.local`:
   ```env
   REACT_APP_CHAT_LOG_LIST_ID=your_list_id
   ```

## Step 6: Deploy to Production

### 6.1 Update Redirect URIs
1. In Azure AD App Registration, add production URLs:
   - `https://yourdomain.com`
   - `https://www.yourdomain.com`

### 6.2 Set Production Environment Variables
Add these to your hosting platform (Vercel, Azure Static Web Apps, etc.):
```env
REACT_APP_COPILOT_DIRECT_LINE_SECRET=prod_secret
REACT_APP_M365_CLIENT_ID=prod_client_id
REACT_APP_M365_TENANT_ID=prod_tenant_id
```

### 6.3 Build and Deploy
```bash
npm run build
# Deploy 'build' folder to your hosting platform
```

## Troubleshooting

### Issue: "Copilot Studio unavailable"
**Solution**: 
- Verify Direct Line secret is correct
- Check network connectivity
- Ensure Copilot Studio bot is published

### Issue: "401 Unauthorized"
**Solution**:
- Regenerate Direct Line secret in Copilot Studio
- Update `.env.local` with new secret
- Restart development server

### Issue: "No response from bot"
**Solution**:
- Check Copilot Studio bot is published (not in draft)
- Verify trigger phrases match user input
- Review bot analytics in Copilot Studio

### Issue: "CORS errors in browser"
**Solution**:
- Direct Line API should handle CORS automatically
- If issues persist, check browser console for specific error
- May need to configure allowed origins in Copilot Studio settings

## Fallback Behavior

The chatbot automatically falls back to local FAQ matching if:
- Copilot Studio is not configured
- Direct Line secret is invalid
- Network connection fails
- Copilot Studio returns no response

This ensures users always get assistance, even if the cloud service is unavailable.

## Best Practices

1. **Security**
   - Never expose Direct Line secrets in client code
   - Use token refresh for production (implement token endpoint)
   - Validate all user inputs

2. **Performance**
   - Cache frequently asked questions
   - Implement connection pooling for high traffic
   - Use WebSocket streaming for real-time updates

3. **User Experience**
   - Show typing indicators while waiting for responses
   - Provide quick action buttons for common queries
   - Handle errors gracefully with friendly messages

4. **Monitoring**
   - Enable Azure Application Insights
   - Track conversation metrics in Copilot Studio analytics
   - Log errors to help improve bot responses

## Resources

- [Microsoft Copilot Studio Documentation](https://learn.microsoft.com/en-us/microsoft-copilot-studio/)
- [Direct Line API Reference](https://docs.microsoft.com/en-us/azure/bot-service/rest-api/bot-framework-rest-direct-line-3-0)
- [Azure AD App Registration Guide](https://learn.microsoft.com/en-us/azure/active-directory/develop/quickstart-register-app)
- [Microsoft Graph API](https://learn.microsoft.com/en-us/graph/overview)

## Support

For issues or questions:
- Check the [NAACUS GitHub repository](https://github.com/cmbuyamba/Daily-Meditation-Reminder)
- Contact the development team
- Review Copilot Studio community forums
