import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  Compass,
  GitBranch,
  Lightbulb,
  Network,
  Sparkles,
  UsersRound,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import {
  mergeCmsContent,
  organogramDefaultContent,
  type CmsPageContent,
} from "@/lib/cms/content-page-defaults";
import {
  getPublishedCmsContent,
  getPublishedCmsPage,
} from "@/lib/services/cms-page.service";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPublishedCmsPage("organogram").catch(() => null);

  return {
    title: page?.seoTitle || "Organogram | PSTC",
    description:
      page?.seoDescription ||
      "Explore how governance, leadership, programme functions, enabling teams, and delivery roles connect across PSTC.",
  };
}

const connectionIconMap: Record<string, LucideIcon> = {
  Compass,
  Lightbulb,
  UsersRound,
  Workflow,
};

const toneClasses: Record<string, { dot: string; border: string; badge: string }> = {
  green: {
    dot: "bg-[#94ca51]",
    border: "border-[#94ca51]/45",
    badge: "bg-[#94ca51]/15 text-[#b9ec7a]",
  },
  blue: {
    dot: "bg-[#38bdf8]",
    border: "border-[#38bdf8]/45",
    badge: "bg-[#38bdf8]/15 text-[#7dd3fc]",
  },
  red: {
    dot: "bg-[#f87171]",
    border: "border-[#f87171]/40",
    badge: "bg-[#f87171]/15 text-[#fca5a5]",
  },
  amber: {
    dot: "bg-[#fbbf24]",
    border: "border-[#fbbf24]/40",
    badge: "bg-[#fbbf24]/15 text-[#fcd34d]",
  },
  slate: {
    dot: "bg-[#cbd5e1]",
    border: "border-[#cbd5e1]/30",
    badge: "bg-white/10 text-slate-200",
  },
};

export default async function OrganogramPage() {
  const published = await getPublishedCmsContent<CmsPageContent>(
    "organogram",
  ).catch(() => null);
  const content = mergeCmsContent(organogramDefaultContent, published);
  const sections = content.sections as Record<string, any>;
  const hero = sections.hero;
  const overview = sections.overview;
  const hierarchy = sections.hierarchy;
  const connections = sections.connections;
  const principles = sections.principles;
  const cta = sections.cta;
  const hierarchyLevels = Array.isArray(hierarchy.levels)
    ? hierarchy.levels
    : [];

  return (
    <main className="overflow-hidden bg-background text-foreground">
      <section
        hidden={!hero.isVisible}
        className="relative isolate min-h-[680px] overflow-hidden bg-[#041f38] text-white lg:min-h-[760px]"
      >
        <Image
          src={hero.image}
          alt="PSTC organizational structure"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,31,56,1)_0%,rgba(4,40,70,0.96)_52%,rgba(4,40,70,0.72)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(56,189,248,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.07)_1px,transparent_1px)] bg-[size:38px_38px]" />
        <div className="absolute right-[-8%] top-[-20%] size-[620px] rounded-full bg-[#94ca51]/10 blur-3xl" />

        <div className="container-pstc relative z-10 py-8 lg:py-12">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-xs font-bold text-white/65"
          >
            <Link href="/" className="transition hover:text-white">
              Home
            </Link>
            <ChevronRight className="size-3.5" />
            <Link href="/who-we-are" className="transition hover:text-white">
              Who We Are
            </Link>
            <ChevronRight className="size-3.5" />
            <span className="text-[#94ca51]">Organogram</span>
          </nav>

          <div className="grid min-h-[580px] items-center gap-14 py-14 lg:grid-cols-[1.02fr_0.98fr] lg:gap-20">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#38bdf8]/25 bg-[#38bdf8]/10 px-4 py-2 text-[11px] font-black uppercase tracking-[0.24em] text-[#7dd3fc]">
                <Network className="size-4" />
                {hero.eyebrow}
              </div>
              <h1 className="mt-7 max-w-3xl text-5xl font-black leading-[0.98] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
                {hero.title}
                <span className="block text-[#94ca51]">
                  {hero.highlightedTitle}
                </span>
              </h1>
              <p className="mt-7 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">
                {hero.description}
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href={hero.primaryCtaHref}
                  className="group inline-flex items-center gap-3 rounded-full bg-[#94ca51] px-6 py-3.5 text-sm font-black text-[#10210b] transition hover:-translate-y-1 hover:bg-white"
                >
                  {hero.primaryCtaLabel}
                  <ArrowDown className="size-4 transition group-hover:translate-y-1" />
                </a>
                <Link
                  href={hero.secondaryCtaHref}
                  className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/[0.06] px-6 py-3.5 text-sm font-black transition hover:-translate-y-1 hover:bg-white hover:text-[#041f38]"
                >
                  {hero.secondaryCtaLabel}
                  <ArrowUpRight className="size-4" />
                </Link>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-xl">
              <div className="absolute inset-8 rounded-[2rem] bg-[#38bdf8]/10 blur-3xl" />
              <div className="relative rounded-[2rem] border border-[#38bdf8]/20 bg-[#061f36]/75 p-5 shadow-[0_35px_100px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-7">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="size-2.5 rounded-full bg-[#f87171]" />
                    <span className="size-2.5 rounded-full bg-[#fbbf24]" />
                    <span className="size-2.5 rounded-full bg-[#94ca51]" />
                  </div>
                  <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-white/35">
                    Structure preview
                  </p>
                </div>

                <div className="relative mt-6 space-y-5">
                  <div className="absolute bottom-8 left-1/2 top-8 w-px -translate-x-1/2 bg-gradient-to-b from-[#94ca51] via-[#38bdf8] to-white/15" />
                  {hierarchyLevels.slice(0, 4).map(
                    (level: Record<string, unknown>, index: number) => {
                      const tone =
                        toneClasses[String(level.tone)] ?? toneClasses.slate;
                      return (
                        <div
                          key={`${String(level.title)}-${index}`}
                          className="relative flex justify-center"
                        >
                          <div
                            className={`relative w-[82%] rounded-2xl border bg-[#082943]/95 px-4 py-3 text-center shadow-xl ${tone.border}`}
                          >
                            <span
                              className={`absolute left-3 top-3 size-2 rounded-full ${tone.dot}`}
                            />
                            <p className="text-[9px] font-black uppercase tracking-[0.18em] text-white/35">
                              {String(level.level ?? "")}
                            </p>
                            <p className="mt-1 text-sm font-black text-white">
                              {String(level.title ?? "")}
                            </p>
                          </div>
                        </div>
                      );
                    },
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section hidden={!overview.isVisible} className="relative py-20 lg:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_15%,var(--pstc-primary-soft),transparent_24%),radial-gradient(circle_at_90%_80%,var(--pstc-secondary-soft),transparent_24%)] opacity-70" />
        <div className="container-pstc relative">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-secondary">
              {overview.eyebrow}
            </p>
            <h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.035em] sm:text-5xl">
              {overview.title}{" "}
              <span className="text-primary">
                {overview.highlightedTitle}
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted-foreground">
              {overview.description}
            </p>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-3 lg:gap-0">
            {(overview.items ?? []).map(
              (item: Record<string, string>, index: number) => (
                <article
                  key={`${item.number}-${item.title}-${index}`}
                  className="relative px-6 text-center lg:px-10"
                >
                  {index > 0 ? (
                    <div className="absolute -left-px top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-border to-transparent lg:block" />
                  ) : null}
                  <span className="mx-auto grid size-16 place-items-center rounded-2xl border border-primary/15 bg-primary/8 font-mono text-sm font-black text-primary">
                    {item.number}
                  </span>
                  <h3 className="mt-6 text-2xl font-black">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {item.description}
                  </p>
                </article>
              ),
            )}
          </div>
        </div>
      </section>

      <section
        hidden={!hierarchy.isVisible}
        id="organizational-structure"
        className="relative overflow-hidden bg-[#041f38] py-20 text-white lg:py-28"
      >
        <div className="absolute inset-0 bg-[linear-gradient(rgba(56,189,248,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.055)_1px,transparent_1px)] bg-[size:42px_42px]" />
        <div className="container-pstc relative">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end lg:gap-20">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.28em] text-[#7dd3fc]">
                {hierarchy.eyebrow}
              </p>
              <h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.035em] sm:text-5xl">
                {hierarchy.title}
                <span className="block text-[#94ca51]">
                  {hierarchy.highlightedTitle}
                </span>
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-white/58 lg:justify-self-end">
              {hierarchy.description}
            </p>
          </div>

          <div className="relative mx-auto mt-14 max-w-5xl">
            <div className="absolute bottom-10 left-6 top-10 w-px bg-gradient-to-b from-[#94ca51] via-[#38bdf8] to-white/15 sm:left-1/2 sm:-translate-x-1/2" />
            <div className="space-y-6">
              {hierarchyLevels.map(
                (level: Record<string, unknown>, index: number) => {
                  const tone =
                    toneClasses[String(level.tone)] ?? toneClasses.slate;
                  const units = Array.isArray(level.units) ? level.units : [];
                  const alignRight = index % 2 === 1;

                  return (
                    <article
                      key={`${String(level.title)}-${index}`}
                      className={`relative grid pl-16 sm:grid-cols-2 sm:pl-0 ${
                        alignRight ? "" : ""
                      }`}
                    >
                      <span
                        className={`absolute left-3 top-7 z-10 grid size-7 place-items-center rounded-full border-4 border-[#041f38] sm:left-1/2 sm:-translate-x-1/2 ${tone.dot}`}
                      >
                        <span className="size-1.5 rounded-full bg-[#041f38]" />
                      </span>
                      <div
                        className={`sm:px-8 ${
                          alignRight
                            ? "sm:col-start-2"
                            : "sm:col-start-1 sm:text-right"
                        }`}
                      >
                        <div
                          className={`rounded-[1.6rem] border bg-white/[0.065] p-5 backdrop-blur transition hover:-translate-y-1 hover:bg-white/[0.09] sm:p-6 ${tone.border}`}
                        >
                          <span
                            className={`inline-flex rounded-full px-3 py-1 text-[9px] font-black uppercase tracking-[0.18em] ${tone.badge}`}
                          >
                            {String(level.level ?? "")}
                          </span>
                          <h3 className="mt-4 text-xl font-black sm:text-2xl">
                            {String(level.title ?? "")}
                          </h3>
                          <p className="mt-2 text-sm leading-6 text-white/50">
                            {String(level.description ?? "")}
                          </p>
                          {units.length ? (
                            <div
                              className={`mt-5 flex flex-wrap gap-2 ${
                                alignRight ? "" : "sm:justify-end"
                              }`}
                            >
                              {units.map((unit, unitIndex) => (
                                <span
                                  key={`${String(unit)}-${unitIndex}`}
                                  className="rounded-lg border border-white/10 bg-black/10 px-2.5 py-1.5 text-[10px] font-bold text-white/65"
                                >
                                  {String(unit)}
                                </span>
                              ))}
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </article>
                  );
                },
              )}
            </div>
          </div>

          <div className="mx-auto mt-12 flex max-w-4xl items-start gap-3 rounded-2xl border border-[#38bdf8]/20 bg-[#38bdf8]/8 p-5 text-sm leading-6 text-white/55">
            <GitBranch className="mt-0.5 size-5 shrink-0 text-[#7dd3fc]" />
            <p>{hierarchy.note}</p>
          </div>
        </div>
      </section>

      <section
        hidden={!connections.isVisible}
        className="border-b border-border bg-muted/55 py-20 lg:py-28"
      >
        <div className="container-pstc">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-20">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.28em] text-secondary">
                {connections.eyebrow}
              </p>
              <h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.035em] sm:text-5xl">
                {connections.title}
                <span className="block text-primary">
                  {connections.highlightedTitle}
                </span>
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-muted-foreground lg:justify-self-end">
              {connections.description}
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {(connections.items ?? []).map(
              (item: Record<string, string>, index: number) => {
                const Icon = connectionIconMap[item.icon] ?? Workflow;
                return (
                  <article
                    key={`${item.title}-${index}`}
                    className="group rounded-[1.6rem] border border-border bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_20px_50px_rgba(11,87,158,0.1)]"
                  >
                    <div className="flex items-center justify-between">
                      <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                        <Icon className="size-5" />
                      </span>
                      <span className="font-mono text-xs font-black text-muted-foreground/30">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="mt-6 text-xl font-black">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">
                      {item.description}
                    </p>
                  </article>
                );
              },
            )}
          </div>
        </div>
      </section>

      <section hidden={!principles.isVisible} className="py-20 lg:py-28">
        <div className="container-pstc grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.28em] text-secondary">
              {principles.eyebrow}
            </p>
            <h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.035em] sm:text-5xl">
              {principles.title}
              <span className="block text-primary">
                {principles.highlightedTitle}
              </span>
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground">
              {principles.description}
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {(principles.items ?? []).map(
              (item: string, index: number) => (
                <div
                  key={`${item}-${index}`}
                  className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4 shadow-sm"
                >
                  <span className="grid size-7 shrink-0 place-items-center rounded-lg bg-secondary/15 text-secondary">
                    <Check className="size-4 stroke-[3]" />
                  </span>
                  <p className="text-sm font-black">{item}</p>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      <section hidden={!cta.isVisible} className="pb-16 lg:pb-20">
        <div className="container-pstc">
          <div className="relative overflow-hidden rounded-[2rem] bg-[#041f38] p-8 text-white shadow-[0_30px_90px_rgba(4,31,56,0.25)] sm:p-10 lg:p-14">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(56,189,248,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.06)_1px,transparent_1px)] bg-[size:32px_32px]" />
            <div className="absolute -right-24 -top-24 size-72 rounded-full bg-[#94ca51]/12 blur-2xl" />
            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <p className="text-xs font-black uppercase tracking-[0.25em] text-[#7dd3fc]">
                  {cta.eyebrow}
                </p>
                <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
                  {cta.title}
                </h2>
                <p className="mt-5 max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
                  {cta.description}
                </p>
              </div>
              <div className="flex shrink-0 flex-wrap gap-3">
                <Link
                  href={cta.primaryCtaHref}
                  className="group inline-flex items-center gap-3 rounded-full bg-[#94ca51] px-6 py-3.5 text-sm font-black text-[#10210b] transition hover:-translate-y-1 hover:bg-white"
                >
                  {cta.primaryCtaLabel}
                  <ArrowRight className="size-4 transition group-hover:translate-x-1" />
                </Link>
                <Link
                  href={cta.secondaryCtaHref}
                  className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/[0.06] px-6 py-3.5 text-sm font-black transition hover:-translate-y-1 hover:bg-white hover:text-[#041f38]"
                >
                  {cta.secondaryCtaLabel}
                  <ArrowUpRight className="size-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
