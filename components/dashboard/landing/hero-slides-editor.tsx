"use client";

import { useState, type FormEvent } from "react";
import {
  ArrowDown,
  ArrowUp,
  Eye,
  EyeOff,
  Loader2,
  Pencil,
  Plus,
  Save,
  Trash2,
  X,
} from "lucide-react";
import { toast } from "sonner";
import type { LandingSection } from "@/components/dashboard/landing/types";

type Slide = LandingSection["slides"][number];
type SlideDraft = {
  key: string;
  title: string;
  accentText: string;
  description: string;
  shortText: string;
  href: string;
  isVisible: boolean;
};

const emptyDraft: SlideDraft = {
  key: "",
  title: "",
  accentText: "",
  description: "",
  shortText: "",
  href: "",
  isVisible: true,
};

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function fromSlide(slide: Slide): SlideDraft {
  return {
    key: slide.key,
    title: slide.title,
    accentText: slide.accentText ?? "",
    description: slide.description ?? "",
    shortText: slide.shortText ?? "",
    href: slide.href ?? "",
    isVisible: slide.isVisible,
  };
}

async function request(url: string, init: RequestInit) {
  const response = await fetch(url, {
    ...init,
    headers: { "Content-Type": "application/json", ...init.headers },
  });
  const payload = await response.json();
  if (!response.ok || !payload.success) {
    throw new Error(payload.error?.message ?? "Slide request failed.");
  }
  return payload.data;
}

export function HeroSlidesEditor({
  section,
  onChanged,
}: {
  section: LandingSection;
  onChanged: () => Promise<void> | void;
}) {
  const [editingId, setEditingId] = useState<string | "new" | null>(null);
  const [draft, setDraft] = useState<SlideDraft>(emptyDraft);
  const [pending, setPending] = useState(false);

  function startNew() {
    setDraft(emptyDraft);
    setEditingId("new");
  }

  function startEdit(slide: Slide) {
    setDraft(fromSlide(slide));
    setEditingId(slide.id);
  }

  async function save(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPending(true);
    const input = {
      key: draft.key || slugify(draft.title),
      title: draft.title,
      accentText: draft.accentText || null,
      description: draft.description || null,
      shortText: draft.shortText || null,
      href: draft.href || null,
      isVisible: draft.isVisible,
    };

    try {
      if (editingId === "new") {
        await request(`/api/v1/admin/landing/sections/${section.id}/slides`, {
          method: "POST",
          body: JSON.stringify({ ...input, sortOrder: section.slides.length }),
        });
      } else if (editingId) {
        await request(`/api/v1/admin/landing/slides/${editingId}`, {
          method: "PATCH",
          body: JSON.stringify(input),
        });
      }
      toast.success(editingId === "new" ? "Slide added." : "Slide updated.");
      setEditingId(null);
      await onChanged();
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Slide save failed.");
    } finally {
      setPending(false);
    }
  }

  async function remove(slide: Slide) {
    if (!window.confirm(`Delete “${slide.title}”?`)) return;
    setPending(true);
    try {
      await request(`/api/v1/admin/landing/slides/${slide.id}`, {
        method: "DELETE",
      });
      if (editingId === slide.id) setEditingId(null);
      await onChanged();
      toast.success("Slide deleted.");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Delete failed.");
    } finally {
      setPending(false);
    }
  }

  async function move(index: number, direction: -1 | 1) {
    const destination = index + direction;
    if (destination < 0 || destination >= section.slides.length) return;
    const current = section.slides[index];
    const target = section.slides[destination];
    setPending(true);
    try {
      await Promise.all([
        request(`/api/v1/admin/landing/slides/${current.id}`, {
          method: "PATCH",
          body: JSON.stringify({ sortOrder: destination }),
        }),
        request(`/api/v1/admin/landing/slides/${target.id}`, {
          method: "PATCH",
          body: JSON.stringify({ sortOrder: index }),
        }),
      ]);
      await onChanged();
      toast.success("Slide order updated.");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Reorder failed.");
    } finally {
      setPending(false);
    }
  }

  return (
    <section className="mt-6 border-t border-slate-200 pt-5">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          <h4 className="text-sm font-black text-slate-900">Hero slides</h4>
          <p className="mt-1 text-xs text-slate-400">
            Manage carousel copy, links, visibility, and order. Images are managed above.
          </p>
        </div>
        <button type="button" onClick={startNew} className="inline-flex h-9 items-center gap-2 rounded-xl bg-[#0193CD] px-3 text-xs font-black text-white">
          <Plus className="size-3.5" /> Add slide
        </button>
      </div>

      <div className="space-y-2">
        {section.slides.map((slide, index) => (
          <div key={slide.id} className="rounded-2xl border border-slate-200 bg-white">
            <div className="flex flex-wrap items-center gap-2 p-3">
              <span className="grid size-9 place-items-center rounded-xl bg-sky-50 text-xs font-black text-[#0193CD]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-bold text-slate-800">{slide.title} {slide.accentText}</p>
                <p className="truncate text-xs text-slate-400">{slide.href || "No link"}</p>
              </div>
              {slide.isVisible ? <Eye className="size-4 text-emerald-500" /> : <EyeOff className="size-4 text-slate-300" />}
              <IconButton label={`Move ${slide.title} up`} disabled={pending || index === 0} onClick={() => void move(index, -1)}><ArrowUp className="size-3.5" /></IconButton>
              <IconButton label={`Move ${slide.title} down`} disabled={pending || index === section.slides.length - 1} onClick={() => void move(index, 1)}><ArrowDown className="size-3.5" /></IconButton>
              <IconButton label={`Edit ${slide.title}`} onClick={() => startEdit(slide)}><Pencil className="size-3.5" /></IconButton>
              <IconButton label={`Delete ${slide.title}`} danger disabled={pending} onClick={() => void remove(slide)}><Trash2 className="size-3.5" /></IconButton>
            </div>
            {editingId === slide.id ? <SlideForm draft={draft} setDraft={setDraft} pending={pending} onSubmit={save} onCancel={() => setEditingId(null)} /> : null}
          </div>
        ))}
      </div>

      {editingId === "new" ? (
        <div className="mt-3 rounded-2xl border border-sky-200 bg-white">
          <SlideForm draft={draft} setDraft={setDraft} pending={pending} onSubmit={save} onCancel={() => setEditingId(null)} />
        </div>
      ) : null}
    </section>
  );
}

function SlideForm({ draft, setDraft, pending, onSubmit, onCancel }: {
  draft: SlideDraft;
  setDraft: React.Dispatch<React.SetStateAction<SlideDraft>>;
  pending: boolean;
  onSubmit: (event: FormEvent<HTMLFormElement>) => Promise<void>;
  onCancel: () => void;
}) {
  const field = (key: keyof SlideDraft, value: string | boolean) => setDraft((current) => ({ ...current, [key]: value }));
  return (
    <form onSubmit={onSubmit} className="grid gap-3 border-t border-slate-100 p-4 md:grid-cols-2">
      <Input label="Title" required value={draft.title} onChange={(value) => field("title", value)} />
      <Input label="Accent text" value={draft.accentText} onChange={(value) => field("accentText", value)} />
      <Input label="Key" value={draft.key} onChange={(value) => field("key", value)} placeholder="Auto-generated from title" />
      <Input label="Short label" value={draft.shortText} onChange={(value) => field("shortText", value)} />
      <Input label="Link" value={draft.href} onChange={(value) => field("href", value)} placeholder="/what-we-do" />
      <label className="flex items-center gap-3 pt-6 text-sm font-bold text-slate-600"><input type="checkbox" checked={draft.isVisible} onChange={(event) => field("isVisible", event.target.checked)} className="size-4 accent-[#0193CD]" /> Visible</label>
      <label className="md:col-span-2"><span className="mb-1.5 block text-[10px] font-black uppercase tracking-wider text-slate-400">Description</span><textarea rows={3} value={draft.description} onChange={(event) => field("description", event.target.value)} className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:border-[#0193CD]" /></label>
      <div className="flex justify-end gap-2 md:col-span-2"><button type="button" onClick={onCancel} className="inline-flex h-9 items-center gap-2 rounded-xl border border-slate-200 px-3 text-xs font-bold text-slate-500"><X className="size-3.5" /> Cancel</button><button type="submit" disabled={pending || !draft.title.trim()} className="inline-flex h-9 items-center gap-2 rounded-xl bg-[#0193CD] px-4 text-xs font-black text-white disabled:opacity-60">{pending ? <Loader2 className="size-3.5 animate-spin" /> : <Save className="size-3.5" />} Save slide</button></div>
    </form>
  );
}

function Input({ label, value, onChange, placeholder, required }: { label: string; value: string; onChange: (value: string) => void; placeholder?: string; required?: boolean }) {
  return <label><span className="mb-1.5 block text-[10px] font-black uppercase tracking-wider text-slate-400">{label}</span><input required={required} value={value} onChange={(event) => onChange(event.target.value)} placeholder={placeholder} className="h-10 w-full rounded-xl border border-slate-200 px-3 text-sm outline-none focus:border-[#0193CD]" /></label>;
}

function IconButton({ label, onClick, disabled, danger, children }: { label: string; onClick: () => void; disabled?: boolean; danger?: boolean; children: React.ReactNode }) {
  return <button type="button" aria-label={label} title={label} disabled={disabled} onClick={onClick} className={danger ? "grid size-8 place-items-center rounded-lg border border-red-100 text-red-500 disabled:opacity-30" : "grid size-8 place-items-center rounded-lg border border-slate-200 text-slate-500 hover:text-[#0193CD] disabled:opacity-30"}>{children}</button>;
}
