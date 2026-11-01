"use client";

import { useRouter } from 'next/navigation';
import { useState } from 'react';

const demoAccounts = [
  { email: 'admin@demo.com', password: 'admin123', role: 'admin' },
  { email: 'member@demo.com', password: 'member123', role: 'member' }
];

export default function AccessPage() {
  const router = useRouter();
  const [mode, setMode] = useState<'login' | 'signup'>('login');
  const [form, setForm] = useState({ email: '', password: '', name: '' });
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const account = demoAccounts.find(
      (item) => item.email === form.email && item.password === form.password
    );

    if (account) {
      localStorage.setItem(
        'mikrobiolink-user',
        JSON.stringify({
          email: form.email,
          name: form.name || account.email.split('@')[0],
          role: account.role
        })
      );

      setMessage('Login berhasil. Redirecting...');
      router.push(account.role === 'admin' ? '/admin' : '/dashboard');
      return;
    }

    if (mode === 'signup') {
      localStorage.setItem(
        'mikrobiolink-user',
        JSON.stringify({
          email: form.email,
          name: form.name || 'New Member',
          role: 'member'
        })
      );
      setMessage('Akun baru berhasil dibuat. Redirecting...');
      router.push('/dashboard');
      return;
    }

    setMessage('Email atau password salah. Gunakan demo account di bawah.');
  };

  return (
    <main className="auth-shell">
      <div className="auth-panel">
        <div className="auth-brand">MikroBiolink</div>

        <div className="auth-tabs">
          <button type="button" className={mode === 'login' ? 'tab active' : 'tab'} onClick={() => setMode('login')}>
            Login
          </button>
          <button type="button" className={mode === 'signup' ? 'tab active' : 'tab'} onClick={() => setMode('signup')}>
            Daftar
          </button>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          {mode === 'signup' && (
            <label>
              Nama Lengkap
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Nama Anda"
              />
            </label>
          )}

          <label>
            Email
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="you@example.com"
            />
          </label>

          <label>
            Password
            <input
              type="password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              placeholder="••••••••"
            />
          </label>

          <button type="submit" className="btn btn-primary full">
            {mode === 'login' ? 'Masuk' : 'Buat Akun'}
          </button>

          <a href="/reset_pw" className="text-link">Lupa kata sandi?</a>
        </form>

        {message && <p className="status-msg">{message}</p>}

        <div className="demo-box">
          <strong>Demo akun:</strong>
          <ul>
            <li>Admin: admin@demo.com / admin123</li>
            <li>Member: member@demo.com / member123</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
