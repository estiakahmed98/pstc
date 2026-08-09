-- CreateTable
CREATE TABLE "cms_pages" (
    "id" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "status" "ContentStatus" NOT NULL DEFAULT 'DRAFT',
    "version" INTEGER NOT NULL DEFAULT 1,
    "seoTitle" TEXT,
    "seoDescription" TEXT,
    "draftContent" JSONB NOT NULL,
    "publishedContent" JSONB,
    "publishedAt" TIMESTAMP(3),
    "createdById" TEXT,
    "updatedById" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "cms_pages_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "cms_pages_key_key" ON "cms_pages"("key");

-- CreateIndex
CREATE INDEX "cms_pages_status_publishedAt_idx" ON "cms_pages"("status", "publishedAt");

-- AddForeignKey
ALTER TABLE "cms_pages" ADD CONSTRAINT "cms_pages_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cms_pages" ADD CONSTRAINT "cms_pages_updatedById_fkey" FOREIGN KEY ("updatedById") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
