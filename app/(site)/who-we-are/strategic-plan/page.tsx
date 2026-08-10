import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  Compass,
  Handshake,
  Landmark,
  Lightbulb,
  LineChart,
  Route,
  ShieldCheck,
  Sparkles,
  Target,
  UsersRound,
  type LucideIcon,
} from "lucide-react";
import {
  mergeCmsContent,
  strategicPlanDefaultContent,
  type CmsPageContent,
} from "@/lib/cms/content-page-defaults";
import {
  getPublishedCmsContent,
  getPublishedCmsPage,
} from "@/lib/services/cms-page.service";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPublishedCmsPage("strategic-plan").catch(() => null);

  return {
    title: page?.seoTitle || "Strategic Plan | PSTC",
    description:
      page?.seoDescription ||
      "Explore PSTC’s 2025–2030 strategic direction, thematic focus areas, implementation roadmap, and foundations for sustainable impact.",
  };
}

const enablerIconMap: Record<string, LucideIcon> = {
  Handshake,
  Landmark,
  LineChart,
  ShieldCheck,
  UsersRound,
};

const priorityTones: Record<string, string> = {
  blue: "border-sky-400/35 bg-sky-400/10 text-sky-300",
  green: "border-lime-400/35 bg-lime-400/10 text-lime-300",
  red: "border-red-400/35 bg-red-400/10 text-red-300",
  amber: "border-amber-400/35 bg-amber-400/10 text-amber-300",
  violet: "border-violet-400/35 bg-violet-400/10 text-violet-300",
};

export default async function StrategicPlanPage() {
  const published = await getPublishedCmsContent<CmsPageContent>(
    "strategic-plan",
  ).catch(() => null);
  const content = mergeCmsContent(strategicPlanDefaultContent, published);
  const sections = content.sections as Record<string, any>;
  const hero = sections.hero;
  const direction = sections.direction;
  const priorities = sections.priorities;
  const roadmap = sections.roadmap;
  const enablers = sections.enablers;
  const measurement = sections.measurement;
  const cta = sections.cta;

  return (
    <main className="overflow-hidden bg-background text-foreground">
      <section
        hidden={!hero.isVisible}
        className="relative isolate min-h-[700px] overflow-hidden bg-[#061b31] text-white lg:min-h-[790px]"
      >
        <Image
          src={hero.image}
          alt="PSTC strategic planning"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-35"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,24,44,0.99)_0%,rgba(4,42,72,0.92)_52%,rgba(4,42,72,0.45)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_20%,rgba(148,202,81,0.25),transparent_25%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(56,189,248,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.06)_1px,transparent_1px)] bg-[size:46px_46px]" />

        <div className="container-pstc relative z-10 flex min-h-[700px] flex-col py-8 lg:min-h-[790px] lg:py-12">
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
            <span className="text-[#b9ec7a]">Strategic Plan</span>
          </nav>

          <div className="grid flex-1 items-center gap-14 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#94ca51]/25 bg-[#94ca51]/10 px-4 py-2 text-[11px] font-black uppercase tracking-[0.24em] text-[#b9ec7a]">
                <Compass className="size-4" />
                {hero.eyebrow}
              </div>
              <h1 className="mt-7 max-w-4xl text-5xl font-black leading-[0.97] tracking-[-0.05em] sm:text-6xl lg:text-7xl xl:text-[5.2rem]">
                {hero.title}
                <span className="block text-[#b9ec7a]">
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
                  <Route className="size-4" />
                </a>
                <Link
                  href={hero.secondaryCtaHref}
                  className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/[0.07] px-6 py-3.5 text-sm font-black transition hover:-translate-y-1 hover:bg-white hover:text-[#061b31]"
                >
                  {hero.secondaryCtaLabel}
                  <ArrowUpRight className="size-4" />
                </Link>
              </div>
            </div>

            <div className="relative mx-auto grid aspect-square w-full max-w-[470px] place-items-center">
              <div className="absolute inset-[2%] animate-[spin_32s_linear_infinite] rounded-full border border-dashed border-[#38bdf8]/25" />
              <div className="absolute inset-[13%] rounded-full border border-[#94ca51]/25" />
              <div className="absolute inset-[25%] rounded-full border border-dashed border-white/15" />
              <div className="absolute left-[11%] top-1/2 size-4 -translate-y-1/2 rounded-full border-4 border-[#061b31] bg-[#38bdf8]" />
              <div className="absolute right-[20%] top-[16%] size-4 rounded-full border-4 border-[#061b31] bg-[#94ca51]" />
              <div className="absolute bottom-[18%] right-[24%] size-3 rounded-full bg-amber-400" />
              <div className="relative grid size-[54%] place-items-center rounded-full border border-[#94ca51]/35 bg-[#082944]/90 p-8 text-center shadow-[0_0_80px_rgba(148,202,81,0.14)] backdrop-blur-xl">
                <Target className="size-7 text-[#b9ec7a]" />
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">
                    {hero.periodLabel}
                  </p>
                  <p className="mt-2 text-3xl font-black tracking-[-0.04em] text-white sm:text-4xl">
                    {hero.periodValue}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section hidden={!direction.isVisible} className="py-20 lg:py-28">
        <div className="container-pstc grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-24">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.28em] text-secondary">
              {direction.eyebrow}
            </p>
            <h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.04em] sm:text-5xl">
              {direction.title}
              <span className="block text-primary">
                {direction.highlightedTitle}
              </span>
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground">
              {direction.description}
            </p>
          </div>

          <div className="relative mx-auto grid min-h-[520px] w-full max-w-2xl place-items-center">
            <div className="absolute size-[500px] max-h-full max-w-full rounded-full border border-primary/10" />
            <div className="absolute size-[380px] max-h-[76%] max-w-[76%] rounded-full border border-dashed border-primary/15" />
            <div className="absolute size-[255px] max-h-[52%] max-w-[52%] rounded-full bg-primary shadow-[0_25px_80px_var(--pstc-primary-glow)]" />
            <div className="relative z-10 max-w-[230px] text-center text-primary-foreground">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/55">
                {direction.northStarLabel}
              </p>
              <h3 className="mt-3 text-2xl font-black leading-tight">
                {direction.northStarTitle}
              </h3>
              <p className="mt-3 text-xs leading-5 text-white/65">
                {direction.northStarDescription}
              </p>
            </div>
            {(direction.orbitItems ?? []).map(
              (item: string, index: number) => {
                const positions = [
                  "left-0 top-[18%]",
                  "right-0 top-[18%]",
                  "bottom-[12%] left-0",
                  "bottom-[12%] right-0",
                ];
                return (
                  <span
                    key={`${item}-${index}`}
                    className={`absolute ${positions[index % positions.length]} rounded-full border border-border bg-card px-4 py-2 text-xs font-black shadow-lg`}
                  >
                    {item}
                  </span>
                );
              },
            )}
          </div>
        </div>
      </section>

      <section
        hidden={!priorities.isVisible}
        className="relative overflow-hidden bg-[#061b31] py-20 text-white lg:py-28"
      >
        <div className="absolute inset-0 bg-[linear-gradient(rgba(56,189,248,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.05)_1px,transparent_1px)] bg-[size:42px_42px]" />
        <div className="container-pstc relative">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end lg:gap-20">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.28em] text-[#b9ec7a]">
                {priorities.eyebrow}
              </p>
              <h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.04em] sm:text-5xl">
                {priorities.title}
                <span className="block text-[#b9ec7a]">
                  {priorities.highlightedTitle}
                </span>
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-white/58 lg:justify-self-end">
              {priorities.description}
            </p>
          </div>

          <div className="mt-14 space-y-3">
            {(priorities.items ?? []).map(
              (item: Record<string, string>, index: number) => (
                <Link
                  key={`${item.number}-${item.title}-${index}`}
                  href={item.href}
                  className="group grid gap-4 rounded-[1.5rem] border border-white/10 bg-white/[0.055] p-5 transition hover:translate-x-1 hover:border-white/20 hover:bg-white/[0.085] sm:grid-cols-[70px_110px_1fr_auto] sm:items-center sm:p-6"
                >
                  <span className="font-mono text-sm font-black text-white/28">
                    {item.number}
                  </span>
                  <span
                    className={`w-fit rounded-xl border px-3 py-2 text-xs font-black ${
                      priorityTones[item.tone] ?? priorityTones.blue
                    }`}
                  >
                    {item.shortCode}
                  </span>
                  <div>
                    <h3 className="text-lg font-black sm:text-xl">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-white/48">
                      {item.description}
                    </p>
                  </div>
                  <ArrowUpRight className="size-5 text-white/30 transition group-hover:text-[#b9ec7a]" />
                </Link>
              ),
            )}
          </div>

          <p className="mt-7 rounded-2xl border border-[#94ca51]/20 bg-[#94ca51]/8 p-4 text-sm leading-6 text-white/55">
            {priorities.note}
          </p>
        </div>
      </section>

      <section
        hidden={!roadmap.isVisible}
        id="strategic-roadmap"
        className="bg-muted/50 py-20 lg:py-28"
      >
        <div className="container-pstc">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-secondary">
              {roadmap.eyebrow}
            </p>
            <h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.04em] sm:text-5xl">
              {roadmap.title}{" "}
              <span className="text-primary">{roadmap.highlightedTitle}</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted-foreground">
              {roadmap.description}
            </p>
          </div>

          <div className="relative mt-14 grid gap-5 lg:grid-cols-4">
            <div className="absolute left-[12%] right-[12%] top-9 hidden h-px bg-gradient-to-r from-primary via-secondary to-primary lg:block" />
            {(roadmap.items ?? []).map(
              (item: Record<string, string>, index: number) => (
                <article
                  key={`${item.phase}-${index}`}
                  className="relative rounded-[1.6rem] border border-border bg-card p-6 shadow-[0_14px_40px_rgba(16,24,40,0.07)]"
                >
                  <span className="relative grid size-14 place-items-center rounded-full border-4 border-background bg-primary font-mono text-sm font-black text-primary-foreground shadow-[0_10px_30px_var(--pstc-primary-glow)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-6 text-xs font-black uppercase tracking-[0.2em] text-secondary">
                    {item.phase}
                  </p>
                  <h3 className="mt-2 text-xl font-black">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {item.description}
                  </p>
                </article>
              ),
            )}
          </div>
        </div>
      </section>

      <section hidden={!enablers.isVisible} className="py-20 lg:py-28">
        <div className="container-pstc">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end lg:gap-20">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.28em] text-secondary">
                {enablers.eyebrow}
              </p>
              <h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.04em] sm:text-5xl">
                {enablers.title}
                <span className="block text-primary">
                  {enablers.highlightedTitle}
                </span>
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-muted-foreground lg:justify-self-end">
              {enablers.description}
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {(enablers.items ?? []).map(
              (item: Record<string, string>, index: number) => {
                const Icon = enablerIconMap[item.icon] ?? Lightbulb;
                return (
                  <article
                    key={`${item.title}-${index}`}
                    className="group rounded-[1.5rem] border border-border bg-card p-5 shadow-sm transition hover:-translate-y-1 hover:border-primary/25"
                  >
                    <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="size-5" />
                    </span>
                    <h3 className="mt-5 font-black">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {item.description}
                    </p>
                  </article>
                );
              },
            )}
          </div>
        </div>
      </section>

      <section
        hidden={!measurement.isVisible}
        className="border-y border-border bg-[#edf6fb] py-20 dark:bg-[#08263d] lg:py-28"
      >
        <div className="container-pstc grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.28em] text-secondary">
              {measurement.eyebrow}
            </p>
            <h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.04em] sm:text-5xl">
              {measurement.title}
              <span className="block text-primary dark:text-[#b9ec7a]">
                {measurement.highlightedTitle}
              </span>
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground dark:text-white/55">
              {measurement.description}
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {(measurement.items ?? []).map(
              (item: string, index: number) => (
                <div
                  key={`${item}-${index}`}
                  className="flex items-center gap-3 rounded-2xl border border-primary/10 bg-background p-4 shadow-sm"
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

      <section hidden={!cta.isVisible} className="py-16 lg:py-20">
        <div className="container-pstc">
          <div className="relative overflow-hidden rounded-[2rem] bg-primary p-8 text-primary-foreground shadow-[0_28px_80px_var(--pstc-primary-glow)] sm:p-10 lg:p-14">
            <div className="absolute -right-20 -top-20 size-64 rounded-full bg-white/10" />
            <Sparkles className="absolute bottom-8 right-10 size-16 text-white/10" />
            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <p className="text-xs font-black uppercase tracking-[0.25em] text-white/65">
                  {cta.eyebrow}
                </p>
                <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
                  {cta.title}
                </h2>
                <p className="mt-5 max-w-2xl text-sm leading-7 text-white/75 sm:text-base">
                  {cta.description}
                </p>
              </div>
              <div className="flex shrink-0 flex-wrap gap-3">
                <Link
                  href={cta.primaryCtaHref}
                  className="group inline-flex items-center gap-3 rounded-full bg-secondary px-6 py-3.5 text-sm font-black text-secondary-foreground transition hover:-translate-y-1 hover:bg-white"
                >
                  {cta.primaryCtaLabel}
                  <ArrowUpRight className="size-4" />
                </Link>
                <Link
                  href={cta.secondaryCtaHref}
                  className="inline-flex items-center gap-3 rounded-full border border-white/25 bg-white/10 px-6 py-3.5 text-sm font-black text-white transition hover:-translate-y-1 hover:bg-white hover:text-primary"
                >
                  {cta.secondaryCtaLabel}
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
