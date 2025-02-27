import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "@/styles/globals.css";
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';

const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: {
    template: "%s | Cuzeth",
    default: "Cuzeth"
  },
  alternates: {
    canonical: '/',
  },
  description: "Cuzeth - See my work, and what I do.",
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
    title: "Cuzeth",
    description: "Cuzeth. See my work, and what I do.",
    images: [
      {
        url: "/images/banner.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cuzeth",
    description: "Cuzeth. See my work, and what I do.",
    images: "/images/banner.png",
  },
  keywords: "Cuzeth, work, portfolio, development, programming",
  authors: [
    {
      name: "Cuzeth",
      url: "https://cuzeth.com",
    },
  ],
  manifest: "/site.webmanifest?v=3r",
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { color: "#0A0F16" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} font-sans`}>
      <body className="min-h-screen flex flex-col bg-dark-900 text-white overflow-x-hidden">
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow pt-20">
            {children}
          </main>
          <Footer />
        </div>

        {/* Background gradient elements */}
        <div className="fixed top-0 right-0 w-1/3 h-1/3 bg-primary-700/10 rounded-full filter blur-[150px] -z-10"></div>
        <div className="fixed bottom-0 left-0 w-1/3 h-1/3 bg-primary-700/5 rounded-full filter blur-[150px] -z-10"></div>
      </body>
    </html>
  );
}