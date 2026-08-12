import type { CmsPageContent } from "@/lib/cms/content-page-defaults";

type ImpactPageOptions = {
  eyebrow: string;
  title: string;
  highlightedTitle: string;
  description: string;
  image: string;
  introTitle: string;
  introDescription: string;
  resourcesTitle: string;
  resourcesDescription: string;
  resources: Array<Record<string, unknown>>;
};

function createImpactPage(options: ImpactPageOptions): CmsPageContent {
  return {
    sections: {
      hero: {
        label: "Hero & overview",
        isVisible: true,
        eyebrow: options.eyebrow,
        title: options.title,
        highlightedTitle: options.highlightedTitle,
        description: options.description,
        image: options.image,
        primaryCtaLabel: "Explore resources",
        primaryCtaHref: "#impact-resources",
        secondaryCtaLabel: "Contact PSTC",
        secondaryCtaHref: "/contact-us/contact-form",
      },
      intro: {
        label: "Introduction",
        isVisible: true,
        eyebrow: "Knowledge for action",
        title: options.introTitle,
        description: options.introDescription,
        points: [
          "Evidence-informed learning",
          "Transparent documentation",
          "Knowledge shared for wider impact",
        ],
      },
      resources: {
        label: "Resources",
        isVisible: true,
        eyebrow: "Explore the collection",
        title: options.resourcesTitle,
        description: options.resourcesDescription,
        emptyMessage: "New resources will be published here as they become available.",
        items: options.resources,
      },
      standards: {
        label: "Publishing principles",
        isVisible: true,
        eyebrow: "Our publishing approach",
        title: "Clear, useful and accountable.",
        description:
          "PSTC shares approved knowledge products and updates so communities, partners and practitioners can understand progress and learn from our work.",
        items: [
          { title: "Accessible", description: "Resources are organised so readers can quickly find the information they need." },
          { title: "Evidence-led", description: "Claims and learning are grounded in programme evidence and responsible review." },
          { title: "Accountable", description: "Reports support transparency to communities, partners and stakeholders." },
        ],
      },
      cta: {
        label: "Contact CTA",
        isVisible: true,
        eyebrow: "Need more information?",
        title: "Connect with PSTC for publications, reports and media enquiries.",
        description: "Our team can help you locate an approved resource or direct your enquiry to the right programme.",
        primaryCtaLabel: "Contact us",
        primaryCtaHref: "/contact-us/contact-form",
        secondaryCtaLabel: "Explore all impact",
        secondaryCtaHref: "/our-impact",
      },
    },
  };
}

export const ourImpactDefaultContent = createImpactPage({
  eyebrow: "Evidence & learning",
  title: "Our work creates",
  highlightedTitle: "impact that can be shared.",
  description: "Explore PSTC publications, reports, research, events and media stories documenting progress with communities.",
  image: "/images/our-impact.jpg",
  introTitle: "Evidence that connects action with learning.",
  introDescription: "Our impact library brings together organisational reporting, research, publications and stories that make progress visible and learning useful.",
  resourcesTitle: "Choose an impact pathway.",
  resourcesDescription: "Browse the collection by publication, report, research or media update.",
  resources: [
    { title: "Publications", category: "Knowledge", description: "Guides, magazines and knowledge products developed through PSTC's work.", image: "/publications/publication Cover 1.png", href: "/our-impact/publications", ctaLabel: "Browse publications" },
    { title: "Reports", category: "Accountability", description: "Annual reports, audit reports and research documenting results and learning.", image: "/images/our-impact.jpg", href: "/our-impact/reports", ctaLabel: "Browse reports" },
    { title: "Events & Media", category: "Updates", description: "Stories, events and media updates from PSTC programmes and partnerships.", image: "/assets/Community mobilization for rights.jpg", href: "/our-impact/events-media", ctaLabel: "View updates" },
  ],
});

export const publicationsImpactDefaultContent = createImpactPage({
  eyebrow: "PSTC publications",
  title: "Ideas and learning",
  highlightedTitle: "made accessible.",
  description: "Discover PSTC magazines, guides and knowledge products created to inform communities, practitioners and partners.",
  image: "/publications/publication Cover 1.png",
  introTitle: "Resources designed to inform and inspire.",
  introDescription: "Our publications translate programme experience and community perspectives into practical, accessible knowledge.",
  resourcesTitle: "Publication collections.",
  resourcesDescription: "Explore current and archived PSTC publication series.",
  resources: [
    { title: "Projanmo Kotha", category: "Magazine", description: "Stories, perspectives and learning focused on generations, communities and positive change.", image: "/publications/book-projonmo-bodle-bodle-jay.jpg", href: "/our-impact/publications/projanmo-kotha", ctaLabel: "Explore the series" },
  ],
});

export const reportsImpactDefaultContent = createImpactPage({
  eyebrow: "Reports & evidence",
  title: "Progress documented.",
  highlightedTitle: "Learning made useful.",
  description: "Access PSTC annual reports, independent audit reports and research resources.",
  image: "/images/our-impact.jpg",
  introTitle: "Transparent reporting strengthens trust.",
  introDescription: "Our reporting collection supports organisational accountability while sharing evidence that can strengthen future programmes and partnerships.",
  resourcesTitle: "Explore our reports.",
  resourcesDescription: "Select a report collection to find approved documents and updates.",
  resources: [
    { title: "Annual Report", category: "Organisational", description: "Year-by-year programme highlights, organisational progress and key results.", image: "/images/our-impact.jpg", href: "/our-impact/reports/annual-report", ctaLabel: "View annual reports" },
    { title: "Audit Report", category: "Financial", description: "Independent audit resources supporting transparency and responsible stewardship.", image: "/images/governance.avif", href: "/our-impact/reports/audit-report", ctaLabel: "View audit reports" },
    { title: "Research", category: "Evidence", description: "Studies, briefs and learning products that inform programmes and practice.", image: "/images/strategic-plan.jpg", href: "/our-impact/reports/research", ctaLabel: "Explore research" },
  ],
});

export const projanmoKothaDefaultContent = createImpactPage({
  eyebrow: "Publication series",
  title: "Projanmo Kotha:",
  highlightedTitle: "stories across generations.",
  description: "Explore issues of Projanmo Kotha and the voices, experiences and ideas they bring together.",
  image: "/publications/book-projonmo-bodle-bodle-jay.jpg",
  introTitle: "A space for stories, ideas and dialogue.",
  introDescription: "This collection is ready for approved issues, cover images, summaries and downloadable files to be managed from the PSTC CMS.",
  resourcesTitle: "Published issues.",
  resourcesDescription: "Add each issue from the dashboard with its cover, summary, year and document link.",
  resources: [
    { title: "Projanmo Kotha", year: "Current issue", category: "Magazine", description: "The latest approved issue will be available here.", image: "/publications/book-projonmo-bodle-bodle-jay.jpg", href: "#", ctaLabel: "Coming soon" },
  ],
});

export const annualReportDefaultContent = createImpactPage({
  eyebrow: "Organisational reporting",
  title: "Annual reports:",
  highlightedTitle: "a year in perspective.",
  description: "Explore PSTC's annual progress, programme highlights, partnerships and organisational learning.",
  image: "/images/our-impact.jpg",
  introTitle: "A transparent view of progress and priorities.",
  introDescription: "Annual reports bring together approved results and reflections from across PSTC's programmes and institutional work.",
  resourcesTitle: "Annual report archive.",
  resourcesDescription: "Publish annual reports with a cover, reporting year, summary and document link.",
  resources: [],
});

export const auditReportDefaultContent = createImpactPage({
  eyebrow: "Financial accountability",
  title: "Audit reports:",
  highlightedTitle: "stewardship in focus.",
  description: "Access approved independent audit reports and financial accountability documents from PSTC.",
  image: "/images/governance.avif",
  introTitle: "Accountability supports lasting trust.",
  introDescription: "This archive provides a clear home for approved audit documents and their reporting periods.",
  resourcesTitle: "Audit report archive.",
  resourcesDescription: "Publish each approved audit report with its period, summary and document link.",
  resources: [],
});

export const researchDefaultContent = createImpactPage({
  eyebrow: "Research & learning",
  title: "Evidence for",
  highlightedTitle: "better decisions.",
  description: "Explore PSTC research, studies, briefs and learning products developed with communities and partners.",
  image: "/images/strategic-plan.jpg",
  introTitle: "Turning inquiry into practical insight.",
  introDescription: "Research helps PSTC understand needs, test approaches, strengthen programmes and contribute to wider sector learning.",
  resourcesTitle: "Research library.",
  resourcesDescription: "Publish studies and briefs with authorship, year, topic, summary and document link.",
  resources: [],
});

export const eventsMediaDefaultContent = createImpactPage({
  eyebrow: "Events & media",
  title: "Moments, stories and",
  highlightedTitle: "voices from our work.",
  description: "Follow PSTC events, programme milestones, media stories and community-centred updates.",
  image: "/assets/Community mobilization for rights.jpg",
  introTitle: "Stay connected to work in motion.",
  introDescription: "This page brings together approved event notices, recaps, press resources and media coverage from across PSTC.",
  resourcesTitle: "Latest events and media.",
  resourcesDescription: "Publish updates with a date, category, image, summary and destination link.",
  resources: [],
});
