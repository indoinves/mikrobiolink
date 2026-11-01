# Product Requirements Document (PRD)

## Product Name
MikroBiolink

## Product Type
SaaS Link-in-Bio platform for creators, brands, entrepreneurs, and businesses.

## Vision
Create a modern, scalable link-in-bio platform that helps creators showcase their profile, content, media, products, social presence, and monetization links from one smart page.

## Goals
- Provide a beautiful public bio page for users
- Allow content and media management with drag-and-drop ordering
- Support custom domains and username-based routing
- Allow tracking of visits, clicks, and leads
- Support publisher/admin/private access control
- Provide marketing blog and SEO foundation
- Enable deployment to GitHub Pages, Netlify, or Vercel for lightweight preview and production hosting

## User Roles
### 1. Super Admin
- Platform-wide users and followers metrics
- User lifecycle moderation
- Domain management oversight
- Global settings
- Revenue and health metrics

### 2. Client / Creator
- Build and manage biolink page
- Add blocks, media, folders, and domains
- Publish or draft content
- View analytics and lead data

### 3. Guest / Visitor
- View public biolink page
- Access password-protected pages only when authorized
- Cannot access dashboard or admin panel

## Core Modules
1. Public landing page and marketing website
2. Secure access flow
3. Dashboard builder and editor
4. Admin console
5. Public bio page routing
6. Analytics and event tracking
7. Leads management
8. File and folder management
9. Blog system
10. Domain management

## Feature Breakdown

### A. Public website
- Landing page with sections: Features, Dashboard, How It Works, Own Domain
- CTA buttons for Login and Sign Up
- Mobile responsive menu
- Theme preview switcher with 7 styles
- Global header and footer

### B. Access flow
- Login and signup
- Account blocking check before login
- Forgot password flow
- Email confirmation flow
- Auto-created folder and initial biolink page during signup

### C. Client dashboard
- KPI overview
- Public link visibility
- Auto-save editor
- Mobile and desktop preview
- Add, edit, delete, reorder content blocks
- Manage files and folders
- Domain requests and status tracking

### D. Admin dashboard
- View platform metrics
- Search/filter users
- Manage profile pages
- Review domain requests
- Ban or verify user accounts

### E. Public bio page
- Public username route or custom domain
- Password gate support
- Dynamic content block list
- Share page URL function
- Page unavailable state for unpublished/inactive profiles

### F. Analytics and tracking
- Unique page views by IP hash and date
- Click tracking per block
- Leads capture via email collector
- Referrer source tracking
- Geographic approximation via country mapping

### G. Blog system
- 100 blog pages
- SEO metadata
- Category and article management
- Article schema markup

## Privacy Rules
- Admin can access all data
- Owners can access only their own data
- Public pages show only active and published content
- Users only see username of others
- Every edit action must validate admin role or ownership

## Security Rules
- Password hashing required
- Account blocking checks at login
- Access control on dashboards and admin pages
- Password-protected biolink pages
- Email confirmation required for verification flow

## Functional Requirements

### Account lifecycle
1. Login check looks up account and returns blocked status.
2. When account status changes, related page and content become inactive.
3. When page publication status changes, all page content follows it.
4. Verified email moves pending account to active.

### Content workflow
- Add content block with title, media, URL, file, video, or social link
- Save and reorder content by sort_order
- Publish or draft block
- Schedule start/end if needed
- Trigger analytics on click and conversion

### Public page workflow
- route by username or custom domain
- check page publication and activity
- show password gate when required
- render active blocks sorted by order

## Non-Functional Requirements
- Mobile-first responsive UI
- Fast static rendering for public pages
- Structured SEO metadata
- Secure access control
- Async analytics event processing
- Multi-environment support: local, staging, production

## Success Metrics
- Average page load under 2s
- High conversion from public page clicks
- Daily active creator count
- Percentage of users with custom domains
- Lead capture conversion rate
- Admin moderation turnaround time

## Out of Scope
- Full-scale ecommerce checkout
- Native payment processing at MVP
- Advanced social posting automation beyond basic integrations

## Release Plan
### Phase 1: MVP
- Login/signup
- Public bio pages
- Dashboard editor
- Analytics basics
- Admin moderation

### Phase 2: Growth
- Domain management
- Blog content publishing
- Advanced SEO pages
- Lead export and CSV

### Phase 3: Scale
- Social integrations
- Team roles
- More advanced analytics and custom blocks

## Acceptance Criteria
- User can sign up and receive confirmation email
- User can create and publish a biolink page
- User can add content blocks and reorder them
- Block click increments analytics asynchronously
- Public bio page is filtered by publication status
- Admin can manage user status and domains
- Bio page shows unavailable state when unpublished or inactive

## Notes
This PRD is the base for project implementation. It supports both static and dynamic deployment patterns, but the architecture is designed to scale into a production SaaS stack.
