import type { Metadata } from 'next';

const siteUrl = 'https://preachislam.org';

export const metadata: Metadata = {
  title: 'ইভেন্ট | ইসলাম প্রচার সমিতি',
  description: 'প্রিচ ইসলাম এসোসিয়েশনের আয়োজিত ইভেন্ট এবং কার্যক্রম। ইসলামিক সেমিনার, দাওয়াহ প্রোগ্রাম এবং সামাজিক কার্যক্রম সম্পর্কে জানুন।',
  keywords: [
    'ইসলামিক ইভেন্ট',
    'দাওয়াহ প্রোগ্রাম',
    'ইসলামিক সেমিনার',
    'মুসলিম কমিউনিটি ইভেন্ট',
    'Islamic events',
    'Dawah program',
    'Islamic seminar',
  ],
  openGraph: {
    title: 'ইভেন্ট - ইসলাম প্রচার সমিতি',
    description: 'ইসলামিক ইভেন্ট এবং কার্যক্রম সম্পর্কে জানুন',
    url: `${siteUrl}/events`,
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'ইভেন্ট - প্রিচ ইসলাম',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ইভেন্ট - ইসলাম প্রচার সমিতি',
    description: 'ইসলামিক ইভেন্ট এবং কার্যক্রম',
  },
  alternates: {
    canonical: `${siteUrl}/events`,
  },
};

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="w-full">{children}</section>;
}
