import { PrismaClient, type LandingItemKind } from "prisma-client-generated";
import { hash } from "bcryptjs";
import {
  governanceDefaultContent,
  leadershipDefaultContent,
  missionVisionValuesDefaultContent,
  policiesDefaultContent,
  organogramDefaultContent,
  whereWeWorkDefaultContent,
  aboutUsDefaultContent,
  strategicPlanDefaultContent,
  populationHealthNutritionDefaultContent,
  youthAdolescentDevelopmentDefaultContent,
  genderGovernanceDefaultContent,
  climateChangeAdaptationDefaultContent,
  skillsEducationTrainingDefaultContent,
} from "../lib/cms/content-page-defaults";

const prisma = new PrismaClient();

const landingSections = [
  {
    key: "hero",
    type: "HERO" as const,
    title: "Building an inclusive society for a healthier future",
    description: "PSTC's primary homepage carousel.",
    settings: { autoplayMs: 3000 },
  },
  {
    key: "who-we-are",
    type: "WHO_WE_ARE" as const,
    eyebrow: "Who We Are",
    title: "A legacy of care,",
    highlightedTitle: "rights and community impact.",
    description:
      "PSTC is a non-government, not-for-profit voluntary organization working to improve the quality of life of poor and socially disadvantaged people. Its journey is rooted in FPSTC, formed in 1978, and continues through national registration, public-sector affiliation, and IPPF membership.",
    primaryCtaLabel: "Explore PSTC",
    primaryCtaHref: "/who-we-are/about-us",
    secondaryCtaLabel: "Strategic Plan",
    secondaryCtaHref: "/who-we-are/strategic-plan",
  },
  {
    key: "what-we-do",
    type: "WHAT_WE_DO" as const,
    title: "Our Work Areas",
    description:
      "PSTC implements clinic and community based health service delivery, child and adolescent development, WASH, advocacy, research, training, disaster preparedness, BCC activities and community capacity building programs.",
  },
  {
    key: "nayon",
    type: "NAYON" as const,
    title: "National Youth Network",
    highlightedTitle: "Youth",
    description:
      "Shape the future instead of watching it happen. NaYoN invites Bangladeshi youth aged 15–24 to learn, lead, and create lasting community impact with PSTC.",
  },
  {
    key: "publications",
    type: "PUBLICATIONS" as const,
    title: "Publications",
    description:
      "Featured and recent publications selected from the publication library.",
    settings: { sourceMode: "manual", limit: 5 },
  },
  {
    key: "magazine-subscription",
    type: "MAGAZINE_SUBSCRIPTION" as const,
    title: "PROJANMO Kotha",
    description: "Subscribe once and receive PSTC's monthly magazine as a soft copy in your inbox — field stories, youth voices, and community impact from across Bangladesh.",
  },
  {
    key: "latest-news",
    type: "LATEST_NEWS" as const,
    title: "Latest News & Stories",
    description: "Selected stories and institutional updates.",
    settings: { sourceMode: "manual", limit: 5 },
  },
  {
    key: "partners",
    type: "PARTNERS" as const,
    title: "Together For Greater Impact",
    description: "Bangladeshi institutions and global development partners.",
  },
  {
    key: "global-reach",
    type: "GLOBAL_REACH" as const,
    title: "PSTC's operational footprint across Bangladesh",
    description:
      "District coverage, offices, clinics, and workforce statistics.",
  },
];

const heroSlides = [
  [
    "care-for-community",
    "Care for",
    "Community.",
    "Delivering health, rights, skills, and inclusive services across Bangladesh.",
    "Care for every community",
    "/hero/hero%25201.webp",
    "/what-we-do",
  ],
  [
    "services-transform",
    "Services That",
    "Transform.",
    "Advancing health, nutrition, youth, climate resilience, and workforce skills.",
    "Impact through services",
    "/hero/hero%25202.avif",
    "/what-we-do/thematic-areas",
  ],
  [
    "youth-tomorrow",
    "Youth Shape",
    "Tomorrow.",
    "Empowering young people through leadership, learning, advocacy, and innovation.",
    "Youth leading tomorrow",
    "/hero/hero%25203.jpg",
    "/ucon",
  ],
  [
    "evidence-inspires",
    "Evidence That",
    "Inspires.",
    "Explore publications, reports, research, events, and stories of measurable impact.",
    "Stories of real impact",
    "/hero/hero%25204.jpeg",
    "/our-impact",
  ],
  [
    "partners-progress",
    "Partners for",
    "Progress.",
    "Collaborating to expand opportunities through training, innovation, and community action.",
    "Partnerships create change",
    "/hero/hero%25205.jpg",
    "/get-involved",
  ],
] as const;

const whoWeAreItems = [
  [
    "governance",
    "01",
    "Governance",
    "/who-we-are/governance",
    "Transparent oversight, accountability, and institutional decision-making that guide PSTC's organizational direction.",
    "/images/governance.avif",
    "Landmark",
  ],
  [
    "leadership",
    "02",
    "Leadership",
    "/who-we-are/leadership",
    "Meet the people leading PSTC's mission, programs, partnerships, institutional growth, and community impact.",
    "/images/leadership.jpg",
    "UsersRound",
  ],
  [
    "mission-vision-values",
    "03",
    "Mission, Vision & Values",
    "/who-we-are/mission-vision-values",
    "The principles that shape PSTC's work for dignity, rights, health, inclusion, and social transformation.",
    "/images/mission-vision-values.jpg",
    "ShieldCheck",
  ],
  [
    "policies",
    "04",
    "Policies",
    "/who-we-are/policies",
    "Safeguarding, ethical standards, internal systems, and organizational policies that protect people and programs.",
    "/images/policies.webp",
    "FileCheck2",
  ],
  [
    "organogram",
    "05",
    "Organogram",
    "/who-we-are/organogram",
    "Understand PSTC's structure, departments, reporting lines, and operational flow across the organization.",
    "/images/organogram.avif",
    "Network",
  ],
  [
    "where-we-work",
    "06",
    "Where We Work",
    "/who-we-are/where-we-work",
    "Explore PSTC's geographical presence, program coverage, and community-level service areas.",
    "/images/where-we-work.jpg",
    "Globe2",
  ],
  [
    "about-us",
    "07",
    "About Us",
    "/who-we-are/about-us",
    "Learn about PSTC's journey, FPSTC roots, identity, affiliation, and national development role.",
    "/images/about-us.jpeg",
    "Building2",
  ],
  [
    "strategic-plan",
    "08",
    "Strategic Plan",
    "/who-we-are/strategic-plan",
    "See PSTC's strategic direction for organizational growth, digital transformation, and measurable impact.",
    "/images/strategic-plan.jpg",
    "ScrollText",
  ],
] as const;

type StructuredSeedItem = {
  key: string;
  kind: LandingItemKind;
  title: string;
  subtitle?: string;
  description?: string;
  href?: string;
  iconKey?: string;
  image?: string;
  details?: { items: string[] };
  metadata?: Record<string, string | boolean>;
};

const structuredLandingItems: Record<string, StructuredSeedItem[]> = {
  "what-we-do": [
    { key: "health-service-delivery", kind: "ACTIVITY", title: "Health Service Delivery", iconKey: "HeartHandshake", details: { items: ["Clinic and community based health service delivery projects in urban and rural areas", "Special focus on mothers, children, adolescents and youth"] } },
    { key: "children-community-development", kind: "ACTIVITY", title: "Children & Community Development", iconKey: "Users", details: { items: ["Children and adolescents development activities", "Child labor, street children and working women", "Water supply, sanitation and hygiene education programs"] } },
    { key: "collaboration-research", kind: "ACTIVITY", title: "Collaboration & Research", iconKey: "BarChart3", details: { items: ["GOB-NGO private sector collaboration and coordination", "Advocacy programs at different level", "Research studies, base line survey and market research"] } },
    { key: "bcc-publications", kind: "ACTIVITY", title: "BCC & Publications", iconKey: "BookOpen", details: { items: ["Publish monthly magazine PROJANMO Kotha", "Producing BCC materials", "Street drama, folksongs and cultural show"] } },
    { key: "beneficiaries", kind: "ACTIVITY", title: "Our Beneficiaries", iconKey: "Users", details: { items: ["Women and girls", "Children, youth and adolescents", "Pregnant mothers", "Men and boys", "Slum dwellers", "Brothel based sex workers", "Other vulnerable populations"] } },
    { key: "training-technical-assistance", kind: "ACTIVITY", title: "Training & Technical Assistance", iconKey: "GraduationCap", details: { items: ["Life skill training", "Skill development training", "Income generating training", "Training need assessment and impact evaluation", "Training curricula development", "Technical assistance for grants management and NGO sustainability"] } },
    { key: "disaster-preparedness", kind: "ACTIVITY", title: "Disaster Preparedness", iconKey: "Shield", details: { items: ["Program and training on disaster preparedness and management"] } },
    { key: "thematic-areas", kind: "CARD", title: "Thematic Areas", description: "Our thematic areas focus on improving public health, empowering youth, promoting gender equality, strengthening climate resilience, and expanding skills development.", href: "/what-we-do/thematic-areas", image: "/images/thematic-areas.jpg", details: { items: ["Population Health and Nutrition (PHN)", "Youth & Adolescent Development (YAD)", "Gender and Governance (GAG)", "Climate Change and Adaptation (CCA)", "Skills Education and Training (SET)"] } },
    { key: "projects", kind: "CARD", title: "Our Projects", description: "Our projects address critical social and health challenges through innovative interventions, partnerships, and community-based approaches.", href: "/what-we-do/projects", image: "/images/projects.jpeg", details: { items: ["Urban Health Care", "FOCUS", "Person Who Uses Drugs (PUD)", "Community Mobilization Program (CMP)", "SUFASEC", "LEVIS", "HOPE", "SPRINT"] } },
    { key: "initiatives", kind: "CARD", title: "Our Initiatives", description: "Specialized initiatives deliver quality healthcare, professional training, employment support, and community development programs.", href: "/what-we-do/initiatives", image: "/images/pmc-aftabnagar.jpg", details: { items: ["PSTC Model Clinic (PMC)", "PMC - Aftabnagar", "PMC - Gazipur", "PMC - Kushtia", "Community Paramedic Training Institute (CPTI)", "PSTC Institute for Employment Support PIES", "Caregivers", "PSTC Complex", "PSTC Bhaban"] } },
    { key: "priorities", kind: "CARD", title: "Our Priorities", description: "We prioritize humanitarian response, climate resilience, social inclusion, and sustainable development.", href: "/what-we-do/priorities", image: "/images/climate-change-adaptation.jpeg", details: { items: ["Humanitarian Crisis (Preparedness & Response)", "Climate Resilience & Inclusiveness"] } },
    { key: "youth-engagement", kind: "CARD", title: "Youth Engagement", description: "Youth engagement initiatives create leadership opportunities, life skills, and meaningful participation.", href: "/what-we-do/youth-engagement", image: "/images/youth-adolescent-development.jpg", details: { items: ["uCon", "NaYoN"] } },
  ],
  nayon: [
    { key: "readiness", kind: "CRITERION", title: "The Readiness", description: "High adaptability, solid teamwork, and a self-starter mindset.", metadata: { number: "01" } },
    { key: "eagerness", kind: "CRITERION", title: "The Eagerness", description: "Open-minded, willing to learn, and passionate to explore.", metadata: { number: "02" } },
    { key: "commitment", kind: "CRITERION", title: "The Commitment", description: "Meaningful participation, spare time, and collaborative spirit.", metadata: { number: "03" } },
    { key: "discover", kind: "STEP", title: "Discover", description: "Learn about NaYoN programs and focus areas", metadata: { number: "01" } },
    { key: "apply", kind: "STEP", title: "Apply", description: "Share your profile, age, and motivation", metadata: { number: "02" } },
    { key: "connect", kind: "STEP", title: "Connect", description: "Join workshops, peers, and youth-led action", metadata: { number: "03" } },
  ],
  "magazine-subscription": [
    { key: "projanmo-kotha", kind: "COVER", title: "PROJANMO Kotha", subtitle: "Monthly Magazine", description: "Stories of change from clinics to communities across Bangladesh.", image: "/publications/book-projonmo-bodle-bodle-jay.jpg", details: { items: ["Monthly", "Digital", "Free", "Bengali Stories"] }, metadata: { featured: true } },
    { key: "field-stories", kind: "COVER", title: "Field Stories", image: "/publications/publication Cover 1.png" },
    { key: "youth-voices", kind: "COVER", title: "Youth Voices", image: "/publications/proshno-korte-shikhun.jpg" },
    { key: "email-delivery", kind: "PERK", title: "Email delivery", iconKey: "Mail" },
    { key: "monthly-issues", kind: "PERK", title: "Monthly issues", iconKey: "BookOpen" },
    { key: "free-soft-copy", kind: "PERK", title: "Free soft copy", iconKey: "Newspaper" },
  ],
  "global-reach": [
    { key: "dhaka", kind: "LOCATION", title: "Dhaka" },
    { key: "gazipur", kind: "LOCATION", title: "Gazipur" },
    { key: "narayanganj", kind: "LOCATION", title: "Narayanganj" },
    { key: "munshiganj", kind: "LOCATION", title: "Munshiganj" },
    { key: "kishoreganj", kind: "LOCATION", title: "Kishoreganj" },
    { key: "narsingdi", kind: "LOCATION", title: "Narsingdi" },
    { key: "noakhali", kind: "LOCATION", title: "Noakhali" },
    { key: "lakshmipur", kind: "LOCATION", title: "Lakshmipur" },
    { key: "mymensingh", kind: "LOCATION", title: "Mymensingh" },
    { key: "sherpur", kind: "LOCATION", title: "Sherpur" },
    { key: "netrokona", kind: "LOCATION", title: "Netrokona" },
    { key: "comilla", kind: "LOCATION", title: "Comilla" },
    { key: "feni", kind: "LOCATION", title: "Feni" },
    { key: "chandpur", kind: "LOCATION", title: "Chandpur" },
    { key: "chittagong", kind: "LOCATION", title: "Chittagong" },
    { key: "coxs-bazar", kind: "LOCATION", title: "Cox's Bazar" },
    { key: "faridpur", kind: "LOCATION", title: "Faridpur" },
    { key: "jessore", kind: "LOCATION", title: "Jessore" },
    { key: "khulna", kind: "LOCATION", title: "Khulna" },
    { key: "kushtia", kind: "LOCATION", title: "Kushtia" },
  ],
};

const landingMetricSeeds = {
  hero: [
    ["anniversary", "48", "Years Anniversary", "Since 1978", "primary"],
  ],
  "who-we-are": [
    ["years-service", "48+", "Years of service", null, "primary"],
    ["fpstc-origin", "1978", "FPSTC origin", null, "primary"],
    ["ippf-member", "IPPF", "Member Association", null, "secondary"],
  ],
  "global-reach": [
    ["districts", "20", "Districts", null, "primary"],
    ["offices", "72", "Offices", null, "primary"],
    ["clinics", "22", "Clinics", null, "secondary"],
    ["workforce", "862", "Workforce", null, "secondary"],
  ],
} as const;

const publications = [
  [
    "annual-report-2024",
    "Annual Report 2024",
    "Annual Report",
    "A comprehensive overview of PSTC's achievements, financial performance, and strategic milestones throughout 2024.",
    "/publications/publication Cover 1.png",
    "2024-12-01",
    84,
  ],
  [
    "training-impact-2024",
    "Training Impact Assessment 2024",
    "Research",
    "Measuring the outcomes of vocational training programs across all divisions.",
    "/publications/proshno-korte-shikhun.jpg",
    "2024-09-15",
    42,
  ],
  [
    "skills-gap-report",
    "National Skills Gap Report",
    "Policy Brief",
    "Analysis of workforce skill shortages and PSTC's role in bridging the gap.",
    "/publications/pexels-photo-31822720.jpg",
    "2024-07-20",
    56,
  ],
  [
    "gender-inclusion-2023",
    "Gender Inclusion in Technical Education",
    "Report",
    "Exploring how PSTC promotes gender equity across education and training programs.",
    "/publications/9781107604643i.jpg",
    "2023-11-10",
    38,
  ],
  [
    "strategic-plan-2025",
    "Strategic Plan 2025–2030",
    "Strategic Document",
    "PSTC's five-year roadmap outlining priority sectors and institutional strengthening.",
    "/publications/71c2E7yrTnL._AC_UF1000,1000_QL80_.jpg",
    "2024-01-05",
    72,
  ],
] as const;

function imageMimeType(url: string) {
  if (url.endsWith(".avif")) return "image/avif";
  if (url.endsWith(".webp")) return "image/webp";
  if (url.endsWith(".png")) return "image/png";
  return "image/jpeg";
}

async function main() {
  const email = process.env.ADMIN_EMAIL ?? "admin@pstc.org";
  const password = process.env.ADMIN_PASSWORD;

  if (!password) {
    throw new Error(
      "ADMIN_PASSWORD must be set before seeding the admin user.",
    );
  }

  const admin = await prisma.user.upsert({
    where: { email },
    update: {
      name: "PSTC Admin",
      password: await hash(password, 12),
      role: "super_admin",
      isActive: true,
    },
    create: {
      name: "PSTC Admin",
      email,
      password: await hash(password, 12),
      role: "super_admin",
    },
  });

  const landingPage = await prisma.landingPage.upsert({
    where: { key: "home" },
    update: { updatedById: admin.id },
    create: {
      key: "home",
      status: "DRAFT",
      createdById: admin.id,
      updatedById: admin.id,
    },
  });

  const sectionIds = new Map<string, string>();
  for (const [sortOrder, section] of landingSections.entries()) {
    const saved = await prisma.landingSection.upsert({
      where: {
        landingPageId_key: { landingPageId: landingPage.id, key: section.key },
      },
      update: {},
      create: {
        ...section,
        landingPageId: landingPage.id,
        sortOrder,
        isVisible: true,
      },
    });
    sectionIds.set(section.key, saved.id);
  }

  const legacySectionCopy = [
    ["who-we-are", "Who We Are", "Governance, leadership, values, policies, and institutional identity."],
    ["what-we-do", "What We Do", "Core activities, thematic areas, projects, initiatives, and priorities."],
    ["nayon", "National Youth Network", "NaYoN readiness criteria, onboarding steps, and interest form."],
    ["magazine-subscription", "PROJANMO Kotha", "Monthly magazine showcase and subscriber form."],
    ["latest-news", "Latest News", "Selected stories and institutional updates."],
    ["partners", "Our Partners", "Bangladeshi institutions and global development partners."],
    ["global-reach", "Our Global Reach", "District coverage, offices, clinics, and workforce statistics."],
  ] as const;

  for (const [key, legacyTitle, legacyDescription] of legacySectionCopy) {
    const defaults = landingSections.find((section) => section.key === key);
    const sectionId = sectionIds.get(key);
    if (!defaults || !sectionId) continue;
    await prisma.landingSection.updateMany({
      where: { id: sectionId, title: legacyTitle, description: legacyDescription },
      data: defaults,
    });
  }

  const heroSectionId = sectionIds.get("hero");
  if (heroSectionId) {
    for (const [sortOrder, slide] of heroSlides.entries()) {
      const [key, title, accentText, description, shortText, url, href] = slide;
      const filename = decodeURIComponent(url.split("/").at(-1) ?? key);
      const image = await prisma.mediaAsset.upsert({
        where: { storageKey: `public:${url}` },
        update: { url },
        create: {
          type: "IMAGE",
          filename,
          originalName: filename,
          mimeType: imageMimeType(url),
          url,
          storageKey: `public:${url}`,
          altText: `${title} ${accentText}`,
          uploadedById: admin.id,
        },
      });

      await prisma.heroSlide.upsert({
        where: {
          landingSectionId_key: { landingSectionId: heroSectionId, key },
        },
        update: {},
        create: {
          landingSectionId: heroSectionId,
          key,
          title,
          accentText,
          description,
          shortText,
          href,
          imageId: image.id,
          sortOrder,
        },
      });
    }
  }

  const whoWeAreSectionId = sectionIds.get("who-we-are");
  if (whoWeAreSectionId) {
    for (const [sortOrder, item] of whoWeAreItems.entries()) {
      const [key, number, title, href, description, url, iconKey] = item;
      const filename = decodeURIComponent(url.split("/").at(-1) ?? key);
      const image = await prisma.mediaAsset.upsert({
        where: { storageKey: `public:${url}` },
        update: { url },
        create: {
          type: "IMAGE",
          filename,
          originalName: filename,
          mimeType: imageMimeType(url),
          url,
          storageKey: `public:${url}`,
          altText: title,
          uploadedById: admin.id,
        },
      });

      await prisma.landingSectionItem.upsert({
        where: {
          landingSectionId_key: {
            landingSectionId: whoWeAreSectionId,
            key,
          },
        },
        update: {},
        create: {
          landingSectionId: whoWeAreSectionId,
          key,
          kind: "CARD",
          title,
          description,
          href,
          iconKey,
          imageId: image.id,
          metadata: { number },
          sortOrder,
        },
      });
    }
  }

  for (const [sectionKey, items] of Object.entries(structuredLandingItems)) {
    const sectionId = sectionIds.get(sectionKey);
    if (!sectionId) continue;

    for (const [sortOrder, item] of items.entries()) {
      let imageId: string | undefined;
      if (item.image) {
        const filename = decodeURIComponent(item.image.split("/").at(-1) ?? item.key);
        const image = await prisma.mediaAsset.upsert({
          where: { storageKey: `public:${item.image}` },
          update: { url: item.image },
          create: {
            type: "IMAGE",
            filename,
            originalName: filename,
            mimeType: imageMimeType(item.image),
            url: item.image,
            storageKey: `public:${item.image}`,
            altText: item.title,
            uploadedById: admin.id,
          },
        });
        imageId = image.id;
      }

      await prisma.landingSectionItem.upsert({
        where: {
          landingSectionId_key: {
            landingSectionId: sectionId,
            key: item.key,
          },
        },
        update: {},
        create: {
          landingSectionId: sectionId,
          key: item.key,
          kind: item.kind,
          title: item.title,
          subtitle: item.subtitle,
          description: item.description,
          href: item.href,
          iconKey: item.iconKey,
          imageId,
          details: item.details,
          metadata: item.metadata,
          sortOrder,
          isVisible: true,
        },
      });
    }
  }

  const publicationsSectionId = sectionIds.get("publications");
  if (publicationsSectionId) {
    for (const [sortOrder, entry] of publications.entries()) {
      const [
        slug,
        title,
        category,
        description,
        coverUrl,
        publishedAt,
        pageCount,
      ] = entry;
      const filename = decodeURIComponent(coverUrl.split("/").at(-1) ?? slug);
      const coverImage = await prisma.mediaAsset.upsert({
        where: { storageKey: `public:${coverUrl}` },
        update: { url: coverUrl },
        create: {
          type: "IMAGE",
          filename,
          originalName: filename,
          mimeType: imageMimeType(coverUrl),
          url: coverUrl,
          storageKey: `public:${coverUrl}`,
          altText: title,
          uploadedById: admin.id,
        },
      });
      const publication = await prisma.publication.upsert({
        where: { slug },
        update: {},
        create: {
          slug,
          title,
          category,
          description,
          coverImageId: coverImage.id,
          pageCount,
          status: "PUBLISHED",
          publishedAt: new Date(`${publishedAt}T00:00:00.000Z`),
          featured: sortOrder === 0,
        },
      });
      await prisma.landingPublicationSelection.upsert({
        where: {
          landingSectionId_publicationId: {
            landingSectionId: publicationsSectionId,
            publicationId: publication.id,
          },
        },
        update: {},
        create: {
          landingSectionId: publicationsSectionId,
          publicationId: publication.id,
          sortOrder,
          isFeatured: sortOrder === 0,
        },
      });
    }
  }

  for (const [sectionKey, metrics] of Object.entries(landingMetricSeeds)) {
    const sectionId = sectionIds.get(sectionKey);
    if (!sectionId) continue;
    for (const [sortOrder, metric] of metrics.entries()) {
      const [key, value, label, caption, tone] = metric;
      await prisma.landingMetric.upsert({
        where: {
          landingSectionId_key: {
            landingSectionId: sectionId,
            key,
          },
        },
        update: {},
        create: {
          landingSectionId: sectionId,
          key,
          value,
          label,
          caption,
          tone,
          sortOrder,
        },
      });
    }
  }

  const contentPages = [
    ["governance", "Governance", governanceDefaultContent],
    ["leadership", "Leadership", leadershipDefaultContent],
    ["mission-vision-values", "Mission, Vision & Values", missionVisionValuesDefaultContent],
    ["policies", "Policies", policiesDefaultContent],
    ["organogram", "Organogram", organogramDefaultContent],
    ["where-we-work", "Where We Work", whereWeWorkDefaultContent],
    ["about-us", "About Us", aboutUsDefaultContent],
    ["strategic-plan", "Strategic Plan", strategicPlanDefaultContent],
    ["population-health-nutrition", "Population Health & Nutrition", populationHealthNutritionDefaultContent],
    ["youth-adolescent-development", "Youth & Adolescent Development", youthAdolescentDevelopmentDefaultContent],
    ["gender-governance", "Gender & Governance", genderGovernanceDefaultContent],
    ["climate-change-adaptation", "Climate Change Adaptation", climateChangeAdaptationDefaultContent],
    ["skills-education-training", "Skills, Education & Training", skillsEducationTrainingDefaultContent],
  ] as const;

  for (const [key, title, content] of contentPages) {
    const jsonContent = JSON.parse(JSON.stringify(content));
    await prisma.cmsPage.upsert({
      where: { key },
      update: {},
      create: {
        key,
        title,
        status: "PUBLISHED",
        seoTitle: `${title} | PSTC`,
        draftContent: jsonContent,
        publishedContent: jsonContent,
        publishedAt: new Date(),
        createdById: admin.id,
        updatedById: admin.id,
      },
    });
  }

  console.log(`Admin user is ready: ${email}`);
  console.log("Landing CMS foundation is ready with 9 sections.");
  console.log("Content page CMS defaults are ready, including PHN and YAD.");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
