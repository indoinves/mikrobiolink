export default function AccessPage() {
  return (
    <main className="auth-shell">
      <div className="auth-panel">
        <div className="auth-brand">MikroBiolink</div>
        <div className="auth-tabs">
          <button className="tab active">Login</button>
          <button className="tab">Daftar</button>
        </div>

        <form className="auth-form">
          <label>
            Email
            <input type="email" placeholder="you@example.com" />
          </label>
          <label>
            Password
            <input type="password" placeholder="••••••••" />
          </label>
          <button type="submit" className="btn btn-primary full">Masuk</button>
          <a href="/reset_pw" className="text-link">Lupa kata sandi?</a>
        </form>
      </div>
    </main>
  );
}
