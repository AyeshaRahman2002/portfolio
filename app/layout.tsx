import './globals.css';
import type { Metadata } from 'next';
import { AppShell } from '@/components/AppShell';
import { SITE_CONFIG } from '@/data/portfolioData';

const themeScript = `
  try {
    var saved = localStorage.getItem('ayesha_portfolio_mode');
    document.documentElement.dataset.theme = saved === 'artist' ? 'artist' : 'engineer';
  } catch (_) {
    document.documentElement.dataset.theme = 'engineer';
  }
`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: SITE_CONFIG.title,
  description: SITE_CONFIG.description,
  alternates: { canonical: '/' },
  openGraph: { title: SITE_CONFIG.title, description: SITE_CONFIG.description, type: 'website', url: '/' },
  twitter: { card: 'summary', title: SITE_CONFIG.title, description: SITE_CONFIG.description },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="engineer" suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head>
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
