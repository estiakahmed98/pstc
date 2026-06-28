import HeroCarousel from "@/components/landing/Hero";
import MagazineSubscriptionSection from "@/components/landing/MagazineSubscriptionSection";
import OurPartnersSection from "@/components/landing/OurPartnersSection";
import PSTCGlobalReachSection from "@/components/landing/PSTCGlobalReachSection";
import PublicationsSection from "@/components/landing/PublicationsSection";
import HomePageAlt from "@/components/landing/Verient1";
import LandingPageV2 from "@/components/landing/Verient2";
import WhatWeDoSection from "@/components/landing/WhatWeDoSection";
import WhoWeAreSection from "@/components/landing/WhoWeAreSection";

export default function Home() {
  return (
    <div>
      <HeroCarousel />
      <WhoWeAreSection />
      <WhatWeDoSection />
      <PublicationsSection />
      <MagazineSubscriptionSection />
      <OurPartnersSection />
      <PSTCGlobalReachSection />
    </div>
  );
}
