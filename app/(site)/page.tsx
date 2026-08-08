import HeroCarousel from "@/components/landing/Hero";
import LatestNewsSection from "@/components/landing/LatestNewsSection";
import MagazineSubscriptionSection from "@/components/landing/MagazineSubscriptionSection";
import NaYoNSection from "@/components/landing/NaYoNSection";
import OurPartnersSection from "@/components/landing/OurPartnersSection";
import PSTCGlobalReachSection from "@/components/landing/PSTCGlobalReachSection";
import PublicationsSection from "@/components/landing/PublicationsSection";
import WhatWeDoSection from "@/components/landing/WhatWeDoSection";
import WhoWeAreSection from "@/components/landing/WhoWeAreSection";

export default function Home() {
  return (
    <div>
      <HeroCarousel />
      <WhoWeAreSection />
      <WhatWeDoSection />
      <NaYoNSection />
      <PublicationsSection />
      <MagazineSubscriptionSection />
      <LatestNewsSection />
      <OurPartnersSection />
      <PSTCGlobalReachSection />
    </div>
  );
}
