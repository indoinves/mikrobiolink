# Architecture Blueprint

## 1. Recommended stack

### Production-ready
- Frontend: Next.js + TypeScript
- Backend: Supabase / PostgreSQL + Edge functions
- Auth: Supabase Auth or NextAuth
- Storage: Supabase Storage or Cloudinary
- Analytics: PostHog or custom event logging
- Queue: Inngest or background jobs
- Email: Resend / SendGrid
- SEO: Next.js metadata + OG + canonical
- Hosting: Vercel, Netlify, or GitHub Pages for static site preview

### Why this stack
- SEO-friendly public pages
- Custom domain and username routing
- Fast and scalable content rendering
- Easy permission implementation
- Good database relation modeling

## 2. Application architecture

### Layers
- Presentation layer
  - landing page
  - dashboard
  - admin console
  - public bio page
  - blog views
- Application layer
  - auth
  - routing
  - analytics
  - permissions
  - domains
  - content management
- Data layer
  - PostgreSQL
  - files and media storage
  - logs and analytics tables

## 3. Routing model

### Public routes
- `/`
- `/access`
- `/confirmation`
- `/reset_pw`
- `/[username]`
- `/blog`
- `/blog/[slug]`
- `/404`

### Protected application routes
- `/dashboard`
- `/editor`
- `/files`
- `/folder_detail`
- `/settings_page`
- `/admin/dashboard`
- `/admin/folders`
- `/admin/domains`

## 4. Database and permissions

### Core rule
All write operations must verify either:
- current user is Super Admin, or
- current user owns the target record

### Privacy flow
- Admin sees everything
- Owner sees own records
- Public pages expose only active and published data
- Other users see only a username

## 5. Analytics architecture

### Event categories
- page_view
- block_click
- lead_capture
- password_check

### Rules
- Event ingestion must be async and non-blocking
- Use IP hash + date deduplication
- Update aggregate counters asynchronously

## 6. Domain routing strategy

### Precedence
1. Custom domain match
2. Username match
3. 404 page

### Password gate
If page is protected, route shows secure password gate before content loads.

## 7. Content model
Content blocks are modular and stored by type with a JSON payload. Ordering is handled by `sort_order` and a publish status.

## 8. Security and compliance
- Hash passwords with strong algorithms
- Use secure cookies, session tokens, and CSRF protections
- Add rate limiting to login and recovery flows
- Add consent banner for analytics and ads cookies
- Respect user privacy and data export deletion requirements

## 9. Deployment path

### Static preview
- GitHub Pages
- Netlify
- Vercel

### Production-facing SaaS deployment
- Vercel for frontend
- Postgres cloud database
- Edge functions for analytics
- Cloudflare for custom domains and CDN

## 10. Key workflows
- signup creates auto bootstrap and page
- login checks blocked status first
- publication toggle syncs all content for page
- email verification turns pending to active
- analytics updates asynchronously

## 11. Recommended implementation order
1. Auth and RBAC
2. User + page tables
3. Content blocks
4. Analytics tables
5. Dashboard pages
6. Public profile rendering
7. Admin console
8. Domain and blog system
9. SEO and ads verification
10. Launch hardening
