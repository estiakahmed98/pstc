"use client";

import {
  useState,
  type Dispatch,
  type FormEvent,
  type SetStateAction,
} from "react";
import {
  ArrowDown,
  ArrowUp,
  Loader2,
  Pencil,
  Plus,
  Save,
  Trash2,
  X,
} from "lucide-react";
import { toast } from "sonner";
import type { LandingSection } from "@/components/dashboard/landing/types";

type LandingItem = LandingSection["items"][number];

type ItemDraft = {
  key: string;
  title: string;
  description: string;
  href: string;
  iconKey: string;
  number: string;
};

const emptyDraft: ItemDraft = {
  key: "",
  title: "",
  description: "",
  href: "",
  iconKey: "Landmark",
  number: "",
};

const iconOptions = [
  "Landmark",
  "UsersRound",
  "ShieldCheck",
  "FileCheck2",
  "Network",
  "Globe2",
  "Building2",
  "ScrollText",
];

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function draftFromItem(item: LandingItem): ItemDraft {
  return {
    key: item.key,
    title: item.title,
    description: item.description ?? "",
    href: item.href ?? "",
    iconKey: item.iconKey ?? "Landmark",
    number:
      typeof item.metadata?.number === "string" ? item.metadata.number : "",
  };
}

async function apiRequest(url: string, init: RequestInit) {
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

export function SectionItemsEditor({
  section,
  onChanged,
}: {
  section: LandingSection;
  onChanged: () => Promise<void> | void;
}) {
  const [editingId, setEditingId] = useState<string | "new" | null>(null);
  const [draft, setDraft] = useState<ItemDraft>(emptyDraft);
  const [pending, setPending] = useState(false);

  function startNew() {
    setDraft({
      ...emptyDraft,
      number: String(section.items.length + 1).padStart(2, "0"),
    });
    setEditingId("new");
  }

  function startEdit(item: LandingItem) {
    setDraft(draftFromItem(item));
    setEditingId(item.id);
  }

  async function saveItem(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPending(true);
    try {
      const input = {
        key: draft.key || slugify(draft.title),
        title: draft.title,
        description: draft.description || null,
        href: draft.href || null,
        iconKey: draft.iconKey || null,
        metadata: { number: draft.number },
        isVisible: true,
      };

      if (editingId === "new") {
        await apiRequest(
          `/api/v1/admin/landing/sections/${section.id}/items`,
          {
            method: "POST",
            body: JSON.stringify({
              ...input,
              kind: "CARD",
              sortOrder: section.items.length,
            }),
          },
        );
      } else if (editingId) {
        await apiRequest(`/api/v1/admin/landing/items/${editingId}`, {
          method: "PATCH",
          body: JSON.stringify(input),
        });
      }

      toast.success(editingId === "new" ? "Item added." : "Item updated.");
      setEditingId(null);
      await onChanged();
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Item save failed.");
    } finally {
      setPending(false);
    }
  }

  async function deleteItem(item: LandingItem) {
    if (!window.confirm(`Delete “${item.title}”?`)) return;
    setPending(true);
    try {
      await apiRequest(`/api/v1/admin/landing/items/${item.id}`, {
        method: "DELETE",
      });
      toast.success("Item deleted.");
      if (editingId === item.id) setEditingId(null);
      await onChanged();
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Delete failed.");
    } finally {
      setPending(false);
    }
  }

  async function moveItem(index: number, direction: -1 | 1) {
    const destination = index + direction;
    if (destination < 0 || destination >= section.items.length) return;
    const current = section.items[index];
    const target = section.items[destination];
    setPending(true);
    try {
      await Promise.all([
        apiRequest(`/api/v1/admin/landing/items/${current.id}`, {
          method: "PATCH",
          body: JSON.stringify({ sortOrder: destination }),
        }),
        apiRequest(`/api/v1/admin/landing/items/${target.id}`, {
          method: "PATCH",
          body: JSON.stringify({ sortOrder: index }),
        }),
      ]);
      await onChanged();
      toast.success("Item order updated.");
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
          <h4 className="text-sm font-black text-slate-900">Who We Are items</h4>
          <p className="mt-1 text-xs text-slate-400">
            Add, edit, delete, and reorder the cards shown in this section.
          </p>
        </div>
        <button
          type="button"
          onClick={startNew}
          className="inline-flex h-9 items-center gap-2 rounded-xl bg-[#0193CD] px-3 text-xs font-black text-white"
        >
          <Plus className="h-3.5 w-3.5" /> Add item
        </button>
      </div>

      <div className="space-y-2">
        {section.items.map((item, index) => (
          <div key={item.id} className="rounded-2xl border border-slate-200 bg-white">
            <div className="flex flex-wrap items-center gap-2 p-3">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-sky-50 text-xs font-black text-[#0193CD]">
                {typeof item.metadata?.number === "string"
                  ? item.metadata.number
                  : String(index + 1).padStart(2, "0")}
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-bold text-slate-800">{item.title}</p>
                <p className="truncate text-xs text-slate-400">{item.href}</p>
              </div>
              <button type="button" disabled={pending || index === 0} onClick={() => void moveItem(index, -1)} className="grid h-8 w-8 place-items-center rounded-lg border border-slate-200 text-slate-500 disabled:opacity-30" aria-label={`Move ${item.title} up`}><ArrowUp className="h-3.5 w-3.5" /></button>
              <button type="button" disabled={pending || index === section.items.length - 1} onClick={() => void moveItem(index, 1)} className="grid h-8 w-8 place-items-center rounded-lg border border-slate-200 text-slate-500 disabled:opacity-30" aria-label={`Move ${item.title} down`}><ArrowDown className="h-3.5 w-3.5" /></button>
              <button type="button" onClick={() => startEdit(item)} className="grid h-8 w-8 place-items-center rounded-lg border border-slate-200 text-slate-500 hover:text-[#0193CD]" aria-label={`Edit ${item.title}`}><Pencil className="h-3.5 w-3.5" /></button>
              <button type="button" disabled={pending} onClick={() => void deleteItem(item)} className="grid h-8 w-8 place-items-center rounded-lg border border-red-100 text-red-500" aria-label={`Delete ${item.title}`}><Trash2 className="h-3.5 w-3.5" /></button>
            </div>

            {editingId === item.id ? (
              <ItemForm draft={draft} setDraft={setDraft} pending={pending} onSubmit={saveItem} onCancel={() => setEditingId(null)} />
            ) : null}
          </div>
        ))}
      </div>

      {editingId === "new" ? (
        <div className="mt-3 rounded-2xl border border-sky-200 bg-white">
          <ItemForm draft={draft} setDraft={setDraft} pending={pending} onSubmit={saveItem} onCancel={() => setEditingId(null)} />
        </div>
      ) : null}
    </section>
  );
}

function ItemForm({
  draft,
  setDraft,
  pending,
  onSubmit,
  onCancel,
}: {
  draft: ItemDraft;
  setDraft: Dispatch<SetStateAction<ItemDraft>>;
  pending: boolean;
  onSubmit: (event: FormEvent<HTMLFormElement>) => Promise<void>;
  onCancel: () => void;
}) {
  const field = (key: keyof ItemDraft, value: string) =>
    setDraft((current) => ({ ...current, [key]: value }));

  return (
    <form onSubmit={onSubmit} className="grid gap-3 border-t border-slate-100 p-4 md:grid-cols-2">
      <Input label="Number" value={draft.number} onChange={(value) => field("number", value)} placeholder="01" />
      <Input label="Title" required value={draft.title} onChange={(value) => field("title", value)} />
      <Input label="Key" value={draft.key} onChange={(value) => field("key", value)} placeholder="Auto-generated from title" />
      <Input label="Link" value={draft.href} onChange={(value) => field("href", value)} placeholder="/who-we-are/..." />
      <label className="block">
        <span className="mb-1.5 block text-[10px] font-black uppercase tracking-wider text-slate-400">Icon</span>
        <select value={draft.iconKey} onChange={(event) => field("iconKey", event.target.value)} className="h-10 w-full rounded-xl border border-slate-200 px-3 text-sm outline-none focus:border-[#0193CD]">
          {iconOptions.map((icon) => <option key={icon}>{icon}</option>)}
        </select>
      </label>
      <label className="block md:col-span-2">
        <span className="mb-1.5 block text-[10px] font-black uppercase tracking-wider text-slate-400">Description</span>
        <textarea rows={3} value={draft.description} onChange={(event) => field("description", event.target.value)} className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:border-[#0193CD]" />
      </label>
      <div className="flex justify-end gap-2 md:col-span-2">
        <button type="button" onClick={onCancel} className="inline-flex h-9 items-center gap-2 rounded-xl border border-slate-200 px-3 text-xs font-bold text-slate-500"><X className="h-3.5 w-3.5" /> Cancel</button>
        <button type="submit" disabled={pending || !draft.title.trim()} className="inline-flex h-9 items-center gap-2 rounded-xl bg-[#0193CD] px-4 text-xs font-black text-white disabled:opacity-60">{pending ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <Save className="h-3.5 w-3.5" />} Save item</button>
      </div>
    </form>
  );
}

function Input({ label, value, onChange, placeholder, required }: { label: string; value: string; onChange: (value: string) => void; placeholder?: string; required?: boolean }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[10px] font-black uppercase tracking-wider text-slate-400">{label}</span>
      <input required={required} value={value} onChange={(event) => onChange(event.target.value)} placeholder={placeholder} className="h-10 w-full rounded-xl border border-slate-200 px-3 text-sm outline-none focus:border-[#0193CD]" />
    </label>
  );
}
