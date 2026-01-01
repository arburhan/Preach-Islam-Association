import type { Metadata } from 'next';

const siteUrl = 'https://preachislam.org';

export const metadata: Metadata = {
  title: 'প্রিচ ইসলাম এসোসিয়েশন সম্পর্কে | ইসলাম প্রচার সমিতি',
  description: 'প্রিচ ইসলাম এসোসিয়েশন একটি অলাভজনক ইসলামিক সংগঠন যা দাওয়াহ, শিক্ষা এবং সমাজসেবার মাধ্যমে মানবতার কল্যাণে নিয়োজিত। আমাদের ইতিহাস, লক্ষ্য এবং কার্যক্রম সম্পর্কে জানুন।',
  keywords: [
    'প্রিচ ইসলাম সম্পর্কে',
    'ইসলাম প্রচার সমিতি ইতিহাস',
    'ইসলামিক সংগঠন বাংলাদেশ',
    'দাওয়াহ সংস্থা',
    'মুসলিম কমিউনিটি সেবা',
    'About Preach Islam',
    'Islamic organization history',
  ],
  openGraph: {
    title: 'প্রিচ ইসলাম এসোসিয়েশন সম্পর্কে',
    description: 'আমাদের ইসলামিক সংগঠনের ইতিহাস, লক্ষ্য এবং কার্যক্রম সম্পর্কে বিস্তারিত জানুন',
    url: `${siteUrl}/about`,
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'প্রিচ ইসলাম এসোসিয়েশন',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'প্রিচ ইসলাম এসোসিয়েশন সম্পর্কে',
    description: 'আমাদের ইসলামিক সংগঠনের ইতিহাস, লক্ষ্য এবং কার্যক্রম',
  },
  alternates: {
    canonical: `${siteUrl}/about`,
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="w-full">
      {children}
    </section>
  );
}
