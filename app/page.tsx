import HeroCarousel from "@/components/landing/Hero";
import OurPartnersSection from "@/components/landing/OurPartnersSection";
import PublicationsSection from "@/components/landing/PublicationsSection";
import WhatWeDoSection from "@/components/landing/WhatWeDoSection";
import WhoWeAreSection from "@/components/landing/WhoWeAreSection";

export default function Home() {
  return (
    <div>
      <HeroCarousel />
      <WhoWeAreSection />
      <WhatWeDoSection />
      <PublicationsSection />
      <OurPartnersSection />
    </div>
  );
}
