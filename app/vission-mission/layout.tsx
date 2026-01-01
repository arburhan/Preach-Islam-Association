import type { Metadata } from 'next';

const siteUrl = 'https://preachislam.org';

export const metadata: Metadata = {
    title: 'ভিশন ও মিশন | ইসলাম প্রচার সমিতি',
    description: 'প্রিচ ইসলাম এসোসিয়েশনের দৃষ্টিভঙ্গি এবং লক্ষ্য। ইসলাম প্রচার, শিক্ষা এবং সমাজসেবায় আমাদের উদ্দেশ্য এবং পরিকল্পনা জানুন।',
    keywords: [
        'ভিশন মিশন',
        'ইসলামিক সংগঠন লক্ষ্য',
        'দাওয়াহ উদ্দেশ্য',
        'Vision Mission',
        'Islamic organization goals',
    ],
    openGraph: {
        title: 'ভিশন ও মিশন - ইসলাম প্রচার সমিতি',
        description: 'আমাদের দৃষ্টিভঙ্গি, লক্ষ্য এবং পরিকল্পনা',
        url: `${siteUrl}/vission-mission`,
        images: [
            {
                url: `${siteUrl}/og-image.jpg`,
                width: 1200,
                height: 630,
                alt: 'ভিশন ও মিশন - প্রিচ ইসলাম',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'ভিশন ও মিশন - ইসলাম প্রচার সমিতি',
        description: 'আমাদের দৃষ্টিভঙ্গি এবং লক্ষ্য',
    },
    alternates: {
        canonical: `${siteUrl}/vission-mission`,
    },
};

export default function VissionMissionLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <section className="w-full">{children}</section>;
}
