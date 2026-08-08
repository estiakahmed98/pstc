import { z } from "zod";

export const attachLandingMediaSchema = z.object({
  mediaId: z.string().cuid(),
  targetId: z.string().cuid(),
  targetType: z.enum([
    "section",
    "slide",
    "item",
    "news",
    "publication",
    "publicationFile",
    "partner",
  ]),
});
