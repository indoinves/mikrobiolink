export default function ConfirmationPage() {
  return (
    <main className="auth-shell">
      <div className="auth-panel center-box">
        <div className="auth-brand">Email Terkonfirmasi</div>
        <p>Selamat! Akun Anda sudah aktif. Silakan masuk untuk mulai mengelola halaman.</p>
        <a href="/access" className="btn btn-primary full">Masuk</a>
      </div>
    </main>
  );
}
