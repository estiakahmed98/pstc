"use client";

import { toast as sonnerToast } from "sonner";

type ToastOptions = {
  title?: string;
  description?: string;
  variant?: "destructive" | string;
};

export function useToast() {
  function toast(opts: ToastOptions | string) {
    if (typeof opts === "string") {
      sonnerToast(opts);
      return;
    }

    const message = opts.title
      ? opts.description
        ? `${opts.title} — ${opts.description}`
        : opts.title
      : opts.description || "";

    if (opts.variant === "destructive") {
      sonnerToast.error(message);
    } else {
      sonnerToast.success(message || "");
    }
  }

  return { toast };
}

export default useToast;
