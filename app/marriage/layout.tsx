import type { Metadata } from 'next';

const siteUrl = 'https://preachislam.org';

export const metadata: Metadata = {
    title: 'বিবাহ সেবা - শীঘ্রই আসছে | ইসলাম প্রচার সমিতি',
    description: 'bi-baho.com - ইসলামিক বিবাহের জন্য একটি নিরাপদ ও বিশ্বস্ত প্ল্যাটফর্ম। শরীয়াহ অনুসরণ করে হালাল পথে জীবনসঙ্গী খুঁজুন। শীঘ্রই চালু হবে ইনশাআল্লাহ।',
    keywords: [
        'ইসলামিক বিবাহ',
        'মুসলিম ম্যাট্রিমোনি',
        'হালাল বিবাহ',
        'bi-baho.com',
        'বিবাহ ডটকম',
        'Islamic marriage',
        'Muslim matrimony',
        'Halal marriage',
    ],
    openGraph: {
        title: 'বিবাহ সেবা - শীঘ্রই আসছে',
        description: 'ইসলামিক বিবাহের জন্য একটি নিরাপদ ও বিশ্বস্ত প্ল্যাটফর্ম - bi-baho.com',
        url: `${siteUrl}/marriage`,
        images: [
            {
                url: `${siteUrl}/og-image.jpg`,
                width: 1200,
                height: 630,
                alt: 'বিবাহ - প্রিচ ইসলাম',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'বিবাহ সেবা - শীঘ্রই আসছে',
        description: 'ইসলামিক বিবাহের প্ল্যাটফর্ম - bi-baho.com',
    },
    alternates: {
        canonical: `${siteUrl}/marriage`,
    },
};

export default function MarriageLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <section className="w-full">{children}</section>;
}
