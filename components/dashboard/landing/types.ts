export type LandingStatus =
  | "DRAFT"
  | "IN_REVIEW"
  | "SCHEDULED"
  | "PUBLISHED"
  | "ARCHIVED";

export type LandingMedia = {
  id: string;
  url: string;
  altText: string | null;
  originalName?: string;
  size?: number | null;
};

export type LandingSection = {
  id: string;
  key: string;
  type: string;
  eyebrow: string | null;
  title: string;
  highlightedTitle: string | null;
  subtitle: string | null;
  description: string | null;
  primaryCtaLabel: string | null;
  primaryCtaHref: string | null;
  secondaryCtaLabel: string | null;
  secondaryCtaHref: string | null;
  sortOrder: number;
  isVisible: boolean;
  backgroundImageId: string | null;
  settings: Record<string, unknown> | null;
  backgroundImage: LandingMedia | null;
  slides: Array<{
    id: string;
    key: string;
    title: string;
    accentText: string | null;
    description: string | null;
    shortText: string | null;
    href: string | null;
    sortOrder: number;
    isVisible: boolean;
    imageId: string | null;
    image: LandingMedia | null;
  }>;
  items: Array<{
    id: string;
    key: string;
    kind: string;
    title: string;
    subtitle: string | null;
    description: string | null;
    href: string | null;
    iconKey: string | null;
    metadata: Record<string, unknown> | null;
    sortOrder: number;
    isVisible: boolean;
    imageId: string | null;
    image: LandingMedia | null;
  }>;
  metrics: Array<{
    id: string;
    key: string;
    label: string;
    value: string;
    caption: string | null;
    tone: string | null;
    sortOrder: number;
    isVisible: boolean;
  }>;
  newsSelections: Array<{
    sortOrder: number;
    isFeatured: boolean;
    newsArticle: {
      id: string;
      slug: string;
      status: LandingStatus;
      category: string | null;
      title: string;
      excerpt: string | null;
      content: string | null;
      featured: boolean;
      publishedAt: string | null;
      coverImage: LandingMedia | null;
    };
  }>;
  publicationSelections: Array<{
    sortOrder: number;
    isFeatured: boolean;
    publication: {
      id: string;
      slug: string;
      status: LandingStatus;
      category: string | null;
      title: string;
      description: string | null;
      pageCount: number | null;
      featured: boolean;
      publishedAt: string | null;
      coverImage: LandingMedia | null;
      fileAsset: LandingMedia | null;
    };
  }>;
  partnerSelections: Array<{
    sortOrder: number;
    partner: {
      id: string;
      slug: string;
      type: "LOCAL" | "GLOBAL";
      name: string;
      description: string | null;
      websiteUrl: string | null;
      isActive: boolean;
      logo: LandingMedia | null;
    };
  }>;
};

export type LandingPageData = {
  id: string;
  key: string;
  status: LandingStatus;
  version: number;
  publishedAt: string | null;
  scheduledAt: string | null;
  updatedAt: string;
  sections: LandingSection[];
};

export type SectionUpdate = Pick<
  LandingSection,
  | "eyebrow"
  | "title"
  | "highlightedTitle"
  | "subtitle"
  | "description"
  | "primaryCtaLabel"
  | "primaryCtaHref"
  | "secondaryCtaLabel"
  | "secondaryCtaHref"
  | "isVisible"
>;
