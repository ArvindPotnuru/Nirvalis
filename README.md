# Nirvalis

A beautiful website showcasing an innovative idea.

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

The app will open in your browser at `http://localhost:3000`

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Project Structure

```
nirvalis/
├── api/
│   └── waitlist-count.js    # Vercel serverless: waitlist count
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Hero.js
│   │   ├── VideoSection.js
│   │   ├── Section.js
│   │   ├── PartnersSection.js
│   │   ├── FeaturesSection.js
│   │   ├── BenefitsList.js
│   │   ├── WaitlistSection.js
│   │   ├── Footer.js
│   │   └── index.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## Customization

This is a clean foundation ready for your design. You can:
- Update `src/App.js` to add your content and components
- Modify `src/App.css` to match your design
- Add new components in a `components/` folder
- Add images and assets in `public/` folder

## Deployment

This project can be deployed to various platforms:
- **Vercel** (recommended for React apps)
- **Netlify**
- **GitHub Pages**
- **AWS Amplify**

See the deployment guide below for domain and hosting options.

