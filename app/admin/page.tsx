"use client";

import { useEffect, useState } from 'react';

export default function AdminPage() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const saved = localStorage.getItem('mikrobiolink-user');
    if (saved) setUser(JSON.parse(saved));
  }, []);

  const rows = [
    { user: 'jane@demo.com', tier: 'Pro', status: 'Active' },
    { user: 'nina@demo.com', tier: 'Free', status: 'Pending' },
    { user: 'ali@demo.com', tier: 'Pro', status: 'Banned' }
  ];

  if (user?.role !== 'admin') {
    return <div className="empty-state">Akses admin hanya untuk role admin.</div>;
  }

  return (
    <main className="container admin-shell">
      <aside className="sidebar">
        <div className="brand">MikroBiolink</div>
        <nav className="sidebar-nav">
          <a href="/admin">Dashboard</a>
          <a href="/admin/folders">Folders</a>
          <a href="/admin/domains">Domains</a>
          <a href="/dashboard">Member</a>
        </nav>
      </aside>

      <section className="content-panel">
        <header className="content-header">
          <h1>Admin Dashboard</h1>
          <button className="btn btn-primary">Export Data</button>
        </header>

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
      </section>
    </main>
  );
}
