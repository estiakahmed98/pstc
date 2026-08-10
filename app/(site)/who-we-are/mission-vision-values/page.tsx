import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Check,
  ChevronRight,
  Compass,
  Eye,
  Handshake,
  HeartHandshake,
  Lightbulb,
  Quote,
  ShieldCheck,
  Sparkles,
  Target,
  UsersRound,
  type LucideIcon,
} from "lucide-react";
import {
  mergeCmsContent,
  missionVisionValuesDefaultContent,
  type CmsPageContent,
} from "@/lib/cms/content-page-defaults";
import {
  getPublishedCmsContent,
  getPublishedCmsPage,
} from "@/lib/services/cms-page.service";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPublishedCmsPage("mission-vision-values").catch(
    () => null,
  );

  return {
    title: page?.seoTitle || "Mission, Vision & Values | PSTC",
    description:
      page?.seoDescription ||
      "Discover the mission, vision, and values that guide PSTC’s work with people and communities.",
  };
}

const valueIconMap: Record<string, LucideIcon> = {
  BadgeCheck,
  Handshake,
  HeartHandshake,
  Lightbulb,
  ShieldCheck,
  UsersRound,
};

export default async function MissionVisionValuesPage() {
  const published = await getPublishedCmsContent<CmsPageContent>(
    "mission-vision-values",
  ).catch(() => null);
  const content = mergeCmsContent(
    missionVisionValuesDefaultContent,
    published,
  );
  const sections = content.sections as Record<string, any>;
  const hero = sections.hero;
  const purpose = sections.purpose;
  const values = sections.values;
  const practice = sections.practice;
  const promise = sections.promise;
  const cta = sections.cta;

  return (
    <main className="overflow-hidden bg-background text-foreground">
      <section
        hidden={!hero.isVisible}
        className="relative isolate min-h-[700px] overflow-hidden bg-[#fffaf2] text-[#17202a] dark:bg-[#151d27] dark:text-white lg:min-h-[780px]"
      >
        <div className="absolute left-0 top-0 h-3 w-full bg-[linear-gradient(90deg,#0b579e_0_33%,#d13d34_33%_66%,#94ca51_66%)]" />
        <div className="absolute -left-24 bottom-0 text-[22rem] font-black leading-none tracking-[-0.12em] text-[#0b579e]/[0.035] dark:text-white/[0.025]">MVV</div>
        <div className="container-pstc relative z-10 flex min-h-[700px] flex-col justify-between py-10 lg:min-h-[780px] lg:py-14">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-xs font-bold text-current/50"
          >
            <Link href="/" className="transition hover:text-primary">
              Home
            </Link>
            <ChevronRight className="size-3.5" />
            <Link
              href="/who-we-are"
              className="transition hover:text-primary"
            >
              Who We Are
            </Link>
            <ChevronRight className="size-3.5" />
            <span className="text-[#d13d34]">
              Mission, Vision & Values
            </span>
          </nav>

          <div className="grid flex-1 items-center gap-12 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.28em] text-[#d13d34]">
                <Sparkles className="size-4" />{hero.eyebrow}
              </div>
              <h1 className="max-w-4xl text-5xl font-black leading-[0.92] tracking-[-0.06em] sm:text-6xl lg:text-7xl xl:text-[5.6rem]">
                {hero.title}
                <span className="block text-[#0b579e] dark:text-sky-300">{hero.highlightedTitle}</span>
              </h1>
              <p className="mt-8 max-w-xl text-base leading-8 text-current/60 sm:text-lg">{hero.description}</p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a href={hero.primaryCtaHref} className="group inline-flex items-center gap-3 rounded-full bg-[#d13d34] px-6 py-3.5 text-sm font-black text-white shadow-xl transition hover:-translate-y-1 hover:bg-[#0b579e]">
                  {hero.primaryCtaLabel}<ArrowRight className="size-4 transition group-hover:translate-x-1" />
                </a>
                <Link href={hero.secondaryCtaHref} className="inline-flex items-center gap-3 rounded-full border border-current/15 bg-background/60 px-6 py-3.5 text-sm font-black transition hover:-translate-y-1 hover:border-[#94ca51] hover:text-[#78aa3e]">
                  {hero.secondaryCtaLabel}<ArrowUpRight className="size-4" />
                </Link>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-lg">
              <div className="absolute -left-5 -top-5 h-full w-full rounded-[3rem] border-2 border-[#0b579e]" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-[3rem] rounded-br-[9rem] shadow-[0_30px_80px_rgba(23,32,42,0.2)]">
                <Image src={hero.image} alt="PSTC mission, vision, and values" fill priority sizes="(max-width:1024px) 90vw,40vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#17202a]/55 via-transparent to-transparent" />
              </div>
              <span className="absolute -bottom-4 -right-3 grid size-24 place-items-center rounded-full bg-[#94ca51] text-center text-xs font-black uppercase tracking-[0.12em] text-[#10210b] shadow-xl">Purpose<br />in action</span>
            </div>
          </div>

          <div className="grid overflow-hidden border-y border-current/10 sm:grid-cols-3">
            {[
              [Compass, "Mission", "What we do today"],
              [Eye, "Vision", "The future we pursue"],
              [HeartHandshake, "Values", "How we work together"],
            ].map(([Icon, title, description]) => {
              const FeatureIcon = Icon as LucideIcon;
              return (
                <div
                  key={String(title)}
                  className="flex items-center gap-4 border-current/10 bg-white/35 px-5 py-5 dark:bg-white/[0.04] sm:border-r sm:last:border-r-0"
                >
                  <FeatureIcon className={`size-5 shrink-0 ${String(title) === "Mission" ? "text-[#0b579e]" : String(title) === "Vision" ? "text-[#d13d34]" : "text-[#78aa3e]"}`} />
                  <div>
                    <p className="text-sm font-black">{String(title)}</p>
                    <p className="mt-0.5 text-xs text-current/45">
                      {String(description)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section
        hidden={!purpose.isVisible}
        id="our-purpose"
        className="relative py-20 lg:py-28"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_8%_15%,var(--pstc-primary-soft),transparent_24%),radial-gradient(circle_at_92%_82%,var(--pstc-secondary-soft),transparent_23%)] opacity-75" />
        <div className="container-pstc relative">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-secondary">
              {purpose.eyebrow}
            </p>
            <h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.035em] sm:text-5xl">
              {purpose.title}{" "}
              <span className="text-primary">
                {purpose.highlightedTitle}
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted-foreground">
              {purpose.description}
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <article className="group relative overflow-hidden rounded-[2rem] border border-border bg-[#062d52] p-8 text-white shadow-[0_24px_70px_rgba(6,45,82,0.2)] sm:p-10">
              <div className="absolute -right-16 -top-16 size-52 rounded-full bg-[var(--pstc-secondary)]/15" />
              <span className="relative grid size-14 place-items-center rounded-2xl bg-[var(--pstc-secondary)] text-[#10210b]">
                <Target className="size-6" />
              </span>
              <p className="relative mt-10 text-xs font-black uppercase tracking-[0.24em] text-[var(--pstc-secondary)]">
                {purpose.missionLabel}
              </p>
              <h3 className="relative mt-4 text-3xl font-black leading-tight sm:text-4xl">
                {purpose.missionText}
              </h3>
            </article>

            <article className="group relative overflow-hidden rounded-[2rem] border border-primary/15 bg-card p-8 shadow-[0_24px_70px_rgba(16,24,40,0.09)] sm:p-10">
              <div className="absolute -right-16 -top-16 size-52 rounded-full bg-primary/8" />
              <span className="relative grid size-14 place-items-center rounded-2xl bg-primary text-primary-foreground shadow-[0_12px_28px_var(--pstc-primary-glow)]">
                <Eye className="size-6" />
              </span>
              <p className="relative mt-10 text-xs font-black uppercase tracking-[0.24em] text-primary">
                {purpose.visionLabel}
              </p>
              <h3 className="relative mt-4 text-3xl font-black leading-tight sm:text-4xl">
                {purpose.visionText}
              </h3>
            </article>
          </div>
        </div>
      </section>

      <section
        hidden={!values.isVisible}
        className="border-y border-border bg-muted/60 py-20 lg:py-28"
      >
        <div className="container-pstc">
          <div className="grid items-end gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.28em] text-secondary">
                {values.eyebrow}
              </p>
              <h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.035em] sm:text-5xl">
                {values.title}
                <span className="block text-primary">
                  {values.highlightedTitle}
                </span>
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-muted-foreground lg:justify-self-end">
              {values.description}
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {(values.items ?? []).map(
              (item: Record<string, string>, index: number) => {
                const Icon = valueIconMap[item.icon] ?? HeartHandshake;
                return (
                  <article
                    key={`${item.number}-${item.title}`}
                    className="pstc-card-3d group relative overflow-hidden rounded-[1.75rem] border border-border bg-card p-7 shadow-[0_16px_45px_rgba(16,24,40,0.07)]"
                  >
                    <div className="absolute right-0 top-0 size-28 rounded-bl-full bg-primary/5 transition duration-500 group-hover:bg-secondary/15" />
                    <div className="relative flex items-start justify-between">
                      <span className="grid size-12 place-items-center rounded-2xl bg-primary text-primary-foreground transition group-hover:bg-secondary group-hover:text-secondary-foreground">
                        <Icon className="size-5" />
                      </span>
                      <span className="text-sm font-black text-muted-foreground/35">
                        {item.number || String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="relative mt-7 text-2xl font-black">
                      {item.title}
                    </h3>
                    <p className="relative mt-3 text-sm leading-7 text-muted-foreground">
                      {item.description}
                    </p>
                  </article>
                );
              },
            )}
          </div>
        </div>
      </section>

      <section hidden={!practice.isVisible} className="py-20 lg:py-28">
        <div className="container-pstc grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative mx-auto w-full max-w-2xl">
            <div className="absolute -left-5 -top-5 h-full w-full rounded-[2rem] border border-primary/20" />
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-primary shadow-[0_30px_80px_rgba(11,87,158,0.2)]">
              <Image
                src={practice.image}
                alt="PSTC values in practice"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#052b4e]/85 via-transparent to-transparent" />
              <p className="absolute bottom-0 left-0 right-0 p-6 text-sm font-black leading-6 text-white sm:p-8">
                {practice.imageCaption}
              </p>
            </div>
          </div>

          <div>
            <p className="text-xs font-black uppercase tracking-[0.28em] text-secondary">
              {practice.eyebrow}
            </p>
            <h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.035em] sm:text-5xl">
              {practice.title}{" "}
              <span className="text-primary">
                {practice.highlightedTitle}
              </span>
            </h2>
            <p className="mt-6 text-base leading-8 text-muted-foreground">
              {practice.description}
            </p>
            <div className="mt-8 space-y-3">
              {(practice.items ?? []).map(
                (item: Record<string, string>, index: number) => (
                  <article
                    key={`${item.title}-${index}`}
                    className="flex gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm"
                  >
                    <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-secondary/15 text-xs font-black text-secondary">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-black">{item.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </article>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      <section
        hidden={!promise.isVisible}
        className="relative overflow-hidden bg-[#062d52] py-20 text-white lg:py-28"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(148,202,81,0.2),transparent_25%),radial-gradient(circle_at_90%_80%,rgba(1,147,205,0.25),transparent_28%)]" />
        <div className="pstc-hero-grid absolute inset-0 opacity-20" />
        <div className="container-pstc relative grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-20">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[var(--pstc-secondary)]">
              {promise.eyebrow}
            </p>
            <h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.035em] sm:text-5xl">
              {promise.title}
              <span className="block text-[var(--pstc-secondary)]">
                {promise.highlightedTitle}
              </span>
            </h2>
            <div className="mt-8 flex gap-4">
              <Quote className="size-8 shrink-0 text-[var(--pstc-secondary)]" />
              <p className="max-w-2xl text-xl font-bold leading-9 text-white/80">
                {promise.quote}
              </p>
            </div>
          </div>
          <div className="grid gap-3">
            {(promise.commitments ?? []).map((commitment: string) => (
              <div
                key={commitment}
                className="flex items-center gap-4 rounded-2xl border border-white/12 bg-white/[0.07] p-4 backdrop-blur"
              >
                <span className="grid size-7 shrink-0 place-items-center rounded-full bg-[var(--pstc-secondary)] text-[#10210b]">
                  <Check className="size-4 stroke-[3]" />
                </span>
                <p className="text-sm font-black text-white/80">
                  {commitment}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section hidden={!cta.isVisible} className="py-16 lg:py-20">
        <div className="container-pstc">
          <div className="relative overflow-hidden rounded-[2rem] bg-primary p-8 text-primary-foreground shadow-[0_28px_80px_var(--pstc-primary-glow)] sm:p-10 lg:p-14">
            <div className="absolute -right-20 -top-20 size-64 rounded-full bg-white/10" />
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
                  className="group inline-flex items-center gap-3 rounded-full bg-[var(--pstc-secondary)] px-6 py-3.5 text-sm font-black text-[#10210b] transition hover:-translate-y-1 hover:bg-white"
                >
                  {cta.primaryCtaLabel}
                  <ArrowRight className="size-4 transition group-hover:translate-x-1" />
                </Link>
                <Link
                  href={cta.secondaryCtaHref}
                  className="inline-flex items-center gap-3 rounded-full border border-white/25 bg-white/10 px-6 py-3.5 text-sm font-black text-white transition hover:-translate-y-1 hover:bg-white hover:text-primary"
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
