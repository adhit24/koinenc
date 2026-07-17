import { Hero } from "@/components/sections/Hero";
import { HighlightsStrip } from "@/components/sections/HighlightsStrip";
import { ValueStrip } from "@/components/sections/ValueStrip";
import { BusinessBand } from "@/components/sections/BusinessBand";
import { WhyUs } from "@/components/sections/WhyUs";
import { Capabilities } from "@/components/sections/Capabilities";
import { TrackRecord } from "@/components/sections/TrackRecord";
import { Partners } from "@/components/sections/Partners";
import { CtaBand } from "@/components/sections/CtaBand";

export default function Home() {
  return (
    <main>
      <Hero />
      <HighlightsStrip />
      <ValueStrip />
      <BusinessBand />
      <WhyUs />
      <Capabilities />
      <TrackRecord />
      <Partners />
      <CtaBand />
    </main>
  );
}
