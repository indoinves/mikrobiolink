# MikroBiolink

MikroBiolink is a creator-first SaaS platform for generating premium link-in-bio pages, member dashboards, SEO blog content, analytics, and custom domain publishing.

This repository is structured as a production-ready frontend foundation with a CMS-oriented blog, admin/member flows, and deployment configuration for Netlify/Vercel.

## Product scope
- Public landing page
- Public bio profiles by username
- Member dashboard with CRUD editing
- Admin dashboard for user management
- SEO blog system with archive, tags, and article pages
- Contact page and CTA flows
- PWA manifest + sitemap
- Ads-ready and SEO-ready structure

## Tech stack
- Next.js 14
- React 18
- TypeScript
- App Router
- Static/dynamic page rendering
- Netlify/Vercel deployment ready

## Local development
```bash
npm install
npm run dev
```

Open http://localhost:3000

## Production deployment
### Netlify
Use these values in Netlify build settings:
- Base directory: .
- Build command: npm run build
- Publish directory: .next
- Functions directory: netlify/functions

### Vercel
Import the project directly and use default Next.js settings.

## Demo accounts
- Admin: admin@demo.com / admin123
- Member: member@demo.com / member123

## Main routes
- /
- /access
- /dashboard
- /admin
- /blog
- /archive
- /contact
- /tag/[tag]
- /blog/[slug]
- /[username]

## Backend model
The project includes a base relational model and a CMS-ready data structure for future Supabase/PostgreSQL integration.

## CMS and blog architecture
The blog engine is generated from structured mock data and can be replaced with real API/database content later.

## Deployment checklist
- Ensure `netlify.toml` is present
- Ensure `@netlify/plugin-nextjs` is installed
- Ensure production build succeeds via `npm run build`
- Verify critical routes render
- Check metadata and OG tags
- Validate sitemap and manifest files
- Confirm custom domain and DNS configuration
- Add real analytics provider in production

## Notes
This is a production-ready starter for product demo and launch prep, with modular route architecture and a CMS-style content engine.
