import { PrismaClient } from "prisma-client-generated";
import { hash } from "bcryptjs";

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
    title: "Who We Are",
    description:
      "Governance, leadership, values, policies, and institutional identity.",
  },
  {
    key: "what-we-do",
    type: "WHAT_WE_DO" as const,
    title: "What We Do",
    description:
      "Core activities, thematic areas, projects, initiatives, and priorities.",
  },
  {
    key: "nayon",
    type: "NAYON" as const,
    title: "National Youth Network",
    highlightedTitle: "Youth",
    description:
      "NaYoN readiness criteria, onboarding steps, and interest form.",
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
    description: "Monthly magazine showcase and subscriber form.",
  },
  {
    key: "latest-news",
    type: "LATEST_NEWS" as const,
    title: "Latest News",
    description: "Selected stories and institutional updates.",
    settings: { sourceMode: "manual", limit: 5 },
  },
  {
    key: "partners",
    type: "PARTNERS" as const,
    title: "Our Partners",
    description: "Bangladeshi institutions and global development partners.",
  },
  {
    key: "global-reach",
    type: "GLOBAL_REACH" as const,
    title: "Our Global Reach",
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
      update: {
        ...section,
        sortOrder,
        isVisible: true,
      },
      create: {
        ...section,
        landingPageId: landingPage.id,
        sortOrder,
        isVisible: true,
      },
    });
    sectionIds.set(section.key, saved.id);
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
        update: {
          title,
          accentText,
          description,
          shortText,
          href,
          imageId: image.id,
          sortOrder,
          isVisible: true,
        },
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
        update: {
          title,
          description,
          href,
          iconKey,
          imageId: image.id,
          metadata: { number },
          sortOrder,
          isVisible: true,
        },
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
        update: {
          title,
          category,
          description,
          coverImageId: coverImage.id,
          pageCount,
          status: "PUBLISHED",
          publishedAt: new Date(`${publishedAt}T00:00:00.000Z`),
          featured: sortOrder === 0,
        },
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
        update: { sortOrder, isFeatured: sortOrder === 0 },
        create: {
          landingSectionId: publicationsSectionId,
          publicationId: publication.id,
          sortOrder,
          isFeatured: sortOrder === 0,
        },
      });
    }
  }

  const globalReachSectionId = sectionIds.get("global-reach");
  if (globalReachSectionId) {
    const metrics = [
      ["districts", "20", "Districts", "primary"],
      ["offices", "72", "Offices", "primary"],
      ["clinics", "22", "Clinics", "secondary"],
      ["workforce", "862", "Workforce", "secondary"],
    ] as const;

    for (const [sortOrder, metric] of metrics.entries()) {
      const [key, value, label, tone] = metric;
      await prisma.landingMetric.upsert({
        where: {
          landingSectionId_key: {
            landingSectionId: globalReachSectionId,
            key,
          },
        },
        update: { value, label, tone, sortOrder, isVisible: true },
        create: {
          landingSectionId: globalReachSectionId,
          key,
          value,
          label,
          tone,
          sortOrder,
        },
      });
    }
  }

  console.log(`Admin user is ready: ${email}`);
  console.log("Landing CMS foundation is ready with 9 sections.");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
