# NAACUS Website - Deployment Guide

## Overview
This guide provides step-by-step instructions for deploying the NAACUS website to various hosting platforms and configuring Microsoft 365 integration.

**Note**: For detailed Microsoft Copilot Studio chatbot setup, see [COPILOT_STUDIO_SETUP.md](COPILOT_STUDIO_SETUP.md)

## Prerequisites
- Node.js 16 or higher
- Azure account (for Microsoft 365 integration)
- Microsoft Copilot Studio access (for AI chatbot)
- Hosting platform account (Azure, Netlify, or Vercel)
- Domain name (optional but recommended)

## Local Development Setup

Before deploying, ensure the application works locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/cmbuyamba/Daily-Meditation-Reminder.git
   cd Daily-Meditation-Reminder/naacus-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create environment file:
   ```bash
   cp .env.example .env.local
   ```

4. Edit `.env.local` with your credentials (see `.env.example` for all available options)

5. Start development server:
   ```bash
   npm start
   ```

6. Open http://localhost:3000 in your browser

7. Test all features before deploying

## Option 1: Azure Static Web Apps (Recommended)

Azure Static Web Apps is recommended because it provides seamless integration with Azure AD and Microsoft 365 services.

### Step 1: Create Azure Static Web App

1. Sign in to [Azure Portal](https://portal.azure.com)
2. Click "Create a resource"
3. Search for "Static Web Apps"
4. Click "Create"
5. Configure:
   - **Resource Group**: Create new or select existing
   - **Name**: `naacus-website`
   - **Region**: Choose closest to Maryland
   - **Source**: GitHub
   - **Repository**: Select your repository
   - **Branch**: main
   - **Build Presets**: React
   - **App location**: `/naacus-website`
   - **Output location**: `build`

6. Click "Review + create" then "Create"

### Step 2: Configure Custom Domain (Optional)

1. In Azure Static Web Apps, go to "Custom domains"
2. Click "Add"
3. Enter your domain name
4. Follow DNS configuration instructions
5. Wait for SSL certificate provisioning

### Step 3: Environment Variables

1. In Azure Static Web Apps, go to "Configuration"
2. Add application settings:
   ```
   # Azure AD Configuration
   REACT_APP_AZURE_CLIENT_ID=<your-azure-ad-client-id>
   REACT_APP_AZURE_TENANT_ID=<your-azure-ad-tenant-id>
   REACT_APP_REDIRECT_URI=<your-deployment-url>
   
   # Microsoft Copilot Studio (for AI Chatbot)
   REACT_APP_COPILOT_DIRECT_LINE_SECRET=<your-direct-line-secret>
   REACT_APP_COPILOT_BOT_ID=<your-bot-id>
   REACT_APP_ENABLE_M365_AUTH=false
   REACT_APP_M365_CLIENT_ID=<your-client-id>
   REACT_APP_M365_TENANT_ID=<your-tenant-id>
   
   # SharePoint Configuration (Optional)
   REACT_APP_SHAREPOINT_SITE_URL=<sharepoint-site-url>
   REACT_APP_MEMBERSHIP_LIST_ID=<membership-list-id>
   REACT_APP_VOLUNTEER_LIST_ID=<volunteer-list-id>
   REACT_APP_CHAT_LOG_LIST_ID=<chat-log-list-id>
   
   # Optional Advanced Features
   REACT_APP_GRAPH_API_ENDPOINT=https://graph.microsoft.com/v1.0
   REACT_APP_APPINSIGHTS_CONNECTION_STRING=<app-insights-connection>
   REACT_APP_POWERAUTOMATE_FLOW_URL=<power-automate-flow-url>
   ```

**Important**: See `.env.example` in the `naacus-website` folder for complete list of environment variables.

## Option 2: Netlify

### Quick Deploy

1. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```

2. Build the project:
   ```bash
   cd naacus-website
   npm run build
   ```

3. Deploy:
   ```bash
   netlify deploy --prod --dir=build
   ```

### GitHub Integration

1. Sign in to [Netlify](https://netlify.com)
2. Click "New site from Git"
3. Connect to GitHub and select repository
4. Configure build settings:
   - **Base directory**: `naacus-website`
   - **Build command**: `npm run build`
   - **Publish directory**: `naacus-website/build`

5. Add environment variables in Site settings > Build & deploy > Environment:
   ```
   # Azure AD Configuration
   REACT_APP_AZURE_CLIENT_ID=<your-azure-ad-client-id>
   REACT_APP_AZURE_TENANT_ID=<your-azure-ad-tenant-id>
   REACT_APP_REDIRECT_URI=<your-netlify-url>
   
   # Copilot Studio (for AI Chatbot) - See COPILOT_STUDIO_SETUP.md
   REACT_APP_COPILOT_DIRECT_LINE_SECRET=<your-direct-line-secret>
   REACT_APP_ENABLE_M365_AUTH=false
   ```
   
   **Note**: For complete list, refer to `.env.example` file.

## Option 3: Vercel

### Quick Deploy

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   cd naacus-website
   vercel
   ```

### GitHub Integration

1. Sign in to [Vercel](https://vercel.com)
2. Click "Import Project"
3. Import from GitHub
4. Configure:
   - **Framework Preset**: Create React App
   - **Root Directory**: `naacus-website`
   - **Build Command**: `npm run build`
   - **Output Directory**: `build`

5. Add environment variables in Project Settings:
   ```
   # Azure AD Configuration
   REACT_APP_AZURE_CLIENT_ID=<your-azure-ad-client-id>
   REACT_APP_AZURE_TENANT_ID=<your-azure-ad-tenant-id>
   REACT_APP_REDIRECT_URI=<your-vercel-url>
   
   # Copilot Studio (for AI Chatbot) - See COPILOT_STUDIO_SETUP.md
   REACT_APP_COPILOT_DIRECT_LINE_SECRET=<your-direct-line-secret>
   REACT_APP_ENABLE_M365_AUTH=false
   ```
   
   **Note**: For complete list, refer to `.env.example` file.

## Microsoft Copilot Studio Setup (AI Chatbot)

For detailed step-by-step instructions on setting up the AI chatbot with Microsoft Copilot Studio, please refer to:

📖 **[COPILOT_STUDIO_SETUP.md](COPILOT_STUDIO_SETUP.md)**

This comprehensive guide covers:
- Creating a Copilot Studio bot
- Enabling Direct Line channel
- Configuring environment variables
- Testing the integration
- Troubleshooting common issues

**Quick Summary**:
1. Create bot at https://copilotstudio.microsoft.com
2. Enable Direct Line channel and get secret key
3. Set `REACT_APP_COPILOT_DIRECT_LINE_SECRET` environment variable
4. (Optional) Configure Azure AD for M365 authentication

The chatbot will automatically fall back to local FAQ if Copilot Studio is not configured.

## Microsoft 365 Integration Setup

### Step 1: Register Application in Azure AD

1. Go to [Azure Portal](https://portal.azure.com)
2. Navigate to **Azure Active Directory** > **App registrations**
3. Click **New registration**
4. Configure:
   - **Name**: NAACUS Website
   - **Supported account types**: 
     - Multi-tenant (Accounts in any organizational directory)
   - **Redirect URI**: 
     - Type: Single-page application (SPA)
     - URI: `https://your-domain.com` (add all deployment URLs)

5. Click **Register**

### Step 2: Note Application IDs

After registration, note:
- **Application (client) ID**: Copy this value
- **Directory (tenant) ID**: Copy this value

### Step 3: Configure API Permissions

1. In your app registration, go to **API permissions**
2. Click **Add a permission**
3. Select **Microsoft Graph**
4. Select **Delegated permissions**
5. Add these permissions:
   - `User.Read` - Sign in and read user profile
   - `Mail.Send` - Send mail as user
   - (Optional) `Calendars.ReadWrite` - For calendar features
   - (Optional) `Files.ReadWrite` - For file sharing

6. Click **Add permissions**
7. Click **Grant admin consent** (if you have admin rights)

### Step 4: Configure Authentication

1. In **Authentication** section:
2. Under **Implicit grant and hybrid flows**, enable:
   - ✓ Access tokens
   - ✓ ID tokens
3. Under **Advanced settings**:
   - Allow public client flows: No
4. Save changes

### Step 5: Add Redirect URIs

Add all your deployment URLs:
- `http://localhost:3000` (for development)
- `https://your-azure-static-web-app.azurestaticapps.net`
- `https://your-custom-domain.com`
- Any other deployment URLs

### Step 6: Update Application Code

1. The `naacus-website/src/config/authConfig.js` file automatically reads from environment variables:
   ```javascript
   export const msalConfig = {
     auth: {
       clientId: process.env.REACT_APP_AZURE_CLIENT_ID,
       authority: `https://login.microsoftonline.com/${process.env.REACT_APP_AZURE_TENANT_ID}`,
       redirectUri: process.env.REACT_APP_REDIRECT_URI || window.location.origin,
     },
     cache: {
       cacheLocation: "sessionStorage",
       storeAuthStateInCookie: false,
     },
   };
   ```

2. Set environment variables in your deployment platform (see Step 3 above)
3. Create a `.env.local` file for local development (copy from `.env.example`)

### Step 7: Implement Authentication UI (Optional)

To add sign-in functionality, wrap your app with MsalProvider in `src/index.js`:

```javascript
import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import { msalConfig } from "./config/authConfig";

const msalInstance = new PublicClientApplication(msalConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MsalProvider instance={msalInstance}>
      <App />
    </MsalProvider>
  </React.StrictMode>
);
```

## Testing the Deployment

### Pre-deployment Checklist

- [ ] Local development tested and working
- [ ] Build completes without errors (`npm run build`)
- [ ] All required environment variables configured
- [ ] `.env.local` created from `.env.example` (for local testing)
- [ ] Azure AD app registration complete
- [ ] Redirect URIs added for all deployment URLs
- [ ] API permissions configured and consented
- [ ] (Optional) Copilot Studio bot created and Direct Line enabled
- [ ] (Optional) SharePoint lists created for data storage
- [ ] All translations working (English/French)
- [ ] ChatWidget tested (both Copilot Studio and fallback modes)
- [ ] No sensitive data (secrets, keys) in source code
- [ ] Git repository clean and pushed to correct branch

### Testing Steps

1. Visit deployed URL
2. Verify all sections load correctly:
   - Header and navigation (with language switcher)
   - Hero section with membership highlight
   - About section
   - What We Do section
   - Who We Serve section
   - Leadership section
   - Programs & Ministries
   - Member Benefits
   - Gallery
   - Conference 2027 teaser
   - Testimonials
   - Newsletter signup
   - Contact form
   - Footer
   - ChatWidget (AI assistant)
   - Back to Top button

3. Test responsive design:
   - Desktop view (1920px, 1440px)
   - Tablet view (768px, 1024px)
   - Mobile view (375px, 414px)

4. Test navigation:
   - Click all navigation links
   - Verify active state highlighting
   - Test smooth scrolling to sections
   - Test mobile hamburger menu
   - Test language switcher (English/French)

5. Test chatbot:
   - Click chat widget in bottom-right corner
   - Send test message: \"Hello\"
   - Verify response (either from Copilot Studio or local FAQ)
   - Test quick action buttons
   - Test related questions links
   - Verify chat widget stays on top of Back to Top button

6. Test contact form:
   - Fill out all fields
   - Submit and verify success message
   - Test form validation

## Maintenance

### Updating Content

1. Edit component files in `src/components/`
2. Commit and push changes
3. Automatic deployment will trigger (if using CI/CD)

### Monitoring

- **Azure Static Web Apps**: Use Azure Monitor
- **Netlify**: Check deployment logs in dashboard
- **Vercel**: Monitor in Vercel dashboard

### Security

- Regularly update dependencies:
  ```bash
  npm audit
  npm update
  ```
- Monitor Azure AD sign-in logs
- Review API permission usage
- Keep client ID and tenant ID secure (use environment variables)

## Troubleshooting

### Build Fails

- Check Node.js version (use v16+ or higher, v18 LTS recommended)
- Clear cache: `rm -rf node_modules package-lock.json && npm install`
- Check build logs for specific errors
- Verify all environment variables are set correctly

### Authentication Issues

- Verify client ID and tenant ID are correct
- Check redirect URIs match deployment URLs
- Ensure API permissions are granted
- Clear browser cache and cookies

### Contact Form Not Working

- Verify Microsoft 365 integration is configured
- Check browser console for errors
- Ensure user is authenticated (if required)

### Chatbot Not Responding

- Check browser console for messages:
  - "✅ Microsoft Copilot Studio connected successfully" - Copilot Studio working
  - "⚠️ Copilot Studio unavailable, using local FAQ fallback" - Using local FAQ
- Verify `REACT_APP_COPILOT_DIRECT_LINE_SECRET` is set correctly
- Ensure Copilot Studio bot is published (not in draft mode)
- Test with simple messages like "Hello" first
- Check Network tab for failed API calls to Direct Line endpoint
- See [COPILOT_STUDIO_SETUP.md](COPILOT_STUDIO_SETUP.md) for detailed troubleshooting

## Support

For deployment assistance:
- Email: info@naacus.org
- Azure Support: [Azure Portal](https://portal.azure.com)
- Community forums for hosting platforms

## Next Steps

After successful deployment:
1. Configure custom domain
2. Set up email forwarding for info@naacus.org
3. Configure analytics (Google Analytics, Azure Application Insights)
4. Set up monitoring and alerts
5. Create backup strategy
6. Plan content updates for NAACUS 2027

---

Last Updated: December 21, 2025
