import './globals.css';

export const metadata = {
  title: 'MikroBiolink',
  description: 'Link-in-bio SaaS platform for creators, brands, and businesses.',
  metadataBase: new URL('https://example.com'),
  openGraph: {
    title: 'MikroBiolink',
    description: 'Build a powerful digital home with content, leads, analytics, and custom domains.',
    url: 'https://example.com',
    siteName: 'MikroBiolink',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MikroBiolink',
    description: 'A creator-first link-in-bio platform.'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
