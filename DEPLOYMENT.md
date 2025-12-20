# NAACUS Website - Deployment Guide

## Overview
This guide provides step-by-step instructions for deploying the NAACUS website to various hosting platforms and configuring Microsoft 365 integration.

## Prerequisites
- Azure account (for Microsoft 365 integration)
- Hosting platform account (Azure, Netlify, or Vercel)
- Domain name (optional but recommended)

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
   REACT_APP_CLIENT_ID=<your-azure-ad-client-id>
   REACT_APP_TENANT_ID=<your-azure-ad-tenant-id>
   ```

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
   REACT_APP_CLIENT_ID=<your-azure-ad-client-id>
   REACT_APP_TENANT_ID=<your-azure-ad-tenant-id>
   ```

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
   REACT_APP_CLIENT_ID=<your-azure-ad-client-id>
   REACT_APP_TENANT_ID=<your-azure-ad-tenant-id>
   ```

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

1. Update `src/config/authConfig.js`:
   ```javascript
   export const msalConfig = {
     auth: {
       clientId: "YOUR_CLIENT_ID_HERE", // Replace with actual client ID
       authority: "https://login.microsoftonline.com/common",
       redirectUri: window.location.origin,
     },
     cache: {
       cacheLocation: "sessionStorage",
       storeAuthStateInCookie: false,
     },
   };
   ```

2. Set environment variables in your deployment platform

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

- [ ] Build completes without errors
- [ ] All environment variables configured
- [ ] Azure AD app registration complete
- [ ] Redirect URIs added for all deployment URLs
- [ ] API permissions configured and consented

### Testing Steps

1. Visit deployed URL
2. Verify all sections load correctly:
   - Header and navigation
   - Hero section
   - About section
   - Conference section
   - Contact form
   - Footer

3. Test responsive design:
   - Desktop view
   - Tablet view
   - Mobile view

4. Test navigation:
   - Click all navigation links
   - Verify smooth scrolling
   - Test mobile menu

5. Test contact form:
   - Fill out form
   - Submit and verify alert

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

- Check Node.js version (use v14+)
- Clear cache: `rm -rf node_modules package-lock.json && npm install`
- Check build logs for specific errors

### Authentication Issues

- Verify client ID and tenant ID are correct
- Check redirect URIs match deployment URLs
- Ensure API permissions are granted
- Clear browser cache and cookies

### Contact Form Not Working

- Verify Microsoft 365 integration is configured
- Check browser console for errors
- Ensure user is authenticated (if required)

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

Last Updated: December 2024
