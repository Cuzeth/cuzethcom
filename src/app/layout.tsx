import type { Metadata, Viewport } from "next";
import { Space_Grotesk } from 'next/font/google';
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import "@/styles/globals.css";
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';

const inter = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    template: "%s | Cuzeth",
    default: "Cuzeth — Software Engineer"
  },
  alternates: {
    canonical: '/',
  },
  description: "Cuzeth — software engineer building fast, private, well-crafted software.",
  applicationName: "Cuzeth",
  metadataBase: new URL("https://cuzeth.com"),
  icons: [
    { rel: "icon", url: "/favicon.ico?v=3r" },
    { rel: "apple-touch-icon", url: "/apple-touch-icon.png?v=3r", sizes: "180x180" },
    { rel: "icon", url: "/favicon-32x32.png?v=3r", type: "image/png", sizes: "32x32" },
    { rel: "icon", url: "/favicon-16x16.png?v=3r", type: "image/png", sizes: "16x16" },
    { rel: "manifest", url: "/site.webmanifest?v=3r" },
    { rel: "mask-icon", url: "/safari-pinned-tab.svg?v=3r", color: "#dc1616" },
  ],
  openGraph: {
    siteName: "Cuzeth",
    type: "website",
    url: "https://cuzeth.com/",
    title: "Cuzeth — Software Engineer",
    description: "Portfolio of Jaafar Abdeen — software engineer building fast, private, well-crafted software.",
    images: [
      {
        url: "/images/banner.png",
        width: 1200,
        height: 630,
        alt: "Cuzeth Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cuzeth — Software Engineer",
    description: "Portfolio of Jaafar Abdeen — software engineer building fast, private, well-crafted software.",
    images: "/images/banner.png",
    creator: "@Cuzeth",
  },
  keywords: "Jaafar Abdeen, Cuzeth, developer, web development, portfolio, software engineering, iOS, Swift, full stack, computer science",
  authors: [
    {
      name: "Jaafar Abdeen",
      url: "https://cuzeth.com",
    },
  ],
  manifest: "/site.webmanifest?v=3r",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { color: "#080808", media: "(prefers-color-scheme: dark)" },
    { color: "#FAF9F7", media: "(prefers-color-scheme: light)" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <Analytics />
      <SpeedInsights />
      <body>
        <div className="root">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
