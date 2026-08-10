import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  HeartHandshake,
  MessagesSquare,
  Scale,
  ScanSearch,
  ShieldCheck,
  UsersRound,
  type LucideIcon,
} from "lucide-react";
import {
  genderGovernanceDefaultContent,
  mergeCmsContent,
  type CmsPageContent,
} from "@/lib/cms/content-page-defaults";
import {
  getPublishedCmsContent,
  getPublishedCmsPage,
} from "@/lib/services/cms-page.service";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPublishedCmsPage("gender-governance").catch(() => null);
  return {
    title: page?.seoTitle || "Gender & Governance | PSTC",
    description:
      page?.seoDescription ||
      "Explore PSTC's approach to gender equality, inclusive participation, responsive leadership, protection, transparency, and accountability.",
  };
}

const focusIconMap: Record<string, LucideIcon> = {
  HeartHandshake,
  MessagesSquare,
  Scale,
  ScanSearch,
  ShieldCheck,
  UsersRound,
};

const cardTones = [
  "bg-[#9d2033] text-white",
  "bg-[#17324d] text-white",
  "bg-[#f1b24a] text-[#261b0d]",
  "bg-[#d85d3f] text-white",
  "bg-[#e8d9c4] text-[#39291e]",
  "bg-[#56745d] text-white",
];

export default async function GenderGovernancePage() {
  const published = await getPublishedCmsContent<CmsPageContent>(
    "gender-governance",
  ).catch(() => null);
  const content = mergeCmsContent(genderGovernanceDefaultContent, published);
  const sections = content.sections as Record<string, any>;
  const hero = sections.hero;
  const statement = sections.statement;
  const focusAreas = sections.focusAreas;
  const pathway = sections.pathway;
  const governancePillars = sections.governancePillars;
  const commitments = sections.commitments;
  const cta = sections.cta;

  return (
    <main className="overflow-hidden bg-[#f8f2e9] text-[#1a2b3b] dark:bg-background dark:text-foreground">
      <section hidden={!hero.isVisible} className="relative isolate min-h-[760px] overflow-hidden bg-[#132a40] text-white">
        <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(157,32,51,.96)_0%,rgba(157,32,51,.86)_45%,rgba(19,42,64,.3)_70%,rgba(19,42,64,.04)_100%)]" />
        <div className="absolute right-0 top-0 h-full w-full lg:w-[58%]">
          <Image src={hero.image} alt="Gender equality and inclusive governance" fill priority sizes="(max-width:1024px) 100vw,58vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#9d2033] via-[#9d2033]/25 to-[#132a40]/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#132a40]/70 via-transparent to-transparent" />
        </div>
        <div className="absolute -bottom-40 -left-24 size-[34rem] rounded-full border-[80px] border-white/[0.045]" />

        <div className="container-pstc relative z-10 flex min-h-[760px] flex-col py-8 lg:py-12">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs font-bold text-white/60">
            <Link href="/" className="transition hover:text-[#f1b24a]">Home</Link><ChevronRight className="size-3.5" />
            <Link href="/what-we-do" className="transition hover:text-[#f1b24a]">What We Do</Link><ChevronRight className="size-3.5" />
            <Link href="/what-we-do/thematic-areas" className="transition hover:text-[#f1b24a]">Thematic Areas</Link><ChevronRight className="size-3.5" />
            <span className="text-[#f1b24a]">GAG</span>
          </nav>

          <div className="flex flex-1 items-center py-16">
            <div className="max-w-3xl">
              <div className="flex items-center gap-4">
                <span className="grid size-14 place-items-center rounded-full border border-white/25 bg-white/10 text-sm font-black tracking-widest backdrop-blur">{hero.shortCode}</span>
                <p className="text-xs font-black uppercase tracking-[0.28em] text-[#f7d08a]">{hero.eyebrow}</p>
              </div>
              <h1 className="mt-8 text-5xl font-black leading-[0.96] tracking-[-0.055em] sm:text-6xl lg:text-7xl xl:text-[5.2rem]">
                {hero.title}<span className="block text-[#f1b24a]">{hero.highlightedTitle}</span>
              </h1>
              <p className="mt-7 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">{hero.description}</p>
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 border-l-2 border-[#f1b24a] pl-5">
                {(hero.keywords ?? []).map((item: string, index: number) => <span key={`${item}-${index}`} className="text-xs font-black uppercase tracking-[0.2em] text-white/80">{item}</span>)}
              </div>
              <div className="mt-10 flex flex-wrap gap-3">
                <a href={hero.primaryCtaHref} className="group inline-flex items-center gap-3 rounded-full bg-[#f1b24a] px-6 py-3.5 text-sm font-black text-[#271b0d] transition hover:-translate-y-1 hover:bg-white">{hero.primaryCtaLabel}<ArrowRight className="size-4 transition group-hover:translate-x-1" /></a>
                <Link href={hero.secondaryCtaHref} className="inline-flex items-center gap-3 rounded-full border border-white/25 bg-white/10 px-6 py-3.5 text-sm font-black backdrop-blur transition hover:-translate-y-1 hover:bg-white hover:text-[#9d2033]">{hero.secondaryCtaLabel}<ArrowUpRight className="size-4" /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section hidden={!statement.isVisible} className="py-20 lg:py-28">
        <div className="container-pstc grid items-center gap-14 lg:grid-cols-[1.05fr_.95fr] lg:gap-24">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[#9d2033] dark:text-[#e77b8b]">{statement.eyebrow}</p>
            <h2 className="mt-4 text-4xl font-black leading-[1.04] tracking-[-0.045em] sm:text-5xl">{statement.title}<span className="block text-[#9d2033] dark:text-[#e77b8b]">{statement.highlightedTitle}</span></h2>
            <p className="mt-7 max-w-2xl text-base leading-8 text-muted-foreground">{statement.description}</p>
            <blockquote className="mt-9 border-l-4 border-[#f1b24a] pl-6 text-xl font-bold leading-8 text-[#17324d] dark:text-foreground">{statement.quote}</blockquote>
          </div>
          <div className="relative mx-auto w-full max-w-xl pb-8 pr-8">
            <div className="absolute bottom-0 right-0 h-[88%] w-[88%] bg-[#9d2033]" />
            <div className="relative aspect-[4/3] overflow-hidden rounded-tl-[5rem] shadow-[0_30px_80px_rgba(23,50,77,.18)]">
              <Image src={statement.image} alt="Participation and shared decision-making" fill sizes="(max-width:1024px) 100vw,42vw" className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section hidden={!focusAreas.isVisible} id="gender-governance-focus" className="bg-[#e9dfd0] py-20 dark:bg-[#152331] lg:py-28">
        <div className="container-pstc">
          <div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-end lg:gap-20">
            <div><p className="text-xs font-black uppercase tracking-[0.28em] text-[#9d2033] dark:text-[#e77b8b]">{focusAreas.eyebrow}</p><h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.045em] sm:text-5xl">{focusAreas.title}<span className="block text-[#9d2033] dark:text-[#e77b8b]">{focusAreas.highlightedTitle}</span></h2></div>
            <p className="max-w-2xl text-base leading-8 text-muted-foreground lg:justify-self-end">{focusAreas.description}</p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {(focusAreas.items ?? []).map((item: Record<string, string>, index: number) => {
              const Icon = focusIconMap[item.icon] ?? Scale;
              return <article key={`${item.number}-${index}`} className={`group relative min-h-72 overflow-hidden rounded-[1.5rem] p-7 transition hover:-translate-y-1 ${cardTones[index % cardTones.length]}`}><span className="absolute -right-2 -top-6 text-[7rem] font-black leading-none opacity-[0.08]">{item.number}</span><Icon className="size-8" /><h3 className="mt-14 max-w-xs text-2xl font-black leading-tight">{item.title}</h3><p className="mt-4 text-sm leading-7 opacity-75">{item.description}</p></article>;
            })}
          </div>
        </div>
      </section>

      <section hidden={!pathway.isVisible} className="relative overflow-hidden bg-[#132a40] py-20 text-white lg:py-28">
        <div className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_center,rgba(241,178,74,.12),transparent_65%)]" />
        <div className="container-pstc relative">
          <div className="max-w-3xl"><p className="text-xs font-black uppercase tracking-[0.28em] text-[#f1b24a]">{pathway.eyebrow}</p><h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.045em] sm:text-5xl">{pathway.title}<span className="block text-[#e77b8b]">{pathway.highlightedTitle}</span></h2><p className="mt-6 max-w-2xl text-base leading-8 text-white/60">{pathway.description}</p></div>
          <div className="relative mt-14 grid gap-0 lg:grid-cols-5">
            {(pathway.items ?? []).map((item: Record<string, string>, index: number) => <article key={`${item.step}-${index}`} className="group relative border-l border-white/15 py-4 pl-6 pr-5 lg:border-l-0 lg:border-t lg:pb-0 lg:pl-0 lg:pr-8 lg:pt-8"><span className="absolute -left-[9px] top-5 size-4 rounded-full border-4 border-[#132a40] bg-[#f1b24a] lg:-top-[9px] lg:left-0" /><span className="font-mono text-xs font-black text-[#e77b8b]">{item.step}</span><h3 className="mt-3 text-2xl font-black">{item.title}</h3><p className="mt-3 text-sm leading-7 text-white/50">{item.description}</p></article>)}
          </div>
        </div>
      </section>

      <section hidden={!governancePillars.isVisible} className="py-20 lg:py-28">
        <div className="container-pstc">
          <div className="mx-auto max-w-3xl text-center"><p className="text-xs font-black uppercase tracking-[0.28em] text-[#9d2033] dark:text-[#e77b8b]">{governancePillars.eyebrow}</p><h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.045em] sm:text-5xl">{governancePillars.title}<span className="block text-[#9d2033] dark:text-[#e77b8b]">{governancePillars.highlightedTitle}</span></h2><p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted-foreground">{governancePillars.description}</p></div>
          <div className="mt-14 grid border-y border-[#17324d]/15 md:grid-cols-2 lg:grid-cols-4 dark:border-white/15">
            {(governancePillars.items ?? []).map((item: Record<string, string>, index: number) => <article key={`${item.title}-${index}`} className="relative border-b border-[#17324d]/15 p-7 md:border-r lg:border-b-0 dark:border-white/15"><span className="text-[10px] font-black uppercase tracking-[0.23em] text-[#9d2033] dark:text-[#e77b8b]">{item.word}</span><h3 className="mt-5 text-2xl font-black">{item.title}</h3><p className="mt-4 text-sm leading-7 text-muted-foreground">{item.description}</p></article>)}
          </div>
        </div>
      </section>

      <section hidden={!commitments.isVisible} className="border-y border-border bg-card py-20 lg:py-28">
        <div className="container-pstc grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:items-center lg:gap-24">
          <div><p className="text-xs font-black uppercase tracking-[0.28em] text-[#9d2033] dark:text-[#e77b8b]">{commitments.eyebrow}</p><h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.045em] sm:text-5xl">{commitments.title}<span className="block text-[#9d2033] dark:text-[#e77b8b]">{commitments.highlightedTitle}</span></h2><p className="mt-6 text-base leading-8 text-muted-foreground">{commitments.description}</p></div>
          <div className="grid gap-3 sm:grid-cols-2">{(commitments.items ?? []).map((item: string, index: number) => <div key={`${item}-${index}`} className="flex min-h-24 items-center gap-4 border border-border bg-background p-5"><span className="grid size-9 shrink-0 place-items-center rounded-full bg-[#9d2033] text-white"><Check className="size-4 stroke-[3]" /></span><p className="text-sm font-bold leading-6">{item}</p></div>)}</div>
        </div>
      </section>

      <section hidden={!cta.isVisible} className="bg-[#f8f2e9] py-16 dark:bg-background lg:py-20">
        <div className="container-pstc">
          <div className="relative overflow-hidden rounded-[2rem] bg-[#9d2033] p-8 text-white sm:p-10 lg:p-14">
            <div className="absolute -right-20 -top-20 size-72 rounded-full border-[55px] border-white/[0.06]" />
            <div className="relative flex flex-col gap-9 lg:flex-row lg:items-end lg:justify-between"><div className="max-w-3xl"><p className="text-xs font-black uppercase tracking-[0.25em] text-[#f7d08a]">{cta.eyebrow}</p><h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">{cta.title}</h2><p className="mt-5 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">{cta.description}</p></div><div className="flex shrink-0 flex-wrap gap-3"><Link href={cta.primaryCtaHref} className="group inline-flex items-center gap-3 rounded-full bg-[#f1b24a] px-6 py-3.5 text-sm font-black text-[#271b0d] transition hover:-translate-y-1 hover:bg-white">{cta.primaryCtaLabel}<ArrowRight className="size-4 transition group-hover:translate-x-1" /></Link><Link href={cta.secondaryCtaHref} className="inline-flex items-center gap-3 rounded-full border border-white/25 bg-white/10 px-6 py-3.5 text-sm font-black transition hover:-translate-y-1 hover:bg-white hover:text-[#9d2033]">{cta.secondaryCtaLabel}<ArrowUpRight className="size-4" /></Link></div></div>
          </div>
        </div>
      </section>
    </main>
  );
}
