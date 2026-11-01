export default function BlogPage() {
  const posts = [
    { title: 'Cara Membuat Bio Link yang Menjual', slug: 'cara-membuat-bio-link-yang-menjual', excerpt: 'Strategy to turn attention into action.' },
    { title: '7 Tema Link-in-Bio yang Memikat Audiens', slug: '7-tema-link-in-bio', excerpt: 'Choose the right design system and keep conversion high.' },
    { title: 'Strategi Lead Capture untuk Creator', slug: 'strategi-lead-capture-creator', excerpt: 'Capture attention, then convert it into real subscribers.' }
  ];

  return (
    <main className="container blog-shell">
      <h1>Blog MikroBiolink</h1>
      <div className="blog-grid">
        {posts.map((post) => (
          <article className="feature-card" key={post.slug}>
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
            <a href={`/blog/${post.slug}`} className="text-link">Baca artikel</a>
          </article>
        ))}
      </div>
    </main>
  );
}
