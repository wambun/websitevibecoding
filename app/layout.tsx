import { Inter } from 'next/font/google';
import { siteConfig } from '@/data/config/site.settings';
import { ThemeProviders } from './theme-providers';
import { Metadata } from 'next';

import '@/css/globals.css';
import { SearchProvider } from '@/components/shared/SearchProvider';
import { AnalyticsWrapper } from '@/components/shared/Analytics';
import { Header } from '@/components/shared/Header';
import { Footer } from '@/components/shared/Footer';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: './',
    siteName: siteConfig.title,
    images: [siteConfig.socialBanner],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: './',
    types: {
      'application/rss+xml': `${siteConfig.siteUrl}/feed.xml`,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: siteConfig.title,
    card: 'summary_large_image',
    images: [siteConfig.socialBanner],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang={siteConfig.language}
      className={`${inter.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/static/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/static/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/static/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/static/favicons/manifest.webmanifest" />
        <link
          rel="mask-icon"
          href="/static/favicons/safari-pinned-tab.svg"
          color="#1f514c"
        />
        <meta name="msapplication-TileColor" content="#1f514c" />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: light)"
          content="#fffffb"
        />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: dark)"
          content="#143632"
        />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      </head>

      <body className="flex flex-col min-h-screen font-sans antialiased bg-cream text-foreground">
        <ThemeProviders>
          <AnalyticsWrapper />
          <SearchProvider>
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </SearchProvider>
        </ThemeProviders>
      </body>
    </html>
  );
}
