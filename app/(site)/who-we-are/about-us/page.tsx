import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Building2,
  ChevronRight,
  Globe2,
  GraduationCap,
  Handshake,
  HeartPulse,
  Landmark,
  MessageSquareText,
  ShieldCheck,
  Sparkles,
  UsersRound,
  type LucideIcon,
} from "lucide-react";
import {
  aboutUsDefaultContent,
  mergeCmsContent,
  type CmsPageContent,
} from "@/lib/cms/content-page-defaults";
import {
  getPublishedCmsContent,
  getPublishedCmsPage,
} from "@/lib/services/cms-page.service";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPublishedCmsPage("about-us").catch(() => null);

  return {
    title: page?.seoTitle || "About Us | PSTC",
    description:
      page?.seoDescription ||
      "Learn about PSTC’s FPSTC roots, institutional journey, national registrations, partnerships, and continuing contribution since 1978.",
  };
}

const contributionIconMap: Record<string, LucideIcon> = {
  GraduationCap,
  Handshake,
  HeartPulse,
  MessageSquareText,
  ShieldCheck,
  UsersRound,
};

const credentialIconMap: Record<string, LucideIcon> = {
  BadgeCheck,
  Building2,
  Globe2,
  Landmark,
};

export default async function AboutUsPage() {
  const published = await getPublishedCmsContent<CmsPageContent>(
    "about-us",
  ).catch(() => null);
  const content = mergeCmsContent(aboutUsDefaultContent, published);
  const sections = content.sections as Record<string, any>;
  const hero = sections.hero;
  const identity = sections.identity;
  const story = sections.story;
  const contribution = sections.contribution;
  const credentials = sections.credentials;
  const cta = sections.cta;

  return (
    <main className="overflow-hidden bg-background text-foreground">
      <section
        hidden={!hero.isVisible}
        className="relative isolate min-h-[700px] overflow-hidden bg-[#f3efe6] text-[#102337] dark:bg-[#061f35] dark:text-white lg:min-h-[780px]"
      >
        <div className="absolute inset-y-0 right-0 w-full lg:w-[54%]">
          <Image
            src={hero.image}
            alt="About PSTC"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="object-cover object-center opacity-35 dark:opacity-45 lg:opacity-100 dark:lg:opacity-75"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#f3efe6] via-[#f3efe6]/45 to-transparent dark:from-[#061f35] dark:via-[#061f35]/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#061f35]/35 via-transparent to-transparent" />
        </div>
        <div className="absolute -left-20 top-1/4 size-72 rounded-full bg-[#94ca51]/12 blur-3xl" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />

        <div className="container-pstc relative z-10 flex min-h-[700px] flex-col py-8 lg:min-h-[780px] lg:py-12">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-xs font-bold text-current/55"
          >
            <Link href="/" className="transition hover:text-primary">
              Home
            </Link>
            <ChevronRight className="size-3.5" />
            <Link href="/who-we-are" className="transition hover:text-primary">
              Who We Are
            </Link>
            <ChevronRight className="size-3.5" />
            <span className="text-primary dark:text-[#b9ec7a]">About Us</span>
          </nav>

          <div className="flex flex-1 items-center py-14">
            <div className="max-w-4xl lg:max-w-[58%]">
              <p className="flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.26em] text-secondary dark:text-[#b9ec7a]">
                <span className="h-px w-10 bg-current" />
                {hero.eyebrow}
              </p>
              <h1 className="mt-7 text-5xl font-black leading-[0.96] tracking-[-0.05em] sm:text-6xl lg:text-7xl xl:text-[5.25rem]">
                {hero.title}
                <span className="block text-primary dark:text-[#b9ec7a]">
                  {hero.highlightedTitle}
                </span>
              </h1>
              <p className="mt-7 max-w-2xl text-base leading-8 text-current/65 sm:text-lg">
                {hero.description}
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href={hero.primaryCtaHref}
                  className="group inline-flex items-center gap-3 rounded-full bg-primary px-6 py-3.5 text-sm font-black text-primary-foreground transition hover:-translate-y-1 hover:bg-secondary hover:text-secondary-foreground"
                >
                  {hero.primaryCtaLabel}
                  <ArrowRight className="size-4 transition group-hover:translate-x-1" />
                </a>
                <Link
                  href={hero.secondaryCtaHref}
                  className="inline-flex items-center gap-3 rounded-full border border-current/15 bg-background/60 px-6 py-3.5 text-sm font-black backdrop-blur transition hover:-translate-y-1 hover:border-primary/30 hover:text-primary"
                >
                  {hero.secondaryCtaLabel}
                  <ArrowUpRight className="size-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="flex items-end justify-between border-t border-current/10 pt-5">
            <p className="text-[10px] font-black uppercase tracking-[0.22em] text-current/45">
              {hero.sinceLabel}
            </p>
            <p className="font-serif text-6xl font-black leading-none tracking-[-0.06em] text-primary/20 dark:text-[#94ca51]/25 sm:text-8xl">
              {hero.sinceValue}
            </p>
          </div>
        </div>
      </section>

      <section hidden={!identity.isVisible} className="py-20 lg:py-28">
        <div className="container-pstc grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-24">
          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -bottom-5 -right-5 h-full w-full rounded-tl-[5rem] rounded-br-[5rem] border border-secondary/30" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-tl-[5rem] rounded-br-[5rem] bg-primary shadow-[0_30px_90px_rgba(11,87,158,0.18)]">
              <Image
                src={identity.image}
                alt="PSTC institutional journey"
                fill
                sizes="(max-width: 1024px) 100vw, 48vw"
                className="object-cover transition duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#052f51]/85 via-transparent to-transparent" />
              <p className="absolute bottom-0 left-0 right-0 p-7 text-sm font-black leading-6 text-white sm:p-9">
                {identity.imageCaption}
              </p>
            </div>
          </div>

          <div>
            <p className="text-xs font-black uppercase tracking-[0.28em] text-secondary">
              {identity.eyebrow}
            </p>
            <h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.04em] sm:text-5xl">
              {identity.title}
              <span className="block text-primary">
                {identity.highlightedTitle}
              </span>
            </h2>
            <p className="mt-6 text-base leading-8 text-muted-foreground">
              {identity.description}
            </p>

            <dl className="mt-9 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
              {(identity.facts ?? []).map(
                (fact: Record<string, string>, index: number) => (
                  <div
                    key={`${fact.value}-${fact.label}-${index}`}
                    className="bg-card p-5"
                  >
                    <dd className="text-2xl font-black text-primary">
                      {fact.value}
                    </dd>
                    <dt className="mt-1 text-xs font-bold text-muted-foreground">
                      {fact.label}
                    </dt>
                  </div>
                ),
              )}
            </dl>
          </div>
        </div>
      </section>

      <section
        hidden={!story.isVisible}
        id="our-story"
        className="relative overflow-hidden bg-[#082f50] py-20 text-white lg:py-28"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(148,202,81,0.18),transparent_25%),radial-gradient(circle_at_90%_80%,rgba(56,189,248,0.18),transparent_25%)]" />
        <div className="container-pstc relative">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end lg:gap-20">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.28em] text-[#b9ec7a]">
                {story.eyebrow}
              </p>
              <h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.04em] sm:text-5xl">
                {story.title}
                <span className="block text-[#b9ec7a]">
                  {story.highlightedTitle}
                </span>
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-white/60 lg:justify-self-end">
              {story.description}
            </p>
          </div>

          <div className="relative mt-14">
            <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-[#94ca51] via-[#38bdf8] to-transparent lg:left-0 lg:right-0 lg:top-8 lg:h-px lg:w-full" />
            <div className="grid gap-6 pl-14 lg:grid-cols-5 lg:pl-0">
              {(story.items ?? []).map(
                (item: Record<string, string>, index: number) => (
                  <article
                    key={`${item.year}-${item.title}-${index}`}
                    className="relative lg:pt-16"
                  >
                    <span className="absolute -left-[2.65rem] top-2 grid size-5 place-items-center rounded-full border-4 border-[#082f50] bg-[#94ca51] lg:left-0 lg:top-[1.45rem]">
                      <span className="size-1 rounded-full bg-[#082f50]" />
                    </span>
                    <p className="font-serif text-4xl font-black tracking-[-0.05em] text-[#b9ec7a]">
                      {item.year}
                    </p>
                    <h3 className="mt-4 text-lg font-black">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-white/52">
                      {item.description}
                    </p>
                  </article>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      <section
        hidden={!contribution.isVisible}
        className="bg-muted/50 py-20 lg:py-28"
      >
        <div className="container-pstc">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-secondary">
              {contribution.eyebrow}
            </p>
            <h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.04em] sm:text-5xl">
              {contribution.title}{" "}
              <span className="text-primary">
                {contribution.highlightedTitle}
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted-foreground">
              {contribution.description}
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {(contribution.items ?? []).map(
              (item: Record<string, string>, index: number) => {
                const Icon = contributionIconMap[item.icon] ?? HeartPulse;
                return (
                  <article
                    key={`${item.number}-${item.title}-${index}`}
                    className="group relative overflow-hidden rounded-[1.7rem] border border-border bg-card p-7 shadow-[0_14px_45px_rgba(16,24,40,0.07)] transition hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_24px_60px_rgba(11,87,158,0.11)]"
                  >
                    <span className="absolute right-5 top-4 font-serif text-5xl font-black text-primary/7">
                      {item.number}
                    </span>
                    <span className="grid size-12 place-items-center rounded-2xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="size-5" />
                    </span>
                    <h3 className="mt-7 text-xl font-black">{item.title}</h3>
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

      <section hidden={!credentials.isVisible} className="py-20 lg:py-28">
        <div className="container-pstc grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-center lg:gap-20">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.28em] text-secondary">
              {credentials.eyebrow}
            </p>
            <h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.04em] sm:text-5xl">
              {credentials.title}
              <span className="block text-primary">
                {credentials.highlightedTitle}
              </span>
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground">
              {credentials.description}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {(credentials.items ?? []).map(
              (item: Record<string, string>, index: number) => {
                const Icon = credentialIconMap[item.icon] ?? BadgeCheck;
                return (
                  <article
                    key={`${item.title}-${index}`}
                    className="flex items-start gap-4 rounded-[1.5rem] border border-border bg-card p-5 shadow-sm"
                  >
                    <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-secondary/15 text-secondary">
                      <Icon className="size-5" />
                    </span>
                    <div>
                      <h3 className="font-black">{item.title}</h3>
                      <p className="mt-1 text-sm font-bold text-muted-foreground">
                        {item.detail}
                      </p>
                    </div>
                  </article>
                );
              },
            )}
          </div>
        </div>
      </section>

      <section hidden={!cta.isVisible} className="pb-16 lg:pb-20">
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
