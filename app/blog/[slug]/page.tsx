import { notFound } from 'next/navigation';
import { getBlogPostBySlug } from '@/lib/blog';

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="container blog-detail-shell">
      <article className="blog-article">
        <header className="article-header">
          <span className="mini-tag">{post.category}</span>
          <h1>{post.title}</h1>
          <div className="meta-row">
            <span>{post.author}</span>
            <span>{post.publishedAt}</span>
            <span>{post.minutesRead} min read</span>
          </div>
          <img src={post.coverImage} alt={post.title} className="article-cover" />
        </header>

        <div className="article-layout">
          <div className="article-content">
            {post.content.map((paragraph, index) => (
              <p key={`${post.slug}-${index}`}>{paragraph}</p>
            ))}

            <div className="section-box">
              <h3>Internal Links</h3>
              <ul>
                {post.internalLinks.map((link) => (
                  <li key={link}><a href={link}>{link}</a></li>
                ))}
              </ul>
            </div>

            <div className="section-box">
              <h3>External References</h3>
              <ul>
                {post.externalLinks.map((link) => (
                  <li key={link}><a href={link} target="_blank" rel="noreferrer">{link}</a></li>
                ))}
              </ul>
            </div>

            <div className="ads-slot">Google AdSense Slot 728x90</div>
            <div className="ads-slot small">Google AdSense Slot 300x250</div>
          </div>

          <aside className="sidebar-article">
            <div className="section-box">
              <h3>Popular Posts</h3>
              <ul className="compact-list">
                <li><a href="/blog">Blog Home</a></li>
                <li><a href="/archive">Archive</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>

            <div className="section-box">
              <h3>Tags</h3>
              <div className="tag-list">
                {post.tags.map((tag) => (
                  <a key={tag} href={`/tag/${tag}`} className="tag-pill">#{tag}</a>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </article>
    </main>
  );
}
