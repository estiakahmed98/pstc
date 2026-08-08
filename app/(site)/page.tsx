import HeroCarousel from "@/components/landing/Hero";
import LatestNewsSection from "@/components/landing/LatestNewsSection";
import MagazineSubscriptionSection from "@/components/landing/MagazineSubscriptionSection";
import NaYoNSection from "@/components/landing/NaYoNSection";
import OurPartnersSection from "@/components/landing/OurPartnersSection";
import PSTCGlobalReachSection from "@/components/landing/PSTCGlobalReachSection";
import PublicationsSection from "@/components/landing/PublicationsSection";
import type { Publication } from "@/components/landing/PublicationsSection";
import WhatWeDoSection from "@/components/landing/WhatWeDoSection";
import WhoWeAreSection, {
  type WhoWeAreItemData,
} from "@/components/landing/WhoWeAreSection";
import { getPublicLandingPage } from "@/lib/services/landing.service";

export const dynamic = "force-dynamic";

const fallbackSections = [
  "HERO",
  "WHO_WE_ARE",
  "WHAT_WE_DO",
  "NAYON",
  "PUBLICATIONS",
  "MAGAZINE_SUBSCRIPTION",
  "LATEST_NEWS",
  "PARTNERS",
  "GLOBAL_REACH",
] as const;

type PublicLanding = NonNullable<
  Awaited<ReturnType<typeof getPublicLandingPage>>
>;
type PublicLandingSection = PublicLanding["sections"][number];

function getWhoItems(section?: PublicLandingSection): WhoWeAreItemData[] | undefined {
  if (!section?.items.length) return undefined;

  return section.items
    .filter((item) => item.isVisible)
    .map((item, index) => {
      const metadata =
        item.metadata &&
        typeof item.metadata === "object" &&
        !Array.isArray(item.metadata)
          ? (item.metadata as Record<string, unknown>)
          : null;

      return {
        number:
          typeof metadata?.number === "string"
            ? metadata.number
            : String(index + 1).padStart(2, "0"),
        title: item.title,
        href: item.href ?? "#",
        description: item.description ?? "",
        image: item.image?.url ?? "/images/about-us.jpeg",
        iconKey: item.iconKey,
      };
    });
}

function getPublications(section?: PublicLandingSection): Publication[] | undefined {
  if (!section?.publicationSelections.length) return undefined;

  return section.publicationSelections.map(({ publication }) => ({
    id: publication.slug,
    title: publication.title,
    description: publication.description ?? "",
    category: publication.category ?? "Publication",
    coverImage: publication.coverImage?.url ?? "/publications/publication Cover 1.png",
    publishedAt: publication.publishedAt?.toISOString() ?? "",
    pages: publication.pageCount ?? 0,
    downloadUrl: publication.fileAsset?.url ?? null,
    featured: publication.featured,
  }));
}

function renderLandingSection(type: string, section?: PublicLandingSection) {
  switch (type) {
    case "HERO":
      return <HeroCarousel />;
    case "WHO_WE_ARE":
      return <WhoWeAreSection items={getWhoItems(section)} />;
    case "WHAT_WE_DO":
      return <WhatWeDoSection />;
    case "NAYON":
      return <NaYoNSection />;
    case "PUBLICATIONS":
      return (
        <PublicationsSection
          publications={getPublications(section)}
          title={section?.title}
          subtitle={section?.description ?? undefined}
        />
      );
    case "MAGAZINE_SUBSCRIPTION":
      return <MagazineSubscriptionSection />;
    case "LATEST_NEWS":
      return <LatestNewsSection />;
    case "PARTNERS":
      return <OurPartnersSection />;
    case "GLOBAL_REACH":
      return <PSTCGlobalReachSection />;
    default:
      return null;
  }
}

export default async function Home() {
  const landing = await getPublicLandingPage().catch(() => null);

  return (
    <div>
      {landing?.sections.length
        ? landing.sections.map((section) => (
            <div key={section.id}>
              {renderLandingSection(section.type, section)}
            </div>
          ))
        : fallbackSections.map((type) => (
            <div key={type}>{renderLandingSection(type)}</div>
          ))}
    </div>
  );
}
