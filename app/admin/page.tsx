export default function AdminPage() {
  const rows = [
    { user: 'andi@example.com', tier: 'Pro', status: 'Active' },
    { user: 'bunga@example.com', tier: 'Free', status: 'Pending' },
    { user: 'candra@example.com', tier: 'Pro', status: 'Banned' }
  ];

  return (
    <main className="container admin-shell">
      <h1>Admin Dashboard</h1>

      <div className="metric-grid">
        <div className="metric-box"><strong>128</strong><span>Total Client</span></div>
        <div className="metric-box"><strong>96</strong><span>Akun Aktif</span></div>
        <div className="metric-box"><strong>54</strong><span>Halaman Publik</span></div>
      </div>

      <table className="data-table">
        <thead>
          <tr>
            <th>User</th>
            <th>Tier</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.user}>
              <td>{row.user}</td>
              <td>{row.tier}</td>
              <td>{row.status}</td>
              <td><button className="mini-btn">View</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
