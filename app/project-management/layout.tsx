import type { Metadata } from 'next';

const siteUrl = 'https://preachislam.org';

export const metadata: Metadata = {
    title: 'প্রকল্প ব্যবস্থাপনা | ইসলাম প্রচার সমিতি',
    description: 'প্রিচ ইসলাম এসোসিয়েশনের চলমান এবং সম্পন্ন প্রকল্প সম্পর্কে জানুন। সামাজিক কল্যাণ এবং ইসলাম প্রচারের বিভিন্ন প্রকল্প দেখুন।',
    keywords: [
        'প্রকল্প ব্যবস্থাপনা',
        'ইসলামিক প্রকল্প',
        'সামাজিক কল্যাণ',
        'Project Management',
        'Islamic projects',
        'Social welfare projects',
    ],
    openGraph: {
        title: 'প্রকল্প ব্যবস্থাপনা - ইসলাম প্রচার সমিতি',
        description: 'চলমান এবং সম্পন্ন প্রকল্প সম্পর্কে জানুন',
        url: `${siteUrl}/project-management`,
        images: [
            {
                url: `${siteUrl}/og-image.jpg`,
                width: 1200,
                height: 630,
                alt: 'প্রকল্প - প্রিচ ইসলাম',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'প্রকল্প ব্যবস্থাপনা - ইসলাম প্রচার সমিতি',
        description: 'চলমান এবং সম্পন্ন প্রকল্প',
    },
    alternates: {
        canonical: `${siteUrl}/project-management`,
    },
};

export default function ProjectManagementLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <section className="w-full">{children}</section>;
}
