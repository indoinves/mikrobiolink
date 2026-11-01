# Production Deployment Checklist

## Build & framework
- [ ] Next.js app builds successfully with `npm run build`
- [ ] `netlify.toml` is valid
- [ ] `@netlify/plugin-nextjs` is installed
- [ ] `package.json` scripts are correct

## SEO & metadata
- [ ] title and description present for each route
- [ ] OG image exists
- [ ] canonical URLs configured
- [ ] robots metadata present
- [ ] sitemap included
- [ ] manifest included

## Blog & CMS
- [ ] blog index page renders
- [ ] article pages render by slug
- [ ] tag pages render
- [ ] archive pages render
- [ ] search indexing is clean
- [ ] article content blocks maintain readable structure

## Auth & dashboard
- [ ] login route works
- [ ] signup route works
- [ ] demo admin/member flows work
- [ ] dashboard loads with user context
- [ ] admin only pages restrict non-admin users

## Public profile flow
- [ ] username route works
- [ ] mode switch and CTA flow work
- [ ] content blocks show in correct order
- [ ] public pages hide incomplete or unpublished data

## Ads and monetization
- [ ] `ads.txt` and `app-ads.txt` configured
- [ ] ad slots are reserved and labeled
- [ ] analytics is not broken by ads scripts

## Production hardening
- [ ] environment variables documented
- [ ] custom domain configured
- [ ] DNS/CNAME records verified
- [ ] SSL certificate works
- [ ] analytics provider configured
- [ ] failure states and 404 pages polished

## Launch readiness
- [ ] marketing homepage reviewed
- [ ] blog content quality checked
- [ ] responsive design passes on mobile
- [ ] CTAs and conversion paths tested
- [ ] final QA performed on all routes
