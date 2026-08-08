import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  FilePenLine,
  FolderTree,
  Globe2,
  LayoutTemplate,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import {
  findCmsNavigationItem,
  getCmsPath,
  getPublicPathFromCmsSegments,
} from "@/config/cms-navigation";

const PRIMARY = "#0193CD";

type CmsPlaceholderPageProps = {
  params: Promise<{ segments: string[] }>;
};

function humanizeSegment(segment: string) {
  return segment
    .split("-")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

export default async function CmsPlaceholderPage({
  params,
}: CmsPlaceholderPageProps) {
  const { segments } = await params;
  const publicPath = getPublicPathFromCmsSegments(segments);
  const match = findCmsNavigationItem(publicPath);
  const title = match?.item.title ?? humanizeSegment(segments.at(-1) ?? "Page");
  const children = match?.item.children ?? [];
  const breadcrumbs = match
    ? [...match.ancestors, match.item]
    : [{ title, publicPath, children: [] }];

  return (
    <div className="min-h-screen space-y-6 bg-slate-50 p-4 md:p-6">
      <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-xs font-semibold text-slate-500">
        <Link href="/dashboard" className="transition hover:text-[#0193CD]">
          Dashboard
        </Link>
        {breadcrumbs.map((item) => (
          <span key={`${item.publicPath}-${item.title}`} className="flex items-center gap-1.5">
            <ChevronRight className="h-3.5 w-3.5 text-slate-300" />
            <Link
              href={getCmsPath(item.publicPath)}
              className="transition hover:text-[#0193CD]"
            >
              {item.title}
            </Link>
          </span>
        ))}
      </nav>

      <section
        className="relative overflow-hidden rounded-3xl p-6 text-white shadow-lg md:p-8"
        style={{ backgroundColor: PRIMARY }}
      >
        <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-white/10" />
        <div className="absolute -bottom-20 right-24 h-40 w-40 rounded-full bg-[#D13D34]/40" />
        <div className="relative flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div className="flex items-start gap-4">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/15">
              <LayoutTemplate className="h-7 w-7" />
            </span>
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-white/70">
                Website Content
              </p>
              <h1 className="mt-2 text-3xl font-black md:text-4xl">{title} Page</h1>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-white/85">
                This workspace is reserved for managing the {title} section and its content.
              </p>
            </div>
          </div>
          <span className="inline-flex w-fit items-center gap-2 rounded-2xl bg-white/15 px-4 py-3 text-xs font-black uppercase tracking-[0.14em]">
            <FilePenLine className="h-4 w-4" />
            CMS Page
          </span>
        </div>
      </section>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-start gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-sky-50 text-[#0193CD]">
              <Globe2 className="h-5 w-5" />
            </span>
            <div className="min-w-0">
              <p className="text-xs font-black uppercase tracking-[0.15em] text-slate-400">
                Public path
              </p>
              <p className="mt-1 break-all font-mono text-sm font-bold text-slate-700">
                {publicPath}
              </p>
            </div>
          </div>
        </Card>

        <Card className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-start gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-red-50 text-[#D13D34]">
              <FolderTree className="h-5 w-5" />
            </span>
            <div>
              <p className="text-xs font-black uppercase tracking-[0.15em] text-slate-400">
                Child sections
              </p>
              <p className="mt-1 text-lg font-black text-slate-800">
                {children.length}
              </p>
            </div>
          </div>
        </Card>
      </div>

      {children.length > 0 ? (
        <Card className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 p-5">
            <h2 className="text-lg font-black text-slate-900">{title} sections</h2>
            <p className="mt-1 text-sm text-slate-500">
              Select a child section to open its dedicated CMS page.
            </p>
          </div>
          <div className="grid gap-3 p-4 sm:grid-cols-2 xl:grid-cols-3">
            {children.map((child) => (
              <Link
                key={`${child.publicPath}-${child.title}`}
                href={getCmsPath(child.publicPath)}
                className="group flex min-h-24 items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:border-sky-200 hover:bg-sky-50"
              >
                <div className="min-w-0">
                  <p className="font-bold leading-5 text-slate-800 transition group-hover:text-[#0193CD]">
                    {child.title}
                  </p>
                  <p className="mt-1 text-xs text-slate-400">
                    {child.children.length} child sections
                  </p>
                </div>
                <ArrowRight className="h-4 w-4 shrink-0 text-slate-300 transition group-hover:translate-x-1 group-hover:text-[#0193CD]" />
              </Link>
            ))}
          </div>
        </Card>
      ) : (
        <Card className="rounded-3xl border border-dashed border-slate-300 bg-white p-8 text-center shadow-sm">
          <FilePenLine className="mx-auto h-8 w-8 text-[#0193CD]" />
          <h2 className="mt-3 text-lg font-black text-slate-900">{title} content editor</h2>
          <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-slate-500">
            This named page is ready for its content fields and editor to be added in the next implementation phase.
          </p>
        </Card>
      )}
    </div>
  );
}
