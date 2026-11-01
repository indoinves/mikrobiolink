import { getTagPosts } from '@/lib/blog';

export default function TagPage({ params }: { params: { tag: string } }) {
  const posts = getTagPosts(params.tag, 12);

  return (
    <main className="container blog-shell">
      <header className="page-header">
        <div>
          <span className="eyebrow">Tag</span>
          <h1>#{params.tag}</h1>
        </div>
      </header>

      <div className="blog-grid">
        {posts.map((post) => (
          <article key={post.slug} className="feature-card">
            <div className="card-image" style={{ backgroundImage: `url('${post.coverImage}')` }} />
            <div className="card-body">
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <a href={`/blog/${post.slug}`} className="text-link">Baca artikel</a>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
