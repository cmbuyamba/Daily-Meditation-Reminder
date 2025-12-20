# NAACUS - National Association of African Catholics in the United States

Welcome to the official repository for NAACUS (National Association of African Catholics in the United States).

## 🎯 About NAACUS

The National Association of African Catholics in the United States unites African Catholic communities across the nation to promote faith and heritage, strengthen families, and cultivate leaders—ensuring full participation in the life of the Church in the U.S. while supporting the Church in Africa.

## 🌐 Website

This repository contains the source code for the official NAACUS website, a professional React-based application designed to serve and connect the African Catholic community.

### Key Features

- **Modern React Application** - Built with the latest React technologies
- **Professional Design** - Clean, responsive UI with Microsoft-inspired styling
- **Microsoft 365 Integration Ready** - Pre-configured for Azure AD authentication
- **Community Information** - Comprehensive sections about our mission, programs, and activities
- **Conference Information** - Details about our biannual national conferences
- **Contact & Outreach** - Interactive forms for community engagement

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
│   │   │   ├── WhatWeDo.js  # What we do section
│   │   │   ├── WhoWeServe.js # Who we serve section
│   │   │   ├── Programs.js  # Programs & activities
│   │   │   ├── Conference.js # National conference info
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

### What We Do

- **Pastoral Care & Parish Connection** - Supporting African Catholic communities and strengthening their connection with parishes, dioceses, and national Catholic organizations
- **Heritage & Culture Awareness** - Raising awareness of the presence, heritage, and cultures of African Catholics in the U.S.
- **Family Life & Vocations** - Building up family life and vocations, nurturing leadership among laity, youth, and young adults
- **Evangelization & Catechesis** - Promoting evangelization, catechesis, and service
- **Collaboration & Advocacy** - Collaborating with diocesan offices, national Catholic partners, and advocating for social justice

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
- **Website**: Coming soon

## 🤝 Contributing

This is the official NAACUS website. For contributions or suggestions, please contact the NAACUS team.

## 📝 License

Copyright © 2024 NAACUS. All rights reserved.

---

**Built with ❤️ for the NAACUS community**

Together with Christ - Uniting African Catholic communities across the United States.
