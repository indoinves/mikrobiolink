import { getBlogPosts } from '@/lib/blog';

export default function Sitemap() {
  const baseUrl = 'https://mikrobiolink.example.com';
  const posts = getBlogPosts(300);
  const routes = ['', '/access', '/dashboard', '/admin', '/blog', '/archive', '/contact']
    .concat(posts.map((post) => `/blog/${post.slug}`))
    .concat(['/tag/seo', '/tag/marketing', '/tag/creator', '/tag/growth'])
    .map((path) => `${baseUrl}${path}`);

  return routes.map((url) => ({
    url,
    lastModified: new Date().toISOString()
  }));
}
