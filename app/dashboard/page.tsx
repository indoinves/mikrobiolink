export default function DashboardPage() {
  const metrics = [
    { label: 'File Publik', value: '24' },
    { label: 'Konten', value: '86' },
    { label: 'Kunjungan', value: '12.8K' }
  ];

  return (
    <main className="dashboard-shell container">
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
          <h1>Dashboard</h1>
          <button className="btn btn-primary">Copy Link</button>
        </header>

        <div className="metric-grid">
          {metrics.map((metric) => (
            <div className="metric-box" key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
