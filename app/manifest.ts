export default function manifest() {
  return {
    name: 'MikroBiolink',
    short_name: 'MikroBiolink',
    description: 'Creator-first link-in-bio SaaS with dashboard, admin, and SEO blog.',
    start_url: '/',
    display: 'standalone',
    background_color: '#07111f',
    theme_color: '#6ea8fe',
    icons: [
      { src: '/favicon.svg', sizes: 'any', type: 'image/svg+xml' },
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png' }
    ]
  };
}
