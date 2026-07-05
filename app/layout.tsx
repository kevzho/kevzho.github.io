/* eslint-disable @next/next/no-img-element */
import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Footer } from "@/components/site/Footer";
import { LegacyInteractions } from "@/components/site/LegacyInteractions";
import { LegacyNavbar } from "@/components/site/LegacyNavbar";
import { siteConfig } from "@/content/site";

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
    images: [{ url: "/assets/images/whl.jpg", width: 1200, height: 630, alt: "Kevin Zhou portfolio preview" }],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/assets/images/whl.jpg"]
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
  const backdropImages = ["china.jpeg", "festival.jpeg", "friends.jpeg", "lift.jpeg", "lifting.jpeg", "shanghai.jpeg", "work.jpeg"];

  return (
    <html lang="en" data-theme="monochrome" suppressHydrationWarning>
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <div className="photo-backdrop" aria-hidden="true">
          {[0, 1].map((track) => (
            <div className="photo-backdrop-track" key={track}>
              {backdropImages.map((image) => (
                <img src={`/assets/me/${image}`} alt="" key={`${track}-${image}`} />
              ))}
            </div>
          ))}
        </div>
        <LegacyNavbar />
        <main className="main-content" id="main-content">
          <div className="container">{children}</div>
        </main>
        <LegacyInteractions />
        <Footer />
      </body>
    </html>
  );
}
