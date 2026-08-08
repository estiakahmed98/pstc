"use client";

import { useRef, useState, type ChangeEvent } from "react";
import { FileCheck2, FileUp, Loader2 } from "lucide-react";
import { toast } from "sonner";
import type { LandingMedia } from "@/components/dashboard/landing/types";

type ApiEnvelope<T> =
  | { success: true; data: T }
  | { success: false; error: { message: string } };

async function readResponse<T>(response: Response) {
  const payload = (await response.json()) as ApiEnvelope<T>;
  if (!response.ok || !payload.success) {
    throw new Error(payload.success ? "Document request failed." : payload.error.message);
  }
  return payload.data;
}

export function DocumentUploader({
  publicationId,
  currentFile,
  onChanged,
}: {
  publicationId: string;
  currentFile: LandingMedia | null;
  onChanged: () => Promise<void> | void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);

  async function handleFile(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    event.target.value = "";
    if (!file) return;

    setUploading(true);
    try {
      const formData = new FormData();
      formData.append("file", file);
      const uploaded = await readResponse<LandingMedia>(
        await fetch("/api/v1/admin/media/documents", {
          method: "POST",
          body: formData,
        }),
      );
      await readResponse(
        await fetch("/api/v1/admin/media/attach", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            mediaId: uploaded.id,
            targetId: publicationId,
            targetType: "publicationFile",
          }),
        }),
      );
      await onChanged();
      toast.success("Publication PDF updated.");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "PDF upload failed.");
    } finally {
      setUploading(false);
    }
  }

  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
      <div className="flex items-center gap-3">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-red-50 text-red-500">
          <FileCheck2 className="h-5 w-5" />
        </span>
        <div className="min-w-0 flex-1">
          <p className="truncate text-xs font-bold text-slate-700">
            {currentFile?.originalName ?? (currentFile ? "Publication PDF" : "No PDF uploaded")}
          </p>
          <p className="text-[10px] text-slate-400">PDF only · maximum 30 MB</p>
        </div>
        <button
          type="button"
          disabled={uploading}
          onClick={() => inputRef.current?.click()}
          className="inline-flex h-8 items-center gap-1.5 rounded-lg bg-red-50 px-3 text-[11px] font-black text-red-600 disabled:opacity-60"
        >
          {uploading ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <FileUp className="h-3.5 w-3.5" />}
          {currentFile ? "Replace PDF" : "Upload PDF"}
        </button>
      </div>
      <input ref={inputRef} type="file" accept="application/pdf,.pdf" onChange={handleFile} className="sr-only" />
    </div>
  );
}
