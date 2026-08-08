"use client";

import { ImageIcon } from "lucide-react";
import { ImageUploader } from "@/components/dashboard/landing/image-uploader";
import type { LandingSection } from "@/components/dashboard/landing/types";

export function SectionMediaEditor({
  section,
  onChanged,
}: {
  section: LandingSection;
  onChanged: () => Promise<void> | void;
}) {
  const imageItems = section.items.filter((item) => item.kind !== "LOCATION");
  const hasRelatedImages =
    section.slides.length > 0 ||
    imageItems.length > 0 ||
    section.newsSelections.length > 0 ||
    section.publicationSelections.length > 0 ||
    section.partnerSelections.length > 0;

  return (
    <section className="mt-6 border-t border-slate-200 pt-5">
      <div className="mb-4 flex items-center gap-2">
        <ImageIcon className="h-4 w-4 text-[#0193CD]" />
        <h4 className="text-sm font-black text-slate-900">Section images</h4>
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        <ImageUploader
          label={`${section.title} background`}
          targetType="section"
          targetId={section.id}
          currentImage={section.backgroundImage}
          onChanged={onChanged}
        />

        {section.slides.map((slide) => (
          <ImageUploader
            key={slide.id}
            label={`Slide: ${slide.title}`}
            targetType="slide"
            targetId={slide.id}
            currentImage={slide.image}
            onChanged={onChanged}
          />
        ))}

        {imageItems.map((item) => (
          <ImageUploader
            key={item.id}
            label={item.title}
            targetType="item"
            targetId={item.id}
            currentImage={item.image}
            onChanged={onChanged}
          />
        ))}

        {section.newsSelections.map(({ newsArticle }) => (
          <ImageUploader
            key={newsArticle.id}
            label={`News: ${newsArticle.title}`}
            targetType="news"
            targetId={newsArticle.id}
            currentImage={newsArticle.coverImage}
            onChanged={onChanged}
          />
        ))}

        {section.publicationSelections.map(({ publication }) => (
          <ImageUploader
            key={publication.id}
            label={`Publication: ${publication.title}`}
            targetType="publication"
            targetId={publication.id}
            currentImage={publication.coverImage}
            onChanged={onChanged}
          />
        ))}

        {section.partnerSelections.map(({ partner }) => (
          <ImageUploader
            key={partner.id}
            label={`Partner: ${partner.name}`}
            targetType="partner"
            targetId={partner.id}
            currentImage={partner.logo}
            onChanged={onChanged}
          />
        ))}
      </div>

      {!hasRelatedImages ? (
        <p className="mt-3 text-xs leading-5 text-slate-400">
          Add cards or select related content to manage their individual images here.
        </p>
      ) : null}
    </section>
  );
}
