import type { Metadata } from 'next';

const siteUrl = 'https://preachislam.org';

export const metadata: Metadata = {
    title: 'স্বেচ্ছাসেবক হন | ইসলাম প্রচার সমিতি',
    description: 'প্রিচ ইসলাম এসোসিয়েশনের স্বেচ্ছাসেবক হিসেবে যোগ দিন। ইসলাম প্রচার এবং মানবসেবায় অবদান রাখুন। আপনার সময় এবং দক্ষতা দিয়ে সমাজের কল্যাণে কাজ করুন।',
    keywords: [
        'স্বেচ্ছাসেবক',
        'ইসলামিক স্বেচ্ছাসেবা',
        'দাওয়াহ কর্মী',
        'মুসলিম সমাজসেবা',
        'volunteer',
        'Islamic volunteer',
        'Dawah worker',
        'Muslim community service',
    ],
    openGraph: {
        title: 'স্বেচ্ছাসেবক হন - ইসলাম প্রচার সমিতি',
        description: 'ইসলাম প্রচার এবং মানবসেবায় অবদান রাখুন। স্বেচ্ছাসেবক হিসেবে যোগ দিন',
        url: `${siteUrl}/volunteer`,
        images: [
            {
                url: `${siteUrl}/og-image.jpg`,
                width: 1200,
                height: 630,
                alt: 'স্বেচ্ছাসেবক - প্রিচ ইসলাম',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'স্বেচ্ছাসেবক হন - ইসলাম প্রচার সমিতি',
        description: 'ইসলাম প্রচার এবং মানবসেবায় অবদান রাখুন',
    },
    alternates: {
        canonical: `${siteUrl}/volunteer`,
    },
};

export default function VolunteerLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <section className="w-full">{children}</section>;
}
