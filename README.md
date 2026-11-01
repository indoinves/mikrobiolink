# MikroBiolink

MikroBiolink is a SaaS Link-in-Bio platform with landing page, public bio profile, dashboard, admin panel, blog, and automated workflows.

This repository contains:
- Product Requirements Document (PRD)
- System architecture blueprint
- Relational database schema in SQL
- Project structure for web app and deployability
- Static landing page for GitHub Pages / Netlify / Vercel preview

## Project status
This repo includes a deployable static preview and production-ready design documentation for implementation.

## Quick deploy

### GitHub Pages
1. In GitHub, open repository settings
2. Go to Pages
3. Set Source to "Deploy from a branch"
4. Select branch `main` and folder `/` (or `/docs` if moved)

### Vercel / Netlify
- Import the repository into either platform
- Framework: Static / HTML
- Build command: none required for static site
- Publish directory: `.`

## Repository structure
- `docs/` — product and architecture documentation
- `sql/` — database schema
- `public/` — ads.txt and app-ads.txt
- `index.html` — static product landing page
- `styles.css` — styling
- `script.js` — interactions
- `netlify.toml` and `vercel.json` — deploy configuration

## Key product modules
- Public landing page
- Public bio page routing
- Client dashboard and editor
- Admin dashboard
- Domain management
- File and folder management
- Blog pages
- Mobile app shell screens

## License
MIT (or add your preferred license if needed)
