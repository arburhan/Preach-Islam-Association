import Hero from "@/components/home/hero";
import { StatsSection } from "@/components/home/statsCard";
import { OurHistory } from "@/components/home/outHistory";
import OurMV from "@/components/home/ourMV";
import OurBoundaries from "@/components/home/ourBoundaries";
import ProjectManagement from "@/components/home/projectManagement";
import DonationForm from "@/components/home/donationForm";
import Script from 'next/script';


export default function Home() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'NGO',
    name: 'Preach Islam Association',
    alternateName: 'প্রিচ ইসলাম এসোসিয়েশন',
    url: 'https://preachislam.org',
    logo: 'https://preachislam.org/logo.png',
    description:
      'একটি ইসলামিক অলাভজনক সংগঠন যা দাওয়াহ, শিক্ষা এবং সমাজসেবার মাধ্যমে মানবতার কল্যাণে কাজ করে',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+8801772-084789',
      contactType: 'customer service',
      availableLanguage: ['bn', 'en'],
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Chapai Nawabganj',
      addressCountry: 'BD',
    },
    sameAs: [
      'https://facebook.com/preachislam',
      'https://twitter.com/preachislam',
    ],
  };

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <Hero />
        <OurMV />
        <ProjectManagement />
        <DonationForm />
        <StatsSection />
        <OurBoundaries />
        <OurHistory />
      </section>
    </>
  );
}
