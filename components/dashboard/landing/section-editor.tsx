"use client";

import { useEffect, useState, type FormEvent } from "react";
import { Loader2, Save, X } from "lucide-react";
import type {
  LandingSection,
  SectionUpdate,
} from "@/components/dashboard/landing/types";
import { SectionMediaEditor } from "@/components/dashboard/landing/section-media-editor";
import { SectionItemsEditor } from "@/components/dashboard/landing/section-items-editor";
import { PublicationsEditor } from "@/components/dashboard/landing/publications-editor";
import { HeroSlidesEditor } from "@/components/dashboard/landing/hero-slides-editor";
import { MetricsEditor } from "@/components/dashboard/landing/metrics-editor";
import { NewsEditor } from "@/components/dashboard/landing/news-editor";
import { PartnersEditor } from "@/components/dashboard/landing/partners-editor";
import { StructuredItemsEditor } from "@/components/dashboard/landing/structured-items-editor";

type SectionEditorProps = {
  section: LandingSection;
  saving: boolean;
  onCancel: () => void;
  onSave: (sectionId: string, input: SectionUpdate) => Promise<void>;
  onMediaChanged: () => Promise<void> | void;
};

function getDraft(section: LandingSection): SectionUpdate {
  return {
    eyebrow: section.eyebrow,
    title: section.title,
    highlightedTitle: section.highlightedTitle,
    subtitle: section.subtitle,
    description: section.description,
    primaryCtaLabel: section.primaryCtaLabel,
    primaryCtaHref: section.primaryCtaHref,
    secondaryCtaLabel: section.secondaryCtaLabel,
    secondaryCtaHref: section.secondaryCtaHref,
    isVisible: section.isVisible,
  };
}

export function SectionEditor({
  section,
  saving,
  onCancel,
  onSave,
  onMediaChanged,
}: SectionEditorProps) {
  const [draft, setDraft] = useState(() => getDraft(section));
  const sectionFormId = `landing-section-${section.id}`;

  useEffect(() => setDraft(getDraft(section)), [section]);

  const update = <K extends keyof SectionUpdate>(
    key: K,
    value: SectionUpdate[K],
  ) => setDraft((current) => ({ ...current, [key]: value }));

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    await onSave(section.id, draft);
  }

  return (
    <div className="border-t border-slate-200 bg-slate-50/80 p-4 sm:p-5">
      <form id={sectionFormId} onSubmit={handleSubmit}>
        <div className="mb-5 flex items-center justify-between gap-3">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.16em] text-[#0193CD]">
              Edit section
            </p>
            <h3 className="mt-1 font-black text-slate-900">{section.title}</h3>
          </div>
          <button
            type="button"
            onClick={onCancel}
            className="grid h-9 w-9 place-items-center rounded-xl border border-slate-200 bg-white text-slate-500 transition hover:text-slate-900"
            aria-label="Close editor"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Field label="Eyebrow" value={draft.eyebrow} onChange={(value) => update("eyebrow", value)} />
          <Field label="Section title" required value={draft.title} onChange={(value) => update("title", value ?? "")} />
          <Field label="Highlighted title" value={draft.highlightedTitle} onChange={(value) => update("highlightedTitle", value)} />
          <Field label="Subtitle" value={draft.subtitle} onChange={(value) => update("subtitle", value)} />
          <div className="md:col-span-2">
            <TextArea label="Description" value={draft.description} onChange={(value) => update("description", value)} />
          </div>
          <Field label="Primary button label" value={draft.primaryCtaLabel} onChange={(value) => update("primaryCtaLabel", value)} />
          <Field label="Primary button link" value={draft.primaryCtaHref} onChange={(value) => update("primaryCtaHref", value)} placeholder="/what-we-do" />
          <Field label="Secondary button label" value={draft.secondaryCtaLabel} onChange={(value) => update("secondaryCtaLabel", value)} />
          <Field label="Secondary button link" value={draft.secondaryCtaHref} onChange={(value) => update("secondaryCtaHref", value)} placeholder="/contact-us" />
        </div>

        <label className="mt-4 flex w-fit cursor-pointer items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3">
          <input
            type="checkbox"
            checked={draft.isVisible}
            onChange={(event) => update("isVisible", event.target.checked)}
            className="h-4 w-4 accent-[#0193CD]"
          />
          <span className="text-sm font-bold text-slate-700">Visible on homepage</span>
        </label>
      </form>

      <SectionMediaEditor section={section} onChanged={onMediaChanged} />

      {section.type === "HERO" ? (
        <HeroSlidesEditor section={section} onChanged={onMediaChanged} />
      ) : null}

      {section.type === "WHO_WE_ARE" ? (
        <SectionItemsEditor section={section} onChanged={onMediaChanged} />
      ) : null}

      {["WHAT_WE_DO", "NAYON", "MAGAZINE_SUBSCRIPTION"].includes(
        section.type,
      ) ? (
        <StructuredItemsEditor section={section} onChanged={onMediaChanged} />
      ) : null}

      {section.type === "PUBLICATIONS" ? (
        <PublicationsEditor section={section} onChanged={onMediaChanged} />
      ) : null}

      {section.type === "GLOBAL_REACH" ? (
        <MetricsEditor section={section} onChanged={onMediaChanged} />
      ) : null}

      {section.type === "LATEST_NEWS" ? (
        <NewsEditor section={section} onChanged={onMediaChanged} />
      ) : null}

      {section.type === "PARTNERS" ? (
        <PartnersEditor section={section} onChanged={onMediaChanged} />
      ) : null}

      <div className="mt-5 flex flex-wrap justify-end gap-3">
        <button
          type="button"
          onClick={onCancel}
          className="h-11 rounded-2xl border border-slate-200 bg-white px-5 text-sm font-bold text-slate-600"
        >
          Cancel
        </button>
        <button
          type="submit"
          form={sectionFormId}
          disabled={saving || !draft.title.trim()}
          className="inline-flex h-11 items-center gap-2 rounded-2xl bg-[#0193CD] px-5 text-sm font-black text-white transition hover:bg-[#007fb3] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {saving ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
          Save section
        </button>
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  required,
}: {
  label: string;
  value: string | null;
  onChange: (value: string | null) => void;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-black uppercase tracking-[0.12em] text-slate-500">
        {label}
      </span>
      <input
        required={required}
        value={value ?? ""}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value || null)}
        className="h-11 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-800 outline-none transition focus:border-[#0193CD] focus:ring-4 focus:ring-sky-100"
      />
    </label>
  );
}

function TextArea({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string | null;
  onChange: (value: string | null) => void;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-black uppercase tracking-[0.12em] text-slate-500">
        {label}
      </span>
      <textarea
        rows={4}
        value={value ?? ""}
        onChange={(event) => onChange(event.target.value || null)}
        className="w-full resize-y rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm leading-6 text-slate-800 outline-none transition focus:border-[#0193CD] focus:ring-4 focus:ring-sky-100"
      />
    </label>
  );
}
