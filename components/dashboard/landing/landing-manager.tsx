"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import {
  AlertCircle,
  ArrowDown,
  ArrowUp,
  ArrowUpRight,
  Eye,
  EyeOff,
  GripVertical,
  House,
  Loader2,
  Pencil,
  RefreshCw,
  Send,
} from "lucide-react";
import { toast } from "sonner";
import { Card } from "@/components/ui/card";
import { SectionEditor } from "@/components/dashboard/landing/section-editor";
import type {
  LandingPageData,
  LandingSection,
  LandingStatus,
  SectionUpdate,
} from "@/components/dashboard/landing/types";

const PRIMARY = "#0193CD";
const SECONDARY = "#D13D34";

type ApiEnvelope<T> =
  | { success: true; data: T }
  | { success: false; error: { message: string; code: string } };

async function apiRequest<T>(url: string, init?: RequestInit): Promise<T> {
  const response = await fetch(url, {
    ...init,
    headers: {
      ...(init?.body ? { "Content-Type": "application/json" } : {}),
      ...init?.headers,
    },
  });
  const payload = (await response.json()) as ApiEnvelope<T>;

  if (!response.ok || !payload.success) {
    throw new Error(
      payload.success ? "The request failed." : payload.error.message,
    );
  }

  return payload.data;
}

export function LandingManager() {
  const [landing, setLanding] = useState<LandingPageData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [pendingId, setPendingId] = useState<string | null>(null);
  const [workflowPending, setWorkflowPending] = useState(false);

  const loadLanding = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const data = await apiRequest<LandingPageData>("/api/v1/admin/landing", {
        cache: "no-store",
      });
      setLanding({
        ...data,
        sections: [...data.sections].sort((a, b) => a.sortOrder - b.sortOrder),
      });
    } catch (loadError) {
      setError(
        loadError instanceof Error
          ? loadError.message
          : "Landing content could not be loaded.",
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void loadLanding();
  }, [loadLanding]);

  const summary = useMemo(() => {
    const sections = landing?.sections ?? [];
    return {
      total: sections.length,
      visible: sections.filter((section) => section.isVisible).length,
      hidden: sections.filter((section) => !section.isVisible).length,
    };
  }, [landing]);

  async function saveSection(sectionId: string, input: SectionUpdate) {
    setPendingId(sectionId);
    try {
      await apiRequest(`/api/v1/admin/landing/sections/${sectionId}`, {
        method: "PATCH",
        body: JSON.stringify(input),
      });
      toast.success("Section saved successfully.");
      setEditingId(null);
      await loadLanding();
    } catch (saveError) {
      toast.error(saveError instanceof Error ? saveError.message : "Save failed.");
    } finally {
      setPendingId(null);
    }
  }

  async function toggleVisibility(section: LandingSection) {
    setPendingId(section.id);
    try {
      await apiRequest(`/api/v1/admin/landing/sections/${section.id}`, {
        method: "PATCH",
        body: JSON.stringify({ isVisible: !section.isVisible }),
      });
      setLanding((current) =>
        current
          ? {
              ...current,
              sections: current.sections.map((item) =>
                item.id === section.id
                  ? { ...item, isVisible: !item.isVisible }
                  : item,
              ),
            }
          : current,
      );
      toast.success(section.isVisible ? "Section hidden." : "Section is visible.");
    } catch (toggleError) {
      toast.error(
        toggleError instanceof Error ? toggleError.message : "Update failed.",
      );
    } finally {
      setPendingId(null);
    }
  }

  async function moveSection(index: number, direction: -1 | 1) {
    if (!landing) return;
    const destination = index + direction;
    if (destination < 0 || destination >= landing.sections.length) return;

    const reordered = [...landing.sections];
    [reordered[index], reordered[destination]] = [
      reordered[destination],
      reordered[index],
    ];
    const normalized = reordered.map((section, sortOrder) => ({
      ...section,
      sortOrder,
    }));
    setLanding({ ...landing, sections: normalized });
    setPendingId(reordered[destination].id);

    try {
      await apiRequest("/api/v1/admin/landing/sections/reorder", {
        method: "PATCH",
        body: JSON.stringify({
          sections: normalized.map(({ id, sortOrder }) => ({ id, sortOrder })),
        }),
      });
      toast.success("Section order updated.");
    } catch (moveError) {
      toast.error(moveError instanceof Error ? moveError.message : "Reorder failed.");
      await loadLanding();
    } finally {
      setPendingId(null);
    }
  }

  async function updateWorkflow(status: LandingStatus) {
    setWorkflowPending(true);
    try {
      const updated = await apiRequest<LandingPageData>("/api/v1/admin/landing", {
        method: "PATCH",
        body: JSON.stringify({ status }),
      });
      setLanding(updated);
      toast.success(
        status === "PUBLISHED"
          ? "Landing page published."
          : `Landing page moved to ${status.toLowerCase().replace("_", " ")}.`,
      );
    } catch (workflowError) {
      toast.error(
        workflowError instanceof Error
          ? workflowError.message
          : "Workflow update failed.",
      );
    } finally {
      setWorkflowPending(false);
    }
  }

  if (loading) {
    return (
      <div className="grid min-h-[70vh] place-items-center bg-slate-50">
        <div className="text-center">
          <Loader2 className="mx-auto h-8 w-8 animate-spin text-[#0193CD]" />
          <p className="mt-3 text-sm font-semibold text-slate-500">
            Loading landing content...
          </p>
        </div>
      </div>
    );
  }

  if (error || !landing) {
    return (
      <div className="min-h-screen bg-slate-50 p-4 md:p-6">
        <Card className="mx-auto mt-12 max-w-2xl rounded-3xl border border-red-100 bg-white p-8 text-center shadow-sm">
          <AlertCircle className="mx-auto h-10 w-10 text-red-500" />
          <h1 className="mt-4 text-xl font-black text-slate-900">
            Landing CMS is not available
          </h1>
          <p className="mt-2 text-sm leading-6 text-slate-500">{error}</p>
          <p className="mt-4 rounded-2xl bg-slate-100 p-4 font-mono text-xs text-slate-600">
            npm run db:migrate -- --name landing_cms
            <br />
            npm run db:seed
          </p>
          <button
            type="button"
            onClick={() => void loadLanding()}
            className="mt-5 inline-flex h-11 items-center gap-2 rounded-2xl bg-[#0193CD] px-5 text-sm font-black text-white"
          >
            <RefreshCw className="h-4 w-4" /> Retry
          </button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen space-y-6 bg-slate-50 p-4 md:p-6">
      <section
        className="overflow-hidden rounded-3xl p-6 text-white shadow-lg md:p-8"
        style={{ backgroundColor: PRIMARY }}
      >
        <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
          <div className="flex items-start gap-4">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/15">
              <House className="h-7 w-7" />
            </span>
            <div>
              <p className="text-sm font-semibold text-white/75">Website CMS</p>
              <h1 className="mt-1 text-3xl font-black">Landing Page</h1>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-white/85">
                Edit, organize, review, and publish every homepage section from one workspace.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              disabled={workflowPending}
              onClick={() => void updateWorkflow("DRAFT")}
              className="inline-flex h-11 items-center gap-2 rounded-2xl bg-white/15 px-4 text-sm font-bold transition hover:bg-white/20 disabled:opacity-60"
            >
              Save as draft
            </button>
            <button
              type="button"
              disabled={workflowPending}
              onClick={() => void updateWorkflow("IN_REVIEW")}
              className="inline-flex h-11 items-center gap-2 rounded-2xl bg-white/15 px-4 text-sm font-bold transition hover:bg-white/20 disabled:opacity-60"
            >
              <Send className="h-4 w-4" /> Review
            </button>
            <button
              type="button"
              disabled={workflowPending}
              onClick={() => void updateWorkflow("PUBLISHED")}
              className="inline-flex h-11 items-center gap-2 rounded-2xl bg-[#D13D34] px-5 text-sm font-black shadow-md transition hover:bg-[#b8322b] disabled:opacity-60"
            >
              {workflowPending ? <Loader2 className="h-4 w-4 animate-spin" /> : <Eye className="h-4 w-4" />}
              Publish
            </button>
            <Link
              href="/"
              target="_blank"
              className="inline-flex h-11 items-center gap-2 rounded-2xl bg-white px-4 text-sm font-black text-[#0193CD]"
            >
              Preview <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <SummaryCard label="Total sections" value={summary.total} color={PRIMARY} />
        <SummaryCard label="Visible" value={summary.visible} color="#059669" />
        <SummaryCard label="Hidden" value={summary.hidden} color={SECONDARY} />
        <SummaryCard
          label="Workflow"
          value={landing.status.replace("_", " ")}
          color={landing.status === "PUBLISHED" ? "#059669" : PRIMARY}
          compact
        />
      </div>

      <Card className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="flex flex-col gap-3 border-b border-slate-200 p-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-lg font-black text-slate-900">Homepage sections</h2>
            <p className="text-sm text-slate-500">
              Current sections are shown in their public display order.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-sky-50 px-3 py-1.5 text-xs font-bold text-[#0193CD]">
              Version {landing.version}
            </span>
            <button
              type="button"
              onClick={() => void loadLanding()}
              className="grid h-9 w-9 place-items-center rounded-xl border border-slate-200 text-slate-500 hover:text-[#0193CD]"
              aria-label="Refresh landing content"
            >
              <RefreshCw className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="divide-y divide-slate-100">
          {landing.sections.length ? (
            landing.sections.map((section, index) => (
              <div key={section.id}>
                <div className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:px-5">
                  <div className="flex min-w-0 flex-1 items-center gap-3">
                    <GripVertical className="hidden h-5 w-5 shrink-0 text-slate-300 sm:block" />
                    <span
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl text-sm font-black text-white"
                      style={{ backgroundColor: PRIMARY }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="font-bold text-slate-900">{section.title}</p>
                      <div className="mt-1 flex flex-wrap gap-x-3 gap-y-1 text-xs text-slate-400">
                        <span>{section.type.replaceAll("_", " ")}</span>
                        <span>{section.slides.length} slides</span>
                        <span>{section.items.length} items</span>
                        <span>{section.metrics.length} metrics</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-end gap-2">
                    <button
                      type="button"
                      disabled={index === 0 || pendingId === section.id}
                      onClick={() => void moveSection(index, -1)}
                      className="grid h-9 w-9 place-items-center rounded-xl border border-slate-200 text-slate-500 transition hover:border-sky-200 hover:text-[#0193CD] disabled:cursor-not-allowed disabled:opacity-30"
                      aria-label={`Move ${section.title} up`}
                    >
                      <ArrowUp className="h-4 w-4" />
                    </button>
                    <button
                      type="button"
                      disabled={index === landing.sections.length - 1 || pendingId === section.id}
                      onClick={() => void moveSection(index, 1)}
                      className="grid h-9 w-9 place-items-center rounded-xl border border-slate-200 text-slate-500 transition hover:border-sky-200 hover:text-[#0193CD] disabled:cursor-not-allowed disabled:opacity-30"
                      aria-label={`Move ${section.title} down`}
                    >
                      <ArrowDown className="h-4 w-4" />
                    </button>
                    <button
                      type="button"
                      disabled={pendingId === section.id}
                      onClick={() => void toggleVisibility(section)}
                      className={`inline-flex h-9 items-center gap-2 rounded-xl px-3 text-xs font-bold transition ${
                        section.isVisible
                          ? "bg-emerald-50 text-emerald-700"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      {pendingId === section.id ? (
                        <Loader2 className="h-3.5 w-3.5 animate-spin" />
                      ) : section.isVisible ? (
                        <Eye className="h-3.5 w-3.5" />
                      ) : (
                        <EyeOff className="h-3.5 w-3.5" />
                      )}
                      {section.isVisible ? "Visible" : "Hidden"}
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        setEditingId((current) =>
                          current === section.id ? null : section.id,
                        )
                      }
                      className="inline-flex h-9 items-center gap-2 rounded-xl border border-slate-200 px-3 text-xs font-bold text-slate-600 transition hover:border-sky-200 hover:text-[#0193CD]"
                    >
                      <Pencil className="h-3.5 w-3.5" /> Edit
                    </button>
                  </div>
                </div>

                {editingId === section.id ? (
                  <SectionEditor
                    section={section}
                    saving={pendingId === section.id}
                    onCancel={() => setEditingId(null)}
                    onSave={saveSection}
                    onMediaChanged={loadLanding}
                  />
                ) : null}
              </div>
            ))
          ) : (
            <div className="p-10 text-center">
              <AlertCircle className="mx-auto h-8 w-8 text-amber-500" />
              <h3 className="mt-3 font-black text-slate-900">No landing sections found</h3>
              <p className="mt-2 text-sm text-slate-500">
                Run the landing seed to create the nine component sections.
              </p>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
}

function SummaryCard({
  label,
  value,
  color,
  compact = false,
}: {
  label: string;
  value: string | number;
  color: string;
  compact?: boolean;
}) {
  return (
    <Card className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <p className="text-sm font-semibold text-slate-500">{label}</p>
      <p
        className={`mt-2 font-black uppercase ${compact ? "text-xl" : "text-3xl"}`}
        style={{ color }}
      >
        {value}
      </p>
    </Card>
  );
}
