export default function ContactPage() {
  return (
    <main className="container contact-shell">
      <div className="contact-box">
        <span className="eyebrow">Contact Us</span>
        <h1>Hubungi tim MikroBiolink</h1>
        <p>Apabila Anda ingin berkolaborasi, mendapatkan fitur baru, atau membutuhkan strategi creator growth, kirimkan pesan Anda.</p>

        <form className="auth-form">
          <label>
            Nama
            <input type="text" placeholder="Nama lengkap" />
          </label>
          <label>
            Email
            <input type="email" placeholder="you@example.com" />
          </label>
          <label>
            Pesan
            <textarea rows={5} placeholder="Tulis kebutuhan Anda" />
          </label>
          <button type="submit" className="btn btn-primary full">Kirim</button>
        </form>
      </div>
    </main>
  );
}
