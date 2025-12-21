import type { Metadata } from 'next';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Cuzeth - Software Developer',
  description: 'Crafting privacy-focused, high-performance digital experiences.',
  openGraph: {
    title: 'Cuzeth - Software Developer',
    description: 'Crafting privacy-focused, high-performance digital experiences.',
    type: 'website',
    locale: 'en_US',
    url: 'https://cuzeth.com',
    siteName: 'Cuzeth',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen bg-maincolor text-text selection:bg-accent/30">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
