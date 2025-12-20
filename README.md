# NACCUS - National Association of Colleges and Christian Unions

Welcome to the official repository for NACCUS (National Association of Colleges and Christian Unions).

## 🎯 About NACCUS

The National Association of Colleges and Christian Unions empowers Christian student organizations across college campuses nationwide through resources, networking, and spiritual development opportunities.

## 🌐 Website

This repository contains the source code for the official NACCUS website, a professional React-based application designed for the NACCUS 2027 conference in Maryland.

### Key Features

- **Modern React Application** - Built with the latest React technologies
- **Professional Design** - Clean, responsive UI with Microsoft-inspired styling
- **Microsoft 365 Integration Ready** - Pre-configured for Azure AD authentication
- **Conference Information** - Dedicated section for NACCUS 2027 in Maryland
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
│   │   │   ├── About.js     # About NACCUS
│   │   │   ├── Conference.js # NACCUS 2027 info
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

## 📅 NACCUS 2027 Conference

### Join Us in Maryland - Summer 2027

The website features comprehensive information about the upcoming NACCUS 2027 conference, including:

- Conference details and location
- Registration information
- Workshop and event schedules
- Networking opportunities
- Resources for campus ministry leaders

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

This is the official NACCUS website. For contributions or suggestions, please contact the NACCUS team.

## 📝 License

Copyright © 2024 NACCUS. All rights reserved.

---

**Built with ❤️ for the NACCUS community**

Empowering Christian communities on college campuses nationwide.
