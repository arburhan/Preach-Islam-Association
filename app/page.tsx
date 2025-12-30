import Hero from "@/components/home/hero";
import { StatsSection } from "@/components/home/statsCard";
import { OurHistory } from "@/components/home/outHistory";
import OurMV from "@/components/home/ourMV";


export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <Hero />
      <OurMV />
      <StatsSection />
      <OurHistory />
    </section>
  );
}
