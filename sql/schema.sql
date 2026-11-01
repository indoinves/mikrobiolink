# SQL Schema

This SQL file is a production-ready starting point for PostgreSQL.

```sql
CREATE TYPE user_role AS ENUM ('super_admin', 'client');
CREATE TYPE subscription_tier AS ENUM ('free', 'pro');
CREATE TYPE account_status AS ENUM ('active', 'banned', 'pending_verification');
CREATE TYPE content_type AS ENUM (
  'link',
  'social_icon',
  'heading',
  'video_embed',
  'image_carousel',
  'email_collector',
  'tip_jar'
);
CREATE TYPE theme_template AS ENUM ('minimalist', 'neon', 'glassmorphism', 'corporate');
CREATE TYPE background_type AS ENUM ('solid', 'gradient', 'animated', 'custom_image');
CREATE TYPE font_family AS ENUM ('inter', 'poppins', 'roboto', 'playfair');
CREATE TYPE button_style AS ENUM ('rounded', 'pill', 'hard_shadow', 'outline');
CREATE TYPE device_type AS ENUM ('mobile', 'desktop', 'tablet');
CREATE TYPE event_type AS ENUM ('page_view', 'block_click', 'lead_capture', 'password_check');
CREATE TYPE domain_status AS ENUM ('pending', 'verified', 'active', 'rejected', 'disabled');
CREATE TYPE blog_status AS ENUM ('draft', 'published', 'archived');

CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  display_name VARCHAR(150),
  username VARCHAR(80) UNIQUE,
  role user_role NOT NULL DEFAULT 'client',
  subscription_tier subscription_tier NOT NULL DEFAULT 'free',
  status account_status NOT NULL DEFAULT 'pending_verification',
  email_verified BOOLEAN NOT NULL DEFAULT FALSE,
  is_blocked BOOLEAN NOT NULL DEFAULT FALSE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE biolink_pages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  custom_username VARCHAR(80) UNIQUE,
  custom_domain VARCHAR(255) UNIQUE,
  profile_name VARCHAR(150),
  bio_text TEXT,
  profile_picture_url TEXT,
  theme_template theme_template NOT NULL DEFAULT 'minimalist',
  background_type background_type NOT NULL DEFAULT 'solid',
  background_value TEXT,
  font_family font_family NOT NULL DEFAULT 'inter',
  button_style button_style NOT NULL DEFAULT 'rounded',
  seo_title VARCHAR(200),
  seo_description TEXT,
  is_password_protected BOOLEAN NOT NULL DEFAULT FALSE,
  page_password_hash TEXT,
  total_views BIGINT NOT NULL DEFAULT 0,
  is_published BOOLEAN NOT NULL DEFAULT FALSE,
  is_active BOOLEAN NOT NULL DEFAULT TRUE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE page_folders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  name VARCHAR(150) NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE page_content (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  biolink_page_id UUID NOT NULL REFERENCES biolink_pages(id) ON DELETE CASCADE,
  folder_id UUID REFERENCES page_folders(id) ON DELETE SET NULL,
  title VARCHAR(200) NOT NULL,
  content_type content_type NOT NULL,
  platform VARCHAR(80),
  url TEXT,
  file_url TEXT,
  image_url TEXT,
  thumbnail_url TEXT,
  youtube_video_id TEXT,
  payload JSONB,
  sort_order INTEGER NOT NULL DEFAULT 0,
  is_published BOOLEAN NOT NULL DEFAULT TRUE,
  is_active BOOLEAN NOT NULL DEFAULT TRUE,
  schedule_start TIMESTAMPTZ,
  schedule_end TIMESTAMPTZ,
  click_count BIGINT NOT NULL DEFAULT 0,
  conversion_count BIGINT NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE domains (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  biolink_page_id UUID NOT NULL REFERENCES biolink_pages(id) ON DELETE CASCADE,
  domain_name VARCHAR(255) UNIQUE NOT NULL,
  status domain_status NOT NULL DEFAULT 'pending',
  dns_instructions TEXT,
  notes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE visits (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  biolink_page_id UUID NOT NULL REFERENCES biolink_pages(id) ON DELETE CASCADE,
  user_id UUID REFERENCES users(id) ON DELETE SET NULL,
  visitor_ip_hash VARCHAR(255),
  referrer_source VARCHAR(120),
  country VARCHAR(100),
  device_type device_type,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE analytics_event_log (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  biolink_page_id UUID NOT NULL REFERENCES biolink_pages(id) ON DELETE CASCADE,
  content_id UUID REFERENCES page_content(id) ON DELETE SET NULL,
  visitor_ip_hash VARCHAR(255),
  country VARCHAR(100),
  device_type device_type,
  referrer_source VARCHAR(120),
  event_type event_type NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE leads_subscribers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  biolink_page_id UUID NOT NULL REFERENCES biolink_pages(id) ON DELETE CASCADE,
  content_id UUID REFERENCES page_content(id) ON DELETE SET NULL,
  subscriber_email VARCHAR(255) NOT NULL,
  source_type VARCHAR(60),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE app_bootstrap (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  onboarding_step TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE password_reset_tokens (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  token VARCHAR(255) UNIQUE NOT NULL,
  expires_at TIMESTAMPTZ NOT NULL,
  used_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE email_verification_tokens (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  token VARCHAR(255) UNIQUE NOT NULL,
  expires_at TIMESTAMPTZ NOT NULL,
  used_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE blog_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  author_user_id UUID REFERENCES users(id) ON DELETE SET NULL,
  slug VARCHAR(220) UNIQUE NOT NULL,
  title VARCHAR(220) NOT NULL,
  excerpt TEXT,
  content JSONB,
  cover_image_url TEXT,
  status blog_status NOT NULL DEFAULT 'draft',
  category VARCHAR(100),
  seo_title VARCHAR(200),
  seo_description TEXT,
  featured BOOLEAN NOT NULL DEFAULT FALSE,
  published_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_username ON users(username);
CREATE INDEX idx_users_status ON users(status);
CREATE INDEX idx_biolink_pages_user_id ON biolink_pages(user_id);
CREATE INDEX idx_biolink_pages_username ON biolink_pages(custom_username);
CREATE INDEX idx_biolink_pages_domain ON biolink_pages(custom_domain);
CREATE INDEX idx_page_content_biolink_page_id ON page_content(biolink_page_id);
CREATE INDEX idx_page_content_sort ON page_content(biolink_page_id, sort_order);
CREATE INDEX idx_visits_biolink_page ON visits(biolink_page_id, created_at);
CREATE INDEX idx_event_log_page ON analytics_event_log(biolink_page_id, created_at);
CREATE INDEX idx_leads_page ON leads_subscribers(biolink_page_id, created_at);
CREATE INDEX idx_blog_posts_slug ON blog_posts(slug);
```
