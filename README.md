# BuildRight Construction Website

A modern, responsive construction company website built with React, Vite, and Tailwind CSS.

## Project Structure

```
projectssss/
├── public/                 # Static assets
├── src/
│   ├── assets/
│   │   ├── images/        # Image files
│   │   └── icons/         # Icon files
│   ├── components/        # Reusable React components
│   │   ├── Navbar.jsx    # Navigation bar component
│   │   └── Footer.jsx    # Footer component
│   ├── pages/            # Page components
│   │   ├── Home.jsx      # Home page
│   │   ├── Services.jsx  # Services page
│   │   ├── Projects.jsx  # Projects portfolio page
│   │   ├── About.jsx     # About us page
│   │   └── Contact.jsx   # Contact page
│   ├── styles/           # CSS files
│   │   └── index.css     # Global styles with Tailwind
│   ├── App.jsx           # Main app component with routing
│   └── main.jsx          # Entry point
├── index.html            # HTML entry file
├── package.json          # Dependencies and scripts
├── vite.config.js        # Vite configuration
├── tailwind.config.js    # Tailwind CSS configuration
└── postcss.config.js     # PostCSS configuration
```

## Features

- **Responsive Design**: Mobile-first approach using Tailwind CSS
- **Modern UI**: Clean, professional design with orange accent color
- **Navigation**: Responsive navbar with mobile menu
- **Pages**:
  - Home: Hero section, services overview, statistics, CTA
  - Services: Detailed service offerings
  - Projects: Portfolio showcase
  - About: Company story and core values
  - Contact: Contact form and information
- **Icons**: Lucide React icons
- **Routing**: React Router for page navigation

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## Technologies Used

- **React 18**: UI library
- **Vite**: Build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **React Router**: Client-side routing
- **Lucide React**: Icon library

## Customization

- **Colors**: Modify Tailwind config to change the orange accent color
- **Content**: Update page components with your actual content
- **Images**: Replace placeholder images with real project images in `src/assets/images/`
- **Contact Info**: Update contact details in Footer and Contact components

## Deployment

This project can be deployed to any static hosting service:
- Vercel
- Netlify
- GitHub Pages
- AWS S3

Simply run `npm run build` and deploy the `dist` folder.
# vasundharam
