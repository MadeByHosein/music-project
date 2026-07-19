import React from 'react';
import type { Metadata, Viewport } from 'next';
import '../styles/index.css';
import '../styles/tailwind.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'دانلود آهنگ های Ece Seçkin | کیفیت 320 و 128',
  description: 'دانلود جدیدترین و محبوب‌ترین آهنگ های Ece Seçkin با کیفیت 320 و 128، پخش آنلاین و متن آهنگ',
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' }
    ]
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  },
  openGraph: {
    title: 'دانلود آهنگ های Ece Seçkin',
    description: 'بهترین آهنگ های Ece Seçkin با کیفیت بالا',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    siteName: 'Ece Seçkin Music',
    type: 'website',
    locale: 'fa_IR',
    images: [
      {
        url: 'https://img.rocket.new/generatedImages/rocket_gen_img_1100754ec-1772440845407.png',
        width: 1200,
        height: 630,
        alt: 'Ece Seçkin'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'دانلود آهنگ های Ece Seçkin',
    description: 'بهترین آهنگ های Ece Seçkin با کیفیت بالا',
    images: ['https://img.rocket.new/generatedImages/rocket_gen_img_195e5714b-1764699013471.png']
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.ReactElement {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />

        {/* JSON-LD Schema Markup - Person */}
        <script
          type="application/ld+json"
          
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Ece Seçkin',
              url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
              image: 'https://img.rocket.new/eceseckin1833back.builtwithrocket.new/others/1751018697-adeyyo.jpg',
              jobTitle: 'Singer',
              description: 'Turkish singer and songwriter known for pop music',
              sameAs: [
                'https://www.instagram.com/ecesekin',
                'https://www.youtube.com/ecesekin',
                'https://twitter.com/ecesekin'
              ]
            })
          }}
        />

        {/* JSON-LD Schema Markup - WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Ece Seçkin Music',
              url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
              description: 'Download and stream Ece Seçkin songs in high quality'
            })
          }}
        />

      </head>
      <body>
        {children}
      </body>
    </html>
  );
}