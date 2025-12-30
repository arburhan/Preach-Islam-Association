import Hero from "@/components/home/hero";
import { StatsSection } from "@/components/home/statsCard";
import { OurHistory } from "@/components/home/outHistory";
import OurMV from "@/components/home/ourMV";
import OurBoundaries from "@/components/home/ourBoundaries";
import ProjectManagement from "@/components/home/projectManagement";
import DonationForm from "@/components/home/donationForm";


export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <Hero />
      <OurMV />
      <ProjectManagement />
      <DonationForm />
      <StatsSection />
      <OurBoundaries />
      <OurHistory />
    </section>
  );
}
