# Microsoft 365 Integration Setup Guide

This guide will help you set up Microsoft 365 integration to store membership and volunteer form submissions in SharePoint Lists.

## Prerequisites

- Microsoft 365 account with SharePoint access
- Azure Active Directory admin access (to create app registration)
- Node.js and npm installed

## Step 1: Create Azure AD App Registration

1. Go to [Azure Portal](https://portal.azure.com)
2. Navigate to **Azure Active Directory** > **App registrations**
3. Click **New registration**
4. Configure the application:
   - **Name**: NAACUS Website
   - **Supported account types**: Accounts in this organizational directory only
   - **Redirect URI**: 
     - Platform: Single-page application (SPA)
     - URI: `http://localhost:3000` (for development)
     - Add production URL when deploying (e.g., `https://naacus.org`)
5. Click **Register**
6. Note down:
   - **Application (client) ID** - You'll need this for `REACT_APP_AZURE_CLIENT_ID`
   - **Directory (tenant) ID** - You'll need this for `REACT_APP_AZURE_TENANT_ID`

## Step 2: Configure API Permissions

1. In your app registration, go to **API permissions**
2. Click **Add a permission**
3. Select **Microsoft Graph**
4. Choose **Delegated permissions**
5. Add the following permissions:
   - `User.Read`
   - `Sites.ReadWrite.All`
   - `Files.ReadWrite.All` (optional, for OneDrive Excel)
6. Click **Add permissions**
7. Click **Grant admin consent** (requires admin role)

## Step 3: Create SharePoint Lists

### Membership List

1. Go to your SharePoint site (e.g., `https://yourdomain.sharepoint.com/sites/naacus`)
2. Click **New** > **List**
3. Name it "Membership Applications"
4. Add the following columns:

| Column Name | Type | Required |
|------------|------|----------|
| Title | Single line of text | Yes (default) |
| FirstName | Single line of text | Yes |
| LastName | Single line of text | Yes |
| Email | Single line of text | Yes |
| Phone | Single line of text | Yes |
| DateOfBirth | Date | No |
| Street | Single line of text | No |
| City | Single line of text | No |
| State | Single line of text | No |
| ZipCode | Single line of text | No |
| Country | Single line of text | No |
| ParishName | Single line of text | Yes |
| Diocese | Single line of text | No |
| ParishCity | Single line of text | No |
| ParishState | Single line of text | No |
| CountryOfOrigin | Single line of text | No |
| YearsInUS | Single line of text | No |
| Occupation | Single line of text | No |
| Skills | Multiple lines of text | No |
| MembershipType | Choice (Individual, Family, Student, Senior) | Yes |
| MinistryInterests | Multiple lines of text | No |
| EmergencyContactName | Single line of text | No |
| EmergencyRelationship | Single line of text | No |
| EmergencyPhone | Single line of text | No |
| CommunicationPreferences | Multiple lines of text | No |
| HearAboutUs | Single line of text | No |
| WhyJoin | Multiple lines of text | No |
| SubmissionDate | Date and Time | No |

5. Get the List ID:
   - Go to **List settings**
   - Look at the URL: `...List=%7B{LIST-ID}%7D...`
   - Copy the GUID (the part between %7B and %7D)
   - This is your `REACT_APP_MEMBERSHIP_LIST_ID`

### Volunteer List

1. Create another list named "Volunteer Applications"
2. Add the following columns:

| Column Name | Type | Required |
|------------|------|----------|
| Title | Single line of text | Yes (default) |
| FirstName | Single line of text | Yes |
| LastName | Single line of text | Yes |
| Email | Single line of text | Yes |
| Phone | Single line of text | Yes |
| City | Single line of text | Yes |
| State | Single line of text | Yes |
| ZipCode | Single line of text | No |
| LanguagesSpoken | Single line of text | No |
| Skills | Multiple lines of text | No |
| VolunteerInterests | Multiple lines of text | No |
| Availability | Multiple lines of text | No |
| TimePreference | Choice (Morning, Afternoon, Evening, Flexible) | No |
| HoursPerMonth | Choice (1-5, 6-10, 11-20, 20+) | Yes |
| PreviousExperience | Multiple lines of text | No |
| PreferredRole | Multiple lines of text | No |
| SpecialSkills | Multiple lines of text | No |
| BackgroundCheckConsent | Yes/No | No |
| EmergencyContactName | Single line of text | No |
| EmergencyPhone | Single line of text | No |
| WhyVolunteer | Multiple lines of text | Yes |
| SubmissionDate | Date and Time | No |

3. Get the List ID using the same method as above
   - This is your `REACT_APP_VOLUNTEER_LIST_ID`

## Step 4: Configure Environment Variables

1. Navigate to `naacus-website` folder
2. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

3. Edit `.env.local` and fill in your values:
   ```env
   REACT_APP_AZURE_CLIENT_ID=your-client-id-from-step-1
   REACT_APP_AZURE_TENANT_ID=your-tenant-id-from-step-1
   REACT_APP_REDIRECT_URI=http://localhost:3000
   REACT_APP_SHAREPOINT_SITE_URL=yourdomain.sharepoint.com:/sites/naacus
   REACT_APP_MEMBERSHIP_LIST_ID=membership-list-guid
   REACT_APP_VOLUNTEER_LIST_ID=volunteer-list-guid
   ```

## Step 5: Install Dependencies

```bash
cd naacus-website
npm install
```

This will install:
- `@azure/msal-browser` - Microsoft Authentication Library
- `@microsoft/microsoft-graph-client` - Microsoft Graph API client

## Step 6: Test the Integration

1. Start the development server:
   ```bash
   npm start
   ```

2. Navigate to the Membership or Volunteer page
3. Fill out the form
4. Submit - you'll be prompted to sign in with your Microsoft 365 account
5. After signing in, the form data will be saved to SharePoint
6. Check your SharePoint lists to verify the data was saved

## Production Deployment

When deploying to production:

1. Update Azure AD App Registration:
   - Add production URL to redirect URIs (e.g., `https://naacus.org`)

2. Update environment variables:
   ```env
   REACT_APP_REDIRECT_URI=https://naacus.org
   ```

3. Build the application:
   ```bash
   npm run build
   ```

## Troubleshooting

### "Consent Required" Error
- Make sure admin consent was granted for the API permissions
- User must have permission to write to SharePoint lists

### "Site Not Found" Error
- Verify `REACT_APP_SHAREPOINT_SITE_URL` format is correct
- Format: `yourdomain.sharepoint.com:/sites/sitename`
- Don't include `https://`

### "List Not Found" Error
- Verify list IDs are correct GUIDs
- Make sure the lists exist in the specified SharePoint site
- User must have edit permissions on the lists

### CORS Errors
- These shouldn't occur with Microsoft Graph API
- If they do, ensure your app is properly registered in Azure AD

## Alternative: Using OneDrive Excel

If you prefer to use Excel files instead of SharePoint Lists:

1. Create Excel files in OneDrive with appropriate columns
2. Get the file IDs from OneDrive
3. Update `.env.local` with file IDs
4. Modify the service to use `submitToExcel()` instead of SharePoint functions

## Security Best Practices

1. **Never commit `.env.local`** - it's already in `.gitignore`
2. **Use separate Azure AD apps** for development and production
3. **Limit API permissions** to only what's needed
4. **Regular security audits** of Azure AD app permissions
5. **Monitor SharePoint access logs** for unusual activity

## Support

For issues with:
- Azure AD setup: Contact your Microsoft 365 administrator
- SharePoint lists: Check SharePoint documentation
- Code issues: Check browser console for errors

## Next Steps

- Set up automated email notifications when forms are submitted
- Create Power Automate flows to process submissions
- Add data validation in SharePoint lists
- Create dashboards in Power BI to visualize submissions
