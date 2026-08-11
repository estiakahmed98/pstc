import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpenCheck,
  ChevronRight,
  ClipboardCheck,
  HandHeart,
  Network,
  RadioTower,
  RefreshCw,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import {
  mergeCmsContent,
  sprintDefaultContent,
  type CmsPageContent,
} from "@/lib/cms/content-page-defaults";
import {
  getPublishedCmsContent,
  getPublishedCmsPage,
} from "@/lib/services/cms-page.service";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPublishedCmsPage("sprint").catch(() => null);
  return {
    title: page?.seoTitle || "SPRINT Preparedness & Response Project | PSTC",
    description:
      page?.seoDescription ||
      "Explore SPRINT, PSTC's preparedness and response project for coordinated, people-centred action in crisis contexts.",
  };
}

const cycleIcons: Record<string, LucideIcon> = {
  BookOpenCheck,
  ClipboardCheck,
  HandHeart,
  Network,
  RadioTower,
  RefreshCw,
};

const cycleColors = ["#ffcf4d", "#63d3c0", "#ff755f", "#86a8ef", "#b697ee", "#8ecf79"];

export default async function SprintPage() {
  const published = await getPublishedCmsContent<CmsPageContent>("sprint").catch(
    () => null,
  );
  const content = mergeCmsContent(sprintDefaultContent, published);
  const sections = content.sections as Record<string, any>;
  const hero = sections.hero;
  const brief = sections.brief;
  const cycle = sections.cycle;
  const pillars = sections.pillars;
  const principles = sections.principles;
  const related = sections.related;
  const cta = sections.cta;

  return (
    <main className="overflow-hidden bg-[#f7f2e7] text-[#192c3b] dark:bg-background dark:text-foreground">
      <section hidden={!hero.isVisible} className="relative min-h-[790px] overflow-hidden bg-[#102d3d] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(255,207,77,.22),transparent_27%),radial-gradient(circle_at_85%_80%,rgba(99,211,192,.18),transparent_30%)]" />
        <div className="absolute inset-0 opacity-[.05] [background-image:linear-gradient(rgba(255,255,255,.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.7)_1px,transparent_1px)] [background-size:42px_42px]" />
        <div className="container-pstc relative z-10 flex min-h-[790px] flex-col py-8 lg:py-12">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs font-bold text-white/55"><Link href="/" className="transition hover:text-[#ffcf4d]">Home</Link><ChevronRight className="size-3.5" /><Link href="/what-we-do" className="transition hover:text-[#ffcf4d]">What We Do</Link><ChevronRight className="size-3.5" /><Link href="/what-we-do/projects" className="transition hover:text-[#ffcf4d]">Projects</Link><ChevronRight className="size-3.5" /><span className="text-[#ffcf4d]">SPRINT</span></nav>
          <div className="grid flex-1 items-center gap-14 py-14 lg:grid-cols-[1.02fr_.98fr] lg:gap-20">
            <div><div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[.07] px-4 py-2 text-[10px] font-black uppercase tracking-[.24em] backdrop-blur"><RadioTower className="size-4 text-[#63d3c0]" />{hero.eyebrow}</div><p className="mt-7 font-mono text-sm font-black tracking-[.45em] text-[#63d3c0]">{hero.shortCode}</p><h1 className="mt-4 text-5xl font-black leading-[.93] tracking-[-.058em] sm:text-6xl lg:text-7xl xl:text-[5rem]">{hero.title}<span className="mt-3 block text-[#ffcf4d]">{hero.highlightedTitle}</span></h1><p className="mt-7 max-w-2xl text-base leading-8 text-white/62 sm:text-lg">{hero.description}</p><div className="mt-9 flex flex-wrap gap-3"><a href={hero.primaryCtaHref} className="group inline-flex items-center gap-3 rounded-full bg-[#ff755f] px-6 py-3.5 text-sm font-black transition hover:-translate-y-1 hover:bg-[#ffcf4d] hover:text-[#192c3b]">{hero.primaryCtaLabel}<ArrowRight className="size-4 transition group-hover:translate-x-1" /></a><Link href={hero.secondaryCtaHref} className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/[.07] px-6 py-3.5 text-sm font-black backdrop-blur transition hover:-translate-y-1 hover:bg-[#63d3c0] hover:text-[#192c3b]">{hero.secondaryCtaLabel}<ArrowUpRight className="size-4" /></Link></div></div>
            <div className="relative mx-auto h-[530px] w-full max-w-lg"><div className="absolute inset-x-[4%] top-[3%] h-[82%] rotate-2 overflow-hidden rounded-[2.4rem] border-4 border-white/90 shadow-2xl"><Image src={hero.image} alt="SPRINT preparedness and response" fill priority sizes="(max-width:1024px) 92vw,38vw" className="object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-[#102d3d]/65 via-transparent to-transparent" /></div><div className="absolute bottom-0 left-0 right-0 grid overflow-hidden rounded-2xl border border-white/15 bg-[#173c50]/95 text-white shadow-2xl backdrop-blur sm:grid-cols-3">{[[hero.statusLabel, hero.statusValue], [hero.placeLabel, hero.placeValue], [hero.themeLabel, hero.themeValue]].map(([label, value], index) => <div key={label} className={`p-4 ${index ? "sm:border-l sm:border-white/12" : ""}`}><p className="text-[8px] font-black uppercase tracking-[.17em] text-[#63d3c0]">{label}</p><p className="mt-1 text-xs font-black leading-5">{value}</p></div>)}</div><span className="absolute -right-2 top-0 grid size-24 rotate-6 place-items-center rounded-full bg-[#ffcf4d] text-center text-[10px] font-black uppercase tracking-[.14em] text-[#192c3b]">Ready<br />together</span></div>
          </div>
        </div>
      </section>

      <section hidden={!brief.isVisible} className="py-20 lg:py-28"><div className="container-pstc grid items-center gap-14 lg:grid-cols-[.9fr_1.1fr] lg:gap-24"><div className="relative mx-auto w-full max-w-xl pb-7 pr-7"><div className="absolute bottom-0 right-0 h-[88%] w-[88%] rounded-[2.2rem] bg-[#63d3c0]" /><div className="relative aspect-[4/3] overflow-hidden rounded-[2.2rem] shadow-[0_30px_80px_rgba(16,45,61,.18)]"><Image src={brief.image} alt="Preparedness and coordinated response" fill sizes="(max-width:1024px) 100vw,42vw" className="object-cover" /></div></div><div><p className="text-xs font-black uppercase tracking-[.28em] text-[#177f85] dark:text-[#63d3c0]">{brief.eyebrow}</p><h2 className="mt-4 text-4xl font-black leading-tight tracking-[-.045em] sm:text-5xl">{brief.title}<span className="block text-[#dc5947] dark:text-[#ff8776]">{brief.highlightedTitle}</span></h2><p className="mt-6 text-base leading-8 text-muted-foreground">{brief.description}</p><blockquote className="mt-8 border-l-4 border-[#ffcf4d] pl-6 text-xl font-black leading-8">{brief.statement}</blockquote><div className="mt-8 grid gap-2 sm:grid-cols-2">{(brief.items ?? []).map((item: string, index: number) => <div key={`${item}-${index}`} className="flex items-center gap-3 rounded-xl bg-card p-3"><span className="size-2 rounded-full bg-[#ff755f]" /><p className="text-xs font-black">{item}</p></div>)}</div></div></div></section>

      <section hidden={!cycle.isVisible} id="sprint-cycle" className="relative overflow-hidden bg-[#102d3d] py-20 text-white lg:py-28"><div className="absolute inset-0 opacity-[.06] [background-image:radial-gradient(white_1.2px,transparent_1.2px)] [background-size:25px_25px]" /><div className="container-pstc relative"><div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end lg:gap-20"><div><p className="text-xs font-black uppercase tracking-[.28em] text-[#63d3c0]">{cycle.eyebrow}</p><h2 className="mt-4 text-4xl font-black leading-tight tracking-[-.045em] sm:text-5xl">{cycle.title}<span className="block text-[#ffcf4d]">{cycle.highlightedTitle}</span></h2></div><p className="max-w-2xl text-base leading-8 text-white/55 lg:justify-self-end">{cycle.description}</p></div><div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{(cycle.items ?? []).map((item: Record<string, string>, index: number) => { const Icon = cycleIcons[item.icon] ?? RadioTower; return <article key={`${item.number}-${index}`} className="group relative overflow-hidden rounded-[1.7rem] border border-white/10 bg-white/[.06] p-7 backdrop-blur"><span className="absolute right-4 top-2 text-7xl font-black text-white/[.04]">{item.number}</span><span className="grid size-12 place-items-center rounded-full text-[#192c3b] transition group-hover:rotate-6" style={{ backgroundColor: cycleColors[index % cycleColors.length] }}><Icon className="size-5" /></span><h3 className="mt-7 text-2xl font-black">{item.title}</h3><p className="mt-3 text-sm leading-7 text-white/48">{item.description}</p></article>; })}</div></div></section>

      <section hidden={!pillars.isVisible} className="py-20 lg:py-28"><div className="container-pstc"><div className="max-w-3xl"><p className="text-xs font-black uppercase tracking-[.28em] text-[#177f85] dark:text-[#63d3c0]">{pillars.eyebrow}</p><h2 className="mt-4 text-4xl font-black leading-tight tracking-[-.045em] sm:text-5xl">{pillars.title}<span className="block text-[#dc5947] dark:text-[#ff8776]">{pillars.highlightedTitle}</span></h2><p className="mt-6 text-base leading-8 text-muted-foreground">{pillars.description}</p></div><div className="mt-12 grid gap-px overflow-hidden rounded-[2rem] bg-[#192c3b]/15 md:grid-cols-2 lg:grid-cols-4 dark:bg-white/15">{(pillars.items ?? []).map((item: Record<string, string>, index: number) => <article key={`${item.code}-${index}`} className="bg-card p-7"><span className="font-mono text-[10px] font-black text-[#dc5947] dark:text-[#ff8776]">{item.code}</span><h3 className="mt-8 text-2xl font-black">{item.title}</h3><p className="mt-4 text-sm leading-7 text-muted-foreground">{item.description}</p><span className="mt-8 block h-1 w-14" style={{ backgroundColor: cycleColors[index % cycleColors.length] }} /></article>)}</div></div></section>

      <section hidden={!principles.isVisible} className="border-y border-border bg-card py-20 lg:py-28"><div className="container-pstc grid gap-12 lg:grid-cols-[.88fr_1.12fr] lg:items-center lg:gap-24"><div><p className="text-xs font-black uppercase tracking-[.28em] text-[#177f85] dark:text-[#63d3c0]">{principles.eyebrow}</p><h2 className="mt-4 text-4xl font-black leading-tight tracking-[-.045em] sm:text-5xl">{principles.title}<span className="block text-[#dc5947] dark:text-[#ff8776]">{principles.highlightedTitle}</span></h2><p className="mt-6 text-base leading-8 text-muted-foreground">{principles.description}</p></div><div className="grid gap-3 sm:grid-cols-2">{(principles.items ?? []).map((item: string, index: number) => <div key={`${item}-${index}`} className="flex min-h-24 items-center gap-4 rounded-2xl border border-border bg-background p-5"><span className="grid size-10 shrink-0 place-items-center rounded-full bg-[#63d3c0]/20 text-[#177f85] dark:text-[#63d3c0]"><ShieldCheck className="size-5" /></span><p className="text-sm font-bold leading-6">{item}</p></div>)}</div></div></section>

      <section hidden={!related.isVisible} className="py-20 lg:py-28"><div className="container-pstc"><div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-end lg:gap-20"><div><p className="text-xs font-black uppercase tracking-[.28em] text-[#177f85] dark:text-[#63d3c0]">{related.eyebrow}</p><h2 className="mt-4 text-4xl font-black leading-tight tracking-[-.045em] sm:text-5xl">{related.title}<span className="block text-[#dc5947] dark:text-[#ff8776]">{related.highlightedTitle}</span></h2></div><p className="max-w-2xl text-base leading-8 text-muted-foreground lg:justify-self-end">{related.description}</p></div><div className="mt-12 grid gap-4 lg:grid-cols-3">{(related.items ?? []).map((item: Record<string, string>, index: number) => <article key={`${item.title}-${index}`} className="group flex min-h-72 flex-col rounded-[1.7rem] border border-border bg-card p-7"><span className="text-[10px] font-black uppercase tracking-[.2em] text-[#dc5947] dark:text-[#ff8776]">{item.tag}</span><h3 className="mt-6 text-2xl font-black">{item.title}</h3><p className="mt-4 text-sm leading-7 text-muted-foreground">{item.description}</p><Link href={item.href} className="mt-auto inline-flex items-center gap-2 pt-7 text-sm font-black text-[#177f85] dark:text-[#63d3c0]">{item.linkLabel}<ArrowRight className="size-4 transition group-hover:translate-x-1" /></Link></article>)}</div></div></section>

      <section hidden={!cta.isVisible} className="pb-20"><div className="container-pstc"><div className="relative overflow-hidden rounded-[2rem] bg-[#ff755f] p-8 text-white sm:p-10 lg:p-14"><RadioTower className="absolute -bottom-7 right-8 size-48 text-white/[.1]" /><div className="relative flex flex-col gap-9 lg:flex-row lg:items-end lg:justify-between"><div className="max-w-3xl"><p className="text-xs font-black uppercase tracking-[.25em] text-[#192c3b]">{cta.eyebrow}</p><h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">{cta.title}</h2><p className="mt-5 max-w-2xl text-sm leading-7 text-white/78 sm:text-base">{cta.description}</p></div><div className="flex shrink-0 flex-wrap gap-3"><Link href={cta.primaryCtaHref} className="group inline-flex items-center gap-3 rounded-full bg-[#102d3d] px-6 py-3.5 text-sm font-black text-white transition hover:-translate-y-1 hover:bg-[#ffcf4d] hover:text-[#192c3b]">{cta.primaryCtaLabel}<ArrowRight className="size-4 transition group-hover:translate-x-1" /></Link><Link href={cta.secondaryCtaHref} className="inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-black transition hover:-translate-y-1 hover:bg-white hover:text-[#dc5947]">{cta.secondaryCtaLabel}<ArrowUpRight className="size-4" /></Link></div></div></div></div></section>
    </main>
  );
}
