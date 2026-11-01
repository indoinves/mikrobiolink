import { getBlogPosts } from '@/lib/blog';

export default function BlogPage() {
  const posts = getBlogPosts(18);
  const featured = posts[0];
  const popular = posts.slice(1, 6);

  return (
    <main className="container blog-shell">
      <header className="page-header">
        <div>
          <span className="eyebrow">Blog</span>
          <h1>Artikel SEO & growth untuk creator dan brand.</h1>
        </div>
        <a href="/contact" className="btn btn-primary">Contact Us</a>
      </header>

      <div className="content-grid">
        <div className="main-column">
          <article className="hero-blog-card">
            <div className="hero-blog-copy">
              <span className="mini-tag">Featured</span>
              <h2>{featured.title}</h2>
              <p>{featured.excerpt}</p>
              <a href={`/blog/${featured.slug}`} className="btn btn-primary">Baca Artikel</a>
            </div>
            <img src={featured.coverImage} alt={featured.title} />
          </article>

          <div className="ads-slot wide">Google AdSense Slot 970x250</div>

          <div className="blog-grid">
            {posts.map((post) => (
              <article key={post.slug} className="feature-card">
                <div className="card-image" style={{ backgroundImage: `url('${post.coverImage}')` }} />
                <div className="card-body">
                  <span className="mini-tag">{post.category}</span>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <div className="meta-row compact-row">
                    <span>{post.publishedAt}</span>
                    <span>{post.minutesRead} min</span>
                  </div>
                  <a href={`/blog/${post.slug}`} className="text-link">Baca artikel →</a>
                </div>
              </article>
            ))}
          </div>
        </div>

        <aside className="blog-sidebar">
          <div className="section-box">
            <h3>Popular Posts</h3>
            <ul className="compact-list">
              {popular.map((post) => (
                <li key={post.slug}><a href={`/blog/${post.slug}`}>{post.title}</a></li>
              ))}
            </ul>
          </div>

          <div className="section-box">
            <h3>Tags Populer</h3>
            <div className="tag-list">
              {['seo', 'marketing', 'creator', 'growth', 'analytics'].map((tag) => (
                <a key={tag} href={`/tag/${tag}`} className="tag-pill">#{tag}</a>
              ))}
            </div>
          </div>

          <div className="section-box">
            <h3>Archive</h3>
            <ul className="compact-list">
              <li><a href="/archive">Lihat Semua</a></li>
              <li><a href="/archive?year=2026">2026</a></li>
              <li><a href="/archive?year=2025">2025</a></li>
            </ul>
          </div>

          <div className="ads-slot tall">Ad Slot 300x600</div>
        </aside>
      </div>
    </main>
  );
}
