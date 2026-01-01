import type { Metadata } from 'next';

const siteUrl = 'https://preachislam.org';

export const metadata: Metadata = {
  title: 'যোগাযোগ | ইসলাম প্রচার সমিতি',
  description: 'প্রিচ ইসলাম এসোসিয়েশনের সাথে যোগাযোগ করুন। আমাদের ঠিকানা, ফোন নম্বর এবং ইমেইল খুঁজুন। যেকোনো প্রশ্ন বা সহায়তার জন্য আমাদের সাথে যোগাযোগ করুন।',
  keywords: [
    'যোগাযোগ',
    'প্রিচ ইসলাম ঠিকানা',
    'ফোন নম্বর',
    'ইমেইল',
    'contact us',
    'Preach Islam contact',
    'office address',
    'email address',
  ],
  openGraph: {
    title: 'যোগাযোগ - ইসলাম প্রচার সমিতি',
    description: 'আমাদের সাথে যোগাযোগ করুন। ঠিকানা, ফোন এবং ইমেইল তথ্য',
    url: `${siteUrl}/contacts`,
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'যোগাযোগ - প্রিচ ইসলাম',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'যোগাযোগ - ইসলাম প্রচার সমিতি',
    description: 'আমাদের সাথে যোগাযোগ করুন',
  },
  alternates: {
    canonical: `${siteUrl}/contacts`,
  },
};

export default function ContactsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="w-full">{children}</section>;
}
