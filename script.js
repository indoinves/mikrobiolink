* {
  box-sizing: border-box;
}

:root {
  --bg: #07111f;
  --panel: #0e1b2b;
  --panel-soft: #12253d;
  --primary: #6ea8fe;
  --secondary: #8ef0d6;
  --text: #e9f3ff;
  --muted: #b5c7d6;
  --border: rgba(255,255,255,0.09);
  --button: #0a84ff;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: Inter, Arial, sans-serif;
  background: linear-gradient(180deg, #07111f 0%, #0d1d31 100%);
  color: var(--text);
}

img {
  max-width: 100%;
  display: block;
}

.container {
  width: min(1120px, calc(100% - 32px));
  margin: 0 auto;
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 20;
  backdrop-filter: blur(10px);
  background: rgba(7, 17, 31, 0.72);
  border-bottom: 1px solid var(--border);
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 76px;
}

.brand {
  font-size: 1.4rem;
  font-weight: 800;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 18px;
}

.nav-links a {
  color: var(--text);
  text-decoration: none;
  opacity: 0.9;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.82rem 1.25rem;
  border-radius: 999px;
  text-decoration: none;
  font-weight: 700;
  transition: 0.2s ease;
}

.btn:hover {
  transform: translateY(-1px);
}

.btn-primary {
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: #06131f;
}

.btn-secondary,
.btn-light {
  background: rgba(255,255,255,0.08);
  color: var(--text);
  border: 1px solid var(--border);
}

.hero {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  align-items: center;
  gap: 36px;
  padding: 84px 0 64px;
}

.badge,
.eyebrow {
  display: inline-block;
  background: rgba(110, 168, 254, 0.12);
  color: #bed8ff;
  border: 1px solid rgba(110,168,254,0.25);
  border-radius: 999px;
  padding: 0.45rem 0.8rem;
  font-size: 0.8rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.hero h1 {
  font-size: clamp(2.5rem, 5vw, 4.6rem);
  line-height: 1.08;
  letter-spacing: -0.05em;
  margin: 20px 0 16px;
}

.hero p {
  color: var(--muted);
  font-size: 1.06rem;
  max-width: 620px;
}

.hero-actions {
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 28px 0 16px;
}

.hero-points {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  list-style: none;
  padding: 0;
  margin: 20px 0 0;
  color: var(--muted);
}

.hero-card {
  display: flex;
  justify-content: center;
}

.phone-frame {
  width: min(100%, 360px);
  background: rgba(17, 28, 45, 0.9);
  border: 1px solid var(--border);
  border-radius: 24px;
  padding: 24px 18px;
  box-shadow: 0 24px 80px rgba(0,0,0,0.25);
}

.phone-header {
  font-weight: 700;
  margin-bottom: 18px;
}

.avatar {
  width: 82px;
  height: 82px;
  border-radius: 50%;
  margin: 0 auto 14px;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
}

.phone-frame h3 {
  margin: 0;
  text-align: center;
}

.phone-frame p {
  text-align: center;
  color: var(--muted);
}

.links-list {
  display: grid;
  gap: 12px;
  margin-top: 18px;
}

.links-list button {
  border: 0;
  border-radius: 12px;
  background: rgba(255,255,255,0.06);
  color: var(--text);
  padding: 0.95rem 1rem;
  font-weight: 600;
}

.section {
  padding: 90px 0;
}

.section-heading {
  margin-bottom: 32px;
}

.section-heading h2 {
  margin: 16px 0 0;
  font-size: clamp(2rem, 3vw, 2.7rem);
}

.feature-grid,
.steps-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 20px;
}

.feature-card,
.step-card {
  background: rgba(255,255,255,0.03);
  border: 1px solid var(--border);
  border-radius: 20px;
  padding: 24px;
}

.feature-card h3,
.step-card h3 {
  margin-top: 0;
}

.feature-card p,
.step-card p,
.domain-section p,
.check-list {
  color: var(--muted);
}

.dark-section {
  background: rgba(255,255,255,0.02);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}

.split-layout {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 30px;
  align-items: center;
}

.check-list {
  list-style: none;
  padding: 0;
  display: grid;
  gap: 12px;
}

.check-list li::before {
  content: "✓";
  color: var(--secondary);
  margin-right: 8px;
}

.stats-panel {
  display: grid;
  gap: 18px;
}

.stats-box {
  background: rgba(255,255,255,0.03);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 18px 20px;
}

.stats-box strong {
  display: block;
  font-size: 2rem;
}

.domain-section {
  display: flex;
  align-items: center;
}

.site-footer {
  border-top: 1px solid var(--border);
  padding: 22px 0 42px;
}

.footer-row {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  color: var(--muted);
}

@media (max-width: 900px) {
  .hero,
  .split-layout,
  .feature-grid,
  .steps-grid {
    grid-template-columns: 1fr;
  }

  .nav-links {
    display: none;
  }

  .hero {
    padding-top: 62px;
  }
}
