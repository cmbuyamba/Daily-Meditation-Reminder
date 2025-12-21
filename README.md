# NAACUS - National Association of African Catholics in the United States

Welcome to the official repository for NAACUS (National Association of African Catholics in the United States).

## 🎯 About NAACUS

The National Association of African Catholics in the United States unites African Catholic communities across the nation to promote faith and heritage, strengthen families, and cultivate leaders—ensuring full participation in the life of the Church in the U.S. while supporting the Church in Africa.

## 🌐 Website

This repository contains the source code for the official NAACUS website, a professional React-based application designed to serve and connect the African Catholic community. The website structure closely mirrors the official NAACUS.org website.

### Key Features

- **Modern React Application** - Built with the latest React technologies
- **Professional Design** - Clean, responsive UI with Microsoft-inspired styling
- **Microsoft 365 Integration Ready** - Pre-configured for Azure AD authentication
- **Multi-language Support** - Full internationalization (i18n) with English and French translations
- **Complete NAACUS.org Structure** - All sections from the official website included
- **Gallery & Media** - Photos and videos from events and activities
- **Resources Hub** - Brochures, newsletters, and membership forms
- **Newsletter Subscription** - Stay connected with email updates
- **Community Engagement** - Interactive forms and contact options

## 🚀 Quick Start

### Install Dependencies

```bash
npm run install-deps
```

### Run Development Server

```bash
npm start
```

The website will open at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

## 📁 Project Structure

```
.
├── naacus-website/          # Main React application
│   ├── src/
│   │   ├── components/      # React components
│   │   │   ├── Header.js    # Navigation header
│   │   │   ├── Hero.js      # Landing section
│   │   │   ├── About.js     # About NAACUS
│   │   │   ├── Objectives.js # 8 detailed objectives
│   │   │   ├── WhatWeDo.js  # What we do section
│   │   │   ├── WhoWeServe.js # Who we serve section
│   │   │   ├── Programs.js  # Programs & activities
│   │   │   ├── Gallery.js   # Photo & video gallery
│   │   │   ├── Conference.js # National conference info
│   │   │   ├── Resources.js # Resources & partner links
│   │   │   ├── Newsletter.js # Newsletter subscription
│   │   │   ├── Contact.js   # Contact form
│   │   │   └── Footer.js    # Site footer
│   │   ├── config/          # Configuration files
│   │   │   └── authConfig.js # Microsoft 365 auth config
│   │   ├── App.js           # Main application
│   │   └── index.js         # Entry point
│   ├── public/              # Static assets
│   └── package.json         # Dependencies
├── DEPLOYMENT.md            # Deployment guide
└── README.md                # This file
```

## 🔧 Microsoft 365 Integration

The website is pre-configured for Microsoft 365 integration, enabling:

- User authentication via Azure AD
- Email integration for contact forms
- Calendar integration for event management
- OneDrive integration for resource sharing

See [DEPLOYMENT.md](DEPLOYMENT.md) for complete setup instructions.

## 🎯 Our Mission

NAACUS exists to gather African Catholic communities in the U.S., promote their faith, and ensure their full and active participation in the life of the Church. Our vision is a vibrant and visible African Catholic community that contributes its gifts to the Church and society.

### Website Sections

1. **Home** - Welcome message and "Together with Christ" motto
2. **About** - Mission, Vision, and Motto
3. **Objectives** - 8 detailed organizational objectives
4. **What We Do** - 5 core activities (pastoral care, heritage awareness, family life, evangelization, collaboration)
5. **Who We Serve** - 8 community segments (immigrants, migrants, refugees, students, professionals, families, elders, diaspora)
6. **Programs & Activities** - Events, workshops, conferences, and Get Involved
7. **Gallery & Videos** - Photos and videos from events and celebrations
8. **Conference** - Biannual national conference information
9. **Resources** - Brochures, newsletters, membership forms, and partner organizations
10. **Newsletter** - Email subscription for updates
11. **Contact** - Community connection and contact form

## 🎨 Customization

### Update Content

All content can be easily updated by editing the respective component files in `naacus-website/src/components/`.

### Modify Styling

- Global styles: `naacus-website/src/App.css`
- Component styles: Individual CSS files in `naacus-website/src/components/`

### Color Scheme

The website uses Microsoft-inspired colors:
- Primary: `#0078d4` (Microsoft Blue)
- Secondary: `#0053a0` (Dark Blue)  
- Accent: `#90e0ef` (Light Blue)

### Localization (i18n)

The website supports multiple languages using react-i18next:

- **Supported Languages**: English (en), French (fr)
- **Translation Files**: Located in `naacus-website/public/locales/{language}/translation.json`
- **Language Switcher**: Available in the header navigation
- **Adding New Languages**:
  1. Create a new folder in `naacus-website/public/locales/` (e.g., `es` for Spanish)
  2. Copy the English translation file and translate the content
  3. Add the language to the `supportedLngs` array in `naacus-website/src/i18n.js`
  4. Update the LanguageSwitcher component to include the new language option

The selected language is persisted in localStorage and automatically detected on subsequent visits.

## 📖 Documentation

- [Website README](naacus-website/README.md) - Detailed website documentation
- [Deployment Guide](DEPLOYMENT.md) - Deployment instructions for various platforms
- [Microsoft 365 Integration](naacus-website/src/config/authConfig.js) - Authentication configuration

## 🚀 Deployment

The website can be deployed to:

1. **Azure Static Web Apps** (Recommended for M365 integration)
2. **Netlify**
3. **Vercel**
4. **GitHub Pages**

See [DEPLOYMENT.md](DEPLOYMENT.md) for platform-specific instructions.

## 🔐 Security

- Azure AD authentication for secure access
- Environment variables for sensitive configuration
- Regular dependency updates
- Security best practices followed throughout

## 📞 Contact

- **Email**: info@naacus.org
- **Website**: https://naacus.org

## 🤝 Contributing

This is the official NAACUS website. For contributions or suggestions, please contact the NAACUS team.

## 📝 License

Copyright © 2024 NAACUS. All rights reserved.

---

**Built with ❤️ for the NAACUS community**

Together with Christ - Uniting African Catholic communities across the United States.
