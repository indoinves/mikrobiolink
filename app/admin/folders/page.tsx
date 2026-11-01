export default function AdminFoldersPage() {
  const folders = [
    { user: 'andi@demo.com', name: 'Portfolio', created: '2026-10-02' },
    { user: 'bunga@demo.com', name: 'Brand Kit', created: '2026-10-07' },
    { user: 'candra@demo.com', name: 'Campaign', created: '2026-10-10' }
  ];

  return (
    <main className="container admin-shell wide-admin">
      <div className="content-panel full-width-panel">
        <header className="content-header">
          <h1>Admin Folders</h1>
        </header>

        <table className="data-table">
          <thead>
            <tr>
              <th>User</th>
              <th>Folder</th>
              <th>Dibuat</th>
            </tr>
          </thead>
          <tbody>
            {folders.map((folder) => (
              <tr key={`${folder.user}-${folder.name}`}>
                <td>{folder.user}</td>
                <td>{folder.name}</td>
                <td>{folder.created}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
