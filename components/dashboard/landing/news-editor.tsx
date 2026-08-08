"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import { ArrowDown, ArrowUp, Loader2, Newspaper, Pencil, Plus, Save, Trash2, X } from "lucide-react";
import { toast } from "sonner";
import type { LandingSection, LandingStatus } from "@/components/dashboard/landing/types";

type Selection = LandingSection["newsSelections"][number];
type Draft = { slug: string; title: string; category: string; excerpt: string; content: string; status: LandingStatus; publishedAt: string; featured: boolean };
const emptyDraft: Draft = { slug: "", title: "", category: "", excerpt: "", content: "", status: "PUBLISHED", publishedAt: new Date().toISOString().slice(0, 10), featured: false };

function slugify(value: string) { return value.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""); }
function fromSelection(selection: Selection): Draft { const article = selection.newsArticle; return { slug: article.slug, title: article.title, category: article.category ?? "", excerpt: article.excerpt ?? "", content: article.content ?? "", status: article.status, publishedAt: article.publishedAt?.slice(0, 10) ?? "", featured: article.featured }; }
async function request(url: string, init: RequestInit) { const response = await fetch(url, { ...init, headers: { "Content-Type": "application/json", ...init.headers } }); const payload = await response.json(); if (!response.ok || !payload.success) throw new Error(payload.error?.message ?? "News request failed."); return payload.data; }

export function NewsEditor({ section, onChanged }: { section: LandingSection; onChanged: () => Promise<void> | void }) {
  const [editingId, setEditingId] = useState<string | "new" | null>(null);
  const [draft, setDraft] = useState<Draft>(emptyDraft);
  const [pending, setPending] = useState(false);

  async function save(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setPending(true);
    const input = { slug: draft.slug || slugify(draft.title), title: draft.title, category: draft.category || null, excerpt: draft.excerpt || null, content: draft.content || null, status: draft.status, featured: draft.featured, publishedAt: draft.publishedAt ? new Date(`${draft.publishedAt}T00:00:00.000Z`).toISOString() : null };
    try {
      if (editingId === "new") await request(`/api/v1/admin/landing/sections/${section.id}/news`, { method: "POST", body: JSON.stringify(input) });
      else if (editingId) await request(`/api/v1/admin/news/${editingId}`, { method: "PATCH", body: JSON.stringify(input) });
      setEditingId(null); await onChanged(); toast.success(editingId === "new" ? "News article added." : "News article updated.");
    } catch (error) { toast.error(error instanceof Error ? error.message : "News save failed."); }
    finally { setPending(false); }
  }

  async function remove(selection: Selection) {
    const article = selection.newsArticle; if (!window.confirm(`Delete “${article.title}”?`)) return; setPending(true);
    try { await request(`/api/v1/admin/news/${article.id}`, { method: "DELETE" }); await onChanged(); toast.success("News article deleted."); }
    catch (error) { toast.error(error instanceof Error ? error.message : "Delete failed."); }
    finally { setPending(false); }
  }

  async function move(index: number, direction: -1 | 1) {
    const destination = index + direction; if (destination < 0 || destination >= section.newsSelections.length) return;
    const reordered = [...section.newsSelections]; [reordered[index], reordered[destination]] = [reordered[destination], reordered[index]]; setPending(true);
    try { await request(`/api/v1/admin/landing/sections/${section.id}/selections/news`, { method: "PUT", body: JSON.stringify({ entries: reordered.map((entry, sortOrder) => ({ id: entry.newsArticle.id, sortOrder, isFeatured: sortOrder === 0 })) }) }); await onChanged(); toast.success("News order updated."); }
    catch (error) { toast.error(error instanceof Error ? error.message : "Reorder failed."); }
    finally { setPending(false); }
  }

  return <section className="mt-6 border-t border-slate-200 pt-5">
    <div className="mb-4 flex items-center justify-between gap-3"><div><h4 className="flex items-center gap-2 text-sm font-black text-slate-900"><Newspaper className="size-4 text-[#0193CD]" /> Latest news</h4><p className="mt-1 text-xs text-slate-400">Create and order the published stories shown on the homepage.</p></div><button type="button" onClick={() => { setDraft({ ...emptyDraft, publishedAt: new Date().toISOString().slice(0, 10) }); setEditingId("new"); }} className="inline-flex h-9 items-center gap-2 rounded-xl bg-[#0193CD] px-3 text-xs font-black text-white"><Plus className="size-3.5" /> Add story</button></div>
    <div className="space-y-3">{section.newsSelections.map((selection, index) => { const article = selection.newsArticle; return <article key={article.id} className="overflow-hidden rounded-2xl border border-slate-200 bg-white"><div className="flex flex-wrap items-center gap-3 p-3"><div className="relative size-14 shrink-0 overflow-hidden rounded-xl bg-slate-100">{article.coverImage?.url ? <Image src={article.coverImage.url} alt="" fill sizes="56px" className="object-cover" /> : null}</div><div className="min-w-0 flex-1"><p className="truncate text-sm font-bold text-slate-800">{article.title}</p><p className="mt-1 text-[11px] text-slate-400">{article.category ?? "Uncategorized"} · {article.status.replaceAll("_", " ")}</p></div><Button label="Move up" disabled={pending || index === 0} onClick={() => void move(index, -1)}><ArrowUp className="size-3.5" /></Button><Button label="Move down" disabled={pending || index === section.newsSelections.length - 1} onClick={() => void move(index, 1)}><ArrowDown className="size-3.5" /></Button><Button label="Edit" onClick={() => { setDraft(fromSelection(selection)); setEditingId(article.id); }}><Pencil className="size-3.5" /></Button><Button label="Delete" danger disabled={pending} onClick={() => void remove(selection)}><Trash2 className="size-3.5" /></Button></div>{editingId === article.id ? <NewsForm draft={draft} setDraft={setDraft} pending={pending} onSubmit={save} onCancel={() => setEditingId(null)} /> : null}</article>; })}</div>
    {editingId === "new" ? <div className="mt-3 overflow-hidden rounded-2xl border border-sky-200 bg-white"><NewsForm draft={draft} setDraft={setDraft} pending={pending} onSubmit={save} onCancel={() => setEditingId(null)} /></div> : null}
  </section>;
}

function NewsForm({ draft, setDraft, pending, onSubmit, onCancel }: { draft: Draft; setDraft: React.Dispatch<React.SetStateAction<Draft>>; pending: boolean; onSubmit: (event: FormEvent<HTMLFormElement>) => Promise<void>; onCancel: () => void }) {
  const field = <K extends keyof Draft>(key: K, value: Draft[K]) => setDraft((current) => ({ ...current, [key]: value }));
  return <form onSubmit={onSubmit} className="grid gap-3 border-t border-slate-100 p-4 md:grid-cols-2"><Input label="Title" required value={draft.title} onChange={(value) => field("title", value)} /><Input label="Slug" value={draft.slug} onChange={(value) => field("slug", value)} placeholder="Auto-generated from title" /><Input label="Category" value={draft.category} onChange={(value) => field("category", value)} /><Input label="Published date" type="date" value={draft.publishedAt} onChange={(value) => field("publishedAt", value)} /><label><span className="mb-1.5 block text-[10px] font-black uppercase tracking-wider text-slate-400">Status</span><select value={draft.status} onChange={(event) => field("status", event.target.value as LandingStatus)} className="h-10 w-full rounded-xl border border-slate-200 px-3 text-sm"><option value="DRAFT">Draft</option><option value="IN_REVIEW">In review</option><option value="PUBLISHED">Published</option><option value="ARCHIVED">Archived</option></select></label><label className="flex items-center gap-2 pt-6 text-xs font-bold text-slate-600"><input type="checkbox" checked={draft.featured} onChange={(event) => field("featured", event.target.checked)} className="accent-[#0193CD]" /> Featured story</label><Area label="Excerpt" value={draft.excerpt} onChange={(value) => field("excerpt", value)} /><Area label="Full story" value={draft.content} onChange={(value) => field("content", value)} rows={6} /><div className="flex justify-end gap-2 md:col-span-2"><button type="button" onClick={onCancel} className="inline-flex h-9 items-center gap-2 rounded-xl border border-slate-200 px-3 text-xs font-bold text-slate-500"><X className="size-3.5" /> Cancel</button><button type="submit" disabled={pending || !draft.title.trim()} className="inline-flex h-9 items-center gap-2 rounded-xl bg-[#0193CD] px-4 text-xs font-black text-white disabled:opacity-60">{pending ? <Loader2 className="size-3.5 animate-spin" /> : <Save className="size-3.5" />} Save story</button></div></form>;
}
function Input({ label, value, onChange, placeholder, required, type = "text" }: { label: string; value: string; onChange: (value: string) => void; placeholder?: string; required?: boolean; type?: string }) { return <label><span className="mb-1.5 block text-[10px] font-black uppercase tracking-wider text-slate-400">{label}</span><input type={type} required={required} value={value} onChange={(event) => onChange(event.target.value)} placeholder={placeholder} className="h-10 w-full rounded-xl border border-slate-200 px-3 text-sm outline-none focus:border-[#0193CD]" /></label>; }
function Area({ label, value, onChange, rows = 3 }: { label: string; value: string; onChange: (value: string) => void; rows?: number }) { return <label className="md:col-span-2"><span className="mb-1.5 block text-[10px] font-black uppercase tracking-wider text-slate-400">{label}</span><textarea rows={rows} value={value} onChange={(event) => onChange(event.target.value)} className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:border-[#0193CD]" /></label>; }
function Button({ label, onClick, disabled, danger, children }: { label: string; onClick: () => void; disabled?: boolean; danger?: boolean; children: React.ReactNode }) { return <button type="button" title={label} aria-label={label} disabled={disabled} onClick={onClick} className={danger ? "grid size-8 place-items-center rounded-lg border border-red-100 text-red-500 disabled:opacity-30" : "grid size-8 place-items-center rounded-lg border border-slate-200 text-slate-500 hover:text-[#0193CD] disabled:opacity-30"}>{children}</button>; }
