"use client";

import { useState, type Dispatch, type FormEvent, type SetStateAction } from "react";
import { ArrowDown, ArrowUp, FileText, Loader2, Pencil, Plus, Save, Trash2, X } from "lucide-react";
import { toast } from "sonner";
import { DocumentUploader } from "@/components/dashboard/landing/document-uploader";
import type { LandingSection, LandingStatus } from "@/components/dashboard/landing/types";

type Selection = LandingSection["publicationSelections"][number];
type Draft = {
  slug: string;
  title: string;
  category: string;
  description: string;
  pageCount: string;
  status: LandingStatus;
  publishedAt: string;
  featured: boolean;
};

const emptyDraft: Draft = {
  slug: "",
  title: "",
  category: "",
  description: "",
  pageCount: "",
  status: "PUBLISHED",
  publishedAt: new Date().toISOString().slice(0, 10),
  featured: false,
};

function slugify(value: string) {
  return value.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function fromSelection(selection: Selection): Draft {
  const publication = selection.publication;
  return {
    slug: publication.slug,
    title: publication.title,
    category: publication.category ?? "",
    description: publication.description ?? "",
    pageCount: publication.pageCount?.toString() ?? "",
    status: publication.status,
    publishedAt: publication.publishedAt?.slice(0, 10) ?? "",
    featured: publication.featured,
  };
}

async function apiRequest(url: string, init: RequestInit) {
  const response = await fetch(url, {
    ...init,
    headers: { "Content-Type": "application/json", ...init.headers },
  });
  const payload = await response.json();
  if (!response.ok || !payload.success) {
    throw new Error(payload.error?.message ?? "Publication request failed.");
  }
  return payload.data;
}

export function PublicationsEditor({
  section,
  onChanged,
}: {
  section: LandingSection;
  onChanged: () => Promise<void> | void;
}) {
  const [editingId, setEditingId] = useState<string | "new" | null>(null);
  const [draft, setDraft] = useState<Draft>(emptyDraft);
  const [pending, setPending] = useState(false);

  function startNew() {
    setDraft({ ...emptyDraft, publishedAt: new Date().toISOString().slice(0, 10) });
    setEditingId("new");
  }

  async function save(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPending(true);
    const input = {
      slug: draft.slug || slugify(draft.title),
      title: draft.title,
      category: draft.category || null,
      description: draft.description || null,
      pageCount: draft.pageCount ? Number(draft.pageCount) : null,
      status: draft.status,
      featured: draft.featured,
      publishedAt: draft.publishedAt ? new Date(`${draft.publishedAt}T00:00:00.000Z`).toISOString() : null,
    };
    try {
      if (editingId === "new") {
        await apiRequest(`/api/v1/admin/landing/sections/${section.id}/publications`, {
          method: "POST",
          body: JSON.stringify(input),
        });
      } else if (editingId) {
        await apiRequest(`/api/v1/admin/publications/${editingId}`, {
          method: "PATCH",
          body: JSON.stringify(input),
        });
      }
      toast.success(editingId === "new" ? "Publication added." : "Publication updated.");
      setEditingId(null);
      await onChanged();
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Publication save failed.");
    } finally {
      setPending(false);
    }
  }

  async function remove(selection: Selection) {
    if (!window.confirm(`Delete “${selection.publication.title}”?`)) return;
    setPending(true);
    try {
      await apiRequest(`/api/v1/admin/publications/${selection.publication.id}`, { method: "DELETE" });
      toast.success("Publication deleted.");
      await onChanged();
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Delete failed.");
    } finally {
      setPending(false);
    }
  }

  async function move(index: number, direction: -1 | 1) {
    const destination = index + direction;
    if (destination < 0 || destination >= section.publicationSelections.length) return;
    const reordered = [...section.publicationSelections];
    [reordered[index], reordered[destination]] = [reordered[destination], reordered[index]];
    setPending(true);
    try {
      await apiRequest(`/api/v1/admin/landing/sections/${section.id}/selections/publications`, {
        method: "PUT",
        body: JSON.stringify({
          entries: reordered.map((entry, sortOrder) => ({
            id: entry.publication.id,
            sortOrder,
            isFeatured: sortOrder === 0,
          })),
        }),
      });
      await onChanged();
      toast.success("Publication order updated.");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Reorder failed.");
    } finally {
      setPending(false);
    }
  }

  return (
    <section className="mt-6 border-t border-slate-200 pt-5">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h4 className="flex items-center gap-2 text-sm font-black text-slate-900"><FileText className="h-4 w-4 text-[#0193CD]" /> Publications</h4>
          <p className="mt-1 text-xs text-slate-400">Manage homepage publications, metadata, order, cover and PDF files.</p>
        </div>
        <button type="button" onClick={startNew} className="inline-flex h-9 items-center gap-2 rounded-xl bg-[#0193CD] px-3 text-xs font-black text-white"><Plus className="h-3.5 w-3.5" /> Add publication</button>
      </div>

      <div className="space-y-3">
        {section.publicationSelections.map((selection, index) => {
          const publication = selection.publication;
          return (
            <article key={publication.id} className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <div className="flex flex-wrap items-center gap-3 p-3">
                <div className="h-14 w-11 shrink-0 overflow-hidden rounded-lg bg-slate-100">
                  {publication.coverImage?.url ? <img src={publication.coverImage.url} alt="" className="h-full w-full object-cover" /> : null}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-bold text-slate-800">{publication.title}</p>
                  <p className="mt-1 text-[11px] text-slate-400">{publication.category ?? "Uncategorized"} · {publication.status.replaceAll("_", " ")} · {publication.pageCount ?? 0} pages</p>
                </div>
                <button type="button" disabled={pending || index === 0} onClick={() => void move(index, -1)} className="grid h-8 w-8 place-items-center rounded-lg border border-slate-200 text-slate-500 disabled:opacity-30" aria-label="Move up"><ArrowUp className="h-3.5 w-3.5" /></button>
                <button type="button" disabled={pending || index === section.publicationSelections.length - 1} onClick={() => void move(index, 1)} className="grid h-8 w-8 place-items-center rounded-lg border border-slate-200 text-slate-500 disabled:opacity-30" aria-label="Move down"><ArrowDown className="h-3.5 w-3.5" /></button>
                <button type="button" onClick={() => { setDraft(fromSelection(selection)); setEditingId(publication.id); }} className="grid h-8 w-8 place-items-center rounded-lg border border-slate-200 text-slate-500 hover:text-[#0193CD]" aria-label="Edit"><Pencil className="h-3.5 w-3.5" /></button>
                <button type="button" disabled={pending} onClick={() => void remove(selection)} className="grid h-8 w-8 place-items-center rounded-lg border border-red-100 text-red-500" aria-label="Delete"><Trash2 className="h-3.5 w-3.5" /></button>
              </div>
              <div className="px-3 pb-3">
                <DocumentUploader publicationId={publication.id} currentFile={publication.fileAsset} onChanged={onChanged} />
              </div>
              {editingId === publication.id ? <PublicationForm draft={draft} setDraft={setDraft} pending={pending} onSubmit={save} onCancel={() => setEditingId(null)} /> : null}
            </article>
          );
        })}
      </div>

      {editingId === "new" ? <div className="mt-3 overflow-hidden rounded-2xl border border-sky-200 bg-white"><PublicationForm draft={draft} setDraft={setDraft} pending={pending} onSubmit={save} onCancel={() => setEditingId(null)} /></div> : null}
    </section>
  );
}

function PublicationForm({ draft, setDraft, pending, onSubmit, onCancel }: { draft: Draft; setDraft: Dispatch<SetStateAction<Draft>>; pending: boolean; onSubmit: (event: FormEvent<HTMLFormElement>) => Promise<void>; onCancel: () => void }) {
  const field = <K extends keyof Draft>(key: K, value: Draft[K]) => setDraft((current) => ({ ...current, [key]: value }));
  return (
    <form onSubmit={onSubmit} className="grid gap-3 border-t border-slate-100 p-4 md:grid-cols-2">
      <Input label="Title" required value={draft.title} onChange={(value) => field("title", value)} />
      <Input label="Slug" value={draft.slug} onChange={(value) => field("slug", value)} placeholder="Auto-generated from title" />
      <Input label="Category" value={draft.category} onChange={(value) => field("category", value)} />
      <Input label="Pages" type="number" value={draft.pageCount} onChange={(value) => field("pageCount", value)} />
      <Input label="Published date" type="date" value={draft.publishedAt} onChange={(value) => field("publishedAt", value)} />
      <label><span className="mb-1.5 block text-[10px] font-black uppercase tracking-wider text-slate-400">Status</span><select value={draft.status} onChange={(event) => field("status", event.target.value as LandingStatus)} className="h-10 w-full rounded-xl border border-slate-200 px-3 text-sm outline-none focus:border-[#0193CD]"><option value="DRAFT">Draft</option><option value="IN_REVIEW">In review</option><option value="PUBLISHED">Published</option><option value="ARCHIVED">Archived</option></select></label>
      <label className="md:col-span-2"><span className="mb-1.5 block text-[10px] font-black uppercase tracking-wider text-slate-400">Description</span><textarea rows={3} value={draft.description} onChange={(event) => field("description", event.target.value)} className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:border-[#0193CD]" /></label>
      <label className="flex items-center gap-2 text-xs font-bold text-slate-600"><input type="checkbox" checked={draft.featured} onChange={(event) => field("featured", event.target.checked)} className="accent-[#0193CD]" /> Featured publication</label>
      <div className="flex justify-end gap-2 md:col-span-2"><button type="button" onClick={onCancel} className="inline-flex h-9 items-center gap-2 rounded-xl border border-slate-200 px-3 text-xs font-bold text-slate-500"><X className="h-3.5 w-3.5" /> Cancel</button><button type="submit" disabled={pending || !draft.title.trim()} className="inline-flex h-9 items-center gap-2 rounded-xl bg-[#0193CD] px-4 text-xs font-black text-white disabled:opacity-60">{pending ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <Save className="h-3.5 w-3.5" />} Save publication</button></div>
    </form>
  );
}

function Input({ label, value, onChange, placeholder, required, type = "text" }: { label: string; value: string; onChange: (value: string) => void; placeholder?: string; required?: boolean; type?: string }) {
  return <label><span className="mb-1.5 block text-[10px] font-black uppercase tracking-wider text-slate-400">{label}</span><input type={type} min={type === "number" ? 1 : undefined} required={required} value={value} onChange={(event) => onChange(event.target.value)} placeholder={placeholder} className="h-10 w-full rounded-xl border border-slate-200 px-3 text-sm outline-none focus:border-[#0193CD]" /></label>;
}
