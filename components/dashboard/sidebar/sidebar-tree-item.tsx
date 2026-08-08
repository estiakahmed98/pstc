"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { LucideIcon } from "lucide-react";
import { ChevronDown, FileText, FolderOpen } from "lucide-react";
import {
  getCmsPath,
  type CmsNavigationItem,
} from "@/config/cms-navigation";
import { cn } from "@/lib/utils";

type SidebarTreeItemProps = {
  item: CmsNavigationItem;
  pathname: string;
  onNavigate?: () => void;
  level?: number;
  icon?: LucideIcon;
};

function containsActivePath(item: CmsNavigationItem, pathname: string): boolean {
  if (getCmsPath(item.publicPath) === pathname) return true;
  return item.children.some((child) => containsActivePath(child, pathname));
}

export function SidebarTreeItem({
  item,
  pathname,
  onNavigate,
  level = 0,
  icon: RootIcon,
}: SidebarTreeItemProps) {
  const href = getCmsPath(item.publicPath);
  const hasChildren = item.children.length > 0;
  const isActive = pathname === href;
  const isInActiveBranch = containsActivePath(item, pathname);
  const [expanded, setExpanded] = useState(isInActiveBranch);
  const ItemIcon = RootIcon ?? (hasChildren ? FolderOpen : FileText);

  useEffect(() => {
    if (isInActiveBranch) setExpanded(true);
  }, [isInActiveBranch]);

  return (
    <div>
      <div
        className={cn(
          "group flex min-w-0 items-stretch overflow-hidden rounded-xl border transition",
          level === 0 ? "min-h-11" : "min-h-10",
          isActive
            ? "border-transparent bg-[#0193CD] text-white shadow-sm"
            : isInActiveBranch
              ? "border-sky-100 bg-sky-50 text-[#0193CD]"
              : "border-transparent text-slate-600 hover:border-slate-200 hover:bg-slate-50 hover:text-[#0193CD]",
        )}
      >
        <Link
          href={href}
          onClick={onNavigate}
          className={cn(
            "flex min-w-0 flex-1 items-center gap-2.5 px-3 font-semibold",
            level === 0 ? "text-sm" : "text-xs",
          )}
          style={{ paddingLeft: `${12 + Math.min(level, 3) * 5}px` }}
        >
          <ItemIcon
            className={cn(
              "shrink-0",
              level === 0 ? "h-4 w-4" : "h-3.5 w-3.5",
              isActive ? "text-white" : "text-[#0193CD]",
            )}
          />
          <span className="min-w-0 break-words leading-5">{item.title}</span>
        </Link>

        {hasChildren ? (
          <button
            type="button"
            aria-label={`${expanded ? "Collapse" : "Expand"} ${item.title}`}
            aria-expanded={expanded}
            onClick={() => setExpanded((current) => !current)}
            className={cn(
              "grid w-10 shrink-0 place-items-center border-l transition",
              isActive
                ? "border-white/20 hover:bg-white/15"
                : "border-slate-200/80 hover:bg-sky-100",
            )}
          >
            <ChevronDown
              className={cn(
                "h-4 w-4 transition-transform duration-200",
                expanded && "rotate-180",
              )}
            />
          </button>
        ) : null}
      </div>

      {hasChildren && expanded ? (
        <div className="ml-3 mt-1.5 space-y-1 border-l border-slate-200 pl-2">
          {item.children.map((child) => (
            <SidebarTreeItem
              key={`${child.publicPath}-${child.title}`}
              item={child}
              pathname={pathname}
              onNavigate={onNavigate}
              level={level + 1}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
