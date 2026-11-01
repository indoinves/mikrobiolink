export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  const titles: Record<string, string> = {
    'cara-membuat-bio-link-yang-menjual': 'Cara Membuat Bio Link yang Menjual',
    '7-tema-link-in-bio': '7 Tema Link-in-Bio yang Memikat Audiens',
    'strategi-lead-capture-creator': 'Strategi Lead Capture untuk Creator'
  };

  const title = titles[params.slug] || 'Blog Article';

  return (
    <main className="container blog-detail-shell">
      <h1>{title}</h1>
      <p>
        Artikel ini adalah contoh blog yang bisa dikembangkan menjadi halaman editorial lengkap dengan metadata SEO, author, tanggal, dan CTA.
      </p>
      <div className="feature-card">
        <h3>Ringkasan</h3>
        <p>Bio link yang baik harus simpel, cepat dimengerti, dan langsung mendorong aksi conversion seperti klik, follow, atau subscribe.</p>
      </div>
    </main>
  );
}
