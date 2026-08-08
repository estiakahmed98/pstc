"use client";

import { useState, type FormEvent } from "react";
import { ArrowDown, ArrowUp, Loader2, Pencil, Plus, Save, Trash2, X } from "lucide-react";
import { toast } from "sonner";
import type { LandingSection } from "@/components/dashboard/landing/types";

type Metric = LandingSection["metrics"][number];
type Draft = { key: string; value: string; label: string; caption: string; tone: string; isVisible: boolean };
const emptyDraft: Draft = { key: "", value: "", label: "", caption: "", tone: "primary", isVisible: true };

function slugify(value: string) {
  return value.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

async function request(url: string, init: RequestInit) {
  const response = await fetch(url, { ...init, headers: { "Content-Type": "application/json", ...init.headers } });
  const payload = await response.json();
  if (!response.ok || !payload.success) throw new Error(payload.error?.message ?? "Metric request failed.");
  return payload.data;
}

export function MetricsEditor({ section, onChanged }: { section: LandingSection; onChanged: () => Promise<void> | void }) {
  const [editingId, setEditingId] = useState<string | "new" | null>(null);
  const [draft, setDraft] = useState<Draft>(emptyDraft);
  const [pending, setPending] = useState(false);
  const copy = section.type === "HERO"
    ? { title: "Anniversary badge", description: "Manage the anniversary figure displayed on the hero." }
    : section.type === "WHO_WE_ARE"
      ? { title: "Organization statistics", description: "Manage the summary figures displayed in Who We Are." }
      : { title: "Reach metrics", description: "Manage the summary figures displayed above the map." };
  const canAdd = section.type !== "HERO" || section.metrics.length === 0;

  function edit(metric: Metric) {
    setDraft({ key: metric.key, value: metric.value, label: metric.label, caption: metric.caption ?? "", tone: metric.tone ?? "primary", isVisible: metric.isVisible });
    setEditingId(metric.id);
  }

  async function save(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPending(true);
    const input = { key: draft.key || slugify(draft.label), value: draft.value, label: draft.label, caption: draft.caption || null, tone: draft.tone || null, isVisible: draft.isVisible };
    try {
      if (editingId === "new") {
        await request(`/api/v1/admin/landing/sections/${section.id}/metrics`, { method: "POST", body: JSON.stringify({ ...input, sortOrder: section.metrics.length }) });
      } else if (editingId) {
        await request(`/api/v1/admin/landing/metrics/${editingId}`, { method: "PATCH", body: JSON.stringify(input) });
      }
      setEditingId(null);
      await onChanged();
      toast.success("Metric saved.");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Metric save failed.");
    } finally { setPending(false); }
  }

  async function remove(metric: Metric) {
    if (!window.confirm(`Delete “${metric.label}”?`)) return;
    setPending(true);
    try {
      await request(`/api/v1/admin/landing/metrics/${metric.id}`, { method: "DELETE" });
      await onChanged();
      toast.success("Metric deleted.");
    } catch (error) { toast.error(error instanceof Error ? error.message : "Delete failed."); }
    finally { setPending(false); }
  }

  async function move(index: number, direction: -1 | 1) {
    const destination = index + direction;
    if (destination < 0 || destination >= section.metrics.length) return;
    const current = section.metrics[index];
    const target = section.metrics[destination];
    setPending(true);
    try {
      await Promise.all([
        request(`/api/v1/admin/landing/metrics/${current.id}`, { method: "PATCH", body: JSON.stringify({ sortOrder: destination }) }),
        request(`/api/v1/admin/landing/metrics/${target.id}`, { method: "PATCH", body: JSON.stringify({ sortOrder: index }) }),
      ]);
      await onChanged();
      toast.success("Metric order updated.");
    } catch (error) { toast.error(error instanceof Error ? error.message : "Reorder failed."); }
    finally { setPending(false); }
  }

  return (
    <section className="mt-6 border-t border-slate-200 pt-5">
      <div className="mb-4 flex items-center justify-between gap-3"><div><h4 className="text-sm font-black text-slate-900">{copy.title}</h4><p className="mt-1 text-xs text-slate-400">{copy.description}</p></div>{canAdd ? <button type="button" onClick={() => { setDraft(emptyDraft); setEditingId("new"); }} className="inline-flex h-9 items-center gap-2 rounded-xl bg-[#0193CD] px-3 text-xs font-black text-white"><Plus className="size-3.5" /> Add metric</button> : null}</div>
      <div className="space-y-2">
        {section.metrics.map((metric, index) => <div key={metric.id} className="rounded-2xl border border-slate-200 bg-white"><div className="flex items-center gap-2 p-3"><span className="min-w-14 text-lg font-black text-[#0193CD]">{metric.value}</span><div className="min-w-0 flex-1"><p className="truncate text-sm font-bold text-slate-800">{metric.label}</p><p className="truncate text-xs text-slate-400">{metric.tone ?? "primary"}{metric.isVisible ? "" : " · hidden"}</p></div><SmallButton label={`Move ${metric.label} up`} disabled={pending || index === 0} onClick={() => void move(index, -1)}><ArrowUp className="size-3.5" /></SmallButton><SmallButton label={`Move ${metric.label} down`} disabled={pending || index === section.metrics.length - 1} onClick={() => void move(index, 1)}><ArrowDown className="size-3.5" /></SmallButton><SmallButton label={`Edit ${metric.label}`} onClick={() => edit(metric)}><Pencil className="size-3.5" /></SmallButton><SmallButton label={`Delete ${metric.label}`} danger disabled={pending} onClick={() => void remove(metric)}><Trash2 className="size-3.5" /></SmallButton></div>{editingId === metric.id ? <MetricForm draft={draft} setDraft={setDraft} pending={pending} onSubmit={save} onCancel={() => setEditingId(null)} /> : null}</div>)}
      </div>
      {editingId === "new" ? <div className="mt-3 rounded-2xl border border-sky-200 bg-white"><MetricForm draft={draft} setDraft={setDraft} pending={pending} onSubmit={save} onCancel={() => setEditingId(null)} /></div> : null}
    </section>
  );
}

function MetricForm({ draft, setDraft, pending, onSubmit, onCancel }: { draft: Draft; setDraft: React.Dispatch<React.SetStateAction<Draft>>; pending: boolean; onSubmit: (event: FormEvent<HTMLFormElement>) => Promise<void>; onCancel: () => void }) {
  const field = (key: keyof Draft, value: string | boolean) => setDraft((current) => ({ ...current, [key]: value }));
  return <form onSubmit={onSubmit} className="grid gap-3 border-t border-slate-100 p-4 md:grid-cols-2"><Input label="Value" required value={draft.value} onChange={(value) => field("value", value)} placeholder="20" /><Input label="Label" required value={draft.label} onChange={(value) => field("label", value)} placeholder="Districts" /><Input label="Key" value={draft.key} onChange={(value) => field("key", value)} placeholder="Auto-generated from label" /><label><span className="mb-1.5 block text-[10px] font-black uppercase tracking-wider text-slate-400">Tone</span><select value={draft.tone} onChange={(event) => field("tone", event.target.value)} className="h-10 w-full rounded-xl border border-slate-200 px-3 text-sm"><option value="primary">Primary</option><option value="secondary">Secondary</option></select></label><Input label="Caption" value={draft.caption} onChange={(value) => field("caption", value)} /><label className="flex items-center gap-3 pt-6 text-sm font-bold text-slate-600"><input type="checkbox" checked={draft.isVisible} onChange={(event) => field("isVisible", event.target.checked)} className="size-4 accent-[#0193CD]" /> Visible</label><div className="flex justify-end gap-2 md:col-span-2"><button type="button" onClick={onCancel} className="inline-flex h-9 items-center gap-2 rounded-xl border border-slate-200 px-3 text-xs font-bold text-slate-500"><X className="size-3.5" /> Cancel</button><button type="submit" disabled={pending || !draft.value.trim() || !draft.label.trim()} className="inline-flex h-9 items-center gap-2 rounded-xl bg-[#0193CD] px-4 text-xs font-black text-white disabled:opacity-60">{pending ? <Loader2 className="size-3.5 animate-spin" /> : <Save className="size-3.5" />} Save metric</button></div></form>;
}

function Input({ label, value, onChange, placeholder, required }: { label: string; value: string; onChange: (value: string) => void; placeholder?: string; required?: boolean }) { return <label><span className="mb-1.5 block text-[10px] font-black uppercase tracking-wider text-slate-400">{label}</span><input required={required} value={value} onChange={(event) => onChange(event.target.value)} placeholder={placeholder} className="h-10 w-full rounded-xl border border-slate-200 px-3 text-sm outline-none focus:border-[#0193CD]" /></label>; }
function SmallButton({ label, onClick, disabled, danger, children }: { label: string; onClick: () => void; disabled?: boolean; danger?: boolean; children: React.ReactNode }) { return <button type="button" title={label} aria-label={label} disabled={disabled} onClick={onClick} className={danger ? "grid size-8 place-items-center rounded-lg border border-red-100 text-red-500 disabled:opacity-30" : "grid size-8 place-items-center rounded-lg border border-slate-200 text-slate-500 hover:text-[#0193CD] disabled:opacity-30"}>{children}</button>; }
