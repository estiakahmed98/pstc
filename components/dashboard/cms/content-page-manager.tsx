"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  AlertCircle,
  ArrowDown,
  ArrowUp,
  ArrowUpRight,
  CheckCircle2,
  Eye,
  EyeOff,
  FilePenLine,
  ImagePlus,
  Loader2,
  Plus,
  RefreshCw,
  Save,
  Send,
  Trash2,
  Upload,
} from "lucide-react";
import { toast } from "sonner";
import { Card } from "@/components/ui/card";
import type { CmsPageContent, CmsRecord } from "@/lib/cms/content-page-defaults";

type CmsPageResponse = {
  id: string;
  key: string;
  title: string;
  status: "DRAFT" | "IN_REVIEW" | "SCHEDULED" | "PUBLISHED" | "ARCHIVED";
  version: number;
  seoTitle: string | null;
  seoDescription: string | null;
  draftContent: unknown;
  publishedAt: string | null;
  updatedAt: string;
};

type Envelope<T> =
  | { success: true; data: T }
  | { success: false; error: { message: string } };

function clone<T>(value: T): T {
  return JSON.parse(JSON.stringify(value)) as T;
}

function isRecord(value: unknown): value is CmsRecord {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

function humanize(value: string) {
  return value
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replaceAll("_", " ")
    .replace(/^./, (letter) => letter.toUpperCase());
}

async function request<T>(url: string, init?: RequestInit): Promise<T> {
  const response = await fetch(url, {
    ...init,
    headers: {
      ...(init?.body ? { "Content-Type": "application/json" } : {}),
      ...init?.headers,
    },
  });
  const payload = (await response.json()) as Envelope<T>;
  if (!response.ok || !payload.success) {
    throw new Error(payload.success ? "Request failed." : payload.error.message);
  }
  return payload.data;
}

function ImageField({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);

  async function upload(file: File) {
    setUploading(true);
    try {
      const body = new FormData();
      body.append("file", file);
      body.append("altText", label);
      const response = await fetch("/api/v1/admin/media/images", {
        method: "POST",
        body,
      });
      const payload = (await response.json()) as Envelope<{ url: string }>;
      if (!response.ok || !payload.success) {
        throw new Error(payload.success ? "Upload failed." : payload.error.message);
      }
      onChange(payload.data.url);
      toast.success("Image uploaded. Save the page to keep this change.");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Image upload failed.");
    } finally {
      setUploading(false);
    }
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
      <label className="text-xs font-black uppercase tracking-[0.12em] text-slate-500">
        {humanize(label)}
      </label>
      <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="grid h-20 w-28 shrink-0 place-items-center overflow-hidden rounded-xl bg-slate-200 text-slate-400">
          {value ? (
            <img src={value} alt="" className="h-full w-full object-cover" />
          ) : (
            <ImagePlus className="h-6 w-6" />
          )}
        </div>
        <div className="min-w-0 flex-1">
          <input
            value={value}
            onChange={(event) => onChange(event.target.value)}
            placeholder="/images/example.jpg"
            className="h-10 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm outline-none focus:border-sky-300"
          />
          <button
            type="button"
            disabled={uploading}
            onClick={() => inputRef.current?.click()}
            className="mt-2 inline-flex h-8 items-center gap-2 rounded-xl bg-sky-50 px-3 text-xs font-black text-[#0193CD] disabled:opacity-60"
          >
            {uploading ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <Upload className="h-3.5 w-3.5" />}
            Upload image
          </button>
          <input
            ref={inputRef}
            type="file"
            accept="image/jpeg,image/png,image/webp,image/gif,image/avif"
            className="sr-only"
            onChange={(event) => {
              const file = event.target.files?.[0];
              event.target.value = "";
              if (file) void upload(file);
            }}
          />
        </div>
      </div>
    </div>
  );
}

function ValueEditor({
  fieldKey,
  value,
  onChange,
}: {
  fieldKey: string;
  value: unknown;
  onChange: (value: unknown) => void;
}) {
  if (typeof value === "boolean") {
    return (
      <button
        type="button"
        onClick={() => onChange(!value)}
        className={`inline-flex h-9 items-center gap-2 rounded-xl px-3 text-xs font-black ${
          value ? "bg-emerald-50 text-emerald-700" : "bg-slate-200 text-slate-500"
        }`}
      >
        {value ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
        {value ? "Visible" : "Hidden"}
      </button>
    );
  }

  if (typeof value === "number") {
    return (
      <FieldShell label={fieldKey}>
        <input
          type="number"
          value={value}
          onChange={(event) => onChange(Number(event.target.value))}
          className="h-11 w-full rounded-xl border border-slate-200 px-3 text-sm outline-none focus:border-sky-300"
        />
      </FieldShell>
    );
  }

  if (typeof value === "string") {
    if (fieldKey.toLowerCase().includes("image")) {
      return <ImageField label={fieldKey} value={value} onChange={onChange} />;
    }
    const multiline = /description|biography|caption|note|quote/i.test(fieldKey) || value.length > 110;
    return (
      <FieldShell label={fieldKey}>
        {multiline ? (
          <textarea
            value={value}
            rows={4}
            onChange={(event) => onChange(event.target.value)}
            className="w-full resize-y rounded-xl border border-slate-200 px-3 py-2.5 text-sm leading-6 outline-none focus:border-sky-300"
          />
        ) : (
          <input
            value={value}
            onChange={(event) => onChange(event.target.value)}
            className="h-11 w-full rounded-xl border border-slate-200 px-3 text-sm outline-none focus:border-sky-300"
          />
        )}
      </FieldShell>
    );
  }

  if (Array.isArray(value)) {
    return <ArrayEditor fieldKey={fieldKey} value={value} onChange={onChange} />;
  }

  if (isRecord(value)) {
    return (
      <div className="grid gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:grid-cols-2">
        {Object.entries(value).map(([key, nested]) => (
          <ValueEditor
            key={key}
            fieldKey={key}
            value={nested}
            onChange={(next) => onChange({ ...value, [key]: next })}
          />
        ))}
      </div>
    );
  }

  return null;
}

function ArrayEditor({
  fieldKey,
  value,
  onChange,
}: {
  fieldKey: string;
  value: unknown[];
  onChange: (value: unknown[]) => void;
}) {
  function addItem() {
    const sample = value.at(-1);
    if (typeof sample === "string" || value.length === 0) onChange([...value, "New item"]);
    else if (isRecord(sample)) {
      onChange([
        ...value,
        Object.fromEntries(
          Object.entries(sample).map(([key, item]) => [
            key,
            typeof item === "boolean" ? true : typeof item === "number" ? 0 : "",
          ]),
        ),
      ]);
    }
  }

  return (
    <div className="col-span-full rounded-2xl border border-slate-200 bg-slate-50 p-4">
      <div className="mb-3 flex items-center justify-between gap-3">
        <p className="text-xs font-black uppercase tracking-[0.12em] text-slate-500">
          {humanize(fieldKey)} ({value.length})
        </p>
        <button
          type="button"
          onClick={addItem}
          className="inline-flex h-8 items-center gap-1.5 rounded-xl bg-[#0193CD] px-3 text-xs font-black text-white"
        >
          <Plus className="h-3.5 w-3.5" /> Add
        </button>
      </div>
      <div className="space-y-3">
        {value.map((item, index) => (
          <div key={index} className="rounded-2xl border border-slate-200 bg-white p-4">
            <div className="mb-3 flex items-center justify-between gap-3">
              <span className="grid h-7 min-w-7 place-items-center rounded-lg bg-slate-100 px-2 text-[10px] font-black text-slate-500">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="flex gap-1">
                <IconButton label="Move up" disabled={index === 0} onClick={() => {
                  const next = [...value];
                  [next[index - 1], next[index]] = [next[index], next[index - 1]];
                  onChange(next);
                }}><ArrowUp className="h-3.5 w-3.5" /></IconButton>
                <IconButton label="Move down" disabled={index === value.length - 1} onClick={() => {
                  const next = [...value];
                  [next[index], next[index + 1]] = [next[index + 1], next[index]];
                  onChange(next);
                }}><ArrowDown className="h-3.5 w-3.5" /></IconButton>
                <IconButton label="Remove" danger onClick={() => onChange(value.filter((_, itemIndex) => itemIndex !== index))}>
                  <Trash2 className="h-3.5 w-3.5" />
                </IconButton>
              </div>
            </div>
            <ValueEditor
              fieldKey={isRecord(item) ? "item" : "value"}
              value={item}
              onChange={(nextItem) => onChange(value.map((current, itemIndex) => itemIndex === index ? nextItem : current))}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function FieldShell({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block min-w-0">
      <span className="mb-1.5 block text-xs font-black uppercase tracking-[0.1em] text-slate-500">
        {humanize(label)}
      </span>
      {children}
    </label>
  );
}

function IconButton({
  label,
  children,
  onClick,
  disabled,
  danger,
}: {
  label: string;
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
  danger?: boolean;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      disabled={disabled}
      onClick={onClick}
      className={`grid size-8 place-items-center rounded-lg border disabled:opacity-25 ${
        danger
          ? "border-red-100 text-red-500 hover:bg-red-50"
          : "border-slate-200 text-slate-500 hover:bg-slate-50"
      }`}
    >
      {children}
    </button>
  );
}

export function ContentPageManager({
  pageKey,
  pageTitle,
  publicPath,
  defaultContent,
}: {
  pageKey: "governance" | "leadership";
  pageTitle: string;
  publicPath: string;
  defaultContent: CmsPageContent;
}) {
  const [page, setPage] = useState<CmsPageResponse | null>(null);
  const [content, setContent] = useState<CmsPageContent>(() => clone(defaultContent));
  const [seoTitle, setSeoTitle] = useState(`${pageTitle} | PSTC`);
  const [seoDescription, setSeoDescription] = useState("");
  const [activeSection, setActiveSection] = useState(Object.keys(defaultContent.sections)[0]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const load = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const result = await request<CmsPageResponse>(`/api/v1/admin/cms-pages/${pageKey}`, { cache: "no-store" });
      setPage(result);
      const saved = isRecord(result.draftContent) && Object.keys(result.draftContent).length
        ? (result.draftContent as CmsPageContent)
        : clone(defaultContent);
      setContent(saved);
      setSeoTitle(result.seoTitle ?? `${pageTitle} | PSTC`);
      setSeoDescription(result.seoDescription ?? "");
    } catch (loadError) {
      setError(loadError instanceof Error ? loadError.message : "CMS content could not be loaded.");
    } finally {
      setLoading(false);
    }
  }, [defaultContent, pageKey, pageTitle]);

  useEffect(() => {
    void load();
  }, [load]);

  async function submit(action: "save" | "publish" | "unpublish") {
    setSaving(true);
    try {
      const result = await request<CmsPageResponse>(`/api/v1/admin/cms-pages/${pageKey}`, {
        method: "PATCH",
        body: JSON.stringify({
          title: pageTitle,
          seoTitle,
          seoDescription,
          content,
          action,
        }),
      });
      setPage(result);
      toast.success(action === "publish" ? "Page published successfully." : action === "unpublish" ? "Page unpublished." : "Draft saved successfully.");
    } catch (saveError) {
      toast.error(saveError instanceof Error ? saveError.message : "Save failed.");
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return <div className="grid min-h-[70vh] place-items-center bg-slate-50"><div className="text-center"><Loader2 className="mx-auto h-8 w-8 animate-spin text-[#0193CD]" /><p className="mt-3 text-sm font-semibold text-slate-500">Loading {pageTitle} CMS...</p></div></div>;
  }

  if (error || !page) {
    return (
      <div className="min-h-screen bg-slate-50 p-4 md:p-6">
        <Card className="mx-auto mt-12 max-w-2xl rounded-3xl border border-red-100 p-8 text-center">
          <AlertCircle className="mx-auto h-10 w-10 text-red-500" />
          <h1 className="mt-4 text-xl font-black text-slate-900">{pageTitle} CMS is not available</h1>
          <p className="mt-2 text-sm text-slate-500">{error}</p>
          <p className="mt-4 rounded-2xl bg-slate-100 p-4 font-mono text-xs text-slate-600">npm run db:migrate -- --name content_pages_cms</p>
          <button type="button" onClick={() => void load()} className="mt-5 inline-flex h-11 items-center gap-2 rounded-2xl bg-[#0193CD] px-5 text-sm font-black text-white"><RefreshCw className="h-4 w-4" /> Retry</button>
        </Card>
      </div>
    );
  }

  const sections = Object.entries(content.sections);

  return (
    <div className="min-h-screen space-y-6 bg-slate-50 p-4 md:p-6">
      <section className="overflow-hidden rounded-3xl bg-[#0193CD] p-6 text-white shadow-lg md:p-8">
        <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
          <div className="flex items-start gap-4">
            <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-white/15"><FilePenLine className="h-7 w-7" /></span>
            <div><p className="text-sm font-bold text-white/70">Website Content</p><h1 className="mt-1 text-3xl font-black">{pageTitle} Page</h1><p className="mt-2 text-sm text-white/80">Manage every public section, item, image, link, and SEO field.</p></div>
          </div>
          <div className="flex flex-wrap gap-2">
            <button type="button" disabled={saving} onClick={() => void submit("save")} className="inline-flex h-11 items-center gap-2 rounded-2xl bg-white/15 px-4 text-sm font-black hover:bg-white/20 disabled:opacity-60"><Save className="h-4 w-4" /> Save draft</button>
            {page.status === "PUBLISHED" ? <button type="button" disabled={saving} onClick={() => void submit("unpublish")} className="inline-flex h-11 items-center gap-2 rounded-2xl bg-white/15 px-4 text-sm font-black hover:bg-white/20"><EyeOff className="h-4 w-4" /> Unpublish</button> : null}
            <button type="button" disabled={saving} onClick={() => void submit("publish")} className="inline-flex h-11 items-center gap-2 rounded-2xl bg-[#D13D34] px-5 text-sm font-black shadow-md hover:bg-[#b8322b] disabled:opacity-60">{saving ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />} Publish</button>
            <Link href={publicPath} target="_blank" className="inline-flex h-11 items-center gap-2 rounded-2xl bg-white px-4 text-sm font-black text-[#0193CD]">Preview <ArrowUpRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      <div className="grid gap-4 sm:grid-cols-3">
        <Summary label="Sections" value={sections.length} />
        <Summary label="Visible" value={sections.filter(([, section]) => section.isVisible).length} />
        <Summary label="Status" value={page.status.replaceAll("_", " ")} status={page.status === "PUBLISHED"} />
      </div>

      <Card className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
        <div className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-[#0193CD]" /><h2 className="text-lg font-black text-slate-900">Search appearance</h2></div>
        <div className="mt-5 grid gap-4 lg:grid-cols-2">
          <FieldShell label="SEO title"><input value={seoTitle} onChange={(event) => setSeoTitle(event.target.value)} className="h-11 w-full rounded-xl border border-slate-200 px-3 text-sm outline-none focus:border-sky-300" /></FieldShell>
          <FieldShell label="SEO description"><textarea value={seoDescription} onChange={(event) => setSeoDescription(event.target.value)} rows={3} className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-sky-300" /></FieldShell>
        </div>
      </Card>

      <div className="grid gap-5 xl:grid-cols-[280px_minmax(0,1fr)]">
        <Card className="h-fit rounded-3xl border border-slate-200 bg-white p-3 shadow-sm xl:sticky xl:top-4 xl:max-h-[calc(100dvh-2rem)] xl:self-start xl:overflow-y-auto xl:[scrollbar-color:#cbd5e1_transparent] xl:[scrollbar-width:thin]">
          <p className="px-3 py-2 text-xs font-black uppercase tracking-[0.14em] text-slate-400">Page sections</p>
          <div className="space-y-1">
            {sections.map(([key, section], index) => (
              <button key={key} type="button" onClick={() => setActiveSection(key)} className={`flex w-full items-center gap-3 rounded-2xl p-3 text-left transition ${activeSection === key ? "bg-sky-50 text-[#0193CD]" : "text-slate-600 hover:bg-slate-50"}`}>
                <span className={`grid size-8 shrink-0 place-items-center rounded-xl text-[10px] font-black ${activeSection === key ? "bg-[#0193CD] text-white" : "bg-slate-100"}`}>{String(index + 1).padStart(2, "0")}</span>
                <span className="min-w-0 flex-1 truncate text-sm font-bold">{String(section.label ?? humanize(key))}</span>
                {section.isVisible ? <Eye className="h-3.5 w-3.5 text-emerald-500" /> : <EyeOff className="h-3.5 w-3.5 text-slate-300" />}
              </button>
            ))}
          </div>
        </Card>

        {sections.map(([key, section]) => activeSection === key ? (
          <Card key={key} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="flex items-center justify-between gap-4 border-b border-slate-200 p-5 md:p-6">
              <div><p className="text-xs font-black uppercase tracking-[0.14em] text-[#0193CD]">Section editor</p><h2 className="mt-1 text-2xl font-black text-slate-900">{String(section.label ?? humanize(key))}</h2></div>
              <button type="button" onClick={() => setContent({ ...content, sections: { ...content.sections, [key]: { ...section, isVisible: !section.isVisible } } })} className={`inline-flex h-10 items-center gap-2 rounded-xl px-3 text-xs font-black ${section.isVisible ? "bg-emerald-50 text-emerald-700" : "bg-slate-100 text-slate-500"}`}>{section.isVisible ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}{section.isVisible ? "Visible" : "Hidden"}</button>
            </div>
            <div className="grid gap-5 p-5 md:grid-cols-2 md:p-6">
              {Object.entries(section).filter(([field]) => field !== "label" && field !== "isVisible").map(([field, value]) => (
                <ValueEditor key={field} fieldKey={field} value={value} onChange={(next) => setContent({ ...content, sections: { ...content.sections, [key]: { ...section, [field]: next } } })} />
              ))}
            </div>
          </Card>
        ) : null)}
      </div>
    </div>
  );
}

function Summary({ label, value, status }: { label: string; value: string | number; status?: boolean }) {
  return <Card className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"><p className="text-sm font-semibold text-slate-500">{label}</p><p className={`mt-2 text-2xl font-black ${status ? "text-emerald-600" : "text-[#0193CD]"}`}>{value}</p></Card>;
}
