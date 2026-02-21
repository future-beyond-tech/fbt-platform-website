import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ExperienceEnhancements from "@/components/layout/ExperienceEnhancements";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import { defaultMetadata } from "@/lib/seo";
import { organizationAndServiceSchema } from "@/lib/structuredData";
import type { Metadata } from "next";

export const metadata: Metadata = defaultMetadata();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-3BTYK7B86L"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-3BTYK7B86L');
          `}
        </Script>
        {/* Apollo website tracker */}
        <Script id="apollo-website-tracker" strategy="beforeInteractive">
          {`function initApollo(){var n=Math.random().toString(36).substring(7),o=document.createElement("script");
  o.src="https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache="+n,o.async=!0,o.defer=!0,
  o.onload=function(){window.trackingFunctions.onLoad({appId:"6999fbba479fe2001dec3c5f"})},
  document.head.appendChild(o)}initApollo();`}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationAndServiceSchema),
          }}
        />
      </head>

      <body className="bg-background text-foreground antialiased min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <ExperienceEnhancements />
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
