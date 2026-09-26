import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AgeDock } from "@/components/site/AgeTracker";
import { Footer } from "@/components/site/Footer";
import { Intro } from "@/components/site/Intro";
import { SiteNav } from "@/components/site/SiteNav";
import { siteConfig } from "@/content/site";
import { introBootScript } from "@/lib/intro";

const sans = Geist({ subsets: ["latin"], variable: "--font-sans" });
const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [{ url: "/assets/collage/shanghai.jpg", alt: "Kevin Zhou" }],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/assets/collage/shanghai.jpg"]
  },
  icons: {
    icon: "/assets/images/favicon.png",
    apple: "/assets/images/favicon.png"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light dark"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: introBootScript }} />
      </head>
      <body>
        <Intro />
        <a className="skip-link" href="#main-content">
          skip to content
        </a>
        <SiteNav />
        <main id="main-content">{children}</main>
        <Footer />
        <AgeDock />
      </body>
    </html>
  );
}
