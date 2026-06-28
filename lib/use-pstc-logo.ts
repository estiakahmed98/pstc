"use client";

import { useEffect, useState } from "react";

export const PSTC_LOGO_BLUE_GREEN = "/pstc_logo_2.png";
export const PSTC_LOGO_RED_GREY = "/pstc_logo.png";

export function getPstcLogoSrc() {
  if (typeof document === "undefined") {
    return PSTC_LOGO_BLUE_GREEN;
  }

  return document.documentElement.classList.contains("theme-pstc-red-grey")
    ? PSTC_LOGO_RED_GREY
    : PSTC_LOGO_BLUE_GREEN;
}

export function usePstcLogo() {
  const [logoSrc, setLogoSrc] = useState(PSTC_LOGO_BLUE_GREEN);

  useEffect(() => {
    const syncLogo = () => {
      setLogoSrc(getPstcLogoSrc());
    };

    syncLogo();

    const handleThemeChange = () => {
      syncLogo();
    };

    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === "pstc-theme") {
        syncLogo();
      }
    };

    const observer = new MutationObserver(syncLogo);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    window.addEventListener(
      "pstc-theme-change",
      handleThemeChange as EventListener,
    );
    window.addEventListener("storage", handleStorageChange);

    return () => {
      observer.disconnect();
      window.removeEventListener(
        "pstc-theme-change",
        handleThemeChange as EventListener,
      );
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return logoSrc;
}
