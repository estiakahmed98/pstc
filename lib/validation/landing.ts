import { z } from "zod";

const optionalUrl = z
  .string()
  .trim()
  .max(500)
  .refine(
    (value) =>
      value.startsWith("/") ||
      value.startsWith("https://") ||
      value.startsWith("http://") ||
      value.startsWith("mailto:"),
    "Use an internal path or a valid URL.",
  )
  .nullable()
  .optional();

const jsonObject = z.record(z.string(), z.unknown()).nullable().optional();

export const landingSectionTypeSchema = z.enum([
  "HERO",
  "WHO_WE_ARE",
  "WHAT_WE_DO",
  "NAYON",
  "PUBLICATIONS",
  "MAGAZINE_SUBSCRIPTION",
  "LATEST_NEWS",
  "PARTNERS",
  "GLOBAL_REACH",
]);

export const createLandingSectionSchema = z.object({
  key: z.string().trim().min(2).max(80).regex(/^[a-z0-9-]+$/),
  type: landingSectionTypeSchema,
  eyebrow: z.string().trim().max(120).nullable().optional(),
  title: z.string().trim().min(1).max(240),
  highlightedTitle: z.string().trim().max(160).nullable().optional(),
  subtitle: z.string().trim().max(300).nullable().optional(),
  description: z.string().trim().max(5000).nullable().optional(),
  primaryCtaLabel: z.string().trim().max(80).nullable().optional(),
  primaryCtaHref: optionalUrl,
  secondaryCtaLabel: z.string().trim().max(80).nullable().optional(),
  secondaryCtaHref: optionalUrl,
  sortOrder: z.number().int().min(0).default(0),
  isVisible: z.boolean().default(true),
  backgroundImageId: z.string().cuid().nullable().optional(),
  settings: jsonObject,
});

export const updateLandingSectionSchema = createLandingSectionSchema
  .omit({ type: true })
  .partial();

export const updateLandingPageSchema = z.object({
  status: z
    .enum(["DRAFT", "IN_REVIEW", "SCHEDULED", "PUBLISHED", "ARCHIVED"])
    .optional(),
  scheduledAt: z.iso.datetime().nullable().optional(),
  changeNote: z.string().trim().max(500).nullable().optional(),
});

export const reorderLandingSectionsSchema = z.object({
  sections: z
    .array(
      z.object({
        id: z.string().cuid(),
        sortOrder: z.number().int().min(0),
      }),
    )
    .min(1),
});

export const landingItemKindSchema = z.enum([
  "CARD",
  "ACTIVITY",
  "CRITERION",
  "STEP",
  "COVER",
  "PERK",
]);

export const createLandingItemSchema = z.object({
  key: z.string().trim().min(2).max(100).regex(/^[a-z0-9-]+$/),
  kind: landingItemKindSchema,
  title: z.string().trim().min(1).max(240),
  subtitle: z.string().trim().max(300).nullable().optional(),
  description: z.string().trim().max(5000).nullable().optional(),
  details: z.unknown().nullable().optional(),
  sortOrder: z.number().int().min(0).default(0),
  isVisible: z.boolean().default(true),
  imageId: z.string().cuid().nullable().optional(),
  href: optionalUrl,
  iconKey: z.string().trim().max(80).nullable().optional(),
  metadata: jsonObject,
});

export const updateLandingItemSchema = createLandingItemSchema
  .omit({ kind: true })
  .partial();

export const createHeroSlideSchema = z.object({
  key: z.string().trim().min(2).max(100).regex(/^[a-z0-9-]+$/),
  title: z.string().trim().min(1).max(180),
  accentText: z.string().trim().max(120).nullable().optional(),
  description: z.string().trim().max(1000).nullable().optional(),
  shortText: z.string().trim().max(180).nullable().optional(),
  ctaLabel: z.string().trim().max(80).nullable().optional(),
  sortOrder: z.number().int().min(0).default(0),
  isVisible: z.boolean().default(true),
  imageId: z.string().cuid().nullable().optional(),
  href: optionalUrl,
  settings: jsonObject,
});

export const updateHeroSlideSchema = createHeroSlideSchema.partial();

export const createLandingMetricSchema = z.object({
  key: z.string().trim().min(2).max(100).regex(/^[a-z0-9-]+$/),
  value: z.string().trim().min(1).max(80),
  label: z.string().trim().min(1).max(120),
  caption: z.string().trim().max(240).nullable().optional(),
  tone: z.string().trim().max(40).nullable().optional(),
  sortOrder: z.number().int().min(0).default(0),
  isVisible: z.boolean().default(true),
});

export const updateLandingMetricSchema = createLandingMetricSchema.partial();

export const replaceLandingSelectionsSchema = z.object({
  entries: z.array(
    z.object({
      id: z.string().cuid(),
      sortOrder: z.number().int().min(0),
      isFeatured: z.boolean().optional(),
    }),
  ),
});

export const magazineSubscriptionSchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.email().max(254).transform((value) => value.toLowerCase()),
  organization: z.string().trim().max(180).nullable().optional(),
  consent: z.literal(true),
});

export const youthInterestSchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.email().max(254).transform((value) => value.toLowerCase()),
  phone: z.string().trim().max(30).nullable().optional(),
  age: z.number().int().min(13).max(35).nullable().optional(),
  district: z.string().trim().max(120).nullable().optional(),
  motivation: z.string().trim().max(2000).nullable().optional(),
  consent: z.literal(true),
});
