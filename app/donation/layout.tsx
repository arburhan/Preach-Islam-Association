import type { Metadata } from 'next';

const siteUrl = 'https://preachislam.org';

export const metadata: Metadata = {
  title: 'দান করুন | ইসলাম প্রচার সমিতি',
  description: 'আল্লাহর রাস্তায় দান করুন। প্রিচ ইসলাম এসোসিয়েশনের মাধ্যমে সদকা, জাকাত এবং সাধারণ দান করুন। আপনার দান মানবতার সেবায় ব্যয় হবে।',
  keywords: [
    'ইসলামিক দান',
    'সদকা',
    'জাকাত',
    'দাতব্য সংস্থা',
    'মানবতার সেবা',
    'অনলাইন দান',
    'Islamic donation',
    'Sadaqah',
    'Zakat',
    'Muslim charity',
  ],
  openGraph: {
    title: 'দান করুন - ইসলাম প্রচার সমিতি',
    description: 'আপনার দান মানবতার সেবায় ব্যয় করুন। সদকা, জাকাত এবং সাধারণ দান করুন',
    url: `${siteUrl}/donation`,
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'দান করুন - প্রিচ ইসলাম',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'দান করুন - ইসলাম প্রচার সমিতি',
    description: 'আপনার দান মানবতার সেবায় ব্যয় করুন',
  },
  alternates: {
    canonical: `${siteUrl}/donation`,
  },
};

export default function DonationLayout({
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
