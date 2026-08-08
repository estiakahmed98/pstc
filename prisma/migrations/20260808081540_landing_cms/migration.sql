-- CreateEnum
CREATE TYPE "ContentStatus" AS ENUM ('DRAFT', 'IN_REVIEW', 'SCHEDULED', 'PUBLISHED', 'ARCHIVED');

-- CreateEnum
CREATE TYPE "LandingSectionType" AS ENUM ('HERO', 'WHO_WE_ARE', 'WHAT_WE_DO', 'NAYON', 'PUBLICATIONS', 'MAGAZINE_SUBSCRIPTION', 'LATEST_NEWS', 'PARTNERS', 'GLOBAL_REACH');

-- CreateEnum
CREATE TYPE "LandingItemKind" AS ENUM ('CARD', 'ACTIVITY', 'CRITERION', 'STEP', 'COVER', 'PERK');

-- CreateEnum
CREATE TYPE "PartnerType" AS ENUM ('LOCAL', 'GLOBAL');

-- CreateEnum
CREATE TYPE "MediaType" AS ENUM ('IMAGE', 'VIDEO', 'DOCUMENT');

-- CreateEnum
CREATE TYPE "SubmissionStatus" AS ENUM ('NEW', 'REVIEWED', 'CONTACTED', 'ARCHIVED');

-- CreateTable
CREATE TABLE "landing_pages" (
    "id" TEXT NOT NULL,
    "key" TEXT NOT NULL DEFAULT 'home',
    "status" "ContentStatus" NOT NULL DEFAULT 'DRAFT',
    "version" INTEGER NOT NULL DEFAULT 1,
    "publishedAt" TIMESTAMP(3),
    "scheduledAt" TIMESTAMP(3),
    "createdById" TEXT,
    "updatedById" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "landing_pages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "landing_sections" (
    "id" TEXT NOT NULL,
    "landingPageId" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "type" "LandingSectionType" NOT NULL,
    "eyebrow" TEXT,
    "title" TEXT NOT NULL,
    "highlightedTitle" TEXT,
    "subtitle" TEXT,
    "description" TEXT,
    "primaryCtaLabel" TEXT,
    "primaryCtaHref" TEXT,
    "secondaryCtaLabel" TEXT,
    "secondaryCtaHref" TEXT,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "isVisible" BOOLEAN NOT NULL DEFAULT true,
    "settings" JSONB,
    "backgroundImageId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "landing_sections_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "hero_slides" (
    "id" TEXT NOT NULL,
    "landingSectionId" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "accentText" TEXT,
    "description" TEXT,
    "shortText" TEXT,
    "ctaLabel" TEXT,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "isVisible" BOOLEAN NOT NULL DEFAULT true,
    "imageId" TEXT,
    "href" TEXT,
    "settings" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "hero_slides_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "landing_section_items" (
    "id" TEXT NOT NULL,
    "landingSectionId" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "kind" "LandingItemKind" NOT NULL,
    "title" TEXT NOT NULL,
    "subtitle" TEXT,
    "description" TEXT,
    "details" JSONB,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "isVisible" BOOLEAN NOT NULL DEFAULT true,
    "imageId" TEXT,
    "href" TEXT,
    "iconKey" TEXT,
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "landing_section_items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "landing_metrics" (
    "id" TEXT NOT NULL,
    "landingSectionId" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "caption" TEXT,
    "tone" TEXT,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "isVisible" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "landing_metrics_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "landing_revisions" (
    "id" TEXT NOT NULL,
    "landingPageId" TEXT NOT NULL,
    "version" INTEGER NOT NULL,
    "snapshot" JSONB NOT NULL,
    "changeNote" TEXT,
    "createdById" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "landing_revisions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "media_assets" (
    "id" TEXT NOT NULL,
    "type" "MediaType" NOT NULL,
    "filename" TEXT NOT NULL,
    "originalName" TEXT NOT NULL,
    "mimeType" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "storageKey" TEXT,
    "size" INTEGER,
    "width" INTEGER,
    "height" INTEGER,
    "altText" TEXT,
    "caption" TEXT,
    "uploadedById" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "media_assets_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "news_articles" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "status" "ContentStatus" NOT NULL DEFAULT 'DRAFT',
    "category" TEXT,
    "title" TEXT NOT NULL,
    "excerpt" TEXT,
    "content" TEXT,
    "coverImageId" TEXT,
    "featured" BOOLEAN NOT NULL DEFAULT false,
    "publishedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "news_articles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "publications" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "status" "ContentStatus" NOT NULL DEFAULT 'DRAFT',
    "category" TEXT,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "coverImageId" TEXT,
    "fileAssetId" TEXT,
    "pageCount" INTEGER,
    "featured" BOOLEAN NOT NULL DEFAULT false,
    "publishedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "publications_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "partners" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "type" "PartnerType" NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "logoId" TEXT,
    "websiteUrl" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "partners_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "landing_news_selections" (
    "landingSectionId" TEXT NOT NULL,
    "newsArticleId" TEXT NOT NULL,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "isFeatured" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "landing_news_selections_pkey" PRIMARY KEY ("landingSectionId","newsArticleId")
);

-- CreateTable
CREATE TABLE "landing_publication_selections" (
    "landingSectionId" TEXT NOT NULL,
    "publicationId" TEXT NOT NULL,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "isFeatured" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "landing_publication_selections_pkey" PRIMARY KEY ("landingSectionId","publicationId")
);

-- CreateTable
CREATE TABLE "landing_partner_selections" (
    "landingSectionId" TEXT NOT NULL,
    "partnerId" TEXT NOT NULL,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "landing_partner_selections_pkey" PRIMARY KEY ("landingSectionId","partnerId")
);

-- CreateTable
CREATE TABLE "magazine_subscribers" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "organization" TEXT,
    "status" "SubmissionStatus" NOT NULL DEFAULT 'NEW',
    "consentedAt" TIMESTAMP(3) NOT NULL,
    "ipAddress" TEXT,
    "userAgent" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "magazine_subscribers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "youth_interest_submissions" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "age" INTEGER,
    "district" TEXT,
    "motivation" TEXT,
    "status" "SubmissionStatus" NOT NULL DEFAULT 'NEW',
    "consentedAt" TIMESTAMP(3) NOT NULL,
    "ipAddress" TEXT,
    "userAgent" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "youth_interest_submissions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "landing_pages_key_key" ON "landing_pages"("key");

-- CreateIndex
CREATE INDEX "landing_pages_status_publishedAt_idx" ON "landing_pages"("status", "publishedAt");

-- CreateIndex
CREATE INDEX "landing_sections_landingPageId_isVisible_sortOrder_idx" ON "landing_sections"("landingPageId", "isVisible", "sortOrder");

-- CreateIndex
CREATE UNIQUE INDEX "landing_sections_landingPageId_key_key" ON "landing_sections"("landingPageId", "key");

-- CreateIndex
CREATE UNIQUE INDEX "landing_sections_landingPageId_type_key" ON "landing_sections"("landingPageId", "type");

-- CreateIndex
CREATE INDEX "hero_slides_landingSectionId_isVisible_sortOrder_idx" ON "hero_slides"("landingSectionId", "isVisible", "sortOrder");

-- CreateIndex
CREATE UNIQUE INDEX "hero_slides_landingSectionId_key_key" ON "hero_slides"("landingSectionId", "key");

-- CreateIndex
CREATE INDEX "landing_section_items_landingSectionId_kind_isVisible_sortO_idx" ON "landing_section_items"("landingSectionId", "kind", "isVisible", "sortOrder");

-- CreateIndex
CREATE UNIQUE INDEX "landing_section_items_landingSectionId_key_key" ON "landing_section_items"("landingSectionId", "key");

-- CreateIndex
CREATE INDEX "landing_metrics_landingSectionId_isVisible_sortOrder_idx" ON "landing_metrics"("landingSectionId", "isVisible", "sortOrder");

-- CreateIndex
CREATE UNIQUE INDEX "landing_metrics_landingSectionId_key_key" ON "landing_metrics"("landingSectionId", "key");

-- CreateIndex
CREATE INDEX "landing_revisions_landingPageId_createdAt_idx" ON "landing_revisions"("landingPageId", "createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "landing_revisions_landingPageId_version_key" ON "landing_revisions"("landingPageId", "version");

-- CreateIndex
CREATE UNIQUE INDEX "media_assets_storageKey_key" ON "media_assets"("storageKey");

-- CreateIndex
CREATE INDEX "media_assets_type_createdAt_idx" ON "media_assets"("type", "createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "news_articles_slug_key" ON "news_articles"("slug");

-- CreateIndex
CREATE INDEX "news_articles_status_publishedAt_idx" ON "news_articles"("status", "publishedAt");

-- CreateIndex
CREATE UNIQUE INDEX "publications_slug_key" ON "publications"("slug");

-- CreateIndex
CREATE INDEX "publications_status_publishedAt_idx" ON "publications"("status", "publishedAt");

-- CreateIndex
CREATE UNIQUE INDEX "partners_slug_key" ON "partners"("slug");

-- CreateIndex
CREATE INDEX "partners_type_isActive_idx" ON "partners"("type", "isActive");

-- CreateIndex
CREATE INDEX "landing_news_selections_landingSectionId_sortOrder_idx" ON "landing_news_selections"("landingSectionId", "sortOrder");

-- CreateIndex
CREATE INDEX "landing_publication_selections_landingSectionId_sortOrder_idx" ON "landing_publication_selections"("landingSectionId", "sortOrder");

-- CreateIndex
CREATE INDEX "landing_partner_selections_landingSectionId_sortOrder_idx" ON "landing_partner_selections"("landingSectionId", "sortOrder");

-- CreateIndex
CREATE UNIQUE INDEX "magazine_subscribers_email_key" ON "magazine_subscribers"("email");

-- CreateIndex
CREATE INDEX "magazine_subscribers_status_createdAt_idx" ON "magazine_subscribers"("status", "createdAt");

-- CreateIndex
CREATE INDEX "youth_interest_submissions_email_idx" ON "youth_interest_submissions"("email");

-- CreateIndex
CREATE INDEX "youth_interest_submissions_status_createdAt_idx" ON "youth_interest_submissions"("status", "createdAt");

-- AddForeignKey
ALTER TABLE "landing_pages" ADD CONSTRAINT "landing_pages_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "landing_pages" ADD CONSTRAINT "landing_pages_updatedById_fkey" FOREIGN KEY ("updatedById") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "landing_sections" ADD CONSTRAINT "landing_sections_landingPageId_fkey" FOREIGN KEY ("landingPageId") REFERENCES "landing_pages"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "landing_sections" ADD CONSTRAINT "landing_sections_backgroundImageId_fkey" FOREIGN KEY ("backgroundImageId") REFERENCES "media_assets"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "hero_slides" ADD CONSTRAINT "hero_slides_landingSectionId_fkey" FOREIGN KEY ("landingSectionId") REFERENCES "landing_sections"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "hero_slides" ADD CONSTRAINT "hero_slides_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "media_assets"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "landing_section_items" ADD CONSTRAINT "landing_section_items_landingSectionId_fkey" FOREIGN KEY ("landingSectionId") REFERENCES "landing_sections"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "landing_section_items" ADD CONSTRAINT "landing_section_items_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "media_assets"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "landing_metrics" ADD CONSTRAINT "landing_metrics_landingSectionId_fkey" FOREIGN KEY ("landingSectionId") REFERENCES "landing_sections"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "landing_revisions" ADD CONSTRAINT "landing_revisions_landingPageId_fkey" FOREIGN KEY ("landingPageId") REFERENCES "landing_pages"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "landing_revisions" ADD CONSTRAINT "landing_revisions_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "media_assets" ADD CONSTRAINT "media_assets_uploadedById_fkey" FOREIGN KEY ("uploadedById") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "news_articles" ADD CONSTRAINT "news_articles_coverImageId_fkey" FOREIGN KEY ("coverImageId") REFERENCES "media_assets"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "publications" ADD CONSTRAINT "publications_coverImageId_fkey" FOREIGN KEY ("coverImageId") REFERENCES "media_assets"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "publications" ADD CONSTRAINT "publications_fileAssetId_fkey" FOREIGN KEY ("fileAssetId") REFERENCES "media_assets"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "partners" ADD CONSTRAINT "partners_logoId_fkey" FOREIGN KEY ("logoId") REFERENCES "media_assets"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "landing_news_selections" ADD CONSTRAINT "landing_news_selections_landingSectionId_fkey" FOREIGN KEY ("landingSectionId") REFERENCES "landing_sections"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "landing_news_selections" ADD CONSTRAINT "landing_news_selections_newsArticleId_fkey" FOREIGN KEY ("newsArticleId") REFERENCES "news_articles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "landing_publication_selections" ADD CONSTRAINT "landing_publication_selections_landingSectionId_fkey" FOREIGN KEY ("landingSectionId") REFERENCES "landing_sections"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "landing_publication_selections" ADD CONSTRAINT "landing_publication_selections_publicationId_fkey" FOREIGN KEY ("publicationId") REFERENCES "publications"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "landing_partner_selections" ADD CONSTRAINT "landing_partner_selections_landingSectionId_fkey" FOREIGN KEY ("landingSectionId") REFERENCES "landing_sections"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "landing_partner_selections" ADD CONSTRAINT "landing_partner_selections_partnerId_fkey" FOREIGN KEY ("partnerId") REFERENCES "partners"("id") ON DELETE CASCADE ON UPDATE CASCADE;
