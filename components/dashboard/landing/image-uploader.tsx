"use client";

import { useRef, useState, type ChangeEvent } from "react";
import { ImagePlus, Loader2, Upload } from "lucide-react";
import { toast } from "sonner";
import type { LandingMedia } from "@/components/dashboard/landing/types";

export type MediaTargetType =
  | "section"
  | "slide"
  | "item"
  | "news"
  | "publication"
  | "partner";

type ApiEnvelope<T> =
  | { success: true; data: T }
  | { success: false; error: { message: string } };

type ImageUploaderProps = {
  label: string;
  targetType: MediaTargetType;
  targetId: string;
  currentImage: LandingMedia | null;
  onChanged: () => Promise<void> | void;
  compact?: boolean;
};

async function readResponse<T>(response: Response) {
  const payload = (await response.json()) as ApiEnvelope<T>;
  if (!response.ok || !payload.success) {
    throw new Error(payload.success ? "Image request failed." : payload.error.message);
  }
  return payload.data;
}

export function ImageUploader({
  label,
  targetType,
  targetId,
  currentImage,
  onChanged,
  compact = false,
}: ImageUploaderProps) {
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
      formData.append("altText", label);

      const uploadResponse = await fetch("/api/v1/admin/media/images", {
        method: "POST",
        body: formData,
      });
      const media = await readResponse<LandingMedia>(uploadResponse);

      const attachResponse = await fetch("/api/v1/admin/media/attach", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mediaId: media.id, targetId, targetType }),
      });
      await readResponse(attachResponse);
      await onChanged();
      toast.success(`${label} image updated.`);
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Image upload failed.");
    } finally {
      setUploading(false);
    }
  }

  return (
    <div
      className={`overflow-hidden rounded-2xl border border-slate-200 bg-white ${
        compact ? "p-3" : "p-4"
      }`}
    >
      <div className="flex items-center gap-3">
        <div
          className={`relative shrink-0 overflow-hidden rounded-xl bg-slate-100 ${
            compact ? "h-14 w-16" : "h-20 w-24"
          }`}
        >
          {currentImage?.url ? (
            <img
              src={currentImage.url}
              alt={currentImage.altText ?? label}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="grid h-full w-full place-items-center text-slate-300">
              <ImagePlus className="h-6 w-6" />
            </div>
          )}
        </div>

        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-bold text-slate-800">{label}</p>
          <p className="mt-0.5 text-[11px] text-slate-400">
            JPEG, PNG, WebP, GIF or AVIF · max 8 MB
          </p>
          <button
            type="button"
            disabled={uploading}
            onClick={() => inputRef.current?.click()}
            className="mt-2 inline-flex h-8 items-center gap-2 rounded-xl bg-sky-50 px-3 text-xs font-black text-[#0193CD] transition hover:bg-sky-100 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {uploading ? (
              <Loader2 className="h-3.5 w-3.5 animate-spin" />
            ) : (
              <Upload className="h-3.5 w-3.5" />
            )}
            {currentImage ? "Replace image" : "Upload image"}
          </button>
        </div>
      </div>
      <input
        ref={inputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp,image/gif,image/avif"
        onChange={handleFile}
        className="sr-only"
      />
    </div>
  );
}
