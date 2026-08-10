import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Apple,
  ArrowRight,
  ArrowUpRight,
  Baby,
  BookOpenCheck,
  Check,
  ChevronRight,
  HeartPulse,
  MapPin,
  ShieldCheck,
  Stethoscope,
  type LucideIcon,
} from "lucide-react";
import {
  mergeCmsContent,
  populationHealthNutritionDefaultContent,
  type CmsPageContent,
} from "@/lib/cms/content-page-defaults";
import {
  getPublishedCmsContent,
  getPublishedCmsPage,
} from "@/lib/services/cms-page.service";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPublishedCmsPage("population-health-nutrition").catch(
    () => null,
  );

  return {
    title: page?.seoTitle || "Population Health & Nutrition | PSTC",
    description:
      page?.seoDescription ||
      "Explore PSTC’s inclusive approach to population health, nutrition, SRHR, community-based services, referral, and health capacity.",
  };
}

const focusIconMap: Record<string, LucideIcon> = {
  Apple,
  Baby,
  BookOpenCheck,
  HeartPulse,
  MapPin,
  Stethoscope,
};

export default async function PopulationHealthNutritionPage() {
  const published = await getPublishedCmsContent<CmsPageContent>(
    "population-health-nutrition",
  ).catch(() => null);
  const content = mergeCmsContent(
    populationHealthNutritionDefaultContent,
    published,
  );
  const sections = content.sections as Record<string, any>;
  const hero = sections.hero;
  const overview = sections.overview;
  const focusAreas = sections.focusAreas;
  const approach = sections.approach;
  const delivery = sections.delivery;
  const commitments = sections.commitments;
  const cta = sections.cta;

  return (
    <main className="overflow-hidden bg-background text-foreground">
      <section
        hidden={!hero.isVisible}
        className="relative isolate min-h-[700px] overflow-hidden bg-[#eaf9f7] text-[#083b43] dark:bg-[#062a30] dark:text-white lg:min-h-[790px]"
      >
        <div className="absolute inset-y-0 right-0 w-full lg:w-[52%]">
          <Image
            src={hero.image}
            alt="Population health and nutrition"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 52vw"
            className="object-cover opacity-25 lg:opacity-95"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#eaf9f7] via-[#eaf9f7]/30 to-transparent dark:from-[#062a30]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#063b43]/45 via-transparent to-transparent" />
        </div>
        <div className="absolute left-0 right-0 top-[42%] h-px bg-teal-600/10">
          <svg viewBox="0 0 1200 80" preserveAspectRatio="none" className="absolute -top-10 h-20 w-full text-teal-600/20" aria-hidden>
            <polyline points="0,40 270,40 300,10 330,70 365,25 395,40 1200,40" fill="none" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>

        <div className="container-pstc relative z-10 flex min-h-[700px] flex-col py-8 lg:min-h-[790px] lg:py-12">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs font-bold text-current/50">
            <Link href="/" className="transition hover:text-teal-600">Home</Link>
            <ChevronRight className="size-3.5" />
            <Link href="/what-we-do" className="transition hover:text-teal-600">What We Do</Link>
            <ChevronRight className="size-3.5" />
            <Link href="/what-we-do/thematic-areas" className="transition hover:text-teal-600">Thematic Areas</Link>
            <ChevronRight className="size-3.5" />
            <span className="text-teal-700 dark:text-teal-300">PHN</span>
          </nav>

          <div className="flex flex-1 items-center py-14">
            <div className="max-w-3xl lg:max-w-[58%]">
              <div className="inline-flex items-center gap-3 rounded-full border border-teal-600/15 bg-white/60 px-4 py-2 text-[11px] font-black uppercase tracking-[0.22em] text-teal-700 backdrop-blur dark:bg-white/[0.07] dark:text-teal-300">
                <span className="grid size-7 place-items-center rounded-full bg-teal-600 text-[10px] text-white">{hero.shortCode}</span>
                {hero.eyebrow}
              </div>
              <h1 className="mt-7 text-5xl font-black leading-[0.96] tracking-[-0.055em] sm:text-6xl lg:text-7xl xl:text-[5.25rem]">
                {hero.title}
                <span className="block text-teal-600 dark:text-[#84e1d6]">{hero.highlightedTitle}</span>
              </h1>
              <p className="mt-7 max-w-xl text-base leading-8 text-current/62 sm:text-lg">{hero.description}</p>
              <div className="mt-8 flex flex-wrap gap-2">
                {(hero.tags ?? []).map((tag: string) => (
                  <span key={tag} className="rounded-full border border-teal-600/15 bg-white/55 px-3 py-1.5 text-xs font-black text-teal-700 dark:bg-white/[0.06] dark:text-teal-200">{tag}</span>
                ))}
              </div>
              <div className="mt-9 flex flex-wrap gap-3">
                <a href={hero.primaryCtaHref} className="group inline-flex items-center gap-3 rounded-full bg-teal-600 px-6 py-3.5 text-sm font-black text-white shadow-[0_16px_40px_rgba(13,148,136,0.2)] transition hover:-translate-y-1 hover:bg-[#d13d34]">
                  {hero.primaryCtaLabel}<HeartPulse className="size-4" />
                </a>
                <Link href={hero.secondaryCtaHref} className="inline-flex items-center gap-3 rounded-full border border-teal-600/20 bg-white/60 px-6 py-3.5 text-sm font-black backdrop-blur transition hover:-translate-y-1 hover:border-teal-600 hover:text-teal-700 dark:bg-white/[0.06]">
                  {hero.secondaryCtaLabel}<ArrowUpRight className="size-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section hidden={!overview.isVisible} className="py-20 lg:py-28">
        <div className="container-pstc grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-24">
          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -left-5 -top-5 h-full w-full rounded-[2.5rem] border border-teal-500/25" />
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2.5rem] rounded-tr-[7rem] shadow-[0_30px_80px_rgba(13,148,136,0.15)]">
              <Image src={overview.image} alt="Community health services" fill sizes="(max-width:1024px) 100vw,48vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#063b43]/80 via-transparent to-transparent" />
              <p className="absolute bottom-0 left-0 right-0 p-7 text-sm font-black leading-6 text-white sm:p-9">{overview.imageCaption}</p>
            </div>
          </div>
          <div>
            <p className="text-xs font-black uppercase tracking-[0.28em] text-teal-600">{overview.eyebrow}</p>
            <h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.04em] sm:text-5xl">{overview.title}<span className="block text-primary">{overview.highlightedTitle}</span></h2>
            <p className="mt-6 text-base leading-8 text-muted-foreground">{overview.description}</p>
            <div className="mt-8 space-y-3">
              {(overview.items ?? []).map((item: Record<string, string>, index: number) => (
                <article key={`${item.title}-${index}`} className="flex gap-4 rounded-2xl border border-border bg-card p-4 shadow-sm">
                  <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-teal-500/10 text-xs font-black text-teal-600">{String(index + 1).padStart(2, "0")}</span>
                  <div><h3 className="font-black">{item.title}</h3><p className="mt-1 text-sm leading-6 text-muted-foreground">{item.description}</p></div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section hidden={!focusAreas.isVisible} id="phn-approach" className="relative overflow-hidden bg-[#063b43] py-20 text-white lg:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(132,225,214,0.15),transparent_25%),radial-gradient(circle_at_90%_80%,rgba(148,202,81,0.13),transparent_25%)]" />
        <div className="container-pstc relative">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end lg:gap-20">
            <div><p className="text-xs font-black uppercase tracking-[0.28em] text-[#84e1d6]">{focusAreas.eyebrow}</p><h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.04em] sm:text-5xl">{focusAreas.title}<span className="block text-[#b9ec7a]">{focusAreas.highlightedTitle}</span></h2></div>
            <p className="max-w-2xl text-base leading-8 text-white/58 lg:justify-self-end">{focusAreas.description}</p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {(focusAreas.items ?? []).map((item: Record<string, string>, index: number) => {
              const Icon = focusIconMap[item.icon] ?? HeartPulse;
              return <article key={`${item.number}-${item.title}-${index}`} className="group rounded-[1.7rem] border border-white/10 bg-white/[0.06] p-6 backdrop-blur transition hover:-translate-y-1 hover:border-[#84e1d6]/35 hover:bg-white/[0.09]">
                <div className="flex items-center justify-between"><span className="grid size-12 place-items-center rounded-2xl bg-[#84e1d6]/12 text-[#84e1d6] transition group-hover:bg-[#84e1d6] group-hover:text-[#063b43]"><Icon className="size-5" /></span><span className="font-mono text-xs font-black text-white/25">{item.number}</span></div>
                <h3 className="mt-6 text-xl font-black">{item.title}</h3><p className="mt-3 text-sm leading-7 text-white/52">{item.description}</p>
              </article>;
            })}
          </div>
        </div>
      </section>

      <section hidden={!approach.isVisible} className="bg-muted/45 py-20 lg:py-28">
        <div className="container-pstc">
          <div className="mx-auto max-w-3xl text-center"><p className="text-xs font-black uppercase tracking-[0.28em] text-teal-600">{approach.eyebrow}</p><h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.04em] sm:text-5xl">{approach.title} <span className="text-primary">{approach.highlightedTitle}</span></h2><p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted-foreground">{approach.description}</p></div>
          <div className="relative mt-14 grid gap-4 lg:grid-cols-5">
            <div className="absolute left-[8%] right-[8%] top-8 hidden h-px bg-gradient-to-r from-teal-500 via-primary to-lime-500 lg:block" />
            {(approach.items ?? []).map((item: Record<string, string>, index: number) => (
              <article key={`${item.step}-${index}`} className="relative rounded-[1.5rem] border border-border bg-card p-5 shadow-sm">
                <span className="relative grid size-14 place-items-center rounded-full border-4 border-background bg-teal-600 font-mono text-sm font-black text-white shadow-lg">{item.step}</span>
                <h3 className="mt-6 text-lg font-black">{item.title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section hidden={!delivery.isVisible} className="py-20 lg:py-28">
        <div className="container-pstc">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end lg:gap-20"><div><p className="text-xs font-black uppercase tracking-[0.28em] text-teal-600">{delivery.eyebrow}</p><h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.04em] sm:text-5xl">{delivery.title}<span className="block text-primary">{delivery.highlightedTitle}</span></h2></div><p className="max-w-2xl text-base leading-8 text-muted-foreground lg:justify-self-end">{delivery.description}</p></div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {(delivery.items ?? []).map((item: Record<string, string>, index: number) => (
              <article key={`${item.title}-${index}`} className="group overflow-hidden rounded-[1.7rem] border border-border bg-card shadow-[0_18px_50px_rgba(16,24,40,0.08)]">
                <div className="relative aspect-[16/10] overflow-hidden"><Image src={item.image} alt={item.title} fill sizes="(max-width:1024px) 100vw,33vw" className="object-cover transition duration-700 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-[#063b43]/60 via-transparent to-transparent" /></div>
                <div className="p-6"><h3 className="text-xl font-black">{item.title}</h3><p className="mt-3 text-sm leading-7 text-muted-foreground">{item.description}</p><Link href={item.href} className="mt-6 inline-flex items-center gap-2 text-sm font-black text-teal-600 transition group-hover:text-primary">{item.linkLabel}<ArrowRight className="size-4 transition group-hover:translate-x-1" /></Link></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section hidden={!commitments.isVisible} className="border-y border-border bg-[#eaf9f7] py-20 dark:bg-[#082f35] lg:py-28">
        <div className="container-pstc grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
          <div><p className="text-xs font-black uppercase tracking-[0.28em] text-teal-600 dark:text-teal-300">{commitments.eyebrow}</p><h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.04em] sm:text-5xl">{commitments.title}<span className="block text-primary dark:text-[#b9ec7a]">{commitments.highlightedTitle}</span></h2><p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground dark:text-white/55">{commitments.description}</p></div>
          <div className="grid gap-3 sm:grid-cols-2">{(commitments.items ?? []).map((item: string) => <div key={item} className="flex items-center gap-3 rounded-2xl border border-teal-600/10 bg-background p-4 shadow-sm"><span className="grid size-7 shrink-0 place-items-center rounded-full bg-teal-500/12 text-teal-600"><Check className="size-4 stroke-[3]" /></span><p className="text-sm font-black">{item}</p></div>)}</div>
        </div>
      </section>

      <section hidden={!cta.isVisible} className="py-16 lg:py-20">
        <div className="container-pstc"><div className="relative overflow-hidden rounded-[2rem] bg-teal-700 p-8 text-white shadow-[0_28px_80px_rgba(13,148,136,0.22)] sm:p-10 lg:p-14"><div className="absolute -right-20 -top-20 size-64 rounded-full bg-[#84e1d6]/12" /><ShieldCheck className="absolute bottom-8 right-10 size-16 text-white/10" /><div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"><div className="max-w-3xl"><p className="text-xs font-black uppercase tracking-[0.25em] text-[#b9ec7a]">{cta.eyebrow}</p><h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">{cta.title}</h2><p className="mt-5 max-w-2xl text-sm leading-7 text-white/68 sm:text-base">{cta.description}</p></div><div className="flex shrink-0 flex-wrap gap-3"><Link href={cta.primaryCtaHref} className="group inline-flex items-center gap-3 rounded-full bg-[#94ca51] px-6 py-3.5 text-sm font-black text-[#10210b] transition hover:-translate-y-1 hover:bg-white">{cta.primaryCtaLabel}<ArrowRight className="size-4 transition group-hover:translate-x-1" /></Link><Link href={cta.secondaryCtaHref} className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/[0.08] px-6 py-3.5 text-sm font-black transition hover:-translate-y-1 hover:bg-white hover:text-teal-700">{cta.secondaryCtaLabel}<ArrowUpRight className="size-4" /></Link></div></div></div></div>
      </section>
    </main>
  );
}
