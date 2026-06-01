import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import WhatsAppButton from '@/components/common/WhatsAppButton';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

import "./globals.css";

export const metadata: Metadata = {
  title: 'HopinCab | Premium Airport Transfers & Tours in New Zealand',
  description: 'Your reliable partner for comfortable and affordable airport transfers, tours, and transportation services in New Zealand. Book your ride now!',
  keywords: 'New Zealand airport transfer, taxi service, airport shuttle, private tours, reliable transportation',
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#2563eb',
  openGraph: {
    title: 'HopinCab | Premium Airport Transfers & Tours',
    description: 'Your reliable partner for comfortable and affordable transportation in New Zealand',
    url: 'https://hopincab.com',
    siteName: 'HopinCab',
    locale: 'en_NZ',
    type: 'website',
  },
};

// Suppress hydration warnings for this component
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${inter.variable} font-sans bg-white text-gray-900`} suppressHydrationWarning>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
