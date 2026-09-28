import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";
import { siteConfig } from "@/config/site";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | Construction, Architecture & Interiors`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "V Construction & Design Studio",
    "Architecture Studio Madurai",
    "Interior Design",
    "Luxury Villa Construction",
    "Commercial Building Construction",
    "Renovation & Remodeling",
    "Project Management",
  ],
  authors: [{ name: siteConfig.founder.name }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: siteConfig.name }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col antialiased bg-white text-[#26384A]">
        {/* LocalBusiness JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "GeneralContractor",
              name: siteConfig.name,
              description: siteConfig.description,
              telephone: siteConfig.contact.phone,
              email: siteConfig.contact.email,
              address: {
                "@type": "PostalAddress",
                streetAddress: "124 Architectural Avenue, KK Nagar",
                addressLocality: "Madurai",
                addressRegion: "Tamil Nadu",
                postalCode: "625020",
                addressCountry: "IN",
              },
              url: siteConfig.url,
              founder: siteConfig.founder.name,
            }),
          }}
        />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
