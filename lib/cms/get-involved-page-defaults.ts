import type { CmsPageContent } from "@/lib/cms/content-page-defaults";

type EngagementPageOptions = {
  eyebrow: string;
  title: string;
  highlightedTitle: string;
  description: string;
  image: string;
  introTitle: string;
  introDescription: string;
  collectionTitle: string;
  collectionDescription: string;
  emptyMessage?: string;
  items: Array<Record<string, unknown>>;
};

function createEngagementPage(options: EngagementPageOptions): CmsPageContent {
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
        primaryCtaLabel: "Explore opportunities",
        primaryCtaHref: "#opportunities",
        secondaryCtaLabel: "Contact PSTC",
        secondaryCtaHref: "/contact-us/contact-form",
      },
      intro: {
        label: "Introduction",
        isVisible: true,
        eyebrow: "Take part",
        title: options.introTitle,
        description: options.introDescription,
        points: ["Inclusive participation", "Safe engagement", "Practical learning"],
      },
      opportunities: {
        label: "Opportunities & resources",
        isVisible: true,
        eyebrow: "Find your pathway",
        title: options.collectionTitle,
        description: options.collectionDescription,
        emptyMessage: options.emptyMessage ?? "New opportunities and resources will be published here when available.",
        items: options.items,
      },
      guidance: {
        label: "Participation guidance",
        isVisible: true,
        eyebrow: "Our commitment",
        title: "Participation built on dignity and trust.",
        description: "PSTC is committed to clear information, equitable access, safeguarding and respectful participation across every opportunity.",
        items: [
          { title: "Equal opportunity", description: "Applications and participation are considered fairly and without discrimination." },
          { title: "Safeguarding", description: "Safe conduct, protection and responsible practice guide every engagement." },
          { title: "Clear communication", description: "Approved requirements, timelines and next steps are shared transparently." },
        ],
      },
      cta: {
        label: "Contact CTA",
        isVisible: true,
        eyebrow: "Start a conversation",
        title: "Interested in working, learning or partnering with PSTC?",
        description: "Connect through our official contact channel and our team will direct your enquiry.",
        primaryCtaLabel: "Contact us",
        primaryCtaHref: "/contact-us/contact-form",
        secondaryCtaLabel: "About PSTC",
        secondaryCtaHref: "/who-we-are/about-us",
      },
    },
  };
}

export const getInvolvedDefaultContent = createEngagementPage({
  eyebrow: "Join us",
  title: "Bring your skills.",
  highlightedTitle: "Build change together.",
  description: "Explore ways to work, learn, train and engage with PSTC programmes and safeguards.",
  image: "/images/get-involved.jpg",
  introTitle: "There is more than one way to contribute.",
  introDescription: "Whether you are looking for a career opportunity, professional learning or guidance on safe practice, this is your starting point.",
  collectionTitle: "Choose how you want to engage.",
  collectionDescription: "Browse current opportunities and learning pathways.",
  items: [
    { title: "Jobs", category: "Careers", description: "Explore current vacancies and opportunities to contribute your expertise to PSTC.", image: "/images/get-involved.jpg", href: "/get-involved/jobs", ctaLabel: "View vacancies" },
    { title: "Training & Certification", category: "Learning", description: "Find training information and approved organisational policy resources.", image: "/images/skills-education-training.jpg", href: "/get-involved/training-certification", ctaLabel: "Explore training" },
  ],
});

export const jobsPageDefaultContent = createEngagementPage({
  eyebrow: "Careers at PSTC",
  title: "Use your expertise",
  highlightedTitle: "where it matters.",
  description: "Discover current opportunities to join PSTC and help advance rights, wellbeing and inclusive development.",
  image: "/images/get-involved.jpg",
  introTitle: "Join a team working alongside communities.",
  introDescription: "Vacancies are published with approved responsibilities, requirements, location, deadline and application instructions.",
  collectionTitle: "Current vacancies.",
  collectionDescription: "Review open roles and follow the application instructions provided in each announcement.",
  emptyMessage: "There are no open vacancies at this time. Please check again for future opportunities.",
  items: [],
});

export const trainingCertificationDefaultContent = createEngagementPage({
  eyebrow: "Training & certification",
  title: "Learn with purpose.",
  highlightedTitle: "Practice with confidence.",
  description: "Explore PSTC training pathways and the policies that protect quality, equity and safe participation.",
  image: "/images/skills-education-training.jpg",
  introTitle: "Learning grounded in responsible practice.",
  introDescription: "This hub connects participants and partners with approved training information and core organisational guidance.",
  collectionTitle: "Policies and learning resources.",
  collectionDescription: "Select a policy to understand PSTC's commitments and expected standards.",
  items: [
    { title: "Safeguarding Policy", category: "Protection", description: "Guidance for preventing harm and maintaining safe, accountable participation.", image: "/images/policies.webp", href: "/get-involved/training-certification/safeguarding-policy", ctaLabel: "Read policy" },
    { title: "Gender Policy", category: "Inclusion", description: "PSTC's commitment to gender equity across programmes and organisational practice.", image: "/images/gender-governance.jpeg", href: "/get-involved/training-certification/gender-policy", ctaLabel: "Read policy" },
    { title: "SHaPE Policy", category: "Standards", description: "Approved standards supporting safe, healthy and professional engagement.", image: "/images/policies.webp", href: "/get-involved/training-certification/shape-policy", ctaLabel: "Read policy" },
    { title: "HR Policy", category: "People", description: "Principles and guidance for fair, responsible people management at PSTC.", image: "/images/leadership.jpg", href: "/get-involved/training-certification/hr-policy", ctaLabel: "Read policy" },
  ],
});

function createPolicyPage(title: string, focus: string, description: string, image: string) {
  return createEngagementPage({
    eyebrow: "Organisational policy",
    title: `${title}:`,
    highlightedTitle: focus,
    description,
    image,
    introTitle: "Clear commitments translated into practice.",
    introDescription: "This page is ready for approved policy summaries, key principles, related resources and the current policy document to be managed through the CMS.",
    collectionTitle: "Policy resources.",
    collectionDescription: "Publish the current approved document, supporting guidance and relevant learning resources.",
    emptyMessage: "The approved policy document will be published here when available.",
    items: [],
  });
}

export const safeguardingPolicyDefaultContent = createPolicyPage(
  "Safeguarding Policy",
  "safety in every interaction.",
  "Understand PSTC's commitment to preventing harm, protecting people and responding responsibly to safeguarding concerns.",
  "/images/policies.webp",
);

export const genderPolicyDefaultContent = createPolicyPage(
  "Gender Policy",
  "equity in action.",
  "Explore the principles guiding gender equality, inclusion and dignity across PSTC's workplace and programmes.",
  "/images/gender-governance.jpeg",
);

export const shapePolicyDefaultContent = createPolicyPage(
  "SHaPE Policy",
  "safe and professional practice.",
  "Access approved SHaPE guidance supporting respectful, healthy and accountable engagement.",
  "/images/policies.webp",
);

export const hrPolicyDefaultContent = createPolicyPage(
  "HR Policy",
  "people treated fairly.",
  "Explore PSTC's approved principles for equitable employment, staff wellbeing, performance and professional conduct.",
  "/images/leadership.jpg",
);
