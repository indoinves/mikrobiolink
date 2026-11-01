export default function SettingsPage() {
  return (
    <main className="container dashboard-shell">
      <aside className="sidebar">
        <div className="brand">MikroBiolink</div>
        <nav className="sidebar-nav">
          <a href="/dashboard">Dashboard</a>
          <a href="/editor">Editor</a>
          <a href="/files">Files</a>
          <a href="/settings_page">Settings</a>
        </nav>
      </aside>

      <section className="content-panel">
        <header className="content-header">
          <h1>Pengaturan</h1>
        </header>

        <div className="settings-grid">
          <div className="panel-block">
            <h3>Profil</h3>
            <label className="field">
              <span>Nama</span>
              <input defaultValue="Jane Creator" />
            </label>
            <label className="field">
              <span>Email</span>
              <input defaultValue="jane@example.com" />
            </label>
            <label className="field">
              <span>Password</span>
              <input type="password" defaultValue="password" />
            </label>
            <button className="btn btn-primary">Simpan</button>
          </div>

          <div className="panel-block">
            <h3>Domain</h3>
            <button className="btn btn-primary full">Ajukan Domain</button>
            <ul className="mini-list">
              <li>links.jane.com — Active</li>
              <li>janecreator.id — Pending</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
