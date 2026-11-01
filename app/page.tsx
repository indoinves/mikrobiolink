const features = [
  { title: 'Smart Builder', description: 'Edit profile, add content blocks, publish instantly, and reorder widgets.' },
  { title: 'Custom Domain', description: 'Own a custom brand presence through your own domain and URL.' },
  { title: 'Lead Capture', description: 'Collect emails and convert visitors into loyal followers or customers.' },
  { title: 'Analytics', description: 'Track views, clicks, and conversion trends with an overview dashboard.' }
];

export default function HomePage() {
  return (
    <main>
      <header className="site-header">
        <div className="container nav">
          <div className="brand">MikroBiolink</div>
          <nav className="nav-links">
            <a href="#features">Fitur</a>
            <a href="#dashboard">Dashboard</a>
            <a href="#how">Cara Kerja</a>
            <a href="#domain">Domain</a>
            <a href="/access" className="btn btn-light">Masuk</a>
            <a href="/access" className="btn btn-primary">Daftar Gratis</a>
          </nav>
        </div>
      </header>

      <section className="container hero">
        <div>
          <span className="badge">Creator SaaS Platform</span>
          <h1>Turn your profile into a high-converting digital home.</h1>
          <p>
            Bangun halaman bio yang modern, profesional, dan siap menghasilkan leads, trafik, dan monetisasi dari satu tempat.
          </p>
          <div className="hero-actions">
            <a href="/access" className="btn btn-primary">Mulai Gratis</a>
            <a href="#features" className="btn btn-secondary">Lihat Fitur</a>
          </div>
          <ul className="hero-points">
            <li>Auto-save editor</li>
            <li>Custom domain</li>
            <li>SEO & analytics</li>
          </ul>
        </div>

        <div className="hero-card">
          <div className="phone-frame">
            <div className="phone-header">MikroBiolink</div>
            <div className="avatar" />
            <h3>Jane Creator</h3>
            <p>Product designer, content creator, and digital storyteller.</p>
            <div className="links-list">
              <button>Portfolio</button>
              <button>Shop</button>
              <button>Newsletter</button>
              <button>YouTube</button>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="section container">
        <div className="section-heading">
          <span className="eyebrow">Fitur</span>
          <h2>Semua yang dibutuhkan creator untuk berkembang.</h2>
        </div>
        <div className="feature-grid">
          {features.map((feature) => (
            <article key={feature.title} className="feature-card">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="dashboard" className="section dark-section">
        <div className="container split-layout">
          <div>
            <span className="eyebrow">Dashboard</span>
            <h2>Dashboard untuk mengelola isi profil dan audiens.</h2>
            <ul className="check-list">
              <li>Editor blok dengan urutan drag-and-drop</li>
              <li>Preview mobile dan desktop</li>
              <li>Organisasi file dan folder</li>
              <li>Publish & draft dalam satu klik</li>
            </ul>
          </div>

          <div className="stats-panel">
            <div className="stats-box">
              <strong>12.8K</strong>
              <span>Total kunjungan</span>
            </div>
            <div className="stats-box">
              <strong>430</strong>
              <span>klik link</span>
            </div>
            <div className="stats-box">
              <strong>89</strong>
              <span>lead baru</span>
            </div>
          </div>
        </div>
      </section>

      <section id="how" className="section container">
        <div className="section-heading">
          <span className="eyebrow">Cara Kerja</span>
          <h2>Mulai dari setup sampai growth dalam menit.</h2>
        </div>
        <div className="steps-grid">
          <div className="step-card">
            <span>01</span>
            <h3>Buat akun</h3>
            <p>Daftar dan buat halaman bio pertama secara otomatis.</p>
          </div>
          <div className="step-card">
            <span>02</span>
            <h3>Kustomisasi</h3>
            <p>Tambah profil, blok konten, foto, tema, dan channel media.</p>
          </div>
          <div className="step-card">
            <span>03</span>
            <h3>Publikasikan</h3>
            <p>Bagikan link profil ke audiens, media sosial, dan kampanye.</p>
          </div>
        </div>
      </section>

      <section id="domain" className="section container domain-section">
        <div>
          <span className="eyebrow">Domain</span>
          <h2>Miliki brand yang konsisten di setiap link.</h2>
          <p>
            Hubungkan domain khusus untuk profil Anda, agar setiap link terlihat lebih profesional, kuat, dan mudah diingat.
          </p>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-row">
          <div>MikroBiolink</div>
          <div>© 2026</div>
        </div>
      </footer>
    </main>
  );
}
