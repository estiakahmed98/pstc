import { z } from "zod";

const statusSchema = z.enum([
  "DRAFT",
  "IN_REVIEW",
  "SCHEDULED",
  "PUBLISHED",
  "ARCHIVED",
]);

export const createNewsSchema = z.object({
  slug: z.string().trim().min(2).max(160).regex(/^[a-z0-9-]+$/),
  title: z.string().trim().min(1).max(240),
  category: z.string().trim().max(120).nullable().optional(),
  excerpt: z.string().trim().max(1000).nullable().optional(),
  content: z.string().trim().max(50000).nullable().optional(),
  featured: z.boolean().default(false),
  status: statusSchema,
  publishedAt: z.iso.datetime().nullable().optional(),
});

export const updateNewsSchema = createNewsSchema.partial();

export const createPartnerSchema = z.object({
  slug: z.string().trim().min(2).max(160).regex(/^[a-z0-9-]+$/),
  name: z.string().trim().min(1).max(240),
  type: z.enum(["LOCAL", "GLOBAL"]),
  description: z.string().trim().max(5000).nullable().optional(),
  websiteUrl: z.url().max(2000).nullable().optional(),
  isActive: z.boolean().default(true),
});

export const updatePartnerSchema = createPartnerSchema.partial();
