"use client";

import { useEffect, useState } from 'react';
import { demoPage, demoUsers } from '@/lib/demo-data';

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null);
  const [bioText, setBioText] = useState(demoPage.bioText);
  const [content, setContent] = useState(demoPage.content);

  useEffect(() => {
    const saved = localStorage.getItem('mikrobiolink-user');
    if (saved) {
      setUser(JSON.parse(saved));
    }
  }, []);

  const addBlock = () => {
    setContent((prev) => [
      ...prev,
      { id: `new-${Date.now()}`, title: 'Link Baru', type: 'link', url: 'https://example.com', isPublished: true, isActive: true, sortOrder: prev.length + 1 }
    ]);
  };

  if (!user) return <div className="empty-state">Silakan login terlebih dahulu.</div>;

  return (
    <main className="dashboard-shell container">
      <aside className="sidebar">
        <div className="brand">MikroBiolink</div>
        <nav className="sidebar-nav">
          <a href="/dashboard">Dashboard</a>
          <a href="/editor">Editor</a>
          <a href="/files">Files</a>
          <a href="/settings_page">Settings</a>
          {user.role === 'admin' && <a href="/admin">Admin</a>}
          <button className="btn btn-secondary" onClick={() => localStorage.removeItem('mikrobiolink-user')}>Logout</button>
        </nav>
      </aside>

      <section className="content-panel">
        <header className="content-header">
          <div>
            <p className="eyebrow">Selamat datang</p>
            <h1>{user.name}</h1>
          </div>
          <button className="btn btn-primary">Copy Link</button>
        </header>

        <div className="metric-grid">
          <div className="metric-box"><strong>24</strong><span>File Publik</span></div>
          <div className="metric-box"><strong>{content.length}</strong><span>Konten</span></div>
          <div className="metric-box"><strong>12.8K</strong><span>Kunjungan</span></div>
        </div>

        <div className="editor-box mt-24">
          <h3>Editor Profil</h3>
          <label className="field">
            <span>Nama tampilan</span>
            <input value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })} />
          </label>
          <label className="field">
            <span>Bio</span>
            <textarea rows={4} value={bioText} onChange={(e) => setBioText(e.target.value)} />
          </label>
          <button className="btn btn-primary" onClick={addBlock}>Tambah Konten</button>
        </div>

        <div className="mt-24">
          <h3>Daftar blok</h3>
          <ul className="mini-list">
            {content.map((item) => (
              <li key={item.id}>{item.title}</li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
