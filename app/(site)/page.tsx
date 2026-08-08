import HeroCarousel, { type HeroSlideData } from "@/components/landing/Hero";
import LatestNewsSection, { type NewsItem } from "@/components/landing/LatestNewsSection";
import MagazineSubscriptionSection from "@/components/landing/MagazineSubscriptionSection";
import NaYoNSection from "@/components/landing/NaYoNSection";
import OurPartnersSection, { type Partner } from "@/components/landing/OurPartnersSection";
import PSTCGlobalReachSection, { type ReachMetric } from "@/components/landing/PSTCGlobalReachSection";
import PublicationsSection from "@/components/landing/PublicationsSection";
import type { Publication } from "@/components/landing/PublicationsSection";
import WhatWeDoSection from "@/components/landing/WhatWeDoSection";
import WhoWeAreSection, {
  type WhoWeAreItemData,
} from "@/components/landing/WhoWeAreSection";
import { auth } from "@/auth";
import {
  getLandingPreviewPage,
  getPublicLandingPage,
} from "@/lib/services/landing.service";

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
  if (!section) return undefined;

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
  if (!section) return undefined;

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

function getHeroSlides(section?: PublicLandingSection): HeroSlideData[] | undefined {
  if (!section) return undefined;
  return section.slides.map((slide) => ({
    title: slide.title,
    italic: slide.accentText ?? "",
    description: slide.description ?? "",
    short: slide.shortText ?? slide.title,
    image: slide.image?.url ?? "/hero/hero%25201.webp",
    href: slide.href ?? "#",
  }));
}

function getNewsItems(section?: PublicLandingSection): NewsItem[] | undefined {
  if (!section) return undefined;
  return section.newsSelections.map(({ newsArticle }) => ({
    id: newsArticle.slug,
    title: newsArticle.title,
    description: newsArticle.excerpt ?? "",
    category: newsArticle.category ?? "News",
    date: newsArticle.publishedAt?.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }) ?? "",
    image: newsArticle.coverImage?.url ?? "/images/community-mobilization-program.avif",
    href: `/news/${newsArticle.slug}`,
  }));
}

function getPartners(section?: PublicLandingSection): Partner[] | undefined {
  if (!section) return undefined;
  return section.partnerSelections.map(({ partner }) => ({
    name: partner.name,
    image: partner.logo?.url ?? "/pstc_logo.png",
    group: partner.type,
  }));
}

function getReachMetrics(section?: PublicLandingSection): ReachMetric[] | undefined {
  if (!section) return undefined;
  return section.metrics.map((metric) => ({
    value: metric.value,
    label: metric.label,
    tone: metric.tone === "secondary" ? "secondary" : "primary",
  }));
}

function getAutoplayMs(section?: PublicLandingSection) {
  const settings = section?.settings;
  if (!settings || typeof settings !== "object" || Array.isArray(settings)) return undefined;
  const value = (settings as Record<string, unknown>).autoplayMs;
  return typeof value === "number" && value >= 1000 ? value : undefined;
}

function renderLandingSection(type: string, section?: PublicLandingSection) {
  switch (type) {
    case "HERO":
      return <HeroCarousel slides={getHeroSlides(section)} autoplayMs={getAutoplayMs(section)} />;
    case "WHO_WE_ARE":
      return <WhoWeAreSection items={getWhoItems(section)} />;
    case "WHAT_WE_DO":
      return <WhatWeDoSection title={section?.title} description={section?.description ?? undefined} backgroundImage={section?.backgroundImage?.url} />;
    case "NAYON":
      return <NaYoNSection title={section?.title} description={section?.description ?? undefined} image={section?.backgroundImage?.url} />;
    case "PUBLICATIONS":
      return (
        <PublicationsSection
          publications={getPublications(section)}
          title={section?.title}
          subtitle={section?.description ?? undefined}
        />
      );
    case "MAGAZINE_SUBSCRIPTION":
      return <MagazineSubscriptionSection title={section?.title} description={section?.description ?? undefined} />;
    case "LATEST_NEWS":
      return <LatestNewsSection items={getNewsItems(section)} title={section?.title} description={section?.description ?? undefined} />;
    case "PARTNERS":
      return <OurPartnersSection partners={getPartners(section)} title={section?.title} description={section?.description ?? undefined} />;
    case "GLOBAL_REACH":
      return <PSTCGlobalReachSection title={section?.title} description={section?.description ?? undefined} metrics={getReachMetrics(section)} />;
    default:
      return null;
  }
}

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ preview?: string }>;
}) {
  const { preview } = await searchParams;
  const session = preview === "landing" ? await auth() : null;
  const canPreview = Boolean(
    session?.user &&
      ["super_admin", "admin", "editor", "program_manager"].includes(
        session.user.role,
      ),
  );
  const landing = await (canPreview
    ? getLandingPreviewPage()
    : getPublicLandingPage()
  ).catch(() => null);

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
