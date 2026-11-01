export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  return (
    <main className="container blog-detail-shell">
      <h1>{decodeURIComponent(params.slug).replace(/-/g, ' ')}</h1>
      <p>
        Artikel contoh untuk blog MikroBiolink. Di sini Anda bisa menampilkan isi konten SEO, struktur artikel, dan metadata.
      </p>
      <div className="feature-card">
        <h3>Ringkasan</h3>
        <p>Ini adalah halaman detail blog yang siap dikembangkan menjadi konten editorial lengkap.</p>
      </div>
    </main>
  );
}
