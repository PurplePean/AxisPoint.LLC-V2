# AxisPoint Website

Modern, institutional website for AxisPoint LLC - Commercial Real Estate Asset Management & Investment Advisory.

Built with Astro, React, TypeScript, and Tailwind CSS.

## Tech Stack

- **Astro** - Static site generator with pre-rendered HTML
- **React** - Interactive components
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **CSS Animations** - Subtle, premium motion

## Project Structure

```
/
├── public/
│   ├── assets/logo/          # Add logo files here
│   ├── robots.txt
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── layout/           # Header, Footer, MobileNav
│   │   ├── ui/               # Button, Card, Input
│   │   └── sections/         # Homepage sections
│   ├── layouts/              # BaseLayout with SEO
│   ├── pages/                # All site pages
│   └── styles/               # Global CSS
└── .github/workflows/        # Deployment automation
```

## Getting Started

### Prerequisites

- Node.js 20 or higher
- npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Logo Files

Place your logo files in `/public/assets/logo/`:
- `Transparent_AXP_LOGO.svg` (preferred)
- `Transparent_AXP_LOGO.png` (fallback)

## Contact Form Setup

The contact form uses Formspree with a mailto fallback.

To enable Formspree:
1. Create account at https://formspree.io
2. Get your form endpoint ID
3. Update `src/components/ContactForm.tsx` line 13:
   ```typescript
   const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';
   ```

## Deployment

### GitHub Actions Setup

The site deploys automatically to Namecheap via FTP when pushed to the `main` branch.

**Required GitHub Secrets:**
1. Go to: Settings → Secrets and variables → Actions
2. Add these secrets:
   - `FTP_SERVER` - Your FTP server (e.g., `ftp.yourdomain.com`)
   - `FTP_USERNAME` - FTP username from Namecheap cPanel
   - `FTP_PASSWORD` - FTP password

**Find FTP credentials in Namecheap:**
1. Log into cPanel
2. Go to FTP Accounts
3. Use main cPanel username or create dedicated deploy user

### Manual Deployment

```bash
# Build the site
npm run build

# Upload contents of dist/ folder to your hosting via FTP
```

## Pages

- `/` - Homepage with all sections
- `/services` - Investment Advisory & Asset Management details
- `/education` - Resources (placeholder)
- `/contact` - Contact form
- `/experience` - Case studies
- `/privacy` - Privacy policy
- `/terms` - Terms of service
- `/404` - 404 page

## Design Principles

- Typography-first design
- Generous whitespace
- Subtle CSS animations
- Premium hover states
- Mobile-first responsive
- Accessibility (WCAG AA)
- `prefers-reduced-motion` support

## Content Tone

**Voice:**
- Direct, not clever
- Confident, not boastful
- Specific, not vague
- Calm, not urgent

**Avoid:**
- Marketing fluff ("unlock", "synergy", "best-in-class")
- Exclamation points
- Sales-driven copy
- Performance promises

## SEO

- Unique title and description per page
- Open Graph meta tags
- Automatic sitemap generation
- Canonical URLs
- Semantic HTML

## Development

### Adding a new page

1. Create file in `src/pages/`
2. Use BaseLayout with title and description
3. Import Header and Footer components
4. Build page content

### Adding a new component

1. Create in appropriate directory (`ui/`, `layout/`, `sections/`)
2. Use `.astro` for static components
3. Use `.tsx` for interactive React components
4. Import and use in pages

## Browser Support

Modern browsers with ES6+ support:
- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## Performance

- Pre-rendered static HTML
- Minimal JavaScript
- Optimized images
- Font preloading
- CSS animations (no JS libraries)

## License

Copyright © 2025 AxisPoint LLC. All rights reserved.