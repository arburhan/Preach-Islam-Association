import Hero from "@/components/home/hero";
import { StatsSection } from "@/components/home/statsCard";


export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <Hero />
      <StatsSection />
    </section>
  );
}
