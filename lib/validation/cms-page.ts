import { z } from "zod";

export const cmsPageKeySchema = z.enum([
  "governance",
  "leadership",
  "mission-vision-values",
  "policies",
  "organogram",
  "where-we-work",
  "about-us",
  "strategic-plan",
  "population-health-nutrition",
  "youth-adolescent-development",
  "gender-governance",
  "climate-change-adaptation",
  "skills-education-training",
  "urban-health-care",
  "focus",
  "person-who-uses-drugs",
  "community-mobilization-program",
]);

export const updateCmsPageSchema = z.object({
  title: z.string().trim().min(1).max(160).optional(),
  seoTitle: z.string().trim().max(160).nullable().optional(),
  seoDescription: z.string().trim().max(320).nullable().optional(),
  content: z.record(z.string(), z.unknown()).optional(),
  action: z.enum(["save", "publish", "unpublish"]).default("save"),
});
