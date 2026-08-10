import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  ChevronRight,
  Compass,
  Handshake,
  MapPin,
  Navigation,
  Stethoscope,
  UsersRound,
  type LucideIcon,
} from "lucide-react";
import PSTCBangladeshMap from "@/components/landing/PSTCBangladeshMap";
import {
  mergeCmsContent,
  whereWeWorkDefaultContent,
  type CmsPageContent,
} from "@/lib/cms/content-page-defaults";
import {
  getPublishedCmsContent,
  getPublishedCmsPage,
} from "@/lib/services/cms-page.service";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPublishedCmsPage("where-we-work").catch(() => null);

  return {
    title: page?.seoTitle || "Where We Work | PSTC",
    description:
      page?.seoDescription ||
      "Explore PSTC’s operational footprint, branch districts, service locations, and community connections across Bangladesh.",
  };
}

const approachIconMap: Record<string, LucideIcon> = {
  BriefcaseBusiness,
  Handshake,
  Stethoscope,
  UsersRound,
};

export default async function WhereWeWorkPage() {
  const published = await getPublishedCmsContent<CmsPageContent>(
    "where-we-work",
  ).catch(() => null);
  const content = mergeCmsContent(whereWeWorkDefaultContent, published);
  const sections = content.sections as Record<string, any>;
  const hero = sections.hero;
  const map = sections.map;
  const presence = sections.presence;
  const approach = sections.approach;
  const office = sections.office;
  const mapLocations = (map.locations ?? []).map(
    (location: Record<string, string>) => ({
      key: location.key,
      title: location.title,
    }),
  );

  return (
    <main className="overflow-hidden bg-background text-foreground">
      <section
        hidden={!hero.isVisible}
        className="relative isolate min-h-[690px] overflow-hidden bg-[#07385e] text-white lg:min-h-[770px]"
      >
        <Image
          src={hero.image}
          alt="PSTC teams working across Bangladesh"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-58"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,36,64,0.99)_0%,rgba(5,56,94,0.91)_47%,rgba(5,56,94,0.28)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_20%,rgba(148,202,81,0.34),transparent_26%)]" />
        <div className="absolute -bottom-36 -right-24 size-[520px] rounded-full border border-white/10" />
        <div className="absolute -bottom-20 -right-10 size-[380px] rounded-full border border-white/10" />

        <div className="container-pstc relative z-10 flex min-h-[690px] flex-col justify-between py-8 lg:min-h-[770px] lg:py-12">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-xs font-bold text-white/70"
          >
            <Link href="/" className="transition hover:text-white">
              Home
            </Link>
            <ChevronRight className="size-3.5" />
            <Link href="/who-we-are" className="transition hover:text-white">
              Who We Are
            </Link>
            <ChevronRight className="size-3.5" />
            <span className="text-[#b9ec7a]">Where We Work</span>
          </nav>

          <div className="max-w-4xl py-14 lg:py-20">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-black uppercase tracking-[0.24em] backdrop-blur-md">
              <Navigation className="size-4 text-[#b9ec7a]" />
              {hero.eyebrow}
            </div>
            <h1 className="mt-7 max-w-4xl text-5xl font-black leading-[0.98] tracking-[-0.045em] sm:text-6xl lg:text-7xl xl:text-[5.35rem]">
              {hero.title}
              <span className="block text-[#b9ec7a]">
                {hero.highlightedTitle}
              </span>
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-white/72 sm:text-lg">
              {hero.description}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href={hero.primaryCtaHref}
                className="group inline-flex items-center gap-3 rounded-full bg-[#94ca51] px-6 py-3.5 text-sm font-black text-[#10210b] transition hover:-translate-y-1 hover:bg-white"
              >
                {hero.primaryCtaLabel}
                <MapPin className="size-4 transition group-hover:-translate-y-0.5" />
              </a>
              <Link
                href={hero.secondaryCtaHref}
                className="inline-flex items-center gap-3 rounded-full border border-white/25 bg-white/10 px-6 py-3.5 text-sm font-black backdrop-blur transition hover:-translate-y-1 hover:bg-white hover:text-[#07385e]"
              >
                {hero.secondaryCtaLabel}
                <ArrowUpRight className="size-4" />
              </Link>
            </div>
          </div>

          <dl className="grid overflow-hidden rounded-2xl border border-white/15 bg-[#052f51]/65 backdrop-blur-xl sm:grid-cols-2 lg:grid-cols-4">
            {(hero.metrics ?? []).map(
              (metric: Record<string, string>, index: number) => (
                <div
                  key={`${metric.value}-${metric.label}-${index}`}
                  className="border-white/12 px-6 py-5 sm:border-r sm:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:last:border-r-0"
                >
                  <dd className="text-3xl font-black tabular-nums text-[#b9ec7a]">
                    {metric.value}
                  </dd>
                  <dt className="mt-1 text-xs font-bold text-white/55">
                    {metric.label}
                  </dt>
                </div>
              ),
            )}
          </dl>
        </div>
      </section>

      <section
        hidden={!map.isVisible}
        id="coverage-map"
        className="relative overflow-hidden bg-[#f4f9fc] py-20 text-slate-950 dark:bg-[#071f32] dark:text-white lg:py-28"
      >
        <div className="absolute inset-0 bg-[linear-gradient(rgba(11,87,158,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(11,87,158,0.045)_1px,transparent_1px)] bg-[size:44px_44px]" />
        <div className="container-pstc relative">
          <div className="grid gap-12 xl:grid-cols-[0.82fr_1.18fr] xl:items-center xl:gap-20">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-primary dark:text-sky-300">
                <Compass className="size-3.5" />
                {map.eyebrow}
              </div>
              <h2 className="mt-5 text-4xl font-black leading-tight tracking-[-0.035em] sm:text-5xl">
                {map.title}
                <span className="block text-primary dark:text-[#94ca51]">
                  {map.highlightedTitle}
                </span>
              </h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 dark:text-white/60">
                {map.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-5 text-sm font-bold">
                <span className="inline-flex items-center gap-2">
                  <span className="size-3 rounded-sm bg-primary" />
                  {map.branchLegend}
                </span>
                <span className="inline-flex items-center gap-2 text-slate-500 dark:text-white/45">
                  <span className="size-3 rounded-sm border border-primary/15 bg-primary/8" />
                  {map.otherLegend}
                </span>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {mapLocations.map(
                  (location: { key: string; title: string }) => (
                    <span
                      key={location.key}
                      className="rounded-full border border-primary/12 bg-white px-3 py-1.5 text-[11px] font-bold text-slate-600 shadow-sm dark:bg-white/[0.06] dark:text-white/60"
                    >
                      {location.title}
                    </span>
                  ),
                )}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-2xl">
              <div className="absolute inset-10 rounded-full bg-primary/12 blur-3xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-primary/10 bg-background shadow-[0_30px_90px_rgba(11,87,158,0.15)]">
                <div className="flex items-center justify-between border-b border-border px-5 py-4">
                  <div className="flex items-center gap-2">
                    <span className="size-2.5 rounded-full bg-[#94ca51]" />
                    <p className="text-[10px] font-black uppercase tracking-[0.18em] text-muted-foreground">
                      Live coverage map
                    </p>
                  </div>
                  <p className="text-xs font-black text-primary">
                    {map.summary}
                  </p>
                </div>
                <div
                  className="w-full"
                  style={{ aspectRatio: "1655.4 / 2224.5" }}
                >
                  <PSTCBangladeshMap
                    className="h-full w-full"
                    locations={mapLocations}
                    summary={map.summary}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        hidden={!presence.isVisible}
        className="border-y border-border py-20 lg:py-28"
      >
        <div className="container-pstc">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end lg:gap-20">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.28em] text-secondary">
                {presence.eyebrow}
              </p>
              <h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.035em] sm:text-5xl">
                {presence.title}
                <span className="block text-primary">
                  {presence.highlightedTitle}
                </span>
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-muted-foreground lg:justify-self-end">
              {presence.description}
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {(presence.items ?? []).map(
              (item: Record<string, string>, index: number) => (
                <article
                  key={`${item.title}-${index}`}
                  className="group overflow-hidden rounded-[1.8rem] border border-border bg-card shadow-[0_18px_55px_rgba(16,24,40,0.09)]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#052f51]/80 via-transparent to-transparent" />
                    <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-white/92 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.14em] text-[#07385e] backdrop-blur">
                      <MapPin className="size-3.5 text-secondary" />
                      {item.location}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-black">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">
                      {item.description}
                    </p>
                    <Link
                      href={item.href}
                      className="mt-6 inline-flex items-center gap-2 text-sm font-black text-primary transition group-hover:text-secondary"
                    >
                      {item.linkLabel}
                      <ArrowRight className="size-4 transition group-hover:translate-x-1" />
                    </Link>
                  </div>
                </article>
              ),
            )}
          </div>
        </div>
      </section>

      <section
        hidden={!approach.isVisible}
        className="relative overflow-hidden bg-[#07385e] py-20 text-white lg:py-28"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(148,202,81,0.18),transparent_25%),radial-gradient(circle_at_90%_80%,rgba(56,189,248,0.2),transparent_28%)]" />
        <div className="container-pstc relative">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[#b9ec7a]">
              {approach.eyebrow}
            </p>
            <h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.035em] sm:text-5xl">
              {approach.title}{" "}
              <span className="text-[#b9ec7a]">
                {approach.highlightedTitle}
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/60">
              {approach.description}
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {(approach.items ?? []).map(
              (item: Record<string, string>, index: number) => {
                const Icon = approachIconMap[item.icon] ?? MapPin;
                return (
                  <article
                    key={`${item.number}-${item.title}-${index}`}
                    className="group rounded-[1.6rem] border border-white/12 bg-white/[0.065] p-6 backdrop-blur transition hover:-translate-y-1 hover:border-[#94ca51]/40 hover:bg-white/[0.1]"
                  >
                    <div className="flex items-center justify-between">
                      <span className="grid size-12 place-items-center rounded-2xl bg-white/10 text-[#b9ec7a] transition group-hover:bg-[#94ca51] group-hover:text-[#10210b]">
                        <Icon className="size-5" />
                      </span>
                      <span className="font-mono text-xs font-black text-white/25">
                        {item.number}
                      </span>
                    </div>
                    <h3 className="mt-6 text-xl font-black">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-white/55">
                      {item.description}
                    </p>
                  </article>
                );
              },
            )}
          </div>
        </div>
      </section>

      <section hidden={!office.isVisible} className="py-20 lg:py-28">
        <div className="container-pstc">
          <div className="grid overflow-hidden rounded-[2rem] border border-border bg-card shadow-[0_30px_90px_rgba(16,24,40,0.12)] lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative min-h-[360px] lg:min-h-[520px]">
              <Image
                src={office.image}
                alt="PSTC head office"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#052f51]/75 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-start gap-3 rounded-2xl border border-white/15 bg-[#052f51]/75 p-4 text-white backdrop-blur sm:bottom-8 sm:left-8 sm:right-8">
                <MapPin className="mt-0.5 size-5 shrink-0 text-[#b9ec7a]" />
                <p className="text-sm font-bold leading-6">{office.address}</p>
              </div>
            </div>
            <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-14">
              <p className="text-xs font-black uppercase tracking-[0.28em] text-secondary">
                {office.eyebrow}
              </p>
              <h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.035em] sm:text-5xl">
                {office.title}
                <span className="block text-primary">
                  {office.highlightedTitle}
                </span>
              </h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground">
                {office.description}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href={office.primaryCtaHref}
                  className="group inline-flex items-center gap-3 rounded-full bg-primary px-6 py-3.5 text-sm font-black text-primary-foreground transition hover:-translate-y-1 hover:bg-secondary hover:text-secondary-foreground"
                >
                  {office.primaryCtaLabel}
                  <Navigation className="size-4" />
                </Link>
                <Link
                  href={office.secondaryCtaHref}
                  className="inline-flex items-center gap-3 rounded-full border border-border bg-background px-6 py-3.5 text-sm font-black transition hover:-translate-y-1 hover:border-primary/30 hover:text-primary"
                >
                  {office.secondaryCtaLabel}
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
