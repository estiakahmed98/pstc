"use client";

import { useState, type FormEvent } from "react";
import { ArrowDown, ArrowUp, Loader2, Pencil, Plus, Save, Trash2, X } from "lucide-react";
import { toast } from "sonner";
import type { LandingSection } from "@/components/dashboard/landing/types";

type Item = LandingSection["items"][number];
type ItemKind = "ACTIVITY" | "CARD" | "CRITERION" | "STEP" | "COVER" | "PERK";
type Draft = {
  kind: ItemKind;
  key: string;
  title: string;
  subtitle: string;
  description: string;
  href: string;
  iconKey: string;
  detailsText: string;
  number: string;
  featured: boolean;
  isVisible: boolean;
};

const kindOptions: Record<string, Array<{ value: ItemKind; label: string }>> = {
  WHAT_WE_DO: [
    { value: "ACTIVITY", label: "Core activity" },
    { value: "CARD", label: "Program card" },
  ],
  NAYON: [
    { value: "CRITERION", label: "Readiness criterion" },
    { value: "STEP", label: "Onboarding step" },
  ],
  MAGAZINE_SUBSCRIPTION: [
    { value: "COVER", label: "Magazine cover" },
    { value: "PERK", label: "Subscriber perk" },
  ],
};

const iconOptions = [
  "HeartHandshake",
  "Users",
  "BarChart3",
  "BookOpen",
  "GraduationCap",
  "Shield",
  "Mail",
  "Newspaper",
  "Sparkles",
];

function slugify(value: string) {
  return value.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function emptyDraft(section: LandingSection): Draft {
  return {
    kind: kindOptions[section.type]?.[0]?.value ?? "CARD",
    key: "",
    title: "",
    subtitle: "",
    description: "",
    href: "",
    iconKey: iconOptions[0],
    detailsText: "",
    number: String(section.items.length + 1).padStart(2, "0"),
    featured: false,
    isVisible: true,
  };
}

function fromItem(item: Item): Draft {
  const details = item.details && Array.isArray(item.details.items)
    ? item.details.items.filter((entry): entry is string => typeof entry === "string").join("\n")
    : "";
  return {
    kind: item.kind as ItemKind,
    key: item.key,
    title: item.title,
    subtitle: item.subtitle ?? "",
    description: item.description ?? "",
    href: item.href ?? "",
    iconKey: item.iconKey ?? iconOptions[0],
    detailsText: details,
    number: typeof item.metadata?.number === "string" ? item.metadata.number : "",
    featured: item.metadata?.featured === true,
    isVisible: item.isVisible,
  };
}

async function request(url: string, init: RequestInit) {
  const response = await fetch(url, {
    ...init,
    headers: { "Content-Type": "application/json", ...init.headers },
  });
  const payload = await response.json();
  if (!response.ok || !payload.success) {
    throw new Error(payload.error?.message ?? "Item request failed.");
  }
  return payload.data;
}

export function StructuredItemsEditor({ section, onChanged }: { section: LandingSection; onChanged: () => Promise<void> | void }) {
  const [editingId, setEditingId] = useState<string | "new" | null>(null);
  const [draft, setDraft] = useState(() => emptyDraft(section));
  const [pending, setPending] = useState(false);
  const options = kindOptions[section.type] ?? [];

  async function save(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPending(true);
    const bulletItems = draft.detailsText.split("\n").map((entry) => entry.trim()).filter(Boolean);
    const input = {
      key: draft.key || slugify(draft.title),
      title: draft.title,
      subtitle: draft.subtitle || null,
      description: draft.description || null,
      href: draft.href || null,
      iconKey: draft.iconKey || null,
      details: bulletItems.length ? { items: bulletItems } : null,
      metadata: {
        ...(draft.number ? { number: draft.number } : {}),
        ...(draft.kind === "COVER" ? { featured: draft.featured } : {}),
      },
      isVisible: draft.isVisible,
    };

    try {
      if (editingId === "new") {
        await request(`/api/v1/admin/landing/sections/${section.id}/items`, {
          method: "POST",
          body: JSON.stringify({ ...input, kind: draft.kind, sortOrder: section.items.length }),
        });
      } else if (editingId) {
        await request(`/api/v1/admin/landing/items/${editingId}`, {
          method: "PATCH",
          body: JSON.stringify(input),
        });
      }
      setEditingId(null);
      await onChanged();
      toast.success(editingId === "new" ? "Content item added." : "Content item updated.");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Item save failed.");
    } finally {
      setPending(false);
    }
  }

  async function remove(item: Item) {
    if (!window.confirm(`Delete “${item.title}”?`)) return;
    setPending(true);
    try {
      await request(`/api/v1/admin/landing/items/${item.id}`, { method: "DELETE" });
      await onChanged();
      toast.success("Content item deleted.");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Delete failed.");
    } finally {
      setPending(false);
    }
  }

  async function move(index: number, direction: -1 | 1) {
    const destination = index + direction;
    if (destination < 0 || destination >= section.items.length) return;
    const current = section.items[index];
    const target = section.items[destination];
    setPending(true);
    try {
      await Promise.all([
        request(`/api/v1/admin/landing/items/${current.id}`, { method: "PATCH", body: JSON.stringify({ sortOrder: destination }) }),
        request(`/api/v1/admin/landing/items/${target.id}`, { method: "PATCH", body: JSON.stringify({ sortOrder: index }) }),
      ]);
      await onChanged();
      toast.success("Content order updated.");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Reorder failed.");
    } finally {
      setPending(false);
    }
  }

  return (
    <section className="mt-6 border-t border-slate-200 pt-5">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div><h4 className="text-sm font-black text-slate-900">Structured content</h4><p className="mt-1 text-xs text-slate-400">Add and organize this section&apos;s cards, steps, covers, and supporting content.</p></div>
        <button type="button" onClick={() => { setDraft(emptyDraft(section)); setEditingId("new"); }} className="inline-flex h-9 items-center gap-2 rounded-xl bg-[#0193CD] px-3 text-xs font-black text-white"><Plus className="size-3.5" /> Add item</button>
      </div>
      <div className="space-y-2">
        {section.items.map((item, index) => (
          <article key={item.id} className="rounded-2xl border border-slate-200 bg-white">
            <div className="flex flex-wrap items-center gap-2 p-3">
              <span className="rounded-lg bg-sky-50 px-2 py-1 text-[10px] font-black uppercase text-[#0193CD]">{item.kind.replaceAll("_", " ")}</span>
              <div className="min-w-0 flex-1"><p className="truncate text-sm font-bold text-slate-800">{item.title}</p><p className="truncate text-xs text-slate-400">{item.subtitle || item.href || (item.isVisible ? "Visible" : "Hidden")}</p></div>
              <SmallButton label={`Move ${item.title} up`} disabled={pending || index === 0} onClick={() => void move(index, -1)}><ArrowUp className="size-3.5" /></SmallButton>
              <SmallButton label={`Move ${item.title} down`} disabled={pending || index === section.items.length - 1} onClick={() => void move(index, 1)}><ArrowDown className="size-3.5" /></SmallButton>
              <SmallButton label={`Edit ${item.title}`} onClick={() => { setDraft(fromItem(item)); setEditingId(item.id); }}><Pencil className="size-3.5" /></SmallButton>
              <SmallButton label={`Delete ${item.title}`} danger disabled={pending} onClick={() => void remove(item)}><Trash2 className="size-3.5" /></SmallButton>
            </div>
            {editingId === item.id ? <ItemForm draft={draft} setDraft={setDraft} options={options} kindLocked pending={pending} onSubmit={save} onCancel={() => setEditingId(null)} /> : null}
          </article>
        ))}
      </div>
      {editingId === "new" ? <div className="mt-3 rounded-2xl border border-sky-200 bg-white"><ItemForm draft={draft} setDraft={setDraft} options={options} pending={pending} onSubmit={save} onCancel={() => setEditingId(null)} /></div> : null}
    </section>
  );
}

function ItemForm({ draft, setDraft, options, kindLocked, pending, onSubmit, onCancel }: { draft: Draft; setDraft: React.Dispatch<React.SetStateAction<Draft>>; options: Array<{ value: ItemKind; label: string }>; kindLocked?: boolean; pending: boolean; onSubmit: (event: FormEvent<HTMLFormElement>) => Promise<void>; onCancel: () => void }) {
  const field = <K extends keyof Draft>(key: K, value: Draft[K]) => setDraft((current) => ({ ...current, [key]: value }));
  return <form onSubmit={onSubmit} className="grid gap-3 border-t border-slate-100 p-4 md:grid-cols-2">
    <label><span className="mb-1.5 block text-[10px] font-black uppercase tracking-wider text-slate-400">Content type</span><select disabled={kindLocked} value={draft.kind} onChange={(event) => field("kind", event.target.value as ItemKind)} className="h-10 w-full rounded-xl border border-slate-200 px-3 text-sm disabled:bg-slate-50">{options.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}</select></label>
    <Input label="Title" required value={draft.title} onChange={(value) => field("title", value)} />
    <Input label="Key" value={draft.key} onChange={(value) => field("key", value)} placeholder="Auto-generated from title" />
    <Input label="Subtitle / issue" value={draft.subtitle} onChange={(value) => field("subtitle", value)} />
    <Input label="Link" value={draft.href} onChange={(value) => field("href", value)} placeholder="/path" />
    <Input label="Number / step" value={draft.number} onChange={(value) => field("number", value)} placeholder="01" />
    <label><span className="mb-1.5 block text-[10px] font-black uppercase tracking-wider text-slate-400">Icon</span><select value={draft.iconKey} onChange={(event) => field("iconKey", event.target.value)} className="h-10 w-full rounded-xl border border-slate-200 px-3 text-sm">{iconOptions.map((icon) => <option key={icon}>{icon}</option>)}</select></label>
    <label className="flex flex-wrap items-center gap-5 pt-6 text-xs font-bold text-slate-600"><span className="flex items-center gap-2"><input type="checkbox" checked={draft.isVisible} onChange={(event) => field("isVisible", event.target.checked)} className="accent-[#0193CD]" /> Visible</span>{draft.kind === "COVER" ? <span className="flex items-center gap-2"><input type="checkbox" checked={draft.featured} onChange={(event) => field("featured", event.target.checked)} className="accent-[#0193CD]" /> Featured cover</span> : null}</label>
    <label className="md:col-span-2"><span className="mb-1.5 block text-[10px] font-black uppercase tracking-wider text-slate-400">Description</span><textarea rows={3} value={draft.description} onChange={(event) => field("description", event.target.value)} className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:border-[#0193CD]" /></label>
    <label className="md:col-span-2"><span className="mb-1.5 block text-[10px] font-black uppercase tracking-wider text-slate-400">List items <span className="font-medium normal-case">(one per line)</span></span><textarea rows={5} value={draft.detailsText} onChange={(event) => field("detailsText", event.target.value)} className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:border-[#0193CD]" /></label>
    <div className="flex justify-end gap-2 md:col-span-2"><button type="button" onClick={onCancel} className="inline-flex h-9 items-center gap-2 rounded-xl border border-slate-200 px-3 text-xs font-bold text-slate-500"><X className="size-3.5" /> Cancel</button><button type="submit" disabled={pending || !draft.title.trim()} className="inline-flex h-9 items-center gap-2 rounded-xl bg-[#0193CD] px-4 text-xs font-black text-white disabled:opacity-60">{pending ? <Loader2 className="size-3.5 animate-spin" /> : <Save className="size-3.5" />} Save item</button></div>
  </form>;
}

function Input({ label, value, onChange, placeholder, required }: { label: string; value: string; onChange: (value: string) => void; placeholder?: string; required?: boolean }) { return <label><span className="mb-1.5 block text-[10px] font-black uppercase tracking-wider text-slate-400">{label}</span><input required={required} value={value} onChange={(event) => onChange(event.target.value)} placeholder={placeholder} className="h-10 w-full rounded-xl border border-slate-200 px-3 text-sm outline-none focus:border-[#0193CD]" /></label>; }
function SmallButton({ label, onClick, disabled, danger, children }: { label: string; onClick: () => void; disabled?: boolean; danger?: boolean; children: React.ReactNode }) { return <button type="button" title={label} aria-label={label} disabled={disabled} onClick={onClick} className={danger ? "grid size-8 place-items-center rounded-lg border border-red-100 text-red-500 disabled:opacity-30" : "grid size-8 place-items-center rounded-lg border border-slate-200 text-slate-500 hover:text-[#0193CD] disabled:opacity-30"}>{children}</button>; }
