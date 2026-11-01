export default function NotFoundPage() {
  return (
    <main className="container not-found-shell">
      <div className="contact-box">
        <span className="eyebrow">404</span>
        <h1>Halaman tidak ditemukan</h1>
        <p>URL tersebut mungkin dipindahkan atau tidak tersedia lagi.</p>
        <a href="/" className="btn btn-primary">Kembali ke Home</a>
      </div>
    </main>
  );
}
