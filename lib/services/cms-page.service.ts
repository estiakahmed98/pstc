import { Prisma } from "prisma-client-generated";
import { prisma } from "@/lib/prisma";

const pageTitles: Record<string, string> = {
  governance: "Governance",
  leadership: "Leadership",
  "mission-vision-values": "Mission, Vision & Values",
  policies: "Policies",
  organogram: "Organogram",
  "where-we-work": "Where We Work",
  "about-us": "About Us",
  "strategic-plan": "Strategic Plan",
  "population-health-nutrition": "Population Health & Nutrition",
  "youth-adolescent-development": "Youth & Adolescent Development",
};

function asInputJson(value: unknown): Prisma.InputJsonValue {
  return JSON.parse(JSON.stringify(value)) as Prisma.InputJsonValue;
}

export async function ensureCmsPage(key: string, userId?: string) {
  return prisma.cmsPage.upsert({
    where: { key },
    update: {},
    create: {
      key,
      title: pageTitles[key] ?? key,
      draftContent: {},
      createdById: userId,
      updatedById: userId,
    },
  });
}

export async function getAdminCmsPage(key: string, userId?: string) {
  return ensureCmsPage(key, userId);
}

export async function updateCmsPage(
  key: string,
  input: {
    title?: string;
    seoTitle?: string | null;
    seoDescription?: string | null;
    content?: Record<string, unknown>;
    action: "save" | "publish" | "unpublish";
  },
  userId: string,
) {
  const current = await ensureCmsPage(key, userId);
  const draftContent = asInputJson(input.content ?? current.draftContent);

  return prisma.cmsPage.update({
    where: { key },
    data: {
      title: input.title,
      seoTitle: input.seoTitle,
      seoDescription: input.seoDescription,
      draftContent,
      publishedContent:
        input.action === "publish" ? draftContent : undefined,
      status:
        input.action === "publish"
          ? "PUBLISHED"
          : input.action === "unpublish"
            ? "DRAFT"
            : undefined,
      publishedAt:
        input.action === "publish"
          ? new Date()
          : input.action === "unpublish"
            ? null
            : undefined,
      version:
        input.action === "publish" ? current.version + 1 : undefined,
      updatedById: userId,
    },
  });
}

export async function getPublishedCmsPage(key: string) {
  return prisma.cmsPage.findFirst({
    where: { key, status: "PUBLISHED", publishedContent: { not: Prisma.JsonNull } },
  });
}

export async function getPublishedCmsContent<T>(key: string): Promise<T | null> {
  const page = await getPublishedCmsPage(key);
  return page?.publishedContent
    ? (JSON.parse(JSON.stringify(page.publishedContent)) as T)
    : null;
}
