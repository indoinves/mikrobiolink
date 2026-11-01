import { getBlogPosts } from '@/lib/blog';

export default function ArchivePage() {
  const posts = getBlogPosts(80);

  return (
    <main className="container blog-shell">
      <header className="page-header">
        <div>
          <span className="eyebrow">Archive</span>
          <h1>Semua postingan</h1>
        </div>
      </header>

      <div className="archive-layout">
        <div className="section-box archive-list">
          <h3>Postingan</h3>
          <ul className="compact-list">
            {posts.slice(0, 40).map((post) => (
              <li key={post.slug}><a href={`/blog/${post.slug}`}>{post.title}</a></li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
