import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Poppins } from "next/font/google";
import "@/styles/globals.css";
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';

const poppins = Poppins({
  weight: ['500', '600', '800'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: {
    template: "%s | Cuzeth",
    default: "Cuzeth - Web Developer & CS Student"
  },
  alternates: {
    canonical: '/',
  },
  description: "Portfolio of Cuzeth, a Computer Science student and developer specializing in modern web applications and software solutions.",
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
    title: "Cuzeth - Web Developer & CS Student",
    description: "Portfolio of Cuzeth, a Computer Science student and developer specializing in modern web applications and software solutions.",
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
    title: "Cuzeth - Web Developer & CS Student",
    description: "Portfolio of Cuzeth, a Computer Science student and developer specializing in modern web applications and software solutions.",
    images: "/images/banner.png",
    creator: "@Cuzeth",
  },
  keywords: "Cuzeth, developer, web development, portfolio, projects, software engineering, discord bot, full stack, computer science, student developer",
  authors: [
    {
      name: "Cuzeth",
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
    { color: "#1A1A1A", media: "(prefers-color-scheme: dark)" },
    { color: "#FAF9F7", media: "(prefers-color-scheme: light)" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} font-sans`}>
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