import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'MikroBiolink',
  description: 'Link-in-bio SaaS platform for creators and brands.',
  metadataBase: new URL('https://example.com'),
  openGraph: {
    title: 'MikroBiolink',
    description: 'Build your digital identity with one beautiful link-in-bio page.',
    url: 'https://example.com',
    siteName: 'MikroBiolink',
    locale: 'id_ID',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MikroBiolink',
    description: 'Creators, brands, and businesses build modern link-in-bio experiences.'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
