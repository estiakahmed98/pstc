import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  CloudSun,
  Droplets,
  Network,
  ShieldCheck,
  Sprout,
  UsersRound,
  type LucideIcon,
} from "lucide-react";
import {
  climateChangeAdaptationDefaultContent,
  mergeCmsContent,
  type CmsPageContent,
} from "@/lib/cms/content-page-defaults";
import {
  getPublishedCmsContent,
  getPublishedCmsPage,
} from "@/lib/services/cms-page.service";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPublishedCmsPage("climate-change-adaptation").catch(
    () => null,
  );
  return {
    title: page?.seoTitle || "Climate Change Adaptation | PSTC",
    description:
      page?.seoDescription ||
      "Explore PSTC's community-centered approach to climate risk, preparedness, resilient services, inclusive adaptation, learning, and partnership.",
  };
}

const priorityIconMap: Record<string, LucideIcon> = {
  CloudSun,
  Droplets,
  Network,
  ShieldCheck,
  Sprout,
  UsersRound,
};

const priorityTones = [
  "bg-[#dce8b3] text-[#18382b]",
  "bg-[#cce9ed] text-[#123d46]",
  "bg-[#f4cb78] text-[#3c2d0b]",
  "bg-[#d9d2ef] text-[#30264f]",
  "bg-[#c9dfc5] text-[#173b27]",
  "bg-[#f0d6bf] text-[#4b2b18]",
];

export default async function ClimateChangeAdaptationPage() {
  const published = await getPublishedCmsContent<CmsPageContent>(
    "climate-change-adaptation",
  ).catch(() => null);
  const content = mergeCmsContent(
    climateChangeAdaptationDefaultContent,
    published,
  );
  const sections = content.sections as Record<string, any>;
  const hero = sections.hero;
  const context = sections.context;
  const priorities = sections.priorities;
  const cycle = sections.cycle;
  const actionAreas = sections.actionAreas;
  const commitments = sections.commitments;
  const cta = sections.cta;

  return (
    <main className="overflow-hidden bg-[#f3f0e8] text-[#173429] dark:bg-background dark:text-foreground">
      <section hidden={!hero.isVisible} className="relative min-h-[780px] overflow-hidden bg-[#173f31] text-white">
        <div className="absolute right-0 top-0 h-[46%] w-full sm:h-[54%] lg:h-full lg:w-[54%]">
          <Image src={hero.image} alt="Climate change adaptation and community resilience" fill priority sizes="(max-width:1024px) 100vw,54vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#173f31] via-[#173f31]/15 to-transparent lg:bg-gradient-to-r lg:from-[#173f31] lg:via-[#173f31]/15 lg:to-transparent" />
        </div>
        <div className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(circle_at_center,white_1.2px,transparent_1.2px)] [background-size:28px_28px]" />
        <div className="absolute -bottom-36 -left-36 size-[34rem] rounded-full border-[72px] border-[#a9c65b]/10" />

        <div className="container-pstc relative z-10 flex min-h-[780px] flex-col py-8 lg:py-12">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs font-bold text-white/55">
            <Link href="/" className="transition hover:text-[#d5e58c]">Home</Link><ChevronRight className="size-3.5" />
            <Link href="/what-we-do" className="transition hover:text-[#d5e58c]">What We Do</Link><ChevronRight className="size-3.5" />
            <Link href="/what-we-do/thematic-areas" className="transition hover:text-[#d5e58c]">Thematic Areas</Link><ChevronRight className="size-3.5" />
            <span className="text-[#d5e58c]">CCA</span>
          </nav>

          <div className="flex flex-1 items-end pb-12 pt-[20rem] sm:pt-[25rem] lg:items-center lg:pb-0 lg:pt-10">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur">
                <span className="grid size-8 place-items-center rounded-full bg-[#d5e58c] text-[10px] font-black text-[#173429]">{hero.shortCode}</span>
                <span className="text-[11px] font-black uppercase tracking-[0.24em]">{hero.eyebrow}</span>
              </div>
              <h1 className="mt-7 text-5xl font-black leading-[.94] tracking-[-0.055em] sm:text-6xl lg:text-7xl xl:text-[5rem]">{hero.title}<span className="block text-[#d5e58c]">{hero.highlightedTitle}</span></h1>
              <p className="mt-7 max-w-xl text-base leading-8 text-white/68 sm:text-lg">{hero.description}</p>
              <div className="mt-8 grid max-w-xl grid-cols-2 gap-px overflow-hidden rounded-2xl bg-white/15 sm:grid-cols-4">
                {(hero.signals ?? []).map((signal: string, index: number) => <span key={`${signal}-${index}`} className="bg-[#173f31]/80 px-4 py-3 text-center text-[10px] font-black uppercase tracking-[0.18em] backdrop-blur">{signal}</span>)}
              </div>
              <div className="mt-9 flex flex-wrap gap-3">
                <a href={hero.primaryCtaHref} className="group inline-flex items-center gap-3 rounded-full bg-[#d5e58c] px-6 py-3.5 text-sm font-black text-[#173429] transition hover:-translate-y-1 hover:bg-white">{hero.primaryCtaLabel}<ArrowDown className="size-4 transition group-hover:translate-y-1" /></a>
                <Link href={hero.secondaryCtaHref} className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-black backdrop-blur transition hover:-translate-y-1 hover:bg-[#2c6951]">{hero.secondaryCtaLabel}<ArrowUpRight className="size-4" /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section hidden={!context.isVisible} className="py-20 lg:py-28">
        <div className="container-pstc grid items-center gap-14 lg:grid-cols-[.88fr_1.12fr] lg:gap-24">
          <div className="relative mx-auto w-full max-w-xl">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[48%_48%_1.5rem_1.5rem] shadow-[0_35px_90px_rgba(23,63,49,.18)]">
              <Image src={context.image} alt="Local climate context" fill sizes="(max-width:1024px) 100vw,40vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#173f31]/65 via-transparent to-transparent" />
            </div>
            <p className="absolute -bottom-7 -right-3 max-w-xs rounded-2xl bg-[#f1b94c] p-5 text-sm font-bold leading-6 text-[#332708] shadow-xl sm:-right-8">{context.note}</p>
          </div>
          <div className="pt-6 lg:pt-0">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[#397058] dark:text-[#8fc6a9]">{context.eyebrow}</p>
            <h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.045em] sm:text-5xl">{context.title}<span className="block text-[#397058] dark:text-[#8fc6a9]">{context.highlightedTitle}</span></h2>
            <p className="mt-6 text-base leading-8 text-muted-foreground">{context.description}</p>
            <div className="mt-8 grid gap-x-5 gap-y-3 sm:grid-cols-2">{(context.items ?? []).map((item: string, index: number) => <div key={`${item}-${index}`} className="flex items-center gap-3 border-b border-[#173f31]/15 py-3 dark:border-white/15"><span className="size-2.5 rounded-full bg-[#8daa43]" /><p className="text-sm font-black">{item}</p></div>)}</div>
          </div>
        </div>
      </section>

      <section hidden={!priorities.isVisible} id="cca-priorities" className="bg-[#dfe6da] py-20 dark:bg-[#132a23] lg:py-28">
        <div className="container-pstc">
          <div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-end lg:gap-20"><div><p className="text-xs font-black uppercase tracking-[0.28em] text-[#397058] dark:text-[#8fc6a9]">{priorities.eyebrow}</p><h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.045em] sm:text-5xl">{priorities.title}<span className="block text-[#397058] dark:text-[#8fc6a9]">{priorities.highlightedTitle}</span></h2></div><p className="max-w-2xl text-base leading-8 text-muted-foreground lg:justify-self-end">{priorities.description}</p></div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {(priorities.items ?? []).map((item: Record<string, string>, index: number) => {
              const Icon = priorityIconMap[item.icon] ?? Sprout;
              return <article key={`${item.number}-${index}`} className="group rounded-[1.8rem] border border-white/45 bg-background p-6 shadow-[0_15px_50px_rgba(23,63,49,.07)] transition hover:-translate-y-1"><div className="flex items-center justify-between"><span className={`grid size-12 place-items-center rounded-2xl ${priorityTones[index % priorityTones.length]}`}><Icon className="size-5" /></span><span className="font-mono text-xs font-black text-[#397058]/55 dark:text-white/40">{item.number}</span></div><h3 className="mt-7 text-xl font-black">{item.title}</h3><p className="mt-3 text-sm leading-7 text-muted-foreground">{item.description}</p></article>;
            })}
          </div>
        </div>
      </section>

      <section hidden={!cycle.isVisible} className="relative overflow-hidden bg-[#173f31] py-20 text-white lg:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(213,229,140,.12),transparent_45%)]" />
        <div className="container-pstc relative">
          <div className="mx-auto max-w-3xl text-center"><p className="text-xs font-black uppercase tracking-[0.28em] text-[#d5e58c]">{cycle.eyebrow}</p><h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.045em] sm:text-5xl">{cycle.title}<span className="block text-[#83cad5]">{cycle.highlightedTitle}</span></h2><p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/58">{cycle.description}</p></div>
          <div className="mt-14 grid gap-4 lg:grid-cols-5">
            {(cycle.items ?? []).map((item: Record<string, string>, index: number) => <article key={`${item.step}-${index}`} className={`relative rounded-[5rem_5rem_1.5rem_1.5rem] border border-white/10 bg-white/[.06] px-5 pb-7 pt-9 text-center backdrop-blur ${index % 2 ? "lg:translate-y-8" : ""}`}><span className="mx-auto grid size-16 place-items-center rounded-full border border-[#d5e58c]/35 bg-[#d5e58c]/10 font-mono text-sm font-black text-[#d5e58c]">{item.step}</span><p className="mt-5 text-[10px] font-black uppercase tracking-[.2em] text-[#83cad5]">{item.verb}</p><h3 className="mt-2 text-lg font-black">{item.title}</h3><p className="mt-3 text-sm leading-6 text-white/48">{item.description}</p></article>)}
          </div>
        </div>
      </section>

      <section hidden={!actionAreas.isVisible} className="py-20 lg:py-28">
        <div className="container-pstc">
          <div className="max-w-3xl"><p className="text-xs font-black uppercase tracking-[0.28em] text-[#397058] dark:text-[#8fc6a9]">{actionAreas.eyebrow}</p><h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.045em] sm:text-5xl">{actionAreas.title}<span className="block text-[#397058] dark:text-[#8fc6a9]">{actionAreas.highlightedTitle}</span></h2><p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground">{actionAreas.description}</p></div>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {(actionAreas.items ?? []).map((item: Record<string, string>, index: number) => <article key={`${item.title}-${index}`} className="group relative overflow-hidden rounded-[1.7rem] border border-[#173f31]/12 bg-card p-7 dark:border-white/10"><span className="absolute right-5 top-4 text-6xl font-black text-[#397058]/[.06]">0{index + 1}</span><span className="inline-flex rounded-full bg-[#dce8b3] px-3 py-1 text-[10px] font-black uppercase tracking-[.18em] text-[#173429]">{item.tag}</span><h3 className="mt-7 text-2xl font-black">{item.title}</h3><p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground">{item.description}</p></article>)}
          </div>
        </div>
      </section>

      <section hidden={!commitments.isVisible} className="border-y border-border bg-card py-20 lg:py-28">
        <div className="container-pstc grid gap-12 lg:grid-cols-[.88fr_1.12fr] lg:items-center lg:gap-24"><div><p className="text-xs font-black uppercase tracking-[0.28em] text-[#397058] dark:text-[#8fc6a9]">{commitments.eyebrow}</p><h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.045em] sm:text-5xl">{commitments.title}<span className="block text-[#397058] dark:text-[#8fc6a9]">{commitments.highlightedTitle}</span></h2><p className="mt-6 text-base leading-8 text-muted-foreground">{commitments.description}</p></div><div className="grid gap-3 sm:grid-cols-2">{(commitments.items ?? []).map((item: string, index: number) => <div key={`${item}-${index}`} className="flex min-h-24 items-center gap-4 rounded-2xl border border-border bg-background p-5"><span className="grid size-9 shrink-0 place-items-center rounded-full bg-[#d5e58c] text-[#173429]"><Check className="size-4 stroke-[3]" /></span><p className="text-sm font-bold leading-6">{item}</p></div>)}</div></div>
      </section>

      <section hidden={!cta.isVisible} className="py-16 lg:py-20">
        <div className="container-pstc"><div className="relative overflow-hidden rounded-[2rem] bg-[#2c6951] p-8 text-white shadow-[0_28px_80px_rgba(23,63,49,.2)] sm:p-10 lg:p-14"><Sprout className="absolute -bottom-8 right-8 size-44 text-white/[.06]" /><div className="relative flex flex-col gap-9 lg:flex-row lg:items-end lg:justify-between"><div className="max-w-3xl"><p className="text-xs font-black uppercase tracking-[.25em] text-[#d5e58c]">{cta.eyebrow}</p><h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">{cta.title}</h2><p className="mt-5 max-w-2xl text-sm leading-7 text-white/68 sm:text-base">{cta.description}</p></div><div className="flex shrink-0 flex-wrap gap-3"><Link href={cta.primaryCtaHref} className="group inline-flex items-center gap-3 rounded-full bg-[#d5e58c] px-6 py-3.5 text-sm font-black text-[#173429] transition hover:-translate-y-1 hover:bg-white">{cta.primaryCtaLabel}<ArrowRight className="size-4 transition group-hover:translate-x-1" /></Link><Link href={cta.secondaryCtaHref} className="inline-flex items-center gap-3 rounded-full border border-white/25 bg-white/10 px-6 py-3.5 text-sm font-black transition hover:-translate-y-1 hover:bg-white hover:text-[#2c6951]">{cta.secondaryCtaLabel}<ArrowUpRight className="size-4" /></Link></div></div></div></div>
      </section>
    </main>
  );
}
