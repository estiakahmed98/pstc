import type { z } from "zod";
import { Prisma, type ContentStatus } from "prisma-client-generated";
import { prisma } from "@/lib/prisma";
import type {
  createHeroSlideSchema,
  createLandingItemSchema,
  createLandingSectionSchema,
  createLandingMetricSchema,
  reorderLandingSectionsSchema,
  updateHeroSlideSchema,
  updateLandingItemSchema,
  updateLandingPageSchema,
  updateLandingSectionSchema,
  updateLandingMetricSchema,
  replaceLandingSelectionsSchema,
} from "@/lib/validation/landing";

type CreateSectionInput = z.infer<typeof createLandingSectionSchema>;
type UpdateSectionInput = z.infer<typeof updateLandingSectionSchema>;
type ReorderSectionsInput = z.infer<typeof reorderLandingSectionsSchema>;
type UpdatePageInput = z.infer<typeof updateLandingPageSchema>;
type CreateItemInput = z.infer<typeof createLandingItemSchema>;
type UpdateItemInput = z.infer<typeof updateLandingItemSchema>;
type CreateSlideInput = z.infer<typeof createHeroSlideSchema>;
type UpdateSlideInput = z.infer<typeof updateHeroSlideSchema>;
type CreateMetricInput = z.infer<typeof createLandingMetricSchema>;
type UpdateMetricInput = z.infer<typeof updateLandingMetricSchema>;
type ReplaceSelectionsInput = z.infer<typeof replaceLandingSelectionsSchema>;

const adminLandingInclude = {
  sections: {
    orderBy: { sortOrder: "asc" as const },
    include: {
      backgroundImage: true,
      slides: {
        orderBy: { sortOrder: "asc" as const },
        include: { image: true },
      },
      items: {
        orderBy: { sortOrder: "asc" as const },
        include: { image: true },
      },
      metrics: { orderBy: { sortOrder: "asc" as const } },
      newsSelections: {
        orderBy: { sortOrder: "asc" as const },
        include: { newsArticle: { include: { coverImage: true } } },
      },
      publicationSelections: {
        orderBy: { sortOrder: "asc" as const },
        include: {
          publication: { include: { coverImage: true, fileAsset: true } },
        },
      },
      partnerSelections: {
        orderBy: { sortOrder: "asc" as const },
        include: { partner: { include: { logo: true } } },
      },
    },
  },
} satisfies Prisma.LandingPageInclude;

const publicLandingInclude = {
  sections: {
    where: { isVisible: true },
    orderBy: { sortOrder: "asc" as const },
    include: {
      backgroundImage: true,
      slides: {
        where: { isVisible: true },
        orderBy: { sortOrder: "asc" as const },
        include: { image: true },
      },
      items: {
        where: { isVisible: true },
        orderBy: { sortOrder: "asc" as const },
        include: { image: true },
      },
      metrics: {
        where: { isVisible: true },
        orderBy: { sortOrder: "asc" as const },
      },
      newsSelections: {
        where: { newsArticle: { status: "PUBLISHED" as const } },
        orderBy: { sortOrder: "asc" as const },
        include: { newsArticle: { include: { coverImage: true } } },
      },
      publicationSelections: {
        where: { publication: { status: "PUBLISHED" as const } },
        orderBy: { sortOrder: "asc" as const },
        include: {
          publication: { include: { coverImage: true, fileAsset: true } },
        },
      },
      partnerSelections: {
        where: { partner: { isActive: true } },
        orderBy: { sortOrder: "asc" as const },
        include: { partner: { include: { logo: true } } },
      },
    },
  },
} satisfies Prisma.LandingPageInclude;

function jsonValue(value: unknown) {
  if (value === undefined) return undefined;
  if (value === null) return Prisma.JsonNull;
  return value as Prisma.InputJsonValue;
}

export async function ensureLandingPage(userId?: string) {
  return prisma.landingPage.upsert({
    where: { key: "home" },
    update: {},
    create: {
      key: "home",
      status: "DRAFT",
      createdById: userId,
      updatedById: userId,
    },
    include: adminLandingInclude,
  });
}

export async function getAdminLandingPage(userId?: string) {
  return ensureLandingPage(userId);
}

export async function getPublicLandingPage() {
  const now = new Date();
  return prisma.landingPage.findFirst({
    where: {
      key: "home",
      status: "PUBLISHED",
      AND: [
        { OR: [{ publishedAt: null }, { publishedAt: { lte: now } }] },
        { OR: [{ scheduledAt: null }, { scheduledAt: { lte: now } }] },
      ],
    },
    include: publicLandingInclude,
  });
}

export async function updateLandingPage(
  input: UpdatePageInput,
  userId: string,
) {
  const current = await ensureLandingPage(userId);
  const nextVersion = current.version + 1;
  const status = input.status as ContentStatus | undefined;

  return prisma.$transaction(async (tx) => {
    await tx.landingRevision.create({
      data: {
        landingPageId: current.id,
        version: current.version,
        snapshot: JSON.parse(JSON.stringify(current)) as Prisma.InputJsonValue,
        changeNote: input.changeNote,
        createdById: userId,
      },
    });

    return tx.landingPage.update({
      where: { id: current.id },
      data: {
        status,
        scheduledAt:
          input.scheduledAt === undefined
            ? undefined
            : input.scheduledAt
              ? new Date(input.scheduledAt)
              : null,
        publishedAt:
          status === "PUBLISHED" ? current.publishedAt ?? new Date() : undefined,
        version: nextVersion,
        updatedById: userId,
      },
      include: adminLandingInclude,
    });
  });
}

export async function createLandingSection(
  input: CreateSectionInput,
  userId: string,
) {
  const page = await ensureLandingPage(userId);
  return prisma.landingSection.create({
    data: {
      ...input,
      settings: jsonValue(input.settings),
      landingPageId: page.id,
    },
    include: { backgroundImage: true },
  });
}

export async function updateLandingSection(
  sectionId: string,
  input: UpdateSectionInput,
) {
  return prisma.landingSection.update({
    where: { id: sectionId },
    data: {
      ...input,
      settings: jsonValue(input.settings),
    },
    include: { backgroundImage: true },
  });
}

export async function deleteLandingSection(sectionId: string) {
  return prisma.landingSection.delete({ where: { id: sectionId } });
}

export async function reorderLandingSections(input: ReorderSectionsInput) {
  return prisma.$transaction(
    input.sections.map((section) =>
      prisma.landingSection.update({
        where: { id: section.id },
        data: { sortOrder: section.sortOrder },
      }),
    ),
  );
}

export async function createLandingItem(
  sectionId: string,
  input: CreateItemInput,
) {
  return prisma.landingSectionItem.create({
    data: {
      ...input,
      details: jsonValue(input.details),
      metadata: jsonValue(input.metadata),
      landingSectionId: sectionId,
    },
    include: { image: true },
  });
}

export async function updateLandingItem(
  itemId: string,
  input: UpdateItemInput,
) {
  return prisma.landingSectionItem.update({
    where: { id: itemId },
    data: {
      ...input,
      details: jsonValue(input.details),
      metadata: jsonValue(input.metadata),
    },
    include: { image: true },
  });
}

export async function deleteLandingItem(itemId: string) {
  return prisma.landingSectionItem.delete({ where: { id: itemId } });
}

export async function createHeroSlide(
  sectionId: string,
  input: CreateSlideInput,
) {
  return prisma.heroSlide.create({
    data: {
      ...input,
      settings: jsonValue(input.settings),
      landingSectionId: sectionId,
    },
    include: { image: true },
  });
}

export async function updateHeroSlide(
  slideId: string,
  input: UpdateSlideInput,
) {
  return prisma.heroSlide.update({
    where: { id: slideId },
    data: { ...input, settings: jsonValue(input.settings) },
    include: { image: true },
  });
}

export async function deleteHeroSlide(slideId: string) {
  return prisma.heroSlide.delete({ where: { id: slideId } });
}

export async function createLandingMetric(
  sectionId: string,
  input: CreateMetricInput,
) {
  return prisma.landingMetric.create({
    data: { ...input, landingSectionId: sectionId },
  });
}

export async function updateLandingMetric(
  metricId: string,
  input: UpdateMetricInput,
) {
  return prisma.landingMetric.update({
    where: { id: metricId },
    data: input,
  });
}

export async function deleteLandingMetric(metricId: string) {
  return prisma.landingMetric.delete({ where: { id: metricId } });
}

export type LandingSelectionResource = "news" | "publications" | "partners";

export async function replaceLandingSelections(
  sectionId: string,
  resource: LandingSelectionResource,
  input: ReplaceSelectionsInput,
) {
  return prisma.$transaction(async (tx) => {
    if (resource === "news") {
      await tx.landingNewsSelection.deleteMany({ where: { landingSectionId: sectionId } });
      if (input.entries.length) {
        await tx.landingNewsSelection.createMany({
          data: input.entries.map((entry) => ({
            landingSectionId: sectionId,
            newsArticleId: entry.id,
            sortOrder: entry.sortOrder,
            isFeatured: entry.isFeatured ?? false,
          })),
        });
      }
      return tx.landingNewsSelection.findMany({
        where: { landingSectionId: sectionId },
        orderBy: { sortOrder: "asc" },
      });
    }

    if (resource === "publications") {
      await tx.landingPublicationSelection.deleteMany({ where: { landingSectionId: sectionId } });
      if (input.entries.length) {
        await tx.landingPublicationSelection.createMany({
          data: input.entries.map((entry) => ({
            landingSectionId: sectionId,
            publicationId: entry.id,
            sortOrder: entry.sortOrder,
            isFeatured: entry.isFeatured ?? false,
          })),
        });
      }
      return tx.landingPublicationSelection.findMany({
        where: { landingSectionId: sectionId },
        orderBy: { sortOrder: "asc" },
      });
    }

    await tx.landingPartnerSelection.deleteMany({ where: { landingSectionId: sectionId } });
    if (input.entries.length) {
      await tx.landingPartnerSelection.createMany({
        data: input.entries.map((entry) => ({
          landingSectionId: sectionId,
          partnerId: entry.id,
          sortOrder: entry.sortOrder,
        })),
      });
    }
    return tx.landingPartnerSelection.findMany({
      where: { landingSectionId: sectionId },
      orderBy: { sortOrder: "asc" },
    });
  });
}
