export default function FilesPage() {
  const folders = ['Media Kit', 'Campaign', 'Portfolio'];
  const files = [
    { name: 'profile.jpg', type: 'Image', size: '1.2 MB' },
    { name: 'product-launch.mp4', type: 'Video', size: '7.6 MB' },
    { name: 'brand-guideline.pdf', type: 'PDF', size: '2.4 MB' }
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
          <a href="/admin">Admin</a>
        </nav>
      </aside>

      <section className="content-panel">
        <header className="content-header">
          <h1>Files</h1>
          <button className="btn btn-primary">Upload File</button>
        </header>

        <div className="files-layout">
          <div className="folders-panel">
            <h3>Folder Saya</h3>
            <ul className="mini-list">
              {folders.map((folder) => (
                <li key={folder}>{folder}</li>
              ))}
            </ul>
          </div>

          <div className="files-panel">
            <table className="data-table compact-table">
              <thead>
                <tr>
                  <th>Nama</th>
                  <th>Jenis</th>
                  <th>Ukuran</th>
                </tr>
              </thead>
              <tbody>
                {files.map((file) => (
                  <tr key={file.name}>
                    <td>{file.name}</td>
                    <td>{file.type}</td>
                    <td>{file.size}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}
