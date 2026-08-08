import { z } from "zod";

export const createPublicationSchema = z.object({
  slug: z.string().trim().min(2).max(160).regex(/^[a-z0-9-]+$/),
  title: z.string().trim().min(1).max(240),
  category: z.string().trim().max(120).nullable().optional(),
  description: z.string().trim().max(5000).nullable().optional(),
  pageCount: z.number().int().min(1).max(100000).nullable().optional(),
  featured: z.boolean().default(false),
  status: z.enum(["DRAFT", "IN_REVIEW", "SCHEDULED", "PUBLISHED", "ARCHIVED"]),
  publishedAt: z.iso.datetime().nullable().optional(),
});

export const updatePublicationSchema = createPublicationSchema.partial();
