export default function FolderDetailPage() {
  const items = [
    { name: 'Launch Poster', type: 'Image' },
    { name: 'Promo Video', type: 'Video' },
    { name: 'Lead Magnet.pdf', type: 'PDF' }
  ];

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
          <h1>Campaign Folder</h1>
          <button className="btn btn-primary">Tambah Item</button>
        </header>

        <div className="files-panel">
          <table className="data-table compact-table">
            <thead>
              <tr>
                <th>Nama</th>
                <th>Jenis</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.name}>
                  <td>{item.name}</td>
                  <td>{item.type}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
