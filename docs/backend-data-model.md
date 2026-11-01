# Backend Data Model

## Core entities

### users
- id
- email
- password_hash
- display_name
- username
- role
- status
- email_verified
- created_at
- updated_at

### pages
- id
- user_id
- custom_username
- custom_domain
- profile_name
- bio_text
- theme_template
- is_published
- is_active
- total_views
- created_at
- updated_at

### page_blocks
- id
- page_id
- user_id
- title
- block_type
- url
- file_url
- media_url
- sort_order
- is_published
- is_active
- created_at
- updated_at

### domains
- id
- user_id
- page_id
- domain_name
- status
- dns_instructions
- created_at
- updated_at

### blog_posts
- id
- slug
- title
- excerpt
- content
- category
- tags
- author
- seo_title
- seo_description
- cover_image
- published_at
- is_published
- created_at
- updated_at

### analytics_events
- id
- page_id
- block_id
- user_id
- event_type
- referrer
- country
- device_type
- created_at

## Recommended stack
- PostgreSQL / Supabase
- Drizzle ORM or Prisma
- Next.js App Router
- Resend for email
- Cloudflare for DNS/CDN
- PostHog or custom analytics

## Access rules
- Admin: full visibility of platform data
- Member: access only own page, own dashboard, own analytics
- Guest: public pages and blog view only
