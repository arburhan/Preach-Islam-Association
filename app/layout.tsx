import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { Providers } from "./providers";
import SessionProvider from "@/components/SessionProvider";
import { ConditionalLayout } from "@/components/ConditionalLayout";
import { Toaster } from "react-hot-toast";

import { siteConfig } from "@/config/site";
import { fontSans, fontBengali } from "@/config/fonts";

const siteUrl = 'https://preachislam.org';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'ইসলাম প্রচার সমিতি',
    'Preach Islam Association',
    'ইসলামিক সংগঠন',
    'দাওয়াহ',
    'ইসলামিক দাতব্য',
    'মুসলিম সমাজসেবা',
    'বাংলাদেশ ইসলামিক সংস্থা',
    'দান',
    'স্বেচ্ছাসেবক',
    'Islamic charity Bangladesh',
    'Muslim welfare',
    'Dawah organization',
  ],
  authors: [{ name: 'Preach Islam Association' }],
  creator: 'Preach Islam Association',
  publisher: 'Preach Islam Association',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/logo.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: 'website',
    locale: 'bn_BD',
    alternateLocale: ['en_US'],
    url: siteUrl,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteUrl}/og-image.jpg`],
    creator: '@preachislam',
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: siteUrl,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="bn">
      <head />
      <body
        className={clsx(
          "min-h-screen text-foreground bg-background font-sans antialiased",
          fontSans.variable,
          fontBengali.variable,
        )}
      >
        <SessionProvider>
          <Providers>
            <ConditionalLayout>
              {children}
            </ConditionalLayout>
          </Providers>
        </SessionProvider>
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#333',
              color: '#fff',
            },
            success: {
              duration: 3000,
              iconTheme: {
                primary: '#10b981',
                secondary: '#fff',
              },
            },
            error: {
              duration: 4000,
              iconTheme: {
                primary: '#ef4444',
                secondary: '#fff',
              },
            },
          }}
        />
      </body>
    </html>
  );
}
