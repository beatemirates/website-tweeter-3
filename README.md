# Tweeter Technical Services Website

Complete source files for the Tweeter Technical Services website, including:

- Responsive Home and About pages
- Nationwide fleet-technology service catalog
- New-client onboarding form
- Tweeter Technical Services crest and social preview artwork
- Sites-compatible deployment configuration

## Run locally

Requires Node.js 22.13 or newer.

```bash
npm install
npm run dev
```

Open the local address shown after the development server starts.

## Create a production build

```bash
npm run build
```

## Main files

- `app/page.tsx` — Home page
- `app/about/page.tsx` — About page
- `app/globals.css` — Site styles and responsive layout
- `app/layout.tsx` — Metadata and social-sharing configuration
- `public/` — Logo, social card, and supporting assets

The exported hosting configuration does not include the original private Sites project ID. A new project can be connected when this copy is deployed.
