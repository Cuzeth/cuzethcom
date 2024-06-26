import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "../styles/globals.css";
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const poppins = Poppins({
  weight: ['500', '600', '800'],
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
    { rel: "icon", url: "/favicon.ico?v=0" },
    { rel: "apple-touch-icon", url: "/apple-touch-icon.png?v=0", sizes: "180x180" },
    { rel: "icon", url: "/favicon-32x32.png?v=0", type: "image/png", sizes: "32x32" },
    { rel: "icon", url: "/favicon-16x16.png?v=0", type: "image/png", sizes: "16x16" },
    { rel: "manifest", url: "/site.webmanifest?v=1rmni3" },
    { rel: "mask-icon", url: "/safari-pinned-tab.svg?v=0", color: "#dc1616" },
  ],
  openGraph: {
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
  keywords: "Cuzeth, work, portfolio",
  authors: [
    {
      name: "Cuzeth",
      url: "https://cuzeth.com",
    },
  ],
  manifest: "/site.webmanifest?v=1rnfi3",
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFFFFF" },
    { media: "(prefers-color-scheme: dark)", color: "#0A1016" },
    { color: "#FF0000" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} font-sans`}>
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