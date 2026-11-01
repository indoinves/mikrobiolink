export default function EditorPage() {
  return (
    <main className="container dashboard-shell">
      <aside className="sidebar">
        <div className="brand">MikroBiolink</div>
        <nav className="sidebar-nav">
          <a href="/dashboard">Dashboard</a>
          <a href="/editor">Editor</a>
          <a href="/files">Files</a>
          <a href="/settings_page">Settings</a>
          <a href="/admin">Admin</a>
          <button className="btn btn-secondary">Logout</button>
        </nav>
      </aside>

      <section className="content-panel">
        <header className="content-header">
          <h1>Editor Biolink</h1>
          <div className="button-row">
            <button className="btn btn-secondary">Draft</button>
            <button className="btn btn-primary">Publikasikan</button>
          </div>
        </header>

        <div className="editor-layout">
          <div className="editor-sidebar">
            <h3>Profil</h3>
            <label className="field">
              <span>Nama</span>
              <input defaultValue="Jane Creator" />
            </label>
            <label className="field">
              <span>Bio</span>
              <textarea rows={4} defaultValue="Helping creators grow with product, content, and community." />
            </label>
            <label className="field">
              <span>Tema</span>
              <select defaultValue="minimalist">
                <option value="minimalist">Minimalist</option>
                <option value="neon">Neon</option>
                <option value="glassmorphism">Glassmorphism</option>
                <option value="corporate">Corporate</option>
              </select>
            </label>

            <div className="panel-block">
              <h3>Konten</h3>
              <button className="btn btn-primary full">Tambah Konten</button>
              <ul className="mini-list">
                <li>Portfolio</li>
                <li>Shop</li>
                <li>Newsletter</li>
              </ul>
            </div>
          </div>

          <div className="preview-panel">
            <div className="preview-switch">
              <button className="mini-btn active">Mobile</button>
              <button className="mini-btn">Desktop</button>
            </div>
            <div className="phone-frame wide-preview">
              <div className="phone-header">MikroBiolink</div>
              <div className="avatar" />
              <h3>Jane Creator</h3>
              <p>Helping creators grow with product, content, and community.</p>
              <div className="links-list">
                <button>Portfolio</button>
                <button>Shop</button>
                <button>Newsletter</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
