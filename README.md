# Hyderabad Elite Directory

A premium, fictional Hyderabad directory experience built with Next.js App Router. All profile, review, location, category, and journal content is hardcoded demo data; there is no backend or booking system.

## Stack

- Next.js 15 and React 19
- TypeScript and Tailwind CSS v4
- Lucide React icons and Framer Motion-ready UI primitives
- App Router Metadata API, JSON-LD, sitemap, and robots

## Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production

```bash
npm run lint
npm run typecheck
npm run build
npm run start
```

Set `NEXT_PUBLIC_SITE_URL` in `.env.local` for canonical URLs and sitemap output. The default is `http://localhost:3000`.

## Routes

The app includes profiles and profile details, location and category indexes, reviews, FAQ, contact, about, legal pages, journal articles, `robots.txt`, and `sitemap.xml`. Dynamic pages use hardcoded data through `src/lib/data`, so those helpers can later be replaced with API or CMS calls without changing the UI.

## SEO and performance

Shared metadata provides canonical URLs, Open Graph, Twitter cards, robots directives, and metadata base. Static params pre-render the directory detail pages. Organization, WebSite, BreadcrumbList, and Article JSON-LD are used only where they match the page content. Profile imagery uses local `next/image` placeholders, while filter state stays client-side to avoid indexable duplicate URLs.

## Demo limitations

Profiles, ratings, testimonials, contact details, and verification labels are fictional. The contact form only shows a local success state. Replace all placeholder content, imagery, configuration, and legal copy before any public launch.
