export default function ResetPasswordPage() {
  return (
    <main className="auth-shell">
      <div className="auth-panel center-box">
        <div className="auth-brand">Reset Password</div>
        <form className="auth-form">
          <label>
            Email
            <input type="email" placeholder="you@example.com" />
          </label>
          <button type="submit" className="btn btn-primary full">Kirim Link Reset</button>
        </form>
      </div>
    </main>
  );
}
